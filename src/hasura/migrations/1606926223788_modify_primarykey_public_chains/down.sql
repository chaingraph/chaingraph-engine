alter table "public"."chains" drop constraint "chains_pkey";
alter table "public"."chains"
    add constraint "chains_pkey" 
    primary key ( "name" );
