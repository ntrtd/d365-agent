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
import type { SalesInvoiceChorusProDetailsApi } from './SalesInvoiceChorusProDetailsApi';

/**
 * This class represents the entity "SalesInvoiceChorusProDetails" of service "d365_metadata".
 */
export class SalesInvoiceChorusProDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesInvoiceChorusProDetailsType<T>
{
  /**
   * Technical entity name for SalesInvoiceChorusProDetails.
   */
  static override _entityName = 'SalesInvoiceChorusProDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesInvoiceChorusProDetails entity.
   */
  static _keys = ['dataAreaId', 'InvoiceId', 'LedgerVoucher', 'InvoiceDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Id.
   */
  declare invoiceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger Voucher.
   */
  declare ledgerVoucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Chorus Pro Deposit Id.
   * @nullable
   */
  declare chorusProDepositId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chorus Pro Deposit Date Time.
   * @nullable
   */
  declare chorusProDepositDateTime?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chorus Pro Refusal Reason.
   * @nullable
   */
  declare chorusProRefusalReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chorus Pro Invoice Status.
   * @nullable
   */
  declare chorusProInvoiceStatus?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesInvoiceChorusProDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface SalesInvoiceChorusProDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceId: DeserializedType<T, 'Edm.String'>;
  ledgerVoucher: DeserializedType<T, 'Edm.String'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  chorusProDepositId?: DeserializedType<T, 'Edm.String'> | null;
  chorusProDepositDateTime?: DeserializedType<T, 'Edm.String'> | null;
  chorusProRefusalReason?: DeserializedType<T, 'Edm.String'> | null;
  chorusProInvoiceStatus?: DeserializedType<T, 'Edm.String'> | null;
}
