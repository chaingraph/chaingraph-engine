import { filter } from 'rxjs/internal/operators/filter'
import { loadReader } from './ship-reader'
import { hasura } from './hasura-client'
import { getInfo } from './debug-utils'

const chain_id = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'

export const startIndexer = async () => {
  console.log('Starting indexer ...')
  const { close$, rows$, blocks$, log$, errors$ } = await loadReader()

  let info = await getInfo()

  setInterval(async () => {
    info = await getInfo()
  }, 250)

  // filter ship socket messages stream by type (string for abi and )
  const upsertRows$ = rows$.pipe(filter((row) => Boolean(row.present)))
  const deletedRows$ = rows$.pipe(filter((row) => !Boolean(row.present)))

  console.log('Subscribing to blocks ...')
  blocks$.subscribe(({ this_block }) => {
    try {
      hasura.update_block_height({ chain_id, ...this_block })
      console.log(`Indexed block ${this_block.block_num}. Nodeos head block ${info.head_block_num}`)
    } catch (error) {
      console.log('======================================')
      console.log('Error updating block height', { chain_id, ...this_block })
      console.log('======================================')
    }
  })

  upsertRows$.subscribe((row) => {
    const variables = {
      chain_id, // EOS
      contract: row.code,
      table: row.table,
      scope: row.scope,
      primary_key: row.primary_key,
      data: row.value,
    }
    try {
      hasura.upsert_table_row(variables)
    } catch (error) {
      console.log('======================================')
      console.log('Error updating contract row', variables, error)
      console.log('======================================')
    }
  })

  deletedRows$.subscribe((row) => {
    console.log('==> deleted row!', row)
    const variables = {
      chain_id, // EOS
      contract: row.code,
      table: row.table,
      scope: row.scope,
      primary_key: row.primary_key,
    }
    try {
      hasura.delete_table_row(variables)
    } catch (error) {
      console.log('======================================')
      console.log('Error deleting contract row', variables, error)
      console.log('======================================')
    }
  })

  close$.subscribe(() => console.log('connection closed'))

  log$.subscribe(({ message }) => console.log('ShipReader:', message))
  errors$.subscribe((error) => console.log('ShipReader:', error))
}
