import { filter } from 'rxjs/internal/operators/filter'
import { EosioShipTableRowData } from '@blockmatic/eosio-ship-reader'
import { loadReader } from './ship-reader'
import { hasura } from './hasura-client'

export const startIndexer = async () => {
  const { close$, rows$ } = await loadReader()

  // filter ship socket messages stream by type (string for abi and )
  const upsertRows$ = rows$.pipe(filter((row: EosioShipTableRowData) => Boolean(row.present)))
  const deletedRows$ = rows$.pipe(filter((row: EosioShipTableRowData) => !Boolean(row.present)))

  upsertRows$.subscribe((row: EosioShipTableRowData) => {
    const variables = {
      chain_id: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', // EOS
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

  deletedRows$.subscribe((row: EosioShipTableRowData) => {
    console.log('==> deleted row!')
    console.log(JSON.stringify(row, null, 2))
  })

  close$.subscribe(() => console.log('connection closed'))
}
