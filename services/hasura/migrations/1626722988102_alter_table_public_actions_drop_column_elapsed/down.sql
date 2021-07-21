ALTER TABLE "public"."actions" ADD COLUMN "elapsed" text;
ALTER TABLE "public"."actions" ALTER COLUMN "elapsed" DROP NOT NULL;
