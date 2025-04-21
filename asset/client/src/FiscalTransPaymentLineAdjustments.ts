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
import type { FiscalTransPaymentLineAdjustmentsApi } from './FiscalTransPaymentLineAdjustmentsApi';

/**
 * This class represents the entity "FiscalTransPaymentLineAdjustments" of service "d365_metadata".
 */
export class FiscalTransPaymentLineAdjustments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalTransPaymentLineAdjustmentsType<T>
{
  /**
   * Technical entity name for FiscalTransPaymentLineAdjustments.
   */
  static override _entityName = 'FiscalTransPaymentLineAdjustments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalTransPaymentLineAdjustments entity.
   */
  static _keys = [
    'dataAreaId',
    'Store',
    'Terminal',
    'TransactionId',
    'FiscalTransactionLineNumber',
    'FiscalTransactionRecordGuid',
    'PaymentTransactionLineNumber'
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
   * Payment Transaction Line Number.
   */
  declare paymentTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Adjustment Amount.
   */
  declare adjustmentAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: FiscalTransPaymentLineAdjustmentsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalTransPaymentLineAdjustmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  fiscalTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  fiscalTransactionRecordGuid: DeserializedType<T, 'Edm.Guid'>;
  paymentTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  adjustmentAmount: DeserializedType<T, 'Edm.Decimal'>;
}
