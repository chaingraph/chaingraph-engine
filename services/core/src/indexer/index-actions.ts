import { EosioReaderLightBlock, Subject } from '@blockmatic/eosio-ship-reader'
import {
  Transactions_Insert_Input,
  Actions_Insert_Input,
} from '@chaingraph.io/hasura-client'
import omit from 'lodash.omit'
import chunk from 'lodash.chunk'
import { hasura } from '../hasura'
import { getInfo } from '../utils/eosio'

export const indexActions = async (blocks$: Subject<EosioReaderLightBlock>) => {
  let info = await getInfo()

  console.log('Indexing actions ...')
  blocks$.subscribe(async ({ chain_id, block_num, block_id, actions }) => {
    try {
      // get the transactions for the whitelisted actions, we are not storing every action.
      const transactions = [
        ...new Set(actions?.map(({ transaction_id }) => transaction_id)),
      ]
      const transactionsInsertInput: Transactions_Insert_Input[] =
        transactions.map((transaction_id) => ({
          chain_id,
          block_num,
          block_id,
          transaction_id,
        }))
      const insertedTransactions =
        transactions &&
        (await hasura.query.insert_transaction({
          objects: transactionsInsertInput,
        }))

      // insert the whitelisted actions
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
            hasura.query.insert_actions({ objects: actionsChunk }),
          ),
        )
      }

      const numberOfInsertedActions =
        insertedActions?.reduce((acc, { data }) => {
          return acc + (data?.insert_actions?.affected_rows || 0)
        }, 0) || 0

      await hasura.query.update_block_height({ chain_id, block_num, block_id })
      console.log(
        `\nIndexed block ${block_num}. Nodeos head block ${info.head_block_num}. \nInserted transactions ${insertedTransactions?.data?.insert_transactions?.affected_rows}, Inserted actions ${numberOfInsertedActions} in ${insertedActions?.length} chunks,`,
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
}
