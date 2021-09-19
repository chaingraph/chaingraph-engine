ALTER TABLE "public"."tables" ADD COLUMN "block_num" numeric;
ALTER TABLE "public"."tables" ALTER COLUMN "block_num" DROP NOT NULL;
