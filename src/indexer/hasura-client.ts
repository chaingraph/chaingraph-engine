import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../generated/graphql'

const LOCAL_HASURA_API = 'http://localhost:8088/v1/graphql'
const client = new GraphQLClient(LOCAL_HASURA_API)
export const hasura = getSdk(client)
