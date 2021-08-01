ALTER TABLE "public"."blocks" ADD COLUMN "lib" int4;
ALTER TABLE "public"."blocks" ALTER COLUMN "lib" DROP NOT NULL;
