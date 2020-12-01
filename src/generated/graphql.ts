import { GraphQLClient } from 'graphql-request'
import { print } from 'graphql'
import { GraphQLError } from 'graphql-request/dist/types'
import { Headers } from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  jsonb: any
  timestamptz: any
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  _nlike?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
}

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts'
  chain?: Maybe<Scalars['String']>
  name: Scalars['String']
}

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate'
  aggregate?: Maybe<Accounts_Aggregate_Fields>
  nodes: Array<Accounts>
}

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Accounts_Max_Fields>
  min?: Maybe<Accounts_Min_Fields>
}

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Accounts_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Accounts_Max_Order_By>
  min?: Maybe<Accounts_Min_Order_By>
}

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>
  on_conflict?: Maybe<Accounts_On_Conflict>
}

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>
  _not?: Maybe<Accounts_Bool_Exp>
  _or?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>
  chain?: Maybe<String_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey',
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  chain?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields'
  chain?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  chain?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields'
  chain?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  chain?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Accounts>
}

/** input type for inserting object relation for remote table "accounts" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input
  on_conflict?: Maybe<Accounts_On_Conflict>
}

/** on conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint
  update_columns: Array<Accounts_Update_Column>
  where?: Maybe<Accounts_Bool_Exp>
}

/** ordering options when selecting data from "accounts" */
export type Accounts_Order_By = {
  chain?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** primary key columns input for table: "accounts" */
export type Accounts_Pk_Columns_Input = {
  name: Scalars['String']
}

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  Chain = 'chain',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  chain?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  Chain = 'chain',
  /** column name */
  Name = 'name',
}

/** columns and relationships of "chains" */
export type Chains = {
  __typename?: 'chains'
  chain_id: Scalars['String']
  name: Scalars['String']
  rpc_endpoint: Scalars['String']
}

/** aggregated selection of "chains" */
export type Chains_Aggregate = {
  __typename?: 'chains_aggregate'
  aggregate?: Maybe<Chains_Aggregate_Fields>
  nodes: Array<Chains>
}

/** aggregate fields of "chains" */
export type Chains_Aggregate_Fields = {
  __typename?: 'chains_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Chains_Max_Fields>
  min?: Maybe<Chains_Min_Fields>
}

/** aggregate fields of "chains" */
export type Chains_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chains_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "chains" */
export type Chains_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Chains_Max_Order_By>
  min?: Maybe<Chains_Min_Order_By>
}

/** input type for inserting array relation for remote table "chains" */
export type Chains_Arr_Rel_Insert_Input = {
  data: Array<Chains_Insert_Input>
  on_conflict?: Maybe<Chains_On_Conflict>
}

/** Boolean expression to filter rows from the table "chains". All fields are combined with a logical 'AND'. */
export type Chains_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Chains_Bool_Exp>>>
  _not?: Maybe<Chains_Bool_Exp>
  _or?: Maybe<Array<Maybe<Chains_Bool_Exp>>>
  chain_id?: Maybe<String_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  rpc_endpoint?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "chains" */
export enum Chains_Constraint {
  /** unique or primary key constraint */
  ChainsChainIdKey = 'chains_chain_id_key',
  /** unique or primary key constraint */
  ChainsPkey = 'chains_pkey',
}

/** input type for inserting data into table "chains" */
export type Chains_Insert_Input = {
  chain_id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  rpc_endpoint?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Chains_Max_Fields = {
  __typename?: 'chains_max_fields'
  chain_id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  rpc_endpoint?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "chains" */
export type Chains_Max_Order_By = {
  chain_id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  rpc_endpoint?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Chains_Min_Fields = {
  __typename?: 'chains_min_fields'
  chain_id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  rpc_endpoint?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "chains" */
export type Chains_Min_Order_By = {
  chain_id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  rpc_endpoint?: Maybe<Order_By>
}

/** response of any mutation on the table "chains" */
export type Chains_Mutation_Response = {
  __typename?: 'chains_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Chains>
}

/** input type for inserting object relation for remote table "chains" */
export type Chains_Obj_Rel_Insert_Input = {
  data: Chains_Insert_Input
  on_conflict?: Maybe<Chains_On_Conflict>
}

/** on conflict condition type for table "chains" */
export type Chains_On_Conflict = {
  constraint: Chains_Constraint
  update_columns: Array<Chains_Update_Column>
  where?: Maybe<Chains_Bool_Exp>
}

/** ordering options when selecting data from "chains" */
export type Chains_Order_By = {
  chain_id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  rpc_endpoint?: Maybe<Order_By>
}

/** primary key columns input for table: "chains" */
export type Chains_Pk_Columns_Input = {
  name: Scalars['String']
}

/** select columns of table "chains" */
export enum Chains_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Name = 'name',
  /** column name */
  RpcEndpoint = 'rpc_endpoint',
}

/** input type for updating data in table "chains" */
export type Chains_Set_Input = {
  chain_id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  rpc_endpoint?: Maybe<Scalars['String']>
}

/** update columns of table "chains" */
export enum Chains_Update_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Name = 'name',
  /** column name */
  RpcEndpoint = 'rpc_endpoint',
}

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>
  _eq?: Maybe<Scalars['jsonb']>
  _gt?: Maybe<Scalars['jsonb']>
  _gte?: Maybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>
  _in?: Maybe<Array<Scalars['jsonb']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['jsonb']>
  _lte?: Maybe<Scalars['jsonb']>
  _neq?: Maybe<Scalars['jsonb']>
  _nin?: Maybe<Array<Scalars['jsonb']>>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>
  /** delete data from the table: "chains" */
  delete_chains?: Maybe<Chains_Mutation_Response>
  /** delete single row from the table: "chains" */
  delete_chains_by_pk?: Maybe<Chains>
  /** delete data from the table: "tables" */
  delete_tables?: Maybe<Tables_Mutation_Response>
  /** delete single row from the table: "tables" */
  delete_tables_by_pk?: Maybe<Tables>
  /** delete data from the table: "transactions" */
  delete_transactions?: Maybe<Transactions_Mutation_Response>
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk?: Maybe<Transactions>
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>
  /** insert data into the table: "chains" */
  insert_chains?: Maybe<Chains_Mutation_Response>
  /** insert a single row into the table: "chains" */
  insert_chains_one?: Maybe<Chains>
  /** insert data into the table: "tables" */
  insert_tables?: Maybe<Tables_Mutation_Response>
  /** insert a single row into the table: "tables" */
  insert_tables_one?: Maybe<Tables>
  /** insert data into the table: "transactions" */
  insert_transactions?: Maybe<Transactions_Mutation_Response>
  /** insert a single row into the table: "transactions" */
  insert_transactions_one?: Maybe<Transactions>
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>
  /** update data of the table: "chains" */
  update_chains?: Maybe<Chains_Mutation_Response>
  /** update single row of the table: "chains" */
  update_chains_by_pk?: Maybe<Chains>
  /** update data of the table: "tables" */
  update_tables?: Maybe<Tables_Mutation_Response>
  /** update single row of the table: "tables" */
  update_tables_by_pk?: Maybe<Tables>
  /** update data of the table: "transactions" */
  update_transactions?: Maybe<Transactions_Mutation_Response>
  /** update single row of the table: "transactions" */
  update_transactions_by_pk?: Maybe<Transactions>
}

/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  name: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_ChainsArgs = {
  where: Chains_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Chains_By_PkArgs = {
  name: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_TablesArgs = {
  where: Tables_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tables_By_PkArgs = {
  chain: Scalars['String']
  code: Scalars['String']
  primary_key: Scalars['String']
  scope: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Transactions_By_PkArgs = {
  trx_id: Scalars['String']
}

/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>
  on_conflict?: Maybe<Accounts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input
  on_conflict?: Maybe<Accounts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ChainsArgs = {
  objects: Array<Chains_Insert_Input>
  on_conflict?: Maybe<Chains_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Chains_OneArgs = {
  object: Chains_Insert_Input
  on_conflict?: Maybe<Chains_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TablesArgs = {
  objects: Array<Tables_Insert_Input>
  on_conflict?: Maybe<Tables_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tables_OneArgs = {
  object: Tables_Insert_Input
  on_conflict?: Maybe<Tables_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TransactionsArgs = {
  objects: Array<Transactions_Insert_Input>
  on_conflict?: Maybe<Transactions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Transactions_OneArgs = {
  object: Transactions_Insert_Input
  on_conflict?: Maybe<Transactions_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: Maybe<Accounts_Set_Input>
  where: Accounts_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: Maybe<Accounts_Set_Input>
  pk_columns: Accounts_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_ChainsArgs = {
  _set?: Maybe<Chains_Set_Input>
  where: Chains_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Chains_By_PkArgs = {
  _set?: Maybe<Chains_Set_Input>
  pk_columns: Chains_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_TablesArgs = {
  _append?: Maybe<Tables_Append_Input>
  _delete_at_path?: Maybe<Tables_Delete_At_Path_Input>
  _delete_elem?: Maybe<Tables_Delete_Elem_Input>
  _delete_key?: Maybe<Tables_Delete_Key_Input>
  _prepend?: Maybe<Tables_Prepend_Input>
  _set?: Maybe<Tables_Set_Input>
  where: Tables_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Tables_By_PkArgs = {
  _append?: Maybe<Tables_Append_Input>
  _delete_at_path?: Maybe<Tables_Delete_At_Path_Input>
  _delete_elem?: Maybe<Tables_Delete_Elem_Input>
  _delete_key?: Maybe<Tables_Delete_Key_Input>
  _prepend?: Maybe<Tables_Prepend_Input>
  _set?: Maybe<Tables_Set_Input>
  pk_columns: Tables_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_TransactionsArgs = {
  _append?: Maybe<Transactions_Append_Input>
  _delete_at_path?: Maybe<Transactions_Delete_At_Path_Input>
  _delete_elem?: Maybe<Transactions_Delete_Elem_Input>
  _delete_key?: Maybe<Transactions_Delete_Key_Input>
  _prepend?: Maybe<Transactions_Prepend_Input>
  _set?: Maybe<Transactions_Set_Input>
  where: Transactions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Transactions_By_PkArgs = {
  _append?: Maybe<Transactions_Append_Input>
  _delete_at_path?: Maybe<Transactions_Delete_At_Path_Input>
  _delete_elem?: Maybe<Transactions_Delete_Elem_Input>
  _delete_key?: Maybe<Transactions_Delete_Key_Input>
  _prepend?: Maybe<Transactions_Prepend_Input>
  _set?: Maybe<Transactions_Set_Input>
  pk_columns: Transactions_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>
  /** fetch data from the table: "chains" */
  chains: Array<Chains>
  /** fetch aggregated fields from the table: "chains" */
  chains_aggregate: Chains_Aggregate
  /** fetch data from the table: "chains" using primary key columns */
  chains_by_pk?: Maybe<Chains>
  /** fetch data from the table: "tables" */
  tables: Array<Tables>
  /** fetch aggregated fields from the table: "tables" */
  tables_aggregate: Tables_Aggregate
  /** fetch data from the table: "tables" using primary key columns */
  tables_by_pk?: Maybe<Tables>
  /** fetch data from the table: "transactions" */
  transactions: Array<Transactions>
  /** fetch aggregated fields from the table: "transactions" */
  transactions_aggregate: Transactions_Aggregate
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>
}

/** query root */
export type Query_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Accounts_Order_By>>
  where?: Maybe<Accounts_Bool_Exp>
}

/** query root */
export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Accounts_Order_By>>
  where?: Maybe<Accounts_Bool_Exp>
}

/** query root */
export type Query_RootAccounts_By_PkArgs = {
  name: Scalars['String']
}

/** query root */
export type Query_RootChainsArgs = {
  distinct_on?: Maybe<Array<Chains_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Chains_Order_By>>
  where?: Maybe<Chains_Bool_Exp>
}

/** query root */
export type Query_RootChains_AggregateArgs = {
  distinct_on?: Maybe<Array<Chains_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Chains_Order_By>>
  where?: Maybe<Chains_Bool_Exp>
}

/** query root */
export type Query_RootChains_By_PkArgs = {
  name: Scalars['String']
}

/** query root */
export type Query_RootTablesArgs = {
  distinct_on?: Maybe<Array<Tables_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tables_Order_By>>
  where?: Maybe<Tables_Bool_Exp>
}

/** query root */
export type Query_RootTables_AggregateArgs = {
  distinct_on?: Maybe<Array<Tables_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tables_Order_By>>
  where?: Maybe<Tables_Bool_Exp>
}

/** query root */
export type Query_RootTables_By_PkArgs = {
  chain: Scalars['String']
  code: Scalars['String']
  primary_key: Scalars['String']
  scope: Scalars['String']
}

/** query root */
export type Query_RootTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** query root */
export type Query_RootTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** query root */
export type Query_RootTransactions_By_PkArgs = {
  trx_id: Scalars['String']
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>
  /** fetch data from the table: "chains" */
  chains: Array<Chains>
  /** fetch aggregated fields from the table: "chains" */
  chains_aggregate: Chains_Aggregate
  /** fetch data from the table: "chains" using primary key columns */
  chains_by_pk?: Maybe<Chains>
  /** fetch data from the table: "tables" */
  tables: Array<Tables>
  /** fetch aggregated fields from the table: "tables" */
  tables_aggregate: Tables_Aggregate
  /** fetch data from the table: "tables" using primary key columns */
  tables_by_pk?: Maybe<Tables>
  /** fetch data from the table: "transactions" */
  transactions: Array<Transactions>
  /** fetch aggregated fields from the table: "transactions" */
  transactions_aggregate: Transactions_Aggregate
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>
}

/** subscription root */
export type Subscription_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Accounts_Order_By>>
  where?: Maybe<Accounts_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Accounts_Order_By>>
  where?: Maybe<Accounts_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAccounts_By_PkArgs = {
  name: Scalars['String']
}

/** subscription root */
export type Subscription_RootChainsArgs = {
  distinct_on?: Maybe<Array<Chains_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Chains_Order_By>>
  where?: Maybe<Chains_Bool_Exp>
}

/** subscription root */
export type Subscription_RootChains_AggregateArgs = {
  distinct_on?: Maybe<Array<Chains_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Chains_Order_By>>
  where?: Maybe<Chains_Bool_Exp>
}

/** subscription root */
export type Subscription_RootChains_By_PkArgs = {
  name: Scalars['String']
}

/** subscription root */
export type Subscription_RootTablesArgs = {
  distinct_on?: Maybe<Array<Tables_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tables_Order_By>>
  where?: Maybe<Tables_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTables_AggregateArgs = {
  distinct_on?: Maybe<Array<Tables_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tables_Order_By>>
  where?: Maybe<Tables_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTables_By_PkArgs = {
  chain: Scalars['String']
  code: Scalars['String']
  primary_key: Scalars['String']
  scope: Scalars['String']
}

/** subscription root */
export type Subscription_RootTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Transactions_Order_By>>
  where?: Maybe<Transactions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTransactions_By_PkArgs = {
  trx_id: Scalars['String']
}

/** columns and relationships of "tables" */
export type Tables = {
  __typename?: 'tables'
  chain: Scalars['String']
  code: Scalars['String']
  created_at: Scalars['timestamptz']
  data: Scalars['jsonb']
  primary_key: Scalars['String']
  scope: Scalars['String']
  updated_at: Scalars['timestamptz']
}

/** columns and relationships of "tables" */
export type TablesDataArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "tables" */
export type Tables_Aggregate = {
  __typename?: 'tables_aggregate'
  aggregate?: Maybe<Tables_Aggregate_Fields>
  nodes: Array<Tables>
}

/** aggregate fields of "tables" */
export type Tables_Aggregate_Fields = {
  __typename?: 'tables_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Tables_Max_Fields>
  min?: Maybe<Tables_Min_Fields>
}

/** aggregate fields of "tables" */
export type Tables_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tables_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tables" */
export type Tables_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Tables_Max_Order_By>
  min?: Maybe<Tables_Min_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Tables_Append_Input = {
  data?: Maybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "tables" */
export type Tables_Arr_Rel_Insert_Input = {
  data: Array<Tables_Insert_Input>
  on_conflict?: Maybe<Tables_On_Conflict>
}

/** Boolean expression to filter rows from the table "tables". All fields are combined with a logical 'AND'. */
export type Tables_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tables_Bool_Exp>>>
  _not?: Maybe<Tables_Bool_Exp>
  _or?: Maybe<Array<Maybe<Tables_Bool_Exp>>>
  chain?: Maybe<String_Comparison_Exp>
  code?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  data?: Maybe<Jsonb_Comparison_Exp>
  primary_key?: Maybe<String_Comparison_Exp>
  scope?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "tables" */
export enum Tables_Constraint {
  /** unique or primary key constraint */
  TablesPkey = 'tables_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Tables_Delete_At_Path_Input = {
  data?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Tables_Delete_Elem_Input = {
  data?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Tables_Delete_Key_Input = {
  data?: Maybe<Scalars['String']>
}

/** input type for inserting data into table "tables" */
export type Tables_Insert_Input = {
  chain?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  data?: Maybe<Scalars['jsonb']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Tables_Max_Fields = {
  __typename?: 'tables_max_fields'
  chain?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "tables" */
export type Tables_Max_Order_By = {
  chain?: Maybe<Order_By>
  code?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  primary_key?: Maybe<Order_By>
  scope?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Tables_Min_Fields = {
  __typename?: 'tables_min_fields'
  chain?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "tables" */
export type Tables_Min_Order_By = {
  chain?: Maybe<Order_By>
  code?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  primary_key?: Maybe<Order_By>
  scope?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "tables" */
export type Tables_Mutation_Response = {
  __typename?: 'tables_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Tables>
}

/** input type for inserting object relation for remote table "tables" */
export type Tables_Obj_Rel_Insert_Input = {
  data: Tables_Insert_Input
  on_conflict?: Maybe<Tables_On_Conflict>
}

/** on conflict condition type for table "tables" */
export type Tables_On_Conflict = {
  constraint: Tables_Constraint
  update_columns: Array<Tables_Update_Column>
  where?: Maybe<Tables_Bool_Exp>
}

/** ordering options when selecting data from "tables" */
export type Tables_Order_By = {
  chain?: Maybe<Order_By>
  code?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  data?: Maybe<Order_By>
  primary_key?: Maybe<Order_By>
  scope?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "tables" */
export type Tables_Pk_Columns_Input = {
  chain: Scalars['String']
  code: Scalars['String']
  primary_key: Scalars['String']
  scope: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Tables_Prepend_Input = {
  data?: Maybe<Scalars['jsonb']>
}

/** select columns of table "tables" */
export enum Tables_Select_Column {
  /** column name */
  Chain = 'chain',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  PrimaryKey = 'primary_key',
  /** column name */
  Scope = 'scope',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "tables" */
export type Tables_Set_Input = {
  chain?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  data?: Maybe<Scalars['jsonb']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** update columns of table "tables" */
export enum Tables_Update_Column {
  /** column name */
  Chain = 'chain',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  PrimaryKey = 'primary_key',
  /** column name */
  Scope = 'scope',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "transactions" */
export type Transactions = {
  __typename?: 'transactions'
  block_num: Scalars['String']
  chain: Scalars['String']
  data: Scalars['jsonb']
  trx_id: Scalars['String']
}

/** columns and relationships of "transactions" */
export type TransactionsDataArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "transactions" */
export type Transactions_Aggregate = {
  __typename?: 'transactions_aggregate'
  aggregate?: Maybe<Transactions_Aggregate_Fields>
  nodes: Array<Transactions>
}

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_Fields = {
  __typename?: 'transactions_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Transactions_Max_Fields>
  min?: Maybe<Transactions_Min_Fields>
}

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transactions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "transactions" */
export type Transactions_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Transactions_Max_Order_By>
  min?: Maybe<Transactions_Min_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Transactions_Append_Input = {
  data?: Maybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "transactions" */
export type Transactions_Arr_Rel_Insert_Input = {
  data: Array<Transactions_Insert_Input>
  on_conflict?: Maybe<Transactions_On_Conflict>
}

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Transactions_Bool_Exp>>>
  _not?: Maybe<Transactions_Bool_Exp>
  _or?: Maybe<Array<Maybe<Transactions_Bool_Exp>>>
  block_num?: Maybe<String_Comparison_Exp>
  chain?: Maybe<String_Comparison_Exp>
  data?: Maybe<Jsonb_Comparison_Exp>
  trx_id?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint */
  TransactionsChainBlockNumKey = 'transactions_chain_block_num_key',
  /** unique or primary key constraint */
  TransactionsPkey = 'transactions_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Transactions_Delete_At_Path_Input = {
  data?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Transactions_Delete_Elem_Input = {
  data?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Transactions_Delete_Key_Input = {
  data?: Maybe<Scalars['String']>
}

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  block_num?: Maybe<Scalars['String']>
  chain?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['jsonb']>
  trx_id?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'transactions_max_fields'
  block_num?: Maybe<Scalars['String']>
  chain?: Maybe<Scalars['String']>
  trx_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  block_num?: Maybe<Order_By>
  chain?: Maybe<Order_By>
  trx_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'transactions_min_fields'
  block_num?: Maybe<Scalars['String']>
  chain?: Maybe<Scalars['String']>
  trx_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  block_num?: Maybe<Order_By>
  chain?: Maybe<Order_By>
  trx_id?: Maybe<Order_By>
}

/** response of any mutation on the table "transactions" */
export type Transactions_Mutation_Response = {
  __typename?: 'transactions_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Transactions>
}

/** input type for inserting object relation for remote table "transactions" */
export type Transactions_Obj_Rel_Insert_Input = {
  data: Transactions_Insert_Input
  on_conflict?: Maybe<Transactions_On_Conflict>
}

/** on conflict condition type for table "transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint
  update_columns: Array<Transactions_Update_Column>
  where?: Maybe<Transactions_Bool_Exp>
}

/** ordering options when selecting data from "transactions" */
export type Transactions_Order_By = {
  block_num?: Maybe<Order_By>
  chain?: Maybe<Order_By>
  data?: Maybe<Order_By>
  trx_id?: Maybe<Order_By>
}

/** primary key columns input for table: "transactions" */
export type Transactions_Pk_Columns_Input = {
  trx_id: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Transactions_Prepend_Input = {
  data?: Maybe<Scalars['jsonb']>
}

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  BlockNum = 'block_num',
  /** column name */
  Chain = 'chain',
  /** column name */
  Data = 'data',
  /** column name */
  TrxId = 'trx_id',
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
  block_num?: Maybe<Scalars['String']>
  chain?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['jsonb']>
  trx_id?: Maybe<Scalars['String']>
}

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  BlockNum = 'block_num',
  /** column name */
  Chain = 'chain',
  /** column name */
  Data = 'data',
  /** column name */
  TrxId = 'trx_id',
}

export type Upsert_TablesMutationVariables = Exact<{
  tables_insert_input: Tables_Insert_Input
}>

export type Upsert_TablesMutation = {
  __typename?: 'mutation_root'
  insert_tables?: Maybe<{
    __typename?: 'tables_mutation_response'
    returning: Array<{
      __typename?: 'tables'
      chain: string
      code: string
      created_at: any
      data: any
      primary_key: string
      scope: string
      updated_at: any
    }>
  }>
}

export const Upsert_TablesDocument = gql`
  mutation upsert_tables($tables_insert_input: tables_insert_input!) {
    insert_tables(objects: [$tables_insert_input]) {
      returning {
        chain
        code
        created_at
        data
        primary_key
        scope
        updated_at
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction()
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    upsert_tables(
      variables: Upsert_TablesMutationVariables,
    ): Promise<{
        data?: Upsert_TablesMutation | undefined
        extensions?: any
        headers: Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(() => client.rawRequest<Upsert_TablesMutation>(print(Upsert_TablesDocument), variables))
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
