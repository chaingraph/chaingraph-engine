import { loadReader } from './ship-reader'
// import { indexActions } from './index-actions'
// import { indexTableRows } from './index-tables'
import { LoaderBuffer } from './../whitelists/loader'
import { hasura } from '../hasura'

export const startIndexer = async (whitelistReader: LoaderBuffer) => {
  console.log('Starting indexer ...')

  const { close$, blocks$, errors$, log$ } = await loadReader(whitelistReader)

  blocks$.subscribe((block) => {
    console.log(block)

    // insert table_rows
    const insertTableRowsObjects = block.table_rows.filter((row) => row.present)
    hasura.query.upsert_table_rows({ objects: insertTableRowsObjects })

    // delete table_rows
    const deleteTableRows = block.table_rows
      .filter((row) => !row.present)
      .map((row) => {
        return {
          chain: {
            _eq: 'eos',
          },
          contract: {
            _eq: row.code,
          },
          table: {
            _eq: row.table,
          },
          primary_key: {
            _eq: row.primary_key,
          },
        }
      })
    hasura.query.delete_table_rows({ where: { _or: deleteTableRows } })

    // insert block data

    // insert transaction data

    // insert action traces
  })

  // indexActions(blocks$)
  // indexTableRows(rows$, whitelistReader)

  close$.subscribe(() => console.log('connection closed'))

  log$.subscribe(({ message }: any) => console.log('ShipReader:', message))
  errors$.subscribe((error) => console.log('ShipReader:', error))
}
