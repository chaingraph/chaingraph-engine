ALTER TABLE "public"."mappings" ADD COLUMN "id" int4;
ALTER TABLE "public"."mappings" ALTER COLUMN "id" DROP NOT NULL;
ALTER TABLE "public"."mappings" ALTER COLUMN "id" SET DEFAULT nextval('mappings_id_seq'::regclass);
