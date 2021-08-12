// import {
//   Balances_Insert_Input,
//   Tokens_Insert_Input,
// } from '@chaingraph.io/hasura-client/dist/generated/hasura-graphql'
// import { rpc } from '../utils/eosio'
// import { hasura } from '../hasura'
// import { asset } from 'eos-common'
// import { LoaderBuffer } from './../whitelists/loader'

// const populateToken = async (token_contract: string) => {
//   const { rows } = await rpc.get_table_by_scope({
//     code: token_contract,
//     table: 'stat',
//     limit: 10000000,
//   })

//   const statsRequests = rows.map(async ({ scope }: { scope: string }) => {
//     const { rows: rows2 } = await rpc.get_table_rows({
//       code: token_contract,
//       table: 'stat',
//       scope,
//     })
//     return rows2
//   })

//   type Stat = {
//     supply: string
//     max_supply: string
//     issuer: string
//   }

//   const stats = (await Promise.all(statsRequests)).flat() as Stat[]

//   const insertStatRequests = stats.map((stat) => {
//     const { symbol } = asset(stat.supply)

//     const tokenObj: Tokens_Insert_Input = {
//       chain: 'eos',
//       contract: token_contract,
//       symbol: symbol.code().toString(),
//       precision: symbol.precision(),
//       ...stat,
//     }
//     return hasura.query.upsert_token({ object: tokenObj })
//   })

//   await Promise.all(insertStatRequests)
// }

// const populateBalances = async (token_contract: string) => {
//   const { rows: scopes } = await rpc.get_table_by_scope({
//     code: token_contract,
//     table: 'accounts',
//     limit: 10000000,
//   })

//   const table_rows_requests = scopes.map(
//     async ({ scope }: { scope: string }) => {
//       const { rows } = await rpc.get_table_rows({
//         code: token_contract,
//         table: 'accounts',
//         scope,
//       })

//       const balancesData = rows.map(({ balance }: { balance: string }) => {
//         return {
//           chain: 'eos',
//           contract: token_contract,
//           account: scope,
//           symbol: balance.split(' ')[1],
//           balance,
//         }
//       })
//       return balancesData
//     },
//   )

//   const balances = (
//     await Promise.all(table_rows_requests)
//   ).flat() as Balances_Insert_Input[]

//   hasura.query.upsert_balances({ objects: balances })
// }

// export const populateTokens = async (whitelistReader: LoaderBuffer) => {
//   whitelistReader.token_list().forEach(async (token_contract: string) => {
//     try {
//       await populateToken(token_contract)
//       await populateBalances(token_contract)
//     } catch (error) {
//       console.log(JSON.stringify(error, null, 2))
//       // throw new Error('Error populating tokens')
//     }
//   })
// }
export {}
