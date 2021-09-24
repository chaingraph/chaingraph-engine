SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.actions (
    chain text NOT NULL,
    transaction_id text NOT NULL,
    contract text NOT NULL,
    action text NOT NULL,
    data jsonb NOT NULL,
    "authorization" jsonb NOT NULL,
    global_sequence text NOT NULL,
    action_ordinal integer NOT NULL,
    account_ram_deltas jsonb,
    receipt jsonb,
    context_free boolean,
    account_disk_deltas jsonb,
    console text,
    receiver text
);
CREATE TABLE public.api_users (
    account text NOT NULL,
    api_key text NOT NULL,
    domain_names text,
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
CREATE SEQUENCE public.api_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.api_users_id_seq OWNED BY public.api_users.id;
CREATE TABLE public.blocks (
    chain text NOT NULL,
    block_num integer NOT NULL,
    block_id text,
    "timestamp" timestamp with time zone NOT NULL,
    producer text NOT NULL
);
CREATE TABLE public.chains (
    chain_name text NOT NULL,
    chain_id text NOT NULL,
    rpc_endpoint text NOT NULL
);
CREATE TABLE public.mappings (
    contract text NOT NULL,
    tables jsonb DEFAULT jsonb_build_object(),
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    contract_type text,
    chain text NOT NULL,
    actions text,
    abi jsonb
);
CREATE TABLE public.table_rows (
    chain text NOT NULL,
    contract text NOT NULL,
    "table" text NOT NULL,
    scope text NOT NULL,
    primary_key text NOT NULL,
    data jsonb NOT NULL
);
CREATE TABLE public.transactions (
    chain text NOT NULL,
    transaction_id text NOT NULL,
    block_num integer NOT NULL,
    cpu_usage_us integer,
    net_usage_words integer DEFAULT 0,
    net_usage integer DEFAULT 0
);
ALTER TABLE ONLY public.api_users ALTER COLUMN id SET DEFAULT nextval('public.api_users_id_seq'::regclass);
ALTER TABLE ONLY public.actions
    ADD CONSTRAINT actions_pkey PRIMARY KEY (chain, global_sequence);
ALTER TABLE ONLY public.api_users
    ADD CONSTRAINT api_users_api_key_key UNIQUE (api_key);
ALTER TABLE ONLY public.api_users
    ADD CONSTRAINT api_users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.blocks
    ADD CONSTRAINT blocks_block_id_key UNIQUE (block_id);
ALTER TABLE ONLY public.blocks
    ADD CONSTRAINT blocks_pkey PRIMARY KEY (chain, block_num);
ALTER TABLE ONLY public.chains
    ADD CONSTRAINT chains_pkey PRIMARY KEY (chain_name);
ALTER TABLE ONLY public.mappings
    ADD CONSTRAINT mappings_pkey PRIMARY KEY (chain, contract);
ALTER TABLE ONLY public.table_rows
    ADD CONSTRAINT tables_pkey PRIMARY KEY (chain, contract, "table", scope, primary_key);
ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (transaction_id, chain);
CREATE TRIGGER set_public_api_users_updated_at BEFORE UPDATE ON public.api_users FOR EACH ROW EXECUTE PROCEDURE public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_api_users_updated_at ON public.api_users IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mappings_updated_at BEFORE UPDATE ON public.mappings FOR EACH ROW EXECUTE PROCEDURE public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mappings_updated_at ON public.mappings IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.actions
    ADD CONSTRAINT actions_chain_transaction_id_fkey FOREIGN KEY (chain, transaction_id) REFERENCES public.transactions(chain, transaction_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.blocks
    ADD CONSTRAINT blocks_chain_fkey FOREIGN KEY (chain) REFERENCES public.chains(chain_name) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.table_rows
    ADD CONSTRAINT table_rows_chain_name_fkey FOREIGN KEY (chain) REFERENCES public.chains(chain_name) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_chain_block_num_fkey FOREIGN KEY (chain, block_num) REFERENCES public.blocks(chain, block_num) ON UPDATE RESTRICT ON DELETE RESTRICT;
