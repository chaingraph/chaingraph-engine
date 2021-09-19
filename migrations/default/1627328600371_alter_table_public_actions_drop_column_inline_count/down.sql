ALTER TABLE "public"."actions" ADD COLUMN "inline_count" int4;
ALTER TABLE "public"."actions" ALTER COLUMN "inline_count" DROP NOT NULL;
