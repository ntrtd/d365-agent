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
import type { RetailTransactionPaymentTrans_BrbiEntitiesApi } from './RetailTransactionPaymentTrans_BrbiEntitiesApi';
import { RetailEntryStatus } from './RetailEntryStatus';

/**
 * This class represents the entity "RetailTransactionPaymentTrans_BRBIEntities" of service "d365_metadata".
 */
export class RetailTransactionPaymentTrans_BrbiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionPaymentTrans_BrbiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionPaymentTrans_BrbiEntities.
   */
  static override _entityName = 'RetailTransactionPaymentTrans_BRBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionPaymentTrans_BrbiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'StoreId',
    'TerminalId',
    'TransactionId',
    'lineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Id.
   */
  declare storeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Tendered.
   */
  declare amountTendered: DeserializedType<T, 'Edm.Decimal'>;
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
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
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
   * Tender Type.
   * @nullable
   */
  declare tenderType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;

  constructor(_entityApi: RetailTransactionPaymentTrans_BrbiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionPaymentTrans_BrbiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  storeId: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  amountTendered: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  transTime: DeserializedType<T, 'Edm.Int32'>;
  tenderType?: DeserializedType<T, 'Edm.String'> | null;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  transactionStatus?: RetailEntryStatus | null;
}
