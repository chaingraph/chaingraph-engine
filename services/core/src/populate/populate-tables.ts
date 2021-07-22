import { rpc } from '../utils/eosio'
import { hasura } from '../hasura'
import { LoaderBuffer, ChainGraphTableRegistry } from './../whitelists/loader'

const populateTableRow = async (
  row: any,
  table_registry: ChainGraphTableRegistry,
) => {
  try {
    let primary_key: string

    switch (table_registry.table_key) {
      case 'singleton':
        primary_key = 'singleton'
        break

      case 'standard_token':
        primary_key = row.data.balance.split(' ')[1]
        break

      default:
        if (table_registry.table_key.includes('-asset-symbol')) {
          primary_key =
            row.data[
              table_registry.table_key.replace('-asset-symbol', '')
            ].split(' ')[1]
        } else if (table_registry.table_key.includes('-token-symbol')) {
          primary_key =
            row.data[
              table_registry.table_key.replace('-token-symbol', '')
            ].split(',')[1]
        } else {
          primary_key = row.data[table_registry.table_key]
        }
        break
    }

    const variables = {
      // chain_id:
      //   process.env.CHAIN_ID ||
      //   'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      chain: 'eos',
      contract: table_registry.code,
      table: table_registry.table,
      scope: row.scope,
      primary_key: primary_key.toString(),
      data: row.data,
    }
    hasura.query.upsert_table_row(variables)
  } catch (error) {
    console.log('ERROR!!!', 'row', row)
    console.log('ERROR!!!', 'table_registry', table_registry)
  }
}

export const populateTableRows = async (whitelistReader: LoaderBuffer) => {
  whitelistReader
    .chaingraph_table_registry()
    .forEach(async (table_registry, index) => {
      try {
        const entry = whitelistReader.table_rows_whitelist()[index]

        const scopes = entry.scope
          ? [{ scope: entry.scope }]
          : (
              await rpc.get_table_by_scope({
                code: entry.code,
                table: entry.table,
                limit: 1000000,
              })
            ).rows

        const getTableRowsRequests = scopes.map(
          async ({ scope }: { scope: string }) => {
            const { rows } = await rpc.get_table_rows({
              ...entry,
              scope,
              limit: 1000000,
            })
            // TODO: recursive if more than 1000 entries
            return rows.map((row: any) => ({ scope, data: row }))
          },
        )

        const allRows = await Promise.all(getTableRowsRequests)
        const rows = allRows.flat()

        rows.forEach((row: any) => populateTableRow(row, table_registry))
      } catch (error) {
        console.log(JSON.stringify(error, null, 2))
        throw new Error('Error populating database')
      }
    })
}
