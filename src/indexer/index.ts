import { filter } from 'rxjs/internal/operators/filter'
import { loadReader } from './ship-reader'
import { hasura } from './hasura-client'

const chain_id = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'

export const startIndexer = async () => {
  const { close$, rows$, blocks$ } = await loadReader()

  // filter ship socket messages stream by type (string for abi and )
  const upsertRows$ = rows$.pipe(filter((row) => Boolean(row.present)))
  const deletedRows$ = rows$.pipe(filter((row) => !Boolean(row.present)))

  blocks$.subscribe(({ this_block }) => {
    console.log(this_block)
    try {
      hasura.update_block_height({ chain_id, ...this_block })
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
      hasura.upsert_table_row(variables) // .then(result => console.log('upsert_table_row', result.data))
    } catch (error) {
      console.log('======================================')
      console.log('Error updating contract row', variables, error)
      console.log('======================================')
    }
  })

  deletedRows$.subscribe((row) => {
    console.log('==> deleted row!')
    console.log(JSON.stringify(row, null, 2))
  })

  close$.subscribe(() => console.log('connection closed'))
}
