ALTER TABLE "public"."chains" ADD COLUMN "block_id" text;
ALTER TABLE "public"."chains" ALTER COLUMN "block_id" DROP NOT NULL;
