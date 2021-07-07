DROP TRIGGER IF EXISTS "set_public_api_users_updated_at" ON "public"."api_users";
ALTER TABLE "public"."api_users" DROP COLUMN "updated_at";
