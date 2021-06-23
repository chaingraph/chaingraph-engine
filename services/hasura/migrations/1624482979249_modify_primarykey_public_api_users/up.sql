alter table "public"."api_users" drop constraint "users_pkey";
alter table "public"."api_users"
    add constraint "api_users_pkey" 
    primary key ( "id" );
