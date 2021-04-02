import { EosioReaderTableRowsStreamData } from '@blockmatic/eosio-ship-reader'
import { Balances_Insert_Input } from 'generated/hasura-graphql'
import { hasura } from '../hasura/hasura-client'
import { Observable } from 'rxjs'
import { filter } from 'rxjs/internal/operators/filter'
import { chaingraph_token_registry } from '../whitelists'
import { getChainGraphTableRowData } from './table-utils'

const upsertTableRows = async (
  tableRows$: Observable<EosioReaderTableRowsStreamData>,
) => {
  tableRows$.subscribe((row) => {
    try {
      if (chaingraph_token_registry.indexOf(row.code) !== -1) {
        const object: Balances_Insert_Input = {
          account: row.scope,
          balance: row.value.balance,
          chain_id: row.chain_id,
          contract: row.code,
        }
        hasura.upsert_balance({ object })
      } else {
        const tableRowData = getChainGraphTableRowData(row)
        hasura.upsert_table_row(tableRowData)
      }
    } catch (error) {
      console.log('======================================')
      console.log('Error updating contract row', row, error)
      console.log('======================================')
    }
  })
}

const deleteTableRows = async (
  tableRows$: Observable<EosioReaderTableRowsStreamData>,
) => {
  tableRows$.subscribe((row) => {
    try {
      const tableRowData = getChainGraphTableRowData(row)
      hasura.delete_table_row(tableRowData)
    } catch (error) {
      console.log('======================================')
      console.log('Error deleting contract row', row, error)
      console.log('======================================')
    }
  })
}

export const indexTableRows = async (
  tableRows$: Observable<EosioReaderTableRowsStreamData>,
) => {
  const upsertRows$ = tableRows$.pipe(filter((row) => Boolean(row.present)))
  const deletedRows$ = tableRows$.pipe(filter((row) => !Boolean(row.present)))

  upsertTableRows(upsertRows$)
  deleteTableRows(deletedRows$)
}
