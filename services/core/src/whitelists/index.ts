import {
  EosioReaderActionFilter,
  EosioReaderTableRowFilter,
} from '@blockmatic/eosio-ship-reader'
import { log } from '../utils/logger'
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
let _token_list: Array<string> = []

const get_chaingraph_token_registry = () => _chaingraph_token_registry

const get_chaingraph_table_registry = () => _chaingraph_table_registry

const get_actions_whitelist = () => _actions_whitelist

const get_table_rows_whitelist = () => _table_rows_whitelist

const get_token_list = () => _token_list

export interface LoaderBuffer {
  get_chaingraph_table_registry: () => ChainGraphTableRegistry[]
  get_chaingraph_token_registry: () => any
  get_table_rows_whitelist: () => EosioReaderTableRowFilter[]
  get_actions_whitelist: () => EosioReaderActionFilter[]
  get_token_list: () => Array<string>
}

type DataMappingsType = {
  data: {
    mappings: Array<any>
  }
}

const onData = (data: unknown) => {
  log.info('Updating contract mappings in memory ...')
  try {
    const {
      data: { mappings },
    } = data as DataMappingsType

    const table_registry: ChainGraphTableRegistry[] = []
    const token_registry: TokenRegistry[] = []
    const token_list: Array<string> = []
    const table_rows_whitelist: EosioReaderTableRowFilter[] = []
    const actions_registry: EosioReaderActionFilter[] = []

    mappings.forEach((contractInfo) => {
      const { contract_name } = contractInfo
      const actions = contractInfo?.mapping?.actions
      if (actions) {
        actions_registry.push({
          code: contract_name,
          action: actions,
        })
      }
      const type = contractInfo?.mapping?.type
      if (type) {
        token_list.push(contract_name)
      }
      contractInfo?.mapping?.table_registry.forEach((registry: any) => {
        const code = registry.code ?? contract_name
        if (type) {
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
        table_registry.push({
          code,
          scope: registry.scope,
          table: registry.table,
          lower_bound: registry.lower_bound,
          upper_bound: registry.upper_bound,
          table_key: registry.table_key,
        })
      })
    })
    ;[
      _chaingraph_table_registry,
      _chaingraph_token_registry,
      _table_rows_whitelist,
      _actions_whitelist,
      _token_list,
    ] = [
      table_registry,
      token_registry,
      table_rows_whitelist,
      actions_registry,
      token_list,
    ]
  } catch (error) {
    log.error('Error updating contract mappings', error)
  }
}

const onError = (error: unknown) => {
  log.error('Error updating contract mappings', error)
}

const subscribe = () =>
  new Promise((resolve) => getSubscription({ resolve, onData, onError }))

export const initWhiteList = async () => {
  log.info('Subscribing to contract mappings ...')
  await subscribe()
  return {
    get_chaingraph_table_registry,
    get_chaingraph_token_registry,
    get_table_rows_whitelist,
    get_actions_whitelist,
    get_token_list,
  } as LoaderBuffer
}
