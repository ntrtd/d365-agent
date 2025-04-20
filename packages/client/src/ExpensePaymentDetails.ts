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
import type { ExpensePaymentDetailsApi } from './ExpensePaymentDetailsApi';
import { TrvPaymentStatus } from './TrvPaymentStatus';

/**
 * This class represents the entity "ExpensePaymentDetails" of service "d365_metadata".
 */
export class ExpensePaymentDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpensePaymentDetailsType<T>
{
  /**
   * Technical entity name for ExpensePaymentDetails.
   */
  static override _entityName = 'ExpensePaymentDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpensePaymentDetails entity.
   */
  static _keys = ['dataAreaId', 'InvoiceId', 'ExpNumber', 'ExpTransNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Id.
   */
  declare invoiceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Exp Number.
   */
  declare expNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Exp Trans Number.
   */
  declare expTransNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Date.
   */
  declare paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payment Voucher.
   * @nullable
   */
  declare paymentVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sent Data To External Date.
   */
  declare sentDataToExternalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payment Status.
   * @nullable
   */
  declare paymentStatus?: TrvPaymentStatus | null;
  /**
   * Check Num.
   * @nullable
   */
  declare checkNum?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpensePaymentDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpensePaymentDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceId: DeserializedType<T, 'Edm.String'>;
  expNumber: DeserializedType<T, 'Edm.String'>;
  expTransNumber: DeserializedType<T, 'Edm.String'>;
  paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymentVoucher?: DeserializedType<T, 'Edm.String'> | null;
  sentDataToExternalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymentStatus?: TrvPaymentStatus | null;
  checkNum?: DeserializedType<T, 'Edm.String'> | null;
}
