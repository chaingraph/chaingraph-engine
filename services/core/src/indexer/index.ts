import { loadReader } from './ship-reader'
// import { indexActions } from './index-actions'
// import { indexTableRows } from './index-tables'
import { LoaderBuffer } from './../whitelists/loader'
import { hasura } from '../hasura'
import omit from 'lodash.omit'

export const startIndexer = async (whitelistReader: LoaderBuffer) => {
  console.log('Starting indexer ...')

  const { close$, blocks$, errors$, log$ } = await loadReader(whitelistReader)

  blocks$.subscribe(async (block) => {
    console.log(block)

    // insert table_rows
    const insertTableRowsObjects = block.table_rows
      .filter((row) => row.present)
      .map((row) => ({
        ...omit(row, 'value', 'code', 'present'),
        data: row.value,
        contract: row.code,
        chain: 'eos',
      }))
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
            _eq: row.primary_key,
          },
        }
      })
    hasura.query.delete_table_rows({ where: { _or: deleteTableRows } })

    // NOTE:
    //   We don't await for table_rows inserts to parelalize db updates
    //   To insert actions we need to await because of foreign key dependencies
    //   This can could be improved with postgres function perhaps

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

    try {
      hasura.query.upsert_actions({ objects: actions })
    } catch (error) {
      console.log('=============================')
      console.log({ actions })
      process.exit(1)
    }
  })

  // indexActions(blocks$)
  // indexTableRows(rows$, whitelistReader)

  close$.subscribe(() => console.log('connection closed'))

  log$.subscribe(({ message }: any) => console.log('ShipReader:', message))
  errors$.subscribe((error) => console.log('ShipReader:', error))
}
