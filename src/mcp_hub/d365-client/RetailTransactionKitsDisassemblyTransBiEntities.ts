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
import type { RetailTransactionKitsDisassemblyTransBiEntitiesApi } from './RetailTransactionKitsDisassemblyTransBiEntitiesApi';
import { RetailEntryStatus } from './RetailEntryStatus';

/**
 * This class represents the entity "RetailTransactionKitsDisassemblyTransBIEntities" of service "d365_metadata".
 */
export class RetailTransactionKitsDisassemblyTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionKitsDisassemblyTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionKitsDisassemblyTransBiEntities.
   */
  static override _entityName =
    'RetailTransactionKitsDisassemblyTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionKitsDisassemblyTransBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'StoreId',
    'TerminalId',
    'TransactionId',
    'LineNum'
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
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variant Id.
   * @nullable
   */
  declare variantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Replication Counter.
   */
  declare replicationCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;

  constructor(
    _entityApi: RetailTransactionKitsDisassemblyTransBiEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface RetailTransactionKitsDisassemblyTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  storeId: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  transactionStatus?: RetailEntryStatus | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  variantId?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  replicationCounter: DeserializedType<T, 'Edm.Int32'>;
  origin?: DeserializedType<T, 'Edm.String'> | null;
}
