import { EosioReaderTableRowsStreamData } from '@blockmatic/eosio-ship-reader'
import { asset } from 'eos-common'
import {
  Balances_Insert_Input,
  Tokens_Insert_Input,
} from 'generated/hasura-graphql'
import { hasura } from '../hasura/hasura-client'
import { Observable } from 'rxjs'
import { filter } from 'rxjs/internal/operators/filter'
import { chaingraph_token_registry } from '../whitelists/tokens'
import { getChainGraphTableRowData } from './table-utils'

const upsertTableRows = async (
  tableRows$: Observable<EosioReaderTableRowsStreamData>,
) => {
  tableRows$.subscribe((row) => {
    try {
      if (chaingraph_token_registry.indexOf(row.code) !== -1) {
        console.log('--------------is token balance--------------')

        if (row.table === 'accounts') {
          const object: Balances_Insert_Input = {
            account: row.scope,
            balance: row.value.balance,
            chain_id: row.chain_id,
            contract: row.code,
            symbol: row.value.balance.split(' ')[1],
          }
          hasura.upsert_balance({ object })
        }

        // TODO: review this
        const tokenAsset = asset(row.value.supply)
        if (row.table === 'stat') {
          const tokenObj: Tokens_Insert_Input = {
            chain_id: row.chain_id,
            contract: row.code,
            symbol: tokenAsset.symbol.code().toString(),
            precision: tokenAsset.symbol.precision(),
            ...row.value,
          }
          console.log({ row, tokenObj })
          hasura.upsert_token({ object: tokenObj })
        }
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
