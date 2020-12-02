ALTER TABLE "public"."chains" ADD COLUMN "type" text;
ALTER TABLE "public"."chains" ALTER COLUMN "type" DROP NOT NULL;
