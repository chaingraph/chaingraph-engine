import pAll from 'p-all'
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
        try {
          primary_key =
            row[table_registry.table_key.replace('-token-symbol', '')].split(
              ',',
            )[1]
        } catch (err) {
          console.log({ row, table_registry })
          throw new Error(' index error')
        }
      } else {
        // hard fix
        if (row.account_v0) {
          console.log('account_v0')
          primary_key = row.account_v0[table_registry.table_key]
        } else if (row.member_v0) {
          console.log('member_v0')
          primary_key = row.member_v0[table_registry.table_key]
        } else if (row.endorsement_v0) {
          console.log('endorsement_v0')
          primary_key = row.endorsement_v0[table_registry.table_key]
        } else if (row.induction_v0) {
          console.log('induction_v0')
          primary_key = row.induction_v0[table_registry.table_key]
        } else if (row.auction_v0) {
          primary_key = row.auction_v0[table_registry.table_key]
        } else {
          primary_key = row[table_registry.table_key]
        }
      }
      break
  }

  // if (primary_key === undefined) {
  //   console.log({ row, table_registry })
  //   throw new Error('HERE')
  // }

  const variables = {
    chain_id:
      'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    contract: table_registry.code,
    table: table_registry.table,
    scope: table_registry.scope || table_registry.code,
    primary_key: primary_key?.toString() || 'error',
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
            const { rows } = await rpc.get_table_rows({
              ...entry,
              scope,
              limit: 1000,
            })
            // TODO: recursive if more than 1000 entries
            return rows
          }
        },
      )

      const allRows = await pAll(getTableRowsRequests, { concurrency: 50 })
      const rows = allRows.flat()

      rows.forEach((row: any) => populateTableRow(row, table_registry))
    } catch (error) {
      console.log(JSON.stringify(error, null, 2))
      throw new Error('Error populating database')
    }
  })
}
