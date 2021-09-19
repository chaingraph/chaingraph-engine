ALTER TABLE "public"."actions" ADD COLUMN "block_num" int4;
ALTER TABLE "public"."actions" ALTER COLUMN "block_num" DROP NOT NULL;
