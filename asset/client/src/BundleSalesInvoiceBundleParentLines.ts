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
import type { BundleSalesInvoiceBundleParentLinesApi } from './BundleSalesInvoiceBundleParentLinesApi';
import { SalesBundleJournalLineType } from './SalesBundleJournalLineType';
import {
  BundleSalesInvoiceLines,
  BundleSalesInvoiceLinesType
} from './BundleSalesInvoiceLines';
import {
  OperationalSitesV2,
  OperationalSitesV2Type
} from './OperationalSitesV2';
import { Currencies, CurrenciesType } from './Currencies';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { Warehouses, WarehousesType } from './Warehouses';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import {
  SalesInvoiceHeadersV2,
  SalesInvoiceHeadersV2Type
} from './SalesInvoiceHeadersV2';

/**
 * This class represents the entity "BundleSalesInvoiceBundleParentLines" of service "d365_metadata".
 */
export class BundleSalesInvoiceBundleParentLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BundleSalesInvoiceBundleParentLinesType<T>
{
  /**
   * Technical entity name for BundleSalesInvoiceBundleParentLines.
   */
  static override _entityName = 'BundleSalesInvoiceBundleParentLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BundleSalesInvoiceBundleParentLines entity.
   */
  static _keys = [
    'dataAreaId',
    'InvoiceNumber',
    'InvoiceDate',
    'LedgerVoucher',
    'InventoryLotId'
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
   * Ledger Voucher.
   */
  declare ledgerVoucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Lot Id.
   */
  declare inventoryLotId: DeserializedType<T, 'Edm.String'>;
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
   * Bundle Root Parent Inventory Lot Id.
   * @nullable
   */
  declare bundleRootParentInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bundle Parent Inventory Lot Id.
   * @nullable
   */
  declare bundleParentInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Creation Sequence Number.
   */
  declare lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
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
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bundle Journal Line Type.
   * @nullable
   */
  declare bundleJournalLineType?: SalesBundleJournalLineType | null;
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
   * One-to-many navigation property to the {@link BundleSalesInvoiceLines} entity.
   */
  declare bundleSalesInvoiceLines: BundleSalesInvoiceLines<T>[];
  /**
   * One-to-one navigation property to the {@link BundleSalesInvoiceBundleParentLines} entity.
   */
  declare bundleSalesInvoiceBundleParentLines?: BundleSalesInvoiceBundleParentLines<T> | null;
  /**
   * One-to-many navigation property to the {@link BundleSalesInvoiceBundleParentLines} entity.
   */
  declare bundleSalesInvoiceBundleRootParentLines: BundleSalesInvoiceBundleParentLines<T>[];
  /**
   * One-to-one navigation property to the {@link OperationalSitesV2} entity.
   */
  declare operationalSites?: OperationalSitesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currencies?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare productVersion?: ProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouses?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare unitsOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesInvoiceHeadersV2} entity.
   */
  declare salesInvoiceHeaderV2?: SalesInvoiceHeadersV2<T> | null;

  constructor(_entityApi: BundleSalesInvoiceBundleParentLinesApi<T>) {
    super(_entityApi);
  }
}

export interface BundleSalesInvoiceBundleParentLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceNumber: DeserializedType<T, 'Edm.String'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerVoucher: DeserializedType<T, 'Edm.String'>;
  inventoryLotId: DeserializedType<T, 'Edm.String'>;
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
  bundleRootParentInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  bundleParentInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  inventoryWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  lineTotalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  bundleJournalLineType?: SalesBundleJournalLineType | null;
  invoicedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  bundleSalesInvoiceLines: BundleSalesInvoiceLinesType<T>[];
  bundleSalesInvoiceBundleParentLines?: BundleSalesInvoiceBundleParentLinesType<T> | null;
  bundleSalesInvoiceBundleRootParentLines: BundleSalesInvoiceBundleParentLinesType<T>[];
  operationalSites?: OperationalSitesV2Type<T> | null;
  currencies?: CurrenciesType<T> | null;
  productVersion?: ProductVersionsType<T> | null;
  productColor?: ProductColorsType<T> | null;
  productStyle?: ProductStylesType<T> | null;
  warehouses?: WarehousesType<T> | null;
  releasedProductsV2?: ReleasedProductsV2Type<T> | null;
  unitsOfMeasure?: UnitsOfMeasureType<T> | null;
  productSize?: ProductSizesType<T> | null;
  salesInvoiceHeaderV2?: SalesInvoiceHeadersV2Type<T> | null;
}
