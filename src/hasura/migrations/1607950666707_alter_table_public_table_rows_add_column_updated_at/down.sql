DROP TRIGGER IF EXISTS "set_public_table_rows_updated_at" ON "public"."table_rows";
ALTER TABLE "public"."table_rows" DROP COLUMN "updated_at";
