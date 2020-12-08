import { filter } from 'rxjs/internal/operators/filter'
import { loadReader } from './ship-reader'
import { hasura } from './hasura-client'
import { getInfo, getNationInfo } from './debug-utils'
import { Transactions_Insert_Input, Actions_Insert_Input } from 'generated/graphql'
import omit from 'lodash.omit'
import fs from 'fs'

export const startIndexer = async () => {
  console.log('Starting indexer ...')
  const { close$, rows$, blocks$, log$, errors$ } = await loadReader()

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
      let insertedActions

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

        console.log({ actions: actionsInsertInput.length, block_num })
        insertedActions = await hasura.insert_actions({ objects: actionsInsertInput })
      } else {
        console.log('No actions!')
      }

      await hasura.update_block_height({ chain_id, block_num, block_id })
      console.log(
        `Indexed block ${block_num}. Nodeos head block ${info.head_block_num}. Nation head block ${nationInfo.head_block_num}. \nInserted transactions ${insertedTransactions?.data?.insert_transactions?.affected_rows}, Inserted actions ${insertedActions?.data?.insert_actions?.affected_rows},`,
      )
    } catch (error) {
      console.log('======================================')
      console.log('Error updating database', { chain_id, block_num })
      fs.writeFileSync('./errors.json', JSON.stringify(error, null, 2))
      blocks$.unsubscribe()
      console.log('======================================')
    }
  })

  // upsertRows$.subscribe((row) => {
  //   const variables = {
  //     chain_id: row.chain_id, // EOS
  //     contract: row.code,
  //     table: row.table,
  //     scope: row.scope,
  //     primary_key: row.primary_key,
  //     data: row.value,
  //   }
  //   console.log(variables)
  //   // try {
  //   //   hasura.upsert_table_row(variables)
  //   // } catch (error) {
  //   //   console.log('======================================')
  //   //   console.log('Error updating contract row', variables, error)
  //   //   console.log('======================================')
  //   // }
  // })

  // deletedRows$.subscribe((row) => {
  //   console.log('==> deleted row!', row)
  //   const variables = {
  //     chain_id: row.chain_id, // EOS
  //     contract: row.code,
  //     table: row.table,
  //     scope: row.scope,
  //     primary_key: row.primary_key,
  //   }
  //   console.log(variables)
  //   // try {
  //   //   hasura.delete_table_row(variables)
  //   // } catch (error) {
  //   //   console.log('======================================')
  //   //   console.log('Error deleting contract row', variables, error)
  //   //   console.log('======================================')
  //   // }
  // })

  close$.subscribe(() => console.log('connection closed'))

  // log$.subscribe(({ message }) => console.log('ShipReader:', message))
  errors$.subscribe((error) => console.log('ShipReader:', error))
}
