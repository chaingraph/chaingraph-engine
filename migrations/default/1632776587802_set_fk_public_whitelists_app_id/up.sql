alter table "public"."whitelists"
  add constraint "whitelists_app_id_fkey"
  foreign key ("app_id")
  references "public"."manifests"
  ("app_id") on update cascade on delete cascade;
