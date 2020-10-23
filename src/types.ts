import { Serialize } from 'eosjs'

// struct get_blocks_request_v0 https://git.io/Jvrru
export type shipRequest = {
  start_block_num: number
  end_block_num: number
  max_messages_in_flight?: number
  have_positions?: []
  irreversible_only?: boolean
  fetch_block?: boolean
  fetch_traces?: boolean
  fetch_deltas?: boolean
}

export type shipSubjectConfig = {
  url: string
  request: shipRequest
}

export type Types = Map<string, Serialize.Type>

export type SocketMessage = string | Uint8Array

export type ShipBlockData = any

export declare type EosTable = {
  code: string
  scope: string
  table: string
}
