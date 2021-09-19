alter table "public"."tokens" add foreign key ("chain_name") references "public"."chains"("chain_id") on update restrict on delete restrict;
