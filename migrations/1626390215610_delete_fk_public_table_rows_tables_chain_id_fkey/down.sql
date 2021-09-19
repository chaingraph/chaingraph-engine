alter table "public"."table_rows" add foreign key ("chain_id") references "public"."chains"("chain_id") on update restrict on delete restrict;
