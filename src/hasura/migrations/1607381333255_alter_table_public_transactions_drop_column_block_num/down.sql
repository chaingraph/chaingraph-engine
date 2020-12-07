ALTER TABLE "public"."transactions" ADD COLUMN "block_num" text;
ALTER TABLE "public"."transactions" ALTER COLUMN "block_num" DROP NOT NULL;
