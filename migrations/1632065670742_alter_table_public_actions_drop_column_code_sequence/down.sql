ALTER TABLE "public"."actions" ADD COLUMN "code_sequence" int4;
ALTER TABLE "public"."actions" ALTER COLUMN "code_sequence" DROP NOT NULL;
