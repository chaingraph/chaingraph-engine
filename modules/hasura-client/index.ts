import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated/hasura-graphql'

const hasuraApi = process.env.HASURA_API || 'http://localhost:8088/v1/graphql'
const adminSecret = process.env.HASURA_GRAPHQL_ADMIN_SECRET || ''
const client = new GraphQLClient(hasuraApi)
client.setHeader('x-hasura-admin-secret', adminSecret)
export const hasura = getSdk(client)
