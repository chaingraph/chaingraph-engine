DROP TRIGGER IF EXISTS "set_public_mappings_updated_at" ON "public"."mappings";
ALTER TABLE "public"."mappings" DROP COLUMN "updated_at";
