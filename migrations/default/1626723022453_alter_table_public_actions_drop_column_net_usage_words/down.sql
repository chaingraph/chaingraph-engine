ALTER TABLE "public"."actions" ADD COLUMN "net_usage_words" int4;
ALTER TABLE "public"."actions" ALTER COLUMN "net_usage_words" DROP NOT NULL;
