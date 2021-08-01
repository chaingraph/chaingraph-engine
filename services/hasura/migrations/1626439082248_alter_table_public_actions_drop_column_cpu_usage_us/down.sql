ALTER TABLE "public"."actions" ADD COLUMN "cpu_usage_us" int4;
ALTER TABLE "public"."actions" ALTER COLUMN "cpu_usage_us" DROP NOT NULL;
