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
  numeric: any
  timetz: any
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

/** columns and relationships of "actions" */
export type Actions = {
  __typename?: 'actions'
  action_name: Scalars['String']
  authorization: Scalars['jsonb']
  block_id: Scalars['String']
  block_num: Scalars['Int']
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
  avg?: Maybe<Actions_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Actions_Max_Fields>
  min?: Maybe<Actions_Min_Fields>
  stddev?: Maybe<Actions_Stddev_Fields>
  stddev_pop?: Maybe<Actions_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Actions_Stddev_Samp_Fields>
  sum?: Maybe<Actions_Sum_Fields>
  var_pop?: Maybe<Actions_Var_Pop_Fields>
  var_samp?: Maybe<Actions_Var_Samp_Fields>
  variance?: Maybe<Actions_Variance_Fields>
}

/** aggregate fields of "actions" */
export type Actions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Actions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "actions" */
export type Actions_Aggregate_Order_By = {
  avg?: Maybe<Actions_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Actions_Max_Order_By>
  min?: Maybe<Actions_Min_Order_By>
  stddev?: Maybe<Actions_Stddev_Order_By>
  stddev_pop?: Maybe<Actions_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Actions_Stddev_Samp_Order_By>
  sum?: Maybe<Actions_Sum_Order_By>
  var_pop?: Maybe<Actions_Var_Pop_Order_By>
  var_samp?: Maybe<Actions_Var_Samp_Order_By>
  variance?: Maybe<Actions_Variance_Order_By>
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

/** aggregate avg on columns */
export type Actions_Avg_Fields = {
  __typename?: 'actions_avg_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "actions" */
export type Actions_Avg_Order_By = {
  block_num?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "actions". All fields are combined with a logical 'AND'. */
export type Actions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Actions_Bool_Exp>>>
  _not?: Maybe<Actions_Bool_Exp>
  _or?: Maybe<Array<Maybe<Actions_Bool_Exp>>>
  action_name?: Maybe<String_Comparison_Exp>
  authorization?: Maybe<Jsonb_Comparison_Exp>
  block_id?: Maybe<String_Comparison_Exp>
  block_num?: Maybe<Int_Comparison_Exp>
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

/** input type for incrementing integer column in table "actions" */
export type Actions_Inc_Input = {
  block_num?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "actions" */
export type Actions_Insert_Input = {
  action_name?: Maybe<Scalars['String']>
  authorization?: Maybe<Scalars['jsonb']>
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['Int']>
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
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['Int']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  global_sequence?: Maybe<Scalars['String']>
  transaction_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "actions" */
export type Actions_Max_Order_By = {
  action_name?: Maybe<Order_By>
  block_id?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  global_sequence?: Maybe<Order_By>
  transaction_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Actions_Min_Fields = {
  __typename?: 'actions_min_fields'
  action_name?: Maybe<Scalars['String']>
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['Int']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  global_sequence?: Maybe<Scalars['String']>
  transaction_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "actions" */
export type Actions_Min_Order_By = {
  action_name?: Maybe<Order_By>
  block_id?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
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
  block_id?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
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
  BlockId = 'block_id',
  /** column name */
  BlockNum = 'block_num',
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
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['Int']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['jsonb']>
  global_sequence?: Maybe<Scalars['String']>
  transaction_id?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Actions_Stddev_Fields = {
  __typename?: 'actions_stddev_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "actions" */
export type Actions_Stddev_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Actions_Stddev_Pop_Fields = {
  __typename?: 'actions_stddev_pop_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "actions" */
export type Actions_Stddev_Pop_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Actions_Stddev_Samp_Fields = {
  __typename?: 'actions_stddev_samp_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "actions" */
export type Actions_Stddev_Samp_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Actions_Sum_Fields = {
  __typename?: 'actions_sum_fields'
  block_num?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "actions" */
export type Actions_Sum_Order_By = {
  block_num?: Maybe<Order_By>
}

/** update columns of table "actions" */
export enum Actions_Update_Column {
  /** column name */
  ActionName = 'action_name',
  /** column name */
  Authorization = 'authorization',
  /** column name */
  BlockId = 'block_id',
  /** column name */
  BlockNum = 'block_num',
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

/** aggregate var_pop on columns */
export type Actions_Var_Pop_Fields = {
  __typename?: 'actions_var_pop_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "actions" */
export type Actions_Var_Pop_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Actions_Var_Samp_Fields = {
  __typename?: 'actions_var_samp_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "actions" */
export type Actions_Var_Samp_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Actions_Variance_Fields = {
  __typename?: 'actions_variance_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "actions" */
export type Actions_Variance_Order_By = {
  block_num?: Maybe<Order_By>
}

/** columns and relationships of "chains" */
export type Chains = {
  __typename?: 'chains'
  chain_id: Scalars['String']
  name: Scalars['String']
  rpc_endpoint: Scalars['String']
  type: Scalars['String']
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
  type?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "chains" */
export enum Chains_Constraint {
  /** unique or primary key constraint */
  ChainsPkey = 'chains_pkey',
}

/** input type for inserting data into table "chains" */
export type Chains_Insert_Input = {
  chain_id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  rpc_endpoint?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Chains_Max_Fields = {
  __typename?: 'chains_max_fields'
  chain_id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  rpc_endpoint?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "chains" */
export type Chains_Max_Order_By = {
  chain_id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  rpc_endpoint?: Maybe<Order_By>
  type?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Chains_Min_Fields = {
  __typename?: 'chains_min_fields'
  chain_id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  rpc_endpoint?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "chains" */
export type Chains_Min_Order_By = {
  chain_id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  rpc_endpoint?: Maybe<Order_By>
  type?: Maybe<Order_By>
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
  type?: Maybe<Order_By>
}

/** primary key columns input for table: "chains" */
export type Chains_Pk_Columns_Input = {
  chain_id: Scalars['String']
}

/** select columns of table "chains" */
export enum Chains_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Name = 'name',
  /** column name */
  RpcEndpoint = 'rpc_endpoint',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "chains" */
export type Chains_Set_Input = {
  chain_id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  rpc_endpoint?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** update columns of table "chains" */
export enum Chains_Update_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Name = 'name',
  /** column name */
  RpcEndpoint = 'rpc_endpoint',
  /** column name */
  Type = 'type',
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
  /** delete data from the table: "actions" */
  delete_actions?: Maybe<Actions_Mutation_Response>
  /** delete single row from the table: "actions" */
  delete_actions_by_pk?: Maybe<Actions>
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
  /** insert data into the table: "actions" */
  insert_actions?: Maybe<Actions_Mutation_Response>
  /** insert a single row into the table: "actions" */
  insert_actions_one?: Maybe<Actions>
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
  /** update data of the table: "actions" */
  update_actions?: Maybe<Actions_Mutation_Response>
  /** update single row of the table: "actions" */
  update_actions_by_pk?: Maybe<Actions>
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
export type Mutation_RootDelete_TablesArgs = {
  where: Tables_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tables_By_PkArgs = {
  block_id: Scalars['String']
  chain_id: Scalars['String']
  contract: Scalars['String']
  data: Scalars['jsonb']
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
export type Mutation_RootUpdate_ActionsArgs = {
  _append?: Maybe<Actions_Append_Input>
  _delete_at_path?: Maybe<Actions_Delete_At_Path_Input>
  _delete_elem?: Maybe<Actions_Delete_Elem_Input>
  _delete_key?: Maybe<Actions_Delete_Key_Input>
  _inc?: Maybe<Actions_Inc_Input>
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
  _inc?: Maybe<Actions_Inc_Input>
  _prepend?: Maybe<Actions_Prepend_Input>
  _set?: Maybe<Actions_Set_Input>
  pk_columns: Actions_Pk_Columns_Input
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
  _inc?: Maybe<Tables_Inc_Input>
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
  _inc?: Maybe<Tables_Inc_Input>
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
  block_id: Scalars['String']
  chain_id: Scalars['String']
  contract: Scalars['String']
  data: Scalars['jsonb']
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
  block_id: Scalars['String']
  chain_id: Scalars['String']
  contract: Scalars['String']
  data: Scalars['jsonb']
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

/** columns and relationships of "tables" */
export type Tables = {
  __typename?: 'tables'
  block_id: Scalars['String']
  block_num: Scalars['numeric']
  chain_id: Scalars['String']
  contract: Scalars['String']
  created_at: Scalars['timetz']
  data: Scalars['jsonb']
  primary_key: Scalars['String']
  scope: Scalars['String']
  table: Scalars['String']
  updated_at: Scalars['timetz']
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
  avg?: Maybe<Tables_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Tables_Max_Fields>
  min?: Maybe<Tables_Min_Fields>
  stddev?: Maybe<Tables_Stddev_Fields>
  stddev_pop?: Maybe<Tables_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Tables_Stddev_Samp_Fields>
  sum?: Maybe<Tables_Sum_Fields>
  var_pop?: Maybe<Tables_Var_Pop_Fields>
  var_samp?: Maybe<Tables_Var_Samp_Fields>
  variance?: Maybe<Tables_Variance_Fields>
}

/** aggregate fields of "tables" */
export type Tables_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tables_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tables" */
export type Tables_Aggregate_Order_By = {
  avg?: Maybe<Tables_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Tables_Max_Order_By>
  min?: Maybe<Tables_Min_Order_By>
  stddev?: Maybe<Tables_Stddev_Order_By>
  stddev_pop?: Maybe<Tables_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Tables_Stddev_Samp_Order_By>
  sum?: Maybe<Tables_Sum_Order_By>
  var_pop?: Maybe<Tables_Var_Pop_Order_By>
  var_samp?: Maybe<Tables_Var_Samp_Order_By>
  variance?: Maybe<Tables_Variance_Order_By>
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

/** aggregate avg on columns */
export type Tables_Avg_Fields = {
  __typename?: 'tables_avg_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "tables" */
export type Tables_Avg_Order_By = {
  block_num?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "tables". All fields are combined with a logical 'AND'. */
export type Tables_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tables_Bool_Exp>>>
  _not?: Maybe<Tables_Bool_Exp>
  _or?: Maybe<Array<Maybe<Tables_Bool_Exp>>>
  block_id?: Maybe<String_Comparison_Exp>
  block_num?: Maybe<Numeric_Comparison_Exp>
  chain_id?: Maybe<String_Comparison_Exp>
  contract?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timetz_Comparison_Exp>
  data?: Maybe<Jsonb_Comparison_Exp>
  primary_key?: Maybe<String_Comparison_Exp>
  scope?: Maybe<String_Comparison_Exp>
  table?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timetz_Comparison_Exp>
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

/** input type for incrementing integer column in table "tables" */
export type Tables_Inc_Input = {
  block_num?: Maybe<Scalars['numeric']>
}

/** input type for inserting data into table "tables" */
export type Tables_Insert_Input = {
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timetz']>
  data?: Maybe<Scalars['jsonb']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  table?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timetz']>
}

/** aggregate max on columns */
export type Tables_Max_Fields = {
  __typename?: 'tables_max_fields'
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timetz']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  table?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timetz']>
}

/** order by max() on columns of table "tables" */
export type Tables_Max_Order_By = {
  block_id?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  primary_key?: Maybe<Order_By>
  scope?: Maybe<Order_By>
  table?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Tables_Min_Fields = {
  __typename?: 'tables_min_fields'
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timetz']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  table?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timetz']>
}

/** order by min() on columns of table "tables" */
export type Tables_Min_Order_By = {
  block_id?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  primary_key?: Maybe<Order_By>
  scope?: Maybe<Order_By>
  table?: Maybe<Order_By>
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
  block_id?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
  chain_id?: Maybe<Order_By>
  contract?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  data?: Maybe<Order_By>
  primary_key?: Maybe<Order_By>
  scope?: Maybe<Order_By>
  table?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "tables" */
export type Tables_Pk_Columns_Input = {
  block_id: Scalars['String']
  chain_id: Scalars['String']
  contract: Scalars['String']
  data: Scalars['jsonb']
  scope: Scalars['String']
  table: Scalars['String']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Tables_Prepend_Input = {
  data?: Maybe<Scalars['jsonb']>
}

/** select columns of table "tables" */
export enum Tables_Select_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  BlockNum = 'block_num',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Contract = 'contract',
  /** column name */
  CreatedAt = 'created_at',
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

/** input type for updating data in table "tables" */
export type Tables_Set_Input = {
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timetz']>
  data?: Maybe<Scalars['jsonb']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  table?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timetz']>
}

/** aggregate stddev on columns */
export type Tables_Stddev_Fields = {
  __typename?: 'tables_stddev_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "tables" */
export type Tables_Stddev_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Tables_Stddev_Pop_Fields = {
  __typename?: 'tables_stddev_pop_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "tables" */
export type Tables_Stddev_Pop_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Tables_Stddev_Samp_Fields = {
  __typename?: 'tables_stddev_samp_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "tables" */
export type Tables_Stddev_Samp_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Tables_Sum_Fields = {
  __typename?: 'tables_sum_fields'
  block_num?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "tables" */
export type Tables_Sum_Order_By = {
  block_num?: Maybe<Order_By>
}

/** update columns of table "tables" */
export enum Tables_Update_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  BlockNum = 'block_num',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Contract = 'contract',
  /** column name */
  CreatedAt = 'created_at',
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

/** aggregate var_pop on columns */
export type Tables_Var_Pop_Fields = {
  __typename?: 'tables_var_pop_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "tables" */
export type Tables_Var_Pop_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Tables_Var_Samp_Fields = {
  __typename?: 'tables_var_samp_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "tables" */
export type Tables_Var_Samp_Order_By = {
  block_num?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Tables_Variance_Fields = {
  __typename?: 'tables_variance_fields'
  block_num?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "tables" */
export type Tables_Variance_Order_By = {
  block_num?: Maybe<Order_By>
}

/** expression to compare columns of type timetz. All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timetz']>
  _gt?: Maybe<Scalars['timetz']>
  _gte?: Maybe<Scalars['timetz']>
  _in?: Maybe<Array<Scalars['timetz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timetz']>
  _lte?: Maybe<Scalars['timetz']>
  _neq?: Maybe<Scalars['timetz']>
  _nin?: Maybe<Array<Scalars['timetz']>>
}

/** columns and relationships of "transactions" */
export type Transactions = {
  __typename?: 'transactions'
  block_id: Scalars['String']
  block_num: Scalars['String']
  chain_id: Scalars['String']
  data: Scalars['jsonb']
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
  block_id?: Maybe<String_Comparison_Exp>
  block_num?: Maybe<String_Comparison_Exp>
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

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['String']>
  chain_id?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['jsonb']>
  transaction_id?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'transactions_max_fields'
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['String']>
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
  block_num?: Maybe<Scalars['String']>
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
  block_num?: Maybe<Scalars['String']>
  chain_id?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['jsonb']>
  transaction_id?: Maybe<Scalars['String']>
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

export type Upsert_Table_RowMutationVariables = Exact<{
  chain_id?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timetz']>
  data?: Maybe<Scalars['jsonb']>
  primary_key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  block_id?: Maybe<Scalars['String']>
  block_num?: Maybe<Scalars['numeric']>
  table?: Maybe<Scalars['String']>
}>

export type Upsert_Table_RowMutation = {
  __typename?: 'mutation_root'
  insert_tables_one?: Maybe<{
    __typename?: 'tables'
    updated_at: any
    scope: string
    primary_key: string
    data: any
    created_at: any
    table: string
    contract: string
    chain_id: string
    block_num: any
    block_id: string
  }>
}

export const Upsert_Table_RowDocument = gql`
  mutation upsert_table_row(
    $chain_id: String = ""
    $contract: String = ""
    $created_at: timetz = ""
    $data: jsonb = ""
    $primary_key: String = ""
    $scope: String = ""
    $block_id: String = ""
    $block_num: numeric = ""
    $table: String = ""
  ) {
    insert_tables_one(
      object: {
        updated_at: ""
        scope: $scope
        primary_key: $primary_key
        data: $data
        created_at: $created_at
        contract: $contract
        chain_id: $chain_id
        block_id: $block_id
        block_num: $block_num
        table: $table
      }
      on_conflict: { constraint: tables_pkey, update_columns: data }
    ) {
      updated_at
      scope
      primary_key
      data
      created_at
      table
      contract
      chain_id
      block_num
      block_id
    }
  }
`

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction()
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    upsert_table_row(
      variables?: Upsert_Table_RowMutationVariables,
    ): Promise<{
        data?: Upsert_Table_RowMutation | undefined
        extensions?: any
        headers: Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(() => client.rawRequest<Upsert_Table_RowMutation>(print(Upsert_Table_RowDocument), variables))
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
