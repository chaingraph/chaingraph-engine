import { EosioReaderConfig } from 'types/config'
import createEosioShipReader from './eosio-ship-reader/src'
import { EosioShipReaderConfig, EosioShipRequest } from './eosio-ship-reader/src/types'

const processBlock = () => {}

export const startEosioReader = (eosioReaderConfig: EosioReaderConfig) => {
  const eosioShipReaderConfig: EosioShipReaderConfig = {
    ws_url: eosioReaderConfig.ws_url,
    ds_threads: eosioReaderConfig.ds_threads,
    ds_experimental: eosioReaderConfig.ds_experimental,
    request: {
      start_block_num: eosioReaderConfig.start_block,
      end_block_num: eosioReaderConfig.stop_block,
      max_messages_in_flight: eosioReaderConfig.ship_prefetch_blocks,
      have_positions: [],
      irreversible_only: false,
      fetch_block: true,
      fetch_traces: true,
      fetch_deltas: true,
    },
  }

  // TODO: read from hasura db

  // get start block from database

  // get have_transactions from database

  const { connect, blocks$, close$ } = createEosioShipReader(eosioShipReaderConfig)

  blocks$.subscribe(() => {})
  close$.subscribe(() => {})

  connect()
}
