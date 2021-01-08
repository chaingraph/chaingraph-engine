alter table "public"."balances" add foreign key ("chain_id", "account") references "public"."accounts"("chain_id", "account_name") on update restrict on delete restrict;
