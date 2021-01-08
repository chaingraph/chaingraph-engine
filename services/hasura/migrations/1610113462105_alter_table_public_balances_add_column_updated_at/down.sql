DROP TRIGGER IF EXISTS "set_public_balances_updated_at" ON "public"."balances";
ALTER TABLE "public"."balances" DROP COLUMN "updated_at";
