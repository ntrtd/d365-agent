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
import type { SalesOrderLinesV3Api } from './SalesOrderLinesV3Api';
import { NoYes } from './NoYes';
import { SalesStatus } from './SalesStatus';
import { ItemReservation } from './ItemReservation';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { McrGiftCardType } from './McrGiftCardType';
import { Timezone } from './Timezone';
import { MpsFullRunCtpStatus } from './MpsFullRunCtpStatus';
import { SalesSalesOrderCreationMethod } from './SalesSalesOrderCreationMethod';
import { RetailFulfillmentLineStatus } from './RetailFulfillmentLineStatus';
import { SalesOrderHeaders, SalesOrderHeadersType } from './SalesOrderHeaders';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "SalesOrderLinesV3" of service "d365_metadata".
 */
export class SalesOrderLinesV3<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesOrderLinesV3Type<T>
{
  /**
   * Technical entity name for SalesOrderLinesV3.
   */
  static override _entityName = 'SalesOrderLinesV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesOrderLinesV3 entity.
   */
  static _keys = ['dataAreaId', 'InventoryLotId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Lot Id.
   */
  declare inventoryLotId: DeserializedType<T, 'Edm.String'>;
  /**
   * External Item Number.
   * @nullable
   */
  declare externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Requisition Number.
   * @nullable
   */
  declare customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Soft Reserved Externally.
   * @nullable
   */
  declare isSoftReservedExternally?: NoYes | null;
  /**
   * Delivery Sales Tax Group Code.
   * @nullable
   */
  declare deliverySalesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Calculated Manual Line Discount Percentage.
   */
  declare retailCalculatedManualLineDiscountPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Sales Order Line Status.
   * @nullable
   */
  declare salesOrderLineStatus?: SalesStatus | null;
  /**
   * Intrastat Port Id.
   * @nullable
   */
  declare intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Document Date.
   */
  declare customsDocumentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Skip Create Auto Charges.
   * @nullable
   */
  declare skipCreateAutoCharges?: NoYes | null;
  /**
   * Fin Tag Display Value.
   * @nullable
   */
  declare finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Reservation Method.
   * @nullable
   */
  declare inventoryReservationMethod?: ItemReservation | null;
  /**
   * Intrastat Transport Mode Code.
   * @nullable
   */
  declare intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Sales Tax Item Group Code.
   * @nullable
   */
  declare deliverySalesTaxItemGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Gift Card Buyer Email.
   * @nullable
   */
  declare giftCardBuyerEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfop Code.
   * @nullable
   */
  declare cfopCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Document Name.
   * @nullable
   */
  declare customsDocumentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Planning Priority.
   */
  declare planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Calculated Line Discount Percentage.
   */
  declare retailCalculatedLineDiscountPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Order Number.
   * @nullable
   */
  declare serviceOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Suframa Discount Percentage.
   */
  declare suframaDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Id.
   * @nullable
   */
  declare routeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allowed Overdelivery Percentage.
   */
  declare allowedOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Calculated Periodic Discount Amount.
   */
  declare retailCalculatedPeriodicDiscountAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Fixed Price Charges.
   */
  declare fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Multiline Discount Amount.
   */
  declare multilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Calculated Tender Discount Amount.
   */
  declare retailCalculatedTenderDiscountAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Inventory Service Reservation Id.
   * @nullable
   */
  declare inventoryServiceReservationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Intrastat Special Movement Code.
   * @nullable
   */
  declare intrastatSpecialMovementCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Requested Receipt Date.
   */
  declare requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Confirmed Receipt Date.
   */
  declare confirmedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customs Document Number.
   * @nullable
   */
  declare customsDocumentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Invoice Dimension Account Code.
   * @nullable
   */
  declare eInvoiceDimensionAccountCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bom Id.
   * @nullable
   */
  declare bomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Note Reason Code.
   * @nullable
   */
  declare creditNoteReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Recipient Email.
   * @nullable
   */
  declare giftCardRecipientEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Warehouse Location Id.
   * @nullable
   */
  declare shippingWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Catalog.
   */
  declare catalog: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Intrastat Statistics Procedure Code.
   * @nullable
   */
  declare intrastatStatisticsProcedureCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Intrastat Commodity Code.
   * @nullable
   */
  declare intrastatCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Number.
   * @nullable
   */
  declare salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Recipient Name.
   * @nullable
   */
  declare giftCardRecipientName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Rebate Calculation Exclude Line.
   * @nullable
   */
  declare willRebateCalculationExcludeLine?: NoYes | null;
  /**
   * Retail Calculated Line Discount Amount.
   */
  declare retailCalculatedLineDiscountAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Automatic Inventory Reservation Consider Batch Attributes.
   * @nullable
   */
  declare willAutomaticInventoryReservationConsiderBatchAttributes?: NoYes | null;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Withholding Tax Code Group Code.
   * @nullable
   */
  declare itemWithholdingTaxCodeGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Service Fiscal Information Code.
   * @nullable
   */
  declare serviceFiscalInformationCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission Sales Representative Group Id.
   * @nullable
   */
  declare commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ordered Catch Weight Quantity.
   */
  declare orderedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Street In Kana.
   * @nullable
   */
  declare deliveryAddressStreetInKana?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Price Locked.
   * @nullable
   */
  declare isPriceLocked?: NoYes | null;
  /**
   * Multiline Discount Percentage.
   */
  declare multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Rebate Product Group Id.
   * @nullable
   */
  declare salesRebateProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Creation Sequence Number.
   */
  declare lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Deliver Now.
   */
  declare salesDeliverNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Invoice Property Number.
   * @nullable
   */
  declare eInvoicePropertyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Calculated Tender Discount Percentage.
   */
  declare retailCalculatedTenderDiscountPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Order Line Reference.
   * @nullable
   */
  declare orderLineReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price Quantity.
   */
  declare salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Calculated Total Discount Amount.
   */
  declare retailCalculatedTotalDiscountAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Main Account Id Display Value.
   * @nullable
   */
  declare mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Intrastat Triangular Deal.
   * @nullable
   */
  declare isIntrastatTriangularDeal?: NoYes | null;
  /**
   * Retail Calculated Manual Line Discount Amount.
   */
  declare retailCalculatedManualLineDiscountAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Confirmed Shipping Date.
   */
  declare confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retail Calculated Total Discount Percentage.
   */
  declare retailCalculatedTotalDiscountPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Group Code.
   * @nullable
   */
  declare withholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Gift Card Number.
   * @nullable
   */
  declare giftCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Promising Method.
   * @nullable
   */
  declare salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Type.
   * @nullable
   */
  declare giftCardType?: McrGiftCardType | null;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Retail Calculated Periodic Discount Percentage.
   */
  declare retailCalculatedPeriodicDiscountPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Shipping Warehouse Id.
   * @nullable
   */
  declare shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Statistic Value.
   */
  declare intrastatStatisticValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gift Card Buyer Name.
   * @nullable
   */
  declare giftCardBuyerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Product Category Name.
   * @nullable
   */
  declare salesProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Line Stopped.
   * @nullable
   */
  declare isLineStopped?: NoYes | null;
  /**
   * Formatted Delvery Address.
   * @nullable
   */
  declare formattedDelveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Id.
   * @nullable
   */
  declare deliveryTermsId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customers Line Number.
   */
  declare customersLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Full Run Ctp Status.
   * @nullable
   */
  declare fullRunCtpStatus?: MpsFullRunCtpStatus | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fulfillment Store Id.
   * @nullable
   */
  declare fulfillmentStoreId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ngp Code.
   */
  declare ngpCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Exclude From Master Planning.
   * @nullable
   */
  declare excludeFromMasterPlanning?: NoYes | null;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Line Creation Method.
   * @nullable
   */
  declare salesOrderLineCreationMethod?: SalesSalesOrderCreationMethod | null;
  /**
   * Allowed Underdelivery Percentage.
   */
  declare allowedUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calculate Line Amount.
   * @nullable
   */
  declare calculateLineAmount?: NoYes | null;
  /**
   * Delivery Cfop Code.
   * @nullable
   */
  declare deliveryCfopCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Unit Symbol.
   * @nullable
   */
  declare packingUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Transaction Code.
   * @nullable
   */
  declare intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Item Group Code.
   * @nullable
   */
  declare salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Site Id.
   * @nullable
   */
  declare shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Sales Quantity.
   */
  declare orderedSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fulfillment Status.
   * @nullable
   */
  declare fulfillmentStatus?: RetailFulfillmentLineStatus | null;
  /**
   * Project Line Property Id.
   * @nullable
   */
  declare projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address City In Kana.
   * @nullable
   */
  declare deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Gift Message.
   * @nullable
   */
  declare giftCardGiftMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Inventory Status Id.
   * @nullable
   */
  declare orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Order Specific.
   * @nullable
   */
  declare isDeliveryAddressOrderSpecific?: NoYes | null;
  /**
   * Requested Shipping Date.
   */
  declare requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Type Id.
   * @nullable
   */
  declare fiscalDocumentTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderHeaders} entity.
   */
  declare salesOrderHeader?: SalesOrderHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: SalesOrderLinesV3Api<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderLinesV3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryLotId: DeserializedType<T, 'Edm.String'>;
  externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  isSoftReservedExternally?: NoYes | null;
  deliverySalesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  retailCalculatedManualLineDiscountPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  salesOrderLineStatus?: SalesStatus | null;
  intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  customsDocumentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  skipCreateAutoCharges?: NoYes | null;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  inventoryReservationMethod?: ItemReservation | null;
  intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  deliverySalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  giftCardBuyerEmail?: DeserializedType<T, 'Edm.String'> | null;
  cfopCode?: DeserializedType<T, 'Edm.String'> | null;
  customsDocumentName?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  retailCalculatedLineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  suframaDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  routeId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  allowedOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  retailCalculatedPeriodicDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  multilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  retailCalculatedTenderDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  inventoryServiceReservationId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatSpecialMovementCode?: DeserializedType<T, 'Edm.String'> | null;
  requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  confirmedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customsDocumentNumber?: DeserializedType<T, 'Edm.String'> | null;
  eInvoiceDimensionAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  bomId?: DeserializedType<T, 'Edm.String'> | null;
  creditNoteReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  giftCardRecipientEmail?: DeserializedType<T, 'Edm.String'> | null;
  shippingWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  catalog: DeserializedType<T, 'Edm.Int64'>;
  intrastatStatisticsProcedureCode?: DeserializedType<T, 'Edm.String'> | null;
  intrastatCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  giftCardRecipientName?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  willRebateCalculationExcludeLine?: NoYes | null;
  retailCalculatedLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  willAutomaticInventoryReservationConsiderBatchAttributes?: NoYes | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  itemWithholdingTaxCodeGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  serviceFiscalInformationCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  orderedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  isPriceLocked?: NoYes | null;
  multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesRebateProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  salesDeliverNow: DeserializedType<T, 'Edm.Decimal'>;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  eInvoicePropertyNumber?: DeserializedType<T, 'Edm.String'> | null;
  retailCalculatedTenderDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  orderLineReference?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  retailCalculatedTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  isIntrastatTriangularDeal?: NoYes | null;
  retailCalculatedManualLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retailCalculatedTotalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  giftCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  giftCardType?: McrGiftCardType | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  retailCalculatedPeriodicDiscountPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatStatisticValue: DeserializedType<T, 'Edm.Decimal'>;
  giftCardBuyerName?: DeserializedType<T, 'Edm.String'> | null;
  salesProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  isLineStopped?: NoYes | null;
  formattedDelveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsId?: DeserializedType<T, 'Edm.String'> | null;
  customersLineNumber: DeserializedType<T, 'Edm.Int32'>;
  deliveryAddressTimeZone?: Timezone | null;
  fullRunCtpStatus?: MpsFullRunCtpStatus | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  fulfillmentStoreId?: DeserializedType<T, 'Edm.String'> | null;
  ngpCode: DeserializedType<T, 'Edm.Int64'>;
  excludeFromMasterPlanning?: NoYes | null;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderLineCreationMethod?: SalesSalesOrderCreationMethod | null;
  allowedUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  calculateLineAmount?: NoYes | null;
  deliveryCfopCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  packingUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  orderedSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  fulfillmentStatus?: RetailFulfillmentLineStatus | null;
  projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  giftCardGiftMessage?: DeserializedType<T, 'Edm.String'> | null;
  orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentTypeId?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  salesOrderHeader?: SalesOrderHeadersType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
