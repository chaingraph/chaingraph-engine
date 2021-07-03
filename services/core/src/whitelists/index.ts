import {
  EosioReaderActionFilter,
  EosioReaderTableRowFilter,
} from '@blockmatic/eosio-ship-reader'
import { bitcashbank1 } from './bitcashbank1'
import { bitcashtests } from './bitcashtests'
import { delphioracle } from './delphioracle'
import { bitcashaccts } from './bitcashaccts'
import { genesiseden } from './genesis.eden'
import { chaingraph_token_tables_registry } from './tokens'

export interface ChainGraphTableRegistry extends EosioReaderTableRowFilter {
  table_key: string
}

export const chaingraph_table_registry: ChainGraphTableRegistry[] = [
  ...genesiseden,
  ...bitcashtests,
  ...bitcashaccts,
  ...bitcashbank1,
  ...delphioracle,
  ...chaingraph_token_tables_registry, // Required for whitelisting on eosio-ship-reader
]

export const table_rows_whitelist: EosioReaderTableRowFilter[] =
  chaingraph_table_registry.map((reg) => ({
    code: reg.code,
    scope: reg.scope,
    table: reg.table,
  }))

export const actions_whitelist: EosioReaderActionFilter[] = [
  { code: 'bitcashtests', action: '*' },
  { code: 'bitcashbank1', action: '*' },
  { code: 'genesis.eden', action: '*' },
]
