export const genesiseden = [
  {
    code: 'genesis.eden',
    table: 'account',
    table_key: 'owner',
  },
  {
    code: 'genesis.eden',
    table: 'auction',
    table_key: 'asset_id',
  },
  {
    code: 'genesis.eden',
    table: 'endorsement',
    table_key: 'id',
  },
  {
    code: 'genesis.eden',
    table: 'global',
    table_key: 'singleton',
  },
  {
    code: 'genesis.eden',
    table: 'induction',
    table_key: 'id',
  },
  {
    code: 'genesis.eden',
    table: 'member',
    table_key: 'account',
  },
  {
    code: 'genesis.eden',
    table: 'memberstats',
    table_key: 'singleton',
  },
  //   {
  //   code: 'genesis.eden',
  //   table: 'migration',
  //   table_key: '',
  // }, mcleos get table genesis.eden "" migration throws unpack data error
]
