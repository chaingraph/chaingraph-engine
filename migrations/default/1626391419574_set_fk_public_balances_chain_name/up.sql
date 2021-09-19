alter table "public"."balances"
           add constraint "balances_chain_name_fkey"
           foreign key ("chain_name")
           references "public"."chains"
           ("chain_name") on update restrict on delete restrict;
