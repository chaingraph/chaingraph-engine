alter table "public"."actions" drop constraint "actions_transaction_id_chain_fkey",
  add constraint "actions_chain_transaction_id_fkey"
  foreign key ("chain", "transaction_id")
  references "public"."transactions"
  ("chain", "transaction_id") on update restrict on delete cascade;
