import { ReadersConfig } from 'types/config'

export const readersConfig: ReadersConfig = {
  eosio: [
    {
      name: 'EOS',
      chain_id: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      ws_url: 'ws://localhost:8080',
      start_block: 0,
      stop_block: 0,
      irreversible_only: false,
      ship_prefetch_blocks: 50,
      ship_min_block_confirmation: 30,
      ds_threads: 4,
      ds_experimental: false,
    },
  ],
}
