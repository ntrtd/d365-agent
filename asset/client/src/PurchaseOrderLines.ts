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
import type { PurchaseOrderLinesApi } from './PurchaseOrderLinesApi';
import { NoYes } from './NoYes';
import { Tax1099Type } from './Tax1099Type';
import { AssetTransTypePurch } from './AssetTransTypePurch';
import { GsthstTaxTypeCa } from './GsthstTaxTypeCa';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { PurchStatus } from './PurchStatus';
import { Timezone } from './Timezone';
import { PurchMatchingPolicyOption } from './PurchMatchingPolicyOption';
import { PurchPurchaseOrderCreationMethod } from './PurchPurchaseOrderCreationMethod';
import {
  PurchaseOrderHeadersV2,
  PurchaseOrderHeadersV2Type
} from './PurchaseOrderHeadersV2';
import { Projects, ProjectsType } from './Projects';
import {
  PurchaseOrderHeaders,
  PurchaseOrderHeadersType
} from './PurchaseOrderHeaders';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "PurchaseOrderLines" of service "d365_metadata".
 */
export class PurchaseOrderLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PurchaseOrderLinesType<T>
{
  /**
   * Technical entity name for PurchaseOrderLines.
   */
  static override _entityName = 'PurchaseOrderLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderLines entity.
   */
  static _keys = ['dataAreaId', 'PurchaseOrderNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Number.
   */
  declare purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Procurement Product Category Name.
   * @nullable
   */
  declare procurementProductCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax 1099 S Address Or Legal Description.
   * @nullable
   */
  declare tax1099SAddressOrLegalDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fixed Asset Number.
   * @nullable
   */
  declare fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 G Tax Year.
   */
  declare tax1099GTaxYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Project Sales Unit Symbol.
   * @nullable
   */
  declare projectSalesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Purchase Quantity.
   */
  declare orderedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Formatted Delvery Address.
   * @nullable
   */
  declare formattedDelveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Distribution Template Name.
   * @nullable
   */
  declare accountingDistributionTemplateName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiline Discount Percentage.
   */
  declare multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery City In Kana.
   * @nullable
   */
  declare deliveryCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Product Variant Number.
   * @nullable
   */
  declare retailProductVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Street In Kana.
   * @nullable
   */
  declare deliveryStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Tax 1099 S Property Or Services.
   * @nullable
   */
  declare isTax1099SPropertyOrServices?: NoYes | null;
  /**
   * Project Tax Group Code.
   * @nullable
   */
  declare projectTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Tax Item Group Code.
   * @nullable
   */
  declare projectTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Barcode.
   * @nullable
   */
  declare barcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is New Fixed Asset.
   * @nullable
   */
  declare isNewFixedAsset?: NoYes | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 G Vendor State Id.
   * @nullable
   */
  declare tax1099GVendorStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Intrastat Triangular Deal.
   * @nullable
   */
  declare isIntrastatTriangularDeal?: NoYes | null;
  /**
   * Tax 1099 State Id.
   * @nullable
   */
  declare tax1099StateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Partial Delivery Prevented.
   * @nullable
   */
  declare isPartialDeliveryPrevented?: NoYes | null;
  /**
   * Multiline Discount Amount.
   */
  declare multilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax 1099 Type.
   * @nullable
   */
  declare tax1099Type?: Tax1099Type | null;
  /**
   * Requested Delivery Date.
   */
  declare requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Delivery Date.
   */
  declare confirmedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Rebate Vendor Group Id.
   * @nullable
   */
  declare purchaseRebateVendorGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Requester Personnel Number.
   * @nullable
   */
  declare requesterPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Tax 1099 G Trade Or Business Income.
   * @nullable
   */
  declare isTax1099GTradeOrBusinessIncome?: NoYes | null;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Line Property Id.
   * @nullable
   */
  declare projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 S Buyer Part Of Real Estate Tax Amount.
   */
  declare tax1099SBuyerPartOfRealEstateTaxAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Price Charges.
   */
  declare fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Weight.
   */
  declare unitWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax 1099 S Closing Date.
   */
  declare tax1099SClosingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Price Quantity.
   */
  declare purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Service Fiscal Information Code.
   * @nullable
   */
  declare serviceFiscalInformationCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Box Id.
   * @nullable
   */
  declare tax1099BoxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Reservation Line Number.
   */
  declare budgetReservationLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bom Id.
   * @nullable
   */
  declare bomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Asset Transaction Type.
   * @nullable
   */
  declare fixedAssetTransactionType?: AssetTransTypePurch | null;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ngp Code.
   */
  declare ngpCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Origin State Id.
   * @nullable
   */
  declare originStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Withholding Tax Group Code.
   * @nullable
   */
  declare itemWithholdingTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Main Account Id Display Value.
   * @nullable
   */
  declare mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Inventory Status Id.
   * @nullable
   */
  declare orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catch Weight Unit Symbol.
   * @nullable
   */
  declare catchWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receiving Site Id.
   * @nullable
   */
  declare receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Sales Currency Code.
   * @nullable
   */
  declare projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Transaction Code.
   * @nullable
   */
  declare intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Activity Number.
   * @nullable
   */
  declare projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Item Group Code.
   * @nullable
   */
  declare salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Id.
   * @nullable
   */
  declare routeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 G State Tax Withheld Amount.
   */
  declare tax1099GStateTaxWithheldAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intrastat Statistics Procedure Code.
   * @nullable
   */
  declare intrastatStatisticsProcedureCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gsthst Tax Type.
   * @nullable
   */
  declare gsthstTaxType?: GsthstTaxTypeCa | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Shipping Date.
   */
  declare confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customer Reference.
   * @nullable
   */
  declare customerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Order Specific.
   * @nullable
   */
  declare isDeliveryAddressOrderSpecific?: NoYes | null;
  /**
   * Customer Requisition Number.
   * @nullable
   */
  declare customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Price.
   */
  declare purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Will Product Receiving Cross Dock Products.
   * @nullable
   */
  declare willProductReceivingCrossDockProducts?: NoYes | null;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Diot Operation Type.
   * @nullable
   */
  declare diotOperationType?: VendorOperationTypeMx | null;
  /**
   * Fixed Asset Value Model Id.
   * @nullable
   */
  declare fixedAssetValueModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Catch Weight Quantity.
   */
  declare orderedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Worker Personnel Number.
   * @nullable
   */
  declare projectWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Allowed Underdelivery Percentage.
   */
  declare allowedUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allowed Overdelivery Percentage.
   */
  declare allowedOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Asset Group Id.
   * @nullable
   */
  declare fixedAssetGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Line Status.
   * @nullable
   */
  declare purchaseOrderLineStatus?: PurchStatus | null;
  /**
   * Intrastat Commodity Code.
   * @nullable
   */
  declare intrastatCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Budget Reservation Document Number.
   * @nullable
   */
  declare budgetReservationDocumentNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfop Code.
   * @nullable
   */
  declare cfopCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Transport Mode Code.
   * @nullable
   */
  declare intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 State Amount.
   */
  declare tax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Origin Country Region Id.
   * @nullable
   */
  declare originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Port Id.
   * @nullable
   */
  declare intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Special Movement Code.
   * @nullable
   */
  declare intrastatSpecialMovementCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax 1099 Amount.
   */
  declare tax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bar Code Setup Id.
   * @nullable
   */
  declare barCodeSetupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Invoice Matching Policy.
   * @nullable
   */
  declare vendorInvoiceMatchingPolicy?: PurchMatchingPolicyOption | null;
  /**
   * Project Sales Price.
   */
  declare projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax 1099 G Vendor State Tax Id.
   * @nullable
   */
  declare tax1099GVendorStateTaxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Shipping Date.
   */
  declare requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purchase Order Line Creation Method.
   * @nullable
   */
  declare purchaseOrderLineCreationMethod?: PurchPurchaseOrderCreationMethod | null;
  /**
   * Withholding Tax Group Code.
   * @nullable
   */
  declare withholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Item Number.
   * @nullable
   */
  declare externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Project Pay When Paid.
   * @nullable
   */
  declare isProjectPayWhenPaid?: NoYes | null;
  /**
   * Intrastat Statistic Value.
   */
  declare intrastatStatisticValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Line Stopped.
   * @nullable
   */
  declare isLineStopped?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link PurchaseOrderHeadersV2} entity.
   */
  declare purchaseOrderHeaderV2?: PurchaseOrderHeadersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link PurchaseOrderHeaders} entity.
   */
  declare purchaseOrderHeader?: PurchaseOrderHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: PurchaseOrderLinesApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  procurementProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  tax1099SAddressOrLegalDescription?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  tax1099GTaxYear: DeserializedType<T, 'Edm.Int32'>;
  projectSalesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  orderedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  formattedDelveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplateName?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  deliveryCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  retailProductVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  isTax1099SPropertyOrServices?: NoYes | null;
  projectTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  barcode?: DeserializedType<T, 'Edm.String'> | null;
  isNewFixedAsset?: NoYes | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  tax1099GVendorStateId?: DeserializedType<T, 'Edm.String'> | null;
  isIntrastatTriangularDeal?: NoYes | null;
  tax1099StateId?: DeserializedType<T, 'Edm.String'> | null;
  isPartialDeliveryPrevented?: NoYes | null;
  multilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  tax1099Type?: Tax1099Type | null;
  requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  confirmedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  purchaseRebateVendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  requesterPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  isTax1099GTradeOrBusinessIncome?: NoYes | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  tax1099SBuyerPartOfRealEstateTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  unitWeight: DeserializedType<T, 'Edm.Decimal'>;
  tax1099SClosingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  serviceFiscalInformationCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  tax1099BoxId?: DeserializedType<T, 'Edm.String'> | null;
  budgetReservationLineNumber: DeserializedType<T, 'Edm.Int32'>;
  bomId?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetTransactionType?: AssetTransTypePurch | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  ngpCode: DeserializedType<T, 'Edm.Int32'>;
  isDeliveryAddressPrivate?: NoYes | null;
  originStateId?: DeserializedType<T, 'Edm.String'> | null;
  itemWithholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  routeId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  tax1099GStateTaxWithheldAmount: DeserializedType<T, 'Edm.Decimal'>;
  intrastatStatisticsProcedureCode?: DeserializedType<T, 'Edm.String'> | null;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  gsthstTaxType?: GsthstTaxTypeCa | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerReference?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  willProductReceivingCrossDockProducts?: NoYes | null;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  diotOperationType?: VendorOperationTypeMx | null;
  fixedAssetValueModelId?: DeserializedType<T, 'Edm.String'> | null;
  orderedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  projectWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  allowedUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  allowedOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  fixedAssetGroupId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderLineStatus?: PurchStatus | null;
  intrastatCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  budgetReservationDocumentNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  cfopCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  tax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatSpecialMovementCode?: DeserializedType<T, 'Edm.String'> | null;
  tax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  barCodeSetupId?: DeserializedType<T, 'Edm.String'> | null;
  vendorInvoiceMatchingPolicy?: PurchMatchingPolicyOption | null;
  projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  tax1099GVendorStateTaxId?: DeserializedType<T, 'Edm.String'> | null;
  requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchaseOrderLineCreationMethod?: PurchPurchaseOrderCreationMethod | null;
  withholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  isProjectPayWhenPaid?: NoYes | null;
  intrastatStatisticValue: DeserializedType<T, 'Edm.Decimal'>;
  isLineStopped?: NoYes | null;
  purchaseOrderHeaderV2?: PurchaseOrderHeadersV2Type<T> | null;
  project?: ProjectsType<T> | null;
  purchaseOrderHeader?: PurchaseOrderHeadersType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
