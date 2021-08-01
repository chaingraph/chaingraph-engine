ALTER TABLE "public"."actions" ADD COLUMN "notified" jsonb;
ALTER TABLE "public"."actions" ALTER COLUMN "notified" DROP NOT NULL;
