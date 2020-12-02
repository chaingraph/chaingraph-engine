alter table "public"."transactions" add foreign key ("chain_id") references "public"."chains"("name") on update restrict on delete restrict;
