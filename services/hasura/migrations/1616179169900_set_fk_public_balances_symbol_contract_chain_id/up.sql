alter table "public"."balances"
  add constraint "balances_symbol_contract_chain_id_fkey"
  foreign key ("symbol", "contract", "chain_id")
  references "public"."tokens"
  ("symbol", "contract", "chain_id") on update restrict on delete restrict;
