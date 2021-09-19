alter table "public"."balances"
  add constraint "balances_chain_id_fkey"
  foreign key ("chain_id", "contract")
  references "public"."tokens"
  ("chain_id", "contract") on update restrict on delete restrict;
