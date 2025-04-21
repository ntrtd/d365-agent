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
import type { RetailTransactionAuditableSalesLinesApi } from './RetailTransactionAuditableSalesLinesApi';
import { RetailTransactionValidationStatus } from './RetailTransactionValidationStatus';
import { NoYes } from './NoYes';
import { RetailItemTransactionCode } from './RetailItemTransactionCode';
import { RetailGiftCardSalesLineOperation } from './RetailGiftCardSalesLineOperation';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';
import { RetailGiftCardType } from './RetailGiftCardType';
import { RetailReturnTrackingStatusType } from './RetailReturnTrackingStatusType';
import { RetailInventStatusSales } from './RetailInventStatusSales';
import {
  RetailTransactionAuditableTaxLines,
  RetailTransactionAuditableTaxLinesType
} from './RetailTransactionAuditableTaxLines';
import {
  RetailTransactionAuditableChargeLines,
  RetailTransactionAuditableChargeLinesType
} from './RetailTransactionAuditableChargeLines';
import {
  RetailTransactionAuditableAddressLines,
  RetailTransactionAuditableAddressLinesType
} from './RetailTransactionAuditableAddressLines';
import {
  RetailTransactionsAuditable,
  RetailTransactionsAuditableType
} from './RetailTransactionsAuditable';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  RetailTransactionAuditableDiscountLines,
  RetailTransactionAuditableDiscountLinesType
} from './RetailTransactionAuditableDiscountLines';

/**
 * This class represents the entity "RetailTransactionAuditableSalesLines" of service "d365_metadata".
 */
export class RetailTransactionAuditableSalesLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAuditableSalesLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionAuditableSalesLines.
   */
  static override _entityName = 'RetailTransactionAuditableSalesLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAuditableSalesLines entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'StoreNumber',
    'RegisterNumber',
    'TransactionId',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Register Number.
   */
  declare registerNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Site.
   * @nullable
   */
  declare site?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Receipt Date.
   */
  declare requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Original Item Sales Tax Group.
   * @nullable
   */
  declare originalItemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Email Address Content.
   * @nullable
   */
  declare retailEmailAddressContent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Validation Status.
   * @nullable
   */
  declare headerValidationStatus?: RetailTransactionValidationStatus | null;
  /**
   * Original Of Linked Product List.
   * @nullable
   */
  declare originalOfLinkedProductList?: NoYes | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mode Of Delivery.
   * @nullable
   */
  declare modeOfDelivery?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Amount Including Tax.
   */
  declare netAmountIncludingTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Number.
   * @nullable
   */
  declare batchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Number.
   * @nullable
   */
  declare giftCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Start Time.
   */
  declare pickupStartTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Staff.
   * @nullable
   */
  declare salesStaff?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Price Inclusive Original Price.
   */
  declare taxExemptPriceInclusiveOriginalPrice: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Gift Card Balance.
   */
  declare giftCardBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Barcode.
   * @nullable
   */
  declare barcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Override.
   * @nullable
   */
  declare salesTaxOverride?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Change.
   * @nullable
   */
  declare priceChange?: NoYes | null;
  /**
   * Variant Number.
   * @nullable
   */
  declare variantNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Dimension Number.
   * @nullable
   */
  declare inventoryDimensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Store.
   * @nullable
   */
  declare returnStore?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Time.
   */
  declare transactionTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: RetailItemTransactionCode | null;
  /**
   * Total Discount Percentage.
   */
  declare totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Price Charges.
   */
  declare fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gift Card Operation.
   * @nullable
   */
  declare giftCardOperation?: RetailGiftCardSalesLineOperation | null;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Transaction Type.
   * @nullable
   */
  declare headerTransactionType?: RetailTransactionType | null;
  /**
   * Tax Exempt Price Inclusive Reduction Amount.
   */
  declare taxExemptPriceInclusiveReductionAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Lot Id.
   * @nullable
   */
  declare lotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Quantity.
   */
  declare returnQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Price.
   */
  declare originalPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Ship Date.
   */
  declare requestedShipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Is Tax Exempt By Tax Override.
   * @nullable
   */
  declare isTaxExemptByTaxOverride?: NoYes | null;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Header Asynchronous Order Status.
   * @nullable
   */
  declare headerAsynchronousOrderStatus?: RetailTransactionOrderStatusType | null;
  /**
   * Line Manual Discount Percentage.
   */
  declare lineManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Net Amount.
   */
  declare netAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Manual Discount Amount.
   */
  declare lineManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Price In Barcode.
   * @nullable
   */
  declare priceInBarcode?: NoYes | null;
  /**
   * Receipt Number.
   * @nullable
   */
  declare receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Linked Product Not Original.
   * @nullable
   */
  declare linkedProductNotOriginal?: NoYes | null;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Keyboard Product Entry.
   * @nullable
   */
  declare keyboardProductEntry?: NoYes | null;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Group.
   * @nullable
   */
  declare salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Number.
   * @nullable
   */
  declare statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Register Number.
   * @nullable
   */
  declare returnRegisterNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Giftcard.
   * @nullable
   */
  declare giftcard?: NoYes | null;
  /**
   * Fulfillment Store Number.
   * @nullable
   */
  declare fulfillmentStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Amount.
   */
  declare salesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Transaction Number.
   * @nullable
   */
  declare returnTransactionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Sales Tax Group.
   * @nullable
   */
  declare originalSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Type.
   * @nullable
   */
  declare giftCardType?: RetailGiftCardType | null;
  /**
   * Serial Number.
   * @nullable
   */
  declare serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Amount Excluding Tax.
   */
  declare discountAmountExcludingTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Scanned.
   * @nullable
   */
  declare productScanned?: NoYes | null;
  /**
   * Periodic Discount Percentage.
   */
  declare periodicDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Tracking Status.
   * @nullable
   */
  declare returnTrackingStatus?: RetailReturnTrackingStatusType | null;
  /**
   * Return Line Number.
   */
  declare returnLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Periodic Discount Amount.
   */
  declare periodicDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Status Sales.
   * @nullable
   */
  declare inventoryStatusSales?: RetailInventStatusSales | null;
  /**
   * Pickup End Time.
   */
  declare pickupEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Inventory Dimension For Return.
   * @nullable
   */
  declare inventoryDimensionForReturn?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link RetailTransactionAuditableTaxLines} entity.
   */
  declare retailTransactionAuditableTaxLine: RetailTransactionAuditableTaxLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTransactionAuditableChargeLines} entity.
   */
  declare retailTransactionAuditableChargeLine: RetailTransactionAuditableChargeLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTransactionAuditableAddressLines} entity.
   */
  declare retailTransactionAuditableAddressLine: RetailTransactionAuditableAddressLines<T>[];
  /**
   * One-to-one navigation property to the {@link RetailTransactionsAuditable} entity.
   */
  declare retailTransactionAuditable?: RetailTransactionsAuditable<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-many navigation property to the {@link RetailTransactionAuditableDiscountLines} entity.
   */
  declare retailTransactionAuditableDiscountLine: RetailTransactionAuditableDiscountLines<T>[];

  constructor(_entityApi: RetailTransactionAuditableSalesLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAuditableSalesLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  registerNumber: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  site?: DeserializedType<T, 'Edm.String'> | null;
  requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  originalItemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  retailEmailAddressContent?: DeserializedType<T, 'Edm.String'> | null;
  headerValidationStatus?: RetailTransactionValidationStatus | null;
  originalOfLinkedProductList?: NoYes | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  modeOfDelivery?: DeserializedType<T, 'Edm.String'> | null;
  netAmountIncludingTax: DeserializedType<T, 'Edm.Decimal'>;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  batchNumber?: DeserializedType<T, 'Edm.String'> | null;
  giftCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  pickupStartTime: DeserializedType<T, 'Edm.Int32'>;
  salesStaff?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptPriceInclusiveOriginalPrice: DeserializedType<T, 'Edm.Decimal'>;
  giftCardBalance: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  barcode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxOverride?: DeserializedType<T, 'Edm.String'> | null;
  priceChange?: NoYes | null;
  variantNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryDimensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnStore?: DeserializedType<T, 'Edm.String'> | null;
  transactionTime: DeserializedType<T, 'Edm.Int32'>;
  transactionCode?: RetailItemTransactionCode | null;
  totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  giftCardOperation?: RetailGiftCardSalesLineOperation | null;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  headerTransactionType?: RetailTransactionType | null;
  taxExemptPriceInclusiveReductionAmount: DeserializedType<T, 'Edm.Decimal'>;
  lotId?: DeserializedType<T, 'Edm.String'> | null;
  returnQuantity: DeserializedType<T, 'Edm.Decimal'>;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  originalPrice: DeserializedType<T, 'Edm.Decimal'>;
  requestedShipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transactionStatus?: RetailEntryStatus | null;
  isTaxExemptByTaxOverride?: NoYes | null;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  headerAsynchronousOrderStatus?: RetailTransactionOrderStatusType | null;
  lineManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  netAmount: DeserializedType<T, 'Edm.Decimal'>;
  lineManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  priceInBarcode?: NoYes | null;
  receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  linkedProductNotOriginal?: NoYes | null;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  keyboardProductEntry?: NoYes | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnRegisterNumber?: DeserializedType<T, 'Edm.String'> | null;
  giftcard?: NoYes | null;
  fulfillmentStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  returnTransactionNumber?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  originalSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  giftCardType?: RetailGiftCardType | null;
  serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountAmountExcludingTax: DeserializedType<T, 'Edm.Decimal'>;
  productScanned?: NoYes | null;
  periodicDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  returnTrackingStatus?: RetailReturnTrackingStatusType | null;
  returnLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  periodicDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  inventoryStatusSales?: RetailInventStatusSales | null;
  pickupEndTime: DeserializedType<T, 'Edm.Int32'>;
  inventoryDimensionForReturn?: DeserializedType<T, 'Edm.String'> | null;
  retailTransactionAuditableTaxLine: RetailTransactionAuditableTaxLinesType<T>[];
  retailTransactionAuditableChargeLine: RetailTransactionAuditableChargeLinesType<T>[];
  retailTransactionAuditableAddressLine: RetailTransactionAuditableAddressLinesType<T>[];
  retailTransactionAuditable?: RetailTransactionsAuditableType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  retailTransactionAuditableDiscountLine: RetailTransactionAuditableDiscountLinesType<T>[];
}
