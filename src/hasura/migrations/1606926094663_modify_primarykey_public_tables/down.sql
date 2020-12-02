alter table "public"."tables" drop constraint "tables_pkey";
alter table "public"."tables"
    add constraint "tables_pkey" 
    primary key ( "data", "scope", "table", "contract", "block_id", "block_num", "chain_id" );
