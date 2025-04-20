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
import type { RetailTransactionSupplementaryInvoicesApi } from './RetailTransactionSupplementaryInvoicesApi';

/**
 * This class represents the entity "RetailTransactionSupplementaryInvoices" of service "d365_metadata".
 */
export class RetailTransactionSupplementaryInvoices<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionSupplementaryInvoicesType<T>
{
  /**
   * Technical entity name for RetailTransactionSupplementaryInvoices.
   */
  static override _entityName = 'RetailTransactionSupplementaryInvoices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionSupplementaryInvoices entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'Terminal',
    'TransactionNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Name.
   * @nullable
   */
  declare customerName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionSupplementaryInvoicesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionSupplementaryInvoicesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
}
