alter table "public"."actions" drop constraint "actions_chain_transaction_id_fkey",
  add constraint "actions_transaction_id_chain_fkey"
  foreign key ("transaction_id", "chain")
  references "public"."transactions"
  ("transaction_id", "chain") on update restrict on delete cascade;
