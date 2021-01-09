import { filter } from 'rxjs/internal/operators/filter'
import { loadReader } from './ship-reader'
import { hasura } from './hasura-client'
import { getInfo } from './eosio'
import {
  Transactions_Insert_Input,
  Actions_Insert_Input,
  Balances_Insert_Input,
} from 'generated/graphql'
import omit from 'lodash.omit'
import chunk from 'lodash.chunk'
import { populateTableRows } from './populate-tables'
import { getChainGraphTableRowData } from './table-utils'
import { populateTokens } from './populate-tokens'
import { chaingraph_token_registry } from './whitelists'

export const startIndexer = async () => {
  console.log('Starting indexer ...')

  console.log('Populating db with current state ...')

  // TODO: await
  populateTokens()
  populateTableRows()

  const { close$, rows$, blocks$, errors$ } = await loadReader()

  let info = await getInfo()
  setInterval(async () => {
    info = await getInfo()
  }, 300)

  const upsertRows$ = rows$.pipe(filter((row) => Boolean(row.present)))
  const deletedRows$ = rows$.pipe(filter((row) => !Boolean(row.present)))

  console.log('Subscribing to blocks ...')
  blocks$.subscribe(async ({ chain_id, block_num, block_id, actions }) => {
    try {
      const transactions = [
        ...new Set(actions?.map(({ transaction_id }) => transaction_id)),
      ]
      const transactionsInsertInput: Transactions_Insert_Input[] = transactions.map(
        (transaction_id) => ({
          chain_id,
          block_num,
          block_id,
          transaction_id,
        }),
      )
      const insertedTransactions =
        transactions &&
        (await hasura.insert_transaction({ objects: transactionsInsertInput }))

      let actionsInsertInput: Actions_Insert_Input[]
      let insertedActions: any[] = []

      if (actions && actions.length > 0) {
        // TODO: this loop is not really necessary
        actionsInsertInput = actions.map((action) => {
          const insertAction: Actions_Insert_Input = {
            ...omit(action, ['name', 'account']),
            action_name: action.name,
            contract: action.account,
            chain_id,
          }
          return insertAction
        })

        const actionsChunks = chunk(actionsInsertInput, 100)
        insertedActions = await Promise.all(
          actionsChunks.map((actionsChunk) =>
            hasura.insert_actions({ objects: actionsChunk }),
          ),
        )
      }

      const numberOfInsertedActions =
        insertedActions?.reduce((acc, { data }) => {
          return acc + (data?.insert_actions?.affected_rows || 0)
        }, 0) || 0

      await hasura.update_block_height({ chain_id, block_num, block_id })
      console.log(
        `Indexed block ${block_num}. Nodeos head block ${info.head_block_num}. \nInserted transactions ${insertedTransactions?.data?.insert_transactions?.affected_rows}, Inserted actions ${numberOfInsertedActions} in ${insertedActions?.length} chunks,`,
      )
    } catch (error) {
      console.log('======================================')
      console.log('Error updating database', { chain_id, block_num })
      console.log(error.response.errors)
      // fs.writeFileSync('./errors.json', JSON.stringify(error?.response?.errors, null, 2))
      blocks$.unsubscribe()
      console.log('======================================')
    }
  })

  upsertRows$.subscribe((row) => {
    try {
      if (chaingraph_token_registry.indexOf(row.code) !== -1) {
        const object: Balances_Insert_Input = {
          account: row.scope,
          balance: row.value.balance,
          chain_id: row.chain_id,
          contract: row.code,
        }
        hasura.upsert_balance({ object })
      } else {
        const tableRowData = getChainGraphTableRowData(row)
        hasura.upsert_table_row(tableRowData)
      }
    } catch (error) {
      console.log('======================================')
      console.log('Error updating contract row', row, error)
      console.log('======================================')
    }
  })

  deletedRows$.subscribe((row) => {
    try {
      const tableRowData = getChainGraphTableRowData(row)
      hasura.delete_table_row(tableRowData)
    } catch (error) {
      console.log('======================================')
      console.log('Error deleting contract row', row, error)
      console.log('======================================')
    }
  })

  close$.subscribe(() => console.log('connection closed'))

  // log$.subscribe(({ message }) => console.log('ShipReader:', message))
  errors$.subscribe((error) => console.log('ShipReader:', error))
}
