ALTER TABLE "public"."balances" ADD COLUMN "updated_at" timestamptz;
ALTER TABLE "public"."balances" ALTER COLUMN "updated_at" DROP NOT NULL;
ALTER TABLE "public"."balances" ALTER COLUMN "updated_at" SET DEFAULT now();
