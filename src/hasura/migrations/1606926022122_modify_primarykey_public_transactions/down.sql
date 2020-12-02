alter table "public"."transactions" drop constraint "transactions_pkey";
alter table "public"."transactions"
    add constraint "transactions_pkey" 
    primary key ( "transaction_id", "block_id" );
