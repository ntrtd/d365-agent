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
import type { BundleSalesOrderConfirmationBundleParentLinesApi } from './BundleSalesOrderConfirmationBundleParentLinesApi';
import { SalesBundleJournalLineType } from './SalesBundleJournalLineType';
import { NoYes } from './NoYes';
import { Currencies, CurrenciesType } from './Currencies';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import {
  SalesOrderConfirmationHeaders,
  SalesOrderConfirmationHeadersType
} from './SalesOrderConfirmationHeaders';
import { DeliveryTerms, DeliveryTermsType } from './DeliveryTerms';
import {
  BundleSalesOrderConfirmationLines,
  BundleSalesOrderConfirmationLinesType
} from './BundleSalesOrderConfirmationLines';

/**
 * This class represents the entity "BundleSalesOrderConfirmationBundleParentLines" of service "d365_metadata".
 */
export class BundleSalesOrderConfirmationBundleParentLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BundleSalesOrderConfirmationBundleParentLinesType<T>
{
  /**
   * Technical entity name for BundleSalesOrderConfirmationBundleParentLines.
   */
  static override _entityName = 'BundleSalesOrderConfirmationBundleParentLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BundleSalesOrderConfirmationBundleParentLines entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesOrderNumber',
    'ConfirmationDate',
    'ConfirmationNumber',
    'SalesOrderLineInventoryLotId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Number.
   */
  declare salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Confirmation Date.
   */
  declare confirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Confirmation Number.
   */
  declare confirmationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Line Inventory Lot Id.
   */
  declare salesOrderLineInventoryLotId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Site Id.
   * @nullable
   */
  declare shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Line Sales Tax Amount.
   */
  declare totalLineSalesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bundle Root Parent Inventory Lot Id.
   * @nullable
   */
  declare bundleRootParentInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Multiline Discount Amount.
   */
  declare multilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Confirmation Document Reference.
   * @nullable
   */
  declare confirmationDocumentReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Shipping Date.
   */
  declare confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Confirmed Inventory Status Id.
   * @nullable
   */
  declare confirmedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Warehouse Id.
   * @nullable
   */
  declare shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price Quantity.
   */
  declare salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Tax Print Code.
   * @nullable
   */
  declare salesTaxPrintCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Price Charges.
   */
  declare fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Catch Weight Quantity.
   */
  declare confirmedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commission Sales Representative Group Id.
   * @nullable
   */
  declare commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Multiline Discount Percentage.
   */
  declare multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Percentage.
   */
  declare cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Amount Sales Tax Amount.
   */
  declare lineAmountSalesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Product Category Name.
   * @nullable
   */
  declare salesProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Item Group Code.
   * @nullable
   */
  declare salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bundle Journal Line Type.
   * @nullable
   */
  declare bundleJournalLineType?: SalesBundleJournalLineType | null;
  /**
   * Ordering Customer Account Number.
   * @nullable
   */
  declare orderingCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Confirmed Sales Quantity.
   */
  declare confirmedSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External Item Number.
   * @nullable
   */
  declare externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Bundle Parent Inventory Lot Id.
   * @nullable
   */
  declare bundleParentInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Confirmed Inventory Quantity.
   */
  declare confirmedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * One-to-one navigation property to the {@link BundleSalesOrderConfirmationBundleParentLines} entity.
   */
  declare bundleSalesOrderConfirmationBundleParentLines?: BundleSalesOrderConfirmationBundleParentLines<T> | null;
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationBundleParentLines} entity.
   */
  declare bundleSalesOrderConfirmationBundleRootParentLines: BundleSalesOrderConfirmationBundleParentLines<T>[];
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultLedgerDimension?: DimensionSets<T> | null;
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
   * One-to-one navigation property to the {@link SalesOrderConfirmationHeaders} entity.
   */
  declare salesOrderConfirmationHeader?: SalesOrderConfirmationHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DeliveryTerms} entity.
   */
  declare deliveryTerms?: DeliveryTerms<T> | null;
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationLines} entity.
   */
  declare bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLines<T>[];

  constructor(_entityApi: BundleSalesOrderConfirmationBundleParentLinesApi<T>) {
    super(_entityApi);
  }
}

export interface BundleSalesOrderConfirmationBundleParentLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  confirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  confirmationNumber: DeserializedType<T, 'Edm.String'>;
  salesOrderLineInventoryLotId: DeserializedType<T, 'Edm.String'>;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  totalLineSalesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  bundleRootParentInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  multilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  confirmationDocumentReference?: DeserializedType<T, 'Edm.String'> | null;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  confirmedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxPrintCode?: DeserializedType<T, 'Edm.String'> | null;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  confirmedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  lineAmountSalesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  bundleJournalLineType?: SalesBundleJournalLineType | null;
  orderingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  confirmedSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  bundleParentInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  confirmedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  currencies?: CurrenciesType<T> | null;
  productVersion?: ProductVersionsType<T> | null;
  productColor?: ProductColorsType<T> | null;
  bundleSalesOrderConfirmationBundleParentLines?: BundleSalesOrderConfirmationBundleParentLinesType<T> | null;
  bundleSalesOrderConfirmationBundleRootParentLines: BundleSalesOrderConfirmationBundleParentLinesType<T>[];
  productStyle?: ProductStylesType<T> | null;
  defaultLedgerDimension?: DimensionSetsType<T> | null;
  releasedProductsV2?: ReleasedProductsV2Type<T> | null;
  unitsOfMeasure?: UnitsOfMeasureType<T> | null;
  productSize?: ProductSizesType<T> | null;
  salesOrderConfirmationHeader?: SalesOrderConfirmationHeadersType<T> | null;
  deliveryTerms?: DeliveryTermsType<T> | null;
  bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLinesType<T>[];
}
