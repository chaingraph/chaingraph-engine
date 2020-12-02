CREATE TABLE "public"."transactions"("chain_name" text NOT NULL, "block_num" text NOT NULL, "block_id" text NOT NULL, "transaction_id" text NOT NULL, "data" jsonb NOT NULL, PRIMARY KEY ("chain_name","block_num","block_id","transaction_id") , FOREIGN KEY ("chain_name") REFERENCES "public"."chains"("name") ON UPDATE restrict ON DELETE restrict);
