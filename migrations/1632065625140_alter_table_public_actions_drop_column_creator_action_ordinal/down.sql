ALTER TABLE "public"."actions" ADD COLUMN "creator_action_ordinal" int4;
ALTER TABLE "public"."actions" ALTER COLUMN "creator_action_ordinal" DROP NOT NULL;
