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
import type { RetailTransactionChargeTaxMeasureBiEntitiesApi } from './RetailTransactionChargeTaxMeasureBiEntitiesApi';

/**
 * This class represents the entity "RetailTransactionChargeTaxMeasureBIEntities" of service "d365_metadata".
 */
export class RetailTransactionChargeTaxMeasureBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionChargeTaxMeasureBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionChargeTaxMeasureBiEntities.
   */
  static override _entityName = 'RetailTransactionChargeTaxMeasureBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionChargeTaxMeasureBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'StoreId',
    'TerminalId',
    'TransactionId',
    'SaleLineNum',
    'MarkupLineNum',
    'Path'
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
   * Sale Line Num.
   */
  declare saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Markup Line Num.
   */
  declare markupLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Path.
   */
  declare path: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailTransactionChargeTaxMeasureBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionChargeTaxMeasureBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  storeId: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  markupLineNum: DeserializedType<T, 'Edm.Decimal'>;
  path: DeserializedType<T, 'Edm.String'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  value: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
}
