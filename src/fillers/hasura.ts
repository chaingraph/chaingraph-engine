import { GraphQLClient } from 'graphql-request'
import { getSdk } from 'generated/graphql'

export const LOCAL_HASURA_API = 'https://localhost:8088/v1/graphql'
export const client = new GraphQLClient(LOCAL_HASURA_API)
export const hasura = getSdk(client)

export default hasura
