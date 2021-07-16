alter table "public"."transactions" add foreign key ("chain_id") references "public"."chains"("chain_id") on update restrict on delete restrict;
