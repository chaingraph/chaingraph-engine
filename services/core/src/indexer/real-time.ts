import { loadReader } from './ship-reader'
import { LoaderBuffer } from '../whitelists'
import { hasura } from '../hasura'
import omit from 'lodash.omit'
import { log } from '../utils/logger'
import { getChainGraphTableRowData, getPrimaryKey } from '../utils/table-row'

export const startRealTimeStreaming = async (whitelistReader: LoaderBuffer) => {
  log.info('Starting realtime indexing from eosio ship ...')

  const { close$, blocks$, errors$ } = await loadReader(whitelistReader)

  // we subscribe to eosio ship reader whitelisted block stream and insert the data in postgres thru hasura
  // this stream contains only the blocks that are relevant to the whitelisted contract tables and actions
  blocks$.subscribe(async (block) => {
    try {
      log.info(
        `Processed block ${block.block_num}. Transactions: ${block.transactions.length}, actions ${block.actions.length}, table rows ${block.table_rows.length} `,
      )

      // insert table_rows
      const insertTableRowsObjects = block.table_rows
        .filter((row) => row.present)
        .map((row) => getChainGraphTableRowData(row, whitelistReader))

      hasura.query.upsert_table_rows({ objects: insertTableRowsObjects })

      // delete table_rows
      const deleteTableRows = block.table_rows
        .filter((row) => !row.present)
        .map((row) => {
          return {
            chain: {
              _eq: 'eos',
            },
            contract: {
              _eq: row.code,
            },
            table: {
              _eq: row.table,
            },
            primary_key: {
              _eq: getPrimaryKey(row, whitelistReader),
            },
          }
        })
      hasura.query.delete_table_rows({ where: { _or: deleteTableRows } })

      // insert block data
      await hasura.query.upsert_block({
        object: {
          chain: 'eos',
          ...omit(block, ['actions', 'table_rows', 'transactions', 'chain_id']),
        },
      })

      // insert transaction data
      const transactions = block.transactions.map((trx) => ({
        ...trx,
        chain: 'eos',
        block_num: block.block_num,
      }))
      await hasura.query.upsert_transactions({
        objects: transactions,
      })

      // insert action traces
      const actions = block.actions.map((action) => ({
        ...omit(action, 'account', 'name', 'elapsed', 'return_value'),
        contract: action.account,
        action: action.name,
        chain: 'eos',
      }))
      hasura.query.upsert_actions({ objects: actions })
    } catch (error) {
      log.fatal(error)
      process.exit(1)
    }
  })

  close$.subscribe(() => log.info('connection closed'))
  // log$.subscribe(({ message }: any) => log.info('ShipReader:', message))
  errors$.subscribe((error) => log.error('ShipReader:', error))
}
