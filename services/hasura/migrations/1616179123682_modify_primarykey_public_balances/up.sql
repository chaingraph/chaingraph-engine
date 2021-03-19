alter table "public"."balances" drop constraint "balances_pkey";
alter table "public"."balances"
    add constraint "balances_pkey"
    primary key ("contract", "chain_id", "account", "symbol");
