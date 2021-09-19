ALTER TABLE "public"."actions" ADD COLUMN "abi_sequence" int4;
ALTER TABLE "public"."actions" ALTER COLUMN "abi_sequence" DROP NOT NULL;
