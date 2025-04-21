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
import type { ExternallyMaintainedCustomerSalesInvoiceLinesApi } from './ExternallyMaintainedCustomerSalesInvoiceLinesApi';

/**
 * This class represents the entity "ExternallyMaintainedCustomerSalesInvoiceLines" of service "d365_metadata".
 */
export class ExternallyMaintainedCustomerSalesInvoiceLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExternallyMaintainedCustomerSalesInvoiceLinesType<T>
{
  /**
   * Technical entity name for ExternallyMaintainedCustomerSalesInvoiceLines.
   */
  static override _entityName = 'ExternallyMaintainedCustomerSalesInvoiceLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExternallyMaintainedCustomerSalesInvoiceLines entity.
   */
  static _keys = [
    'dataAreaId',
    'InvoiceNumber',
    'InvoiceDate',
    'LineCreationSequenceNumber',
    'LedgerVoucher'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Number.
   */
  declare invoiceNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line Creation Sequence Number.
   */
  declare lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ledger Voucher.
   */
  declare ledgerVoucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoiced Quantity.
   */
  declare invoicedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Total Discount Amount.
   */
  declare lineTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Total Tax Amount.
   */
  declare lineTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Total Charge Amount.
   */
  declare lineTotalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Shipping Date.
   */
  declare confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ExternallyMaintainedCustomerSalesInvoiceLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ExternallyMaintainedCustomerSalesInvoiceLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceNumber: DeserializedType<T, 'Edm.String'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  ledgerVoucher: DeserializedType<T, 'Edm.String'>;
  invoicedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  lineTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  lineTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  lineTotalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
}
