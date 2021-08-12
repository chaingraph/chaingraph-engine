import { log } from '../utils/logger'
import { LoaderBuffer } from 'whitelists/loader'

export const loadHistory = async (whitelistReader: LoaderBuffer) => {
  log.info(
    'Loading action and transaction history ...',
    JSON.stringify(whitelistReader),
  )
}
