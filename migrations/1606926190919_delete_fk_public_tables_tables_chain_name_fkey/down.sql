alter table "public"."tables" add foreign key ("chain_id") references "public"."chains"("name") on update restrict on delete restrict;
