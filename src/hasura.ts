import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated/graphql'

export const BITCASH_HASURA_API = 'https://chaingraph.herokuapp.com/v1/graphql'
export const client = new GraphQLClient(BITCASH_HASURA_API)
export const hasura = getSdk(client)

export default hasura
