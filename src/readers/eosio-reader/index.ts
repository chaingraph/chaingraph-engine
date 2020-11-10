import { EosioReaderConfig } from 'types/config'
import { ErrorEvent } from 'ws'
import { createEosioShipReader } from './eosio-ship-reader/src'
import { EosioShipReaderConfig, ShipBlockResponse } from './eosio-ship-reader/src/types'
import { logger } from 'utils/winston'
import { formatSecondsLeft } from 'utils/time'

const processBlock = (blockData: ShipBlockResponse) => {
  logger.info(blockData)
}

export const startEosioReader = (eosioReaderConfig: EosioReaderConfig) => {
  const eosioShipReaderConfig: EosioShipReaderConfig = {
    ws_url: eosioReaderConfig.ws_url,
    ds_threads: eosioReaderConfig.ds_threads,
    ds_experimental: eosioReaderConfig.ds_experimental,
    tick_seconds: 1,
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

  const { connect, blocks$, close$, tick$, errors$, open$ } = createEosioShipReader(eosioShipReaderConfig)

  open$.subscribe(() => console.log('connection opened'))
  errors$.subscribe((e: ErrorEvent) => console.log(e))

  blocks$.subscribe(processBlock)
  close$.subscribe(() => {})

  // TODO: this is pseudo code
  let lastProcessedBlock: number
  let headBlock: number
  tick$.subscribe(({ currentBlock, lastBlock }) => {
    const speed = (currentBlock - lastBlock) / eosioShipReaderConfig.tick_seconds
    if (lastBlock === currentBlock && lastBlock > 0) {
      logger.warn(`Reader ${eosioReaderConfig.name} - No blocks processed`)
    } else if (currentBlock < lastProcessedBlock) {
      logger.info(
        `Reader ${eosioReaderConfig.name} - ` +
          `Progress: ${currentBlock} / ${headBlock} ` +
          `(${((100 * currentBlock) / headBlock).toFixed(2)}%) ` +
          `Speed: ${speed.toFixed(1)} B/s ` +
          `(Syncs ${formatSecondsLeft(Math.floor((headBlock - currentBlock) / speed))})`,
      )
    } else {
      logger.info(`Reader ${eosioReaderConfig.name} - ` + `Current Block: ${currentBlock} ` + `Speed: ${speed.toFixed(1)} B/s `)
    }
  })

  connect()
}
