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
import type { DvReleasedProductsApi } from './DvReleasedProductsApi';
import { NoYes } from './NoYes';
import { ScaleIndicatorBr } from './ScaleIndicatorBr';
import { PdsPotencyAttribRecordingEnum } from './PdsPotencyAttribRecordingEnum';
import { WhsAllowMaterialOverPick } from './WhsAllowMaterialOverPick';
import { RetailQtyKeyingRequirement } from './RetailQtyKeyingRequirement';
import { Abc } from './Abc';
import { EcoResFieldServiceProductType } from './EcoResFieldServiceProductType';
import { EcoResProductType } from './EcoResProductType';
import { RetailPriceKeyingRequirement } from './RetailPriceKeyingRequirement';
import { SalesPriceModel } from './SalesPriceModel';
import {
  ProductSpecificOrderSettingsV3,
  ProductSpecificOrderSettingsV3Type
} from './ProductSpecificOrderSettingsV3';
import {
  ProductSpecificOrderSettingsV2,
  ProductSpecificOrderSettingsV2Type
} from './ProductSpecificOrderSettingsV2';
import {
  ProductDefaultOrderSettings,
  ProductDefaultOrderSettingsType
} from './ProductDefaultOrderSettings';
import {
  TrackingDimensionGroups,
  TrackingDimensionGroupsType
} from './TrackingDimensionGroups';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import { AllProducts, AllProductsType } from './AllProducts';
import {
  DvReleasedDistinctProducts,
  DvReleasedDistinctProductsType
} from './DvReleasedDistinctProducts';

/**
 * This class represents the entity "DVReleasedProducts" of service "d365_metadata".
 */
export class DvReleasedProducts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DvReleasedProductsType<T>
{
  /**
   * Technical entity name for DvReleasedProducts.
   */
  static override _entityName = 'DVReleasedProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DvReleasedProducts entity.
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
   * Transfer Order Overdelivery Percentage.
   */
  declare transferOrderOverdeliveryPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Consumption Width Conversion Factor.
   */
  declare productionConsumptionWidthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Is Purchase Price Automatically Updated.
   * @nullable
   */
  declare isPurchasePriceAutomaticallyUpdated?: NoYes | null;
  /**
   * Transfer Order Underdelivery Percentage.
   */
  declare transferOrderUnderdeliveryPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Will Total Purchase Discount Calculation Include Product.
   * @nullable
   */
  declare willTotalPurchaseDiscountCalculationIncludeProduct?: NoYes | null;
  /**
   * Is Variant Shelf Labels Printing Enabled.
   * @nullable
   */
  declare isVariantShelfLabelsPrintingEnabled?: NoYes | null;
  /**
   * Product Dimension Group Name.
   * @nullable
   */
  declare productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Necessary Production Working Time Scheduling Property Id.
   * @nullable
   */
  declare necessaryProductionWorkingTimeSchedulingPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Self Checkout Registration Blocked.
   * @nullable
   */
  declare isSelfCheckoutRegistrationBlocked?: NoYes | null;
  /**
   * Unit Cost Date.
   */
  declare unitCostDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purchase Underdelivery Percentage.
   */
  declare purchaseUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Will Inventory Issue Automatically Report As Finished.
   * @nullable
   */
  declare willInventoryIssueAutomaticallyReportAsFinished?: NoYes | null;
  /**
   * Product Volume.
   */
  declare productVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tare Product Weight.
   */
  declare tareProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Phantom.
   * @nullable
   */
  declare isPhantom?: NoYes | null;
  /**
   * Variable Scrap Percentage.
   */
  declare variableScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Unit Cost Including Charges.
   * @nullable
   */
  declare isUnitCostIncludingCharges?: NoYes | null;
  /**
   * Minimum Catch Weight Quantity.
   */
  declare minimumCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Will Picking Workbench Apply Boxing Logic.
   * @nullable
   */
  declare willPickingWorkbenchApplyBoxingLogic?: NoYes | null;
  /**
   * Is Zero Price Pos Registration Allowed.
   * @nullable
   */
  declare isZeroPricePosRegistrationAllowed?: NoYes | null;
  /**
   * Intrastat Charge Percentage.
   */
  declare intrastatChargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Scale Product.
   * @nullable
   */
  declare isScaleProduct?: NoYes | null;
  /**
   * Storage Dimension Group Name.
   * @nullable
   */
  declare storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shelf Advice Period Days.
   */
  declare shelfAdvicePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Must Key In Comment At Pos Register.
   * @nullable
   */
  declare mustKeyInCommentAtPosRegister?: NoYes | null;
  /**
   * Is Unit Cost Automatically Updated.
   * @nullable
   */
  declare isUnitCostAutomaticallyUpdated?: NoYes | null;
  /**
   * Potency Base Attibute Target Value.
   */
  declare potencyBaseAttibuteTargetValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Receiving Quantity.
   */
  declare defaultReceivingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Production Consumption Density Conversion Factor.
   */
  declare productionConsumptionDensityConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Purchase Pricing Precision.
   */
  declare purchasePricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Unit Cost Quantity.
   */
  declare unitCostQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Restricted For Coupons.
   * @nullable
   */
  declare isRestrictedForCoupons?: NoYes | null;
  /**
   * Scale Indicator.
   * @nullable
   */
  declare scaleIndicator?: ScaleIndicatorBr | null;
  /**
   * Sell Start Date.
   */
  declare sellStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Constant Scrap Quantity.
   */
  declare constantScrapQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Packing Duty Quantity.
   */
  declare packingDutyQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Sales Price Including Charges.
   * @nullable
   */
  declare isSalesPriceIncludingCharges?: NoYes | null;
  /**
   * Will Total Sales Discount Calculation Include Product.
   * @nullable
   */
  declare willTotalSalesDiscountCalculationIncludeProduct?: NoYes | null;
  /**
   * Potency Base Attribute Value Entry Event.
   * @nullable
   */
  declare potencyBaseAttributeValueEntryEvent?: PdsPotencyAttribRecordingEnum | null;
  /**
   * Sales Charges Quantity.
   */
  declare salesChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Price Calculation Contribution Ratio.
   */
  declare salesPriceCalculationContributionRatio: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Is Sales Price Adjustment Allowed.
   * @nullable
   */
  declare isSalesPriceAdjustmentAllowed?: NoYes | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price Calculation Charges Percentage.
   */
  declare salesPriceCalculationChargesPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Gross Product Height.
   */
  declare grossProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pos Registration Planned Blocked Date.
   */
  declare posRegistrationPlannedBlockedDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Purchase Price Date.
   */
  declare purchasePriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Intercompany Purchase Usage Blocked.
   * @nullable
   */
  declare isIntercompanyPurchaseUsageBlocked?: NoYes | null;
  /**
   * Shelf Life Period Days.
   */
  declare shelfLifePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Production Consumption Height Conversion Factor.
   */
  declare productionConsumptionHeightConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Bom Unit Symbol.
   * @nullable
   */
  declare bomUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Catch Weight Quantity.
   */
  declare maximumCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Price Quantity.
   */
  declare purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Price.
   */
  declare purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Discount Pos Registration Prohibited.
   * @nullable
   */
  declare isDiscountPosRegistrationProhibited?: NoYes | null;
  /**
   * Purchase Overdelivery Percentage.
   */
  declare purchaseOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tracking Dimension Group Name.
   * @nullable
   */
  declare trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Sales Price Charges.
   */
  declare fixedSalesPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative Item Number.
   * @nullable
   */
  declare alternativeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Purchase Price Including Charges.
   * @nullable
   */
  declare isPurchasePriceIncludingCharges?: NoYes | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Ship Alone Enabled.
   * @nullable
   */
  declare isShipAloneEnabled?: NoYes | null;
  /**
   * Raw Material Picking Principle.
   * @nullable
   */
  declare rawMaterialPickingPrinciple?: WhsAllowMaterialOverPick | null;
  /**
   * Is Stocked Product.
   * @nullable
   */
  declare isStockedProduct?: NoYes | null;
  /**
   * Fixed Purchase Price Charges.
   */
  declare fixedPurchasePriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price Date.
   */
  declare salesPriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Pos Registration Quantity Negative.
   * @nullable
   */
  declare isPosRegistrationQuantityNegative?: NoYes | null;
  /**
   * Maximum Pick Quantity.
   */
  declare maximumPickQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Charges Quantity.
   */
  declare purchaseChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Primary Vendor Account Number.
   * @nullable
   */
  declare primaryVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Underdelivery Percentage.
   */
  declare salesUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Installment Eligible.
   * @nullable
   */
  declare isInstallmentEligible?: NoYes | null;
  /**
   * Key In Quantity Requirements At Pos Register.
   * @nullable
   */
  declare keyInQuantityRequirementsAtPosRegister?: RetailQtyKeyingRequirement | null;
  /**
   * Is Intercompany Sales Usage Blocked.
   * @nullable
   */
  declare isIntercompanySalesUsageBlocked?: NoYes | null;
  /**
   * Yield Percentage.
   */
  declare yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Sales Withholding Tax Calculated.
   * @nullable
   */
  declare isSalesWithholdingTaxCalculated?: NoYes | null;
  /**
   * Best Before Period Days.
   */
  declare bestBeforePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Manual Discount Pos Registration Prohibited.
   * @nullable
   */
  declare isManualDiscountPosRegistrationProhibited?: NoYes | null;
  /**
   * Gross Depth.
   */
  declare grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Catch Weight Product.
   * @nullable
   */
  declare isCatchWeightProduct?: NoYes | null;
  /**
   * Fixed Cost Charges.
   */
  declare fixedCostCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Carrying Cost Abc Code.
   * @nullable
   */
  declare carryingCostAbcCode?: Abc | null;
  /**
   * Unit Cost.
   */
  declare unitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Pos Registration Blocked.
   * @nullable
   */
  declare isPosRegistrationBlocked?: NoYes | null;
  /**
   * Pos Registration Blocked Date.
   */
  declare posRegistrationBlockedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Exempt From Automatic Notification And Cancellation.
   * @nullable
   */
  declare isExemptFromAutomaticNotificationAndCancellation?: NoYes | null;
  /**
   * Field Service Product Type.
   * @nullable
   */
  declare fieldServiceProductType?: EcoResFieldServiceProductType | null;
  /**
   * Comparison Price Base Unit Symbol.
   * @nullable
   */
  declare comparisonPriceBaseUnitSymbol?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inventory Unit Symbol.
   * @nullable
   */
  declare inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Work Center Picking Allow Negative Inventory.
   * @nullable
   */
  declare willWorkCenterPickingAllowNegativeInventory?: NoYes | null;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: EcoResProductType | null;
  /**
   * Key In Price Requirements At Pos Register.
   * @nullable
   */
  declare keyInPriceRequirementsAtPosRegister?: RetailPriceKeyingRequirement | null;
  /**
   * Approximate Sales Tax Percentage.
   */
  declare approximateSalesTaxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pos Registration Activation Date.
   */
  declare posRegistrationActivationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Will Inventory Receipt Ignore Flushing Principle.
   * @nullable
   */
  declare willInventoryReceiptIgnoreFlushingPrinciple?: NoYes | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Product Weight.
   */
  declare netProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Charges Quantity.
   */
  declare costChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Price Calculation Model.
   * @nullable
   */
  declare salesPriceCalculationModel?: SalesPriceModel | null;
  /**
   * Sales Overdelivery Percentage.
   */
  declare salesOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Pricing Precision.
   */
  declare salesPricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Margin Abc Code.
   * @nullable
   */
  declare marginAbcCode?: Abc | null;
  /**
   * Catch Weight Unit Symbol.
   * @nullable
   */
  declare catchWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
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
   * Production Consumption Depth Conversion Factor.
   */
  declare productionConsumptionDepthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Is Unit Cost Product Variant Specific.
   * @nullable
   */
  declare isUnitCostProductVariantSpecific?: NoYes | null;
  /**
   * Gross Product Width.
   */
  declare grossProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Start Date.
   */
  declare shipStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link ProductSpecificOrderSettingsV3} entity.
   */
  declare productSpecificOrderSettingsV3: ProductSpecificOrderSettingsV3<T>[];
  /**
   * One-to-many navigation property to the {@link ProductSpecificOrderSettingsV2} entity.
   */
  declare productSpecificOrderSettingsV2: ProductSpecificOrderSettingsV2<T>[];
  /**
   * One-to-one navigation property to the {@link ProductDefaultOrderSettings} entity.
   */
  declare productDefaultOrderSettings?: ProductDefaultOrderSettings<T> | null;
  /**
   * One-to-one navigation property to the {@link TrackingDimensionGroups} entity.
   */
  declare trackingDimensionGroup?: TrackingDimensionGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link DvReleasedProducts} entity.
   */
  declare alternativeReleasedProductV2?: DvReleasedProducts<T> | null;
  /**
   * One-to-many navigation property to the {@link DvReleasedProducts} entity.
   */
  declare dvReleasedProducts: DvReleasedProducts<T>[];
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare bomUnitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare primaryVendorV2?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductsV2} entity.
   */
  declare productV2?: ProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link AllProducts} entity.
   */
  declare everyProduct?: AllProducts<T> | null;
  /**
   * One-to-many navigation property to the {@link DvReleasedDistinctProducts} entity.
   */
  declare dvReleasedDistinctProducts: DvReleasedDistinctProducts<T>[];

  constructor(_entityApi: DvReleasedProductsApi<T>) {
    super(_entityApi);
  }
}

export interface DvReleasedProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  transferOrderOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productionConsumptionWidthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  isPurchasePriceAutomaticallyUpdated?: NoYes | null;
  transferOrderUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  willTotalPurchaseDiscountCalculationIncludeProduct?: NoYes | null;
  isVariantShelfLabelsPrintingEnabled?: NoYes | null;
  productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  necessaryProductionWorkingTimeSchedulingPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isSelfCheckoutRegistrationBlocked?: NoYes | null;
  unitCostDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchaseUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  willInventoryIssueAutomaticallyReportAsFinished?: NoYes | null;
  productVolume: DeserializedType<T, 'Edm.Decimal'>;
  tareProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  isPhantom?: NoYes | null;
  variableScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isUnitCostIncludingCharges?: NoYes | null;
  minimumCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  willPickingWorkbenchApplyBoxingLogic?: NoYes | null;
  isZeroPricePosRegistrationAllowed?: NoYes | null;
  intrastatChargePercentage: DeserializedType<T, 'Edm.Decimal'>;
  isScaleProduct?: NoYes | null;
  storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  shelfAdvicePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  mustKeyInCommentAtPosRegister?: NoYes | null;
  isUnitCostAutomaticallyUpdated?: NoYes | null;
  potencyBaseAttibuteTargetValue: DeserializedType<T, 'Edm.Decimal'>;
  defaultReceivingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productionConsumptionDensityConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  purchasePricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  unitCostQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isRestrictedForCoupons?: NoYes | null;
  scaleIndicator?: ScaleIndicatorBr | null;
  sellStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  constantScrapQuantity: DeserializedType<T, 'Edm.Decimal'>;
  packingDutyQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  isSalesPriceIncludingCharges?: NoYes | null;
  willTotalSalesDiscountCalculationIncludeProduct?: NoYes | null;
  potencyBaseAttributeValueEntryEvent?: PdsPotencyAttribRecordingEnum | null;
  salesChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesPriceCalculationContributionRatio: DeserializedType<T, 'Edm.Decimal'>;
  isSalesPriceAdjustmentAllowed?: NoYes | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceCalculationChargesPercentage: DeserializedType<T, 'Edm.Decimal'>;
  grossProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  posRegistrationPlannedBlockedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchasePriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isIntercompanyPurchaseUsageBlocked?: NoYes | null;
  shelfLifePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  productionConsumptionHeightConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  bomUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  maximumCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  isDiscountPosRegistrationProhibited?: NoYes | null;
  purchaseOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  fixedSalesPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  alternativeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  isPurchasePriceIncludingCharges?: NoYes | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  isShipAloneEnabled?: NoYes | null;
  rawMaterialPickingPrinciple?: WhsAllowMaterialOverPick | null;
  isStockedProduct?: NoYes | null;
  fixedPurchasePriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isPosRegistrationQuantityNegative?: NoYes | null;
  maximumPickQuantity: DeserializedType<T, 'Edm.Decimal'>;
  purchaseChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  primaryVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isInstallmentEligible?: NoYes | null;
  keyInQuantityRequirementsAtPosRegister?: RetailQtyKeyingRequirement | null;
  isIntercompanySalesUsageBlocked?: NoYes | null;
  yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isSalesWithholdingTaxCalculated?: NoYes | null;
  bestBeforePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  isManualDiscountPosRegistrationProhibited?: NoYes | null;
  grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  isCatchWeightProduct?: NoYes | null;
  fixedCostCharges: DeserializedType<T, 'Edm.Decimal'>;
  carryingCostAbcCode?: Abc | null;
  unitCost: DeserializedType<T, 'Edm.Decimal'>;
  isPosRegistrationBlocked?: NoYes | null;
  posRegistrationBlockedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isExemptFromAutomaticNotificationAndCancellation?: NoYes | null;
  fieldServiceProductType?: EcoResFieldServiceProductType | null;
  comparisonPriceBaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  willWorkCenterPickingAllowNegativeInventory?: NoYes | null;
  productType?: EcoResProductType | null;
  keyInPriceRequirementsAtPosRegister?: RetailPriceKeyingRequirement | null;
  approximateSalesTaxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  posRegistrationActivationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  willInventoryReceiptIgnoreFlushingPrinciple?: NoYes | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  netProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  costChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesPriceCalculationModel?: SalesPriceModel | null;
  salesOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  salesPricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  marginAbcCode?: Abc | null;
  catchWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  warehouseMobileDeviceDescriptionLine1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  warehouseMobileDeviceDescriptionLine2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  productionConsumptionDepthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  isUnitCostProductVariantSpecific?: NoYes | null;
  grossProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  shipStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productSpecificOrderSettingsV3: ProductSpecificOrderSettingsV3Type<T>[];
  productSpecificOrderSettingsV2: ProductSpecificOrderSettingsV2Type<T>[];
  productDefaultOrderSettings?: ProductDefaultOrderSettingsType<T> | null;
  trackingDimensionGroup?: TrackingDimensionGroupsType<T> | null;
  alternativeReleasedProductV2?: DvReleasedProductsType<T> | null;
  dvReleasedProducts: DvReleasedProductsType<T>[];
  bomUnitOfMeasure?: UnitsOfMeasureType<T> | null;
  primaryVendorV2?: VendorsV2Type<T> | null;
  productV2?: ProductsV2Type<T> | null;
  everyProduct?: AllProductsType<T> | null;
  dvReleasedDistinctProducts: DvReleasedDistinctProductsType<T>[];
}
