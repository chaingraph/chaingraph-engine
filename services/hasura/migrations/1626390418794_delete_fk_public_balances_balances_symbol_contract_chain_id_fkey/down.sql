alter table "public"."balances" add foreign key ("symbol", "contract", "chain_name") references "public"."tokens"("symbol", "contract", "chain_name") on update restrict on delete restrict;
