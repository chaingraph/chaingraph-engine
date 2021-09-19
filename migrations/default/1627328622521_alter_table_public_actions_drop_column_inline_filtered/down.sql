ALTER TABLE "public"."actions" ADD COLUMN "inline_filtered" bool;
ALTER TABLE "public"."actions" ALTER COLUMN "inline_filtered" DROP NOT NULL;
