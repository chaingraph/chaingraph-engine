alter table "public"."tokens" drop constraint "tokens_pkey";
alter table "public"."tokens"
    add constraint "tokens_pkey"
    primary key ("contract", "chain_id");
