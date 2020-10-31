const { Serialize } = require('eosjs')
const commander = require('commander')
const WebSocket = require('ws')
const txEnc = new TextEncoder()
const txDec = new TextDecoder()

class Connection {
  // Connect to the State-History Plugin
  constructor({ socketAddress }) {
    // Protocol ABI
    this.abi = null

    // Types in the protocol ABI
    this.types = null

    // Tables in the protocol ABI
    this.tables = new Map()

    // The socket
    this.ws = new WebSocket(socketAddress, { perMessageDeflate: false })
    this.ws.on('message', (data) => this.onMessage(data))
  }

  // Convert JSON to binary. type identifies one of the types in this.types.
  serialize(type, value) {
    const buffer = new Serialize.SerialBuffer({ textEncoder: txEnc, textDecoder: txDec })
    Serialize.getType(this.types, type).serialize(buffer, value)
    return buffer.asUint8Array()
  }

  // Convert binary to JSON. type identifies one of the types in this.types.
  deserialize(type, array) {
    const buffer = new Serialize.SerialBuffer({ textEncoder: txEnc, textDecoder: txDec, array })
    return Serialize.getType(this.types, type).deserialize(buffer, new Serialize.SerializerState({ bytesAsUint8Array: true }))
  }

  // Serialize a request and send it to the plugin
  send(request) {
    this.ws.send(this.serialize('request', request))
  }

  // Receive a message
  onMessage(data) {
    try {
      if (!this.abi) {
        // First message is the protocol ABI
        this.abi = JSON.parse(data)
        this.types = Serialize.getTypesFromAbi(Serialize.createInitialTypes(), this.abi)
        for (const table of this.abi.tables) {
          this.tables.set(table.name, table.type)
        }

        // Send the first request
        this.send([
          'get_blocks_request_v0',
          {
            max_messages_in_flight: 5,
            have_positions: [],
            irreversible_only: false,
            fetch_block: true,
            fetch_traces: true,
            fetch_deltas: true,
            start_block_num: 150072626,
            end_block_num: 0xffffffff,
          },
        ])
      } else {
        // Deserialize and dispatch a message
        console.log('Data size:', data.length)
        const [type, response] = this.deserialize('result', data)
        this[type](response)
        // Ack Block
        this.send(['get_blocks_ack_request_v0', { num_messages: 1 }])
      }
    } catch (e) {
      console.log(e)
      process.exit(1)
    }
  }

  // Report status
  get_blocks_result_v0(response) {
    console.log('get_blocks_result_v0:')
    console.log(
      `block_num: ${response.head.block_num}, block_size: ${response.block.length}, traces_size: ${response.traces.length}, deltas_size: ${response.deltas.length}`,
    )
  }
} // Connection

commander
  .option('-a, --socket-address [addr]', 'Socket address', 'ws://localhost:8080/')
  .option('-f, --first-block [num]', 'Socket address', 2)
  .parse(process.argv)

const connection = new Connection(commander)
