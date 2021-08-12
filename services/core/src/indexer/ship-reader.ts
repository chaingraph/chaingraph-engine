import {
  createEosioShipReader,
  EosioReaderAbisMap,
  EosioReaderConfig,
} from '@blockmatic/eosio-ship-reader'
import fetch from 'node-fetch'
import { eosioApi, eosioHost, fecthAbi } from '../utils/eosio'
import { LoaderBuffer } from '../whitelists'

export const loadReader = async (whitelistReader: LoaderBuffer) => {
  const info = await fetch(`${eosioApi}/v1/chain/get_info`).then((res: any) =>
    res.json(),
  )

  const uniqueContractNames = [
    ...new Set(
      whitelistReader.get_table_rows_whitelist().map((row: any) => row.code),
    ),
  ]
  const abisArr = await Promise.all(
    uniqueContractNames.map((account_name) => fecthAbi(account_name)),
  )

  const contract_abis: () => EosioReaderAbisMap = () => {
    const abis = new Map()
    abisArr.forEach(({ account_name, abi }) => abis.set(account_name, abi))
    return abis
  }

  const eosioReaderConfig: EosioReaderConfig = {
    ws_url: `ws://${eosioHost}:8080`,
    rpc_url: eosioApi,
    ds_threads: 6,
    ds_experimental: false,
    delta_whitelist: () => [
      'contract_table',
      'contract_row',
      'contract_index64',
    ],
    table_rows_whitelist: whitelistReader.get_table_rows_whitelist,
    actions_whitelist: whitelistReader.get_actions_whitelist,
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
      fetch_block_header: true,
    },
    auto_start: true,
  }

  return await createEosioShipReader(eosioReaderConfig)
}
