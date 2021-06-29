// const pAll = require('p-all')
import { rpc } from '../utils/eosio'
import { hasura } from '../hasura'
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
      primary_key = row.balance.split(' ')[1]
      break

    default:
      if (table_registry.table_key.includes('-asset-symbol')) {
        primary_key =
          row[table_registry.table_key.replace('-asset-symbol', '')].split(
            ' ',
          )[1]
      } else if (table_registry.table_key.includes('-token-symbol')) {
        primary_key =
          row[table_registry.table_key.replace('-token-symbol', '')].split(
            ',',
          )[1]
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
  hasura.query.upsert_table_row(variables)
}

export const populateTableRows = () => {
  chaingraph_table_registry.forEach(async (table_registry, index) => {
    try {
      const entry = table_rows_whitelist()[index]

      if(!entry) throw new Error("Entry not found");
      
      const scopes = entry.scope
        ? [{ scope: entry.scope }]
        : (
            await rpc.get_table_by_scope({
              code: entry.code,
              table: entry.table,
            })
          ).rows

      const getTableRowsRequests = scopes.map(async ({ scope }: any) => {
          const { rows } = await rpc.get_table_rows({
            ...entry,
            scope,
            limit: 1000,
          })
          // TODO: recursive if more than 1000 entries
          return rows
      })

      // TODO: concurrency?
      // const allRows = await pAll(getTableRowsRequests, { concurrency: 50 })
      const allRows = await Promise.all(getTableRowsRequests)
      const rows = allRows.flat()

      rows.forEach((row: any) => populateTableRow(row, table_registry))
    } catch (error) {
      console.log(JSON.stringify(error, null, 2))
      throw new Error('Error populating database')
    }
  })
}
