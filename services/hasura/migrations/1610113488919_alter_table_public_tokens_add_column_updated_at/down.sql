DROP TRIGGER IF EXISTS "set_public_tokens_updated_at" ON "public"."tokens";
ALTER TABLE "public"."tokens" DROP COLUMN "updated_at";
