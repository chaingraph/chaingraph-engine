import { filter } from 'rxjs/internal/operators/filter'
import { loadReader } from './ship-reader'
import { hasura } from './hasura-client'
import { getInfo, getNationInfo } from './debug-utils'
import { Transactions_Insert_Input, Actions_Insert_Input } from 'generated/graphql'
import omit from 'lodash.omit'
import chunk from 'lodash.chunk'
// import fs from 'fs'

export const startIndexer = async () => {
  console.log('Starting indexer ...')
  const { close$, rows$, blocks$, errors$ } = await loadReader()

  let info = await getInfo()
  let nationInfo = await getNationInfo()

  setInterval(async () => {
    info = await getInfo()
    nationInfo = await getNationInfo()
  }, 250)

  const upsertRows$ = rows$.pipe(filter((row) => Boolean(row.present)))
  const deletedRows$ = rows$.pipe(filter((row) => !Boolean(row.present)))

  console.log('Subscribing to blocks ...')
  blocks$.subscribe(async ({ chain_id, block_num, block_id, actions }) => {
    try {
      const transactions = [...new Set(actions?.map(({ transaction_id }) => transaction_id))]
      const transactionsInsertInput: Transactions_Insert_Input[] = transactions.map((transaction_id) => ({
        chain_id,
        block_num,
        block_id,
        transaction_id,
      }))
      const insertedTransactions = transactions && (await hasura.insert_transaction({ objects: transactionsInsertInput }))

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
        insertedActions = await Promise.all(actionsChunks.map((actionsChunk) => hasura.insert_actions({ objects: actionsChunk })))
      }

      const numberOfInsertedActions =
        insertedActions?.reduce((acc, { data }) => {
          return acc + (data?.insert_actions?.affected_rows || 0)
        }, 0) || 0

      await hasura.update_block_height({ chain_id, block_num, block_id })
      console.log(
        `Indexed block ${block_num}. Nodeos head block ${info.head_block_num}. Nation head block ${nationInfo.head_block_num}. \nInserted transactions ${insertedTransactions?.data?.insert_transactions?.affected_rows}, Inserted actions ${numberOfInsertedActions} in ${insertedActions?.length} chunks,`,
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
    const variables = {
      chain_id: row.chain_id,
      contract: row.code,
      table: row.table,
      scope: row.scope,
      primary_key: row.primary_key,
      data: row.value,
    }
    try {
      hasura.upsert_table_row(variables)
    } catch (error) {
      console.log('======================================')
      console.log('Error updating contract row', variables, error)
      console.log('======================================')
    }
  })

  deletedRows$.subscribe((row) => {
    const variables = {
      chain_id: row.chain_id,
      contract: row.code,
      table: row.table,
      scope: row.scope,
      primary_key: row.primary_key,
    }
    try {
      hasura.delete_table_row(variables)
    } catch (error) {
      console.log('======================================')
      console.log('Error deleting contract row', variables, error)
      console.log('======================================')
    }
  })

  close$.subscribe(() => console.log('connection closed'))

  // log$.subscribe(({ message }) => console.log('ShipReader:', message))
  errors$.subscribe((error) => console.log('ShipReader:', error))
}
