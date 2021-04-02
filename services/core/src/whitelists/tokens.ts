export const chaingraph_token_registry: string[] = [
  'mockeostoken',
  'tokenbitcash',
  'bitcashtokns',
]

export const chaingraph_token_tables_registry = chaingraph_token_registry
  .map((token_contract) => {
    return [
      {
        code: token_contract,
        table: 'stat',
        table_key: 'supply-asset-symbol',
      },
      {
        code: token_contract,
        table: 'accounts',
        table_key: 'balance-asset-symbol',
      },
    ]
  })
  .flat()
