alter table "public"."tables" drop constraint "tables_pkey";
alter table "public"."tables"
    add constraint "tables_pkey" 
    primary key ( "chain_id", "contract", "table", "scope", "primary_key" );
