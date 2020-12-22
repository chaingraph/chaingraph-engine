import omit = require('lodash.omit')
import { rpc } from './eosio'
import { hasura } from './hasura-client'
import { chaingraph_registry } from './whitelists'

export const populate = () => {
  chaingraph_registry.forEach(async (table) => {
    try {
      const { rows } = await rpc.get_table_rows(omit(table, ['table_key']))

      rows.forEach((row: any) => {
        const variables = {
          chain_id:
            'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
          contract: row.code,
          table: row.table,
          scope: row.scope,
          primary_key:
            table.table_key === 'singleton'
              ? 'singleton'
              : row[table.table_key],
          data: row.data,
        }
        hasura.upsert_table_row(variables)
      })
    } catch (error) {
      console.log(error)
      throw new Error('Error populating data database')
    }
  })
}
