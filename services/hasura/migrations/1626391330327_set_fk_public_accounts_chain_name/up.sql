alter table "public"."accounts"
           add constraint "accounts_chain_name_fkey"
           foreign key ("chain_name")
           references "public"."chains"
           ("chain_name") on update restrict on delete restrict;
