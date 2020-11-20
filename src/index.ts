// import { EosTable, ShipBlockData } from 'types'
// import { Table_Rows_Insert_Input } from 'generated/graphql'

// const { EOSIO_SOCKET_ENDPOINT } = process.env
// if (!EOSIO_SOCKET_ENDPOINT) throw new Error('Missing EOSIO_SOCKET_ENDPOINT env var')

// const shipSubject = createShipSubject({
//   url: EOSIO_SOCKET_ENDPOINT,
//   request: { start_block_num: 150089933, end_block_num: 0xffffffff },
// })

// const { ship$ } = shipSubject

// // TODO: Move EOS_TABLES to database
// const EOS_TABLES: Array<EosTable> = [
//   { code: 'bitcashtests', scope: 'bitcashtests', table: 'appstates' },
//   { code: 'bitcashtests', scope: 'bitcashtests', table: 'exfees' },
//   { code: 'bitcashtests', scope: 'bitcashtests', table: 'fees' },
//   { code: 'bitcashtests', scope: 'bitcashtests', table: 'accounts' },
//   { code: 'bitcashtests', scope: 'bitcashtests', table: 'gpositions' },
//   { code: 'bitcashtests', scope: 'bitcashtests', table: 'limits' },
//   { code: 'bitcashtests', scope: 'bitcashtests', table: 'positions' },
//   { code: 'bitcashtests', scope: 'bitcashtests', table: 'stat' },
// ]

// const getTableRow = (blockData: ShipBlockData) => {
//   const table_row = {} as Table_Rows_Insert_Input

//   blockData.forEach((item: any) => {
//     // TODO : filter out EOSTABLES
//     // NOTE: this is just for demo. indexOf makes no sense here,
//     //        replace this with real filtering logic once the socket conneciton issue is resolved
//     if (EOS_TABLES.indexOf(item)) {
//       console.log('yay!')
//     }
//   })

//   return table_row
// }

// ship$.subscribe((shipData) => {
//   if (shipData.block && shipData.traces && shipData.deltas) {
//     console.log(
//       `block_num: ${shipData.head.block_num}, block_size: ${shipData.block.length}, traces_size: ${shipData.traces.length}, deltas_size: ${shipData.deltas.length}`,
//     )
//   } else {
//     // console.log(shipData)
//   }

//   // massage blockData
//   // const table_row = getTableRow(blockData)
//   // // TODO : push data to postgres
//   // hasura.upsert_table_row({ table_row })
// })

// shipSubject.connect()

import * as http from 'http'

const hostname = process.env.HOSTNAME || '0.0.0.0'
const port = Number(process.env.PORT || 3000)

const server = http.createServer((_req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
