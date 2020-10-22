import createShipSubject from './shipSubject'

const { EOSIO_SOCKET_ENDPOINT } = process.env
if (!EOSIO_SOCKET_ENDPOINT) throw new Error('Missing EOSIO_SOCKET_ENDPOINT env var')

createShipSubject({ url: EOSIO_SOCKET_ENDPOINT, request: { start_block_num: 148394875, end_block_num: 0xffffffff } })
