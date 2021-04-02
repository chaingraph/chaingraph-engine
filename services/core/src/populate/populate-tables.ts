import pAll from 'p-all'
import { rpc } from '../utils/eosio'
import { hasura } from '../hasura/hasura-client'
import {
  ChainGraphTableRegistry,
  chaingraph_table_registry,
  table_rows_whitelist,
} from '../whitelists'

const populateTableRow = async (
  row: any,
  table_registry: ChainGraphTableRegistry,
) => {
  let primary_key: string

  switch (table_registry.table_key) {
    case 'singleton':
      primary_key = 'singleton'
      break

    case 'standard_token':
      console.log('standard token')
      primary_key = row.balance.split(' ')[1]
      break

    default:
      if (table_registry.table_key.includes('-asset-symbol')) {
        primary_key = row[
          table_registry.table_key.replace('-asset-symbol', '')
        ].split(' ')[1]
      } else if (table_registry.table_key.includes('-token-symbol')) {
        primary_key = row[
          table_registry.table_key.replace('-token-symbol', '')
        ].split(',')[1]
      } else {
        primary_key = row[table_registry.table_key]
      }
      break
  }
  const variables = {
    chain_id:
      'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    contract: table_registry.code,
    table: table_registry.table,
    scope: table_registry.scope || table_registry.code,
    primary_key: primary_key.toString(),
    data: row,
  }
  hasura.upsert_table_row(variables)
}

export const populateTableRows = () => {
  chaingraph_table_registry.forEach(async (table_registry, index) => {
    try {
      const entry = table_rows_whitelist[index]

      const scopes = entry.scope
        ? [{ scope: entry.scope }]
        : (
          await rpc.get_table_by_scope({
            code: entry.code,
            table: entry.table,
          })
        ).rows

      const getTableRowsRequests = scopes.map(
        ({ scope }: { scope: 'string' }) => {
          return async () => {
            const { rows } = await rpc.get_table_rows({ ...entry, scope })
            return rows
          }
        },
      )

      const allRows = await pAll(getTableRowsRequests, { concurrency: 50 })
      const rows = allRows.flat()

      // console.log("===>", table_registry, {scopes: scopes.length, rows: rows.length })

      rows.forEach((row: any) => populateTableRow(row, table_registry))
    } catch (error) {
      console.log(JSON.stringify(error, null, 2))
      throw new Error('Error populating data database')
    }
  })
}
