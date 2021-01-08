import { Upsert_Table_RowMutationVariables } from 'generated/graphql'
import pAll from 'p-all'
import { rpc } from './eosio'
import { hasura } from './hasura-client'
import {
  ChainGraphTableRegistry,
  chaingraph_registry,
  table_rows_whitelist,
} from './whitelists'

const populateStandardToken = async (
  table_registry: ChainGraphTableRegistry,
) => {
  console.log('=============================================')
  const { rows } = await rpc.get_table_by_scope({
    code: table_registry.code,
    table: table_registry.table,
    limit: 10000000,
  })
  const table_rows_requests = rows.map(({ scope }: { scope: string }) => {
    return async () => {
      const { rows: rows2 } = await rpc.get_table_rows({
        code: table_registry.code,
        table: table_registry.table,
        scope,
      })
      const chaingraphTableRowsData = rows2.map(
        ({ balance }: { balance: string }) => {
          return {
            contract: table_registry.code,
            table: table_registry.table,
            scope,
            chain_id:
              'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
            primary_key: balance.split(' ')[1],
            data: { balance },
          }
        },
      )
      return chaingraphTableRowsData
    }
  })

  const table_rows = (await (
    await pAll(table_rows_requests, { concurrency: 50 })
  ).flat()) as Upsert_Table_RowMutationVariables[]

  // NOTE: WTF this!
  // const table_rows_insert_rows: Array<Table_Rows_Insert_Input>=  table_rows.map((input:Table_Rows_Insert_Input) => {
  //   return input!
  // })

  // const response = await hasura.insert_table_rows({ objects: table_rows_insert_rows! })

  const table_rows_insert_requests = table_rows.map((row) => {
    return () => hasura.upsert_table_row(row)
  })

  pAll(table_rows_insert_requests, { concurrency: 50 })
}

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
      primary_key = row[table_registry.table_key]
      break
  }

  const variables = {
    chain_id:
      'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    contract: table_registry.code,
    table: table_registry.table,
    scope: table_registry.scope || table_registry.code,
    primary_key,
    data: row,
  }
  hasura.upsert_table_row(variables)
}

export const populate = () => {
  chaingraph_registry.forEach(async (table_registry, index) => {
    try {
      if (table_registry.table_key === 'standard_token') {
        populateStandardToken(table_registry)
      } else {
        const { rows } = await rpc.get_table_rows(table_rows_whitelist[index])
        rows.forEach((row: any) => {
          populateTableRow(row, table_registry)
        })
      }
    } catch (error) {
      console.log(JSON.stringify(error, null, 2))
      throw new Error('Error populating data database')
    }
  })
}
