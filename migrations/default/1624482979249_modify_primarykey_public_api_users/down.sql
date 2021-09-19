alter table "public"."api_users" drop constraint "api_users_pkey";
alter table "public"."api_users"
    add constraint "users_pkey" 
    primary key ( "account" );
