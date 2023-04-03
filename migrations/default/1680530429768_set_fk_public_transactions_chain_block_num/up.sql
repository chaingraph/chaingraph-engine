alter table "public"."transactions" drop constraint "transactions_chain_block_num_fkey",
  add constraint "transactions_chain_block_num_fkey"
  foreign key ("chain", "block_num")
  references "public"."blocks"
  ("chain", "block_num") on update restrict on delete cascade;
