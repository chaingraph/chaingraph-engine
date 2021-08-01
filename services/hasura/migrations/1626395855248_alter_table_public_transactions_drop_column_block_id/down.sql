ALTER TABLE "public"."transactions" ADD COLUMN "block_id" text;
ALTER TABLE "public"."transactions" ALTER COLUMN "block_id" DROP NOT NULL;
