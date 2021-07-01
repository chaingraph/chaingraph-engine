import { loadReader } from './ship-reader'
import { indexActions } from './index-actions'
import { indexTableRows } from './index-tables'
import { LoaderBuffer } from './../whitelists/loader'

export const startIndexer = async (whitelistReader: LoaderBuffer) => {
  console.log('Starting indexer ...')

  const { close$, rows$, blocks$, errors$ } = await loadReader(whitelistReader)

  indexActions(blocks$)
  indexTableRows(rows$, whitelistReader)

  close$.subscribe(() => console.log('connection closed'))

  // log$.subscribe(({ message }) => console.log('ShipReader:', message))
  errors$.subscribe((error) => console.log('ShipReader:', error))
}
