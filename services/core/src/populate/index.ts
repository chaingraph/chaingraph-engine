import { populateTableRows } from './populate-tables'
import { populateTokens } from './populate-tokens'
import { populateActions } from './populate-actions'
import { LoaderBuffer } from './../whitelists/loader'

export const populate = async (whitelistReader: LoaderBuffer) => {
  console.log('Populating db with current state ...')

  // await populateTokens(whitelistReader)
  await populateTableRows(whitelistReader)
  // await populateActions(whitelistReader)
}
