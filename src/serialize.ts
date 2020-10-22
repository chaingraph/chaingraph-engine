// serialization and deserialization helpers
import { Serialize } from 'eosjs'
import { TextDecoder, TextEncoder } from 'util'
import { Types } from './types'

const serializer = new Serialize.SerializerState({ bytesAsUint8Array: true })
const encoding = { textEncoder: new TextEncoder(), textDecoder: new TextDecoder() }

export function serialize(types: Types, type: string, value: {}) {
  const buffer = new Serialize.SerialBuffer(encoding)
  Serialize.getType(types, type).serialize(buffer, value)

  return buffer.asUint8Array()
}

export function deserialize(types: Types, type: string, array: Uint8Array) {
  const buffer = new Serialize.SerialBuffer({ ...encoding, array })
  console.log('------------------------ deserialize ---------------------------')
  const result = Serialize.getType(types, type).deserialize(buffer, serializer)
  console.log('----------------------------------------------------------------')
  if (buffer.readPos !== array.length) throw new Error(`oops: ${type}`)
  return result
}
