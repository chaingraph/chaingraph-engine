ALTER TABLE "public"."actions" ADD COLUMN "block_id" text;
ALTER TABLE "public"."actions" ALTER COLUMN "block_id" DROP NOT NULL;
