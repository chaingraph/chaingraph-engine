import WebSocket, { OpenEvent, CloseEvent, ErrorEvent } from 'ws'
import { Subject, merge } from 'rxjs'
import { Serialize, RpcInterfaces } from 'eosjs'
import { shipRequest, shipSubjectConfig, Types } from './types'
import { serialize, deserialize } from './serialize'

const defaultShipRequest: shipRequest = {
  start_block_num: 0,
  end_block_num: 0,
  max_messages_in_flight: 1,
  have_positions: [],
  irreversible_only: false,
  fetch_block: true,
  fetch_traces: true,
  fetch_deltas: false,
}

// EOSIO SHiP Subject Factory
export default function createShipSubject({ url, request }: shipSubjectConfig) {
  // internal SHiP Subject State
  let socket: WebSocket
  let abi: RpcInterfaces.Abi
  let types: Types

  // create connection subjects
  const messages$ = new Subject<string>()
  const errors$ = new Subject<ErrorEvent>()
  const close$ = new Subject<CloseEvent>()
  const open$ = new Subject<OpenEvent>()

  // create socket and push through subjects
  function connect() {
    socket = new WebSocket(url, { perMessageDeflate: false })
    socket.on('open', (e: OpenEvent) => open$.next(e))
    socket.on('close', (e: CloseEvent) => close$.next(e))
    socket.on('error', (e: ErrorEvent) => errors$.next(e))
    socket.on('message', (e: string) => messages$.next(e))
  }

  // handle open connection
  open$.subscribe((e: OpenEvent) => {
    console.log('connection opened', e)
  })

  // handle errors and reconnection
  const reconnection$ = merge(errors$, close$)
  reconnection$.subscribe((e: CloseEvent | ErrorEvent) => {
    console.log(e)
  })

  // handle socket close event
  close$.subscribe((e: CloseEvent) => {
    console.log('connection closed', e)
    console.log('reconnecting...')

    // TODO: work on reconnectiong, avoid memory leaks
    socket.removeAllListeners()
    connect()
  })

  // handle incomming messages
  // TODO: use pipe() and return subject
  messages$.subscribe((message: string | Uint8Array) => {
    // catch SHiP abi on first message and get types from abi
    // types are necessary to deserialize subsequent EOSIO state binary messages
    if (!abi && typeof message === 'string') {
      abi = JSON.parse(message)
      types = Serialize.getTypesFromAbi(Serialize.createInitialTypes(), abi)
      console.log('got abi')
      console.log('sending request ...')
      console.log({ ...defaultShipRequest, ...request })
      socket.send(serialize(types, 'get_blocks_request_v0', { ...defaultShipRequest, ...request }))
    }

    // deserialize state messages
    if (typeof message === 'string') return
    const array: Uint8Array = message
    const result = deserialize(types, 'result', array)
    console.log('result', result)
  })

  // start
  connect()
  return {}
}
