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
import type { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { NoYes } from './NoYes';
import { Abc } from './Abc';
import { WhsAllowMaterialOverPick } from './WhsAllowMaterialOverPick';
import { ScaleIndicatorBr } from './ScaleIndicatorBr';
import { WarrantyDurationTimeUnit } from './WarrantyDurationTimeUnit';
import { PmfProductType } from './PmfProductType';
import { WarrantablePriceRangeBaseType } from './WarrantablePriceRangeBaseType';
import { WhsAllowMaterialOverPickNonLp } from './WhsAllowMaterialOverPickNonLp';
import { PurchMatchingPolicyWithNotSetOption } from './PurchMatchingPolicyWithNotSetOption';
import { SalesPriceModel } from './SalesPriceModel';
import { WhsSalesUnitRestricted } from './WhsSalesUnitRestricted';
import { BomWhsReleasePolicy } from './BomWhsReleasePolicy';
import { EcoResProductSubtype } from './EcoResProductSubtype';
import { InventBatchMergeDateCalculationMethod } from './InventBatchMergeDateCalculationMethod';
import { EcoResProductServiceType } from './EcoResProductServiceType';
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
import { RevRecRevenueType } from './RevRecRevenueType';
import {
  ItemCoverageSettings,
  ItemCoverageSettingsType
} from './ItemCoverageSettings';
import {
  ProductAllocationLines,
  ProductAllocationLinesType
} from './ProductAllocationLines';
import {
  ProductSpecificOrderSettingsV3,
  ProductSpecificOrderSettingsV3Type
} from './ProductSpecificOrderSettingsV3';
import {
  CustomerProductDescriptions,
  CustomerProductDescriptionsType
} from './CustomerProductDescriptions';
import {
  OpenSalesPriceJournalLinesV2,
  OpenSalesPriceJournalLinesV2Type
} from './OpenSalesPriceJournalLinesV2';
import {
  BundleSalesOrderConfirmationBundleParentLines,
  BundleSalesOrderConfirmationBundleParentLinesType
} from './BundleSalesOrderConfirmationBundleParentLines';
import {
  CycleCountingWarehouseWorkLinesV2,
  CycleCountingWarehouseWorkLinesV2Type
} from './CycleCountingWarehouseWorkLinesV2';
import {
  ProductionOrderHeaders,
  ProductionOrderHeadersType
} from './ProductionOrderHeaders';
import {
  PurchaseAgreementConfirmationLines,
  PurchaseAgreementConfirmationLinesType
} from './PurchaseAgreementConfirmationLines';
import {
  ProductSpecificOrderSettingsV2,
  ProductSpecificOrderSettingsV2Type
} from './ProductSpecificOrderSettingsV2';
import {
  ProductDefaultOrderSettings,
  ProductDefaultOrderSettingsType
} from './ProductDefaultOrderSettings';
import {
  VendorProductDescriptionsV2,
  VendorProductDescriptionsV2Type
} from './VendorProductDescriptionsV2';
import {
  ItemArrivalJournalLinesV2,
  ItemArrivalJournalLinesV2Type
} from './ItemArrivalJournalLinesV2';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';
import {
  ReleasedProductDocumentAttachments,
  ReleasedProductDocumentAttachmentsType
} from './ReleasedProductDocumentAttachments';
import {
  BundleSalesInvoiceLines,
  BundleSalesInvoiceLinesType
} from './BundleSalesInvoiceLines';
import {
  VendInvoicePriceTolerances,
  VendInvoicePriceTolerancesType
} from './VendInvoicePriceTolerances';
import { CatchWeightTags, CatchWeightTagsType } from './CatchWeightTags';
import {
  InventoryTagCountingJournalLines,
  InventoryTagCountingJournalLinesType
} from './InventoryTagCountingJournalLines';
import {
  ProductionPickingListJournalEntries,
  ProductionPickingListJournalEntriesType
} from './ProductionPickingListJournalEntries';
import {
  ReleasedProductReadinessChecks,
  ReleasedProductReadinessChecksType
} from './ReleasedProductReadinessChecks';
import {
  BillOfMaterialsVersionsV3,
  BillOfMaterialsVersionsV3Type
} from './BillOfMaterialsVersionsV3';
import {
  WarehouseWorkPolicyProducts,
  WarehouseWorkPolicyProductsType
} from './WarehouseWorkPolicyProducts';
import {
  RetailDeliveryModeProductLines,
  RetailDeliveryModeProductLinesType
} from './RetailDeliveryModeProductLines';
import {
  OutboundShipmentOrderLines,
  OutboundShipmentOrderLinesType
} from './OutboundShipmentOrderLines';
import { ProductBarcodes, ProductBarcodesType } from './ProductBarcodes';
import {
  SalesAgreementConfirmationLines,
  SalesAgreementConfirmationLinesType
} from './SalesAgreementConfirmationLines';
import { RetailItemLabels, RetailItemLabelsType } from './RetailItemLabels';
import {
  SalesAgreementLines,
  SalesAgreementLinesType
} from './SalesAgreementLines';
import {
  ShipmentReceiptJournalLines,
  ShipmentReceiptJournalLinesType
} from './ShipmentReceiptJournalLines';
import {
  BundleSalesInvoiceBundleParentLines,
  BundleSalesInvoiceBundleParentLinesType
} from './BundleSalesInvoiceBundleParentLines';
import {
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import {
  PurchaseAgreementLines,
  PurchaseAgreementLinesType
} from './PurchaseAgreementLines';
import {
  ProductBarcodeAssociations,
  ProductBarcodeAssociationsType
} from './ProductBarcodeAssociations';
import {
  CdsReleasedDistinctProducts,
  CdsReleasedDistinctProductsType
} from './CdsReleasedDistinctProducts';
import {
  LineDiscountProductGroups,
  LineDiscountProductGroupsType
} from './LineDiscountProductGroups';
import {
  CatchWeightItemHandlingPolicies,
  CatchWeightItemHandlingPoliciesType
} from './CatchWeightItemHandlingPolicies';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import {
  ProjectCategoryEntities,
  ProjectCategoryEntitiesType
} from './ProjectCategoryEntities';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import { BarcodeSetups, BarcodeSetupsType } from './BarcodeSetups';
import {
  InventCountingReasonCodePolicies,
  InventCountingReasonCodePoliciesType
} from './InventCountingReasonCodePolicies';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import { AllProducts, AllProductsType } from './AllProducts';
import { Seasons, SeasonsType } from './Seasons';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import {
  MasterPlanningProductCoverageGroups,
  MasterPlanningProductCoverageGroupsType
} from './MasterPlanningProductCoverageGroups';
import {
  FiscalClassificationCodes,
  FiscalClassificationCodesType
} from './FiscalClassificationCodes';
import { AddressStates, AddressStatesType } from './AddressStates';
import {
  SupplementaryProductProductGroups,
  SupplementaryProductProductGroupsType
} from './SupplementaryProductProductGroups';
import {
  MultilineDiscountProductGroups,
  MultilineDiscountProductGroupsType
} from './MultilineDiscountProductGroups';
import { CostGroups, CostGroupsType } from './CostGroups';
import {
  AddressCountryRegions,
  AddressCountryRegionsType
} from './AddressCountryRegions';
import { InventoryPolicies, InventoryPoliciesType } from './InventoryPolicies';
import { ProductGroups, ProductGroupsType } from './ProductGroups';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { ProductColors, ProductColorsType } from './ProductColors';
import {
  ProductLifecycleStates,
  ProductLifecycleStatesType
} from './ProductLifecycleStates';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import {
  GstReliefCategories,
  GstReliefCategoriesType
} from './GstReliefCategories';
import { ProductionPools, ProductionPoolsType } from './ProductionPools';
import {
  CostCalculationGroups,
  CostCalculationGroupsType
} from './CostCalculationGroups';
import {
  InventoryReservationHierarchies,
  InventoryReservationHierarchiesType
} from './InventoryReservationHierarchies';
import {
  TrackingDimensionGroups,
  TrackingDimensionGroupsType
} from './TrackingDimensionGroups';
import { ExceptionCodes, ExceptionCodesType } from './ExceptionCodes';
import {
  CatchWeightItemHandlingPoliciesV2,
  CatchWeightItemHandlingPoliciesV2Type
} from './CatchWeightItemHandlingPoliciesV2';
import {
  ItemPriceToleranceGroups,
  ItemPriceToleranceGroupsType
} from './ItemPriceToleranceGroups';
import {
  ServiceAccountingCodes,
  ServiceAccountingCodesType
} from './ServiceAccountingCodes';
import {
  ReleasedEngineeringProductVersions,
  ReleasedEngineeringProductVersionsType
} from './ReleasedEngineeringProductVersions';
import {
  ClmIntegrationPurchaseAgreementLines,
  ClmIntegrationPurchaseAgreementLinesType
} from './ClmIntegrationPurchaseAgreementLines';
import { RecSetupBases, RecSetupBasesType } from './RecSetupBases';
import {
  TradeAllowanceAgreementMerchandisingEventProducts,
  TradeAllowanceAgreementMerchandisingEventProductsType
} from './TradeAllowanceAgreementMerchandisingEventProducts';
import {
  AssetMaintenanceWorkOrderLineProductJournals,
  AssetMaintenanceWorkOrderLineProductJournalsType
} from './AssetMaintenanceWorkOrderLineProductJournals';
import {
  RetailItemLabelsToPrint,
  RetailItemLabelsToPrintType
} from './RetailItemLabelsToPrint';
import { FormulaVersions, FormulaVersionsType } from './FormulaVersions';
import {
  EngineeringChangeOrderProductReleases,
  EngineeringChangeOrderProductReleasesType
} from './EngineeringChangeOrderProductReleases';
import {
  CycleCountingWarehouseWorkLinesV3,
  CycleCountingWarehouseWorkLinesV3Type
} from './CycleCountingWarehouseWorkLinesV3';
import {
  BundleSalesOrderConfirmationLines,
  BundleSalesOrderConfirmationLinesType
} from './BundleSalesOrderConfirmationLines';
import { ItemBatches, ItemBatchesType } from './ItemBatches';
import { ProductBarcodesV3, ProductBarcodesV3Type } from './ProductBarcodesV3';
import {
  ShipmentPackingSlipJournalLines,
  ShipmentPackingSlipJournalLinesType
} from './ShipmentPackingSlipJournalLines';
import {
  ProductApprovedVendors,
  ProductApprovedVendorsType
} from './ProductApprovedVendors';
import {
  BillOfMaterialsVersionsV2,
  BillOfMaterialsVersionsV2Type
} from './BillOfMaterialsVersionsV2';
import {
  CustomerProductDescriptionsV2,
  CustomerProductDescriptionsV2Type
} from './CustomerProductDescriptionsV2';
import {
  OrderCommittedLicensePlateReservations,
  OrderCommittedLicensePlateReservationsType
} from './OrderCommittedLicensePlateReservations';
import {
  RetailPackageLines,
  RetailPackageLinesType
} from './RetailPackageLines';
import {
  TradeAllowanceAgreementMerchandisingEventProductsV2,
  TradeAllowanceAgreementMerchandisingEventProductsV2Type
} from './TradeAllowanceAgreementMerchandisingEventProductsV2';
import {
  ServiceAgreementLines,
  ServiceAgreementLinesType
} from './ServiceAgreementLines';
import {
  BillOfMaterialsVersionsV4,
  BillOfMaterialsVersionsV4Type
} from './BillOfMaterialsVersionsV4';
import {
  TradeAllowanceAgreementProductsV2,
  TradeAllowanceAgreementProductsV2Type
} from './TradeAllowanceAgreementProductsV2';
import {
  OpenPurchasePriceJournalLinesV2,
  OpenPurchasePriceJournalLinesV2Type
} from './OpenPurchasePriceJournalLinesV2';
import {
  ProductAllocationLinesV2,
  ProductAllocationLinesV2Type
} from './ProductAllocationLinesV2';
import {
  CycleCountingWarehouseWorkLines,
  CycleCountingWarehouseWorkLinesType
} from './CycleCountingWarehouseWorkLines';
import {
  TradeAllowanceAgreementProducts,
  TradeAllowanceAgreementProductsType
} from './TradeAllowanceAgreementProducts';
import {
  ReportAsFinishedProductionJournalEntries,
  ReportAsFinishedProductionJournalEntriesType
} from './ReportAsFinishedProductionJournalEntries';
import {
  VendorProductDescriptions,
  VendorProductDescriptionsType
} from './VendorProductDescriptions';
import {
  ReleasedProductRebateAndDeductionsGroupAssignments,
  ReleasedProductRebateAndDeductionsGroupAssignmentsType
} from './ReleasedProductRebateAndDeductionsGroupAssignments';
import {
  InboundShipmentOrderLines,
  InboundShipmentOrderLinesType
} from './InboundShipmentOrderLines';
import { PlannedOrders, PlannedOrdersType } from './PlannedOrders';

/**
 * This class represents the entity "ReleasedProductsV2" of service "d365_metadata".
 */
export class ReleasedProductsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReleasedProductsV2Type<T>
{
  /**
   * Technical entity name for ReleasedProductsV2.
   */
  static override _entityName = 'ReleasedProductsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedProductsV2 entity.
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
   * Seventh Product Filter Code.
   * @nullable
   */
  declare seventhProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Accounting Code.
   * @nullable
   */
  declare serviceAccountingCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Catch Weight Item Handling Policy Name.
   * @nullable
   */
  declare catchWeightItemHandlingPolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Raw Material Picking Principle.
   * @nullable
   */
  declare rawMaterialPickingPrinciple?: WhsAllowMaterialOverPick | null;
  /**
   * Warehouse Filter Code.
   * @nullable
   */
  declare warehouseFilterCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Scale Indicator.
   * @nullable
   */
  declare scaleIndicator?: ScaleIndicatorBr | null;
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
   * Customs Export Tariff Code.
   * @nullable
   */
  declare customsExportTariffCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Update Product Variant Lifecycle State.
   * @nullable
   */
  declare updateProductVariantLifecycleState?: NoYes | null;
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
   * Inventory Counting Reason Code Policy Name.
   * @nullable
   */
  declare inventoryCountingReasonCodePolicyName?: DeserializedType<
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
   * Is Hazardous Material.
   * @nullable
   */
  declare isHazardousMaterial?: NoYes | null;
  /**
   * Is Pos Registration Quantity Negative.
   * @nullable
   */
  declare isPosRegistrationQuantityNegative?: NoYes | null;
  /**
   * Upper Warrantable Price Range Limit.
   */
  declare upperWarrantablePriceRangeLimit: DeserializedType<T, 'Edm.Decimal'>;
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
   * Sad Group.
   * @nullable
   */
  declare sadGroup?: DeserializedType<T, 'Edm.String'> | null;
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
   * Warranty Duration Time Unit.
   * @nullable
   */
  declare warrantyDurationTimeUnit?: WarrantyDurationTimeUnit | null;
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
   * Tax Substitution Code.
   * @nullable
   */
  declare taxSubstitutionCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Warrantable Price Range Base Type.
   * @nullable
   */
  declare warrantablePriceRangeBaseType?: WarrantablePriceRangeBaseType | null;
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
   * Raw Material Picking Principle Non License Plate Locations.
   * @nullable
   */
  declare rawMaterialPickingPrincipleNonLicensePlateLocations?: WhsAllowMaterialOverPickNonLp | null;
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
   * Sales Retail Inventory Availability Level Profile.
   * @nullable
   */
  declare salesRetailInventoryAvailabilityLevelProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transfer Order Overdelivery Percentage.
   */
  declare transferOrderOverdeliveryPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Tenth Product Filter Code.
   * @nullable
   */
  declare tenthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Customs Import Tariff Code.
   * @nullable
   */
  declare customsImportTariffCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Arrival Handling Time.
   */
  declare arrivalHandlingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sat Code.
   * @nullable
   */
  declare satCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Warehouse Release Sales Unit Restricted.
   * @nullable
   */
  declare warehouseReleaseSalesUnitRestricted?: WhsSalesUnitRestricted | null;
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
   * Warehouse Batch Details Capture Policy.
   * @nullable
   */
  declare warehouseBatchDetailsCapturePolicy?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Dual Use Product.
   * @nullable
   */
  declare isDualUseProduct?: NoYes | null;
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
   * Material Overpick Percentage.
   */
  declare materialOverpickPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse Bom Release Reservation Requirement Rule.
   * @nullable
   */
  declare warehouseBomReleaseReservationRequirementRule?: BomWhsReleasePolicy | null;
  /**
   * Eighth Product Filter Code.
   * @nullable
   */
  declare eighthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Warranty Duration Time.
   */
  declare warrantyDurationTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Service Fiscal Information Code.
   * @nullable
   */
  declare serviceFiscalInformationCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Sub Type.
   * @nullable
   */
  declare productSubType?: EcoResProductSubtype | null;
  /**
   * Is Tender Discount Pos Registration Prohibited.
   * @nullable
   */
  declare isTenderDiscountPosRegistrationProhibited?: NoYes | null;
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
   * Pack Size Category Id.
   * @nullable
   */
  declare packSizeCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Total Purchase Discount Calculation Include Product.
   * @nullable
   */
  declare willTotalPurchaseDiscountCalculationIncludeProduct?: NoYes | null;
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
   * Second Product Filter Code.
   * @nullable
   */
  declare secondProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Product Lifecycle State Id.
   * @nullable
   */
  declare productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Is Manual Discount Pos Registration Prohibited.
   * @nullable
   */
  declare isManualDiscountPosRegistrationProhibited?: NoYes | null;
  /**
   * Service Type.
   * @nullable
   */
  declare serviceType?: EcoResProductServiceType | null;
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
   * Hsn Code.
   * @nullable
   */
  declare hsnCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Warehouse Filter Group.
   * @nullable
   */
  declare warehouseFilterGroup?: DeserializedType<T, 'Edm.String'> | null;
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
   * Exempt.
   * @nullable
   */
  declare exempt?: NoYes | null;
  /**
   * Fourth Product Filter Code.
   * @nullable
   */
  declare fourthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Ninth Product Filter Code.
   * @nullable
   */
  declare ninthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sales Retail Inventory Availability Buffer.
   */
  declare salesRetailInventoryAvailabilityBuffer: DeserializedType<
    T,
    'Edm.Decimal'
  >;
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
   * Cnpj.
   * @nullable
   */
  declare cnpj?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Vendor Account Number.
   * @nullable
   */
  declare primaryVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Product Filter Code.
   * @nullable
   */
  declare thirdProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Retail Discount Pos Registration Prohibited.
   * @nullable
   */
  declare isRetailDiscountPosRegistrationProhibited?: NoYes | null;
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
   * Non Gst.
   * @nullable
   */
  declare nonGst?: NoYes | null;
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
   * Is Intrastat Excluded.
   * @nullable
   */
  declare isIntrastatExcluded?: NoYes | null;
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
   * Dual Use Code.
   * @nullable
   */
  declare dualUseCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sixth Product Filter Code.
   * @nullable
   */
  declare sixthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Fifth Product Filter Code.
   * @nullable
   */
  declare fifthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Product Filter Code.
   * @nullable
   */
  declare firstProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Rate Type.
   * @nullable
   */
  declare taxRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lower Warrantable Price Range Limit.
   */
  declare lowerWarrantablePriceRangeLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Production Group Id.
   * @nullable
   */
  declare productionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Key In Quantity Requirements At Pos Register.
   * @nullable
   */
  declare keyInQuantityRequirementsAtPosRegister?: RetailQtyKeyingRequirement | null;
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
   * Is Catch Weight Product.
   * @nullable
   */
  declare isCatchWeightProduct?: NoYes | null;
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
   * Pk Wi U Code.
   * @nullable
   */
  declare pkWiUCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Product Dimension Group Name.
   * @nullable
   */
  declare productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Underdelivery Percentage.
   */
  declare purchaseUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gross Depth.
   */
  declare grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Second Product Filter Group Id.
   * @nullable
   */
  declare secondProductFilterGroupId?: DeserializedType<T, 'Edm.String'> | null;
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
   * First Product Filter Group Id.
   * @nullable
   */
  declare firstProductFilterGroupId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Is Serial Number Active.
   * @nullable
   */
  declare isSerialNumberActive?: NoYes | null;
  /**
   * Is Batch Number Active.
   * @nullable
   */
  declare isBatchNumberActive?: NoYes | null;
  /**
   * Bundle.
   * @nullable
   */
  declare bundle?: NoYes | null;
  /**
   * Item Over Underdelivery Tolerance Group Id.
   * @nullable
   */
  declare itemOverUnderdeliveryToleranceGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customs Description.
   * @nullable
   */
  declare customsDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Order Landed Cost Group Id.
   * @nullable
   */
  declare transferOrderLandedCostGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Voyage Arrival Group Id.
   * @nullable
   */
  declare voyageArrivalGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Landed Cost Type Group Id.
   * @nullable
   */
  declare landedCostTypeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commodity Code Id.
   * @nullable
   */
  declare commodityCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rev Rec Bundle.
   * @nullable
   */
  declare revRecBundle?: NoYes | null;
  /**
   * Rev Rec Median Price Maximum Tolerance.
   */
  declare revRecMedianPriceMaximumTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rev Rec Median Price.
   * @nullable
   */
  declare revRecMedianPrice?: NoYes | null;
  /**
   * Rev Rec Default Revenue Recognition Schedule.
   * @nullable
   */
  declare revRecDefaultRevenueRecognitionSchedule?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rev Rec Exclude From Carve Out.
   * @nullable
   */
  declare revRecExcludeFromCarveOut?: NoYes | null;
  /**
   * Rev Rec Median Price Minimum Tolerance.
   */
  declare revRecMedianPriceMinimumTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rev Rec Revenue Recognition Enabled.
   * @nullable
   */
  declare revRecRevenueRecognitionEnabled?: NoYes | null;
  /**
   * Rev Rec Revenue Type.
   * @nullable
   */
  declare revRecRevenueType?: RevRecRevenueType | null;
  /**
   * Base Price Purchase.
   * @nullable
   */
  declare basePricePurchase?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link ItemCoverageSettings} entity.
   */
  declare itemCoverageSettings: ItemCoverageSettings<T>[];
  /**
   * One-to-many navigation property to the {@link ItemCoverageSettings} entity.
   */
  declare planningFormulaItemCoverageSettings: ItemCoverageSettings<T>[];
  /**
   * One-to-many navigation property to the {@link ProductAllocationLines} entity.
   */
  declare productAllocationLines: ProductAllocationLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductSpecificOrderSettingsV3} entity.
   */
  declare productSpecificOrderSettingsV3: ProductSpecificOrderSettingsV3<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerProductDescriptions} entity.
   */
  declare customerProductDescriptions: CustomerProductDescriptions<T>[];
  /**
   * One-to-many navigation property to the {@link OpenSalesPriceJournalLinesV2} entity.
   */
  declare openSalesPriceJournalLineV2: OpenSalesPriceJournalLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationBundleParentLines} entity.
   */
  declare bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLines<T>[];
  /**
   * One-to-many navigation property to the {@link CycleCountingWarehouseWorkLinesV2} entity.
   */
  declare cycleCountingWarehouseWorkLinesV2: CycleCountingWarehouseWorkLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionOrderHeaders} entity.
   */
  declare productionOrderHeaders: ProductionOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementConfirmationLines} entity.
   */
  declare purchaseAgreementLinesV2: PurchaseAgreementConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductSpecificOrderSettingsV2} entity.
   */
  declare productSpecificOrderSettingsV2: ProductSpecificOrderSettingsV2<T>[];
  /**
   * One-to-one navigation property to the {@link ProductDefaultOrderSettings} entity.
   */
  declare productDefaultOrderSettings?: ProductDefaultOrderSettings<T> | null;
  /**
   * One-to-many navigation property to the {@link VendorProductDescriptionsV2} entity.
   */
  declare vendorProductDescriptionsV2: VendorProductDescriptionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ItemArrivalJournalLinesV2} entity.
   */
  declare itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionAgreementHeaders} entity.
   */
  declare rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductDocumentAttachments} entity.
   */
  declare releasedProductDocumentAttachments: ReleasedProductDocumentAttachments<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesInvoiceLines} entity.
   */
  declare bundleSalesInvoiceLines: BundleSalesInvoiceLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoicePriceTolerances} entity.
   */
  declare vendInvoicePriceTolerance: VendInvoicePriceTolerances<T>[];
  /**
   * One-to-many navigation property to the {@link CatchWeightTags} entity.
   */
  declare catchWeightTags: CatchWeightTags<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryTagCountingJournalLines} entity.
   */
  declare inventoryTagCountingJournalLines: InventoryTagCountingJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionPickingListJournalEntries} entity.
   */
  declare productionPickingListJournalEntries: ProductionPickingListJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductReadinessChecks} entity.
   */
  declare releasedProductReadinessChecks: ReleasedProductReadinessChecks<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV3} entity.
   */
  declare billOfMaterialsVersionsV3: BillOfMaterialsVersionsV3<T>[];
  /**
   * One-to-many navigation property to the {@link WarehouseWorkPolicyProducts} entity.
   */
  declare warehouseWorkPolicyProducts: WarehouseWorkPolicyProducts<T>[];
  /**
   * One-to-many navigation property to the {@link RetailDeliveryModeProductLines} entity.
   */
  declare retailDeliveryModeProductLine: RetailDeliveryModeProductLines<T>[];
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderLines} entity.
   */
  declare outboundShipmentOrderLines: OutboundShipmentOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductBarcodes} entity.
   */
  declare productBarcodes: ProductBarcodes<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmationLines} entity.
   */
  declare salesAgreementConfirmationLines: SalesAgreementConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailItemLabels} entity.
   */
  declare retailItemLabel: RetailItemLabels<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementLines} entity.
   */
  declare salesAgreementLines: SalesAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link ShipmentReceiptJournalLines} entity.
   */
  declare shipmentReceiptJournalLines: ShipmentReceiptJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesInvoiceBundleParentLines} entity.
   */
  declare bundleSalesInvoiceBundleParentLines: BundleSalesInvoiceBundleParentLines<T>[];
  /**
   * One-to-many navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeaders: QualityOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementLines} entity.
   */
  declare purchaseAgreementLine: PurchaseAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductBarcodeAssociations} entity.
   */
  declare productBarcodesV2: ProductBarcodeAssociations<T>[];
  /**
   * One-to-one navigation property to the {@link CdsReleasedDistinctProducts} entity.
   */
  declare releasedDistinctProductCds?: CdsReleasedDistinctProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link LineDiscountProductGroups} entity.
   */
  declare salesLineDiscountProductGroup?: LineDiscountProductGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link CatchWeightItemHandlingPolicies} entity.
   */
  declare catchWeightItemHandlingPolicy?: CatchWeightItemHandlingPolicies<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare alternativeProductVersion?: ProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectCategoryEntities} entity.
   */
  declare projectCategory?: ProjectCategoryEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductsV2} entity.
   */
  declare productV2?: ProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link BarcodeSetups} entity.
   */
  declare barcodeSetup?: BarcodeSetups<T> | null;
  /**
   * One-to-one navigation property to the {@link InventCountingReasonCodePolicies} entity.
   */
  declare inventCountingReasonCodePolicy?: InventCountingReasonCodePolicies<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare catchWeightUnitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link AllProducts} entity.
   */
  declare everyProduct?: AllProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link Seasons} entity.
   */
  declare productLifeCycleSeason?: Seasons<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare alternativeProductSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare alternativeProductStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link MasterPlanningProductCoverageGroups} entity.
   */
  declare productCoverageGroup?: MasterPlanningProductCoverageGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link FiscalClassificationCodes} entity.
   */
  declare fiscalClassificationCode?: FiscalClassificationCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressStates} entity.
   */
  declare originState?: AddressStates<T> | null;
  /**
   * One-to-one navigation property to the {@link SupplementaryProductProductGroups} entity.
   */
  declare salesSupplementaryProductProductGroup?: SupplementaryProductProductGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link MultilineDiscountProductGroups} entity.
   */
  declare purchaseMultilineDiscountProductGroup?: MultilineDiscountProductGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare alternativeReleasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];
  /**
   * One-to-one navigation property to the {@link CostGroups} entity.
   */
  declare costGroup?: CostGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCountryRegions} entity.
   */
  declare originCountryRegion?: AddressCountryRegions<T> | null;
  /**
   * One-to-one navigation property to the {@link InventoryPolicies} entity.
   */
  declare inventoryPolicy?: InventoryPolicies<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductGroups} entity.
   */
  declare productGroup?: ProductGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare defaultProductColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductLifecycleStates} entity.
   */
  declare productLifecycleState?: ProductLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare primaryVendorV2?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link GstReliefCategories} entity.
   */
  declare gstReliefCategory?: GstReliefCategories<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductionPools} entity.
   */
  declare productionPool?: ProductionPools<T> | null;
  /**
   * One-to-one navigation property to the {@link CostCalculationGroups} entity.
   */
  declare costCalculationGroup?: CostCalculationGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link InventoryReservationHierarchies} entity.
   */
  declare inventoryReservationHierarchy?: InventoryReservationHierarchies<T> | null;
  /**
   * One-to-one navigation property to the {@link TrackingDimensionGroups} entity.
   */
  declare trackingDimensionGroup?: TrackingDimensionGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ExceptionCodes} entity.
   */
  declare itemFiscalClassificationException?: ExceptionCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link CatchWeightItemHandlingPoliciesV2} entity.
   */
  declare catchWeightItemHandlingPolicyV2?: CatchWeightItemHandlingPoliciesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemPriceToleranceGroups} entity.
   */
  declare purchasePriceToleranceGroup?: ItemPriceToleranceGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceAccountingCodes} entity.
   */
  declare taxServiceAccountingCode?: ServiceAccountingCodes<T> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedEngineeringProductVersions} entity.
   */
  declare releasedEngineeringProductVersions: ReleasedEngineeringProductVersions<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreementLines} entity.
   */
  declare clmIntegrationPurchaseAgreementLines: ClmIntegrationPurchaseAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link RecSetupBases} entity.
   */
  declare revRecSetupBasis: RecSetupBases<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventProducts} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventProducts: TradeAllowanceAgreementMerchandisingEventProducts<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLineProductJournals} entity.
   */
  declare workOrderLineProductConsumptionLinesReleasedProduct: AssetMaintenanceWorkOrderLineProductJournals<T>[];
  /**
   * One-to-many navigation property to the {@link RetailItemLabelsToPrint} entity.
   */
  declare retailItemLabelToPrintEntity: RetailItemLabelsToPrint<T>[];
  /**
   * One-to-many navigation property to the {@link FormulaVersions} entity.
   */
  declare formulaVersions: FormulaVersions<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductReleases} entity.
   */
  declare engineeringChangeOrderProductReleases: EngineeringChangeOrderProductReleases<T>[];
  /**
   * One-to-many navigation property to the {@link CycleCountingWarehouseWorkLinesV3} entity.
   */
  declare cycleCountingWarehouseWorkLinesV3: CycleCountingWarehouseWorkLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationLines} entity.
   */
  declare bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link ItemBatches} entity.
   */
  declare itemBatches: ItemBatches<T>[];
  /**
   * One-to-many navigation property to the {@link ProductBarcodesV3} entity.
   */
  declare productBarcodesV3: ProductBarcodesV3<T>[];
  /**
   * One-to-many navigation property to the {@link ShipmentPackingSlipJournalLines} entity.
   */
  declare shipmentPackingSlipJournalLines: ShipmentPackingSlipJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductApprovedVendors} entity.
   */
  declare productApprovedVendors: ProductApprovedVendors<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV2} entity.
   */
  declare billOfMaterialsVersionsV2: BillOfMaterialsVersionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerProductDescriptionsV2} entity.
   */
  declare customerProductDescriptionsV2: CustomerProductDescriptionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link OrderCommittedLicensePlateReservations} entity.
   */
  declare orderCommittedLicensePlateReservations: OrderCommittedLicensePlateReservations<T>[];
  /**
   * One-to-many navigation property to the {@link RetailPackageLines} entity.
   */
  declare retailPackageLines: RetailPackageLines<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventProductsV2} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventProductsV2: TradeAllowanceAgreementMerchandisingEventProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceAgreementLines} entity.
   */
  declare serviceAgreementLines: ServiceAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV4} entity.
   */
  declare billOfMaterialsVersionsV4: BillOfMaterialsVersionsV4<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementProductsV2} entity.
   */
  declare tradeAllowanceAgreementProductsV2: TradeAllowanceAgreementProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link OpenPurchasePriceJournalLinesV2} entity.
   */
  declare openPurchasePriceJournalLineV2: OpenPurchasePriceJournalLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProductAllocationLinesV2} entity.
   */
  declare productAllocationLinesV2: ProductAllocationLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link CycleCountingWarehouseWorkLines} entity.
   */
  declare cycleCountingWarehouseWorkLines: CycleCountingWarehouseWorkLines<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementProducts} entity.
   */
  declare tradeAllowanceAgreementProducts: TradeAllowanceAgreementProducts<T>[];
  /**
   * One-to-many navigation property to the {@link ReportAsFinishedProductionJournalEntries} entity.
   */
  declare reportAsFinishedProductionJournalEntries: ReportAsFinishedProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link VendorProductDescriptions} entity.
   */
  declare vendorProductDescriptions: VendorProductDescriptions<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductRebateAndDeductionsGroupAssignments} entity.
   */
  declare releasedProductRebateAndDeductionsGroupAssignments: ReleasedProductRebateAndDeductionsGroupAssignments<T>[];
  /**
   * One-to-many navigation property to the {@link InboundShipmentOrderLines} entity.
   */
  declare inboundShipmentOrderLines: InboundShipmentOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link PlannedOrders} entity.
   */
  declare plannedOrders: PlannedOrders<T>[];

  constructor(_entityApi: ReleasedProductsV2Api<T>) {
    super(_entityApi);
  }
}

export interface ReleasedProductsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  isPhantom?: NoYes | null;
  isPurchasePriceIncludingCharges?: NoYes | null;
  itemFiscalClassificationCode?: DeserializedType<T, 'Edm.String'> | null;
  seventhProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  serviceAccountingCode?: DeserializedType<T, 'Edm.String'> | null;
  marginAbcCode?: Abc | null;
  isIcmsTaxAppliedOnService?: NoYes | null;
  shippingAndReceivingSortOrderCode: DeserializedType<T, 'Edm.Int32'>;
  productionConsumptionWidthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  alternativeProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightItemHandlingPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  rawMaterialPickingPrinciple?: WhsAllowMaterialOverPick | null;
  warehouseFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  productionConsumptionDepthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  defaultProductConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  itemModelGroupId?: DeserializedType<T, 'Edm.String'> | null;
  grossProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  alternativeProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  isSalesWithholdingTaxCalculated?: NoYes | null;
  scaleIndicator?: ScaleIndicatorBr | null;
  productVolume: DeserializedType<T, 'Edm.Decimal'>;
  trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  purchaseSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  customsExportTariffCode?: DeserializedType<T, 'Edm.String'> | null;
  updateProductVariantLifecycleState?: NoYes | null;
  planningFormulaItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseMobileDeviceDescriptionLine1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  inventoryCountingReasonCodePolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  warehouseMobileDeviceDescriptionLine2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  salesItemWithholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  isUnitCostProductVariantSpecific?: NoYes | null;
  isHazardousMaterial?: NoYes | null;
  isPosRegistrationQuantityNegative?: NoYes | null;
  upperWarrantablePriceRangeLimit: DeserializedType<T, 'Edm.Decimal'>;
  posRegistrationPlannedBlockedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sellEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sadGroup?: DeserializedType<T, 'Edm.String'> | null;
  isPurchaseWithholdingTaxCalculated?: NoYes | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  warrantyDurationTimeUnit?: WarrantyDurationTimeUnit | null;
  commissionProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isExemptFromAutomaticNotificationAndCancellation?: NoYes | null;
  taxSubstitutionCode?: DeserializedType<T, 'Edm.String'> | null;
  productionType?: PmfProductType | null;
  netProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  productionPoolId?: DeserializedType<T, 'Edm.String'> | null;
  salesSupplementaryProductProductGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  warrantablePriceRangeBaseType?: WarrantablePriceRangeBaseType | null;
  storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  purchasePricingPrecision: DeserializedType<T, 'Edm.Int32'>;
  bomUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceCalculationContributionRatio: DeserializedType<T, 'Edm.Decimal'>;
  isSelfCheckoutRegistrationBlocked?: NoYes | null;
  catchWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  rawMaterialPickingPrincipleNonLicensePlateLocations?: WhsAllowMaterialOverPickNonLp | null;
  vendorInvoiceLineMatchingPolicy?: PurchMatchingPolicyWithNotSetOption | null;
  sellStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  physicalDimensionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  carryingCostAbcCode?: Abc | null;
  costCalculationBomLevel: DeserializedType<T, 'Edm.Int32'>;
  salesRetailInventoryAvailabilityLevelProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  transferOrderOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  tenthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
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
  customsImportTariffCode?: DeserializedType<T, 'Edm.String'> | null;
  arrivalHandlingTime: DeserializedType<T, 'Edm.Int32'>;
  satCode?: DeserializedType<T, 'Edm.String'> | null;
  intrastatCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  areTransportationManagementProcessesEnabled?: NoYes | null;
  warehouseReleaseSalesUnitRestricted?: WhsSalesUnitRestricted | null;
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
  warehouseBatchDetailsCapturePolicy?: DeserializedType<T, 'Edm.String'> | null;
  isDualUseProduct?: NoYes | null;
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
  materialOverpickPercentage: DeserializedType<T, 'Edm.Decimal'>;
  warehouseBomReleaseReservationRequirementRule?: BomWhsReleasePolicy | null;
  eighthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  salesLineDiscountProductGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  posRegistrationActivationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maximumCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productLifeCycleValidToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  warrantyDurationTime: DeserializedType<T, 'Edm.Int32'>;
  serviceFiscalInformationCode?: DeserializedType<T, 'Edm.String'> | null;
  productSubType?: EcoResProductSubtype | null;
  isTenderDiscountPosRegistrationProhibited?: NoYes | null;
  purchaseSupplementaryProductProductGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  packSizeCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  willTotalPurchaseDiscountCalculationIncludeProduct?: NoYes | null;
  salesChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  batchMergeDateCalculationMethod?: InventBatchMergeDateCalculationMethod | null;
  salesMultilineDiscountProductGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  salesChargeProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  secondProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  isIntercompanyPurchaseUsageBlocked?: NoYes | null;
  alternativeProductConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  salesOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isDiscountPosRegistrationProhibited?: NoYes | null;
  bestBeforePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  purchaseOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  salesUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isManualDiscountPosRegistrationProhibited?: NoYes | null;
  serviceType?: EcoResProductServiceType | null;
  necessaryProductionWorkingTimeSchedulingPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  inventoryGstReliefCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  approvedVendorCheckMethod?: PdsVendorCheckItem | null;
  salesRebateProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryReservationHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  hsnCode?: DeserializedType<T, 'Edm.String'> | null;
  flushingPrinciple?: ProdFlushingPrincipItem | null;
  salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  tareProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  warehouseFilterGroup?: DeserializedType<T, 'Edm.String'> | null;
  approximateSalesTaxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  packingDutyQuantity: DeserializedType<T, 'Edm.Decimal'>;
  purchaseLineDiscountProductGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  willInventoryIssueAutomaticallyReportAsFinished?: NoYes | null;
  exempt?: NoYes | null;
  fourthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  productFiscalInformationType?: DeserializedType<T, 'Edm.String'> | null;
  packageHandlingTime: DeserializedType<T, 'Edm.Int32'>;
  grossProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  ninthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  shelfLifePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  defaultProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  salesRetailInventoryAvailabilityBuffer: DeserializedType<T, 'Edm.Decimal'>;
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
  cnpj?: DeserializedType<T, 'Edm.String'> | null;
  primaryVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  thirdProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  isRetailDiscountPosRegistrationProhibited?: NoYes | null;
  productType?: EcoResProductType | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  alternativeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  bomLevel: DeserializedType<T, 'Edm.Int32'>;
  nonGst?: NoYes | null;
  purchaseItemWithholdingTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isZeroPricePosRegistrationAllowed?: NoYes | null;
  costChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isUnitCostAutomaticallyUpdated?: NoYes | null;
  defaultDirectDeliveryWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  productTaxationOrigin?: FiTaxationOriginBr | null;
  isIntrastatExcluded?: NoYes | null;
  isVariantShelfLabelsPrintingEnabled?: NoYes | null;
  unitCost: DeserializedType<T, 'Edm.Decimal'>;
  dualUseCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  alternativeProductUsageCondition?: ItemNumAlternative | null;
  salesPriceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  willTotalSalesDiscountCalculationIncludeProduct?: NoYes | null;
  purchasePriceToleranceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isInstallmentEligible?: NoYes | null;
  baseSalesPriceSource?: SalesPriceModelBasic | null;
  sixthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  serialNumberGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productLifeCycleValidFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemFiscalClassificationExceptionCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  ngpCode: DeserializedType<T, 'Edm.Int32'>;
  fifthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  firstProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  taxRateType?: DeserializedType<T, 'Edm.String'> | null;
  lowerWarrantablePriceRangeLimit: DeserializedType<T, 'Edm.Decimal'>;
  productionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  keyInQuantityRequirementsAtPosRegister?: RetailQtyKeyingRequirement | null;
  defaultOrderType?: ReqPoType | null;
  productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isCatchWeightProduct?: NoYes | null;
  productionConsumptionHeightConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  continuityEventDuration: DeserializedType<T, 'Edm.Int32'>;
  pkWiUCode?: DeserializedType<T, 'Edm.String'> | null;
  isPosRegistrationBlocked?: NoYes | null;
  batchNumberGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  purchaseUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  secondProductFilterGroupId?: DeserializedType<T, 'Edm.String'> | null;
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
  firstProductFilterGroupId?: DeserializedType<T, 'Edm.String'> | null;
  shelfAdvicePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  originStateId?: DeserializedType<T, 'Edm.String'> | null;
  isSerialNumberActive?: NoYes | null;
  isBatchNumberActive?: NoYes | null;
  bundle?: NoYes | null;
  itemOverUnderdeliveryToleranceGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  customsDescription?: DeserializedType<T, 'Edm.String'> | null;
  transferOrderLandedCostGroupId?: DeserializedType<T, 'Edm.String'> | null;
  voyageArrivalGroupId?: DeserializedType<T, 'Edm.String'> | null;
  landedCostTypeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  commodityCodeId?: DeserializedType<T, 'Edm.String'> | null;
  revRecBundle?: NoYes | null;
  revRecMedianPriceMaximumTolerance: DeserializedType<T, 'Edm.Decimal'>;
  revRecMedianPrice?: NoYes | null;
  revRecDefaultRevenueRecognitionSchedule?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  revRecExcludeFromCarveOut?: NoYes | null;
  revRecMedianPriceMinimumTolerance: DeserializedType<T, 'Edm.Decimal'>;
  revRecRevenueRecognitionEnabled?: NoYes | null;
  revRecRevenueType?: RevRecRevenueType | null;
  basePricePurchase?: NoYes | null;
  itemCoverageSettings: ItemCoverageSettingsType<T>[];
  planningFormulaItemCoverageSettings: ItemCoverageSettingsType<T>[];
  productAllocationLines: ProductAllocationLinesType<T>[];
  productSpecificOrderSettingsV3: ProductSpecificOrderSettingsV3Type<T>[];
  customerProductDescriptions: CustomerProductDescriptionsType<T>[];
  openSalesPriceJournalLineV2: OpenSalesPriceJournalLinesV2Type<T>[];
  bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLinesType<T>[];
  cycleCountingWarehouseWorkLinesV2: CycleCountingWarehouseWorkLinesV2Type<T>[];
  productionOrderHeaders: ProductionOrderHeadersType<T>[];
  purchaseAgreementLinesV2: PurchaseAgreementConfirmationLinesType<T>[];
  productSpecificOrderSettingsV2: ProductSpecificOrderSettingsV2Type<T>[];
  productDefaultOrderSettings?: ProductDefaultOrderSettingsType<T> | null;
  vendorProductDescriptionsV2: VendorProductDescriptionsV2Type<T>[];
  itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2Type<T>[];
  rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
  releasedProductDocumentAttachments: ReleasedProductDocumentAttachmentsType<T>[];
  bundleSalesInvoiceLines: BundleSalesInvoiceLinesType<T>[];
  vendInvoicePriceTolerance: VendInvoicePriceTolerancesType<T>[];
  catchWeightTags: CatchWeightTagsType<T>[];
  inventoryTagCountingJournalLines: InventoryTagCountingJournalLinesType<T>[];
  productionPickingListJournalEntries: ProductionPickingListJournalEntriesType<T>[];
  releasedProductReadinessChecks: ReleasedProductReadinessChecksType<T>[];
  billOfMaterialsVersionsV3: BillOfMaterialsVersionsV3Type<T>[];
  warehouseWorkPolicyProducts: WarehouseWorkPolicyProductsType<T>[];
  retailDeliveryModeProductLine: RetailDeliveryModeProductLinesType<T>[];
  outboundShipmentOrderLines: OutboundShipmentOrderLinesType<T>[];
  productBarcodes: ProductBarcodesType<T>[];
  salesAgreementConfirmationLines: SalesAgreementConfirmationLinesType<T>[];
  retailItemLabel: RetailItemLabelsType<T>[];
  salesAgreementLines: SalesAgreementLinesType<T>[];
  shipmentReceiptJournalLines: ShipmentReceiptJournalLinesType<T>[];
  bundleSalesInvoiceBundleParentLines: BundleSalesInvoiceBundleParentLinesType<T>[];
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  purchaseAgreementLine: PurchaseAgreementLinesType<T>[];
  productBarcodesV2: ProductBarcodeAssociationsType<T>[];
  releasedDistinctProductCds?: CdsReleasedDistinctProductsType<T> | null;
  salesLineDiscountProductGroup?: LineDiscountProductGroupsType<T> | null;
  catchWeightItemHandlingPolicy?: CatchWeightItemHandlingPoliciesType<T> | null;
  alternativeProductVersion?: ProductVersionsType<T> | null;
  projectCategory?: ProjectCategoryEntitiesType<T> | null;
  productV2?: ProductsV2Type<T> | null;
  barcodeSetup?: BarcodeSetupsType<T> | null;
  inventCountingReasonCodePolicy?: InventCountingReasonCodePoliciesType<T> | null;
  catchWeightUnitOfMeasure?: UnitsOfMeasureType<T> | null;
  everyProduct?: AllProductsType<T> | null;
  productLifeCycleSeason?: SeasonsType<T> | null;
  alternativeProductSize?: ProductSizesType<T> | null;
  alternativeProductStyle?: ProductStylesType<T> | null;
  productCoverageGroup?: MasterPlanningProductCoverageGroupsType<T> | null;
  fiscalClassificationCode?: FiscalClassificationCodesType<T> | null;
  originState?: AddressStatesType<T> | null;
  salesSupplementaryProductProductGroup?: SupplementaryProductProductGroupsType<T> | null;
  purchaseMultilineDiscountProductGroup?: MultilineDiscountProductGroupsType<T> | null;
  alternativeReleasedProductV2?: ReleasedProductsV2Type<T> | null;
  releasedProductsV2: ReleasedProductsV2Type<T>[];
  costGroup?: CostGroupsType<T> | null;
  originCountryRegion?: AddressCountryRegionsType<T> | null;
  inventoryPolicy?: InventoryPoliciesType<T> | null;
  productGroup?: ProductGroupsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  defaultProductColor?: ProductColorsType<T> | null;
  productLifecycleState?: ProductLifecycleStatesType<T> | null;
  primaryVendorV2?: VendorsV2Type<T> | null;
  gstReliefCategory?: GstReliefCategoriesType<T> | null;
  productionPool?: ProductionPoolsType<T> | null;
  costCalculationGroup?: CostCalculationGroupsType<T> | null;
  inventoryReservationHierarchy?: InventoryReservationHierarchiesType<T> | null;
  trackingDimensionGroup?: TrackingDimensionGroupsType<T> | null;
  itemFiscalClassificationException?: ExceptionCodesType<T> | null;
  catchWeightItemHandlingPolicyV2?: CatchWeightItemHandlingPoliciesV2Type<T> | null;
  purchasePriceToleranceGroup?: ItemPriceToleranceGroupsType<T> | null;
  taxServiceAccountingCode?: ServiceAccountingCodesType<T> | null;
  releasedEngineeringProductVersions: ReleasedEngineeringProductVersionsType<T>[];
  clmIntegrationPurchaseAgreementLines: ClmIntegrationPurchaseAgreementLinesType<T>[];
  revRecSetupBasis: RecSetupBasesType<T>[];
  tradeAllowanceAgreementMerchandisingEventProducts: TradeAllowanceAgreementMerchandisingEventProductsType<T>[];
  workOrderLineProductConsumptionLinesReleasedProduct: AssetMaintenanceWorkOrderLineProductJournalsType<T>[];
  retailItemLabelToPrintEntity: RetailItemLabelsToPrintType<T>[];
  formulaVersions: FormulaVersionsType<T>[];
  engineeringChangeOrderProductReleases: EngineeringChangeOrderProductReleasesType<T>[];
  cycleCountingWarehouseWorkLinesV3: CycleCountingWarehouseWorkLinesV3Type<T>[];
  bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLinesType<T>[];
  itemBatches: ItemBatchesType<T>[];
  productBarcodesV3: ProductBarcodesV3Type<T>[];
  shipmentPackingSlipJournalLines: ShipmentPackingSlipJournalLinesType<T>[];
  productApprovedVendors: ProductApprovedVendorsType<T>[];
  billOfMaterialsVersionsV2: BillOfMaterialsVersionsV2Type<T>[];
  customerProductDescriptionsV2: CustomerProductDescriptionsV2Type<T>[];
  orderCommittedLicensePlateReservations: OrderCommittedLicensePlateReservationsType<T>[];
  retailPackageLines: RetailPackageLinesType<T>[];
  tradeAllowanceAgreementMerchandisingEventProductsV2: TradeAllowanceAgreementMerchandisingEventProductsV2Type<T>[];
  serviceAgreementLines: ServiceAgreementLinesType<T>[];
  billOfMaterialsVersionsV4: BillOfMaterialsVersionsV4Type<T>[];
  tradeAllowanceAgreementProductsV2: TradeAllowanceAgreementProductsV2Type<T>[];
  openPurchasePriceJournalLineV2: OpenPurchasePriceJournalLinesV2Type<T>[];
  productAllocationLinesV2: ProductAllocationLinesV2Type<T>[];
  cycleCountingWarehouseWorkLines: CycleCountingWarehouseWorkLinesType<T>[];
  tradeAllowanceAgreementProducts: TradeAllowanceAgreementProductsType<T>[];
  reportAsFinishedProductionJournalEntries: ReportAsFinishedProductionJournalEntriesType<T>[];
  vendorProductDescriptions: VendorProductDescriptionsType<T>[];
  releasedProductRebateAndDeductionsGroupAssignments: ReleasedProductRebateAndDeductionsGroupAssignmentsType<T>[];
  inboundShipmentOrderLines: InboundShipmentOrderLinesType<T>[];
  plannedOrders: PlannedOrdersType<T>[];
}
