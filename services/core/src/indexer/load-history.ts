import { log } from '../utils/logger'
import { LoaderBuffer } from '../whitelists'
import { JsonRpc } from '@eoscafe/hyperion'
import fetch from 'isomorphic-fetch'
import {
  Actions_Constraint,
  Actions_Insert_Input,
} from '@chaingraph.io/hasura-client'
import { hasura } from '../hasura'

const endpoint =
  process.env.HYPERION_ENDPOINT || 'https://eos.hyperion.eosrio.io'
const rpc = new JsonRpc(endpoint, { fetch })
const PAGE_SIZE = 10 //parseInt(process.env.MAX_ACTIONS_LIMIT || '1000')

export const loadHistory = async (whitelistReader: LoaderBuffer) => {
  log.info('Loading action and transaction history ...')
  try {
    const actions = whitelistReader.get_actions_whitelist()

    await Promise.all(
      actions.map(async (action) => populateAction(action.code, action.action)),
    )
  } catch (error) {
    console.error(
      'Error loading actions and transaction data from Hyperion',
      error,
    )
  }
}

export const populateAction = async (account: string, filter: string) => {
  for (let page = 0; ; ++page) {
    let retry = true
    while (retry) {
      log.info('Loading action history from Hyperion', {
        filter: `${account}:${filter}`,
        limit: PAGE_SIZE,
        skip: PAGE_SIZE * page,
      })
      const response = await rpc.get_actions(account, {
        filter: `${account}:${filter}`,
        limit: PAGE_SIZE,
        skip: PAGE_SIZE * page,
      })

      console.log(JSON.stringify(response.actions))
      return

      const action = {
        '@timestamp': '2021-04-28T20:17:43.500',
        timestamp: '2021-04-28T20:17:43.500',
        block_num: 180969638,
        trx_id:
          '44adc2f9487976836b111e07012dc648a48d5554ec50eb963aa305b2983f63f4',
        act: {
          account: 'tokenbitcash',
          name: 'issue',
          authorization: [{ actor: 'bitcashbank1', permission: 'active' }],
          data: {
            to: 'bitcashbank1',
            quantity: '252.70 BITUSD',
            memo: 'BITUSD issued to bitcashBank',
          },
        },
        notified: ['tokenbitcash'],
        global_sequence: 351389177895,
        producer: 'helloeoscnbp',
        action_ordinal: 5,
        creator_action_ordinal: 4,
      }

      const objects: Actions_Insert_Input[] = response.actions.map(
        (action: any) => ({
          chain: 'eos',
          transaction_id: action.trx_id,
          contract: action.act.account,
          action: action.act.name,
          data: action.act.data,
          authorization: action.act.authorization,
          global_sequence: action.global_sequence.toString(),
          action_ordinal: action.action_ordinal,
          creator_action_ordinal: action.creator_action_ordinal,
          producer: action.producer,
          block_id: 0,
          block_num: action.block_num,
        }),
      )

      // abi_sequence?: Maybe<Scalars['Int']>;
      // account_disk_deltas?: Maybe<Scalars['jsonb']>;
      // account_ram_deltas?: Maybe<Scalars['jsonb']>;
      // action?: Maybe<Scalars['String']>;
      // action_ordinal?: Maybe<Scalars['Int']>;
      // authorization?: Maybe<Scalars['jsonb']>;
      // chain?: Maybe<Scalars['String']>;
      // code_sequence?: Maybe<Scalars['Int']>;
      // console?: Maybe<Scalars['String']>;
      // context_free?: Maybe<Scalars['Boolean']>;
      // contract?: Maybe<Scalars['String']>;
      // creator_action_ordinal?: Maybe<Scalars['Int']>;
      // data?: Maybe<Scalars['jsonb']>;
      // global_sequence?: Maybe<Scalars['String']>;
      // receipt?: Maybe<Scalars['jsonb']>;
      // receiver?: Maybe<Scalars['String']>;
      // transaction?: Maybe<Transactions_Obj_Rel_Insert_Input>;
      // transaction_id?: Maybe<Scalars['String']>;

      const sleep = Math.floor(Math.random() * 1000 + 3000)
      console.log(`sleep ${sleep}s`)
      await new Promise((resolve) => setTimeout(resolve, sleep, {}))
      retry = false
      // hasura.query.upsert_actions({ objects })

      console.log('results', objects.length)

      if (objects.length < PAGE_SIZE)
        console.log('Succesfully loaded history from Hyperion!', objects.length)
    }
  }
}
