alter table "public"."mappings" drop constraint "mappings_pkey";
alter table "public"."mappings"
    add constraint "mappings_pkey" 
    primary key ( "contract_name" );
