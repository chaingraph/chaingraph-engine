import {
  EosioReaderActionFilter,
  EosioReaderTableRowFilter,
} from '@blockmatic/eosio-ship-reader'

export interface ChainGraphTableRegistry extends EosioReaderTableRowFilter {
  table_key: string
}

export const chaingraph_token_registry: string[] = ['mockeostoken']

const chaingraph_token_tables_registry = chaingraph_token_registry
  .map((token_contract) => {
    return [
      {
        code: token_contract,
        table: 'stat',
        table_key: 'n/a',
      },
      {
        code: token_contract,
        table: 'accounts',
        table_key: 'n/a',
      },
    ]
  })
  .flat()

export const chaingraph_table_registry: ChainGraphTableRegistry[] = [
  {
    code: 'bitcashtests',
    scope: 'bitcashtests',
    table: 'appstates',
    table_key: 'singleton',
  },
  {
    code: 'bitcashtests',
    scope: 'bitcashtests',
    table: 'exfees',
    table_key: 'singleton',
  },
  {
    code: 'bitcashtests',
    scope: 'bitcashtests',
    table: 'gpositions',
    table_key: 'singleton',
  },
  {
    code: 'bitcashtests',
    scope: 'bitcashtests',
    table: 'positions',
    table_key: 'account',
  },
  {
    code: 'delphioracle',
    scope: 'eosusd',
    table: 'datapoints',
    table_key: 'id',
  },
  {
    code: 'bitcashtests',
    scope: 'bitcashtests',
    table: 'p2p',
    table_key: 'id',
  },
  ...chaingraph_token_tables_registry,
]

export const table_rows_whitelist: EosioReaderTableRowFilter[] = chaingraph_table_registry.map(
  (reg) => ({ code: reg.code, scope: reg.scope, table: reg.table }),
)

export const actions_whitelist: EosioReaderActionFilter[] = [
  { code: 'bitcashtests', action: '*' },
]
