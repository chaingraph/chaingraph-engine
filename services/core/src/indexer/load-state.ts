import { log } from '../utils/logger'
import { LoaderBuffer } from 'whitelists/loader'

export const loadCurrentTableState = async (whitelistReader: LoaderBuffer) => {
  log.info('Loading current table state ...', JSON.stringify(whitelistReader))
}
