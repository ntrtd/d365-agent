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
import type { RetailTransactionCustomerAccountDepositTransBiEntitiesApi } from './RetailTransactionCustomerAccountDepositTransBiEntitiesApi';
import { NoYes } from './NoYes';
import { RetailEntryStatus } from './RetailEntryStatus';

/**
 * This class represents the entity "RetailTransactionCustomerAccountDepositTransBIEntities" of service "d365_metadata".
 */
export class RetailTransactionCustomerAccountDepositTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionCustomerAccountDepositTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionCustomerAccountDepositTransBiEntities.
   */
  static override _entityName =
    'RetailTransactionCustomerAccountDepositTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionCustomerAccountDepositTransBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'store',
    'terminal',
    'transactionId',
    'lineNum'
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
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Statement Id.
   * @nullable
   */
  declare statementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Time.
   */
  declare transTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Receipt Id.
   * @nullable
   */
  declare receiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replicated.
   * @nullable
   */
  declare replicated?: NoYes | null;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shift.
   * @nullable
   */
  declare shift?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Counter.
   */
  declare counter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Staff.
   * @nullable
   */
  declare staff?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shift Date.
   */
  declare shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(
    _entityApi: RetailTransactionCustomerAccountDepositTransBiEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface RetailTransactionCustomerAccountDepositTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  statementId?: DeserializedType<T, 'Edm.String'> | null;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  transTime: DeserializedType<T, 'Edm.Int32'>;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
  replicated?: NoYes | null;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  shift?: DeserializedType<T, 'Edm.String'> | null;
  transactionStatus?: RetailEntryStatus | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  counter: DeserializedType<T, 'Edm.Int32'>;
  staff?: DeserializedType<T, 'Edm.String'> | null;
  shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
