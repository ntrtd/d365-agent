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
import type { ReturnedQuantitiesApi } from './ReturnedQuantitiesApi';

/**
 * This class represents the entity "ReturnedQuantities" of service "d365_metadata".
 */
export class ReturnedQuantities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReturnedQuantitiesType<T>
{
  /**
   * Technical entity name for ReturnedQuantities.
   */
  static override _entityName = 'ReturnedQuantities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReturnedQuantities entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitPartyNumber',
    'Store',
    'TerminalId',
    'TransactionId',
    'LineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Party Number.
   */
  declare operatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
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
   * Returned Qty.
   */
  declare returnedQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Return Processed Time.
   */
  declare lastReturnProcessedTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: ReturnedQuantitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ReturnedQuantitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  returnedQty: DeserializedType<T, 'Edm.Decimal'>;
  lastReturnProcessedTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
