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
import type { RetailTransactionSalesLinesV2Api } from './RetailTransactionSalesLinesV2Api';
import { NoYes } from './NoYes';
import { RetailItemTransactionCode } from './RetailItemTransactionCode';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailInventStatusSales } from './RetailInventStatusSales';
import { RetailReturnTrackingStatusType } from './RetailReturnTrackingStatusType';

/**
 * This class represents the entity "RetailTransactionSalesLinesV2" of service "d365_metadata".
 */
export class RetailTransactionSalesLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionSalesLinesV2Type<T>
{
  /**
   * Technical entity name for RetailTransactionSalesLinesV2.
   */
  static override _entityName = 'RetailTransactionSalesLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionSalesLinesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'Terminal',
    'TransactionNumber',
    'LineNumber',
    'OperatingUnitNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Discount.
   */
  declare customerDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Receipt Date.
   */
  declare requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cash Discount Amount.
   */
  declare cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Logistics Postal Address Valid From.
   */
  declare logisticsPostalAddressValidFrom: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Original Item Sales Tax Group.
   * @nullable
   */
  declare originalItemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Site Id.
   * @nullable
   */
  declare siteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Email Address Content.
   * @nullable
   */
  declare retailEmailAddressContent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Size.
   * @nullable
   */
  declare itemSize?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mode Of Delivery.
   * @nullable
   */
  declare modeOfDelivery?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Reports.
   * @nullable
   */
  declare skipReports?: NoYes | null;
  /**
   * Warehouse.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Start Time.
   */
  declare pickupStartTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Total Discount.
   */
  declare totalDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Exempt Price Inclusive Original Price.
   */
  declare taxExemptPriceInclusiveOriginalPrice: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Is Linked Product Not Original.
   * @nullable
   */
  declare isLinkedProductNotOriginal?: NoYes | null;
  /**
   * Discount Amount Without Tax.
   */
  declare discountAmountWithoutTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Net Price.
   */
  declare netPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Groups.
   * @nullable
   */
  declare priceGroups?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfid Tag Id.
   * @nullable
   */
  declare rfidTagId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variant Number.
   * @nullable
   */
  declare variantNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Hierarchy Name.
   * @nullable
   */
  declare categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Fixed Price Charges.
   */
  declare fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Price Inclusive Reduction Amount.
   */
  declare taxExemptPriceInclusiveReductionAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Price In Bar Code.
   * @nullable
   */
  declare priceInBarCode?: NoYes | null;
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
   * Item Relation.
   * @nullable
   */
  declare itemRelation?: DeserializedType<T, 'Edm.String'> | null;
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
   * Item Config Id.
   * @nullable
   */
  declare itemConfigId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Operating Unit Number.
   * @nullable
   */
  declare returnOperatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount.
   */
  declare lineDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Net Amount Inclusive Tax.
   */
  declare netAmountInclusiveTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Status.
   * @nullable
   */
  declare inventoryStatus?: RetailInventStatusSales | null;
  /**
   * Line Manual Discount Percentage.
   */
  declare lineManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gift Card.
   * @nullable
   */
  declare giftCard?: NoYes | null;
  /**
   * Channel Listing Id.
   * @nullable
   */
  declare channelListingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Amount.
   */
  declare netAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Color.
   * @nullable
   */
  declare itemColor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Price Change.
   * @nullable
   */
  declare isPriceChange?: NoYes | null;
  /**
   * Bar Code.
   * @nullable
   */
  declare barCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Quantity.
   */
  declare unitQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Manual Discount Amount.
   */
  declare lineManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Standard Net Price.
   */
  declare standardNetPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Version.
   * @nullable
   */
  declare itemVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Terminal.
   * @nullable
   */
  declare returnTerminal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Weight Product.
   * @nullable
   */
  declare isWeightProduct?: NoYes | null;
  /**
   * Logistic Location Id.
   * @nullable
   */
  declare logisticLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Scale Product.
   * @nullable
   */
  declare isScaleProduct?: NoYes | null;
  /**
   * Is Original Of Linked Product List.
   * @nullable
   */
  declare isOriginalOfLinkedProductList?: NoYes | null;
  /**
   * Item Style.
   * @nullable
   */
  declare itemStyle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Number.
   * @nullable
   */
  declare receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Percentage Discount.
   */
  declare linePercentageDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reason Code Discount.
   */
  declare reasonCodeDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Info Code Line Num.
   */
  declare totalDiscountInfoCodeLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Keyboard Product Entry.
   * @nullable
   */
  declare keyboardProductEntry?: NoYes | null;
  /**
   * Cancelled Transaction Number.
   * @nullable
   */
  declare cancelledTransactionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Return No Sale.
   * @nullable
   */
  declare isReturnNoSale?: NoYes | null;
  /**
   * Electronic Delivery Email.
   * @nullable
   */
  declare electronicDeliveryEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
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
   * Is Line Discounted.
   * @nullable
   */
  declare isLineDiscounted?: NoYes | null;
  /**
   * Shelf Number.
   * @nullable
   */
  declare shelfNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Serial Number.
   * @nullable
   */
  declare serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Number.
   * @nullable
   */
  declare offerNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Section Number.
   * @nullable
   */
  declare sectionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Weight Manually Entered.
   * @nullable
   */
  declare isWeightManuallyEntered?: NoYes | null;
  /**
   * Discount Amount For Printing.
   */
  declare discountAmountForPrinting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Invoice Discount Amount.
   */
  declare customerInvoiceDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Periodic Discount Group.
   * @nullable
   */
  declare periodicDiscountGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup End Time.
   */
  declare pickupEndTime: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailTransactionSalesLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionSalesLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  customerDiscount: DeserializedType<T, 'Edm.Decimal'>;
  requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  logisticsPostalAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  originalItemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  siteId?: DeserializedType<T, 'Edm.String'> | null;
  retailEmailAddressContent?: DeserializedType<T, 'Edm.String'> | null;
  itemSize?: DeserializedType<T, 'Edm.String'> | null;
  modeOfDelivery?: DeserializedType<T, 'Edm.String'> | null;
  skipReports?: NoYes | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  pickupStartTime: DeserializedType<T, 'Edm.Int32'>;
  totalDiscount: DeserializedType<T, 'Edm.Decimal'>;
  taxExemptPriceInclusiveOriginalPrice: DeserializedType<T, 'Edm.Decimal'>;
  isLinkedProductNotOriginal?: NoYes | null;
  discountAmountWithoutTax: DeserializedType<T, 'Edm.Decimal'>;
  netPrice: DeserializedType<T, 'Edm.Decimal'>;
  priceGroups?: DeserializedType<T, 'Edm.String'> | null;
  rfidTagId?: DeserializedType<T, 'Edm.String'> | null;
  variantNumber?: DeserializedType<T, 'Edm.String'> | null;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  transactionCode?: RetailItemTransactionCode | null;
  totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptPriceInclusiveReductionAmount: DeserializedType<T, 'Edm.Decimal'>;
  priceInBarCode?: NoYes | null;
  lotId?: DeserializedType<T, 'Edm.String'> | null;
  returnQuantity: DeserializedType<T, 'Edm.Decimal'>;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  originalPrice: DeserializedType<T, 'Edm.Decimal'>;
  itemRelation?: DeserializedType<T, 'Edm.String'> | null;
  requestedShipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transactionStatus?: RetailEntryStatus | null;
  itemConfigId?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  returnOperatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscount: DeserializedType<T, 'Edm.Decimal'>;
  netAmountInclusiveTax: DeserializedType<T, 'Edm.Decimal'>;
  inventoryStatus?: RetailInventStatusSales | null;
  lineManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  giftCard?: NoYes | null;
  channelListingId?: DeserializedType<T, 'Edm.String'> | null;
  netAmount: DeserializedType<T, 'Edm.Decimal'>;
  itemColor?: DeserializedType<T, 'Edm.String'> | null;
  isPriceChange?: NoYes | null;
  barCode?: DeserializedType<T, 'Edm.String'> | null;
  unitQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lineManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  standardNetPrice: DeserializedType<T, 'Edm.Decimal'>;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemVersion?: DeserializedType<T, 'Edm.String'> | null;
  returnTerminal?: DeserializedType<T, 'Edm.String'> | null;
  isWeightProduct?: NoYes | null;
  logisticLocationId?: DeserializedType<T, 'Edm.String'> | null;
  isScaleProduct?: NoYes | null;
  isOriginalOfLinkedProductList?: NoYes | null;
  itemStyle?: DeserializedType<T, 'Edm.String'> | null;
  receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  linePercentageDiscount: DeserializedType<T, 'Edm.Decimal'>;
  reasonCodeDiscount: DeserializedType<T, 'Edm.Decimal'>;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountInfoCodeLineNum: DeserializedType<T, 'Edm.Decimal'>;
  keyboardProductEntry?: NoYes | null;
  cancelledTransactionNumber?: DeserializedType<T, 'Edm.String'> | null;
  isReturnNoSale?: NoYes | null;
  electronicDeliveryEmail?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  returnTransactionNumber?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  originalSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  isLineDiscounted?: NoYes | null;
  shelfNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  offerNumber?: DeserializedType<T, 'Edm.String'> | null;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  sectionNumber?: DeserializedType<T, 'Edm.String'> | null;
  isWeightManuallyEntered?: NoYes | null;
  discountAmountForPrinting: DeserializedType<T, 'Edm.Decimal'>;
  customerInvoiceDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  productScanned?: NoYes | null;
  periodicDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  returnTrackingStatus?: RetailReturnTrackingStatusType | null;
  returnLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  periodicDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  periodicDiscountGroup?: DeserializedType<T, 'Edm.String'> | null;
  pickupEndTime: DeserializedType<T, 'Edm.Int32'>;
}
