ALTER TABLE "public"."tables" ADD COLUMN "block_id" text;
ALTER TABLE "public"."tables" ALTER COLUMN "block_id" DROP NOT NULL;
