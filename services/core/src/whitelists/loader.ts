import {
  EosioReaderActionFilter,
  EosioReaderTableRowFilter,
} from '@blockmatic/eosio-ship-reader'
import { getSubscription } from './subscriptions'
export interface ChainGraphTableRegistry extends EosioReaderTableRowFilter {
  table_key: string
}

export interface TokenRegistry {
  code: string
  table: string
  table_key: string
}

let _chaingraph_table_registry: ChainGraphTableRegistry[] = []
let _actions_whitelist: EosioReaderActionFilter[] = []
let _chaingraph_token_registry: any = []
let _table_rows_whitelist: EosioReaderTableRowFilter[] = []

const chaingraph_token_registry = () => _chaingraph_token_registry

const chaingraph_table_registry = () => _chaingraph_table_registry

const actions_whitelist = () => _actions_whitelist

const table_rows_whitelist = () => _table_rows_whitelist

export interface LoaderBuffer {
  chaingraph_table_registry: () => ChainGraphTableRegistry[]
  chaingraph_token_registry: () => any
  table_rows_whitelist: () => EosioReaderTableRowFilter[]
  actions_whitelist: () => EosioReaderActionFilter[]
}

type DataMappingsType = {
  data: {
    mappings: Array<any>
  }
}

const onData = (data: unknown) => {
  console.log('-UPDATE MAPPING-')
  console.dir(data, { depth: null })
  try {
    const {
      data: { mappings },
    } = data as DataMappingsType

    let table_registry: ChainGraphTableRegistry[] = []
    const token_registry: TokenRegistry[] = []
    const table_rows_whitelist: EosioReaderTableRowFilter[] = []
    const actions_registry: EosioReaderActionFilter[] = []

    mappings.forEach((contractInfo) => {
      const { contract_name } = contractInfo
      const actions = contractInfo?.mapping?.actions
      if (actions) {
        actions_registry.push({
          code: contract_name,
          action: actions
        })
      }
      table_registry = contractInfo?.mapping?.table_registry.map(
        (registry: any) => {
          const code = registry.code ?? contract_name
          if (contractInfo?.mapping?.type) {
            token_registry.push({
              code,
              table: registry.table,
              table_key: registry.table_key,
            })
          }
          table_rows_whitelist.push({
            code,
            scope: registry.scope,
            table: registry.table,
          })
          return {
            code,
            scope: registry.scope,
            table: registry.table,
            lower_bound: registry.lower_bound,
            upper_bound: registry.upper_bound,
            table_key: registry.table_key,
          }
        },
      )
    })
    ;[
      _chaingraph_table_registry,
      _chaingraph_token_registry,
      _table_rows_whitelist,
      _actions_whitelist,
    ] = [table_registry, token_registry, table_rows_whitelist, actions_registry]
    console.log('-UPDATE MAPPINGS COMPLETED-')
  } catch (error) {
    console.error('error on update mappings', error)
  }
}

const onError = (error: unknown) => {
  console.log('-ERROR ON MAPPING-', error)
}

const subscribe = () => {
  return new Promise((resolve) => {
    getSubscription({ resolve, onData, onError })
  })
}

export const initWhiteList = async () => {
  await subscribe()
  return {
    chaingraph_table_registry,
    chaingraph_token_registry,
    table_rows_whitelist,
    actions_whitelist,
  } as LoaderBuffer
}
