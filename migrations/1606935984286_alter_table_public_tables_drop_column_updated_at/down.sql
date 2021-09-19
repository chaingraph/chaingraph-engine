ALTER TABLE "public"."tables" ADD COLUMN "updated_at" timetz;
ALTER TABLE "public"."tables" ALTER COLUMN "updated_at" DROP NOT NULL;
ALTER TABLE "public"."tables" ALTER COLUMN "updated_at" SET DEFAULT now();
