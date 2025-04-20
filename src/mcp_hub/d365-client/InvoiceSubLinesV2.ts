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
import type { InvoiceSubLinesV2Api } from './InvoiceSubLinesV2Api';
import {
  VendorInvoiceLines,
  VendorInvoiceLinesType
} from './VendorInvoiceLines';

/**
 * This class represents the entity "InvoiceSubLinesV2" of service "d365_metadata".
 */
export class InvoiceSubLinesV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InvoiceSubLinesV2Type<T>
{
  /**
   * Technical entity name for InvoiceSubLinesV2.
   */
  static override _entityName = 'InvoiceSubLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InvoiceSubLinesV2 entity.
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
   * Purchase Order Line Number.
   */
  declare purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purchase Quantity.
   */
  declare purchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link VendorInvoiceLines} entity.
   */
  declare vendorInvoiceLine?: VendorInvoiceLines<T> | null;

  constructor(_entityApi: InvoiceSubLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface InvoiceSubLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productReceiptNumber: DeserializedType<T, 'Edm.String'>;
  invoiceLineReference: DeserializedType<T, 'Edm.String'>;
  purchaseOrder: DeserializedType<T, 'Edm.String'>;
  invoiceLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  purchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  vendorInvoiceLine?: VendorInvoiceLinesType<T> | null;
}
