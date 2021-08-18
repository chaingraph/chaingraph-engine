import { log } from '../utils/logger'
import { LoaderBuffer } from '../whitelists'
import { rpc } from '../utils/eosio'
import { getChainGraphTableRowData } from '../utils/table-row'
import { hasura } from '../hasura'
import omit from 'lodash.omit'

export const loadCurrentTableState = async (whitelistReader: LoaderBuffer) => {
  log.info('Loading current table state ...')

  // get the contract registry
  const registry = whitelistReader.get_chaingraph_table_registry()

  // for each table in registry get all of its data ( all scopes and rows ) and pushed it to the database
  registry.forEach(async (entry) => {
    // load all scopes for the table
    const scopes = entry.scope
      ? [{ scope: entry.scope }]
      : (
        await rpc.get_table_by_scope({
          code: entry.code,
          table: entry.table,
          limit: 1000000,
        })
      ).rows

    // get all table rows acrross all scope flat them out on allRows array
    const allRows = (
      await Promise.all(
        scopes.map(async ({ scope }: { scope: string }) => {
          const { rows } = await rpc.get_table_rows({
            ...entry,
            scope,
            limit: 1000000,
          })
          return rows.map((row) => {
            // TODO: fix types
            return getChainGraphTableRowData(
              {
                value: row,
                present: 'true',
                ...omit(
                  entry,
                  'table_key',
                  'scope',
                  'lower_bound',
                  'upper_bound',
                ),
                scope,
                primary_key: '', // this doesn matter here
              },
              whitelistReader,
            )
          })
        }),
      )
    ).flat()

    // upsert all table rows on the database
    await hasura.query.upsert_table_rows({ objects: allRows })
    log.info(
      `State for ${JSON.stringify(
        omit(entry, 'table_key'),
      )} succesfully loaded!`,
    )
  })
}
