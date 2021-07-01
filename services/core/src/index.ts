import { initWhiteList } from './whitelists/loader'
import { startIndexer } from './indexer'
import { populate } from './populate'
;(async () => {
  console.log('Start Loading Mappings')
  const whitelistReader = await initWhiteList()
  console.log('Finish Loading Mappings')
  console.log('whitelistReader', whitelistReader)
  console.log('actions_whitelist')
  console.dir(whitelistReader.actions_whitelist())
  console.log('chaingraph_table_registry')
  console.dir(whitelistReader.chaingraph_table_registry())
  console.log('chaingraph_token_registry')
  console.dir(whitelistReader.chaingraph_token_registry())
  console.log('table_rows_whitelist')
  console.dir(whitelistReader.table_rows_whitelist())
  console.log('whitelistReader', whitelistReader)
  populate(whitelistReader)
  startIndexer(whitelistReader)
})()
