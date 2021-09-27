alter table "public"."mappings" alter column "actions" drop not null;
alter table "public"."mappings" add column "actions" text;
