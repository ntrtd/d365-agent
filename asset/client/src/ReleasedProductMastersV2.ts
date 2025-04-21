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
import type { ReleasedProductMastersV2Api } from './ReleasedProductMastersV2Api';
import { NoYes } from './NoYes';
import { Abc } from './Abc';
import { WhsAllowMaterialOverPick } from './WhsAllowMaterialOverPick';
import { PmfProductType } from './PmfProductType';
import { PurchMatchingPolicyWithNotSetOption } from './PurchMatchingPolicyWithNotSetOption';
import { SalesPriceModel } from './SalesPriceModel';
import { InventBatchMergeDateCalculationMethod } from './InventBatchMergeDateCalculationMethod';
import { PdsVendorCheckItem } from './PdsVendorCheckItem';
import { ProdFlushingPrincipItem } from './ProdFlushingPrincipItem';
import { PdsPotencyAttribRecordingEnum } from './PdsPotencyAttribRecordingEnum';
import { RetailPriceKeyingRequirement } from './RetailPriceKeyingRequirement';
import { EcoResProductType } from './EcoResProductType';
import { FiTaxationOriginBr } from './FiTaxationOriginBr';
import { ItemNumAlternative } from './ItemNumAlternative';
import { SalesPriceModelBasic } from './SalesPriceModelBasic';
import { RetailQtyKeyingRequirement } from './RetailQtyKeyingRequirement';
import { ReqPoType } from './ReqPoType';
import {
  ReleasedProductVariants,
  ReleasedProductVariantsType
} from './ReleasedProductVariants';
import { ProductMasters, ProductMastersType } from './ProductMasters';
import {
  ProductNumberIdentifiedReleasedProductVariants,
  ProductNumberIdentifiedReleasedProductVariantsType
} from './ProductNumberIdentifiedReleasedProductVariants';
import {
  ProductTranslations,
  ProductTranslationsType
} from './ProductTranslations';
import {
  ReleasedProductVariantsV2,
  ReleasedProductVariantsV2Type
} from './ReleasedProductVariantsV2';

/**
 * This class represents the entity "ReleasedProductMastersV2" of service "d365_metadata".
 */
export class ReleasedProductMastersV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedProductMastersV2Type<T>
{
  /**
   * Technical entity name for ReleasedProductMastersV2.
   */
  static override _entityName = 'ReleasedProductMastersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedProductMastersV2 entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Phantom.
   * @nullable
   */
  declare isPhantom?: NoYes | null;
  /**
   * Is Purchase Price Including Charges.
   * @nullable
   */
  declare isPurchasePriceIncludingCharges?: NoYes | null;
  /**
   * Item Fiscal Classification Code.
   * @nullable
   */
  declare itemFiscalClassificationCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Margin Abc Code.
   * @nullable
   */
  declare marginAbcCode?: Abc | null;
  /**
   * Is Icms Tax Applied On Service.
   * @nullable
   */
  declare isIcmsTaxAppliedOnService?: NoYes | null;
  /**
   * Shipping And Receiving Sort Order Code.
   */
  declare shippingAndReceivingSortOrderCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Production Consumption Width Conversion Factor.
   */
  declare productionConsumptionWidthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Alternative Product Size Id.
   * @nullable
   */
  declare alternativeProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Raw Material Picking Principle.
   * @nullable
   */
  declare rawMaterialPickingPrinciple?: WhsAllowMaterialOverPick | null;
  /**
   * Production Consumption Depth Conversion Factor.
   */
  declare productionConsumptionDepthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Default Product Configuration Id.
   * @nullable
   */
  declare defaultProductConfigurationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Model Group Id.
   * @nullable
   */
  declare itemModelGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Product Height.
   */
  declare grossProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Alternative Product Version Id.
   * @nullable
   */
  declare alternativeProductVersionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Sales Withholding Tax Calculated.
   * @nullable
   */
  declare isSalesWithholdingTaxCalculated?: NoYes | null;
  /**
   * Product Volume.
   */
  declare productVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tracking Dimension Group Name.
   * @nullable
   */
  declare trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Sales Tax Item Group Code.
   * @nullable
   */
  declare purchaseSalesTaxItemGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Planning Formula Item Number.
   * @nullable
   */
  declare planningFormulaItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Mobile Device Description Line 1.
   * @nullable
   */
  declare warehouseMobileDeviceDescriptionLine1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warehouse Mobile Device Description Line 2.
   * @nullable
   */
  declare warehouseMobileDeviceDescriptionLine2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Item Withholding Tax Group Code.
   * @nullable
   */
  declare salesItemWithholdingTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Unit Cost Product Variant Specific.
   * @nullable
   */
  declare isUnitCostProductVariantSpecific?: NoYes | null;
  /**
   * Is Pos Registration Quantity Negative.
   * @nullable
   */
  declare isPosRegistrationQuantityNegative?: NoYes | null;
  /**
   * Pos Registration Planned Blocked Date.
   */
  declare posRegistrationPlannedBlockedDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Sell End Date.
   */
  declare sellEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Purchase Withholding Tax Calculated.
   * @nullable
   */
  declare isPurchaseWithholdingTaxCalculated?: NoYes | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Commission Product Group Id.
   * @nullable
   */
  declare commissionProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Exempt From Automatic Notification And Cancellation.
   * @nullable
   */
  declare isExemptFromAutomaticNotificationAndCancellation?: NoYes | null;
  /**
   * Production Type.
   * @nullable
   */
  declare productionType?: PmfProductType | null;
  /**
   * Net Product Weight.
   */
  declare netProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Production Pool Id.
   * @nullable
   */
  declare productionPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Supplementary Product Product Group Id.
   * @nullable
   */
  declare salesSupplementaryProductProductGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Storage Dimension Group Name.
   * @nullable
   */
  declare storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Pricing Precision.
   */
  declare purchasePricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bom Unit Symbol.
   * @nullable
   */
  declare bomUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price Calculation Contribution Ratio.
   */
  declare salesPriceCalculationContributionRatio: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Is Self Checkout Registration Blocked.
   * @nullable
   */
  declare isSelfCheckoutRegistrationBlocked?: NoYes | null;
  /**
   * Catch Weight Unit Symbol.
   * @nullable
   */
  declare catchWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Invoice Line Matching Policy.
   * @nullable
   */
  declare vendorInvoiceLineMatchingPolicy?: PurchMatchingPolicyWithNotSetOption | null;
  /**
   * Sell Start Date.
   */
  declare sellStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Physical Dimension Group Id.
   * @nullable
   */
  declare physicalDimensionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Carrying Cost Abc Code.
   * @nullable
   */
  declare carryingCostAbcCode?: Abc | null;
  /**
   * Cost Calculation Bom Level.
   */
  declare costCalculationBomLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Transfer Order Overdelivery Percentage.
   */
  declare transferOrderOverdeliveryPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Unit Conversion Sequence Group Id.
   * @nullable
   */
  declare unitConversionSequenceGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Will Picking Workbench Apply Boxing Logic.
   * @nullable
   */
  declare willPickingWorkbenchApplyBoxingLogic?: NoYes | null;
  /**
   * Fixed Sales Price Charges.
   */
  declare fixedSalesPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Delivered Directly.
   * @nullable
   */
  declare isDeliveredDirectly?: NoYes | null;
  /**
   * Sales Gst Relief Category Code.
   * @nullable
   */
  declare salesGstReliefCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Scale Product.
   * @nullable
   */
  declare isScaleProduct?: NoYes | null;
  /**
   * Alternative Product Color Id.
   * @nullable
   */
  declare alternativeProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Purchase Price Charges.
   */
  declare fixedPurchasePriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Unit Cost Including Charges.
   * @nullable
   */
  declare isUnitCostIncludingCharges?: NoYes | null;
  /**
   * Ship Start Date.
   */
  declare shipStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Price Calculation Model.
   * @nullable
   */
  declare salesPriceCalculationModel?: SalesPriceModel | null;
  /**
   * Arrival Handling Time.
   */
  declare arrivalHandlingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Intrastat Commodity Code.
   * @nullable
   */
  declare intrastatCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Transportation Management Processes Enabled.
   * @nullable
   */
  declare areTransportationManagementProcessesEnabled?: NoYes | null;
  /**
   * Is Ship Alone Enabled.
   * @nullable
   */
  declare isShipAloneEnabled?: NoYes | null;
  /**
   * Production Consumption Density Conversion Factor.
   */
  declare productionConsumptionDensityConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Purchase Price Date.
   */
  declare purchasePriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Pricing Precision.
   */
  declare salesPricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Purchase Charges Quantity.
   */
  declare purchaseChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value Abc Code.
   * @nullable
   */
  declare valueAbcCode?: Abc | null;
  /**
   * Variable Scrap Percentage.
   */
  declare variableScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Cost Date.
   */
  declare unitCostDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Maximum Pick Quantity.
   */
  declare maximumPickQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Alternative Product Style Id.
   * @nullable
   */
  declare alternativeProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Barcode Setup Id.
   * @nullable
   */
  declare barcodeSetupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Sales Price Including Charges.
   * @nullable
   */
  declare isSalesPriceIncludingCharges?: NoYes | null;
  /**
   * Purchase Price Quantity.
   */
  declare purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Charge Product Group Id.
   * @nullable
   */
  declare purchaseChargeProductGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Continuity Schedule Id.
   * @nullable
   */
  declare continuityScheduleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Cost Charges.
   */
  declare fixedCostCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Group Id.
   * @nullable
   */
  declare costGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Line Discount Product Group Code.
   * @nullable
   */
  declare salesLineDiscountProductGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pos Registration Activation Date.
   */
  declare posRegistrationActivationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Maximum Catch Weight Quantity.
   */
  declare maximumCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Life Cycle Valid To Date.
   */
  declare productLifeCycleValidToDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Service Fiscal Information Code.
   * @nullable
   */
  declare serviceFiscalInformationCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Supplementary Product Product Group Id.
   * @nullable
   */
  declare purchaseSupplementaryProductProductGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inventory Unit Symbol.
   * @nullable
   */
  declare inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Total Purchase Discount Calculation Include Product.
   * @nullable
   */
  declare willTotalPurchaseDiscountCalculationIncludeProduct?: NoYes | null;
  /**
   * Pack Size Category Id.
   * @nullable
   */
  declare packSizeCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Charges Quantity.
   */
  declare salesChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Batch Merge Date Calculation Method.
   * @nullable
   */
  declare batchMergeDateCalculationMethod?: InventBatchMergeDateCalculationMethod | null;
  /**
   * Sales Multiline Discount Product Group Code.
   * @nullable
   */
  declare salesMultilineDiscountProductGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Price.
   */
  declare purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Charge Product Group Id.
   * @nullable
   */
  declare salesChargeProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Intercompany Purchase Usage Blocked.
   * @nullable
   */
  declare isIntercompanyPurchaseUsageBlocked?: NoYes | null;
  /**
   * Alternative Product Configuration Id.
   * @nullable
   */
  declare alternativeProductConfigurationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Overdelivery Percentage.
   */
  declare salesOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Discount Pos Registration Prohibited.
   * @nullable
   */
  declare isDiscountPosRegistrationProhibited?: NoYes | null;
  /**
   * Best Before Period Days.
   */
  declare bestBeforePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Purchase Overdelivery Percentage.
   */
  declare purchaseOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Underdelivery Percentage.
   */
  declare salesUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Buyer Group Id.
   * @nullable
   */
  declare buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Necessary Production Working Time Scheduling Property Id.
   * @nullable
   */
  declare necessaryProductionWorkingTimeSchedulingPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inventory Gst Relief Category Code.
   * @nullable
   */
  declare inventoryGstReliefCategoryCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Approved Vendor Check Method.
   * @nullable
   */
  declare approvedVendorCheckMethod?: PdsVendorCheckItem | null;
  /**
   * Sales Rebate Product Group Id.
   * @nullable
   */
  declare salesRebateProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Reservation Hierarchy Name.
   * @nullable
   */
  declare inventoryReservationHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Flushing Principle.
   * @nullable
   */
  declare flushingPrinciple?: ProdFlushingPrincipItem | null;
  /**
   * Sales Price Quantity.
   */
  declare salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Yield Percentage.
   */
  declare yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tare Product Weight.
   */
  declare tareProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Approximate Sales Tax Percentage.
   */
  declare approximateSalesTaxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Packing Duty Quantity.
   */
  declare packingDutyQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Line Discount Product Group Code.
   * @nullable
   */
  declare purchaseLineDiscountProductGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Will Inventory Issue Automatically Report As Finished.
   * @nullable
   */
  declare willInventoryIssueAutomaticallyReportAsFinished?: NoYes | null;
  /**
   * Product Fiscal Information Type.
   * @nullable
   */
  declare productFiscalInformationType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Package Handling Time.
   */
  declare packageHandlingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Gross Product Width.
   */
  declare grossProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shelf Life Period Days.
   */
  declare shelfLifePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Product Version Id.
   * @nullable
   */
  declare defaultProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Order Underdelivery Percentage.
   */
  declare transferOrderUnderdeliveryPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Default Receiving Quantity.
   */
  declare defaultReceivingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pos Registration Blocked Date.
   */
  declare posRegistrationBlockedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Must Key In Comment At Pos Register.
   * @nullable
   */
  declare mustKeyInCommentAtPosRegister?: NoYes | null;
  /**
   * Default Product Style Id.
   * @nullable
   */
  declare defaultProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Constant Scrap Quantity.
   */
  declare constantScrapQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Potency Base Attribute Value Entry Event.
   * @nullable
   */
  declare potencyBaseAttributeValueEntryEvent?: PdsPotencyAttribRecordingEnum | null;
  /**
   * Key In Price Requirements At Pos Register.
   * @nullable
   */
  declare keyInPriceRequirementsAtPosRegister?: RetailPriceKeyingRequirement | null;
  /**
   * Intrastat Charge Percentage.
   */
  declare intrastatChargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Coverage Group Id.
   * @nullable
   */
  declare productCoverageGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Potency Base Attibute Target Value.
   */
  declare potencyBaseAttibuteTargetValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Intercompany Sales Usage Blocked.
   * @nullable
   */
  declare isIntercompanySalesUsageBlocked?: NoYes | null;
  /**
   * Packing Material Group Id.
   * @nullable
   */
  declare packingMaterialGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Rebate Product Group Id.
   * @nullable
   */
  declare purchaseRebateProductGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Vendor Account Number.
   * @nullable
   */
  declare primaryVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin Country Region Id.
   * @nullable
   */
  declare originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative Item Number.
   * @nullable
   */
  declare alternativeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bom Level.
   */
  declare bomLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Purchase Item Withholding Tax Group Code.
   * @nullable
   */
  declare purchaseItemWithholdingTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Zero Price Pos Registration Allowed.
   * @nullable
   */
  declare isZeroPricePosRegistrationAllowed?: NoYes | null;
  /**
   * Cost Charges Quantity.
   */
  declare costChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Unit Cost Automatically Updated.
   * @nullable
   */
  declare isUnitCostAutomaticallyUpdated?: NoYes | null;
  /**
   * Default Direct Delivery Warehouse.
   * @nullable
   */
  declare defaultDirectDeliveryWarehouse?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Taxation Origin.
   * @nullable
   */
  declare productTaxationOrigin?: FiTaxationOriginBr | null;
  /**
   * Is Variant Shelf Labels Printing Enabled.
   * @nullable
   */
  declare isVariantShelfLabelsPrintingEnabled?: NoYes | null;
  /**
   * Unit Cost.
   */
  declare unitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Product Color Id.
   * @nullable
   */
  declare defaultProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative Product Usage Condition.
   * @nullable
   */
  declare alternativeProductUsageCondition?: ItemNumAlternative | null;
  /**
   * Sales Price Date.
   */
  declare salesPriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Will Total Sales Discount Calculation Include Product.
   * @nullable
   */
  declare willTotalSalesDiscountCalculationIncludeProduct?: NoYes | null;
  /**
   * Purchase Price Tolerance Group Id.
   * @nullable
   */
  declare purchasePriceToleranceGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Installment Eligible.
   * @nullable
   */
  declare isInstallmentEligible?: NoYes | null;
  /**
   * Base Sales Price Source.
   * @nullable
   */
  declare baseSalesPriceSource?: SalesPriceModelBasic | null;
  /**
   * Serial Number Group Code.
   * @nullable
   */
  declare serialNumberGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Life Cycle Valid From Date.
   */
  declare productLifeCycleValidFromDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Item Fiscal Classification Exception Code.
   * @nullable
   */
  declare itemFiscalClassificationExceptionCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ngp Code.
   */
  declare ngpCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Key In Quantity Requirements At Pos Register.
   * @nullable
   */
  declare keyInQuantityRequirementsAtPosRegister?: RetailQtyKeyingRequirement | null;
  /**
   * Production Group Id.
   * @nullable
   */
  declare productionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Order Type.
   * @nullable
   */
  declare defaultOrderType?: ReqPoType | null;
  /**
   * Product Group Id.
   * @nullable
   */
  declare productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Consumption Height Conversion Factor.
   */
  declare productionConsumptionHeightConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Continuity Event Duration.
   */
  declare continuityEventDuration: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Pos Registration Blocked.
   * @nullable
   */
  declare isPosRegistrationBlocked?: NoYes | null;
  /**
   * Batch Number Group Code.
   * @nullable
   */
  declare batchNumberGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Product Size Id.
   * @nullable
   */
  declare defaultProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Underdelivery Percentage.
   */
  declare purchaseUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gross Depth.
   */
  declare grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Revenue Abc Code.
   * @nullable
   */
  declare revenueAbcCode?: Abc | null;
  /**
   * Package Class Id.
   * @nullable
   */
  declare packageClassId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Gst Relief Category Code.
   * @nullable
   */
  declare purchaseGstReliefCategoryCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Price Calculation Charges Percentage.
   */
  declare salesPriceCalculationChargesPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Purchase Multiline Discount Product Group Code.
   * @nullable
   */
  declare purchaseMultilineDiscountProductGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Will Work Center Picking Allow Negative Inventory.
   * @nullable
   */
  declare willWorkCenterPickingAllowNegativeInventory?: NoYes | null;
  /**
   * Product Life Cycle Season Code.
   * @nullable
   */
  declare productLifeCycleSeasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Sales Tax Item Group Code.
   * @nullable
   */
  declare salesSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Restricted For Coupons.
   * @nullable
   */
  declare isRestrictedForCoupons?: NoYes | null;
  /**
   * Is Sales Price Adjustment Allowed.
   * @nullable
   */
  declare isSalesPriceAdjustmentAllowed?: NoYes | null;
  /**
   * Is Purchase Price Automatically Updated.
   * @nullable
   */
  declare isPurchasePriceAutomaticallyUpdated?: NoYes | null;
  /**
   * Minimum Catch Weight Quantity.
   */
  declare minimumCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Will Inventory Receipt Ignore Flushing Principle.
   * @nullable
   */
  declare willInventoryReceiptIgnoreFlushingPrinciple?: NoYes | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Cost Quantity.
   */
  declare unitCostQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Freight Allocation Group Id.
   * @nullable
   */
  declare freightAllocationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comparison Price Base Unit Symbol.
   * @nullable
   */
  declare comparisonPriceBaseUnitSymbol?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Calculation Group Id.
   * @nullable
   */
  declare costCalculationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shelf Advice Period Days.
   */
  declare shelfAdvicePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Origin State Id.
   * @nullable
   */
  declare originStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductVariants} entity.
   */
  declare releasedProductVariant: ReleasedProductVariants<T>[];
  /**
   * One-to-one navigation property to the {@link ProductMasters} entity.
   */
  declare productMaster?: ProductMasters<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductNumberIdentifiedReleasedProductVariants} entity.
   */
  declare releasedProductVariants: ProductNumberIdentifiedReleasedProductVariants<T>[];
  /**
   * One-to-many navigation property to the {@link ProductTranslations} entity.
   */
  declare productTranslation: ProductTranslations<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductVariantsV2} entity.
   */
  declare releasedProductVariantV2: ReleasedProductVariantsV2<T>[];

  constructor(_entityApi: ReleasedProductMastersV2Api<T>) {
    super(_entityApi);
  }
}

export interface ReleasedProductMastersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  isPhantom?: NoYes | null;
  isPurchasePriceIncludingCharges?: NoYes | null;
  itemFiscalClassificationCode?: DeserializedType<T, 'Edm.String'> | null;
  marginAbcCode?: Abc | null;
  isIcmsTaxAppliedOnService?: NoYes | null;
  shippingAndReceivingSortOrderCode: DeserializedType<T, 'Edm.Int32'>;
  productionConsumptionWidthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  alternativeProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  rawMaterialPickingPrinciple?: WhsAllowMaterialOverPick | null;
  productionConsumptionDepthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  defaultProductConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  itemModelGroupId?: DeserializedType<T, 'Edm.String'> | null;
  grossProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  alternativeProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  isSalesWithholdingTaxCalculated?: NoYes | null;
  productVolume: DeserializedType<T, 'Edm.Decimal'>;
  trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  purchaseSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  planningFormulaItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseMobileDeviceDescriptionLine1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  warehouseMobileDeviceDescriptionLine2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  salesItemWithholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  isUnitCostProductVariantSpecific?: NoYes | null;
  isPosRegistrationQuantityNegative?: NoYes | null;
  posRegistrationPlannedBlockedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sellEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isPurchaseWithholdingTaxCalculated?: NoYes | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  commissionProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isExemptFromAutomaticNotificationAndCancellation?: NoYes | null;
  productionType?: PmfProductType | null;
  netProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  productionPoolId?: DeserializedType<T, 'Edm.String'> | null;
  salesSupplementaryProductProductGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  purchasePricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  bomUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceCalculationContributionRatio: DeserializedType<T, 'Edm.Decimal'>;
  isSelfCheckoutRegistrationBlocked?: NoYes | null;
  catchWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  vendorInvoiceLineMatchingPolicy?: PurchMatchingPolicyWithNotSetOption | null;
  sellStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  physicalDimensionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  carryingCostAbcCode?: Abc | null;
  costCalculationBomLevel: DeserializedType<T, 'Edm.Int32'>;
  transferOrderOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  unitConversionSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  willPickingWorkbenchApplyBoxingLogic?: NoYes | null;
  fixedSalesPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  isDeliveredDirectly?: NoYes | null;
  salesGstReliefCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  isScaleProduct?: NoYes | null;
  alternativeProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  fixedPurchasePriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  isUnitCostIncludingCharges?: NoYes | null;
  shipStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesPriceCalculationModel?: SalesPriceModel | null;
  arrivalHandlingTime: DeserializedType<T, 'Edm.Int32'>;
  intrastatCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  areTransportationManagementProcessesEnabled?: NoYes | null;
  isShipAloneEnabled?: NoYes | null;
  productionConsumptionDensityConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  purchasePriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesPricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  purchaseChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  valueAbcCode?: Abc | null;
  variableScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  unitCostDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maximumPickQuantity: DeserializedType<T, 'Edm.Decimal'>;
  alternativeProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  barcodeSetupId?: DeserializedType<T, 'Edm.String'> | null;
  isSalesPriceIncludingCharges?: NoYes | null;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  purchaseChargeProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  continuityScheduleId?: DeserializedType<T, 'Edm.String'> | null;
  fixedCostCharges: DeserializedType<T, 'Edm.Decimal'>;
  costGroupId?: DeserializedType<T, 'Edm.String'> | null;
  salesLineDiscountProductGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  posRegistrationActivationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maximumCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productLifeCycleValidToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  serviceFiscalInformationCode?: DeserializedType<T, 'Edm.String'> | null;
  purchaseSupplementaryProductProductGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  willTotalPurchaseDiscountCalculationIncludeProduct?: NoYes | null;
  packSizeCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  salesChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  batchMergeDateCalculationMethod?: InventBatchMergeDateCalculationMethod | null;
  salesMultilineDiscountProductGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  salesChargeProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isIntercompanyPurchaseUsageBlocked?: NoYes | null;
  alternativeProductConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  salesOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isDiscountPosRegistrationProhibited?: NoYes | null;
  bestBeforePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  purchaseOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  salesUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  necessaryProductionWorkingTimeSchedulingPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  inventoryGstReliefCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  approvedVendorCheckMethod?: PdsVendorCheckItem | null;
  salesRebateProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryReservationHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  flushingPrinciple?: ProdFlushingPrincipItem | null;
  salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  tareProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  approximateSalesTaxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  packingDutyQuantity: DeserializedType<T, 'Edm.Decimal'>;
  purchaseLineDiscountProductGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  willInventoryIssueAutomaticallyReportAsFinished?: NoYes | null;
  productFiscalInformationType?: DeserializedType<T, 'Edm.String'> | null;
  packageHandlingTime: DeserializedType<T, 'Edm.Int32'>;
  grossProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  shelfLifePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  defaultProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  transferOrderUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  defaultReceivingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  posRegistrationBlockedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  mustKeyInCommentAtPosRegister?: NoYes | null;
  defaultProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  constantScrapQuantity: DeserializedType<T, 'Edm.Decimal'>;
  potencyBaseAttributeValueEntryEvent?: PdsPotencyAttribRecordingEnum | null;
  keyInPriceRequirementsAtPosRegister?: RetailPriceKeyingRequirement | null;
  intrastatChargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  productCoverageGroupId?: DeserializedType<T, 'Edm.String'> | null;
  potencyBaseAttibuteTargetValue: DeserializedType<T, 'Edm.Decimal'>;
  isIntercompanySalesUsageBlocked?: NoYes | null;
  packingMaterialGroupId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseRebateProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  primaryVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  productType?: EcoResProductType | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  alternativeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  bomLevel: DeserializedType<T, 'Edm.Int32'>;
  purchaseItemWithholdingTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isZeroPricePosRegistrationAllowed?: NoYes | null;
  costChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isUnitCostAutomaticallyUpdated?: NoYes | null;
  defaultDirectDeliveryWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  productTaxationOrigin?: FiTaxationOriginBr | null;
  isVariantShelfLabelsPrintingEnabled?: NoYes | null;
  unitCost: DeserializedType<T, 'Edm.Decimal'>;
  defaultProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  alternativeProductUsageCondition?: ItemNumAlternative | null;
  salesPriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  willTotalSalesDiscountCalculationIncludeProduct?: NoYes | null;
  purchasePriceToleranceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isInstallmentEligible?: NoYes | null;
  baseSalesPriceSource?: SalesPriceModelBasic | null;
  serialNumberGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productLifeCycleValidFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemFiscalClassificationExceptionCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  ngpCode: DeserializedType<T, 'Edm.Int32'>;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  keyInQuantityRequirementsAtPosRegister?: RetailQtyKeyingRequirement | null;
  productionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  defaultOrderType?: ReqPoType | null;
  productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  productionConsumptionHeightConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  continuityEventDuration: DeserializedType<T, 'Edm.Int32'>;
  isPosRegistrationBlocked?: NoYes | null;
  batchNumberGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  revenueAbcCode?: Abc | null;
  packageClassId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseGstReliefCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceCalculationChargesPercentage: DeserializedType<T, 'Edm.Decimal'>;
  purchaseMultilineDiscountProductGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  willWorkCenterPickingAllowNegativeInventory?: NoYes | null;
  productLifeCycleSeasonCode?: DeserializedType<T, 'Edm.String'> | null;
  salesSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  isRestrictedForCoupons?: NoYes | null;
  isSalesPriceAdjustmentAllowed?: NoYes | null;
  isPurchasePriceAutomaticallyUpdated?: NoYes | null;
  minimumCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  willInventoryReceiptIgnoreFlushingPrinciple?: NoYes | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  unitCostQuantity: DeserializedType<T, 'Edm.Decimal'>;
  freightAllocationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  comparisonPriceBaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  costCalculationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  shelfAdvicePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  originStateId?: DeserializedType<T, 'Edm.String'> | null;
  releasedProductVariant: ReleasedProductVariantsType<T>[];
  productMaster?: ProductMastersType<T> | null;
  releasedProductVariants: ProductNumberIdentifiedReleasedProductVariantsType<T>[];
  productTranslation: ProductTranslationsType<T>[];
  releasedProductVariantV2: ReleasedProductVariantsV2Type<T>[];
}
