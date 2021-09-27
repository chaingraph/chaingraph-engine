CREATE TRIGGER "set_public_mappings_updated_at"
BEFORE UPDATE ON "public"."mappings"
FOR EACH ROW EXECUTE PROCEDURE set_current_timestamp_updated_at();COMMENT ON TRIGGER "set_public_mappings_updated_at" ON "public"."mappings"
IS E'trigger to set value of column "updated_at" to current timestamp on row update';
