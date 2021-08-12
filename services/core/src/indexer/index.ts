import { initWhiteList } from '../whitelists'
import { startRealTimeStreaming } from './real-time'
import { loadCurrentTableState } from './load-state'
import { loadHistory } from './load-history'
import { log } from '../utils/logger'

export const startIndexer = async () => {
  // get an instance of the whitelist reader
  // this subscribes the whitelist on db and it always returns the latest whitelist
  // soon this whitelist will come from a smart contract, for now we are using a pg db to get going
  const whitelistReader = await initWhiteList()
  // start indexing state updates in real-time as soon as the server starts
  startRealTimeStreaming(whitelistReader)
  // load current state of whitelisted tables, overwritting real-time stream shouldn't be an issue since it's the latest state
  loadCurrentTableState(whitelistReader)
  // load historical action and transaction data from dFuse community edition
  loadHistory(whitelistReader)
}
