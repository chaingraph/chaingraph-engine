alter table "public"."blocks"
           add constraint "blocks_chain_fkey"
           foreign key ("chain")
           references "public"."chains"
           ("chain_name") on update restrict on delete restrict;
