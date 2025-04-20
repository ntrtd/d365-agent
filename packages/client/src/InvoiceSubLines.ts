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
import type { InvoiceSubLinesApi } from './InvoiceSubLinesApi';
import {
  VendorInvoiceLines,
  VendorInvoiceLinesType
} from './VendorInvoiceLines';

/**
 * This class represents the entity "InvoiceSubLines" of service "d365_metadata".
 */
export class InvoiceSubLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InvoiceSubLinesType<T>
{
  /**
   * Technical entity name for InvoiceSubLines.
   */
  static override _entityName = 'InvoiceSubLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InvoiceSubLines entity.
   */
  static _keys = [
    'dataAreaId',
    'ProductReceiptNumber',
    'InvoiceLineReference',
    'PurchaseOrder',
    'InvoiceLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Receipt Number.
   */
  declare productReceiptNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Line Reference.
   */
  declare invoiceLineReference: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order.
   */
  declare purchaseOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Line Number.
   */
  declare invoiceLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Quantity.
   */
  declare purchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link VendorInvoiceLines} entity.
   */
  declare vendorInvoiceLine?: VendorInvoiceLines<T> | null;

  constructor(_entityApi: InvoiceSubLinesApi<T>) {
    super(_entityApi);
  }
}

export interface InvoiceSubLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productReceiptNumber: DeserializedType<T, 'Edm.String'>;
  invoiceLineReference: DeserializedType<T, 'Edm.String'>;
  purchaseOrder: DeserializedType<T, 'Edm.String'>;
  invoiceLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  purchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  vendorInvoiceLine?: VendorInvoiceLinesType<T> | null;
}
