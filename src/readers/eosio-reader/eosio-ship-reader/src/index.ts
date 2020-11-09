import WebSocket, { OpenEvent, CloseEvent, ErrorEvent } from 'ws'
import { Subject } from 'rxjs'
import { filter } from 'rxjs/operators'
import { Serialize, RpcInterfaces } from 'eosjs'
import { EosioShipRequest, EosioShipReaderConfig, Types, SocketMessage } from './types'
import { serialize, deserialize } from './serialize'

export default function createEosioShipReader({ url, request }: EosioShipReaderConfig) {
  // SHiP Subject State
  let socket: WebSocket
  let abi: RpcInterfaces.Abi | null
  let types: Types | null

  // create subjects
  const messages$ = new Subject<string>()
  const errors$ = new Subject<ErrorEvent>()
  const close$ = new Subject<CloseEvent>()
  const open$ = new Subject<OpenEvent>()
  const blocks$ = new Subject<any>()

  // create socket connection with nodeos ship and push event data through rx subjects
  const connect = () => {
    socket = new WebSocket(url, { perMessageDeflate: false })
    socket.on('open', (e: OpenEvent) => open$.next(e))
    socket.on('close', (e: CloseEvent) => close$.next(e))
    socket.on('error', (e: ErrorEvent) => errors$.next(e))
    socket.on('message', (e: string) => messages$.next(e))
  }

  // handle open connection
  open$.subscribe(() => console.log('connection opened'))

  // TODO: handle errors
  errors$.subscribe((e: ErrorEvent) => console.log(e))

  // handle socket close event
  close$.subscribe((e: CloseEvent) => {
    console.log('connection closed', e)
    socket.removeAllListeners()

    abi = null
    types = null
  })

  // filter ship socket messages stream by type (string for abi and )
  const abiMessages$ = messages$.pipe(filter((message: SocketMessage) => typeof message === 'string'))
  const serializedMessages$ = messages$.pipe(filter((message: SocketMessage) => typeof message !== 'string')) // Uint8Array?

  // SHiP sends the abi as string on first message, we need to get the SHiP types from it
  // types are necessary to deserialize subsequent messages
  abiMessages$.subscribe((message: SocketMessage) => {
    abi = JSON.parse(message as string) as RpcInterfaces.Abi
    types = Serialize.getTypesFromAbi(Serialize.createInitialTypes(), abi) as Types
    const defaultShipRequest: EosioShipRequest = {
      start_block_num: 0,
      end_block_num: 0xffffffff,
      max_messages_in_flight: 20,
      have_positions: [],
      irreversible_only: false,
      fetch_block: true,
      fetch_traces: true,
      fetch_deltas: true,
    }
    const serializedRequest = serialize('request', ['get_blocks_request_v0', { ...defaultShipRequest, ...request }], types)
    socket.send(serializedRequest)
  })

  serializedMessages$.subscribe((message: SocketMessage) => {
    if (!types) throw new Error('missing types')
    const serializedData = message as Uint8Array

    // send acknowledgement to SHiP
    // TODO: confirm every 20 messages insted every single message
    socket.send(serialize('request', ['get_blocks_ack_request_v0', { num_messages: 1 }], types))

    // deserialize SHiP messages
    const deserializedData = deserialize('result', serializedData, types)

    blocks$.next(deserializedData[1])
  })

  return {
    connect,
    blocks$,
    open$,
    close$,
    errors$,
  }
}
