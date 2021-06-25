import { getHasuraSDK } from '@chaingraph.io/hasura-client'

export const hasura = getHasuraSDK({
  hasuraApi: process.env.HASURA_API!,
  adminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
})
