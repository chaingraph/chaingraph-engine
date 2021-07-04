import { loadReader } from './ship-reader'
import { indexActions } from './index-actions'
import { indexTableRows } from './index-tables'

export const startIndexer = async () => {
  console.log('Starting indexer ...')

  const { close$, rows$, blocks$, errors$, log$ } = await loadReader()

  indexActions(blocks$)
  indexTableRows(rows$)

  close$.subscribe(() => console.log('connection closed'))

  log$.subscribe(({ message }:any) => console.log('ShipReader:', message))
  errors$.subscribe((error) => console.log('ShipReader:', error))
}
