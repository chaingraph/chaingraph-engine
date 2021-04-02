import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../generated/hasura-graphql'

const hasuraApi = process.env.HASURA_API || 'http://localhost:8088/v1/graphql'
console.log({ hasuraApi })
const client = new GraphQLClient(hasuraApi)
export const hasura = getSdk(client)
