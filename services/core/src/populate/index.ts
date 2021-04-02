import { populateTableRows } from './populate-tables'
import { populateTokens } from './populate-tokens'

export const populate = async () => {
  console.log('Populating db with current state ...')

  // TODO: await
  // populateTokens()
  populateTableRows()
}
