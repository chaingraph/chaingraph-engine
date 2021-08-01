alter table "public"."actions" add foreign key ("chain") references "public"."chains"("chain_name") on update restrict on delete restrict;
