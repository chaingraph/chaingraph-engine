CREATE TRIGGER "set_public_table_rows_updated_at"
BEFORE UPDATE ON "public"."table_rows"
FOR EACH ROW EXECUTE PROCEDURE set_current_timestamp_updated_at();COMMENT ON TRIGGER "set_public_table_rows_updated_at" ON "public"."table_rows"
IS E'trigger to set value of column "updated_at" to current timestamp on row update';
