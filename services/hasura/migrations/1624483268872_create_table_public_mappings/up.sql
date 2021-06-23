CREATE TABLE "public"."mappings"("id" serial NOT NULL, "contract_name" text NOT NULL, "mapping" jsonb NOT NULL DEFAULT jsonb_build_object(), "api_user_id" integer NOT NULL, PRIMARY KEY ("id") );
