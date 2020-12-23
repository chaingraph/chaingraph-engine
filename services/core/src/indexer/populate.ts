import { rpc } from './eosio'
import { hasura } from './hasura-client'
import { chaingraph_registry, table_rows_whitelist } from './whitelists'

export const populate = () => {
  chaingraph_registry.forEach(async (table, index) => {
    try {
      const { rows } = await rpc.get_table_rows(table_rows_whitelist[index])

      rows.forEach(async (row: any) => {
        const variables = {
          chain_id:
            'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
          contract: table.code,
          table: table.table,
          scope: table.scope || table.code,
          primary_key:
            table.table_key === 'singleton'
              ? 'singleton'
              : row[table.table_key],
          data: row,
        }
        hasura.upsert_table_row(variables)
      })
    } catch (error) {
      console.log(JSON.stringify(error, null, 2))
      throw new Error('Error populating data database')
    }
  })
}
