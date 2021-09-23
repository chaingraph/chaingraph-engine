BEGIN TRANSACTION;
ALTER TABLE "public"."mappings" DROP CONSTRAINT "mappings_pkey";

ALTER TABLE "public"."mappings"
    ADD CONSTRAINT "mappings_pkey" PRIMARY KEY ("chain", "contract_name");
COMMIT TRANSACTION;
