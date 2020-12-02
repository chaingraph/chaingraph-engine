alter table "public"."tables"
           add constraint "tables_chain_id_fkey"
           foreign key ("chain_id")
           references "public"."chains"
           ("chain_id") on update restrict on delete restrict;
