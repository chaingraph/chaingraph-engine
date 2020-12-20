ALTER TABLE "public"."tables" ADD COLUMN "created_at" timetz;
ALTER TABLE "public"."tables" ALTER COLUMN "created_at" DROP NOT NULL;
ALTER TABLE "public"."tables" ALTER COLUMN "created_at" SET DEFAULT now();
