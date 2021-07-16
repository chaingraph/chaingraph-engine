alter table "public"."actions"
           add constraint "actions_chain_name_fkey"
           foreign key ("chain_name")
           references "public"."chains"
           ("chain_name") on update restrict on delete restrict;
