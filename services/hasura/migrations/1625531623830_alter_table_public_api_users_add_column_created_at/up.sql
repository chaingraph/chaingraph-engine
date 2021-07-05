ALTER TABLE "public"."api_users" ADD COLUMN "created_at" timestamptz NULL DEFAULT now();
