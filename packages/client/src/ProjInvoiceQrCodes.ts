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
import type { ProjInvoiceQrCodesApi } from './ProjInvoiceQrCodesApi';

/**
 * This class represents the entity "ProjInvoiceQRCodes" of service "d365_metadata".
 */
export class ProjInvoiceQrCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjInvoiceQrCodesType<T>
{
  /**
   * Technical entity name for ProjInvoiceQrCodes.
   */
  static override _entityName = 'ProjInvoiceQRCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjInvoiceQrCodes entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjInvoiceId',
    'LedgerVoucher',
    'InvoiceDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Invoice Id.
   */
  declare projInvoiceId: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: ProjInvoiceQrCodesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjInvoiceQrCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projInvoiceId: DeserializedType<T, 'Edm.String'>;
  ledgerVoucher: DeserializedType<T, 'Edm.String'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  qrCodeSa?: DeserializedType<T, 'Edm.String'> | null;
}
