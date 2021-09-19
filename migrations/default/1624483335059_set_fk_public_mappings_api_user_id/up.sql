alter table "public"."mappings"
           add constraint "mappings_api_user_id_fkey"
           foreign key ("api_user_id")
           references "public"."api_users"
           ("id") on update restrict on delete restrict;
