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
import type { SalesInvoiceQrCodeApi } from './SalesInvoiceQrCodeApi';

/**
 * This class represents the entity "SalesInvoiceQRCode" of service "d365_metadata".
 */
export class SalesInvoiceQrCode<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesInvoiceQrCodeType<T>
{
  /**
   * Technical entity name for SalesInvoiceQrCode.
   */
  static override _entityName = 'SalesInvoiceQRCode';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesInvoiceQrCode entity.
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
   * Qr Code Sa.
   * @nullable
   */
  declare qrCodeSa?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesInvoiceQrCodeApi<T>) {
    super(_entityApi);
  }
}

export interface SalesInvoiceQrCodeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceId: DeserializedType<T, 'Edm.String'>;
  ledgerVoucher: DeserializedType<T, 'Edm.String'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  qrCodeSa?: DeserializedType<T, 'Edm.String'> | null;
}
