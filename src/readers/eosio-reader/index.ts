// import { EosioReaderConfig } from 'types/config'
// import { createEosioShipReader, EosioShipReaderConfig, ShipBlockResponse } from '@blockmatic/eosio-ship-reader'
// import { logger } from 'utils/winston'
// import { formatSecondsLeft } from 'utils/time'

// const processBlock = (blockData: ShipBlockResponse) => {
//   logger.info(blockData)
// }

// export const startEosioReader = (eosioReaderConfig: EosioReaderConfig) => {
//   const eosioShipReaderConfig: EosioShipReaderConfig = {
//     ws_url: eosioReaderConfig.ws_url,
//     ds_threads: eosioReaderConfig.ds_threads,
//     ds_experimental: eosioReaderConfig.ds_experimental,
//     tick_seconds: 1,
//     request: {
//       start_block_num: eosioReaderConfig.start_block,
//       end_block_num: eosioReaderConfig.stop_block,
//       max_messages_in_flight: eosioReaderConfig.ship_prefetch_blocks,
//       have_positions: [],
//       irreversible_only: false,
//       fetch_block: true,
//       fetch_traces: true,
//       fetch_deltas: true,
//     },
//   }

//   // TODO: read from hasura db
//   // get start block from database
//   // get have_transactions from database

//   const { connect, blocks$, close$, errors$, open$ } = createEosioShipReader(eosioShipReaderConfig)

//   open$.subscribe(() => console.log('connection opened'))
//   errors$.subscribe((e: ErrorEvent) => console.log(e))

//   blocks$.subscribe(processBlock)
//   close$.subscribe(() => {})

//   // TODO: this is pseudo code
//   // let lastProcessedBlock: number
//   // let headBlock: number

//   connect()
// }

export const startEosioReader = () => {
  console.log('starting eosio reader...')
}
