ALTER TABLE "public"."transactions" ADD COLUMN "data" jsonb;
ALTER TABLE "public"."transactions" ALTER COLUMN "data" DROP NOT NULL;
