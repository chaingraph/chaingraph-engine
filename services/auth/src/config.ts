import * as env from 'env-var'

export interface Config {
  hasura_api: string
  hasura_admin_secret: string
  chaingraph_codegen_key: string
}

export const config: Config = {
  hasura_api: env.get('HASURA_API').required().asString(),
  hasura_admin_secret: env.get('HASURA_GRAPHQL_ADMIN_SECRET').required().asString(),
  chaingraph_codegen_key: env.get('CHAINGRAPH_CODEGEN_KEY').required().asString(),
}
