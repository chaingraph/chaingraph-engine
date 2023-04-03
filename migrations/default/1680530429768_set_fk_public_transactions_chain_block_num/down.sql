alter table "public"."transactions" drop constraint "transactions_chain_block_num_fkey",
  add constraint "transactions_chain_block_num_fkey"
  foreign key ("chain")
  references "public"."chains"
  ("chain_name") on update restrict on delete cascade;
