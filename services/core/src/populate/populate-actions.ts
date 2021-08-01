// import { JsonRpc } from '@eoscafe/hyperion'
// import fetch from 'isomorphic-fetch'

// import { LoaderBuffer } from './../whitelists/loader'
// import { Actions_Insert_Input } from '@chaingraph.io/hasura-client/dist/generated/hasura-graphql'
// import { hasura } from '../hasura'

// const endpoint =
//   process.env.HYPERION_ENDPOINT || 'https://eos.hyperion.eosrio.io'
// const rpc = new JsonRpc(endpoint, { fetch })
// const PAGE_SIZE = parseInt(process.env.MAX_ACTIONS_LIMIT || '1000')

// export const populateAction = async (account: string, filter: string) => {
//   for (let page = 0; ; ++page) {
//     let retry = true
//     while (retry) {
//       try {
//         console.log('TRY', 'get_actions', {
//           filter: `${account}:${filter}`,
//           limit: PAGE_SIZE,
//           skip: PAGE_SIZE * page,
//         })
//         const response = await rpc.get_actions(account, {
//           filter: `${account}:${filter}`,
//           limit: PAGE_SIZE,
//           skip: PAGE_SIZE * page,
//         })

//         const objects: Actions_Insert_Input[] = response.actions.map(
//           (action) => ({
//             chain_id:
//               process.env.CHAIN_ID ||
//               'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
//             transaction_id: action.trx_id,
//             contract: action.act.account,
//             action_name: action.act.name,
//             data: action.act.data,
//             authorization: action.act.authorization,
//             global_sequence: action.global_sequence.toString(),
//             created_at: action['@timestamp'],
//           }),
//         )
//         const sleep = Math.floor(Math.random() * 1000 + 3000)
//         console.log(`sleep ${sleep}s`)
//         await new Promise((resolve) => setTimeout(resolve, sleep, {}))
//         retry = false
//         hasura.query.upsert_actions({ objects })

//         console.log('results', objects.length)

//         if (objects.length < PAGE_SIZE) {
//           console.log('sync completed!', objects.length)
//           return
//         }
//       } catch (error) {
//         console.error('error', 'populateAction', error.response)
//         const sleep = Math.floor(Math.random() * 1000 + 5000)
//         console.log(`sleep ${sleep}s`)
//         await new Promise((resolve) => setTimeout(resolve, sleep, {}))
//       }
//     }
//   }
// }

// export const populateActions = async (whitelistReader: LoaderBuffer) => {
//   whitelistReader.actions_whitelist().forEach(async (action) => {
//     try {
//       console.log('-GET ACTIONS HISTORY-', action)
//       await populateAction(action.code, action.action)
//     } catch (error) {
//       console.error('error', 'populateActions', error)
//       console.log(JSON.stringify(error, null, 2))
//     }
//   })
// }

// // TODO: keep for testing
// // ;(async () => {
// //   await populateAction('eosio.token', '*')
// // })()

export {}
