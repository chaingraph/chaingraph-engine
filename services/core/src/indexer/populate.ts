import { rpc } from './eosio'
import { table_rows_whitelist } from './whitelists'

table_rows_whitelist.forEach(async (table_row) => {
  try {
    const { rows } = await rpc.get_table_rows(table_row)

    rows.forEach(() => {
      //   const variables = {
      //     chain_id:
      //       'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      //     contract: row.code,
      //     table: row.table,
      //     scope: row.scope,
      //     primary_key: row.primary_key,
      //     data: row,
      //   }
      //   hasura.upsert_table_row(variables)
    })
  } catch (error) {
    console.log(error)
    throw new Error('Error populating data database')
  }
})
