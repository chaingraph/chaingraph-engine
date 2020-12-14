ALTER TABLE "public"."actions" ADD COLUMN "created_at" timestamptz NOT NULL DEFAULT now();
