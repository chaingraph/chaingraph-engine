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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
  float8: any
  jsonb: any
  timestamptz: any
}

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
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

export type MakeP2POfferInput = {
  amount: Scalars['float8']
  buyer?: Maybe<Scalars['String']>
  method: Scalars['String']
  seller?: Maybe<Scalars['String']>
  seller_deposited_escrow?: Maybe<Scalars['Boolean']>
  type: Scalars['String']
}

export type MakeP2POfferOutput = {
  __typename?: 'MakeP2POfferOutput'
  amount: Scalars['float8']
  buyer?: Maybe<Scalars['String']>
  buyer_confirmed_payment: Scalars['Boolean']
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  method: Scalars['String']
  seller?: Maybe<Scalars['String']>
  seller_confirmed_payment: Scalars['Boolean']
  seller_deposited_escrow: Scalars['Boolean']
  type: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  make_p2p_offer?: Maybe<Make_P2p_Offer_Output>
}

export type MutationMake_P2p_OfferArgs = {
  offer?: Maybe<Make_P2p_Offer_Input>
}

export type Query = {
  __typename?: 'Query'
  check_apollo: Scalars['Boolean']
}

export type SampleInput = {
  password: Scalars['String']
  username: Scalars['String']
}

export type SampleOutput = {
  __typename?: 'SampleOutput'
  accessToken: Scalars['String']
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
  account: Scalars['String']
  authorization: Scalars['jsonb']
  block_num: Scalars['Int']
  created_at: Scalars['timestamptz']
  data: Scalars['jsonb']
  hex_data: Scalars['String']
  id: Scalars['Int']
  name: Scalars['String']
  trx_id: Scalars['String']
}

/** columns and relationships of "actions" */
export type ActionsAuthorizationArgs = {
  path?: Maybe<Scalars['String']>
}

/** columns and relationships of "actions" */
export type ActionsDataArgs = {
  path?: Maybe<Scalars['String']>
}

/** input type for inserting array relation for remote table "actions" */
export type Actions_Arr_Rel_Insert_Input = {
  data: Array<Actions_Insert_Input>
}

/** Boolean expression to filter rows from the table "actions". All fields are combined with a logical 'AND'. */
export type Actions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Actions_Bool_Exp>>>
  _not?: Maybe<Actions_Bool_Exp>
  _or?: Maybe<Array<Maybe<Actions_Bool_Exp>>>
  account?: Maybe<String_Comparison_Exp>
  authorization?: Maybe<Jsonb_Comparison_Exp>
  block_num?: Maybe<Int_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  data?: Maybe<Jsonb_Comparison_Exp>
  hex_data?: Maybe<String_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  trx_id?: Maybe<String_Comparison_Exp>
}

/** input type for inserting data into table "actions" */
export type Actions_Insert_Input = {
  account?: Maybe<Scalars['String']>
  authorization?: Maybe<Scalars['jsonb']>
  block_num?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['timestamptz']>
  data?: Maybe<Scalars['jsonb']>
  hex_data?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  trx_id?: Maybe<Scalars['String']>
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
}

/** ordering options when selecting data from "actions" */
export type Actions_Order_By = {
  account?: Maybe<Order_By>
  authorization?: Maybe<Order_By>
  block_num?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  data?: Maybe<Order_By>
  hex_data?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  trx_id?: Maybe<Order_By>
}

/** primary key columns input for table: "actions" */
export type Actions_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "actions" */
export enum Actions_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Authorization = 'authorization',
  /** column name */
  BlockNum = 'block_num',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  HexData = 'hex_data',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TrxId = 'trx_id',
}

/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>
  _gt?: Maybe<Scalars['float8']>
  _gte?: Maybe<Scalars['float8']>
  _in?: Maybe<Array<Scalars['float8']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['float8']>
  _lte?: Maybe<Scalars['float8']>
  _neq?: Maybe<Scalars['float8']>
  _nin?: Maybe<Array<Scalars['float8']>>
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

export type Make_P2p_Offer_Input = {
  amount: Scalars['Float']
  buyer?: Maybe<Scalars['String']>
  method: Scalars['String']
  seller?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type Make_P2p_Offer_Output = {
  __typename?: 'make_p2p_offer_output'
  amount: Scalars['Float']
  buyer?: Maybe<Scalars['String']>
  buyer_confirmed_payment: Scalars['Boolean']
  created_at: Scalars['String']
  id: Scalars['Int']
  method: Scalars['String']
  seller?: Maybe<Scalars['String']>
  seller_confirmed_payment: Scalars['Boolean']
  seller_deposited_escrow: Scalars['Boolean']
  type: Scalars['String']
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "table_rows" */
  delete_table_rows?: Maybe<Table_Rows_Mutation_Response>
  /** delete single row from the table: "table_rows" */
  delete_table_rows_by_pk?: Maybe<Table_Rows>
  /** insert data into the table: "actions" */
  insert_actions?: Maybe<Actions_Mutation_Response>
  /** insert a single row into the table: "actions" */
  insert_actions_one?: Maybe<Actions>
  /** insert data into the table: "p2p_offers" */
  insert_p2p_offers?: Maybe<P2p_Offers_Mutation_Response>
  /** insert a single row into the table: "p2p_offers" */
  insert_p2p_offers_one?: Maybe<P2p_Offers>
  /** insert data into the table: "preferences" */
  insert_preferences?: Maybe<Preferences_Mutation_Response>
  /** insert a single row into the table: "preferences" */
  insert_preferences_one?: Maybe<Preferences>
  /** insert data into the table: "table_rows" */
  insert_table_rows?: Maybe<Table_Rows_Mutation_Response>
  /** insert a single row into the table: "table_rows" */
  insert_table_rows_one?: Maybe<Table_Rows>
  make_p2p_offer?: Maybe<Make_P2p_Offer_Output>
  /** update data of the table: "p2p_offers" */
  update_p2p_offers?: Maybe<P2p_Offers_Mutation_Response>
  /** update single row of the table: "p2p_offers" */
  update_p2p_offers_by_pk?: Maybe<P2p_Offers>
  /** update data of the table: "preferences" */
  update_preferences?: Maybe<Preferences_Mutation_Response>
  /** update single row of the table: "preferences" */
  update_preferences_by_pk?: Maybe<Preferences>
  /** update data of the table: "table_rows" */
  update_table_rows?: Maybe<Table_Rows_Mutation_Response>
  /** update single row of the table: "table_rows" */
  update_table_rows_by_pk?: Maybe<Table_Rows>
}

/** mutation root */
export type Mutation_RootDelete_Table_RowsArgs = {
  where: Table_Rows_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Table_Rows_By_PkArgs = {
  code: Scalars['String']
  key: Scalars['String']
  scope: Scalars['String']
  table: Scalars['String']
}

/** mutation root */
export type Mutation_RootInsert_ActionsArgs = {
  objects: Array<Actions_Insert_Input>
}

/** mutation root */
export type Mutation_RootInsert_Actions_OneArgs = {
  object: Actions_Insert_Input
}

/** mutation root */
export type Mutation_RootInsert_P2p_OffersArgs = {
  objects: Array<P2p_Offers_Insert_Input>
  on_conflict?: Maybe<P2p_Offers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_P2p_Offers_OneArgs = {
  object: P2p_Offers_Insert_Input
  on_conflict?: Maybe<P2p_Offers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PreferencesArgs = {
  objects: Array<Preferences_Insert_Input>
  on_conflict?: Maybe<Preferences_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Preferences_OneArgs = {
  object: Preferences_Insert_Input
  on_conflict?: Maybe<Preferences_On_Conflict>
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
export type Mutation_RootMake_P2p_OfferArgs = {
  offer?: Maybe<Make_P2p_Offer_Input>
}

/** mutation root */
export type Mutation_RootUpdate_P2p_OffersArgs = {
  _set?: Maybe<P2p_Offers_Set_Input>
  where: P2p_Offers_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_P2p_Offers_By_PkArgs = {
  _set?: Maybe<P2p_Offers_Set_Input>
  pk_columns: P2p_Offers_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_PreferencesArgs = {
  _set?: Maybe<Preferences_Set_Input>
  where: Preferences_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Preferences_By_PkArgs = {
  _set?: Maybe<Preferences_Set_Input>
  pk_columns: Preferences_Pk_Columns_Input
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

/** columns and relationships of "p2p_offers" */
export type P2p_Offers = {
  __typename?: 'p2p_offers'
  amount: Scalars['float8']
  buyer?: Maybe<Scalars['String']>
  buyer_confirmed_payment: Scalars['Boolean']
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  method: Scalars['String']
  seller?: Maybe<Scalars['String']>
  seller_confirmed_payment: Scalars['Boolean']
  seller_deposited_escrow: Scalars['Boolean']
  type: Scalars['String']
}

/** input type for inserting array relation for remote table "p2p_offers" */
export type P2p_Offers_Arr_Rel_Insert_Input = {
  data: Array<P2p_Offers_Insert_Input>
  on_conflict?: Maybe<P2p_Offers_On_Conflict>
}

/** Boolean expression to filter rows from the table "p2p_offers". All fields are combined with a logical 'AND'. */
export type P2p_Offers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<P2p_Offers_Bool_Exp>>>
  _not?: Maybe<P2p_Offers_Bool_Exp>
  _or?: Maybe<Array<Maybe<P2p_Offers_Bool_Exp>>>
  amount?: Maybe<Float8_Comparison_Exp>
  buyer?: Maybe<String_Comparison_Exp>
  buyer_confirmed_payment?: Maybe<Boolean_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  method?: Maybe<String_Comparison_Exp>
  seller?: Maybe<String_Comparison_Exp>
  seller_confirmed_payment?: Maybe<Boolean_Comparison_Exp>
  seller_deposited_escrow?: Maybe<Boolean_Comparison_Exp>
  type?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "p2p_offers" */
export enum P2p_Offers_Constraint {
  /** unique or primary key constraint */
  P2pOffersPkey = 'p2p_offers_pkey',
}

/** input type for inserting data into table "p2p_offers" */
export type P2p_Offers_Insert_Input = {
  amount?: Maybe<Scalars['float8']>
  buyer?: Maybe<Scalars['String']>
  buyer_confirmed_payment?: Maybe<Scalars['Boolean']>
  created_at?: Maybe<Scalars['timestamptz']>
  method?: Maybe<Scalars['String']>
  seller?: Maybe<Scalars['String']>
  seller_confirmed_payment?: Maybe<Scalars['Boolean']>
  seller_deposited_escrow?: Maybe<Scalars['Boolean']>
  type?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "p2p_offers" */
export type P2p_Offers_Mutation_Response = {
  __typename?: 'p2p_offers_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<P2p_Offers>
}

/** input type for inserting object relation for remote table "p2p_offers" */
export type P2p_Offers_Obj_Rel_Insert_Input = {
  data: P2p_Offers_Insert_Input
  on_conflict?: Maybe<P2p_Offers_On_Conflict>
}

/** on conflict condition type for table "p2p_offers" */
export type P2p_Offers_On_Conflict = {
  constraint: P2p_Offers_Constraint
  update_columns: Array<P2p_Offers_Update_Column>
  where?: Maybe<P2p_Offers_Bool_Exp>
}

/** ordering options when selecting data from "p2p_offers" */
export type P2p_Offers_Order_By = {
  amount?: Maybe<Order_By>
  buyer?: Maybe<Order_By>
  buyer_confirmed_payment?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  method?: Maybe<Order_By>
  seller?: Maybe<Order_By>
  seller_confirmed_payment?: Maybe<Order_By>
  seller_deposited_escrow?: Maybe<Order_By>
  type?: Maybe<Order_By>
}

/** primary key columns input for table: "p2p_offers" */
export type P2p_Offers_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "p2p_offers" */
export enum P2p_Offers_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Buyer = 'buyer',
  /** column name */
  BuyerConfirmedPayment = 'buyer_confirmed_payment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  Seller = 'seller',
  /** column name */
  SellerConfirmedPayment = 'seller_confirmed_payment',
  /** column name */
  SellerDepositedEscrow = 'seller_deposited_escrow',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "p2p_offers" */
export type P2p_Offers_Set_Input = {
  buyer_confirmed_payment?: Maybe<Scalars['Boolean']>
  seller_confirmed_payment?: Maybe<Scalars['Boolean']>
}

/** update columns of table "p2p_offers" */
export enum P2p_Offers_Update_Column {
  /** column name */
  BuyerConfirmedPayment = 'buyer_confirmed_payment',
  /** column name */
  SellerConfirmedPayment = 'seller_confirmed_payment',
}

/** columns and relationships of "preferences" */
export type Preferences = {
  __typename?: 'preferences'
  account: Scalars['String']
  lang: Scalars['String']
  theme: Scalars['String']
}

/** input type for inserting array relation for remote table "preferences" */
export type Preferences_Arr_Rel_Insert_Input = {
  data: Array<Preferences_Insert_Input>
  on_conflict?: Maybe<Preferences_On_Conflict>
}

/** Boolean expression to filter rows from the table "preferences". All fields are combined with a logical 'AND'. */
export type Preferences_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Preferences_Bool_Exp>>>
  _not?: Maybe<Preferences_Bool_Exp>
  _or?: Maybe<Array<Maybe<Preferences_Bool_Exp>>>
  account?: Maybe<String_Comparison_Exp>
  lang?: Maybe<String_Comparison_Exp>
  theme?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "preferences" */
export enum Preferences_Constraint {
  /** unique or primary key constraint */
  PreferencesPkey = 'preferences_pkey',
}

/** input type for inserting data into table "preferences" */
export type Preferences_Insert_Input = {
  account?: Maybe<Scalars['String']>
  lang?: Maybe<Scalars['String']>
  theme?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "preferences" */
export type Preferences_Mutation_Response = {
  __typename?: 'preferences_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Preferences>
}

/** input type for inserting object relation for remote table "preferences" */
export type Preferences_Obj_Rel_Insert_Input = {
  data: Preferences_Insert_Input
  on_conflict?: Maybe<Preferences_On_Conflict>
}

/** on conflict condition type for table "preferences" */
export type Preferences_On_Conflict = {
  constraint: Preferences_Constraint
  update_columns: Array<Preferences_Update_Column>
  where?: Maybe<Preferences_Bool_Exp>
}

/** ordering options when selecting data from "preferences" */
export type Preferences_Order_By = {
  account?: Maybe<Order_By>
  lang?: Maybe<Order_By>
  theme?: Maybe<Order_By>
}

/** primary key columns input for table: "preferences" */
export type Preferences_Pk_Columns_Input = {
  account: Scalars['String']
}

/** select columns of table "preferences" */
export enum Preferences_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Lang = 'lang',
  /** column name */
  Theme = 'theme',
}

/** input type for updating data in table "preferences" */
export type Preferences_Set_Input = {
  account?: Maybe<Scalars['String']>
  lang?: Maybe<Scalars['String']>
  theme?: Maybe<Scalars['String']>
}

/** update columns of table "preferences" */
export enum Preferences_Update_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Lang = 'lang',
  /** column name */
  Theme = 'theme',
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "actions" */
  actions: Array<Actions>
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: Maybe<Actions>
  check_apollo: Scalars['Boolean']
  /** fetch data from the table: "p2p_offers" */
  p2p_offers: Array<P2p_Offers>
  /** fetch data from the table: "p2p_offers" using primary key columns */
  p2p_offers_by_pk?: Maybe<P2p_Offers>
  /** fetch data from the table: "preferences" */
  preferences: Array<Preferences>
  /** fetch data from the table: "preferences" using primary key columns */
  preferences_by_pk?: Maybe<Preferences>
  /** fetch data from the table: "table_rows" */
  table_rows: Array<Table_Rows>
  /** fetch data from the table: "table_rows" using primary key columns */
  table_rows_by_pk?: Maybe<Table_Rows>
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
export type Query_RootActions_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootP2p_OffersArgs = {
  distinct_on?: Maybe<Array<P2p_Offers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<P2p_Offers_Order_By>>
  where?: Maybe<P2p_Offers_Bool_Exp>
}

/** query root */
export type Query_RootP2p_Offers_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootPreferencesArgs = {
  distinct_on?: Maybe<Array<Preferences_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Preferences_Order_By>>
  where?: Maybe<Preferences_Bool_Exp>
}

/** query root */
export type Query_RootPreferences_By_PkArgs = {
  account: Scalars['String']
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
export type Query_RootTable_Rows_By_PkArgs = {
  code: Scalars['String']
  key: Scalars['String']
  scope: Scalars['String']
  table: Scalars['String']
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "actions" */
  actions: Array<Actions>
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: Maybe<Actions>
  /** fetch data from the table: "p2p_offers" */
  p2p_offers: Array<P2p_Offers>
  /** fetch data from the table: "p2p_offers" using primary key columns */
  p2p_offers_by_pk?: Maybe<P2p_Offers>
  /** fetch data from the table: "preferences" */
  preferences: Array<Preferences>
  /** fetch data from the table: "preferences" using primary key columns */
  preferences_by_pk?: Maybe<Preferences>
  /** fetch data from the table: "table_rows" */
  table_rows: Array<Table_Rows>
  /** fetch data from the table: "table_rows" using primary key columns */
  table_rows_by_pk?: Maybe<Table_Rows>
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
export type Subscription_RootActions_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootP2p_OffersArgs = {
  distinct_on?: Maybe<Array<P2p_Offers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<P2p_Offers_Order_By>>
  where?: Maybe<P2p_Offers_Bool_Exp>
}

/** subscription root */
export type Subscription_RootP2p_Offers_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootPreferencesArgs = {
  distinct_on?: Maybe<Array<Preferences_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Preferences_Order_By>>
  where?: Maybe<Preferences_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPreferences_By_PkArgs = {
  account: Scalars['String']
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
export type Subscription_RootTable_Rows_By_PkArgs = {
  code: Scalars['String']
  key: Scalars['String']
  scope: Scalars['String']
  table: Scalars['String']
}

/** columns and relationships of "table_rows" */
export type Table_Rows = {
  __typename?: 'table_rows'
  code: Scalars['String']
  data: Scalars['jsonb']
  key: Scalars['String']
  scope: Scalars['String']
  table: Scalars['String']
}

/** columns and relationships of "table_rows" */
export type Table_RowsDataArgs = {
  path?: Maybe<Scalars['String']>
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
  code?: Maybe<String_Comparison_Exp>
  data?: Maybe<Jsonb_Comparison_Exp>
  key?: Maybe<String_Comparison_Exp>
  scope?: Maybe<String_Comparison_Exp>
  table?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "table_rows" */
export enum Table_Rows_Constraint {
  /** unique or primary key constraint */
  TableRowsPkey = 'table_rows_pkey',
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
  code?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['jsonb']>
  key?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  table?: Maybe<Scalars['String']>
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
  code?: Maybe<Order_By>
  data?: Maybe<Order_By>
  key?: Maybe<Order_By>
  scope?: Maybe<Order_By>
  table?: Maybe<Order_By>
}

/** primary key columns input for table: "table_rows" */
export type Table_Rows_Pk_Columns_Input = {
  code: Scalars['String']
  key: Scalars['String']
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
  Code = 'code',
  /** column name */
  Data = 'data',
  /** column name */
  Key = 'key',
  /** column name */
  Scope = 'scope',
  /** column name */
  Table = 'table',
}

/** input type for updating data in table "table_rows" */
export type Table_Rows_Set_Input = {
  code?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['jsonb']>
  key?: Maybe<Scalars['String']>
  table?: Maybe<Scalars['String']>
}

/** update columns of table "table_rows" */
export enum Table_Rows_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Data = 'data',
  /** column name */
  Key = 'key',
  /** column name */
  Table = 'table',
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

export type Insert_Action_OneMutationVariables = Exact<{
  action: Actions_Insert_Input
}>

export type Insert_Action_OneMutation = {
  __typename?: 'mutation_root'
  insert_actions_one?: Maybe<{ __typename?: 'actions'; id: number }>
}

export type Upsert_Table_RowMutationVariables = Exact<{
  table_row: Table_Rows_Insert_Input
}>

export type Upsert_Table_RowMutation = {
  __typename?: 'mutation_root'
  insert_table_rows_one?: Maybe<{ __typename?: 'table_rows'; data: any }>
}

export const Insert_Action_OneDocument = gql`
  mutation insert_action_one($action: actions_insert_input!) {
    insert_actions_one(object: $action) {
      id
    }
  }
`
export const Upsert_Table_RowDocument = gql`
  mutation upsert_table_row($table_row: table_rows_insert_input!) {
    insert_table_rows_one(object: $table_row, on_conflict: { constraint: table_rows_pkey, update_columns: [data] }) {
      data
    }
  }
`

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction()
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    insert_action_one(
      variables: Insert_Action_OneMutationVariables,
    ): Promise<{
        data?: Insert_Action_OneMutation | undefined
        extensions?: any
        headers: Headers
        status: number
        errors?: GraphQLError[] | undefined
      }> {
      return withWrapper(() => client.rawRequest<Insert_Action_OneMutation>(print(Insert_Action_OneDocument), variables))
    },
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
  }
}
export type Sdk = ReturnType<typeof getSdk>
