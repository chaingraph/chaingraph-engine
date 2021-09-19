ALTER TABLE "public"."actions" ADD COLUMN "created_at" timestamptz;
ALTER TABLE "public"."actions" ALTER COLUMN "created_at" DROP NOT NULL;
ALTER TABLE "public"."actions" ALTER COLUMN "created_at" SET DEFAULT now();
