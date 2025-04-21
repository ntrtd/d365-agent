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
import type { RetailTransactionSalesTransBiEntitiesApi } from './RetailTransactionSalesTransBiEntitiesApi';
import { NoYes } from './NoYes';
import { RetailGiftCardSalesLineOperation } from './RetailGiftCardSalesLineOperation';
import { RetailItemTransactionCode } from './RetailItemTransactionCode';
import { RetailInventStatusSales } from './RetailInventStatusSales';
import { McrLineType } from './McrLineType';
import { McrUpSellOrigin } from './McrUpSellOrigin';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailPeriodicDiscType } from './RetailPeriodicDiscType';
import { RetailGiftCardType } from './RetailGiftCardType';
import { RetailReturnTrackingStatusType } from './RetailReturnTrackingStatusType';

/**
 * This class represents the entity "RetailTransactionSalesTransBIEntities" of service "d365_metadata".
 */
export class RetailTransactionSalesTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionSalesTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionSalesTransBiEntities.
   */
  static override _entityName = 'RetailTransactionSalesTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionSalesTransBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'store',
    'terminalId',
    'transactionId',
    'lineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Scale Item.
   * @nullable
   */
  declare scaleItem?: NoYes | null;
  /**
   * Disc Amount.
   */
  declare discAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cancelled Transaction Id.
   * @nullable
   */
  declare cancelledTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Markup.
   */
  declare salesMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receipt Id.
   * @nullable
   */
  declare receiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loyalty Disc Amount Ru.
   */
  declare loyaltyDiscAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse Location.
   * @nullable
   */
  declare warehouseLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Periodic Disc Group.
   * @nullable
   */
  declare periodicDiscGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Barcode.
   * @nullable
   */
  declare barcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Invent Trans Id.
   * @nullable
   */
  declare parentInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Serial Id.
   * @nullable
   */
  declare inventSerialId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counter.
   */
  declare counter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Continuity Schedule Id.
   * @nullable
   */
  declare continuityScheduleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Calculated Wms Location Id.
   * @nullable
   */
  declare postingCalculatedWmsLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Qty.
   */
  declare unitQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shipping Date Requested.
   */
  declare shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Section.
   * @nullable
   */
  declare section?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Giftcard.
   * @nullable
   */
  declare giftcard?: NoYes | null;
  /**
   * Price In Barcode.
   * @nullable
   */
  declare priceInBarcode?: NoYes | null;
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
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Rate Percent.
   */
  declare taxRatePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Block Qty.
   */
  declare blockQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * License Plate.
   * @nullable
   */
  declare licensePlate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Store.
   * @nullable
   */
  declare returnStore?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfid Tag Id.
   * @nullable
   */
  declare rfidTagId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shift Date.
   */
  declare shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cust Account Async.
   * @nullable
   */
  declare custAccountAsync?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Qty.
   */
  declare returnQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Disc Amount Without Tax.
   */
  declare discAmountWithoutTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Disc Offer Id.
   * @nullable
   */
  declare discOfferId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Staff Id.
   * @nullable
   */
  declare staffId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disc Group Id.
   * @nullable
   */
  declare discGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Price.
   */
  declare originalPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Periodic Percentage Discount.
   */
  declare periodicPercentageDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pump Id.
   */
  declare pumpId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Return Terminal Id.
   * @nullable
   */
  declare returnTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Line Num.
   */
  declare returnLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gift Card Operation.
   * @nullable
   */
  declare giftCardOperation?: RetailGiftCardSalesLineOperation | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Original Of Linked Item List.
   * @nullable
   */
  declare originalOfLinkedItemList?: NoYes | null;
  /**
   * Net Amount.
   */
  declare netAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Service Accounting Code In.
   * @nullable
   */
  declare serviceAccountingCodeIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Price Inclusive Reduction Amount.
   */
  declare taxExemptPriceInclusiveReductionAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Infocode Disc Amount.
   */
  declare infocodeDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return No Sale.
   * @nullable
   */
  declare returnNoSale?: NoYes | null;
  /**
   * Prescription Id.
   * @nullable
   */
  declare prescriptionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Std Net Price.
   */
  declare stdNetPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Electronic Delivery Email Content.
   * @nullable
   */
  declare electronicDeliveryEmailContent?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: RetailItemTransactionCode | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Status Sales.
   * @nullable
   */
  declare inventStatusSales?: RetailInventStatusSales | null;
  /**
   * Original Tax Group.
   * @nullable
   */
  declare originalTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Batch Id.
   * @nullable
   */
  declare inventBatchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: McrLineType | null;
  /**
   * Is Tax Exempt By Tax Override.
   * @nullable
   */
  declare isTaxExemptByTaxOverride?: NoYes | null;
  /**
   * Up Sell Origin.
   * @nullable
   */
  declare upSellOrigin?: McrUpSellOrigin | null;
  /**
   * Tax Rate Type.
   * @nullable
   */
  declare taxRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Disc Amount.
   */
  declare custDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Disc Pct.
   */
  declare totalDiscPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cust Invoice Disc Amount.
   */
  declare custInvoiceDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hsn Code In.
   * @nullable
   */
  declare hsnCodeIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loyalty Disc Pct Ru.
   */
  declare loyaltyDiscPctRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Dsc Amount.
   */
  declare lineDscAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Manual Discount Percentage.
   */
  declare lineManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Change.
   * @nullable
   */
  declare priceChange?: NoYes | null;
  /**
   * Tender Discount Percentage.
   */
  declare tenderDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Id Scanned.
   * @nullable
   */
  declare itemIdScanned?: NoYes | null;
  /**
   * Disc Amount From Std Price.
   */
  declare discAmountFromStdPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Disc Info Code Line Num.
   */
  declare totalDiscInfoCodeLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Manual Discount Amount.
   */
  declare lineManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Rounded Amount.
   */
  declare totalRoundedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shelf.
   * @nullable
   */
  declare shelf?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Price.
   */
  declare netPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Posting Group.
   * @nullable
   */
  declare itemPostingGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Id.
   * @nullable
   */
  declare statementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Date Requested.
   */
  declare receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Amount Incl Tax.
   */
  declare netAmountInclTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Was Discounted.
   * @nullable
   */
  declare lineWasDiscounted?: NoYes | null;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dlv Mode.
   * @nullable
   */
  declare dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Percentage Discount.
   */
  declare linePercentageDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shift.
   * @nullable
   */
  declare shift?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variant Id.
   * @nullable
   */
  declare variantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Listing Id.
   * @nullable
   */
  declare listingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Installment Eligible.
   * @nullable
   */
  declare installmentEligible?: NoYes | null;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staff.
   * @nullable
   */
  declare staff?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Invent Dim Id.
   * @nullable
   */
  declare returnInventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Weight Manually Entered.
   * @nullable
   */
  declare weightManuallyEntered?: NoYes | null;
  /**
   * Sales Group.
   * @nullable
   */
  declare salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Corrected Line.
   * @nullable
   */
  declare itemCorrectedLine?: NoYes | null;
  /**
   * Return Transaction Id.
   * @nullable
   */
  declare returnTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Delivery Email.
   * @nullable
   */
  declare electronicDeliveryEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Keyboard Item Entry.
   * @nullable
   */
  declare keyboardItemEntry?: NoYes | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Id.
   * @nullable
   */
  declare sourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replicated.
   * @nullable
   */
  declare replicated?: NoYes | null;
  /**
   * Trans Time.
   */
  declare transTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Linked Item Not Original.
   * @nullable
   */
  declare linkedItemNotOriginal?: NoYes | null;
  /**
   * Non Gst In.
   * @nullable
   */
  declare nonGstIn?: NoYes | null;
  /**
   * Periodic Disc Type.
   * @nullable
   */
  declare periodicDiscType?: RetailPeriodicDiscType | null;
  /**
   * Gift Card Type.
   * @nullable
   */
  declare giftCardType?: RetailGiftCardType | null;
  /**
   * Invent Status.
   * @nullable
   */
  declare inventStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempt In.
   * @nullable
   */
  declare exemptIn?: NoYes | null;
  /**
   * Periodic Disc Amount.
   */
  declare periodicDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Weight Item.
   * @nullable
   */
  declare weightItem?: NoYes | null;
  /**
   * Tax Override Code.
   * @nullable
   */
  declare taxOverrideCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Amount For Printing.
   */
  declare discountAmountForPrinting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tender Discount Amount.
   */
  declare tenderDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Tracking Status.
   * @nullable
   */
  declare returnTrackingStatus?: RetailReturnTrackingStatusType | null;
  /**
   * Total Disc Amount.
   */
  declare totalDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Tax Item Group.
   * @nullable
   */
  declare originalTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fulfillment Store Id.
   * @nullable
   */
  declare fulfillmentStoreId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Up Sell Origin Offer Id.
   * @nullable
   */
  declare upSellOriginOfferId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup End Time.
   */
  declare pickupEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Skip Sales Line Ru.
   * @nullable
   */
  declare skipSalesLineRu?: NoYes | null;

  constructor(_entityApi: RetailTransactionSalesTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionSalesTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  scaleItem?: NoYes | null;
  discAmount: DeserializedType<T, 'Edm.Decimal'>;
  cancelledTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  salesMarkup: DeserializedType<T, 'Edm.Decimal'>;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyDiscAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  warehouseLocation?: DeserializedType<T, 'Edm.String'> | null;
  periodicDiscGroup?: DeserializedType<T, 'Edm.String'> | null;
  barcode?: DeserializedType<T, 'Edm.String'> | null;
  parentInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  inventSerialId?: DeserializedType<T, 'Edm.String'> | null;
  counter: DeserializedType<T, 'Edm.Int32'>;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  continuityScheduleId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  postingCalculatedWmsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  unitQty: DeserializedType<T, 'Edm.Decimal'>;
  shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  section?: DeserializedType<T, 'Edm.String'> | null;
  giftcard?: NoYes | null;
  priceInBarcode?: NoYes | null;
  giftCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  pickupStartTime: DeserializedType<T, 'Edm.Int32'>;
  taxExemptPriceInclusiveOriginalPrice: DeserializedType<T, 'Edm.Decimal'>;
  giftCardBalance: DeserializedType<T, 'Edm.Decimal'>;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  taxRatePercent: DeserializedType<T, 'Edm.Decimal'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  blockQty: DeserializedType<T, 'Edm.Decimal'>;
  licensePlate?: DeserializedType<T, 'Edm.String'> | null;
  returnStore?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  rfidTagId?: DeserializedType<T, 'Edm.String'> | null;
  shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  custAccountAsync?: DeserializedType<T, 'Edm.String'> | null;
  returnQty: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discAmountWithoutTax: DeserializedType<T, 'Edm.Decimal'>;
  discOfferId?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  staffId?: DeserializedType<T, 'Edm.String'> | null;
  discGroupId?: DeserializedType<T, 'Edm.String'> | null;
  originalPrice: DeserializedType<T, 'Edm.Decimal'>;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  periodicPercentageDiscount: DeserializedType<T, 'Edm.Decimal'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  pumpId: DeserializedType<T, 'Edm.Int32'>;
  returnTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  returnLineNum: DeserializedType<T, 'Edm.Decimal'>;
  giftCardOperation?: RetailGiftCardSalesLineOperation | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  originalOfLinkedItemList?: NoYes | null;
  netAmount: DeserializedType<T, 'Edm.Decimal'>;
  serviceAccountingCodeIn?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptPriceInclusiveReductionAmount: DeserializedType<T, 'Edm.Decimal'>;
  infocodeDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  returnNoSale?: NoYes | null;
  prescriptionId?: DeserializedType<T, 'Edm.String'> | null;
  stdNetPrice: DeserializedType<T, 'Edm.Decimal'>;
  electronicDeliveryEmailContent?: DeserializedType<T, 'Edm.String'> | null;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  transactionCode?: RetailItemTransactionCode | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  inventStatusSales?: RetailInventStatusSales | null;
  originalTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  inventBatchId?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: McrLineType | null;
  isTaxExemptByTaxOverride?: NoYes | null;
  upSellOrigin?: McrUpSellOrigin | null;
  taxRateType?: DeserializedType<T, 'Edm.String'> | null;
  custDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalDiscPct: DeserializedType<T, 'Edm.Decimal'>;
  transactionStatus?: RetailEntryStatus | null;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  custInvoiceDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  hsnCodeIn?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyDiscPctRu: DeserializedType<T, 'Edm.Decimal'>;
  lineDscAmount: DeserializedType<T, 'Edm.Decimal'>;
  lineManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  priceChange?: NoYes | null;
  tenderDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  itemIdScanned?: NoYes | null;
  discAmountFromStdPrice: DeserializedType<T, 'Edm.Decimal'>;
  totalDiscInfoCodeLineNum: DeserializedType<T, 'Edm.Decimal'>;
  lineManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  totalRoundedAmount: DeserializedType<T, 'Edm.Decimal'>;
  shelf?: DeserializedType<T, 'Edm.String'> | null;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  netPrice: DeserializedType<T, 'Edm.Decimal'>;
  itemPostingGroup?: DeserializedType<T, 'Edm.String'> | null;
  statementId?: DeserializedType<T, 'Edm.String'> | null;
  receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  netAmountInclTax: DeserializedType<T, 'Edm.Decimal'>;
  lineWasDiscounted?: NoYes | null;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  linePercentageDiscount: DeserializedType<T, 'Edm.Decimal'>;
  shift?: DeserializedType<T, 'Edm.String'> | null;
  variantId?: DeserializedType<T, 'Edm.String'> | null;
  listingId?: DeserializedType<T, 'Edm.String'> | null;
  installmentEligible?: NoYes | null;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  staff?: DeserializedType<T, 'Edm.String'> | null;
  returnInventDimId?: DeserializedType<T, 'Edm.String'> | null;
  weightManuallyEntered?: NoYes | null;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  itemCorrectedLine?: NoYes | null;
  returnTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  electronicDeliveryEmail?: DeserializedType<T, 'Edm.String'> | null;
  keyboardItemEntry?: NoYes | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceId?: DeserializedType<T, 'Edm.String'> | null;
  replicated?: NoYes | null;
  transTime: DeserializedType<T, 'Edm.Int32'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  linkedItemNotOriginal?: NoYes | null;
  nonGstIn?: NoYes | null;
  periodicDiscType?: RetailPeriodicDiscType | null;
  giftCardType?: RetailGiftCardType | null;
  inventStatus?: DeserializedType<T, 'Edm.String'> | null;
  exemptIn?: NoYes | null;
  periodicDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  weightItem?: NoYes | null;
  taxOverrideCode?: DeserializedType<T, 'Edm.String'> | null;
  discountAmountForPrinting: DeserializedType<T, 'Edm.Decimal'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  tenderDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  returnTrackingStatus?: RetailReturnTrackingStatusType | null;
  totalDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  originalTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  fulfillmentStoreId?: DeserializedType<T, 'Edm.String'> | null;
  upSellOriginOfferId?: DeserializedType<T, 'Edm.String'> | null;
  pickupEndTime: DeserializedType<T, 'Edm.Int32'>;
  skipSalesLineRu?: NoYes | null;
}
