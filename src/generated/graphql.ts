import { GraphQLClient } from 'graphql-request'
import { print } from 'graphql'
import { GraphQLError } from 'graphql-request/dist/types'
import { Headers } from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  jsonb: any
  numeric: any
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
  account_name: Scalars['String']
  chain_id: Scalars['String']
  permissions: Scalars['jsonb']
}

/** columns and relationships of "accounts" */
export type AccountsPermissionsArgs = {
  path?: Maybe<Scalars['String']>
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type Accounts_Append_Input = {
  permissions?: Maybe<Scalars['jsonb']>
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
  account_name?: Maybe<String_Comparison_Exp>
  chain_id?: Maybe<String_Comparison_Exp>
  permissions?: Maybe<Jsonb_Comparison_Exp>
}

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Accounts_Delete_At_Path_Input = {
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Accounts_Delete_Elem_Input = {
  permissions?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Accounts_Delete_Key_Input = {
  permissions?: Maybe<Scalars['String']>
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  account_name?: Maybe<Scalars['String']>
  chain_id?: Maybe<Scalars['String']>
  permissions?: Maybe<Scalars['jsonb']>
}

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields'
  account_name?: Maybe<Scalars['String']>
  chain_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  account_name?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields'
  account_name?: Maybe<Scalars['String']>
  chain_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  account_name?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
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
  account_name?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  permissions?: Maybe<Order_By>
}

/** primary key columns input for table: "accounts" */
export type Accounts_Pk_Columns_Input = {
  account_name: Scalars['String']
  chain_id: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Accounts_Prepend_Input = {
  permissions?: Maybe<Scalars['jsonb']>
}

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccountName = 'account_name',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Permissions = 'permissions',
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  account_name?: Maybe<Scalars['String']>
  chain_id?: Maybe<Scalars['String']>
  permissions?: Maybe<Scalars['jsonb']>
}

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccountName = 'account_name',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Permissions = 'permissions',
}

/** columns and relationships of "actions" */
export type Actions = {
  __typename?: 'actions'
  action_name: Scalars['String']
  authorization: Scalars['jsonb']
  chain_id: Scalars['String']
  contract: Scalars['String']
  data: Scalars['jsonb']
  global_sequence: Scalars['String']
  transaction_id: Scalars['String']
}

/** columns and relationships of "actions" */
export type ActionsAuthorizationArgs = {
  path?: Maybe<Scalars['String']>
}

/** columns and relationships of "actions" */
export type ActionsDataArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "actions" */
export type Actions_Aggregate = {
  __typename?: 'actions_aggregate'
  aggregate?: Maybe<Actions_Aggregate_Fields>
  nodes: Array<Actions>
}

/** aggregate fields of "actions" */
export type Actions_Aggregate_Fields = {
  __typename?: 'actions_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Actions_Max_Fields>
  min?: Maybe<Actions_Min_Fields>
}

/** aggregate fields of "actions" */
export type Actions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Actions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "actions" */
export type Actions_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Actions_Max_Order_By>
  min?: Maybe<Actions_Min_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Actions_Append_Input = {
  authorization?: Maybe<Scalars['jsonb']>
  data?: Maybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "actions" */
export type Actions_Arr_Rel_Insert_Input = {
  data: Array<Actions_Insert_Input>
  on_conflict?: Maybe<Actions_On_Conflict>
}

/** Boolean expression to filter rows from the table "actions". All fields are combined with a logical 'AND'. */
export type Actions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Actions_Bool_Exp>>>
  _not?: Maybe<Actions_Bool_Exp>
  _or?: Maybe<Array<Maybe<Actions_Bool_Exp>>>
  action_name?: Maybe<String_Comparison_Exp>
  authorization?: Maybe<Jsonb_Comparison_Exp>
  chain_id?: Maybe<String_Comparison_Exp>
  contract?: Maybe<String_Comparison_Exp>
  data?: Maybe<Jsonb_Comparison_Exp>
  global_sequence?: Maybe<String_Comparison_Exp>
  transaction_id?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "actions" */
export enum Actions_Constraint {
  /** unique or primary key constraint */
  ActionsPkey = 'actions_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Actions_Delete_At_Path_Input = {
  authorization?: Maybe<Array<Maybe<Scalars['String']>>>
  data?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Actions_Delete_Elem_Input = {
  authorization?: Maybe<Scalars['Int']>
  data?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Actions_Delete_Key_Input = {
  authorization?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['String']>
}

/** input type for inserting data into table "actions" */
export type Actions_Insert_Input = {
  action_name?: Maybe<Scalars['String']>
  authorization?: Maybe<Scalars['jsonb']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['jsonb']>
  global_sequence?: Maybe<Scalars['String']>
  transaction_id?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Actions_Max_Fields = {
  __typename?: 'actions_max_fields'
  action_name?: Maybe<Scalars['String']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  global_sequence?: Maybe<Scalars['String']>
  transaction_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "actions" */
export type Actions_Max_Order_By = {
  action_name?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  global_sequence?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Actions_Min_Fields = {
  __typename?: 'actions_min_fields'
  action_name?: Maybe<Scalars['String']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  global_sequence?: Maybe<Scalars['String']>
  transaction_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "actions" */
export type Actions_Min_Order_By = {
  action_name?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  global_sequence?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** response of any mutation on the table "actions" */
export type Actions_Mutation_Response = {
  __typename?: 'actions_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Actions>
}

/** input type for inserting object relation for remote table "actions" */
export type Actions_Obj_Rel_Insert_Input = {
  data: Actions_Insert_Input
  on_conflict?: Maybe<Actions_On_Conflict>
}

/** on conflict condition type for table "actions" */
export type Actions_On_Conflict = {
  constraint: Actions_Constraint
  update_columns: Array<Actions_Update_Column>
  where?: Maybe<Actions_Bool_Exp>
}

/** ordering options when selecting data from "actions" */
export type Actions_Order_By = {
  action_name?: Maybe<Order_By>
  authorization?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  data?: Maybe<Order_By>
  global_sequence?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** primary key columns input for table: "actions" */
export type Actions_Pk_Columns_Input = {
  chain_id: Scalars['String']
  global_sequence: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Actions_Prepend_Input = {
  authorization?: Maybe<Scalars['jsonb']>
  data?: Maybe<Scalars['jsonb']>
}

/** select columns of table "actions" */
export enum Actions_Select_Column {
  /** column name */
  ActionName = 'action_name',
  /** column name */
  Authorization = 'authorization',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Contract = 'contract',
  /** column name */
  Data = 'data',
  /** column name */
  GlobalSequence = 'global_sequence',
  /** column name */
  TransactionId = 'transaction_id',
}

/** input type for updating data in table "actions" */
export type Actions_Set_Input = {
  action_name?: Maybe<Scalars['String']>
  authorization?: Maybe<Scalars['jsonb']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['jsonb']>
  global_sequence?: Maybe<Scalars['String']>
  transaction_id?: Maybe<Scalars['String']>
}

/** update columns of table "actions" */
export enum Actions_Update_Column {
  /** column name */
  ActionName = 'action_name',
  /** column name */
  Authorization = 'authorization',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Contract = 'contract',
  /** column name */
  Data = 'data',
  /** column name */
  GlobalSequence = 'global_sequence',
  /** column name */
  TransactionId = 'transaction_id',
}

/** columns and relationships of "chains" */
export type Chains = {
  __typename?: 'chains'
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
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
  avg?: Maybe<Chains_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Chains_Max_Fields>
  min?: Maybe<Chains_Min_Fields>
  stddev?: Maybe<Chains_Stddev_Fields>
  stddev_pop?: Maybe<Chains_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Chains_Stddev_Samp_Fields>
  sum?: Maybe<Chains_Sum_Fields>
  var_pop?: Maybe<Chains_Var_Pop_Fields>
  var_samp?: Maybe<Chains_Var_Samp_Fields>
  variance?: Maybe<Chains_Variance_Fields>
}

/** aggregate fields of "chains" */
export type Chains_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chains_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "chains" */
export type Chains_Aggregate_Order_By = {
  avg?: Maybe<Chains_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Chains_Max_Order_By>
  min?: Maybe<Chains_Min_Order_By>
  stddev?: Maybe<Chains_Stddev_Order_By>
  stddev_pop?: Maybe<Chains_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Chains_Stddev_Samp_Order_By>
  sum?: Maybe<Chains_Sum_Order_By>
  var_pop?: Maybe<Chains_Var_Pop_Order_By>
  var_samp?: Maybe<Chains_Var_Samp_Order_By>
  variance?: Maybe<Chains_Variance_Order_By>
}

/** input type for inserting array relation for remote table "chains" */
export type Chains_Arr_Rel_Insert_Input = {
  data: Array<Chains_Insert_Input>
  on_conflict?: Maybe<Chains_On_Conflict>
}

/** aggregate avg on columns */
export type Chains_Avg_Fields = {
  __typename?: 'chains_avg_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "chains" */
export type Chains_Avg_Order_By = {
  block_num?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "chains". All fields are combined with a logical 'AND'. */
export type Chains_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Chains_Bool_Exp>>>
  _not?: Maybe<Chains_Bool_Exp>
  _or?: Maybe<Array<Maybe<Chains_Bool_Exp>>>
  block_id?: Maybe<String_Comparison_Exp>
  block_num?: Maybe<Numeric_Comparison_Exp>
  chain_id?: Maybe<String_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  rpc_endpoint?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "chains" */
export enum Chains_Constraint {
  /** unique or primary key constraint */
  ChainsPkey = 'chains_pkey',
}

/** input type for incrementing integer column in table "chains" */
export type Chains_Inc_Input = {
  block_num?: Maybe<Scalars['numeric']>
}

/** input type for inserting data into table "chains" */
export type Chains_Insert_Input = {
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  chain_id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  rpc_endpoint?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Chains_Max_Fields = {
  __typename?: 'chains_max_fields'
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  chain_id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  rpc_endpoint?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "chains" */
export type Chains_Max_Order_By = {
  block_id?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  rpc_endpoint?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Chains_Min_Fields = {
  __typename?: 'chains_min_fields'
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  chain_id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  rpc_endpoint?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "chains" */
export type Chains_Min_Order_By = {
  block_id?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
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
  block_id?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  rpc_endpoint?: Maybe<Order_By>
}

/** primary key columns input for table: "chains" */
export type Chains_Pk_Columns_Input = {
  chain_id: Scalars['String']
}

/** select columns of table "chains" */
export enum Chains_Select_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  BlockNum = 'block_num',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Name = 'name',
  /** column name */
  RpcEndpoint = 'rpc_endpoint',
}

/** input type for updating data in table "chains" */
export type Chains_Set_Input = {
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  chain_id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  rpc_endpoint?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Chains_Stddev_Fields = {
  __typename?: 'chains_stddev_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "chains" */
export type Chains_Stddev_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Chains_Stddev_Pop_Fields = {
  __typename?: 'chains_stddev_pop_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "chains" */
export type Chains_Stddev_Pop_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Chains_Stddev_Samp_Fields = {
  __typename?: 'chains_stddev_samp_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "chains" */
export type Chains_Stddev_Samp_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Chains_Sum_Fields = {
  __typename?: 'chains_sum_fields'
  block_num?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "chains" */
export type Chains_Sum_Order_By = {
  block_num?: Maybe<Order_By>
}

/** update columns of table "chains" */
export enum Chains_Update_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  BlockNum = 'block_num',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Name = 'name',
  /** column name */
  RpcEndpoint = 'rpc_endpoint',
}

/** aggregate var_pop on columns */
export type Chains_Var_Pop_Fields = {
  __typename?: 'chains_var_pop_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "chains" */
export type Chains_Var_Pop_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Chains_Var_Samp_Fields = {
  __typename?: 'chains_var_samp_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "chains" */
export type Chains_Var_Samp_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Chains_Variance_Fields = {
  __typename?: 'chains_variance_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "chains" */
export type Chains_Variance_Order_By = {
  block_num?: Maybe<Order_By>
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
  /** delete data from the table: "actions" */
  delete_actions?: Maybe<Actions_Mutation_Response>
  /** delete single row from the table: "actions" */
  delete_actions_by_pk?: Maybe<Actions>
  /** delete data from the table: "chains" */
  delete_chains?: Maybe<Chains_Mutation_Response>
  /** delete single row from the table: "chains" */
  delete_chains_by_pk?: Maybe<Chains>
  /** delete data from the table: "table_rows" */
  delete_table_rows?: Maybe<Table_Rows_Mutation_Response>
  /** delete single row from the table: "table_rows" */
  delete_table_rows_by_pk?: Maybe<Table_Rows>
  /** delete data from the table: "transactions" */
  delete_transactions?: Maybe<Transactions_Mutation_Response>
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk?: Maybe<Transactions>
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>
  /** insert data into the table: "actions" */
  insert_actions?: Maybe<Actions_Mutation_Response>
  /** insert a single row into the table: "actions" */
  insert_actions_one?: Maybe<Actions>
  /** insert data into the table: "chains" */
  insert_chains?: Maybe<Chains_Mutation_Response>
  /** insert a single row into the table: "chains" */
  insert_chains_one?: Maybe<Chains>
  /** insert data into the table: "table_rows" */
  insert_table_rows?: Maybe<Table_Rows_Mutation_Response>
  /** insert a single row into the table: "table_rows" */
  insert_table_rows_one?: Maybe<Table_Rows>
  /** insert data into the table: "transactions" */
  insert_transactions?: Maybe<Transactions_Mutation_Response>
  /** insert a single row into the table: "transactions" */
  insert_transactions_one?: Maybe<Transactions>
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>
  /** update data of the table: "actions" */
  update_actions?: Maybe<Actions_Mutation_Response>
  /** update single row of the table: "actions" */
  update_actions_by_pk?: Maybe<Actions>
  /** update data of the table: "chains" */
  update_chains?: Maybe<Chains_Mutation_Response>
  /** update single row of the table: "chains" */
  update_chains_by_pk?: Maybe<Chains>
  /** update data of the table: "table_rows" */
  update_table_rows?: Maybe<Table_Rows_Mutation_Response>
  /** update single row of the table: "table_rows" */
  update_table_rows_by_pk?: Maybe<Table_Rows>
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
  account_name: Scalars['String']
  chain_id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_ActionsArgs = {
  where: Actions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Actions_By_PkArgs = {
  chain_id: Scalars['String']
  global_sequence: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_ChainsArgs = {
  where: Chains_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Chains_By_PkArgs = {
  chain_id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Table_RowsArgs = {
  where: Table_Rows_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Table_Rows_By_PkArgs = {
  chain_id: Scalars['String']
  contract: Scalars['String']
  primary_key: Scalars['String']
  scope: Scalars['String']
  table: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Transactions_By_PkArgs = {
  block_id: Scalars['String']
  chain_id: Scalars['String']
  transaction_id: Scalars['String']
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
export type Mutation_RootInsert_ActionsArgs = {
  objects: Array<Actions_Insert_Input>
  on_conflict?: Maybe<Actions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Actions_OneArgs = {
  object: Actions_Insert_Input
  on_conflict?: Maybe<Actions_On_Conflict>
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
export type Mutation_RootInsert_Table_RowsArgs = {
  objects: Array<Table_Rows_Insert_Input>
  on_conflict?: Maybe<Table_Rows_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Table_Rows_OneArgs = {
  object: Table_Rows_Insert_Input
  on_conflict?: Maybe<Table_Rows_On_Conflict>
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
  _append?: Maybe<Accounts_Append_Input>
  _delete_at_path?: Maybe<Accounts_Delete_At_Path_Input>
  _delete_elem?: Maybe<Accounts_Delete_Elem_Input>
  _delete_key?: Maybe<Accounts_Delete_Key_Input>
  _prepend?: Maybe<Accounts_Prepend_Input>
  _set?: Maybe<Accounts_Set_Input>
  where: Accounts_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _append?: Maybe<Accounts_Append_Input>
  _delete_at_path?: Maybe<Accounts_Delete_At_Path_Input>
  _delete_elem?: Maybe<Accounts_Delete_Elem_Input>
  _delete_key?: Maybe<Accounts_Delete_Key_Input>
  _prepend?: Maybe<Accounts_Prepend_Input>
  _set?: Maybe<Accounts_Set_Input>
  pk_columns: Accounts_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_ActionsArgs = {
  _append?: Maybe<Actions_Append_Input>
  _delete_at_path?: Maybe<Actions_Delete_At_Path_Input>
  _delete_elem?: Maybe<Actions_Delete_Elem_Input>
  _delete_key?: Maybe<Actions_Delete_Key_Input>
  _prepend?: Maybe<Actions_Prepend_Input>
  _set?: Maybe<Actions_Set_Input>
  where: Actions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Actions_By_PkArgs = {
  _append?: Maybe<Actions_Append_Input>
  _delete_at_path?: Maybe<Actions_Delete_At_Path_Input>
  _delete_elem?: Maybe<Actions_Delete_Elem_Input>
  _delete_key?: Maybe<Actions_Delete_Key_Input>
  _prepend?: Maybe<Actions_Prepend_Input>
  _set?: Maybe<Actions_Set_Input>
  pk_columns: Actions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_ChainsArgs = {
  _inc?: Maybe<Chains_Inc_Input>
  _set?: Maybe<Chains_Set_Input>
  where: Chains_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Chains_By_PkArgs = {
  _inc?: Maybe<Chains_Inc_Input>
  _set?: Maybe<Chains_Set_Input>
  pk_columns: Chains_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Table_RowsArgs = {
  _append?: Maybe<Table_Rows_Append_Input>
  _delete_at_path?: Maybe<Table_Rows_Delete_At_Path_Input>
  _delete_elem?: Maybe<Table_Rows_Delete_Elem_Input>
  _delete_key?: Maybe<Table_Rows_Delete_Key_Input>
  _prepend?: Maybe<Table_Rows_Prepend_Input>
  _set?: Maybe<Table_Rows_Set_Input>
  where: Table_Rows_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Table_Rows_By_PkArgs = {
  _append?: Maybe<Table_Rows_Append_Input>
  _delete_at_path?: Maybe<Table_Rows_Delete_At_Path_Input>
  _delete_elem?: Maybe<Table_Rows_Delete_Elem_Input>
  _delete_key?: Maybe<Table_Rows_Delete_Key_Input>
  _prepend?: Maybe<Table_Rows_Prepend_Input>
  _set?: Maybe<Table_Rows_Set_Input>
  pk_columns: Table_Rows_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_TransactionsArgs = {
  _append?: Maybe<Transactions_Append_Input>
  _delete_at_path?: Maybe<Transactions_Delete_At_Path_Input>
  _delete_elem?: Maybe<Transactions_Delete_Elem_Input>
  _delete_key?: Maybe<Transactions_Delete_Key_Input>
  _inc?: Maybe<Transactions_Inc_Input>
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
  _inc?: Maybe<Transactions_Inc_Input>
  _prepend?: Maybe<Transactions_Prepend_Input>
  _set?: Maybe<Transactions_Set_Input>
  pk_columns: Transactions_Pk_Columns_Input
}

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>
  _gt?: Maybe<Scalars['numeric']>
  _gte?: Maybe<Scalars['numeric']>
  _in?: Maybe<Array<Scalars['numeric']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['numeric']>
  _lte?: Maybe<Scalars['numeric']>
  _neq?: Maybe<Scalars['numeric']>
  _nin?: Maybe<Array<Scalars['numeric']>>
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
  /** fetch data from the table: "actions" */
  actions: Array<Actions>
  /** fetch aggregated fields from the table: "actions" */
  actions_aggregate: Actions_Aggregate
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: Maybe<Actions>
  /** fetch data from the table: "chains" */
  chains: Array<Chains>
  /** fetch aggregated fields from the table: "chains" */
  chains_aggregate: Chains_Aggregate
  /** fetch data from the table: "chains" using primary key columns */
  chains_by_pk?: Maybe<Chains>
  /** fetch data from the table: "table_rows" */
  table_rows: Array<Table_Rows>
  /** fetch aggregated fields from the table: "table_rows" */
  table_rows_aggregate: Table_Rows_Aggregate
  /** fetch data from the table: "table_rows" using primary key columns */
  table_rows_by_pk?: Maybe<Table_Rows>
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
  account_name: Scalars['String']
  chain_id: Scalars['String']
}

/** query root */
export type Query_RootActionsArgs = {
  distinct_on?: Maybe<Array<Actions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Actions_Order_By>>
  where?: Maybe<Actions_Bool_Exp>
}

/** query root */
export type Query_RootActions_AggregateArgs = {
  distinct_on?: Maybe<Array<Actions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Actions_Order_By>>
  where?: Maybe<Actions_Bool_Exp>
}

/** query root */
export type Query_RootActions_By_PkArgs = {
  chain_id: Scalars['String']
  global_sequence: Scalars['String']
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
  chain_id: Scalars['String']
}

/** query root */
export type Query_RootTable_RowsArgs = {
  distinct_on?: Maybe<Array<Table_Rows_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Table_Rows_Order_By>>
  where?: Maybe<Table_Rows_Bool_Exp>
}

/** query root */
export type Query_RootTable_Rows_AggregateArgs = {
  distinct_on?: Maybe<Array<Table_Rows_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Table_Rows_Order_By>>
  where?: Maybe<Table_Rows_Bool_Exp>
}

/** query root */
export type Query_RootTable_Rows_By_PkArgs = {
  chain_id: Scalars['String']
  contract: Scalars['String']
  primary_key: Scalars['String']
  scope: Scalars['String']
  table: Scalars['String']
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
  block_id: Scalars['String']
  chain_id: Scalars['String']
  transaction_id: Scalars['String']
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
  /** fetch data from the table: "actions" */
  actions: Array<Actions>
  /** fetch aggregated fields from the table: "actions" */
  actions_aggregate: Actions_Aggregate
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: Maybe<Actions>
  /** fetch data from the table: "chains" */
  chains: Array<Chains>
  /** fetch aggregated fields from the table: "chains" */
  chains_aggregate: Chains_Aggregate
  /** fetch data from the table: "chains" using primary key columns */
  chains_by_pk?: Maybe<Chains>
  /** fetch data from the table: "table_rows" */
  table_rows: Array<Table_Rows>
  /** fetch aggregated fields from the table: "table_rows" */
  table_rows_aggregate: Table_Rows_Aggregate
  /** fetch data from the table: "table_rows" using primary key columns */
  table_rows_by_pk?: Maybe<Table_Rows>
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
  account_name: Scalars['String']
  chain_id: Scalars['String']
}

/** subscription root */
export type Subscription_RootActionsArgs = {
  distinct_on?: Maybe<Array<Actions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Actions_Order_By>>
  where?: Maybe<Actions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootActions_AggregateArgs = {
  distinct_on?: Maybe<Array<Actions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Actions_Order_By>>
  where?: Maybe<Actions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootActions_By_PkArgs = {
  chain_id: Scalars['String']
  global_sequence: Scalars['String']
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
  chain_id: Scalars['String']
}

/** subscription root */
export type Subscription_RootTable_RowsArgs = {
  distinct_on?: Maybe<Array<Table_Rows_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Table_Rows_Order_By>>
  where?: Maybe<Table_Rows_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTable_Rows_AggregateArgs = {
  distinct_on?: Maybe<Array<Table_Rows_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Table_Rows_Order_By>>
  where?: Maybe<Table_Rows_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTable_Rows_By_PkArgs = {
  chain_id: Scalars['String']
  contract: Scalars['String']
  primary_key: Scalars['String']
  scope: Scalars['String']
  table: Scalars['String']
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
  block_id: Scalars['String']
  chain_id: Scalars['String']
  transaction_id: Scalars['String']
}

/** columns and relationships of "table_rows" */
export type Table_Rows = {
  __typename?: 'table_rows'
  chain_id: Scalars['String']
  contract: Scalars['String']
  data: Scalars['jsonb']
  primary_key: Scalars['String']
  scope: Scalars['String']
  table: Scalars['String']
}

/** columns and relationships of "table_rows" */
export type Table_RowsDataArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "table_rows" */
export type Table_Rows_Aggregate = {
  __typename?: 'table_rows_aggregate'
  aggregate?: Maybe<Table_Rows_Aggregate_Fields>
  nodes: Array<Table_Rows>
}

/** aggregate fields of "table_rows" */
export type Table_Rows_Aggregate_Fields = {
  __typename?: 'table_rows_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Table_Rows_Max_Fields>
  min?: Maybe<Table_Rows_Min_Fields>
}

/** aggregate fields of "table_rows" */
export type Table_Rows_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Table_Rows_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "table_rows" */
export type Table_Rows_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Table_Rows_Max_Order_By>
  min?: Maybe<Table_Rows_Min_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Table_Rows_Append_Input = {
  data?: Maybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "table_rows" */
export type Table_Rows_Arr_Rel_Insert_Input = {
  data: Array<Table_Rows_Insert_Input>
  on_conflict?: Maybe<Table_Rows_On_Conflict>
}

/** Boolean expression to filter rows from the table "table_rows". All fields are combined with a logical 'AND'. */
export type Table_Rows_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Table_Rows_Bool_Exp>>>
  _not?: Maybe<Table_Rows_Bool_Exp>
  _or?: Maybe<Array<Maybe<Table_Rows_Bool_Exp>>>
  chain_id?: Maybe<String_Comparison_Exp>
  contract?: Maybe<String_Comparison_Exp>
  data?: Maybe<Jsonb_Comparison_Exp>
  primary_key?: Maybe<String_Comparison_Exp>
  scope?: Maybe<String_Comparison_Exp>
  table?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "table_rows" */
export enum Table_Rows_Constraint {
  /** unique or primary key constraint */
  TablesPkey = 'tables_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Table_Rows_Delete_At_Path_Input = {
  data?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Table_Rows_Delete_Elem_Input = {
  data?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Table_Rows_Delete_Key_Input = {
  data?: Maybe<Scalars['String']>
}

/** input type for inserting data into table "table_rows" */
export type Table_Rows_Insert_Input = {
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['jsonb']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  table?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Table_Rows_Max_Fields = {
  __typename?: 'table_rows_max_fields'
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  table?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "table_rows" */
export type Table_Rows_Max_Order_By = {
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  primary_key?: Maybe<Order_By>
  scope?: Maybe<Order_By>
  table?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Table_Rows_Min_Fields = {
  __typename?: 'table_rows_min_fields'
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  table?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "table_rows" */
export type Table_Rows_Min_Order_By = {
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  primary_key?: Maybe<Order_By>
  scope?: Maybe<Order_By>
  table?: Maybe<Order_By>
}

/** response of any mutation on the table "table_rows" */
export type Table_Rows_Mutation_Response = {
  __typename?: 'table_rows_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Table_Rows>
}

/** input type for inserting object relation for remote table "table_rows" */
export type Table_Rows_Obj_Rel_Insert_Input = {
  data: Table_Rows_Insert_Input
  on_conflict?: Maybe<Table_Rows_On_Conflict>
}

/** on conflict condition type for table "table_rows" */
export type Table_Rows_On_Conflict = {
  constraint: Table_Rows_Constraint
  update_columns: Array<Table_Rows_Update_Column>
  where?: Maybe<Table_Rows_Bool_Exp>
}

/** ordering options when selecting data from "table_rows" */
export type Table_Rows_Order_By = {
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  data?: Maybe<Order_By>
  primary_key?: Maybe<Order_By>
  scope?: Maybe<Order_By>
  table?: Maybe<Order_By>
}

/** primary key columns input for table: "table_rows" */
export type Table_Rows_Pk_Columns_Input = {
  chain_id: Scalars['String']
  contract: Scalars['String']
  primary_key: Scalars['String']
  scope: Scalars['String']
  table: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Table_Rows_Prepend_Input = {
  data?: Maybe<Scalars['jsonb']>
}

/** select columns of table "table_rows" */
export enum Table_Rows_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Contract = 'contract',
  /** column name */
  Data = 'data',
  /** column name */
  PrimaryKey = 'primary_key',
  /** column name */
  Scope = 'scope',
  /** column name */
  Table = 'table',
}

/** input type for updating data in table "table_rows" */
export type Table_Rows_Set_Input = {
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['jsonb']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  table?: Maybe<Scalars['String']>
}

/** update columns of table "table_rows" */
export enum Table_Rows_Update_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Contract = 'contract',
  /** column name */
  Data = 'data',
  /** column name */
  PrimaryKey = 'primary_key',
  /** column name */
  Scope = 'scope',
  /** column name */
  Table = 'table',
}

/** columns and relationships of "transactions" */
export type Transactions = {
  __typename?: 'transactions'
  block_id: Scalars['String']
  block_num: Scalars['numeric']
  chain_id: Scalars['String']
  data?: Maybe<Scalars['jsonb']>
  transaction_id: Scalars['String']
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
  avg?: Maybe<Transactions_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Transactions_Max_Fields>
  min?: Maybe<Transactions_Min_Fields>
  stddev?: Maybe<Transactions_Stddev_Fields>
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Fields>
  sum?: Maybe<Transactions_Sum_Fields>
  var_pop?: Maybe<Transactions_Var_Pop_Fields>
  var_samp?: Maybe<Transactions_Var_Samp_Fields>
  variance?: Maybe<Transactions_Variance_Fields>
}

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transactions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "transactions" */
export type Transactions_Aggregate_Order_By = {
  avg?: Maybe<Transactions_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Transactions_Max_Order_By>
  min?: Maybe<Transactions_Min_Order_By>
  stddev?: Maybe<Transactions_Stddev_Order_By>
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Order_By>
  sum?: Maybe<Transactions_Sum_Order_By>
  var_pop?: Maybe<Transactions_Var_Pop_Order_By>
  var_samp?: Maybe<Transactions_Var_Samp_Order_By>
  variance?: Maybe<Transactions_Variance_Order_By>
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

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename?: 'transactions_avg_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "transactions" */
export type Transactions_Avg_Order_By = {
  block_num?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Transactions_Bool_Exp>>>
  _not?: Maybe<Transactions_Bool_Exp>
  _or?: Maybe<Array<Maybe<Transactions_Bool_Exp>>>
  block_id?: Maybe<String_Comparison_Exp>
  block_num?: Maybe<Numeric_Comparison_Exp>
  chain_id?: Maybe<String_Comparison_Exp>
  data?: Maybe<Jsonb_Comparison_Exp>
  transaction_id?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
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

/** input type for incrementing integer column in table "transactions" */
export type Transactions_Inc_Input = {
  block_num?: Maybe<Scalars['numeric']>
}

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  chain_id?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['jsonb']>
  transaction_id?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'transactions_max_fields'
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  chain_id?: Maybe<Scalars['String']>
  transaction_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  block_id?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'transactions_min_fields'
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  chain_id?: Maybe<Scalars['String']>
  transaction_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  block_id?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
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
  block_id?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  data?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** primary key columns input for table: "transactions" */
export type Transactions_Pk_Columns_Input = {
  block_id: Scalars['String']
  chain_id: Scalars['String']
  transaction_id: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Transactions_Prepend_Input = {
  data?: Maybe<Scalars['jsonb']>
}

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  BlockNum = 'block_num',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Data = 'data',
  /** column name */
  TransactionId = 'transaction_id',
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  chain_id?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['jsonb']>
  transaction_id?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Transactions_Stddev_Fields = {
  __typename?: 'transactions_stddev_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "transactions" */
export type Transactions_Stddev_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename?: 'transactions_stddev_pop_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename?: 'transactions_stddev_samp_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Transactions_Sum_Fields = {
  __typename?: 'transactions_sum_fields'
  block_num?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "transactions" */
export type Transactions_Sum_Order_By = {
  block_num?: Maybe<Order_By>
}

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  BlockNum = 'block_num',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Data = 'data',
  /** column name */
  TransactionId = 'transaction_id',
}

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename?: 'transactions_var_pop_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "transactions" */
export type Transactions_Var_Pop_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename?: 'transactions_var_samp_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "transactions" */
export type Transactions_Var_Samp_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename?: 'transactions_variance_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "transactions" */
export type Transactions_Variance_Order_By = {
  block_num?: Maybe<Order_By>
}

export type Upsert_Table_RowMutationVariables = Exact<{
  chain_id: Scalars['String']
  contract: Scalars['String']
  table: Scalars['String']
  scope: Scalars['String']
  primary_key: Scalars['String']
  data: Scalars['jsonb']
}>

export type Upsert_Table_RowMutation = {
  __typename?: 'mutation_root'
  insert_table_rows_one?: Maybe<{
    __typename?: 'table_rows'
    chain_id: string
    contract: string
    table: string
    scope: string
    primary_key: string
    data: any
  }>
}

export type Update_Block_HeightMutationVariables = Exact<{
  chain_id: Scalars['String']
  block_num: Scalars['numeric']
  block_id: Scalars['String']
}>

export type Update_Block_HeightMutation = {
  __typename?: 'mutation_root'
  update_chains_by_pk?: Maybe<{
    __typename?: 'chains'
    block_id?: Maybe<string>
    block_num?: Maybe<any>
    chain_id: string
    name: string
    rpc_endpoint: string
  }>
}

export type Delete_Table_RowMutationVariables = Exact<{
  chain_id: Scalars['String']
  contract: Scalars['String']
  primary_key: Scalars['String']
  scope: Scalars['String']
  table: Scalars['String']
}>

export type Delete_Table_RowMutation = {
  __typename?: 'mutation_root'
  delete_table_rows_by_pk?: Maybe<{
    __typename?: 'table_rows'
    chain_id: string
    table: string
    scope: string
    contract: string
    primary_key: string
    data: any
  }>
}

export type Insert_TransactionMutationVariables = Exact<{
  objects: Array<Transactions_Insert_Input>
}>

export type Insert_TransactionMutation = {
  __typename?: 'mutation_root'
  insert_transactions?: Maybe<{ __typename?: 'transactions_mutation_response'; affected_rows: number }>
}

export type Insert_ActionsMutationVariables = Exact<{
  objects: Array<Actions_Insert_Input>
}>

export type Insert_ActionsMutation = {
  __typename?: 'mutation_root'
  insert_actions?: Maybe<{ __typename?: 'actions_mutation_response'; affected_rows: number }>
}

export const Upsert_Table_RowDocument = gql`
  mutation upsert_table_row(
    $chain_id: String!
    $contract: String!
    $table: String!
    $scope: String!
    $primary_key: String!
    $data: jsonb!
  ) {
    insert_table_rows_one(
      object: { chain_id: $chain_id, contract: $contract, table: $table, scope: $scope, primary_key: $primary_key, data: $data }
      on_conflict: { constraint: tables_pkey, update_columns: data }
    ) {
      chain_id
      contract
      table
      scope
      primary_key
      data
    }
  }
`
export const Update_Block_HeightDocument = gql`
  mutation update_block_height($chain_id: String!, $block_num: numeric!, $block_id: String!) {
    update_chains_by_pk(pk_columns: { chain_id: $chain_id }, _set: { block_id: $block_id, block_num: $block_num }) {
      block_id
      block_num
      chain_id
      name
      rpc_endpoint
    }
  }
`
export const Delete_Table_RowDocument = gql`
  mutation delete_table_row($chain_id: String!, $contract: String!, $primary_key: String!, $scope: String!, $table: String!) {
    delete_table_rows_by_pk(chain_id: $chain_id, contract: $contract, primary_key: $primary_key, scope: $scope, table: $table) {
      chain_id
      table
      scope
      contract
      primary_key
      data
    }
  }
`
export const Insert_TransactionDocument = gql`
  mutation insert_transaction($objects: [transactions_insert_input!]!) {
    insert_transactions(objects: $objects) {
      affected_rows
    }
  }
`
export const Insert_ActionsDocument = gql`
  mutation insert_actions($objects: [actions_insert_input!]!) {
    insert_actions(objects: $objects) {
      affected_rows
    }
  }
`

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction()
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    upsert_table_row(
      variables: Upsert_Table_RowMutationVariables,
    ): Promise<{
        data?: Upsert_Table_RowMutation | undefined
        extensions?: any
        headers: Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(() => client.rawRequest<Upsert_Table_RowMutation>(print(Upsert_Table_RowDocument), variables))
    },
    update_block_height(
      variables: Update_Block_HeightMutationVariables,
    ): Promise<{
        data?: Update_Block_HeightMutation | undefined
        extensions?: any
        headers: Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(() => client.rawRequest<Update_Block_HeightMutation>(print(Update_Block_HeightDocument), variables))
    },
    delete_table_row(
      variables: Delete_Table_RowMutationVariables,
    ): Promise<{
        data?: Delete_Table_RowMutation | undefined
        extensions?: any
        headers: Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(() => client.rawRequest<Delete_Table_RowMutation>(print(Delete_Table_RowDocument), variables))
    },
    insert_transaction(
      variables: Insert_TransactionMutationVariables,
    ): Promise<{
        data?: Insert_TransactionMutation | undefined
        extensions?: any
        headers: Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(() => client.rawRequest<Insert_TransactionMutation>(print(Insert_TransactionDocument), variables))
    },
    insert_actions(
      variables: Insert_ActionsMutationVariables,
    ): Promise<{
        data?: Insert_ActionsMutation | undefined
        extensions?: any
        headers: Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(() => client.rawRequest<Insert_ActionsMutation>(print(Insert_ActionsDocument), variables))
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
