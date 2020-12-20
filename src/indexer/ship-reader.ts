import {
  createEosioShipReader,
  EosioReaderAbisMap,
  EosioReaderActionFilter,
  EosioReaderConfig,
  EosioReaderTableRowFilter,
} from '@blockmatic/eosio-ship-reader'
import fetch from 'node-fetch'
import { eosioApi, eosioHost, fecthAbi } from './debug-utils'

const table_rows_whitelist: EosioReaderTableRowFilter[] = [
  // { code: 'eosio.token', table: 'accounts' },
  { code: 'bitcashtests', scope: 'bitcashtests', table: 'appstates' },
  { code: 'bitcashtests', scope: 'bitcashtests', table: 'exfees' },
  { code: 'bitcashtests', scope: 'bitcashtests', table: 'fees' },
  { code: 'bitcashtests', scope: 'bitcashtests', table: 'accounts' },
  { code: 'bitcashtests', scope: 'bitcashtests', table: 'gpositions' },
  { code: 'bitcashtests', scope: 'bitcashtests', table: 'limits' },
  { code: 'bitcashtests', scope: 'bitcashtests', table: 'positions' },
  { code: 'bitcashtests', scope: 'bitcashtests', table: 'stat' },
  { code: 'delphioracle', scope: 'eosusd', table: 'datapoints' },
]

const actions_whitelist: EosioReaderActionFilter[] = [{ code: 'bitcashtests', action: '*' }]

export const loadReader = async () => {
  const info = await fetch(`${eosioApi}/v1/chain/get_info`).then((res: any) => res.json())
  const uniqueContractNames = [...new Set(table_rows_whitelist?.map((row) => row.code))]
  const abisArr = await Promise.all(uniqueContractNames.map((account_name) => fecthAbi(account_name)))

  const contract_abis: EosioReaderAbisMap = new Map()
  abisArr.forEach(({ account_name, abi }) => contract_abis.set(account_name, abi))

  const eosioReaderConfig: EosioReaderConfig = {
    ws_url: `ws://${eosioHost}:8080`,
    rpc_url: eosioApi,
    ds_threads: 6,
    ds_experimental: false,
    delta_whitelist: ['contract_table', 'contract_row', 'contract_index64'],
    table_rows_whitelist,
    actions_whitelist,
    contract_abis,
    request: {
      start_block_num: info.head_block_num + 10,
      end_block_num: 0xffffffff,
      max_messages_in_flight: 50,
      have_positions: [],
      irreversible_only: false,
      fetch_block: true,
      fetch_traces: true,
      fetch_deltas: true,
    },
    auto_start: true,
  }

  return await createEosioShipReader(eosioReaderConfig)
}
