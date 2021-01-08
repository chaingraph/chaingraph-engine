import {
  EosioReaderActionFilter,
  EosioReaderTableRowFilter,
} from '@blockmatic/eosio-ship-reader'

export interface ChainGraphTableRegistry extends EosioReaderTableRowFilter {
  table_key: string
}

export const chaingraph_registry: ChainGraphTableRegistry[] = [
  // { code: 'eosio.token', table: 'accounts' },
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
    table: 'fees',
    table_key: 'singleton',
  },
  {
    code: 'bitcashtests',
    scope: 'bitcashtests',
    table: 'accounts',
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
    table: 'limits',
    table_key: 'singleton',
  },
  {
    code: 'bitcashtests',
    scope: 'bitcashtests',
    table: 'positions',
    table_key: 'account',
  },
  {
    code: 'bitcashtests',
    scope: 'bitcashtests',
    table: 'stat',
    table_key: 'singleton',
  },
  {
    code: 'delphioracle',
    scope: 'eosusd',
    table: 'datapoints',
    table_key: 'id',
  },
  {
    code: 'mockeostoken',
    table: 'accounts',
    table_key: 'standard_token',
  },
]

export const table_rows_whitelist: EosioReaderTableRowFilter[] = chaingraph_registry.map(
  (reg) => ({ code: reg.code, scope: reg.scope, table: reg.table }),
)

export const actions_whitelist: EosioReaderActionFilter[] = [
  { code: 'bitcashtests', action: '*' },
]
