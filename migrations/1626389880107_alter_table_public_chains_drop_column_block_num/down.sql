ALTER TABLE "public"."chains" ADD COLUMN "block_num" numeric;
ALTER TABLE "public"."chains" ALTER COLUMN "block_num" DROP NOT NULL;
