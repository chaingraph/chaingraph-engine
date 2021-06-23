import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import { GraphQLError } from 'graphql-request/dist/types'
import { print } from 'graphql'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
{ [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
{ [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  jsonb: any
  numeric: any
  timestamptz: any
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
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
  created_at: Scalars['timestamptz']
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
  created_at?: Maybe<Timestamptz_Comparison_Exp>
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
  created_at?: Maybe<Scalars['timestamptz']>
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
  created_at?: Maybe<Scalars['timestamptz']>
  global_sequence?: Maybe<Scalars['String']>
  transaction_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "actions" */
export type Actions_Max_Order_By = {
  action_name?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  global_sequence?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Actions_Min_Fields = {
  __typename?: 'actions_min_fields'
  action_name?: Maybe<Scalars['String']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  global_sequence?: Maybe<Scalars['String']>
  transaction_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "actions" */
export type Actions_Min_Order_By = {
  action_name?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
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
  created_at?: Maybe<Order_By>
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
  CreatedAt = 'created_at',
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
  created_at?: Maybe<Scalars['timestamptz']>
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
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  GlobalSequence = 'global_sequence',
  /** column name */
  TransactionId = 'transaction_id',
}

/** columns and relationships of "api_users" */
export type Api_Users = {
  __typename?: 'api_users'
  account: Scalars['String']
  api_key: Scalars['String']
  domain_names?: Maybe<Scalars['String']>
  id: Scalars['Int']
  /** An array relationship */
  mappings: Array<Mappings>
  /** An aggregated array relationship */
  mappings_aggregate: Mappings_Aggregate
}

/** columns and relationships of "api_users" */
export type Api_UsersMappingsArgs = {
  distinct_on?: Maybe<Array<Mappings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Mappings_Order_By>>
  where?: Maybe<Mappings_Bool_Exp>
}

/** columns and relationships of "api_users" */
export type Api_UsersMappings_AggregateArgs = {
  distinct_on?: Maybe<Array<Mappings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Mappings_Order_By>>
  where?: Maybe<Mappings_Bool_Exp>
}

/** aggregated selection of "api_users" */
export type Api_Users_Aggregate = {
  __typename?: 'api_users_aggregate'
  aggregate?: Maybe<Api_Users_Aggregate_Fields>
  nodes: Array<Api_Users>
}

/** aggregate fields of "api_users" */
export type Api_Users_Aggregate_Fields = {
  __typename?: 'api_users_aggregate_fields'
  avg?: Maybe<Api_Users_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Api_Users_Max_Fields>
  min?: Maybe<Api_Users_Min_Fields>
  stddev?: Maybe<Api_Users_Stddev_Fields>
  stddev_pop?: Maybe<Api_Users_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Api_Users_Stddev_Samp_Fields>
  sum?: Maybe<Api_Users_Sum_Fields>
  var_pop?: Maybe<Api_Users_Var_Pop_Fields>
  var_samp?: Maybe<Api_Users_Var_Samp_Fields>
  variance?: Maybe<Api_Users_Variance_Fields>
}

/** aggregate fields of "api_users" */
export type Api_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Api_Users_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "api_users" */
export type Api_Users_Aggregate_Order_By = {
  avg?: Maybe<Api_Users_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Api_Users_Max_Order_By>
  min?: Maybe<Api_Users_Min_Order_By>
  stddev?: Maybe<Api_Users_Stddev_Order_By>
  stddev_pop?: Maybe<Api_Users_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Api_Users_Stddev_Samp_Order_By>
  sum?: Maybe<Api_Users_Sum_Order_By>
  var_pop?: Maybe<Api_Users_Var_Pop_Order_By>
  var_samp?: Maybe<Api_Users_Var_Samp_Order_By>
  variance?: Maybe<Api_Users_Variance_Order_By>
}

/** input type for inserting array relation for remote table "api_users" */
export type Api_Users_Arr_Rel_Insert_Input = {
  data: Array<Api_Users_Insert_Input>
  on_conflict?: Maybe<Api_Users_On_Conflict>
}

/** aggregate avg on columns */
export type Api_Users_Avg_Fields = {
  __typename?: 'api_users_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "api_users" */
export type Api_Users_Avg_Order_By = {
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "api_users". All fields are combined with a logical 'AND'. */
export type Api_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Api_Users_Bool_Exp>>>
  _not?: Maybe<Api_Users_Bool_Exp>
  _or?: Maybe<Array<Maybe<Api_Users_Bool_Exp>>>
  account?: Maybe<String_Comparison_Exp>
  api_key?: Maybe<String_Comparison_Exp>
  domain_names?: Maybe<String_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  mappings?: Maybe<Mappings_Bool_Exp>
}

/** unique or primary key constraints on table "api_users" */
export enum Api_Users_Constraint {
  /** unique or primary key constraint */
  ApiUsersApiKeyKey = 'api_users_api_key_key',
  /** unique or primary key constraint */
  ApiUsersPkey = 'api_users_pkey',
}

/** input type for incrementing integer column in table "api_users" */
export type Api_Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "api_users" */
export type Api_Users_Insert_Input = {
  account?: Maybe<Scalars['String']>
  api_key?: Maybe<Scalars['String']>
  domain_names?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  mappings?: Maybe<Mappings_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Api_Users_Max_Fields = {
  __typename?: 'api_users_max_fields'
  account?: Maybe<Scalars['String']>
  api_key?: Maybe<Scalars['String']>
  domain_names?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "api_users" */
export type Api_Users_Max_Order_By = {
  account?: Maybe<Order_By>
  api_key?: Maybe<Order_By>
  domain_names?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Api_Users_Min_Fields = {
  __typename?: 'api_users_min_fields'
  account?: Maybe<Scalars['String']>
  api_key?: Maybe<Scalars['String']>
  domain_names?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "api_users" */
export type Api_Users_Min_Order_By = {
  account?: Maybe<Order_By>
  api_key?: Maybe<Order_By>
  domain_names?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** response of any mutation on the table "api_users" */
export type Api_Users_Mutation_Response = {
  __typename?: 'api_users_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Api_Users>
}

/** input type for inserting object relation for remote table "api_users" */
export type Api_Users_Obj_Rel_Insert_Input = {
  data: Api_Users_Insert_Input
  on_conflict?: Maybe<Api_Users_On_Conflict>
}

/** on conflict condition type for table "api_users" */
export type Api_Users_On_Conflict = {
  constraint: Api_Users_Constraint
  update_columns: Array<Api_Users_Update_Column>
  where?: Maybe<Api_Users_Bool_Exp>
}

/** ordering options when selecting data from "api_users" */
export type Api_Users_Order_By = {
  account?: Maybe<Order_By>
  api_key?: Maybe<Order_By>
  domain_names?: Maybe<Order_By>
  id?: Maybe<Order_By>
  mappings_aggregate?: Maybe<Mappings_Aggregate_Order_By>
}

/** primary key columns input for table: "api_users" */
export type Api_Users_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "api_users" */
export enum Api_Users_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  ApiKey = 'api_key',
  /** column name */
  DomainNames = 'domain_names',
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "api_users" */
export type Api_Users_Set_Input = {
  account?: Maybe<Scalars['String']>
  api_key?: Maybe<Scalars['String']>
  domain_names?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Api_Users_Stddev_Fields = {
  __typename?: 'api_users_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "api_users" */
export type Api_Users_Stddev_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Api_Users_Stddev_Pop_Fields = {
  __typename?: 'api_users_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "api_users" */
export type Api_Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Api_Users_Stddev_Samp_Fields = {
  __typename?: 'api_users_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "api_users" */
export type Api_Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Api_Users_Sum_Fields = {
  __typename?: 'api_users_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "api_users" */
export type Api_Users_Sum_Order_By = {
  id?: Maybe<Order_By>
}

/** update columns of table "api_users" */
export enum Api_Users_Update_Column {
  /** column name */
  Account = 'account',
  /** column name */
  ApiKey = 'api_key',
  /** column name */
  DomainNames = 'domain_names',
  /** column name */
  Id = 'id',
}

/** aggregate var_pop on columns */
export type Api_Users_Var_Pop_Fields = {
  __typename?: 'api_users_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "api_users" */
export type Api_Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Api_Users_Var_Samp_Fields = {
  __typename?: 'api_users_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "api_users" */
export type Api_Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Api_Users_Variance_Fields = {
  __typename?: 'api_users_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "api_users" */
export type Api_Users_Variance_Order_By = {
  id?: Maybe<Order_By>
}

/** columns and relationships of "balances" */
export type Balances = {
  __typename?: 'balances'
  account: Scalars['String']
  balance: Scalars['String']
  chain_id: Scalars['String']
  contract: Scalars['String']
  symbol: Scalars['String']
  /** An object relationship */
  token?: Maybe<Tokens>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregated selection of "balances" */
export type Balances_Aggregate = {
  __typename?: 'balances_aggregate'
  aggregate?: Maybe<Balances_Aggregate_Fields>
  nodes: Array<Balances>
}

/** aggregate fields of "balances" */
export type Balances_Aggregate_Fields = {
  __typename?: 'balances_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Balances_Max_Fields>
  min?: Maybe<Balances_Min_Fields>
}

/** aggregate fields of "balances" */
export type Balances_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Balances_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "balances" */
export type Balances_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Balances_Max_Order_By>
  min?: Maybe<Balances_Min_Order_By>
}

/** input type for inserting array relation for remote table "balances" */
export type Balances_Arr_Rel_Insert_Input = {
  data: Array<Balances_Insert_Input>
  on_conflict?: Maybe<Balances_On_Conflict>
}

/** Boolean expression to filter rows from the table "balances". All fields are combined with a logical 'AND'. */
export type Balances_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Balances_Bool_Exp>>>
  _not?: Maybe<Balances_Bool_Exp>
  _or?: Maybe<Array<Maybe<Balances_Bool_Exp>>>
  account?: Maybe<String_Comparison_Exp>
  balance?: Maybe<String_Comparison_Exp>
  chain_id?: Maybe<String_Comparison_Exp>
  contract?: Maybe<String_Comparison_Exp>
  symbol?: Maybe<String_Comparison_Exp>
  token?: Maybe<Tokens_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "balances" */
export enum Balances_Constraint {
  /** unique or primary key constraint */
  BalancesPkey = 'balances_pkey',
}

/** input type for inserting data into table "balances" */
export type Balances_Insert_Input = {
  account?: Maybe<Scalars['String']>
  balance?: Maybe<Scalars['String']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  token?: Maybe<Tokens_Obj_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Balances_Max_Fields = {
  __typename?: 'balances_max_fields'
  account?: Maybe<Scalars['String']>
  balance?: Maybe<Scalars['String']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "balances" */
export type Balances_Max_Order_By = {
  account?: Maybe<Order_By>
  balance?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  symbol?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Balances_Min_Fields = {
  __typename?: 'balances_min_fields'
  account?: Maybe<Scalars['String']>
  balance?: Maybe<Scalars['String']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "balances" */
export type Balances_Min_Order_By = {
  account?: Maybe<Order_By>
  balance?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  symbol?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "balances" */
export type Balances_Mutation_Response = {
  __typename?: 'balances_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Balances>
}

/** input type for inserting object relation for remote table "balances" */
export type Balances_Obj_Rel_Insert_Input = {
  data: Balances_Insert_Input
  on_conflict?: Maybe<Balances_On_Conflict>
}

/** on conflict condition type for table "balances" */
export type Balances_On_Conflict = {
  constraint: Balances_Constraint
  update_columns: Array<Balances_Update_Column>
  where?: Maybe<Balances_Bool_Exp>
}

/** ordering options when selecting data from "balances" */
export type Balances_Order_By = {
  account?: Maybe<Order_By>
  balance?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  symbol?: Maybe<Order_By>
  token?: Maybe<Tokens_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "balances" */
export type Balances_Pk_Columns_Input = {
  account: Scalars['String']
  chain_id: Scalars['String']
  contract: Scalars['String']
  symbol: Scalars['String']
}

/** select columns of table "balances" */
export enum Balances_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Balance = 'balance',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Contract = 'contract',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "balances" */
export type Balances_Set_Input = {
  account?: Maybe<Scalars['String']>
  balance?: Maybe<Scalars['String']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** update columns of table "balances" */
export enum Balances_Update_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Balance = 'balance',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Contract = 'contract',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at',
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

/** columns and relationships of "mappings" */
export type Mappings = {
  __typename?: 'mappings'
  /** An object relationship */
  api_user: Api_Users
  api_user_id: Scalars['Int']
  contract_name: Scalars['String']
  mapping: Scalars['jsonb']
}

/** columns and relationships of "mappings" */
export type MappingsMappingArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "mappings" */
export type Mappings_Aggregate = {
  __typename?: 'mappings_aggregate'
  aggregate?: Maybe<Mappings_Aggregate_Fields>
  nodes: Array<Mappings>
}

/** aggregate fields of "mappings" */
export type Mappings_Aggregate_Fields = {
  __typename?: 'mappings_aggregate_fields'
  avg?: Maybe<Mappings_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Mappings_Max_Fields>
  min?: Maybe<Mappings_Min_Fields>
  stddev?: Maybe<Mappings_Stddev_Fields>
  stddev_pop?: Maybe<Mappings_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Mappings_Stddev_Samp_Fields>
  sum?: Maybe<Mappings_Sum_Fields>
  var_pop?: Maybe<Mappings_Var_Pop_Fields>
  var_samp?: Maybe<Mappings_Var_Samp_Fields>
  variance?: Maybe<Mappings_Variance_Fields>
}

/** aggregate fields of "mappings" */
export type Mappings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Mappings_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "mappings" */
export type Mappings_Aggregate_Order_By = {
  avg?: Maybe<Mappings_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Mappings_Max_Order_By>
  min?: Maybe<Mappings_Min_Order_By>
  stddev?: Maybe<Mappings_Stddev_Order_By>
  stddev_pop?: Maybe<Mappings_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Mappings_Stddev_Samp_Order_By>
  sum?: Maybe<Mappings_Sum_Order_By>
  var_pop?: Maybe<Mappings_Var_Pop_Order_By>
  var_samp?: Maybe<Mappings_Var_Samp_Order_By>
  variance?: Maybe<Mappings_Variance_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Mappings_Append_Input = {
  mapping?: Maybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "mappings" */
export type Mappings_Arr_Rel_Insert_Input = {
  data: Array<Mappings_Insert_Input>
  on_conflict?: Maybe<Mappings_On_Conflict>
}

/** aggregate avg on columns */
export type Mappings_Avg_Fields = {
  __typename?: 'mappings_avg_fields'
  api_user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "mappings" */
export type Mappings_Avg_Order_By = {
  api_user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "mappings". All fields are combined with a logical 'AND'. */
export type Mappings_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Mappings_Bool_Exp>>>
  _not?: Maybe<Mappings_Bool_Exp>
  _or?: Maybe<Array<Maybe<Mappings_Bool_Exp>>>
  api_user?: Maybe<Api_Users_Bool_Exp>
  api_user_id?: Maybe<Int_Comparison_Exp>
  contract_name?: Maybe<String_Comparison_Exp>
  mapping?: Maybe<Jsonb_Comparison_Exp>
}

/** unique or primary key constraints on table "mappings" */
export enum Mappings_Constraint {
  /** unique or primary key constraint */
  MappingsPkey = 'mappings_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Mappings_Delete_At_Path_Input = {
  mapping?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Mappings_Delete_Elem_Input = {
  mapping?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Mappings_Delete_Key_Input = {
  mapping?: Maybe<Scalars['String']>
}

/** input type for incrementing integer column in table "mappings" */
export type Mappings_Inc_Input = {
  api_user_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "mappings" */
export type Mappings_Insert_Input = {
  api_user?: Maybe<Api_Users_Obj_Rel_Insert_Input>
  api_user_id?: Maybe<Scalars['Int']>
  contract_name?: Maybe<Scalars['String']>
  mapping?: Maybe<Scalars['jsonb']>
}

/** aggregate max on columns */
export type Mappings_Max_Fields = {
  __typename?: 'mappings_max_fields'
  api_user_id?: Maybe<Scalars['Int']>
  contract_name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "mappings" */
export type Mappings_Max_Order_By = {
  api_user_id?: Maybe<Order_By>
  contract_name?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Mappings_Min_Fields = {
  __typename?: 'mappings_min_fields'
  api_user_id?: Maybe<Scalars['Int']>
  contract_name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "mappings" */
export type Mappings_Min_Order_By = {
  api_user_id?: Maybe<Order_By>
  contract_name?: Maybe<Order_By>
}

/** response of any mutation on the table "mappings" */
export type Mappings_Mutation_Response = {
  __typename?: 'mappings_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Mappings>
}

/** input type for inserting object relation for remote table "mappings" */
export type Mappings_Obj_Rel_Insert_Input = {
  data: Mappings_Insert_Input
  on_conflict?: Maybe<Mappings_On_Conflict>
}

/** on conflict condition type for table "mappings" */
export type Mappings_On_Conflict = {
  constraint: Mappings_Constraint
  update_columns: Array<Mappings_Update_Column>
  where?: Maybe<Mappings_Bool_Exp>
}

/** ordering options when selecting data from "mappings" */
export type Mappings_Order_By = {
  api_user?: Maybe<Api_Users_Order_By>
  api_user_id?: Maybe<Order_By>
  contract_name?: Maybe<Order_By>
  mapping?: Maybe<Order_By>
}

/** primary key columns input for table: "mappings" */
export type Mappings_Pk_Columns_Input = {
  contract_name: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Mappings_Prepend_Input = {
  mapping?: Maybe<Scalars['jsonb']>
}

/** select columns of table "mappings" */
export enum Mappings_Select_Column {
  /** column name */
  ApiUserId = 'api_user_id',
  /** column name */
  ContractName = 'contract_name',
  /** column name */
  Mapping = 'mapping',
}

/** input type for updating data in table "mappings" */
export type Mappings_Set_Input = {
  api_user_id?: Maybe<Scalars['Int']>
  contract_name?: Maybe<Scalars['String']>
  mapping?: Maybe<Scalars['jsonb']>
}

/** aggregate stddev on columns */
export type Mappings_Stddev_Fields = {
  __typename?: 'mappings_stddev_fields'
  api_user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "mappings" */
export type Mappings_Stddev_Order_By = {
  api_user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Mappings_Stddev_Pop_Fields = {
  __typename?: 'mappings_stddev_pop_fields'
  api_user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "mappings" */
export type Mappings_Stddev_Pop_Order_By = {
  api_user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Mappings_Stddev_Samp_Fields = {
  __typename?: 'mappings_stddev_samp_fields'
  api_user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "mappings" */
export type Mappings_Stddev_Samp_Order_By = {
  api_user_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Mappings_Sum_Fields = {
  __typename?: 'mappings_sum_fields'
  api_user_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "mappings" */
export type Mappings_Sum_Order_By = {
  api_user_id?: Maybe<Order_By>
}

/** update columns of table "mappings" */
export enum Mappings_Update_Column {
  /** column name */
  ApiUserId = 'api_user_id',
  /** column name */
  ContractName = 'contract_name',
  /** column name */
  Mapping = 'mapping',
}

/** aggregate var_pop on columns */
export type Mappings_Var_Pop_Fields = {
  __typename?: 'mappings_var_pop_fields'
  api_user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "mappings" */
export type Mappings_Var_Pop_Order_By = {
  api_user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Mappings_Var_Samp_Fields = {
  __typename?: 'mappings_var_samp_fields'
  api_user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "mappings" */
export type Mappings_Var_Samp_Order_By = {
  api_user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Mappings_Variance_Fields = {
  __typename?: 'mappings_variance_fields'
  api_user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "mappings" */
export type Mappings_Variance_Order_By = {
  api_user_id?: Maybe<Order_By>
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
  /** delete data from the table: "api_users" */
  delete_api_users?: Maybe<Api_Users_Mutation_Response>
  /** delete single row from the table: "api_users" */
  delete_api_users_by_pk?: Maybe<Api_Users>
  /** delete data from the table: "balances" */
  delete_balances?: Maybe<Balances_Mutation_Response>
  /** delete single row from the table: "balances" */
  delete_balances_by_pk?: Maybe<Balances>
  /** delete data from the table: "chains" */
  delete_chains?: Maybe<Chains_Mutation_Response>
  /** delete single row from the table: "chains" */
  delete_chains_by_pk?: Maybe<Chains>
  /** delete data from the table: "mappings" */
  delete_mappings?: Maybe<Mappings_Mutation_Response>
  /** delete single row from the table: "mappings" */
  delete_mappings_by_pk?: Maybe<Mappings>
  /** delete data from the table: "table_rows" */
  delete_table_rows?: Maybe<Table_Rows_Mutation_Response>
  /** delete single row from the table: "table_rows" */
  delete_table_rows_by_pk?: Maybe<Table_Rows>
  /** delete data from the table: "tokens" */
  delete_tokens?: Maybe<Tokens_Mutation_Response>
  /** delete single row from the table: "tokens" */
  delete_tokens_by_pk?: Maybe<Tokens>
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
  /** insert data into the table: "api_users" */
  insert_api_users?: Maybe<Api_Users_Mutation_Response>
  /** insert a single row into the table: "api_users" */
  insert_api_users_one?: Maybe<Api_Users>
  /** insert data into the table: "balances" */
  insert_balances?: Maybe<Balances_Mutation_Response>
  /** insert a single row into the table: "balances" */
  insert_balances_one?: Maybe<Balances>
  /** insert data into the table: "chains" */
  insert_chains?: Maybe<Chains_Mutation_Response>
  /** insert a single row into the table: "chains" */
  insert_chains_one?: Maybe<Chains>
  /** insert data into the table: "mappings" */
  insert_mappings?: Maybe<Mappings_Mutation_Response>
  /** insert a single row into the table: "mappings" */
  insert_mappings_one?: Maybe<Mappings>
  /** insert data into the table: "table_rows" */
  insert_table_rows?: Maybe<Table_Rows_Mutation_Response>
  /** insert a single row into the table: "table_rows" */
  insert_table_rows_one?: Maybe<Table_Rows>
  /** insert data into the table: "tokens" */
  insert_tokens?: Maybe<Tokens_Mutation_Response>
  /** insert a single row into the table: "tokens" */
  insert_tokens_one?: Maybe<Tokens>
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
  /** update data of the table: "api_users" */
  update_api_users?: Maybe<Api_Users_Mutation_Response>
  /** update single row of the table: "api_users" */
  update_api_users_by_pk?: Maybe<Api_Users>
  /** update data of the table: "balances" */
  update_balances?: Maybe<Balances_Mutation_Response>
  /** update single row of the table: "balances" */
  update_balances_by_pk?: Maybe<Balances>
  /** update data of the table: "chains" */
  update_chains?: Maybe<Chains_Mutation_Response>
  /** update single row of the table: "chains" */
  update_chains_by_pk?: Maybe<Chains>
  /** update data of the table: "mappings" */
  update_mappings?: Maybe<Mappings_Mutation_Response>
  /** update single row of the table: "mappings" */
  update_mappings_by_pk?: Maybe<Mappings>
  /** update data of the table: "table_rows" */
  update_table_rows?: Maybe<Table_Rows_Mutation_Response>
  /** update single row of the table: "table_rows" */
  update_table_rows_by_pk?: Maybe<Table_Rows>
  /** update data of the table: "tokens" */
  update_tokens?: Maybe<Tokens_Mutation_Response>
  /** update single row of the table: "tokens" */
  update_tokens_by_pk?: Maybe<Tokens>
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
export type Mutation_RootDelete_Api_UsersArgs = {
  where: Api_Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Api_Users_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_BalancesArgs = {
  where: Balances_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Balances_By_PkArgs = {
  account: Scalars['String']
  chain_id: Scalars['String']
  contract: Scalars['String']
  symbol: Scalars['String']
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
export type Mutation_RootDelete_MappingsArgs = {
  where: Mappings_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Mappings_By_PkArgs = {
  contract_name: Scalars['String']
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
export type Mutation_RootDelete_TokensArgs = {
  where: Tokens_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tokens_By_PkArgs = {
  chain_id: Scalars['String']
  contract: Scalars['String']
  symbol: Scalars['String']
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
export type Mutation_RootInsert_Api_UsersArgs = {
  objects: Array<Api_Users_Insert_Input>
  on_conflict?: Maybe<Api_Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Api_Users_OneArgs = {
  object: Api_Users_Insert_Input
  on_conflict?: Maybe<Api_Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_BalancesArgs = {
  objects: Array<Balances_Insert_Input>
  on_conflict?: Maybe<Balances_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Balances_OneArgs = {
  object: Balances_Insert_Input
  on_conflict?: Maybe<Balances_On_Conflict>
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
export type Mutation_RootInsert_MappingsArgs = {
  objects: Array<Mappings_Insert_Input>
  on_conflict?: Maybe<Mappings_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Mappings_OneArgs = {
  object: Mappings_Insert_Input
  on_conflict?: Maybe<Mappings_On_Conflict>
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
export type Mutation_RootInsert_TokensArgs = {
  objects: Array<Tokens_Insert_Input>
  on_conflict?: Maybe<Tokens_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tokens_OneArgs = {
  object: Tokens_Insert_Input
  on_conflict?: Maybe<Tokens_On_Conflict>
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
export type Mutation_RootUpdate_Api_UsersArgs = {
  _inc?: Maybe<Api_Users_Inc_Input>
  _set?: Maybe<Api_Users_Set_Input>
  where: Api_Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Api_Users_By_PkArgs = {
  _inc?: Maybe<Api_Users_Inc_Input>
  _set?: Maybe<Api_Users_Set_Input>
  pk_columns: Api_Users_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_BalancesArgs = {
  _set?: Maybe<Balances_Set_Input>
  where: Balances_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Balances_By_PkArgs = {
  _set?: Maybe<Balances_Set_Input>
  pk_columns: Balances_Pk_Columns_Input
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
export type Mutation_RootUpdate_MappingsArgs = {
  _append?: Maybe<Mappings_Append_Input>
  _delete_at_path?: Maybe<Mappings_Delete_At_Path_Input>
  _delete_elem?: Maybe<Mappings_Delete_Elem_Input>
  _delete_key?: Maybe<Mappings_Delete_Key_Input>
  _inc?: Maybe<Mappings_Inc_Input>
  _prepend?: Maybe<Mappings_Prepend_Input>
  _set?: Maybe<Mappings_Set_Input>
  where: Mappings_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Mappings_By_PkArgs = {
  _append?: Maybe<Mappings_Append_Input>
  _delete_at_path?: Maybe<Mappings_Delete_At_Path_Input>
  _delete_elem?: Maybe<Mappings_Delete_Elem_Input>
  _delete_key?: Maybe<Mappings_Delete_Key_Input>
  _inc?: Maybe<Mappings_Inc_Input>
  _prepend?: Maybe<Mappings_Prepend_Input>
  _set?: Maybe<Mappings_Set_Input>
  pk_columns: Mappings_Pk_Columns_Input
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
export type Mutation_RootUpdate_TokensArgs = {
  _inc?: Maybe<Tokens_Inc_Input>
  _set?: Maybe<Tokens_Set_Input>
  where: Tokens_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Tokens_By_PkArgs = {
  _inc?: Maybe<Tokens_Inc_Input>
  _set?: Maybe<Tokens_Set_Input>
  pk_columns: Tokens_Pk_Columns_Input
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
  /** fetch data from the table: "api_users" */
  api_users: Array<Api_Users>
  /** fetch aggregated fields from the table: "api_users" */
  api_users_aggregate: Api_Users_Aggregate
  /** fetch data from the table: "api_users" using primary key columns */
  api_users_by_pk?: Maybe<Api_Users>
  /** fetch data from the table: "balances" */
  balances: Array<Balances>
  /** fetch aggregated fields from the table: "balances" */
  balances_aggregate: Balances_Aggregate
  /** fetch data from the table: "balances" using primary key columns */
  balances_by_pk?: Maybe<Balances>
  /** fetch data from the table: "chains" */
  chains: Array<Chains>
  /** fetch aggregated fields from the table: "chains" */
  chains_aggregate: Chains_Aggregate
  /** fetch data from the table: "chains" using primary key columns */
  chains_by_pk?: Maybe<Chains>
  /** fetch data from the table: "mappings" */
  mappings: Array<Mappings>
  /** fetch aggregated fields from the table: "mappings" */
  mappings_aggregate: Mappings_Aggregate
  /** fetch data from the table: "mappings" using primary key columns */
  mappings_by_pk?: Maybe<Mappings>
  /** fetch data from the table: "table_rows" */
  table_rows: Array<Table_Rows>
  /** fetch aggregated fields from the table: "table_rows" */
  table_rows_aggregate: Table_Rows_Aggregate
  /** fetch data from the table: "table_rows" using primary key columns */
  table_rows_by_pk?: Maybe<Table_Rows>
  /** fetch data from the table: "tokens" */
  tokens: Array<Tokens>
  /** fetch aggregated fields from the table: "tokens" */
  tokens_aggregate: Tokens_Aggregate
  /** fetch data from the table: "tokens" using primary key columns */
  tokens_by_pk?: Maybe<Tokens>
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
export type Query_RootApi_UsersArgs = {
  distinct_on?: Maybe<Array<Api_Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Api_Users_Order_By>>
  where?: Maybe<Api_Users_Bool_Exp>
}

/** query root */
export type Query_RootApi_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Api_Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Api_Users_Order_By>>
  where?: Maybe<Api_Users_Bool_Exp>
}

/** query root */
export type Query_RootApi_Users_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootBalancesArgs = {
  distinct_on?: Maybe<Array<Balances_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Balances_Order_By>>
  where?: Maybe<Balances_Bool_Exp>
}

/** query root */
export type Query_RootBalances_AggregateArgs = {
  distinct_on?: Maybe<Array<Balances_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Balances_Order_By>>
  where?: Maybe<Balances_Bool_Exp>
}

/** query root */
export type Query_RootBalances_By_PkArgs = {
  account: Scalars['String']
  chain_id: Scalars['String']
  contract: Scalars['String']
  symbol: Scalars['String']
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
export type Query_RootMappingsArgs = {
  distinct_on?: Maybe<Array<Mappings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Mappings_Order_By>>
  where?: Maybe<Mappings_Bool_Exp>
}

/** query root */
export type Query_RootMappings_AggregateArgs = {
  distinct_on?: Maybe<Array<Mappings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Mappings_Order_By>>
  where?: Maybe<Mappings_Bool_Exp>
}

/** query root */
export type Query_RootMappings_By_PkArgs = {
  contract_name: Scalars['String']
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
export type Query_RootTokensArgs = {
  distinct_on?: Maybe<Array<Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tokens_Order_By>>
  where?: Maybe<Tokens_Bool_Exp>
}

/** query root */
export type Query_RootTokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tokens_Order_By>>
  where?: Maybe<Tokens_Bool_Exp>
}

/** query root */
export type Query_RootTokens_By_PkArgs = {
  chain_id: Scalars['String']
  contract: Scalars['String']
  symbol: Scalars['String']
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
  /** fetch data from the table: "api_users" */
  api_users: Array<Api_Users>
  /** fetch aggregated fields from the table: "api_users" */
  api_users_aggregate: Api_Users_Aggregate
  /** fetch data from the table: "api_users" using primary key columns */
  api_users_by_pk?: Maybe<Api_Users>
  /** fetch data from the table: "balances" */
  balances: Array<Balances>
  /** fetch aggregated fields from the table: "balances" */
  balances_aggregate: Balances_Aggregate
  /** fetch data from the table: "balances" using primary key columns */
  balances_by_pk?: Maybe<Balances>
  /** fetch data from the table: "chains" */
  chains: Array<Chains>
  /** fetch aggregated fields from the table: "chains" */
  chains_aggregate: Chains_Aggregate
  /** fetch data from the table: "chains" using primary key columns */
  chains_by_pk?: Maybe<Chains>
  /** fetch data from the table: "mappings" */
  mappings: Array<Mappings>
  /** fetch aggregated fields from the table: "mappings" */
  mappings_aggregate: Mappings_Aggregate
  /** fetch data from the table: "mappings" using primary key columns */
  mappings_by_pk?: Maybe<Mappings>
  /** fetch data from the table: "table_rows" */
  table_rows: Array<Table_Rows>
  /** fetch aggregated fields from the table: "table_rows" */
  table_rows_aggregate: Table_Rows_Aggregate
  /** fetch data from the table: "table_rows" using primary key columns */
  table_rows_by_pk?: Maybe<Table_Rows>
  /** fetch data from the table: "tokens" */
  tokens: Array<Tokens>
  /** fetch aggregated fields from the table: "tokens" */
  tokens_aggregate: Tokens_Aggregate
  /** fetch data from the table: "tokens" using primary key columns */
  tokens_by_pk?: Maybe<Tokens>
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
export type Subscription_RootApi_UsersArgs = {
  distinct_on?: Maybe<Array<Api_Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Api_Users_Order_By>>
  where?: Maybe<Api_Users_Bool_Exp>
}

/** subscription root */
export type Subscription_RootApi_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Api_Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Api_Users_Order_By>>
  where?: Maybe<Api_Users_Bool_Exp>
}

/** subscription root */
export type Subscription_RootApi_Users_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootBalancesArgs = {
  distinct_on?: Maybe<Array<Balances_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Balances_Order_By>>
  where?: Maybe<Balances_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBalances_AggregateArgs = {
  distinct_on?: Maybe<Array<Balances_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Balances_Order_By>>
  where?: Maybe<Balances_Bool_Exp>
}

/** subscription root */
export type Subscription_RootBalances_By_PkArgs = {
  account: Scalars['String']
  chain_id: Scalars['String']
  contract: Scalars['String']
  symbol: Scalars['String']
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
export type Subscription_RootMappingsArgs = {
  distinct_on?: Maybe<Array<Mappings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Mappings_Order_By>>
  where?: Maybe<Mappings_Bool_Exp>
}

/** subscription root */
export type Subscription_RootMappings_AggregateArgs = {
  distinct_on?: Maybe<Array<Mappings_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Mappings_Order_By>>
  where?: Maybe<Mappings_Bool_Exp>
}

/** subscription root */
export type Subscription_RootMappings_By_PkArgs = {
  contract_name: Scalars['String']
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
export type Subscription_RootTokensArgs = {
  distinct_on?: Maybe<Array<Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tokens_Order_By>>
  where?: Maybe<Tokens_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Tokens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tokens_Order_By>>
  where?: Maybe<Tokens_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTokens_By_PkArgs = {
  chain_id: Scalars['String']
  contract: Scalars['String']
  symbol: Scalars['String']
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
  updated_at: Scalars['timestamptz']
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
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
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
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Table_Rows_Max_Fields = {
  __typename?: 'table_rows_max_fields'
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  table?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "table_rows" */
export type Table_Rows_Max_Order_By = {
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  primary_key?: Maybe<Order_By>
  scope?: Maybe<Order_By>
  table?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Table_Rows_Min_Fields = {
  __typename?: 'table_rows_min_fields'
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  table?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "table_rows" */
export type Table_Rows_Min_Order_By = {
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  primary_key?: Maybe<Order_By>
  scope?: Maybe<Order_By>
  table?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
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
  updated_at?: Maybe<Order_By>
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
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "table_rows" */
export type Table_Rows_Set_Input = {
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['jsonb']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  table?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
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

/** columns and relationships of "tokens" */
export type Tokens = {
  __typename?: 'tokens'
  chain_id: Scalars['String']
  contract: Scalars['String']
  issuer: Scalars['String']
  max_supply?: Maybe<Scalars['String']>
  precision: Scalars['Int']
  supply: Scalars['String']
  symbol: Scalars['String']
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregated selection of "tokens" */
export type Tokens_Aggregate = {
  __typename?: 'tokens_aggregate'
  aggregate?: Maybe<Tokens_Aggregate_Fields>
  nodes: Array<Tokens>
}

/** aggregate fields of "tokens" */
export type Tokens_Aggregate_Fields = {
  __typename?: 'tokens_aggregate_fields'
  avg?: Maybe<Tokens_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Tokens_Max_Fields>
  min?: Maybe<Tokens_Min_Fields>
  stddev?: Maybe<Tokens_Stddev_Fields>
  stddev_pop?: Maybe<Tokens_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Tokens_Stddev_Samp_Fields>
  sum?: Maybe<Tokens_Sum_Fields>
  var_pop?: Maybe<Tokens_Var_Pop_Fields>
  var_samp?: Maybe<Tokens_Var_Samp_Fields>
  variance?: Maybe<Tokens_Variance_Fields>
}

/** aggregate fields of "tokens" */
export type Tokens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tokens_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tokens" */
export type Tokens_Aggregate_Order_By = {
  avg?: Maybe<Tokens_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Tokens_Max_Order_By>
  min?: Maybe<Tokens_Min_Order_By>
  stddev?: Maybe<Tokens_Stddev_Order_By>
  stddev_pop?: Maybe<Tokens_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Tokens_Stddev_Samp_Order_By>
  sum?: Maybe<Tokens_Sum_Order_By>
  var_pop?: Maybe<Tokens_Var_Pop_Order_By>
  var_samp?: Maybe<Tokens_Var_Samp_Order_By>
  variance?: Maybe<Tokens_Variance_Order_By>
}

/** input type for inserting array relation for remote table "tokens" */
export type Tokens_Arr_Rel_Insert_Input = {
  data: Array<Tokens_Insert_Input>
  on_conflict?: Maybe<Tokens_On_Conflict>
}

/** aggregate avg on columns */
export type Tokens_Avg_Fields = {
  __typename?: 'tokens_avg_fields'
  precision?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "tokens" */
export type Tokens_Avg_Order_By = {
  precision?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "tokens". All fields are combined with a logical 'AND'. */
export type Tokens_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tokens_Bool_Exp>>>
  _not?: Maybe<Tokens_Bool_Exp>
  _or?: Maybe<Array<Maybe<Tokens_Bool_Exp>>>
  chain_id?: Maybe<String_Comparison_Exp>
  contract?: Maybe<String_Comparison_Exp>
  issuer?: Maybe<String_Comparison_Exp>
  max_supply?: Maybe<String_Comparison_Exp>
  precision?: Maybe<Int_Comparison_Exp>
  supply?: Maybe<String_Comparison_Exp>
  symbol?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "tokens" */
export enum Tokens_Constraint {
  /** unique or primary key constraint */
  TokensPkey = 'tokens_pkey',
}

/** input type for incrementing integer column in table "tokens" */
export type Tokens_Inc_Input = {
  precision?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "tokens" */
export type Tokens_Insert_Input = {
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  issuer?: Maybe<Scalars['String']>
  max_supply?: Maybe<Scalars['String']>
  precision?: Maybe<Scalars['Int']>
  supply?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Tokens_Max_Fields = {
  __typename?: 'tokens_max_fields'
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  issuer?: Maybe<Scalars['String']>
  max_supply?: Maybe<Scalars['String']>
  precision?: Maybe<Scalars['Int']>
  supply?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "tokens" */
export type Tokens_Max_Order_By = {
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  issuer?: Maybe<Order_By>
  max_supply?: Maybe<Order_By>
  precision?: Maybe<Order_By>
  supply?: Maybe<Order_By>
  symbol?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Tokens_Min_Fields = {
  __typename?: 'tokens_min_fields'
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  issuer?: Maybe<Scalars['String']>
  max_supply?: Maybe<Scalars['String']>
  precision?: Maybe<Scalars['Int']>
  supply?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "tokens" */
export type Tokens_Min_Order_By = {
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  issuer?: Maybe<Order_By>
  max_supply?: Maybe<Order_By>
  precision?: Maybe<Order_By>
  supply?: Maybe<Order_By>
  symbol?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "tokens" */
export type Tokens_Mutation_Response = {
  __typename?: 'tokens_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Tokens>
}

/** input type for inserting object relation for remote table "tokens" */
export type Tokens_Obj_Rel_Insert_Input = {
  data: Tokens_Insert_Input
  on_conflict?: Maybe<Tokens_On_Conflict>
}

/** on conflict condition type for table "tokens" */
export type Tokens_On_Conflict = {
  constraint: Tokens_Constraint
  update_columns: Array<Tokens_Update_Column>
  where?: Maybe<Tokens_Bool_Exp>
}

/** ordering options when selecting data from "tokens" */
export type Tokens_Order_By = {
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  issuer?: Maybe<Order_By>
  max_supply?: Maybe<Order_By>
  precision?: Maybe<Order_By>
  supply?: Maybe<Order_By>
  symbol?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "tokens" */
export type Tokens_Pk_Columns_Input = {
  chain_id: Scalars['String']
  contract: Scalars['String']
  symbol: Scalars['String']
}

/** select columns of table "tokens" */
export enum Tokens_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Contract = 'contract',
  /** column name */
  Issuer = 'issuer',
  /** column name */
  MaxSupply = 'max_supply',
  /** column name */
  Precision = 'precision',
  /** column name */
  Supply = 'supply',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "tokens" */
export type Tokens_Set_Input = {
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  issuer?: Maybe<Scalars['String']>
  max_supply?: Maybe<Scalars['String']>
  precision?: Maybe<Scalars['Int']>
  supply?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Tokens_Stddev_Fields = {
  __typename?: 'tokens_stddev_fields'
  precision?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "tokens" */
export type Tokens_Stddev_Order_By = {
  precision?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Tokens_Stddev_Pop_Fields = {
  __typename?: 'tokens_stddev_pop_fields'
  precision?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "tokens" */
export type Tokens_Stddev_Pop_Order_By = {
  precision?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Tokens_Stddev_Samp_Fields = {
  __typename?: 'tokens_stddev_samp_fields'
  precision?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "tokens" */
export type Tokens_Stddev_Samp_Order_By = {
  precision?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Tokens_Sum_Fields = {
  __typename?: 'tokens_sum_fields'
  precision?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "tokens" */
export type Tokens_Sum_Order_By = {
  precision?: Maybe<Order_By>
}

/** update columns of table "tokens" */
export enum Tokens_Update_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Contract = 'contract',
  /** column name */
  Issuer = 'issuer',
  /** column name */
  MaxSupply = 'max_supply',
  /** column name */
  Precision = 'precision',
  /** column name */
  Supply = 'supply',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Tokens_Var_Pop_Fields = {
  __typename?: 'tokens_var_pop_fields'
  precision?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "tokens" */
export type Tokens_Var_Pop_Order_By = {
  precision?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Tokens_Var_Samp_Fields = {
  __typename?: 'tokens_var_samp_fields'
  precision?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "tokens" */
export type Tokens_Var_Samp_Order_By = {
  precision?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Tokens_Variance_Fields = {
  __typename?: 'tokens_variance_fields'
  precision?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "tokens" */
export type Tokens_Variance_Order_By = {
  precision?: Maybe<Order_By>
}

/** columns and relationships of "transactions" */
export type Transactions = {
  __typename?: 'transactions'
  block_id: Scalars['String']
  block_num: Scalars['numeric']
  chain_id: Scalars['String']
  created_at: Scalars['timestamptz']
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
  created_at?: Maybe<Timestamptz_Comparison_Exp>
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
  created_at?: Maybe<Scalars['timestamptz']>
  data?: Maybe<Scalars['jsonb']>
  transaction_id?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'transactions_max_fields'
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  chain_id?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  transaction_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  block_id?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'transactions_min_fields'
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  chain_id?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  transaction_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  block_id?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
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
  created_at?: Maybe<Order_By>
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
  CreatedAt = 'created_at',
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
  created_at?: Maybe<Scalars['timestamptz']>
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
  CreatedAt = 'created_at',
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

export type Insert_Table_RowsMutationVariables = Exact<{
  objects?: Array<Table_Rows_Insert_Input> | Table_Rows_Insert_Input
}>

export type Insert_Table_RowsMutation = {
  __typename?: 'mutation_root'
  insert_table_rows?: Maybe<{
    __typename?: 'table_rows_mutation_response'
    affected_rows: number
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
  objects: Array<Transactions_Insert_Input> | Transactions_Insert_Input
}>

export type Insert_TransactionMutation = {
  __typename?: 'mutation_root'
  insert_transactions?: Maybe<{
    __typename?: 'transactions_mutation_response'
    affected_rows: number
  }>
}

export type Insert_ActionsMutationVariables = Exact<{
  objects: Array<Actions_Insert_Input> | Actions_Insert_Input
}>

export type Insert_ActionsMutation = {
  __typename?: 'mutation_root'
  insert_actions?: Maybe<{
    __typename?: 'actions_mutation_response'
    affected_rows: number
  }>
}

export type Upsert_TokenMutationVariables = Exact<{
  object?: Tokens_Insert_Input
}>

export type Upsert_TokenMutation = {
  __typename?: 'mutation_root'
  insert_tokens_one?: Maybe<{
    __typename?: 'tokens'
    updated_at?: Maybe<any>
    symbol: string
  }>
}

export type Upsert_BalancesMutationVariables = Exact<{
  objects?: Array<Balances_Insert_Input> | Balances_Insert_Input
}>

export type Upsert_BalancesMutation = {
  __typename?: 'mutation_root'
  insert_balances?: Maybe<{
    __typename?: 'balances_mutation_response'
    affected_rows: number
  }>
}

export type Upsert_BalanceMutationVariables = Exact<{
  object?: Balances_Insert_Input
}>

export type Upsert_BalanceMutation = {
  __typename?: 'mutation_root'
  insert_balances_one?: Maybe<{
    __typename?: 'balances'
    updated_at?: Maybe<any>
  }>
}

export type Get_Api_User_By_KeyQueryVariables = Exact<{
  api_key?: Maybe<Scalars['String']>
}>

export type Get_Api_User_By_KeyQuery = {
  __typename?: 'query_root'
  api_users: Array<{
    __typename?: 'api_users'
    id: number
    account: string
    api_key: string
    domain_names?: Maybe<string>
  }>
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
      object: {
        chain_id: $chain_id
        contract: $contract
        table: $table
        scope: $scope
        primary_key: $primary_key
        data: $data
      }
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
export const Insert_Table_RowsDocument = gql`
  mutation insert_table_rows($objects: [table_rows_insert_input!]! = {}) {
    insert_table_rows(objects: $objects) {
      affected_rows
    }
  }
`
export const Update_Block_HeightDocument = gql`
  mutation update_block_height(
    $chain_id: String!
    $block_num: numeric!
    $block_id: String!
  ) {
    update_chains_by_pk(
      pk_columns: { chain_id: $chain_id }
      _set: { block_id: $block_id, block_num: $block_num }
    ) {
      block_id
      block_num
      chain_id
      name
      rpc_endpoint
    }
  }
`
export const Delete_Table_RowDocument = gql`
  mutation delete_table_row(
    $chain_id: String!
    $contract: String!
    $primary_key: String!
    $scope: String!
    $table: String!
  ) {
    delete_table_rows_by_pk(
      chain_id: $chain_id
      contract: $contract
      primary_key: $primary_key
      scope: $scope
      table: $table
    ) {
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
export const Upsert_TokenDocument = gql`
  mutation upsert_token($object: tokens_insert_input! = {}) {
    insert_tokens_one(
      object: $object
      on_conflict: {
        constraint: tokens_pkey
        update_columns: [max_supply, supply, issuer, precision, updated_at]
      }
    ) {
      updated_at
      symbol
    }
  }
`
export const Upsert_BalancesDocument = gql`
  mutation upsert_balances($objects: [balances_insert_input!]! = {}) {
    insert_balances(
      objects: $objects
      on_conflict: {
        constraint: balances_pkey
        update_columns: [balance, updated_at]
      }
    ) {
      affected_rows
    }
  }
`
export const Upsert_BalanceDocument = gql`
  mutation upsert_balance($object: balances_insert_input! = {}) {
    insert_balances_one(
      object: $object
      on_conflict: {
        constraint: balances_pkey
        update_columns: [balance, updated_at]
      }
    ) {
      updated_at
    }
  }
`
export const Get_Api_User_By_KeyDocument = gql`
  query get_api_user_by_key($api_key: String) {
    api_users(where: { api_key: { _eq: $api_key } }) {
      id
      account
      api_key
      domain_names
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action()
const Upsert_Table_RowDocumentString = print(Upsert_Table_RowDocument)
const Insert_Table_RowsDocumentString = print(Insert_Table_RowsDocument)
const Update_Block_HeightDocumentString = print(Update_Block_HeightDocument)
const Delete_Table_RowDocumentString = print(Delete_Table_RowDocument)
const Insert_TransactionDocumentString = print(Insert_TransactionDocument)
const Insert_ActionsDocumentString = print(Insert_ActionsDocument)
const Upsert_TokenDocumentString = print(Upsert_TokenDocument)
const Upsert_BalancesDocumentString = print(Upsert_BalancesDocument)
const Upsert_BalanceDocumentString = print(Upsert_BalanceDocument)
const Get_Api_User_By_KeyDocumentString = print(Get_Api_User_By_KeyDocument)
export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    upsert_table_row(
      variables: Upsert_Table_RowMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
        data?: Upsert_Table_RowMutation | undefined
        extensions?: any
        headers: Dom.Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<Upsert_Table_RowMutation>(
            Upsert_Table_RowDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'upsert_table_row',
      )
    },
    insert_table_rows(
      variables?: Insert_Table_RowsMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
        data?: Insert_Table_RowsMutation | undefined
        extensions?: any
        headers: Dom.Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<Insert_Table_RowsMutation>(
            Insert_Table_RowsDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'insert_table_rows',
      )
    },
    update_block_height(
      variables: Update_Block_HeightMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
        data?: Update_Block_HeightMutation | undefined
        extensions?: any
        headers: Dom.Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<Update_Block_HeightMutation>(
            Update_Block_HeightDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'update_block_height',
      )
    },
    delete_table_row(
      variables: Delete_Table_RowMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
        data?: Delete_Table_RowMutation | undefined
        extensions?: any
        headers: Dom.Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<Delete_Table_RowMutation>(
            Delete_Table_RowDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'delete_table_row',
      )
    },
    insert_transaction(
      variables: Insert_TransactionMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
        data?: Insert_TransactionMutation | undefined
        extensions?: any
        headers: Dom.Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<Insert_TransactionMutation>(
            Insert_TransactionDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'insert_transaction',
      )
    },
    insert_actions(
      variables: Insert_ActionsMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
        data?: Insert_ActionsMutation | undefined
        extensions?: any
        headers: Dom.Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<Insert_ActionsMutation>(
            Insert_ActionsDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'insert_actions',
      )
    },
    upsert_token(
      variables?: Upsert_TokenMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
        data?: Upsert_TokenMutation | undefined
        extensions?: any
        headers: Dom.Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<Upsert_TokenMutation>(
            Upsert_TokenDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'upsert_token',
      )
    },
    upsert_balances(
      variables?: Upsert_BalancesMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
        data?: Upsert_BalancesMutation | undefined
        extensions?: any
        headers: Dom.Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<Upsert_BalancesMutation>(
            Upsert_BalancesDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'upsert_balances',
      )
    },
    upsert_balance(
      variables?: Upsert_BalanceMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
        data?: Upsert_BalanceMutation | undefined
        extensions?: any
        headers: Dom.Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<Upsert_BalanceMutation>(
            Upsert_BalanceDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'upsert_balance',
      )
    },
    get_api_user_by_key(
      variables?: Get_Api_User_By_KeyQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
        data?: Get_Api_User_By_KeyQuery | undefined
        extensions?: any
        headers: Dom.Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<Get_Api_User_By_KeyQuery>(
            Get_Api_User_By_KeyDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'get_api_user_by_key',
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
