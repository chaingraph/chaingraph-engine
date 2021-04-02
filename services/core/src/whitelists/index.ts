import {
  EosioReaderActionFilter,
  EosioReaderTableRowFilter,
} from '@blockmatic/eosio-ship-reader'
import { bitcashbank1 } from './bitcashbank1'
import { bitcashtests } from './bitcashtests'
import { delphioracle } from './delphioracle'

export interface ChainGraphTableRegistry extends EosioReaderTableRowFilter {
  table_key: string
}

export const chaingraph_token_registry: string[] = [
  'mockeostoken',
  'tokenbitcash',
  'bitcashtokns',
]

// TODO: ticker code
export const chaingraph_token_tables_registry = chaingraph_token_registry
  .map((token_contract) => {
    return [
      {
        code: token_contract,
        table: 'stat',
        table_key: 'supply-symbol',
      },
      {
        code: token_contract,
        table: 'accounts',
        table_key: 'balance-symbol',
      },
    ]
  })
  .flat()

export const chaingraph_table_registry: ChainGraphTableRegistry[] = [
  ...bitcashtests,
  ...bitcashbank1,
  ...delphioracle,
  // ...chaingraph_token_tables_registry,  remove token tables from table_registry
]

export const table_rows_whitelist: EosioReaderTableRowFilter[] = chaingraph_table_registry.map(
  (reg) => ({ code: reg.code, scope: reg.scope, table: reg.table }),
)

export const actions_whitelist: EosioReaderActionFilter[] = [
  { code: 'bitcashtests', action: '*' },
  { code: 'bitcashbank1', action: '*' },
]
