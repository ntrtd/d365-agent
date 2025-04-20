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
import type { FiscalTransSalesLineAdjustmentsApi } from './FiscalTransSalesLineAdjustmentsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "FiscalTransSalesLineAdjustments" of service "d365_metadata".
 */
export class FiscalTransSalesLineAdjustments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalTransSalesLineAdjustmentsType<T>
{
  /**
   * Technical entity name for FiscalTransSalesLineAdjustments.
   */
  static override _entityName = 'FiscalTransSalesLineAdjustments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalTransSalesLineAdjustments entity.
   */
  static _keys = [
    'dataAreaId',
    'Store',
    'Terminal',
    'TransactionId',
    'FiscalTransactionLineNumber',
    'FiscalTransactionRecordGuid',
    'SalesTransactionLineNumber'
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
   * Fiscal Transaction Line Number.
   */
  declare fiscalTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fiscal Transaction Record Guid.
   */
  declare fiscalTransactionRecordGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Sales Transaction Line Number.
   */
  declare salesTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exclude.
   * @nullable
   */
  declare exclude?: NoYes | null;

  constructor(_entityApi: FiscalTransSalesLineAdjustmentsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalTransSalesLineAdjustmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  fiscalTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  fiscalTransactionRecordGuid: DeserializedType<T, 'Edm.Guid'>;
  salesTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  exclude?: NoYes | null;
}
