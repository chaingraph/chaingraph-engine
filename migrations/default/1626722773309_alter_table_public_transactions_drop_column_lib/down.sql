ALTER TABLE "public"."transactions" ADD COLUMN "lib" int4;
ALTER TABLE "public"."transactions" ALTER COLUMN "lib" DROP NOT NULL;
