// @ts-nocheck
import {
  QStringPath,
  QNumberPath,
  QDateTimeOffsetPath,
  QEnumPath,
  QueryObject,
  QId,
  QStringParam,
  QEnumParam,
  QNumberParam,
  QDateTimeOffsetParam,
  QBooleanPath,
} from "@odata2ts/odata-query-objects";
import type {
  ItemCoverageSettingsId,
  SiteGateId,
  ProductStyleV2Id,
  ProductStyleGroupLineV2Id,
  EngineeringProductCategoryDetailsId,
  ProductSizeGroupLineV2Id,
  PhysicalProductDimensionDetailsId,
  ItemCoverageSettingsV2Id,
  TransferLineFiscalInfoId,
  PackingSlipTrackingInformationId,
  KittingParametersId,
  ProductColorGroupLineV2Id,
  ProductDefaultOrderSettingsId,
  InboundShipmentOrderRequestStatusId,
  ItemBasePricePendingId,
  EngineeringChangeOrderProductRouteOperationPropertiesV2Id,
  ItemCoverageWithDerivedSettingsEntityId,
  OutboundShipmentOrderRequestStatusId,
  InboundLoadPackingStructuresId,
  WhsMobileWorkUnavailableId,
  EngineeringChangeOrderProductRouteOperationPropertiesId,
  EngineeringProductCategoryAttributeDetailsId,
  ProductColorV2Id,
  EngineeringChangeOrderProductFormulaStepConsumptionId,
  ProductSizeV2Id,
  LabelLayoutDataSourceParametersId,
  ReqItemCoverageDecouplingPointPeriodSettingsId,
  WarehouseWorkLinesId,
  ReplenishmentRuleLinesV2Id,
  MaterialHandlingParametersId,
  WhsMobileWorkLocationCompleteId,
  DeliveryModeId,
  ProdComParametersId,
  WhsMobileWorkGuidedCycleCountingId,
  InventoryAccountingKpiGoalsId,
  ShippingParametersId,
} from "./MicrosoftDynamicsDataEntitiesModel";
import {
  NoYes,
  ReqMinSatisfy,
  ReqCovType,
  ReqOnHandConsumptionStrategy,
  ReqPoType,
  InventSiteGateTypeIn,
  EcoResProductType,
  EcoResProductSubtype,
  PmfProductType,
  EcoResVariantConfigurationTechnologyType,
  EcoResPhysicalDimensionType,
  TableGroupAll,
  KittingCheckLoad,
  KittingCheckPickingListRegistration,
  SalesDeliveryDateControlType,
  WhsewShipmentOrderRequestStatus,
  GupBasePriceType,
  RouteOprPriority,
  EngChgEcmChangeTypes,
  RouteFormula,
  RouteOprType,
  WhsModule,
  PdsBatchAttribToleranceAction,
  WhsLabelLayoutDataSourceParameterType,
  WhsWorkStatus,
  WhsWorkType,
  RetailReplenishmentRuleType,
  InventProdComBranchType,
  InventAdjustmentSpec,
  ErrorTolerance,
  ItmCostPostingDatePrinciple,
} from "./MicrosoftDynamicsDataEntitiesModel";

export class QItemCoverageSettings extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly itemNumber = new QStringPath(this.withPrefix("ItemNumber"));
  public readonly coverageWarehouseLocationId = new QStringPath(
    this.withPrefix("CoverageWarehouseLocationId"),
  );
  public readonly coverageItemBatchNumber = new QStringPath(
    this.withPrefix("CoverageItemBatchNumber"),
  );
  public readonly coverageProductColorId = new QStringPath(
    this.withPrefix("CoverageProductColorId"),
  );
  public readonly coverageProductSizeId = new QStringPath(
    this.withPrefix("CoverageProductSizeId"),
  );
  public readonly coverageProductStyleId = new QStringPath(
    this.withPrefix("CoverageProductStyleId"),
  );
  public readonly coverageWarehouseId = new QStringPath(
    this.withPrefix("CoverageWarehouseId"),
  );
  public readonly coverageItemSerialNumber = new QStringPath(
    this.withPrefix("CoverageItemSerialNumber"),
  );
  public readonly coverageSiteId = new QStringPath(
    this.withPrefix("CoverageSiteId"),
  );
  public readonly coverageInventoryStatusId = new QStringPath(
    this.withPrefix("CoverageInventoryStatusId"),
  );
  public readonly coverageProductConfigurationId = new QStringPath(
    this.withPrefix("CoverageProductConfigurationId"),
  );
  public readonly coveragePeriodDays = new QNumberPath(
    this.withPrefix("CoveragePeriodDays"),
  );
  public readonly vendorAccountNumber = new QStringPath(
    this.withPrefix("VendorAccountNumber"),
  );
  public readonly approvedRequisitionTimeFenceDays = new QNumberPath(
    this.withPrefix("ApprovedRequisitionTimeFenceDays"),
  );
  public readonly lastPlanningFormulaPriorityChangedDate =
    new QDateTimeOffsetPath(
      this.withPrefix("LastPlanningFormulaPriorityChangedDate"),
    );
  public readonly procurementLeadTimeDays = new QNumberPath(
    this.withPrefix("ProcurementLeadTimeDays"),
  );
  public readonly defaultPlanningFormulaPriority = new QNumberPath(
    this.withPrefix("DefaultPlanningFormulaPriority"),
  );
  public readonly isProcurementLeadTimeOverridden = new QEnumPath(
    this.withPrefix("IsProcurementLeadTimeOverridden"),
    NoYes,
  );
  public readonly automaticFirmingTimeFenceDays = new QNumberPath(
    this.withPrefix("AutomaticFirmingTimeFenceDays"),
  );
  public readonly isConsumeOnHandOverridden = new QEnumPath(
    this.withPrefix("IsConsumeOnHandOverridden"),
    NoYes,
  );
  public readonly productionLeadTimeDays = new QNumberPath(
    this.withPrefix("ProductionLeadTimeDays"),
  );
  public readonly minimumOnHandFulfillmentMethod = new QEnumPath(
    this.withPrefix("MinimumOnHandFulfillmentMethod"),
    ReqMinSatisfy,
  );
  public readonly planningFormulaItemNumber = new QStringPath(
    this.withPrefix("PlanningFormulaItemNumber"),
  );
  public readonly maximumOnHandInventoryQuantity = new QNumberPath(
    this.withPrefix("MaximumOnHandInventoryQuantity"),
  );
  public readonly areTimeFencesOverridden = new QEnumPath(
    this.withPrefix("AreTimeFencesOverridden"),
    NoYes,
  );
  public readonly freezeTimeFenceDays = new QNumberPath(
    this.withPrefix("FreezeTimeFenceDays"),
  );
  public readonly isTransferLeadTimeOverridden = new QEnumPath(
    this.withPrefix("IsTransferLeadTimeOverridden"),
    NoYes,
  );
  public readonly capacitySchedulingTimeFenceDays = new QNumberPath(
    this.withPrefix("CapacitySchedulingTimeFenceDays"),
  );
  public readonly negativeDays = new QNumberPath(
    this.withPrefix("NegativeDays"),
  );
  public readonly minimumOnHandInventoryQuantity = new QNumberPath(
    this.withPrefix("MinimumOnHandInventoryQuantity"),
  );
  public readonly maximumOnHandInventorySafetyKeyId = new QStringPath(
    this.withPrefix("MaximumOnHandInventorySafetyKeyId"),
  );
  public readonly positiveDays = new QNumberPath(
    this.withPrefix("PositiveDays"),
  );
  public readonly coverageTimeFenceDays = new QNumberPath(
    this.withPrefix("CoverageTimeFenceDays"),
  );
  public readonly currentPlanningFormulaPriority = new QNumberPath(
    this.withPrefix("CurrentPlanningFormulaPriority"),
  );
  public readonly productCoverageGroupId = new QStringPath(
    this.withPrefix("ProductCoverageGroupId"),
  );
  public readonly minimumOnHandInventorySafetyKeyId = new QStringPath(
    this.withPrefix("MinimumOnHandInventorySafetyKeyId"),
  );
  public readonly areCoverageGroupSettingsOverridden = new QEnumPath(
    this.withPrefix("AreCoverageGroupSettingsOverridden"),
    NoYes,
  );
  public readonly isTransferLeadTimeUsingWorkingDays = new QEnumPath(
    this.withPrefix("IsTransferLeadTimeUsingWorkingDays"),
    NoYes,
  );
  public readonly isProcumentLeadTimeUsingWorkingDays = new QEnumPath(
    this.withPrefix("IsProcumentLeadTimeUsingWorkingDays"),
    NoYes,
  );
  public readonly bomOrFormulaExplosionTimeFenceDays = new QNumberPath(
    this.withPrefix("BOMOrFormulaExplosionTimeFenceDays"),
  );
  public readonly areGeneralSettingsOverridden = new QEnumPath(
    this.withPrefix("AreGeneralSettingsOverridden"),
    NoYes,
  );
  public readonly defaultPlannedTransferOrderFromWarehouseId = new QStringPath(
    this.withPrefix("DefaultPlannedTransferOrderFromWarehouseId"),
  );
  public readonly coverageMethod = new QEnumPath(
    this.withPrefix("CoverageMethod"),
    ReqCovType,
  );
  public readonly consumeOnHandInventoryMethod = new QEnumPath(
    this.withPrefix("ConsumeOnHandInventoryMethod"),
    ReqOnHandConsumptionStrategy,
  );
  public readonly transferLeadTimeDays = new QNumberPath(
    this.withPrefix("TransferLeadTimeDays"),
  );
  public readonly plannedOrderType = new QEnumPath(
    this.withPrefix("PlannedOrderType"),
    ReqPoType,
  );
  public readonly isPlannedOrderTypeOverridden = new QEnumPath(
    this.withPrefix("IsPlannedOrderTypeOverridden"),
    NoYes,
  );
  public readonly isProductionLeadTimeUsingWorkingDays = new QEnumPath(
    this.withPrefix("IsProductionLeadTimeUsingWorkingDays"),
    NoYes,
  );
  public readonly isProductionLeadTimeOverridden = new QEnumPath(
    this.withPrefix("IsProductionLeadTimeOverridden"),
    NoYes,
  );
  public readonly isMinimumOnHandSafetyPeriodUsed = new QEnumPath(
    this.withPrefix("IsMinimumOnHandSafetyPeriodUsed"),
    NoYes,
  );
}

export const qItemCoverageSettings = new QItemCoverageSettings();

export class QItemCoverageSettingsId extends QId<ItemCoverageSettingsId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("ItemNumber", "itemNumber"),
    new QStringParam(
      "CoverageWarehouseLocationId",
      "coverageWarehouseLocationId",
    ),
    new QStringParam("CoverageItemBatchNumber", "coverageItemBatchNumber"),
    new QStringParam("CoverageProductColorId", "coverageProductColorId"),
    new QStringParam("CoverageProductSizeId", "coverageProductSizeId"),
    new QStringParam("CoverageProductStyleId", "coverageProductStyleId"),
    new QStringParam("CoverageWarehouseId", "coverageWarehouseId"),
    new QStringParam("CoverageItemSerialNumber", "coverageItemSerialNumber"),
    new QStringParam("CoverageSiteId", "coverageSiteId"),
    new QStringParam("CoverageInventoryStatusId", "coverageInventoryStatusId"),
    new QStringParam(
      "CoverageProductConfigurationId",
      "coverageProductConfigurationId",
    ),
  ];

  getParams() {
    return this.params;
  }
}

export class QSiteGate extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly type = new QEnumPath(
    this.withPrefix("Type"),
    InventSiteGateTypeIn,
  );
  public readonly gateId = new QStringPath(this.withPrefix("GateId"));
  public readonly siteId = new QStringPath(this.withPrefix("SiteId"));
  public readonly description = new QStringPath(this.withPrefix("Description"));
}

export const qSiteGate = new QSiteGate();

export class QSiteGateId extends QId<SiteGateId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QEnumParam("Type", "type"),
    new QStringParam("GateId", "gateId"),
    new QStringParam("SiteId", "siteId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QProductStyleV2 extends QueryObject {
  public readonly styleId = new QStringPath(this.withPrefix("StyleId"));
  public readonly hexcode = new QStringPath(this.withPrefix("Hexcode"));
  public readonly displayOrder = new QNumberPath(
    this.withPrefix("DisplayOrder"),
  );
  public readonly refinerGroup = new QStringPath(
    this.withPrefix("RefinerGroup"),
  );
  public readonly url = new QStringPath(this.withPrefix("Url"));
}

export const qProductStyleV2 = new QProductStyleV2();

export class QProductStyleV2Id extends QId<ProductStyleV2Id> {
  private readonly params = [new QStringParam("StyleId", "styleId")];

  getParams() {
    return this.params;
  }
}

export class QProductStyleGroupLineV2 extends QueryObject {
  public readonly productStyleGroupId = new QStringPath(
    this.withPrefix("ProductStyleGroupId"),
  );
  public readonly productStyleId = new QStringPath(
    this.withPrefix("ProductStyleId"),
  );
  public readonly refinerGroup = new QStringPath(
    this.withPrefix("RefinerGroup"),
  );
  public readonly replenishmentWeight = new QNumberPath(
    this.withPrefix("ReplenishmentWeight"),
  );
  public readonly styleName = new QStringPath(this.withPrefix("StyleName"));
  public readonly styleDescription = new QStringPath(
    this.withPrefix("StyleDescription"),
  );
  public readonly hexcode = new QStringPath(this.withPrefix("Hexcode"));
  public readonly displayOrder = new QNumberPath(
    this.withPrefix("DisplayOrder"),
  );
  public readonly barcodeNumber = new QStringPath(
    this.withPrefix("BarcodeNumber"),
  );
  public readonly url = new QStringPath(this.withPrefix("Url"));
}

export const qProductStyleGroupLineV2 = new QProductStyleGroupLineV2();

export class QProductStyleGroupLineV2Id extends QId<ProductStyleGroupLineV2Id> {
  private readonly params = [
    new QStringParam("ProductStyleGroupId", "productStyleGroupId"),
    new QStringParam("ProductStyleId", "productStyleId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QEngineeringProductCategoryDetails extends QueryObject {
  public readonly engineeringProductCategoryName = new QStringPath(
    this.withPrefix("EngineeringProductCategoryName"),
  );
  public readonly productType = new QEnumPath(
    this.withPrefix("ProductType"),
    EcoResProductType,
  );
  public readonly productReadinessPolicyName = new QStringPath(
    this.withPrefix("ProductReadinessPolicyName"),
  );
  public readonly productSubtype = new QEnumPath(
    this.withPrefix("ProductSubtype"),
    EcoResProductSubtype,
  );
  public readonly engineeringOrganizationId = new QStringPath(
    this.withPrefix("EngineeringOrganizationId"),
  );
  public readonly productionType = new QEnumPath(
    this.withPrefix("ProductionType"),
    PmfProductType,
  );
  public readonly pdsCwProduct = new QEnumPath(
    this.withPrefix("PdsCWProduct"),
    NoYes,
  );
  public readonly variantConfigurationTechnology = new QEnumPath(
    this.withPrefix("VariantConfigurationTechnology"),
    EcoResVariantConfigurationTechnologyType,
  );
  public readonly productDimensionGroupName = new QStringPath(
    this.withPrefix("ProductDimensionGroupName"),
  );
  public readonly versionNumberingRuleName = new QStringPath(
    this.withPrefix("VersionNumberingRuleName"),
  );
  public readonly createdProductLifecycleStateId = new QStringPath(
    this.withPrefix("CreatedProductLifecycleStateId"),
  );
  public readonly enforceDateRule = new QEnumPath(
    this.withPrefix("EnforceDateRule"),
    NoYes,
  );
  public readonly productReleasePolicyName = new QStringPath(
    this.withPrefix("ProductReleasePolicyName"),
  );
}

export const qEngineeringProductCategoryDetails =
  new QEngineeringProductCategoryDetails();

export class QEngineeringProductCategoryDetailsId extends QId<EngineeringProductCategoryDetailsId> {
  private readonly params = [
    new QStringParam(
      "EngineeringProductCategoryName",
      "engineeringProductCategoryName",
    ),
  ];

  getParams() {
    return this.params;
  }
}

export class QProductSizeGroupLineV2 extends QueryObject {
  public readonly productSizeGroupId = new QStringPath(
    this.withPrefix("ProductSizeGroupId"),
  );
  public readonly sizeName = new QStringPath(this.withPrefix("SizeName"));
  public readonly sizeDescription = new QStringPath(
    this.withPrefix("SizeDescription"),
  );
  public readonly productSizeId = new QStringPath(
    this.withPrefix("ProductSizeId"),
  );
  public readonly refinerGroup = new QStringPath(
    this.withPrefix("RefinerGroup"),
  );
  public readonly replenishmentWeight = new QNumberPath(
    this.withPrefix("ReplenishmentWeight"),
  );
  public readonly hexcode = new QStringPath(this.withPrefix("Hexcode"));
  public readonly displayOrder = new QNumberPath(
    this.withPrefix("DisplayOrder"),
  );
  public readonly barcodeNumber = new QStringPath(
    this.withPrefix("BarcodeNumber"),
  );
  public readonly url = new QStringPath(this.withPrefix("Url"));
}

export const qProductSizeGroupLineV2 = new QProductSizeGroupLineV2();

export class QProductSizeGroupLineV2Id extends QId<ProductSizeGroupLineV2Id> {
  private readonly params = [
    new QStringParam("ProductSizeGroupId", "productSizeGroupId"),
    new QStringParam("SizeName", "sizeName"),
  ];

  getParams() {
    return this.params;
  }
}

export class QPhysicalProductDimensionDetails extends QueryObject {
  public readonly productNumber = new QStringPath(
    this.withPrefix("ProductNumber"),
  );
  public readonly dimensionType = new QEnumPath(
    this.withPrefix("DimensionType"),
    EcoResPhysicalDimensionType,
  );
  public readonly physicalUnitSymbol = new QStringPath(
    this.withPrefix("PhysicalUnitSymbol"),
  );
  public readonly physicalDepth = new QNumberPath(
    this.withPrefix("PhysicalDepth"),
  );
  public readonly massUnitSymbol = new QStringPath(
    this.withPrefix("MassUnitSymbol"),
  );
  public readonly lengthUnitSymbol = new QStringPath(
    this.withPrefix("LengthUnitSymbol"),
  );
  public readonly physicalWidth = new QNumberPath(
    this.withPrefix("PhysicalWidth"),
  );
  public readonly physicalWeight = new QNumberPath(
    this.withPrefix("PhysicalWeight"),
  );
  public readonly physicalHeight = new QNumberPath(
    this.withPrefix("PhysicalHeight"),
  );
  public readonly volumeUnitSymbol = new QStringPath(
    this.withPrefix("VolumeUnitSymbol"),
  );
}

export const qPhysicalProductDimensionDetails =
  new QPhysicalProductDimensionDetails();

export class QPhysicalProductDimensionDetailsId extends QId<PhysicalProductDimensionDetailsId> {
  private readonly params = [
    new QStringParam("ProductNumber", "productNumber"),
    new QEnumParam("DimensionType", "dimensionType"),
    new QStringParam("PhysicalUnitSymbol", "physicalUnitSymbol"),
  ];

  getParams() {
    return this.params;
  }
}

export class QItemCoverageSettingsV2 extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly itemNumber = new QStringPath(this.withPrefix("ItemNumber"));
  public readonly coverageWarehouseLocationId = new QStringPath(
    this.withPrefix("CoverageWarehouseLocationId"),
  );
  public readonly coverageItemBatchNumber = new QStringPath(
    this.withPrefix("CoverageItemBatchNumber"),
  );
  public readonly coverageProductColorId = new QStringPath(
    this.withPrefix("CoverageProductColorId"),
  );
  public readonly coverageProductSizeId = new QStringPath(
    this.withPrefix("CoverageProductSizeId"),
  );
  public readonly coverageProductStyleId = new QStringPath(
    this.withPrefix("CoverageProductStyleId"),
  );
  public readonly coverageProductVersionId = new QStringPath(
    this.withPrefix("CoverageProductVersionId"),
  );
  public readonly coverageWarehouseId = new QStringPath(
    this.withPrefix("CoverageWarehouseId"),
  );
  public readonly coverageItemSerialNumber = new QStringPath(
    this.withPrefix("CoverageItemSerialNumber"),
  );
  public readonly coverageSiteId = new QStringPath(
    this.withPrefix("CoverageSiteId"),
  );
  public readonly coverageInventoryStatusId = new QStringPath(
    this.withPrefix("CoverageInventoryStatusId"),
  );
  public readonly coverageProductConfigurationId = new QStringPath(
    this.withPrefix("CoverageProductConfigurationId"),
  );
  public readonly coveragePeriodDays = new QNumberPath(
    this.withPrefix("CoveragePeriodDays"),
  );
  public readonly vendorAccountNumber = new QStringPath(
    this.withPrefix("VendorAccountNumber"),
  );
  public readonly approvedRequisitionTimeFenceDays = new QNumberPath(
    this.withPrefix("ApprovedRequisitionTimeFenceDays"),
  );
  public readonly lastPlanningFormulaPriorityChangedDate =
    new QDateTimeOffsetPath(
      this.withPrefix("LastPlanningFormulaPriorityChangedDate"),
    );
  public readonly procurementLeadTimeDays = new QNumberPath(
    this.withPrefix("ProcurementLeadTimeDays"),
  );
  public readonly defaultPlanningFormulaPriority = new QNumberPath(
    this.withPrefix("DefaultPlanningFormulaPriority"),
  );
  public readonly isProcurementLeadTimeOverridden = new QEnumPath(
    this.withPrefix("IsProcurementLeadTimeOverridden"),
    NoYes,
  );
  public readonly automaticFirmingTimeFenceDays = new QNumberPath(
    this.withPrefix("AutomaticFirmingTimeFenceDays"),
  );
  public readonly isConsumeOnHandOverridden = new QEnumPath(
    this.withPrefix("IsConsumeOnHandOverridden"),
    NoYes,
  );
  public readonly productionLeadTimeDays = new QNumberPath(
    this.withPrefix("ProductionLeadTimeDays"),
  );
  public readonly minimumOnHandFulfillmentMethod = new QEnumPath(
    this.withPrefix("MinimumOnHandFulfillmentMethod"),
    ReqMinSatisfy,
  );
  public readonly planningFormulaItemNumber = new QStringPath(
    this.withPrefix("PlanningFormulaItemNumber"),
  );
  public readonly maximumOnHandInventoryQuantity = new QNumberPath(
    this.withPrefix("MaximumOnHandInventoryQuantity"),
  );
  public readonly areTimeFencesOverridden = new QEnumPath(
    this.withPrefix("AreTimeFencesOverridden"),
    NoYes,
  );
  public readonly freezeTimeFenceDays = new QNumberPath(
    this.withPrefix("FreezeTimeFenceDays"),
  );
  public readonly isTransferLeadTimeOverridden = new QEnumPath(
    this.withPrefix("IsTransferLeadTimeOverridden"),
    NoYes,
  );
  public readonly capacitySchedulingTimeFenceDays = new QNumberPath(
    this.withPrefix("CapacitySchedulingTimeFenceDays"),
  );
  public readonly negativeDays = new QNumberPath(
    this.withPrefix("NegativeDays"),
  );
  public readonly minimumOnHandInventoryQuantity = new QNumberPath(
    this.withPrefix("MinimumOnHandInventoryQuantity"),
  );
  public readonly coverageInventoryDimensionId = new QStringPath(
    this.withPrefix("CoverageInventoryDimensionId"),
  );
  public readonly maximumOnHandInventorySafetyKeyId = new QStringPath(
    this.withPrefix("MaximumOnHandInventorySafetyKeyId"),
  );
  public readonly positiveDays = new QNumberPath(
    this.withPrefix("PositiveDays"),
  );
  public readonly coverageTimeFenceDays = new QNumberPath(
    this.withPrefix("CoverageTimeFenceDays"),
  );
  public readonly currentPlanningFormulaPriority = new QNumberPath(
    this.withPrefix("CurrentPlanningFormulaPriority"),
  );
  public readonly productCoverageGroupId = new QStringPath(
    this.withPrefix("ProductCoverageGroupId"),
  );
  public readonly minimumOnHandInventorySafetyKeyId = new QStringPath(
    this.withPrefix("MinimumOnHandInventorySafetyKeyId"),
  );
  public readonly areCoverageGroupSettingsOverridden = new QEnumPath(
    this.withPrefix("AreCoverageGroupSettingsOverridden"),
    NoYes,
  );
  public readonly isTransferLeadTimeUsingWorkingDays = new QEnumPath(
    this.withPrefix("IsTransferLeadTimeUsingWorkingDays"),
    NoYes,
  );
  public readonly isProcumentLeadTimeUsingWorkingDays = new QEnumPath(
    this.withPrefix("IsProcumentLeadTimeUsingWorkingDays"),
    NoYes,
  );
  public readonly mustUseLatestPossibleSupplyFirst = new QEnumPath(
    this.withPrefix("MustUseLatestPossibleSupplyFirst"),
    NoYes,
  );
  public readonly bomOrFormulaExplosionTimeFenceDays = new QNumberPath(
    this.withPrefix("BOMOrFormulaExplosionTimeFenceDays"),
  );
  public readonly areGeneralSettingsOverridden = new QEnumPath(
    this.withPrefix("AreGeneralSettingsOverridden"),
    NoYes,
  );
  public readonly defaultPlannedTransferOrderFromWarehouseId = new QStringPath(
    this.withPrefix("DefaultPlannedTransferOrderFromWarehouseId"),
  );
  public readonly coverageMethod = new QEnumPath(
    this.withPrefix("CoverageMethod"),
    ReqCovType,
  );
  public readonly consumeOnHandInventoryMethod = new QEnumPath(
    this.withPrefix("ConsumeOnHandInventoryMethod"),
    ReqOnHandConsumptionStrategy,
  );
  public readonly transferLeadTimeDays = new QNumberPath(
    this.withPrefix("TransferLeadTimeDays"),
  );
  public readonly plannedOrderType = new QEnumPath(
    this.withPrefix("PlannedOrderType"),
    ReqPoType,
  );
  public readonly isPlannedOrderTypeOverridden = new QEnumPath(
    this.withPrefix("IsPlannedOrderTypeOverridden"),
    NoYes,
  );
  public readonly isProductionLeadTimeUsingWorkingDays = new QEnumPath(
    this.withPrefix("IsProductionLeadTimeUsingWorkingDays"),
    NoYes,
  );
  public readonly isProductionLeadTimeOverridden = new QEnumPath(
    this.withPrefix("IsProductionLeadTimeOverridden"),
    NoYes,
  );
  public readonly isMinimumOnHandSafetyPeriodUsed = new QEnumPath(
    this.withPrefix("IsMinimumOnHandSafetyPeriodUsed"),
    NoYes,
  );
  public readonly orderSpikeThreshold = new QNumberPath(
    this.withPrefix("OrderSpikeThreshold"),
  );
  public readonly averageDailyUsage = new QNumberPath(
    this.withPrefix("AverageDailyUsage"),
  );
  public readonly distributionBasedAduEnabled = new QEnumPath(
    this.withPrefix("DistributionBasedADUEnabled"),
    NoYes,
  );
  public readonly useDecouplingPointPeriodSettings = new QEnumPath(
    this.withPrefix("UseDecouplingPointPeriodSettings"),
    NoYes,
  );
  public readonly reorderPoint = new QNumberPath(
    this.withPrefix("ReorderPoint"),
  );
  public readonly orderCycle = new QNumberPath(this.withPrefix("OrderCycle"));
}

export const qItemCoverageSettingsV2 = new QItemCoverageSettingsV2();

export class QItemCoverageSettingsV2Id extends QId<ItemCoverageSettingsV2Id> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("ItemNumber", "itemNumber"),
    new QStringParam(
      "CoverageWarehouseLocationId",
      "coverageWarehouseLocationId",
    ),
    new QStringParam("CoverageItemBatchNumber", "coverageItemBatchNumber"),
    new QStringParam("CoverageProductColorId", "coverageProductColorId"),
    new QStringParam("CoverageProductSizeId", "coverageProductSizeId"),
    new QStringParam("CoverageProductStyleId", "coverageProductStyleId"),
    new QStringParam("CoverageProductVersionId", "coverageProductVersionId"),
    new QStringParam("CoverageWarehouseId", "coverageWarehouseId"),
    new QStringParam("CoverageItemSerialNumber", "coverageItemSerialNumber"),
    new QStringParam("CoverageSiteId", "coverageSiteId"),
    new QStringParam("CoverageInventoryStatusId", "coverageInventoryStatusId"),
    new QStringParam(
      "CoverageProductConfigurationId",
      "coverageProductConfigurationId",
    ),
  ];

  getParams() {
    return this.params;
  }
}

export class QTransferLineFiscalInfo extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly transferId = new QStringPath(this.withPrefix("TransferId"));
  public readonly lineNum = new QNumberPath(this.withPrefix("LineNum"));
  public readonly shipTaxItemGroup = new QStringPath(
    this.withPrefix("ShipTaxItemGroup"),
  );
  public readonly priceChangedManually = new QEnumPath(
    this.withPrefix("PriceChangedManually"),
    NoYes,
  );
  public readonly receiveTaxGroup = new QStringPath(
    this.withPrefix("ReceiveTaxGroup"),
  );
  public readonly priceUnit = new QNumberPath(this.withPrefix("PriceUnit"));
  public readonly receivePrice = new QNumberPath(
    this.withPrefix("ReceivePrice"),
  );
  public readonly shipTaxGroup = new QStringPath(
    this.withPrefix("ShipTaxGroup"),
  );
  public readonly receiveTaxItemGroup = new QStringPath(
    this.withPrefix("ReceiveTaxItemGroup"),
  );
  public readonly shipCfopId = new QStringPath(this.withPrefix("ShipCFOPId"));
  public readonly receiveCfopId = new QStringPath(
    this.withPrefix("ReceiveCFOPId"),
  );
  public readonly shipPrice = new QNumberPath(this.withPrefix("ShipPrice"));
}

export const qTransferLineFiscalInfo = new QTransferLineFiscalInfo();

export class QTransferLineFiscalInfoId extends QId<TransferLineFiscalInfoId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("TransferId", "transferId"),
    new QNumberParam("LineNum", "lineNum"),
  ];

  getParams() {
    return this.params;
  }
}

export class QPackingSlipTrackingInformation extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly salesOrderNumber = new QStringPath(
    this.withPrefix("SalesOrderNumber"),
  );
  public readonly packingSlipNumber = new QStringPath(
    this.withPrefix("PackingSlipNumber"),
  );
  public readonly deliveryDate = new QDateTimeOffsetPath(
    this.withPrefix("DeliveryDate"),
  );
  public readonly trackingNumber = new QStringPath(
    this.withPrefix("TrackingNumber"),
  );
  public readonly trackingUrl = new QStringPath(this.withPrefix("TrackingURL"));
}

export const qPackingSlipTrackingInformation =
  new QPackingSlipTrackingInformation();

export class QPackingSlipTrackingInformationId extends QId<PackingSlipTrackingInformationId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("SalesOrderNumber", "salesOrderNumber"),
    new QStringParam("PackingSlipNumber", "packingSlipNumber"),
    new QDateTimeOffsetParam("DeliveryDate", "deliveryDate"),
    new QStringParam("TrackingNumber", "trackingNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QKittingParameters extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly validFor = new QEnumPath(
    this.withPrefix("ValidFor"),
    TableGroupAll,
  );
  public readonly itemRelation = new QStringPath(
    this.withPrefix("ItemRelation"),
  );
  public readonly useKitTradeAgreement = new QEnumPath(
    this.withPrefix("UseKitTradeAgreement"),
    NoYes,
  );
  public readonly partialDelivery = new QEnumPath(
    this.withPrefix("PartialDelivery"),
    NoYes,
  );
  public readonly useKitFinancialDimensions = new QEnumPath(
    this.withPrefix("UseKitFinancialDimensions"),
    NoYes,
  );
  public readonly whsCompleteKitCheck = new QEnumPath(
    this.withPrefix("WHSCompleteKitCheck"),
    KittingCheckLoad,
  );
  public readonly showKitPriceOnKit = new QEnumPath(
    this.withPrefix("ShowKitPriceOnKit"),
    NoYes,
  );
  public readonly reserveItemsAutomatically = new QEnumPath(
    this.withPrefix("ReserveItemsAutomatically"),
    NoYes,
  );
  public readonly partPrice = new QEnumPath(
    this.withPrefix("PartPrice"),
    NoYes,
  );
  public readonly manualPosting = new QEnumPath(
    this.withPrefix("ManualPosting"),
    NoYes,
  );
  public readonly completeKitCheck = new QEnumPath(
    this.withPrefix("CompleteKitCheck"),
    KittingCheckPickingListRegistration,
  );
  public readonly partialReturn = new QEnumPath(
    this.withPrefix("PartialReturn"),
    NoYes,
  );
  public readonly reserveCompleteKits = new QEnumPath(
    this.withPrefix("ReserveCompleteKits"),
    NoYes,
  );
  public readonly setUpProductDimensions = new QEnumPath(
    this.withPrefix("SetUpProductDimensions"),
    NoYes,
  );
  public readonly setUpStorageDimensions = new QEnumPath(
    this.withPrefix("SetUpStorageDimensions"),
    NoYes,
  );
}

export const qKittingParameters = new QKittingParameters();

export class QKittingParametersId extends QId<KittingParametersId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QEnumParam("ValidFor", "validFor"),
    new QStringParam("ItemRelation", "itemRelation"),
  ];

  getParams() {
    return this.params;
  }
}

export class QProductColorGroupLineV2 extends QueryObject {
  public readonly productColorGroupId = new QStringPath(
    this.withPrefix("ProductColorGroupId"),
  );
  public readonly colorName = new QStringPath(this.withPrefix("ColorName"));
  public readonly refinerGroup = new QStringPath(
    this.withPrefix("RefinerGroup"),
  );
  public readonly colorDescription = new QStringPath(
    this.withPrefix("ColorDescription"),
  );
  public readonly replenishmentWeight = new QNumberPath(
    this.withPrefix("ReplenishmentWeight"),
  );
  public readonly productColorId = new QStringPath(
    this.withPrefix("ProductColorId"),
  );
  public readonly hexcode = new QStringPath(this.withPrefix("Hexcode"));
  public readonly displayOrder = new QNumberPath(
    this.withPrefix("DisplayOrder"),
  );
  public readonly barcodeNumber = new QStringPath(
    this.withPrefix("BarcodeNumber"),
  );
  public readonly url = new QStringPath(this.withPrefix("Url"));
}

export const qProductColorGroupLineV2 = new QProductColorGroupLineV2();

export class QProductColorGroupLineV2Id extends QId<ProductColorGroupLineV2Id> {
  private readonly params = [
    new QStringParam("ProductColorGroupId", "productColorGroupId"),
    new QStringParam("ColorName", "colorName"),
  ];

  getParams() {
    return this.params;
  }
}

export class QProductDefaultOrderSettings extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly itemNumber = new QStringPath(this.withPrefix("ItemNumber"));
  public readonly isSalesProcessingStopped = new QEnumPath(
    this.withPrefix("IsSalesProcessingStopped"),
    NoYes,
  );
  public readonly maximumSalesOrderQuantity = new QNumberPath(
    this.withPrefix("MaximumSalesOrderQuantity"),
  );
  public readonly isProcurementWarehouseMandatory = new QEnumPath(
    this.withPrefix("IsProcurementWarehouseMandatory"),
    NoYes,
  );
  public readonly procurementSiteId = new QStringPath(
    this.withPrefix("ProcurementSiteId"),
  );
  public readonly minimumSalesOrderQuantity = new QNumberPath(
    this.withPrefix("MinimumSalesOrderQuantity"),
  );
  public readonly procurementLeadTimeDays = new QNumberPath(
    this.withPrefix("ProcurementLeadTimeDays"),
  );
  public readonly maximumInventoryOrderQuantity = new QNumberPath(
    this.withPrefix("MaximumInventoryOrderQuantity"),
  );
  public readonly inventoryAtpBackwardDemandTimeFenceDays = new QNumberPath(
    this.withPrefix("InventoryATPBackwardDemandTimeFenceDays"),
  );
  public readonly salesQuantityMultiples = new QNumberPath(
    this.withPrefix("SalesQuantityMultiples"),
  );
  public readonly procurementWarehouseId = new QStringPath(
    this.withPrefix("ProcurementWarehouseId"),
  );
  public readonly inventoryLeadTimeDays = new QNumberPath(
    this.withPrefix("InventoryLeadTimeDays"),
  );
  public readonly inventorySiteId = new QStringPath(
    this.withPrefix("InventorySiteId"),
  );
  public readonly isProcurementProcessingstopped = new QEnumPath(
    this.withPrefix("IsProcurementProcessingstopped"),
    NoYes,
  );
  public readonly procurementQuantityMultiples = new QNumberPath(
    this.withPrefix("ProcurementQuantityMultiples"),
  );
  public readonly salesAtpDelayedDemandOffsetDays = new QNumberPath(
    this.withPrefix("SalesATPDelayedDemandOffsetDays"),
  );
  public readonly isInventoryAtpIncludingPlannedOrders = new QBooleanPath(
    this.withPrefix("IsInventoryATPIncludingPlannedOrders"),
  );
  public readonly standardProcurementOrderQuantity = new QNumberPath(
    this.withPrefix("StandardProcurementOrderQuantity"),
  );
  public readonly salesAtpBackwardDemandTimeFenceDays = new QNumberPath(
    this.withPrefix("SalesATPBackwardDemandTimeFenceDays"),
  );
  public readonly isSalesSiteMandatory = new QEnumPath(
    this.withPrefix("IsSalesSiteMandatory"),
    NoYes,
  );
  public readonly isInventoryProcessingStopped = new QEnumPath(
    this.withPrefix("IsInventoryProcessingStopped"),
    NoYes,
  );
  public readonly isSalesAtpIncludingPlannedOrders = new QBooleanPath(
    this.withPrefix("IsSalesATPIncludingPlannedOrders"),
  );
  public readonly minimumProcurementOrderQuantity = new QNumberPath(
    this.withPrefix("MinimumProcurementOrderQuantity"),
  );
  public readonly minimumInventoryOrderQuantity = new QNumberPath(
    this.withPrefix("MinimumInventoryOrderQuantity"),
  );
  public readonly salesAtpDelayedSupplyOffsetDays = new QNumberPath(
    this.withPrefix("SalesATPDelayedSupplyOffsetDays"),
  );
  public readonly standardInventoryOrderQuantity = new QNumberPath(
    this.withPrefix("StandardInventoryOrderQuantity"),
  );
  public readonly salesLeadTimeDays = new QNumberPath(
    this.withPrefix("SalesLeadTimeDays"),
  );
  public readonly salesSiteId = new QStringPath(this.withPrefix("SalesSiteId"));
  public readonly inventoryAtpDelayedDemandOffsetDays = new QNumberPath(
    this.withPrefix("InventoryATPDelayedDemandOffsetDays"),
  );
  public readonly inventoryOrderPromisingMethod = new QEnumPath(
    this.withPrefix("InventoryOrderPromisingMethod"),
    SalesDeliveryDateControlType,
  );
  public readonly maximumProcurementOrderQuantity = new QNumberPath(
    this.withPrefix("MaximumProcurementOrderQuantity"),
  );
  public readonly salesOrderPromisingMethod = new QEnumPath(
    this.withPrefix("SalesOrderPromisingMethod"),
    SalesDeliveryDateControlType,
  );
  public readonly inventoryAtpDelayedSupplyOffsetDays = new QNumberPath(
    this.withPrefix("InventoryATPDelayedSupplyOffsetDays"),
  );
  public readonly isInventoryUsingWorkingDays = new QEnumPath(
    this.withPrefix("IsInventoryUsingWorkingDays"),
    NoYes,
  );
  public readonly standardSalesOrderQuantity = new QNumberPath(
    this.withPrefix("StandardSalesOrderQuantity"),
  );
  public readonly inventoryAtpTimeFenceDays = new QNumberPath(
    this.withPrefix("InventoryATPTimeFenceDays"),
  );
  public readonly inventoryAtpBackwardSupplyTimeFenceDays = new QNumberPath(
    this.withPrefix("InventoryATPBackwardSupplyTimeFenceDays"),
  );
  public readonly salesAtpBackwardSupplyTimeFenceDays = new QNumberPath(
    this.withPrefix("SalesATPBackwardSupplyTimeFenceDays"),
  );
  public readonly inventoryQuantityMultiples = new QNumberPath(
    this.withPrefix("InventoryQuantityMultiples"),
  );
  public readonly isSalesWarehouseMandatory = new QEnumPath(
    this.withPrefix("IsSalesWarehouseMandatory"),
    NoYes,
  );
  public readonly isSalesLeadTimeOverridden = new QEnumPath(
    this.withPrefix("IsSalesLeadTimeOverridden"),
    NoYes,
  );
  public readonly salesAtpTimeFenceDays = new QNumberPath(
    this.withPrefix("SalesATPTimeFenceDays"),
  );
  public readonly isProcurementUsingWorkingDays = new QEnumPath(
    this.withPrefix("IsProcurementUsingWorkingDays"),
    NoYes,
  );
  public readonly areInventoryOrderPromisingDefaultsOverridden = new QEnumPath(
    this.withPrefix("AreInventoryOrderPromisingDefaultsOverridden"),
    NoYes,
  );
  public readonly isProcurementSiteMandatory = new QEnumPath(
    this.withPrefix("IsProcurementSiteMandatory"),
    NoYes,
  );
  public readonly inventWarehouseId = new QStringPath(
    this.withPrefix("InventWarehouseId"),
  );
  public readonly areSalesOrderPromisingDefaultsOverridden = new QEnumPath(
    this.withPrefix("AreSalesOrderPromisingDefaultsOverridden"),
    NoYes,
  );
  public readonly isInventoryWarehouseMandatory = new QEnumPath(
    this.withPrefix("IsInventoryWarehouseMandatory"),
    NoYes,
  );
  public readonly isInventorySiteMandatory = new QEnumPath(
    this.withPrefix("IsInventorySiteMandatory"),
    NoYes,
  );
  public readonly inventoryDimensionId = new QStringPath(
    this.withPrefix("InventoryDimensionId"),
  );
  public readonly salesWarehouseId = new QStringPath(
    this.withPrefix("SalesWarehouseId"),
  );
}

export const qProductDefaultOrderSettings = new QProductDefaultOrderSettings();

export class QProductDefaultOrderSettingsId extends QId<ProductDefaultOrderSettingsId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("ItemNumber", "itemNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QInboundShipmentOrderRequestStatus extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly inboundShipmentOrderRequestId = new QStringPath(
    this.withPrefix("InboundShipmentOrderRequestId"),
  );
  public readonly requestStatus = new QEnumPath(
    this.withPrefix("RequestStatus"),
    WhsewShipmentOrderRequestStatus,
  );
  public readonly responseMessage = new QStringPath(
    this.withPrefix("ResponseMessage"),
  );
}

export const qInboundShipmentOrderRequestStatus =
  new QInboundShipmentOrderRequestStatus();

export class QInboundShipmentOrderRequestStatusId extends QId<InboundShipmentOrderRequestStatusId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam(
      "InboundShipmentOrderRequestId",
      "inboundShipmentOrderRequestId",
    ),
  ];

  getParams() {
    return this.params;
  }
}

export class QItemBasePricePending extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly priceType = new QEnumPath(
    this.withPrefix("PriceType"),
    GupBasePriceType,
  );
  public readonly itemId = new QStringPath(this.withPrefix("ItemId"));
  public readonly versionId = new QStringPath(this.withPrefix("VersionId"));
  public readonly fromDate = new QDateTimeOffsetPath(
    this.withPrefix("FromDate"),
  );
  public readonly productConfigurationId = new QStringPath(
    this.withPrefix("ProductConfigurationId"),
  );
  public readonly productColorId = new QStringPath(
    this.withPrefix("ProductColorId"),
  );
  public readonly priceWarehouseId = new QStringPath(
    this.withPrefix("PriceWarehouseId"),
  );
  public readonly priceSiteId = new QStringPath(this.withPrefix("PriceSiteId"));
  public readonly productSizeId = new QStringPath(
    this.withPrefix("ProductSizeId"),
  );
  public readonly productStyleId = new QStringPath(
    this.withPrefix("ProductStyleId"),
  );
  public readonly productVersionId = new QStringPath(
    this.withPrefix("ProductVersionId"),
  );
  public readonly markup = new QNumberPath(this.withPrefix("Markup"));
  public readonly price = new QNumberPath(this.withPrefix("Price"));
  public readonly priceAllocateMarkup = new QEnumPath(
    this.withPrefix("PriceAllocateMarkup"),
    NoYes,
  );
  public readonly markupQty = new QNumberPath(this.withPrefix("MarkupQty"));
  public readonly unitId = new QStringPath(this.withPrefix("UnitId"));
  public readonly calculated = new QEnumPath(
    this.withPrefix("Calculated"),
    NoYes,
  );
  public readonly priceQty = new QNumberPath(this.withPrefix("PriceQty"));
  public readonly itemDisplayName = new QStringPath(
    this.withPrefix("ItemDisplayName"),
  );
}

export const qItemBasePricePending = new QItemBasePricePending();

export class QItemBasePricePendingId extends QId<ItemBasePricePendingId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QEnumParam("PriceType", "priceType"),
    new QStringParam("ItemId", "itemId"),
    new QStringParam("VersionId", "versionId"),
    new QDateTimeOffsetParam("FromDate", "fromDate"),
    new QStringParam("ProductConfigurationId", "productConfigurationId"),
    new QStringParam("ProductColorId", "productColorId"),
    new QStringParam("PriceWarehouseId", "priceWarehouseId"),
    new QStringParam("PriceSiteId", "priceSiteId"),
    new QStringParam("ProductSizeId", "productSizeId"),
    new QStringParam("ProductStyleId", "productStyleId"),
    new QStringParam("ProductVersionId", "productVersionId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QEngineeringChangeOrderProductRouteOperationPropertiesV2 extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly engineeringChangeOrderNumber = new QStringPath(
    this.withPrefix("EngineeringChangeOrderNumber"),
  );
  public readonly engineeringChangeOrderProductLineNumber = new QNumberPath(
    this.withPrefix("EngineeringChangeOrderProductLineNumber"),
  );
  public readonly engineeringChangeOrderProductRouteHeaderCreationSequenceNumber =
    new QNumberPath(
      this.withPrefix(
        "EngineeringChangeOrderProductRouteHeaderCreationSequenceNumber",
      ),
    );
  public readonly engineeringChangeOrderProductRouteOperationNumber =
    new QNumberPath(
      this.withPrefix("EngineeringChangeOrderProductRouteOperationNumber"),
    );
  public readonly engineeringChangeOrderProductRouteOperationPriority =
    new QEnumPath(
      this.withPrefix("EngineeringChangeOrderProductRouteOperationPriority"),
      RouteOprPriority,
    );
  public readonly engineeringChangeOrderProductRouteOperationChangeType =
    new QEnumPath(
      this.withPrefix("EngineeringChangeOrderProductRouteOperationChangeType"),
      EngChgEcmChangeTypes,
    );
  public readonly operationId = new QStringPath(this.withPrefix("OperationId"));
  public readonly routeId = new QStringPath(this.withPrefix("RouteId"));
  public readonly productConfigurationId = new QStringPath(
    this.withPrefix("ProductConfigurationId"),
  );
  public readonly productGroupId = new QStringPath(
    this.withPrefix("ProductGroupId"),
  );
  public readonly itemNumber = new QStringPath(this.withPrefix("ItemNumber"));
  public readonly routeOperationPropertiesChangeType = new QEnumPath(
    this.withPrefix("RouteOperationPropertiesChangeType"),
    EngChgEcmChangeTypes,
  );
  public readonly processQuantity = new QNumberPath(
    this.withPrefix("ProcessQuantity"),
  );
  public readonly quantityCostCategoryId = new QStringPath(
    this.withPrefix("QuantityCostCategoryId"),
  );
  public readonly routeGroupId = new QStringPath(
    this.withPrefix("RouteGroupId"),
  );
  public readonly productionSiteId = new QStringPath(
    this.withPrefix("ProductionSiteId"),
  );
  public readonly operationsTimeToHourConversionFactor = new QNumberPath(
    this.withPrefix("OperationsTimeToHourConversionFactor"),
  );
  public readonly setupTime = new QNumberPath(this.withPrefix("SetupTime"));
  public readonly queueTimeBefore = new QNumberPath(
    this.withPrefix("QueueTimeBefore"),
  );
  public readonly costingOperationResourceId = new QStringPath(
    this.withPrefix("CostingOperationResourceId"),
  );
  public readonly workingTimeSchedulingPropertyId = new QStringPath(
    this.withPrefix("WorkingTimeSchedulingPropertyId"),
  );
  public readonly consumptionCalculationFactor = new QNumberPath(
    this.withPrefix("ConsumptionCalculationFactor"),
  );
  public readonly consumptionCalculationFormula = new QEnumPath(
    this.withPrefix("ConsumptionCalculationFormula"),
    RouteFormula,
  );
  public readonly queueTimeAfter = new QNumberPath(
    this.withPrefix("QueueTimeAfter"),
  );
  public readonly processTime = new QNumberPath(this.withPrefix("ProcessTime"));
  public readonly transferBatchQuantity = new QNumberPath(
    this.withPrefix("TransferBatchQuantity"),
  );
  public readonly routeType = new QEnumPath(
    this.withPrefix("RouteType"),
    RouteOprType,
  );
  public readonly transitTime = new QNumberPath(this.withPrefix("TransitTime"));
  public readonly setupCategoryId = new QStringPath(
    this.withPrefix("SetupCategoryId"),
  );
  public readonly processCostCategoryId = new QStringPath(
    this.withPrefix("ProcessCostCategoryId"),
  );
}

export const qEngineeringChangeOrderProductRouteOperationPropertiesV2 =
  new QEngineeringChangeOrderProductRouteOperationPropertiesV2();

export class QEngineeringChangeOrderProductRouteOperationPropertiesV2Id extends QId<EngineeringChangeOrderProductRouteOperationPropertiesV2Id> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam(
      "EngineeringChangeOrderNumber",
      "engineeringChangeOrderNumber",
    ),
    new QNumberParam(
      "EngineeringChangeOrderProductLineNumber",
      "engineeringChangeOrderProductLineNumber",
    ),
    new QNumberParam(
      "EngineeringChangeOrderProductRouteHeaderCreationSequenceNumber",
      "engineeringChangeOrderProductRouteHeaderCreationSequenceNumber",
    ),
    new QNumberParam(
      "EngineeringChangeOrderProductRouteOperationNumber",
      "engineeringChangeOrderProductRouteOperationNumber",
    ),
    new QEnumParam(
      "EngineeringChangeOrderProductRouteOperationPriority",
      "engineeringChangeOrderProductRouteOperationPriority",
    ),
    new QEnumParam(
      "EngineeringChangeOrderProductRouteOperationChangeType",
      "engineeringChangeOrderProductRouteOperationChangeType",
    ),
    new QStringParam("OperationId", "operationId"),
    new QStringParam("RouteId", "routeId"),
    new QStringParam("ProductConfigurationId", "productConfigurationId"),
    new QStringParam("ProductGroupId", "productGroupId"),
    new QStringParam("ItemNumber", "itemNumber"),
    new QEnumParam(
      "RouteOperationPropertiesChangeType",
      "routeOperationPropertiesChangeType",
    ),
  ];

  getParams() {
    return this.params;
  }
}

export class QItemCoverageWithDerivedSettingsEntity extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly itemNumber = new QStringPath(this.withPrefix("ItemNumber"));
  public readonly coverageWarehouseLocationId = new QStringPath(
    this.withPrefix("CoverageWarehouseLocationId"),
  );
  public readonly coverageItemBatchNumber = new QStringPath(
    this.withPrefix("CoverageItemBatchNumber"),
  );
  public readonly coverageProductColorId = new QStringPath(
    this.withPrefix("CoverageProductColorId"),
  );
  public readonly coverageProductSizeId = new QStringPath(
    this.withPrefix("CoverageProductSizeId"),
  );
  public readonly coverageProductStyleId = new QStringPath(
    this.withPrefix("CoverageProductStyleId"),
  );
  public readonly coverageProductVersionId = new QStringPath(
    this.withPrefix("CoverageProductVersionId"),
  );
  public readonly coverageWarehouseId = new QStringPath(
    this.withPrefix("CoverageWarehouseId"),
  );
  public readonly coverageItemSerialNumber = new QStringPath(
    this.withPrefix("CoverageItemSerialNumber"),
  );
  public readonly coverageSiteId = new QStringPath(
    this.withPrefix("CoverageSiteId"),
  );
  public readonly coverageInventoryStatusId = new QStringPath(
    this.withPrefix("CoverageInventoryStatusId"),
  );
  public readonly coverageProductConfigurationId = new QStringPath(
    this.withPrefix("CoverageProductConfigurationId"),
  );
  public readonly coveragePeriodDays = new QNumberPath(
    this.withPrefix("CoveragePeriodDays"),
  );
  public readonly vendorAccountNumber = new QStringPath(
    this.withPrefix("VendorAccountNumber"),
  );
  public readonly approvedRequisitionTimeFenceDays = new QNumberPath(
    this.withPrefix("ApprovedRequisitionTimeFenceDays"),
  );
  public readonly lastPlanningFormulaPriorityChangedDate =
    new QDateTimeOffsetPath(
      this.withPrefix("LastPlanningFormulaPriorityChangedDate"),
    );
  public readonly procurementLeadTimeDays = new QNumberPath(
    this.withPrefix("ProcurementLeadTimeDays"),
  );
  public readonly defaultPlanningFormulaPriority = new QNumberPath(
    this.withPrefix("DefaultPlanningFormulaPriority"),
  );
  public readonly isProcurementLeadTimeOverridden = new QEnumPath(
    this.withPrefix("IsProcurementLeadTimeOverridden"),
    NoYes,
  );
  public readonly automaticFirmingTimeFenceDays = new QNumberPath(
    this.withPrefix("AutomaticFirmingTimeFenceDays"),
  );
  public readonly isConsumeOnHandOverridden = new QEnumPath(
    this.withPrefix("IsConsumeOnHandOverridden"),
    NoYes,
  );
  public readonly productionLeadTimeDays = new QNumberPath(
    this.withPrefix("ProductionLeadTimeDays"),
  );
  public readonly minimumOnHandFulfillmentMethod = new QEnumPath(
    this.withPrefix("MinimumOnHandFulfillmentMethod"),
    ReqMinSatisfy,
  );
  public readonly planningFormulaItemNumber = new QStringPath(
    this.withPrefix("PlanningFormulaItemNumber"),
  );
  public readonly maximumOnHandInventoryQuantity = new QNumberPath(
    this.withPrefix("MaximumOnHandInventoryQuantity"),
  );
  public readonly areTimeFencesOverridden = new QEnumPath(
    this.withPrefix("AreTimeFencesOverridden"),
    NoYes,
  );
  public readonly freezeTimeFenceDays = new QNumberPath(
    this.withPrefix("FreezeTimeFenceDays"),
  );
  public readonly isTransferLeadTimeOverridden = new QEnumPath(
    this.withPrefix("IsTransferLeadTimeOverridden"),
    NoYes,
  );
  public readonly capacitySchedulingTimeFenceDays = new QNumberPath(
    this.withPrefix("CapacitySchedulingTimeFenceDays"),
  );
  public readonly negativeDays = new QNumberPath(
    this.withPrefix("NegativeDays"),
  );
  public readonly minimumOnHandInventoryQuantity = new QNumberPath(
    this.withPrefix("MinimumOnHandInventoryQuantity"),
  );
  public readonly coverageInventoryDimensionId = new QStringPath(
    this.withPrefix("CoverageInventoryDimensionId"),
  );
  public readonly maximumOnHandInventorySafetyKeyId = new QStringPath(
    this.withPrefix("MaximumOnHandInventorySafetyKeyId"),
  );
  public readonly positiveDays = new QNumberPath(
    this.withPrefix("PositiveDays"),
  );
  public readonly coverageTimeFenceDays = new QNumberPath(
    this.withPrefix("CoverageTimeFenceDays"),
  );
  public readonly currentPlanningFormulaPriority = new QNumberPath(
    this.withPrefix("CurrentPlanningFormulaPriority"),
  );
  public readonly productCoverageGroupId = new QStringPath(
    this.withPrefix("ProductCoverageGroupId"),
  );
  public readonly minimumOnHandInventorySafetyKeyId = new QStringPath(
    this.withPrefix("MinimumOnHandInventorySafetyKeyId"),
  );
  public readonly areCoverageGroupSettingsOverridden = new QEnumPath(
    this.withPrefix("AreCoverageGroupSettingsOverridden"),
    NoYes,
  );
  public readonly isTransferLeadTimeUsingWorkingDays = new QEnumPath(
    this.withPrefix("IsTransferLeadTimeUsingWorkingDays"),
    NoYes,
  );
  public readonly isProcumentLeadTimeUsingWorkingDays = new QEnumPath(
    this.withPrefix("IsProcumentLeadTimeUsingWorkingDays"),
    NoYes,
  );
  public readonly mustUseLatestPossibleSupplyFirst = new QEnumPath(
    this.withPrefix("MustUseLatestPossibleSupplyFirst"),
    NoYes,
  );
  public readonly bomOrFormulaExplosionTimeFenceDays = new QNumberPath(
    this.withPrefix("BOMOrFormulaExplosionTimeFenceDays"),
  );
  public readonly areGeneralSettingsOverridden = new QEnumPath(
    this.withPrefix("AreGeneralSettingsOverridden"),
    NoYes,
  );
  public readonly defaultPlannedTransferOrderFromWarehouseId = new QStringPath(
    this.withPrefix("DefaultPlannedTransferOrderFromWarehouseId"),
  );
  public readonly coverageMethod = new QEnumPath(
    this.withPrefix("CoverageMethod"),
    ReqCovType,
  );
  public readonly consumeOnHandInventoryMethod = new QEnumPath(
    this.withPrefix("ConsumeOnHandInventoryMethod"),
    ReqOnHandConsumptionStrategy,
  );
  public readonly transferLeadTimeDays = new QNumberPath(
    this.withPrefix("TransferLeadTimeDays"),
  );
  public readonly plannedOrderType = new QEnumPath(
    this.withPrefix("PlannedOrderType"),
    ReqPoType,
  );
  public readonly isPlannedOrderTypeOverridden = new QEnumPath(
    this.withPrefix("IsPlannedOrderTypeOverridden"),
    NoYes,
  );
  public readonly isProductionLeadTimeUsingWorkingDays = new QEnumPath(
    this.withPrefix("IsProductionLeadTimeUsingWorkingDays"),
    NoYes,
  );
  public readonly isProductionLeadTimeOverridden = new QEnumPath(
    this.withPrefix("IsProductionLeadTimeOverridden"),
    NoYes,
  );
  public readonly isMinimumOnHandSafetyPeriodUsed = new QEnumPath(
    this.withPrefix("IsMinimumOnHandSafetyPeriodUsed"),
    NoYes,
  );
  public readonly orderSpikeThreshold = new QNumberPath(
    this.withPrefix("OrderSpikeThreshold"),
  );
  public readonly averageDailyUsage = new QNumberPath(
    this.withPrefix("AverageDailyUsage"),
  );
  public readonly distributionBasedAduEnabled = new QEnumPath(
    this.withPrefix("DistributionBasedADUEnabled"),
    NoYes,
  );
  public readonly useDecouplingPointPeriodSettings = new QEnumPath(
    this.withPrefix("UseDecouplingPointPeriodSettings"),
    NoYes,
  );
  public readonly reorderPoint = new QNumberPath(
    this.withPrefix("ReorderPoint"),
  );
  public readonly orderCycle = new QNumberPath(this.withPrefix("OrderCycle"));
}

export const qItemCoverageWithDerivedSettingsEntity =
  new QItemCoverageWithDerivedSettingsEntity();

export class QItemCoverageWithDerivedSettingsEntityId extends QId<ItemCoverageWithDerivedSettingsEntityId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("ItemNumber", "itemNumber"),
    new QStringParam(
      "CoverageWarehouseLocationId",
      "coverageWarehouseLocationId",
    ),
    new QStringParam("CoverageItemBatchNumber", "coverageItemBatchNumber"),
    new QStringParam("CoverageProductColorId", "coverageProductColorId"),
    new QStringParam("CoverageProductSizeId", "coverageProductSizeId"),
    new QStringParam("CoverageProductStyleId", "coverageProductStyleId"),
    new QStringParam("CoverageProductVersionId", "coverageProductVersionId"),
    new QStringParam("CoverageWarehouseId", "coverageWarehouseId"),
    new QStringParam("CoverageItemSerialNumber", "coverageItemSerialNumber"),
    new QStringParam("CoverageSiteId", "coverageSiteId"),
    new QStringParam("CoverageInventoryStatusId", "coverageInventoryStatusId"),
    new QStringParam(
      "CoverageProductConfigurationId",
      "coverageProductConfigurationId",
    ),
  ];

  getParams() {
    return this.params;
  }
}

export class QOutboundShipmentOrderRequestStatus extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly outboundShipmentOrderRequestId = new QStringPath(
    this.withPrefix("OutboundShipmentOrderRequestId"),
  );
  public readonly requestStatus = new QEnumPath(
    this.withPrefix("RequestStatus"),
    WhsewShipmentOrderRequestStatus,
  );
  public readonly responseMessage = new QStringPath(
    this.withPrefix("ResponseMessage"),
  );
}

export const qOutboundShipmentOrderRequestStatus =
  new QOutboundShipmentOrderRequestStatus();

export class QOutboundShipmentOrderRequestStatusId extends QId<OutboundShipmentOrderRequestStatusId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam(
      "OutboundShipmentOrderRequestId",
      "outboundShipmentOrderRequestId",
    ),
  ];

  getParams() {
    return this.params;
  }
}

export class QInboundLoadPackingStructures extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly licensePlateNumber = new QStringPath(
    this.withPrefix("LicensePlateNumber"),
  );
  public readonly inboundShipmentId = new QStringPath(
    this.withPrefix("InboundShipmentId"),
  );
  public readonly module = new QEnumPath(this.withPrefix("Module"), WhsModule);
  public readonly inventoryUnitSymbol = new QStringPath(
    this.withPrefix("InventoryUnitSymbol"),
  );
  public readonly packedTotalQuantity = new QNumberPath(
    this.withPrefix("PackedTotalQuantity"),
  );
  public readonly containedItemNumber = new QStringPath(
    this.withPrefix("ContainedItemNumber"),
  );
  public readonly receivingUnitSymbol = new QStringPath(
    this.withPrefix("ReceivingUnitSymbol"),
  );
}

export const qInboundLoadPackingStructures =
  new QInboundLoadPackingStructures();

export class QInboundLoadPackingStructuresId extends QId<InboundLoadPackingStructuresId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("LicensePlateNumber", "licensePlateNumber"),
    new QStringParam("InboundShipmentId", "inboundShipmentId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QWhsMobileWorkUnavailable extends QueryObject {
  public readonly recordId = new QNumberPath(this.withPrefix("RecordId"));
  public readonly sessionRecId = new QNumberPath(
    this.withPrefix("SessionRecId"),
  );
  public readonly submissionType = new QStringPath(
    this.withPrefix("SubmissionType"),
  );
}

export const qWhsMobileWorkUnavailable = new QWhsMobileWorkUnavailable();

export class QWhsMobileWorkUnavailableId extends QId<WhsMobileWorkUnavailableId> {
  private readonly params = [new QNumberParam("RecordId", "recordId")];

  getParams() {
    return this.params;
  }
}

export class QEngineeringChangeOrderProductRouteOperationProperties extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly engineeringChangeOrderNumber = new QStringPath(
    this.withPrefix("EngineeringChangeOrderNumber"),
  );
  public readonly engineeringChangeOrderProductLineNumber = new QNumberPath(
    this.withPrefix("EngineeringChangeOrderProductLineNumber"),
  );
  public readonly engineeringChangeOrderProductRouteProductionSiteId =
    new QStringPath(
      this.withPrefix("EngineeringChangeOrderProductRouteProductionSiteId"),
    );
  public readonly engineeringChangeOrderProductRouteOperationId =
    new QStringPath(
      this.withPrefix("EngineeringChangeOrderProductRouteOperationId"),
    );
  public readonly engineeringChangeOrderProductRouteOperationNumber =
    new QNumberPath(
      this.withPrefix("EngineeringChangeOrderProductRouteOperationNumber"),
    );
  public readonly routeId = new QStringPath(this.withPrefix("RouteId"));
  public readonly productConfigurationId = new QStringPath(
    this.withPrefix("ProductConfigurationId"),
  );
  public readonly productGroupId = new QStringPath(
    this.withPrefix("ProductGroupId"),
  );
  public readonly itemNumber = new QStringPath(this.withPrefix("ItemNumber"));
  public readonly operationsTimeToHourConversionFactor = new QNumberPath(
    this.withPrefix("OperationsTimeToHourConversionFactor"),
  );
  public readonly processCostCategoryId = new QStringPath(
    this.withPrefix("ProcessCostCategoryId"),
  );
  public readonly processQuantity = new QNumberPath(
    this.withPrefix("ProcessQuantity"),
  );
  public readonly routeGroupId = new QStringPath(
    this.withPrefix("RouteGroupId"),
  );
  public readonly engineeringChangeOrderProductRouteOperationPriority =
    new QEnumPath(
      this.withPrefix("EngineeringChangeOrderProductRouteOperationPriority"),
      RouteOprPriority,
    );
  public readonly transferBatchQuantity = new QNumberPath(
    this.withPrefix("TransferBatchQuantity"),
  );
  public readonly queueTimeBefore = new QNumberPath(
    this.withPrefix("QueueTimeBefore"),
  );
  public readonly transitTime = new QNumberPath(this.withPrefix("TransitTime"));
  public readonly processTime = new QNumberPath(this.withPrefix("ProcessTime"));
  public readonly consumptionCalculationFactor = new QNumberPath(
    this.withPrefix("ConsumptionCalculationFactor"),
  );
  public readonly quantityCostCategoryId = new QStringPath(
    this.withPrefix("QuantityCostCategoryId"),
  );
  public readonly queueTimeAfter = new QNumberPath(
    this.withPrefix("QueueTimeAfter"),
  );
  public readonly workingTimeSchedulingPropertyId = new QStringPath(
    this.withPrefix("WorkingTimeSchedulingPropertyId"),
  );
  public readonly costingOperationResourceId = new QStringPath(
    this.withPrefix("CostingOperationResourceId"),
  );
  public readonly routeType = new QEnumPath(
    this.withPrefix("RouteType"),
    RouteOprType,
  );
  public readonly consumptionCalculationFormula = new QEnumPath(
    this.withPrefix("ConsumptionCalculationFormula"),
    RouteFormula,
  );
  public readonly setupCategoryId = new QStringPath(
    this.withPrefix("SetupCategoryId"),
  );
  public readonly productionSiteId = new QStringPath(
    this.withPrefix("ProductionSiteId"),
  );
  public readonly setupTime = new QNumberPath(this.withPrefix("SetupTime"));
}

export const qEngineeringChangeOrderProductRouteOperationProperties =
  new QEngineeringChangeOrderProductRouteOperationProperties();

export class QEngineeringChangeOrderProductRouteOperationPropertiesId extends QId<EngineeringChangeOrderProductRouteOperationPropertiesId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam(
      "EngineeringChangeOrderNumber",
      "engineeringChangeOrderNumber",
    ),
    new QNumberParam(
      "EngineeringChangeOrderProductLineNumber",
      "engineeringChangeOrderProductLineNumber",
    ),
    new QStringParam(
      "EngineeringChangeOrderProductRouteProductionSiteId",
      "engineeringChangeOrderProductRouteProductionSiteId",
    ),
    new QStringParam(
      "EngineeringChangeOrderProductRouteOperationId",
      "engineeringChangeOrderProductRouteOperationId",
    ),
    new QNumberParam(
      "EngineeringChangeOrderProductRouteOperationNumber",
      "engineeringChangeOrderProductRouteOperationNumber",
    ),
    new QStringParam("RouteId", "routeId"),
    new QStringParam("ProductConfigurationId", "productConfigurationId"),
    new QStringParam("ProductGroupId", "productGroupId"),
    new QStringParam("ItemNumber", "itemNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QEngineeringProductCategoryAttributeDetails extends QueryObject {
  public readonly engineeringProductCategoryName = new QStringPath(
    this.withPrefix("EngineeringProductCategoryName"),
  );
  public readonly engineeringProductAttributeTypeName = new QStringPath(
    this.withPrefix("EngineeringProductAttributeTypeName"),
  );
  public readonly engineeringProductAttributeName = new QStringPath(
    this.withPrefix("EngineeringProductAttributeName"),
  );
  public readonly isInheritingAttribute = new QEnumPath(
    this.withPrefix("IsInheritingAttribute"),
    NoYes,
  );
  public readonly isMandatoryAttribute = new QEnumPath(
    this.withPrefix("IsMandatoryAttribute"),
    NoYes,
  );
  public readonly isSynchronisedWithBatchAttribute = new QEnumPath(
    this.withPrefix("IsSynchronisedWithBatchAttribute"),
    NoYes,
  );
  public readonly integerToleranceIncrement = new QNumberPath(
    this.withPrefix("IntegerToleranceIncrement"),
  );
  public readonly maximumIntegerTolerance = new QNumberPath(
    this.withPrefix("MaximumIntegerTolerance"),
  );
  public readonly minimumIntegerTolerance = new QNumberPath(
    this.withPrefix("MinimumIntegerTolerance"),
  );
  public readonly toleranceFailingAction = new QEnumPath(
    this.withPrefix("ToleranceFailingAction"),
    PdsBatchAttribToleranceAction,
  );
}

export const qEngineeringProductCategoryAttributeDetails =
  new QEngineeringProductCategoryAttributeDetails();

export class QEngineeringProductCategoryAttributeDetailsId extends QId<EngineeringProductCategoryAttributeDetailsId> {
  private readonly params = [
    new QStringParam(
      "EngineeringProductCategoryName",
      "engineeringProductCategoryName",
    ),
    new QStringParam(
      "EngineeringProductAttributeTypeName",
      "engineeringProductAttributeTypeName",
    ),
    new QStringParam(
      "EngineeringProductAttributeName",
      "engineeringProductAttributeName",
    ),
  ];

  getParams() {
    return this.params;
  }
}

export class QProductColorV2 extends QueryObject {
  public readonly colorId = new QStringPath(this.withPrefix("ColorId"));
  public readonly hexcode = new QStringPath(this.withPrefix("Hexcode"));
  public readonly refinerGroup = new QStringPath(
    this.withPrefix("RefinerGroup"),
  );
  public readonly url = new QStringPath(this.withPrefix("Url"));
}

export const qProductColorV2 = new QProductColorV2();

export class QProductColorV2Id extends QId<ProductColorV2Id> {
  private readonly params = [new QStringParam("ColorId", "colorId")];

  getParams() {
    return this.params;
  }
}

export class QEngineeringChangeOrderProductFormulaStepConsumption extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly engineeringChangeOrderNumber = new QStringPath(
    this.withPrefix("EngineeringChangeOrderNumber"),
  );
  public readonly engineeringChangeOrderProductLineNumber = new QNumberPath(
    this.withPrefix("EngineeringChangeOrderProductLineNumber"),
  );
  public readonly engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber =
    new QNumberPath(
      this.withPrefix(
        "EngineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber",
      ),
    );
  public readonly engineeringChangeOrderProductBomCreationSequenceNumber =
    new QNumberPath(
      this.withPrefix("EngineeringChangeOrderProductBOMCreationSequenceNumber"),
    );
  public readonly fromQty = new QNumberPath(this.withPrefix("FromQty"));
  public readonly bomQty = new QNumberPath(this.withPrefix("BOMQty"));
  public readonly pdsCwQty = new QNumberPath(this.withPrefix("PdsCWQty"));
}

export const qEngineeringChangeOrderProductFormulaStepConsumption =
  new QEngineeringChangeOrderProductFormulaStepConsumption();

export class QEngineeringChangeOrderProductFormulaStepConsumptionId extends QId<EngineeringChangeOrderProductFormulaStepConsumptionId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam(
      "EngineeringChangeOrderNumber",
      "engineeringChangeOrderNumber",
    ),
    new QNumberParam(
      "EngineeringChangeOrderProductLineNumber",
      "engineeringChangeOrderProductLineNumber",
    ),
    new QNumberParam(
      "EngineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber",
      "engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber",
    ),
    new QNumberParam(
      "EngineeringChangeOrderProductBOMCreationSequenceNumber",
      "engineeringChangeOrderProductBomCreationSequenceNumber",
    ),
    new QNumberParam("FromQty", "fromQty"),
  ];

  getParams() {
    return this.params;
  }
}

export class QProductSizeV2 extends QueryObject {
  public readonly sizeId = new QStringPath(this.withPrefix("SizeId"));
  public readonly hexcode = new QStringPath(this.withPrefix("Hexcode"));
  public readonly refinerGroup = new QStringPath(
    this.withPrefix("RefinerGroup"),
  );
  public readonly url = new QStringPath(this.withPrefix("Url"));
}

export const qProductSizeV2 = new QProductSizeV2();

export class QProductSizeV2Id extends QId<ProductSizeV2Id> {
  private readonly params = [new QStringParam("SizeId", "sizeId")];

  getParams() {
    return this.params;
  }
}

export class QLabelLayoutDataSourceParameters extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly labelLayoutDataSourceId = new QStringPath(
    this.withPrefix("LabelLayoutDataSourceId"),
  );
  public readonly name = new QStringPath(this.withPrefix("Name"));
  public readonly defaultValueString = new QStringPath(
    this.withPrefix("DefaultValueString"),
  );
  public readonly displayText = new QStringPath(this.withPrefix("DisplayText"));
  public readonly mandatory = new QEnumPath(
    this.withPrefix("Mandatory"),
    NoYes,
  );
  public readonly type = new QEnumPath(
    this.withPrefix("Type"),
    WhsLabelLayoutDataSourceParameterType,
  );
}

export const qLabelLayoutDataSourceParameters =
  new QLabelLayoutDataSourceParameters();

export class QLabelLayoutDataSourceParametersId extends QId<LabelLayoutDataSourceParametersId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("LabelLayoutDataSourceId", "labelLayoutDataSourceId"),
    new QStringParam("Name", "name"),
  ];

  getParams() {
    return this.params;
  }
}

export class QReqItemCoverageDecouplingPointPeriodSettings extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly itemNumber = new QStringPath(this.withPrefix("ItemNumber"));
  public readonly coverageWarehouseLocationId = new QStringPath(
    this.withPrefix("CoverageWarehouseLocationId"),
  );
  public readonly coverageItemBatchNumber = new QStringPath(
    this.withPrefix("CoverageItemBatchNumber"),
  );
  public readonly coverageProductColorId = new QStringPath(
    this.withPrefix("CoverageProductColorId"),
  );
  public readonly coverageProductSizeId = new QStringPath(
    this.withPrefix("CoverageProductSizeId"),
  );
  public readonly coverageProductStyleId = new QStringPath(
    this.withPrefix("CoverageProductStyleId"),
  );
  public readonly coverageProductVersionId = new QStringPath(
    this.withPrefix("CoverageProductVersionId"),
  );
  public readonly coverageWarehouseId = new QStringPath(
    this.withPrefix("CoverageWarehouseId"),
  );
  public readonly coverageItemSerialNumber = new QStringPath(
    this.withPrefix("CoverageItemSerialNumber"),
  );
  public readonly coverageSiteId = new QStringPath(
    this.withPrefix("CoverageSiteId"),
  );
  public readonly coverageInventoryStatusId = new QStringPath(
    this.withPrefix("CoverageInventoryStatusId"),
  );
  public readonly coverageProductConfigurationId = new QStringPath(
    this.withPrefix("CoverageProductConfigurationId"),
  );
  public readonly fromDate = new QDateTimeOffsetPath(
    this.withPrefix("FromDate"),
  );
  public readonly leadTimeFactor = new QNumberPath(
    this.withPrefix("LeadTimeFactor"),
  );
  public readonly maximumInventOnhandQuantity = new QNumberPath(
    this.withPrefix("MaximumInventOnhandQuantity"),
  );
  public readonly yellowQuantity = new QNumberPath(
    this.withPrefix("YellowQuantity"),
  );
  public readonly reorderPointQuantity = new QNumberPath(
    this.withPrefix("ReorderPointQuantity"),
  );
  public readonly decoupledLeadTime = new QNumberPath(
    this.withPrefix("DecoupledLeadTime"),
  );
  public readonly calculatedMaximumOnhandQuantity = new QNumberPath(
    this.withPrefix("CalculatedMaximumOnhandQuantity"),
  );
  public readonly minimumInventOnhandQuantity = new QNumberPath(
    this.withPrefix("MinimumInventOnhandQuantity"),
  );
  public readonly calculatedReorderPointQuantity = new QNumberPath(
    this.withPrefix("CalculatedReorderPointQuantity"),
  );
  public readonly toDate = new QDateTimeOffsetPath(this.withPrefix("ToDate"));
  public readonly calculatedMinimumOnhandQuantity = new QNumberPath(
    this.withPrefix("CalculatedMinimumOnhandQuantity"),
  );
  public readonly redBaseQuantity = new QNumberPath(
    this.withPrefix("RedBaseQuantity"),
  );
  public readonly variabilityFactor = new QNumberPath(
    this.withPrefix("VariabilityFactor"),
  );
  public readonly greenQuantity = new QNumberPath(
    this.withPrefix("GreenQuantity"),
  );
  public readonly redSafetyQuantity = new QNumberPath(
    this.withPrefix("RedSafetyQuantity"),
  );
  public readonly averageDailyUsage = new QNumberPath(
    this.withPrefix("AverageDailyUsage"),
  );
  public readonly demandAdjustmentFactor = new QNumberPath(
    this.withPrefix("DemandAdjustmentFactor"),
  );
}

export const qReqItemCoverageDecouplingPointPeriodSettings =
  new QReqItemCoverageDecouplingPointPeriodSettings();

export class QReqItemCoverageDecouplingPointPeriodSettingsId extends QId<ReqItemCoverageDecouplingPointPeriodSettingsId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("ItemNumber", "itemNumber"),
    new QStringParam(
      "CoverageWarehouseLocationId",
      "coverageWarehouseLocationId",
    ),
    new QStringParam("CoverageItemBatchNumber", "coverageItemBatchNumber"),
    new QStringParam("CoverageProductColorId", "coverageProductColorId"),
    new QStringParam("CoverageProductSizeId", "coverageProductSizeId"),
    new QStringParam("CoverageProductStyleId", "coverageProductStyleId"),
    new QStringParam("CoverageProductVersionId", "coverageProductVersionId"),
    new QStringParam("CoverageWarehouseId", "coverageWarehouseId"),
    new QStringParam("CoverageItemSerialNumber", "coverageItemSerialNumber"),
    new QStringParam("CoverageSiteId", "coverageSiteId"),
    new QStringParam("CoverageInventoryStatusId", "coverageInventoryStatusId"),
    new QStringParam(
      "CoverageProductConfigurationId",
      "coverageProductConfigurationId",
    ),
    new QDateTimeOffsetParam("FromDate", "fromDate"),
  ];

  getParams() {
    return this.params;
  }
}

export class QWarehouseWorkLines extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly warehouseWorkId = new QStringPath(
    this.withPrefix("WarehouseWorkId"),
  );
  public readonly workLineNumber = new QNumberPath(
    this.withPrefix("WorkLineNumber"),
  );
  public readonly isWorkLineMandatory = new QEnumPath(
    this.withPrefix("IsWorkLineMandatory"),
    NoYes,
  );
  public readonly sortOrderCode = new QNumberPath(
    this.withPrefix("SortOrderCode"),
  );
  public readonly productStyleId = new QStringPath(
    this.withPrefix("ProductStyleId"),
  );
  public readonly sourceOrderNumber = new QStringPath(
    this.withPrefix("SourceOrderNumber"),
  );
  public readonly warehouseLocationId = new QStringPath(
    this.withPrefix("WarehouseLocationId"),
  );
  public readonly warehouseWorkClosedDateTime = new QDateTimeOffsetPath(
    this.withPrefix("WarehouseWorkClosedDateTime"),
  );
  public readonly inventoryStatusId = new QStringPath(
    this.withPrefix("InventoryStatusId"),
  );
  public readonly processingWarehouseMobileDeviceUserId = new QStringPath(
    this.withPrefix("ProcessingWarehouseMobileDeviceUserId"),
  );
  public readonly itemNumber = new QStringPath(this.withPrefix("ItemNumber"));
  public readonly remainingWorkQuantity = new QNumberPath(
    this.withPrefix("RemainingWorkQuantity"),
  );
  public readonly warehouseZoneId = new QStringPath(
    this.withPrefix("WarehouseZoneId"),
  );
  public readonly actualProcessingTimeSeconds = new QNumberPath(
    this.withPrefix("ActualProcessingTimeSeconds"),
  );
  public readonly handlingQuantity = new QNumberPath(
    this.withPrefix("HandlingQuantity"),
  );
  public readonly originalPackingToteLicensePlateNumber = new QStringPath(
    this.withPrefix("OriginalPackingToteLicensePlateNumber"),
  );
  public readonly estimatedProcessingTimeSeconds = new QNumberPath(
    this.withPrefix("EstimatedProcessingTimeSeconds"),
  );
  public readonly productSizeId = new QStringPath(
    this.withPrefix("ProductSizeId"),
  );
  public readonly isWorkExecutionStopped = new QEnumPath(
    this.withPrefix("IsWorkExecutionStopped"),
    NoYes,
  );
  public readonly warehouseWorkStatus = new QEnumPath(
    this.withPrefix("WarehouseWorkStatus"),
    WhsWorkStatus,
  );
  public readonly loadId = new QStringPath(this.withPrefix("LoadId"));
  public readonly shipmentId = new QStringPath(this.withPrefix("ShipmentId"));
  public readonly workQuantity = new QNumberPath(
    this.withPrefix("WorkQuantity"),
  );
  public readonly workQuantityUnitSymbol = new QStringPath(
    this.withPrefix("WorkQuantityUnitSymbol"),
  );
  public readonly itemSerialNumber = new QStringPath(
    this.withPrefix("ItemSerialNumber"),
  );
  public readonly productConfigurationId = new QStringPath(
    this.withPrefix("ProductConfigurationId"),
  );
  public readonly licensePlateNumber = new QStringPath(
    this.withPrefix("LicensePlateNumber"),
  );
  public readonly inventorySiteId = new QStringPath(
    this.withPrefix("InventorySiteId"),
  );
  public readonly warehouseId = new QStringPath(this.withPrefix("WarehouseId"));
  public readonly productVersionId = new QStringPath(
    this.withPrefix("ProductVersionId"),
  );
  public readonly warehouseWorkProcessingStartDateTime =
    new QDateTimeOffsetPath(
      this.withPrefix("WarehouseWorkProcessingStartDateTime"),
    );
  public readonly warehouseWorkType = new QEnumPath(
    this.withPrefix("WarehouseWorkType"),
    WhsWorkType,
  );
  public readonly fefoItemBatchNumber = new QStringPath(
    this.withPrefix("FEFOItemBatchNumber"),
  );
  public readonly itemBatchNumber = new QStringPath(
    this.withPrefix("ItemBatchNumber"),
  );
  public readonly productColorId = new QStringPath(
    this.withPrefix("ProductColorId"),
  );
  public readonly remainingHandlingQuantity = new QNumberPath(
    this.withPrefix("RemainingHandlingQuantity"),
  );
  public readonly extraHandlingQuantity = new QNumberPath(
    this.withPrefix("ExtraHandlingQuantity"),
  );
  public readonly containerId = new QStringPath(this.withPrefix("ContainerId"));
  public readonly isReplenishmentNeeded = new QEnumPath(
    this.withPrefix("IsReplenishmentNeeded"),
    NoYes,
  );
  public readonly capturedWeight = new QNumberPath(
    this.withPrefix("CapturedWeight"),
  );
  public readonly inventoryOwnerId = new QStringPath(
    this.withPrefix("InventoryOwnerId"),
  );
  public readonly workLinePairId = new QStringPath(
    this.withPrefix("WorkLinePairId"),
  );
}

export const qWarehouseWorkLines = new QWarehouseWorkLines();

export class QWarehouseWorkLinesId extends QId<WarehouseWorkLinesId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("WarehouseWorkId", "warehouseWorkId"),
    new QNumberParam("WorkLineNumber", "workLineNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QReplenishmentRuleLinesV2 extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly replenishmentRule = new QStringPath(
    this.withPrefix("ReplenishmentRule"),
  );
  public readonly type = new QEnumPath(
    this.withPrefix("Type"),
    RetailReplenishmentRuleType,
  );
  public readonly relationId = new QNumberPath(this.withPrefix("RelationId"));
  public readonly replenishmentHierarchyValidFrom = new QDateTimeOffsetPath(
    this.withPrefix("ReplenishmentHierarchyValidFrom"),
  );
  public readonly defaultWeight = new QNumberPath(
    this.withPrefix("DefaultWeight"),
  );
  public readonly percent = new QNumberPath(this.withPrefix("Percent"));
  public readonly replenishmentHierarchyValidTo = new QDateTimeOffsetPath(
    this.withPrefix("ReplenishmentHierarchyValidTo"),
  );
  public readonly weight = new QNumberPath(this.withPrefix("Weight"));
  public readonly description = new QStringPath(this.withPrefix("Description"));
  public readonly retailChannelId = new QStringPath(
    this.withPrefix("RetailChannelId"),
  );
  public readonly replenishmentOrganizationPartyNumber = new QStringPath(
    this.withPrefix("ReplenishmentOrganizationPartyNumber"),
  );
  public readonly defaultPercent = new QNumberPath(
    this.withPrefix("DefaultPercent"),
  );
  public readonly replenishmentHierarchyTypeName = new QStringPath(
    this.withPrefix("ReplenishmentHierarchyTypeName"),
  );
}

export const qReplenishmentRuleLinesV2 = new QReplenishmentRuleLinesV2();

export class QReplenishmentRuleLinesV2Id extends QId<ReplenishmentRuleLinesV2Id> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("ReplenishmentRule", "replenishmentRule"),
    new QEnumParam("Type", "type"),
    new QNumberParam("RelationId", "relationId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QMaterialHandlingParameters extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly enableManualInboundMessageCreation = new QEnumPath(
    this.withPrefix("EnableManualInboundMessageCreation"),
    NoYes,
  );
  public readonly userId = new QStringPath(this.withPrefix("UserId"));
  public readonly enableMessageId = new QEnumPath(
    this.withPrefix("EnableMessageId"),
    NoYes,
  );
}

export const qMaterialHandlingParameters = new QMaterialHandlingParameters();

export class QMaterialHandlingParametersId extends QId<MaterialHandlingParametersId> {
  private readonly params = [new QStringParam("dataAreaId")];

  getParams() {
    return this.params;
  }
}

export class QWhsMobileWorkLocationComplete extends QueryObject {
  public readonly recordId = new QNumberPath(this.withPrefix("RecordId"));
  public readonly sessionRecId = new QNumberPath(
    this.withPrefix("SessionRecId"),
  );
  public readonly submissionType = new QStringPath(
    this.withPrefix("SubmissionType"),
  );
}

export const qWhsMobileWorkLocationComplete =
  new QWhsMobileWorkLocationComplete();

export class QWhsMobileWorkLocationCompleteId extends QId<WhsMobileWorkLocationCompleteId> {
  private readonly params = [new QNumberParam("RecordId", "recordId")];

  getParams() {
    return this.params;
  }
}

export class QDeliveryMode extends QueryObject {
  public readonly deliveryModeId = new QStringPath(
    this.withPrefix("DeliveryModeId"),
  );
  public readonly deliveryModeName = new QStringPath(
    this.withPrefix("DeliveryModeName"),
  );
}

export const qDeliveryMode = new QDeliveryMode();

export class QDeliveryModeId extends QId<DeliveryModeId> {
  private readonly params = [
    new QStringParam("DeliveryModeId", "deliveryModeId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QProdComParameters extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly id = new QNumberPath(this.withPrefix("ID"));
  public readonly automaticRecalculation = new QEnumPath(
    this.withPrefix("AutomaticRecalculation"),
    NoYes,
  );
  public readonly externalContactId = new QStringPath(
    this.withPrefix("ExternalContactID"),
  );
  public readonly company = new QStringPath(this.withPrefix("Company"));
  public readonly branchNumber = new QEnumPath(
    this.withPrefix("BranchNumber"),
    InventProdComBranchType,
  );
  public readonly primaryContactId = new QStringPath(
    this.withPrefix("PrimaryContactID"),
  );
}

export const qProdComParameters = new QProdComParameters();

export class QProdComParametersId extends QId<ProdComParametersId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QNumberParam("ID", "id"),
  ];

  getParams() {
    return this.params;
  }
}

export class QWhsMobileWorkGuidedCycleCounting extends QueryObject {
  public readonly recordId = new QNumberPath(this.withPrefix("RecordId"));
  public readonly itemId = new QStringPath(this.withPrefix("ItemId"));
  public readonly sessionRecId = new QNumberPath(
    this.withPrefix("SessionRecId"),
  );
  public readonly submissionType = new QStringPath(
    this.withPrefix("SubmissionType"),
  );
  public readonly inventStatusIdOptions = new QStringPath(
    this.withPrefix("InventStatusId_Options"),
  );
  public readonly error = new QStringPath(this.withPrefix("Error"));
  public readonly mutableProperties = new QStringPath(
    this.withPrefix("MutableProperties"),
  );
  public readonly cycleCountQty1 = new QStringPath(
    this.withPrefix("CycleCountQty1"),
  );
  public readonly wmsLocationId = new QStringPath(
    this.withPrefix("WMSLocationId"),
  );
  public readonly cycleCountUom1 = new QStringPath(
    this.withPrefix("CycleCountUOM1"),
  );
  public readonly cycleCountUom1Options = new QStringPath(
    this.withPrefix("CycleCountUOM1_Options"),
  );
  public readonly licensePlateId = new QStringPath(
    this.withPrefix("LicensePlateId"),
  );
  public readonly inventStatusId = new QStringPath(
    this.withPrefix("InventStatusId"),
  );
  public readonly rfDescription1 = new QStringPath(
    this.withPrefix("RFDescription1"),
  );
}

export const qWhsMobileWorkGuidedCycleCounting =
  new QWhsMobileWorkGuidedCycleCounting();

export class QWhsMobileWorkGuidedCycleCountingId extends QId<WhsMobileWorkGuidedCycleCountingId> {
  private readonly params = [new QNumberParam("RecordId", "recordId")];

  getParams() {
    return this.params;
  }
}

export class QInventoryAccountingKpiGoals extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly inventoryAccuracy = new QNumberPath(
    this.withPrefix("InventoryAccuracy"),
  );
  public readonly annualInventoryTurn = new QNumberPath(
    this.withPrefix("AnnualInventoryTurn"),
  );
}

export const qInventoryAccountingKpiGoals = new QInventoryAccountingKpiGoals();

export class QInventoryAccountingKpiGoalsId extends QId<InventoryAccountingKpiGoalsId> {
  private readonly params = [new QStringParam("dataAreaId")];

  getParams() {
    return this.params;
  }
}

export class QShippingParameters extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly rentalContainerShipmentStatusId = new QStringPath(
    this.withPrefix("RentalContainerShipmentStatusId"),
  );
  public readonly defaultCostingVersionId = new QStringPath(
    this.withPrefix("DefaultCostingVersionId"),
  );
  public readonly activate = new QEnumPath(this.withPrefix("Activate"), NoYes);
  public readonly isOverUnderNonShipPurch = new QEnumPath(
    this.withPrefix("IsOverUnderNonShipPurch"),
    NoYes,
  );
  public readonly costPostingSpecificationRule = new QEnumPath(
    this.withPrefix("CostPostingSpecificationRule"),
    InventAdjustmentSpec,
  );
  public readonly voyageCreatorWeightTolerancePercentage = new QNumberPath(
    this.withPrefix("VoyageCreatorWeightTolerancePercentage"),
  );
  public readonly multipleVendorPerFolioTolerance = new QEnumPath(
    this.withPrefix("MultipleVendorPerFolioTolerance"),
    ErrorTolerance,
  );
  public readonly isOverUnderNonGitPurch = new QEnumPath(
    this.withPrefix("IsOverUnderNonGITPurch"),
    NoYes,
  );
  public readonly shippingExchangeRateTypeName = new QStringPath(
    this.withPrefix("ShippingExchangeRateTypeName"),
  );
  public readonly serviceProviderVendorInvoiceTolerance = new QEnumPath(
    this.withPrefix("ServiceProviderVendorInvoiceTolerance"),
    ErrorTolerance,
  );
  public readonly overUnderDeliveryInventoryMovementJournalNameId =
    new QStringPath(
      this.withPrefix("OverUnderDeliveryInventoryMovementJournalNameId"),
    );
  public readonly closedGoodsInTransitOrderReceiptGracePeriodDays =
    new QNumberPath(
      this.withPrefix("ClosedGoodsInTransitOrderReceiptGracePeriodDays"),
    );
  public readonly willLandedCostCalculationAllowZeroCost = new QEnumPath(
    this.withPrefix("WillLandedCostCalculationAllowZeroCost"),
    NoYes,
  );
  public readonly multipleVendorInvoicePerCostTransactionTolerance =
    new QEnumPath(
      this.withPrefix("MultipleVendorInvoicePerCostTransactionTolerance"),
      ErrorTolerance,
    );
  public readonly willLandedCostCalculationUseShippingExchangeRate =
    new QEnumPath(
      this.withPrefix("WillLandedCostCalculationUseShippingExchangeRate"),
      NoYes,
    );
  public readonly costCalculationMissingItemVolumeTolerance = new QEnumPath(
    this.withPrefix("CostCalculationMissingItemVolumeTolerance"),
    ErrorTolerance,
  );
  public readonly costedShipmentStatusId = new QStringPath(
    this.withPrefix("CostedShipmentStatusId"),
  );
  public readonly rentalContainerJourneyTemplateId = new QStringPath(
    this.withPrefix("RentalContainerJourneyTemplateId"),
  );
  public readonly costingReadyShipmentStatusId = new QStringPath(
    this.withPrefix("CostingReadyShipmentStatusId"),
  );
  public readonly multipleWarehousePerVoyageTolerance = new QEnumPath(
    this.withPrefix("MultipleWarehousePerVoyageTolerance"),
    ErrorTolerance,
  );
  public readonly isContainerHeaderCartonsAutomaticallyUpdated = new QEnumPath(
    this.withPrefix("IsContainerHeaderCartonsAutomaticallyUpdated"),
    NoYes,
  );
  public readonly allowCreateVoyageInBatch = new QEnumPath(
    this.withPrefix("AllowCreateVoyageInBatch"),
    NoYes,
  );
  public readonly inTransitShipmentStatusId = new QStringPath(
    this.withPrefix("InTransitShipmentStatusId"),
  );
  public readonly willCostAccrualUseVendorInvoiceVoucherNumber = new QEnumPath(
    this.withPrefix("WillCostAccrualUseVendorInvoiceVoucherNumber"),
    NoYes,
  );
  public readonly generateVoyageEditorDataManually = new QEnumPath(
    this.withPrefix("GenerateVoyageEditorDataManually"),
    NoYes,
  );
  public readonly willMovingAveragePostAdjustmentAsVariance = new QEnumPath(
    this.withPrefix("WillMovingAveragePostAdjustmentAsVariance"),
    NoYes,
  );
  public readonly costAdjustmentAccountingDateRule = new QEnumPath(
    this.withPrefix("CostAdjustmentAccountingDateRule"),
    ItmCostPostingDatePrinciple,
  );
  public readonly singletonKey = new QNumberPath(
    this.withPrefix("SingletonKey"),
  );
  public readonly purchaseOrderLineQuantityUpdateTolerance = new QEnumPath(
    this.withPrefix("PurchaseOrderLineQuantityUpdateTolerance"),
    ErrorTolerance,
  );
  public readonly underDeliveryInventoryTransferJournalNameId = new QStringPath(
    this.withPrefix("UnderDeliveryInventoryTransferJournalNameId"),
  );
  public readonly keepAutoTrackingDimNumber = new QEnumPath(
    this.withPrefix("KeepAutoTrackingDimNumber"),
    NoYes,
  );
  public readonly willCostingUseLandedCostTypeChargeAccrualMainAccount =
    new QEnumPath(
      this.withPrefix("WillCostingUseLandedCostTypeChargeAccrualMainAccount"),
      NoYes,
    );
  public readonly multipleDeliveryModePerVoyageTolerance = new QEnumPath(
    this.withPrefix("MultipleDeliveryModePerVoyageTolerance"),
    ErrorTolerance,
  );
  public readonly preCostedShipmentStatusId = new QStringPath(
    this.withPrefix("PreCostedShipmentStatusId"),
  );
  public readonly voyageCreatorVolumeTolerancePercentage = new QNumberPath(
    this.withPrefix("VoyageCreatorVolumeTolerancePercentage"),
  );
  public readonly itemArrivalJournalNameId = new QStringPath(
    this.withPrefix("ItemArrivalJournalNameId"),
  );
}

export const qShippingParameters = new QShippingParameters();

export class QShippingParametersId extends QId<ShippingParametersId> {
  private readonly params = [new QStringParam("dataAreaId")];

  getParams() {
    return this.params;
  }
}
