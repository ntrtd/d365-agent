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
import type { SalesInvoiceV4LinesApi } from './SalesInvoiceV4LinesApi';
import {
  SalesInvoiceHeadersV4,
  SalesInvoiceHeadersV4Type
} from './SalesInvoiceHeadersV4';

/**
 * This class represents the entity "SalesInvoiceV4Lines" of service "d365_metadata".
 */
export class SalesInvoiceV4Lines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesInvoiceV4LinesType<T>
{
  /**
   * Technical entity name for SalesInvoiceV4Lines.
   */
  static override _entityName = 'SalesInvoiceV4Lines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesInvoiceV4Lines entity.
   */
  static _keys = [
    'dataAreaId',
    'InvoiceNumber',
    'LineCreationSequenceNumber',
    'InvoiceDate',
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
   * Line Creation Sequence Number.
   */
  declare lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ledger Voucher.
   */
  declare ledgerVoucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Number.
   * @nullable
   */
  declare dimensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Site Id.
   * @nullable
   */
  declare inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Total Discount Amount.
   */
  declare lineTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Product Category Hierarchy Name.
   * @nullable
   */
  declare salesProductCategoryHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Total Tax Amount.
   */
  declare lineTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ordered Inventory Status Id.
   * @nullable
   */
  declare orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Shipping Date.
   */
  declare confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Warehouse Id.
   * @nullable
   */
  declare inventoryWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Product Variant Name.
   * @nullable
   */
  declare productVariantName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoiced Quantity.
   */
  declare invoicedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Product Category Name.
   * @nullable
   */
  declare salesProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesInvoiceHeadersV4} entity.
   */
  declare salesInvoiceHeaderV4?: SalesInvoiceHeadersV4<T> | null;

  constructor(_entityApi: SalesInvoiceV4LinesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesInvoiceV4LinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceNumber: DeserializedType<T, 'Edm.String'>;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerVoucher: DeserializedType<T, 'Edm.String'>;
  dimensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  salesProductCategoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  lineTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  inventoryWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  lineTotalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productVariantName?: DeserializedType<T, 'Edm.String'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  invoicedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  salesInvoiceHeaderV4?: SalesInvoiceHeadersV4Type<T> | null;
}
