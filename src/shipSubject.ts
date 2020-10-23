import WebSocket, { OpenEvent, CloseEvent, ErrorEvent } from 'ws'
import { Subject } from 'rxjs'
import { filter, min } from 'rxjs/operators'
import { Serialize, RpcInterfaces } from 'eosjs'
import { shipRequest, shipSubjectConfig, Types, SocketMessage, ShipBlockData } from './types'
import { serialize, deserialize } from './serialize'

const defaultShipRequest: shipRequest = {
  start_block_num: 0,
  end_block_num: 0,
  max_messages_in_flight: 1,
  have_positions: [],
  irreversible_only: false,
  fetch_block: true,
  fetch_traces: true,
  fetch_deltas: true,
}

// EOSIO SHiP Subject Factory
export default function createShipSubject({ url, request }: shipSubjectConfig) {
  // SHiP Subject State
  let socket: WebSocket
  let abi: RpcInterfaces.Abi | null
  let types: Types | null

  // create subjects
  const messages$ = new Subject<string>()
  const errors$ = new Subject<ErrorEvent>()
  const close$ = new Subject<CloseEvent>()
  const open$ = new Subject<OpenEvent>()
  const ship$ = new Subject<any>()

  // create socket connection with nodeos and push event data through subjects
  function connect() {
    socket = new WebSocket(url, { perMessageDeflate: false })
    socket.on('open', (e: OpenEvent) => open$.next(e))
    socket.on('close', (e: CloseEvent) => close$.next(e))
    socket.on('error', (e: ErrorEvent) => errors$.next(e))
    socket.on('message', (e: string) => messages$.next(e))
  }

  // handle open connection
  open$.subscribe(() => {
    console.log('connection opened')
  })

  // TODO: handle errors
  errors$.subscribe((e: ErrorEvent) => {
    console.log(e)
  })

  // handle socket close event
  close$.subscribe((e: CloseEvent) => {
    console.log('connection closed', e)
    // avoid memory leaks
    socket.removeAllListeners()
    // reset abi and types
    abi = null
    types = null
    // TODO: review reconnection
    console.log('reconnecting...')
    connect()
  })

  // filter incomming message stream by type
  const stringMessages$ = messages$.pipe(filter((message: SocketMessage) => typeof message === 'string'))
  const serializedMessages$ = messages$.pipe(filter((message: SocketMessage) => typeof message !== 'string'))

  // SHiP sends the abi as string on first message, we need to build get the SHiP types from it
  // types are necessary to deserialize subsequent messages
  stringMessages$.subscribe((message: SocketMessage) => {
    abi = JSON.parse(message as string) as RpcInterfaces.Abi
    types = Serialize.getTypesFromAbi(Serialize.createInitialTypes(), abi) as Types

    const serializedRequest = serialize(types, 'get_blocks_request_v0', { ...defaultShipRequest, ...request })
    socket.send(serializedRequest)
  })

  serializedMessages$.subscribe((message: SocketMessage) => {
    if (!types) throw new Error('missing types')

    // deserialize SHiP messages
    const blockData = deserialize(types, 'get_blocks_result_v0', message as Uint8Array) // get_blocks_result_v0 doesn't work

    // push block data
    ship$.next(blockData)

    // send acknowledgement to SHiP once the message has been proccesed
    socket.send(['get_blocks_ack_request_v0', { num_messages: 1 }])
  })

  return {
    connect,
    ship$,
  }
}
