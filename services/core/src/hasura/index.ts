import { getHasuraSDK } from '@chaingraph.io/hasura-client'

export const hasura = getHasuraSDK({
  url: process.env.HASURA_URL!,
  wsUrl: process.env.HASURA_WSURL!,
  adminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
})

console.log({
  url: process.env.HASURA_URL!,
  wsUrl: process.env.HASURA_WSURL!,
  adminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
})
