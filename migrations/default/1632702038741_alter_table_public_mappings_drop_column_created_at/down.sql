alter table "public"."mappings" alter column "created_at" set default now();
alter table "public"."mappings" alter column "created_at" drop not null;
alter table "public"."mappings" add column "created_at" timestamptz;
