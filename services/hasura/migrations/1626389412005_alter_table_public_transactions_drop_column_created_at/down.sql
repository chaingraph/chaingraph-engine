ALTER TABLE "public"."transactions" ADD COLUMN "created_at" timestamptz;
ALTER TABLE "public"."transactions" ALTER COLUMN "created_at" DROP NOT NULL;
ALTER TABLE "public"."transactions" ALTER COLUMN "created_at" SET DEFAULT now();
