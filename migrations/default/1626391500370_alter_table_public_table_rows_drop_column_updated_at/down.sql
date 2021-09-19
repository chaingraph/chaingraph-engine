ALTER TABLE "public"."table_rows" ADD COLUMN "updated_at" timestamptz;
ALTER TABLE "public"."table_rows" ALTER COLUMN "updated_at" DROP NOT NULL;
ALTER TABLE "public"."table_rows" ALTER COLUMN "updated_at" SET DEFAULT now();
