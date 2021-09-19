ALTER TABLE "public"."tokens" ADD COLUMN "updated_at" timestamptz;
ALTER TABLE "public"."tokens" ALTER COLUMN "updated_at" DROP NOT NULL;
ALTER TABLE "public"."tokens" ALTER COLUMN "updated_at" SET DEFAULT now();
