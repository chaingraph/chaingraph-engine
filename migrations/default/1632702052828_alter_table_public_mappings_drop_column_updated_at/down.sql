alter table "public"."mappings" alter column "updated_at" set default now();
alter table "public"."mappings" alter column "updated_at" drop not null;
alter table "public"."mappings" add column "updated_at" timestamptz;
