import { initWhiteList } from './whitelists/loader'
import { startIndexer } from './indexer'
import { populate } from './populate'
;(async () => {
  try {
    const whitelistReader = await initWhiteList()
    await populate(whitelistReader)
    await startIndexer(whitelistReader)
  } catch (error) {
    console.log('global error', error)
  }
})()
