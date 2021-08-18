import { log } from '../utils/logger'
import { LoaderBuffer } from '../whitelists'
import { JsonRpc, Action as HyperionAction } from '@eoscafe/hyperion'
import fetch from 'isomorphic-fetch'
import {
  Actions_Insert_Input,
  Blocks_Insert_Input,
  Transactions_Insert_Input,
} from '@chaingraph.io/hasura-client'
import { hasura } from '../hasura'
import uniqBy from 'lodash.uniqby'
import pThrottle from 'p-throttle'
import { whilst } from '../utils/promises'

const endpoint =
  process.env.HYPERION_ENDPOINT || 'https://eos.hyperion.eosrio.io'
const rpc = new JsonRpc(endpoint, { fetch })
const PAGE_SIZE = 1000 // parseInt(process.env.MAX_ACTIONS_LIMIT || '1000')

export const loadHistory = async (whitelistReader: LoaderBuffer) => {
  log.info('Loading action and transaction history ...')
  try {
    const actions = whitelistReader.get_actions_whitelist()

    await Promise.all(
      actions.map(async (action) =>
        loadActionHistory(action.code, action.action),
      ),
    )
  } catch (error) {
    console.error(
      'Error loading actions and transaction data from Hyperion',
      error,
    )
  }
}

const loadHyperionActions = async (hyperion_actions: HyperionAction<any>[]) => {
  log.info(`Loading ${hyperion_actions.length} hyperion actions ...`)
  try {
    type UpsertObjects = {
      actions: Actions_Insert_Input[]
      transactions: Transactions_Insert_Input[]
      blocks: Blocks_Insert_Input[]
    }

    const objects: UpsertObjects = hyperion_actions.reduce(
      (accumulator: UpsertObjects, action: any) => {
        accumulator.actions.push({
          chain: 'eos',
          transaction_id: action.trx_id,
          contract: action.act.account,
          action: action.act.name,
          data: action.act.data,
          authorization: action.act.authorization,
          global_sequence: action.global_sequence.toString(),
          action_ordinal: action.action_ordinal,
          creator_action_ordinal: action.creator_action_ordinal,
        })

        accumulator.blocks.push({
          chain: 'eos',
          block_num: action.block_num,
          producer: action.producer,
          timestamp: action.timestamp,
        })

        accumulator.transactions.push({
          chain: 'eos',
          block_num: action.block_num,
          transaction_id: action.trx_id,
        })

        return {
          actions: accumulator.actions,
          blocks: uniqBy(accumulator.blocks, 'block_num'),
          transactions: uniqBy(accumulator.transactions, 'transaction_id'),
        }
      },
      { actions: [], transactions: [], blocks: [] },
    )

    const loaded_blocks = await hasura.query.upsert_blocks({
      objects: objects.blocks,
    })
    // log.info('loaded_blocks', JSON.stringify(loaded_blocks))

    const loaded_transactions = await hasura.query.upsert_transactions({
      objects: objects.transactions,
    })
    // log.info('loaded_transactions', JSON.stringify(loaded_transactions))

    const loaded_actions = await hasura.query.upsert_actions({
      objects: objects.actions,
    })
    // log.info('loaded_actions', JSON.stringify(loaded_actions))

    return true
  } catch (error) {
    log.error(
      'ERRROOOR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
      Object.keys(error.response),
      error.response.errors,
    )
    // throw error
    return true // ignore the error for now - Gabo
  }
}

export const loadActionHistory = async (account: string, filter: string) => {
  // walk over hyperion pagination.
  const now = Date.now()
  const throttleRequest = pThrottle({
    limit: 1,
    interval: 1000,
  })
  let page = 0
  let morePages = true
  const hasMorePages = () => morePages
  const throttledHyperionGetActions = throttleRequest((page: number) => {
    const secDiff = ((Date.now() - now) / 1000).toFixed()
    log.info(
      `===> throttledHyperionGetActions for ${account}:${filter} with a ${secDiff} difference from starting time`,
    )
    return rpc.get_actions(account, {
      filter: `${account}:${filter}`,
      limit: PAGE_SIZE,
      skip: PAGE_SIZE * page,
    })
  })

  const loadHyperionPages = async () => {
    const filter_page = `filter: ${account}:${filter}, limit: ${PAGE_SIZE}, skip: ${
      PAGE_SIZE * page
    }, page ${page}`
    log.info(`Loading action history from Hyperion for ${filter_page}`)

    try {
      const response = await throttledHyperionGetActions(page)
      if (response.actions.length > 0) {
        await loadHyperionActions(response.actions)
        page++
        return true
      } else {
        log.info(`BAZINGA STOP. setting morePages to false for ${filter_page}`)
        morePages = false
        return false
      }
    } catch (error) {
      log.info('hyperion request failed')
      return true // keep trying
    }
  }

  await whilst(hasMorePages, loadHyperionPages)

  log.info('Succesfully loaded history from Hyperion!', 'LOL ???')
}
