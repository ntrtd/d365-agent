/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { RetailTransactionInfocodeTransBiEntitiesApi } from './RetailTransactionInfocodeTransBiEntitiesApi';
import { NoYes } from './NoYes';
import { RetailInfocodeTransType } from './RetailInfocodeTransType';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailInfocodeInputType } from './RetailInfocodeInputType';

/**
 * This class represents the entity "RetailTransactionInfocodeTransBIEntities" of service "d365_metadata".
 */
export class RetailTransactionInfocodeTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionInfocodeTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionInfocodeTransBiEntities.
   */
  static override _entityName = 'RetailTransactionInfocodeTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionInfocodeTransBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'store',
    'terminal',
    'transactionId',
    'lineNum',
    'Channel'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Channel.
   */
  declare channel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Replicated.
   * @nullable
   */
  declare replicated?: NoYes | null;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Time.
   */
  declare transTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sub Infocode Id.
   * @nullable
   */
  declare subInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Statement Id.
   * @nullable
   */
  declare statementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Info Amount.
   */
  declare infoAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Code 3.
   * @nullable
   */
  declare sourceCode3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Code 2.
   * @nullable
   */
  declare sourceCode2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Parent Line Num.
   */
  declare parentLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: RetailInfocodeTransType | null;
  /**
   * Staff.
   * @nullable
   */
  declare staff?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Tender.
   * @nullable
   */
  declare itemTender?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Information.
   * @nullable
   */
  declare information?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Input Type.
   * @nullable
   */
  declare inputType?: RetailInfocodeInputType | null;
  /**
   * Infocode Id.
   * @nullable
   */
  declare infocodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Trans Parent Guid.
   */
  declare fiscalTransParentGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Source Code.
   * @nullable
   */
  declare sourceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counter.
   */
  declare counter: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailTransactionInfocodeTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionInfocodeTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  channel: DeserializedType<T, 'Edm.Int64'>;
  replicated?: NoYes | null;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  transTime: DeserializedType<T, 'Edm.Int32'>;
  subInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  statementId?: DeserializedType<T, 'Edm.String'> | null;
  infoAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceCode3?: DeserializedType<T, 'Edm.String'> | null;
  sourceCode2?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  parentLineNum: DeserializedType<T, 'Edm.Decimal'>;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  type?: RetailInfocodeTransType | null;
  staff?: DeserializedType<T, 'Edm.String'> | null;
  itemTender?: DeserializedType<T, 'Edm.String'> | null;
  information?: DeserializedType<T, 'Edm.String'> | null;
  transactionStatus?: RetailEntryStatus | null;
  inputType?: RetailInfocodeInputType | null;
  infocodeId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalTransParentGuid: DeserializedType<T, 'Edm.Guid'>;
  sourceCode?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  counter: DeserializedType<T, 'Edm.Int32'>;
}
