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
import type { SelfInvoice_WApi } from './SelfInvoice_WApi';

/**
 * This class represents the entity "SelfInvoice_W" of service "d365_metadata".
 */
export class SelfInvoice_W<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SelfInvoice_WType<T>
{
  /**
   * Technical entity name for SelfInvoice_W.
   */
  static override _entityName = 'SelfInvoice_W';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SelfInvoice_W entity.
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
   * Submission Uuid W.
   * @nullable
   */
  declare submissionUuidW?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qr Code W.
   * @nullable
   */
  declare qrCodeW?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SelfInvoice_WApi<T>) {
    super(_entityApi);
  }
}

export interface SelfInvoice_WType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceId: DeserializedType<T, 'Edm.String'>;
  ledgerVoucher: DeserializedType<T, 'Edm.String'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  submissionUuidW?: DeserializedType<T, 'Edm.String'> | null;
  qrCodeW?: DeserializedType<T, 'Edm.String'> | null;
}
