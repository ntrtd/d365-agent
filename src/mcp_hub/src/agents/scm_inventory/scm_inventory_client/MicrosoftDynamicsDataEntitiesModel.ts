// @ts-nocheck

export enum PmfProductType {
  Co_Product = "Co_Product",
  By_Product = "By_Product",
  None = "None",
  MainItem = "MainItem",
  BOM = "BOM",
  Formula = "Formula",
}

export enum NoYes {
  No = "No",
  Yes = "Yes",
}

export enum SalesDeliveryDateControlType {
  None = "None",
  SalesLeadTime = "SalesLeadTime",
  ATP = "ATP",
  ATPPlusIssueMargin = "ATPPlusIssueMargin",
  CTP = "CTP",
  FullRunCTP = "FullRunCTP",
}

export enum PdsBatchAttribToleranceAction {
  Warning = "Warning",
  NotAllowed = "NotAllowed",
}

export enum RouteOprPriority {
  Primary = "Primary",
  Secondary1 = "Secondary1",
  Secondary2 = "Secondary2",
  Secondary3 = "Secondary3",
  Secondary4 = "Secondary4",
  Secondary5 = "Secondary5",
  Secondary6 = "Secondary6",
  Secondary7 = "Secondary7",
  Secondary8 = "Secondary8",
  Secondary9 = "Secondary9",
  Secondary10 = "Secondary10",
  Secondary11 = "Secondary11",
  Secondary12 = "Secondary12",
  Secondary13 = "Secondary13",
  Secondary14 = "Secondary14",
  Secondary15 = "Secondary15",
  Secondary16 = "Secondary16",
  Secondary17 = "Secondary17",
  Secondary18 = "Secondary18",
  Secondary19 = "Secondary19",
  Secondary20 = "Secondary20",
}

export enum ReqMinSatisfy {
  TodaysDate = "TodaysDate",
  TodaysDateTime = "TodaysDateTime",
  FirstIssue = "FirstIssue",
  TimeFenceDate = "TimeFenceDate",
}

export enum ReqCovType {
  Period = "Period",
  Req = "Req",
  MinMax = "MinMax",
  Manual = "Manual",
  Priority = "Priority",
  DecouplingPoint = "DecouplingPoint",
}

export enum ReqOnHandConsumptionStrategy {
  BeforeAllOtherSupply = "BeforeAllOtherSupply",
  AfterAllOtherSupply = "AfterAllOtherSupply",
}

export enum ReqPoType {
  Purch = "Purch",
  Production = "Production",
  Transfer = "Transfer",
  Kanban = "Kanban",
}

export enum InventSiteGateTypeIn {
  In = "In",
  Out = "Out",
}

export enum EcoResProductType {
  Item = "Item",
  Service = "Service",
}

export enum EngChgEcmChangeTypes {
  None = "None",
  Changed = "Changed",
  New = "New",
  Deleted = "Deleted",
}

export enum EcoResVariantConfigurationTechnologyType {
  PredefinedVariants = "PredefinedVariants",
  DimensionBased = "DimensionBased",
  ConstraintBased = "ConstraintBased",
}

export enum EcoResProductSubtype {
  Product = "Product",
  ProductMaster = "ProductMaster",
  ProductVariant = "ProductVariant",
}

export enum TableGroupAll {
  Table = "Table",
  GroupId = "GroupId",
  All = "All",
}

export enum EcoResPhysicalDimensionType {
  Storage = "Storage",
  Packing = "Packing",
  NestedPacking = "NestedPacking",
}

export enum WhsWorkStatus {
  Open = "Open",
  InProcess = "InProcess",
  PendingReview = "PendingReview",
  Skipped = "Skipped",
  Closed = "Closed",
  Cancelled = "Cancelled",
  Combined = "Combined",
}

export enum KittingCheckLoad {
  NoCheck = "NoCheck",
  Shipment = "Shipment",
  Work = "Work",
}

export enum KittingCheckPickingListRegistration {
  PickingRoute = "PickingRoute",
  Shipment = "Shipment",
  NoCheck = "NoCheck",
}

export enum GupBasePriceType {
  BasePricePurchase = "BasePricePurchase",
  BasePriceSales = "BasePriceSales",
  BasePriceInventoryCost = "BasePriceInventoryCost",
}

export enum ErrorTolerance {
  Accept = "Accept",
  Warning = "Warning",
  Error = "Error",
}

export enum WhsewShipmentOrderRequestStatus {
  Draft = "Draft",
  Sent = "Sent",
  Received = "Received",
  Accepted = "Accepted",
  Failed = "Failed",
  Cancelled = "Cancelled",
}

export enum RouteOprType {
  Standard = "Standard",
  Vendor = "Vendor",
}

export enum RouteFormula {
  Formula0 = "Formula0",
  Formula1 = "Formula1",
  Formula2 = "Formula2",
  Formula3 = "Formula3",
}

export enum RetailReplenishmentRuleType {
  GroupType = "GroupType",
  LocationType = "LocationType",
}

export enum WhsModule {
  Sales = "Sales",
  Purch = "Purch",
  Transfer = "Transfer",
  ProdBOM = "ProdBOM",
  OutboundShipmentOrder = "OutboundShipmentOrder",
  InboundShipmentOrder = "InboundShipmentOrder",
}

export enum WhsWorkType {
  None = "None",
  Pick = "Pick",
  Put = "Put",
  Count = "Count",
  Adjustment = "Adjustment",
  Custom = "Custom",
  Quarantine = "Quarantine",
  LicensePlateBuild = "LicensePlateBuild",
  Print = "Print",
  StatusChange = "StatusChange",
  PackToNestedLicensePlate = "PackToNestedLicensePlate",
  QualityCheck = "QualityCheck",
}

export enum WhsLabelLayoutDataSourceParameterType {
  String = "String",
}

export enum InventProdComBranchType {
  Company = "Company",
  Warehouse = "Warehouse",
}

export enum InventAdjustmentSpec {
  Total = "Total",
  ItemGroup = "ItemGroup",
  ItemNum = "ItemNum",
}

export enum ItmCostPostingDatePrinciple {
  TransDate = "TransDate",
  PurchDateFinancial = "PurchDateFinancial",
  SelectedDate = "SelectedDate",
}

export enum AxType {
  Container = "Container",
  Date = "Date",
  Enum = "Enum",
  Guid = "Guid",
  Int32 = "Int32",
  Int64 = "Int64",
  Real = "Real",
  Record = "Record",
  String = "String",
  Time = "Time",
  UtcDateTime = "UtcDateTime",
  Void = "Void",
}

export interface ItemCoverageSettings {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  itemNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageWarehouseLocationId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageWarehouseLocationId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageItemBatchNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageItemBatchNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductColorId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductColorId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductSizeId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductSizeId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductStyleId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductStyleId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageWarehouseId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageWarehouseId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageItemSerialNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageItemSerialNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageSiteId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageSiteId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageInventoryStatusId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageInventoryStatusId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductConfigurationId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductConfigurationId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoveragePeriodDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  coveragePeriodDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VendorAccountNumber` |
   * | Type | `Edm.String` |
   */
  vendorAccountNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApprovedRequisitionTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  approvedRequisitionTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastPlanningFormulaPriorityChangedDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  lastPlanningFormulaPriorityChangedDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProcurementLeadTimeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  procurementLeadTimeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultPlanningFormulaPriority` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  defaultPlanningFormulaPriority: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProcurementLeadTimeOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProcurementLeadTimeOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutomaticFirmingTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  automaticFirmingTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsConsumeOnHandOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isConsumeOnHandOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductionLeadTimeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  productionLeadTimeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumOnHandFulfillmentMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.ReqMinSatisfy` |
   */
  minimumOnHandFulfillmentMethod: ReqMinSatisfy | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlanningFormulaItemNumber` |
   * | Type | `Edm.String` |
   */
  planningFormulaItemNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumOnHandInventoryQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  maximumOnHandInventoryQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AreTimeFencesOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  areTimeFencesOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FreezeTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  freezeTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsTransferLeadTimeOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isTransferLeadTimeOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CapacitySchedulingTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  capacitySchedulingTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NegativeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  negativeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumOnHandInventoryQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  minimumOnHandInventoryQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumOnHandInventorySafetyKeyId` |
   * | Type | `Edm.String` |
   */
  maximumOnHandInventorySafetyKeyId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PositiveDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  positiveDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  coverageTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CurrentPlanningFormulaPriority` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  currentPlanningFormulaPriority: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductCoverageGroupId` |
   * | Type | `Edm.String` |
   */
  productCoverageGroupId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumOnHandInventorySafetyKeyId` |
   * | Type | `Edm.String` |
   */
  minimumOnHandInventorySafetyKeyId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AreCoverageGroupSettingsOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  areCoverageGroupSettingsOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsTransferLeadTimeUsingWorkingDays` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isTransferLeadTimeUsingWorkingDays: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProcumentLeadTimeUsingWorkingDays` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProcumentLeadTimeUsingWorkingDays: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BOMOrFormulaExplosionTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  bomOrFormulaExplosionTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AreGeneralSettingsOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  areGeneralSettingsOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultPlannedTransferOrderFromWarehouseId` |
   * | Type | `Edm.String` |
   */
  defaultPlannedTransferOrderFromWarehouseId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.ReqCovType` |
   */
  coverageMethod: ReqCovType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConsumeOnHandInventoryMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.ReqOnHandConsumptionStrategy` |
   */
  consumeOnHandInventoryMethod: ReqOnHandConsumptionStrategy | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransferLeadTimeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  transferLeadTimeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlannedOrderType` |
   * | Type | `Microsoft.Dynamics.DataEntities.ReqPOType` |
   */
  plannedOrderType: ReqPoType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsPlannedOrderTypeOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isPlannedOrderTypeOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProductionLeadTimeUsingWorkingDays` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProductionLeadTimeUsingWorkingDays: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProductionLeadTimeOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProductionLeadTimeOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsMinimumOnHandSafetyPeriodUsed` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isMinimumOnHandSafetyPeriodUsed: NoYes | null;
}

export type ItemCoverageSettingsId = {
  dataAreaId: string;
  itemNumber: string;
  coverageWarehouseLocationId: string;
  coverageItemBatchNumber: string;
  coverageProductColorId: string;
  coverageProductSizeId: string;
  coverageProductStyleId: string;
  coverageWarehouseId: string;
  coverageItemSerialNumber: string;
  coverageSiteId: string;
  coverageInventoryStatusId: string;
  coverageProductConfigurationId: string;
};

export interface EditableItemCoverageSettings
  extends Pick<
      ItemCoverageSettings,
      | "dataAreaId"
      | "itemNumber"
      | "coverageWarehouseLocationId"
      | "coverageItemBatchNumber"
      | "coverageProductColorId"
      | "coverageProductSizeId"
      | "coverageProductStyleId"
      | "coverageWarehouseId"
      | "coverageItemSerialNumber"
      | "coverageSiteId"
      | "coverageInventoryStatusId"
      | "coverageProductConfigurationId"
      | "coveragePeriodDays"
      | "approvedRequisitionTimeFenceDays"
      | "lastPlanningFormulaPriorityChangedDate"
      | "procurementLeadTimeDays"
      | "defaultPlanningFormulaPriority"
      | "automaticFirmingTimeFenceDays"
      | "productionLeadTimeDays"
      | "maximumOnHandInventoryQuantity"
      | "freezeTimeFenceDays"
      | "capacitySchedulingTimeFenceDays"
      | "negativeDays"
      | "minimumOnHandInventoryQuantity"
      | "positiveDays"
      | "coverageTimeFenceDays"
      | "currentPlanningFormulaPriority"
      | "bomOrFormulaExplosionTimeFenceDays"
      | "transferLeadTimeDays"
    >,
    Partial<
      Pick<
        ItemCoverageSettings,
        | "vendorAccountNumber"
        | "isProcurementLeadTimeOverridden"
        | "isConsumeOnHandOverridden"
        | "minimumOnHandFulfillmentMethod"
        | "planningFormulaItemNumber"
        | "areTimeFencesOverridden"
        | "isTransferLeadTimeOverridden"
        | "maximumOnHandInventorySafetyKeyId"
        | "productCoverageGroupId"
        | "minimumOnHandInventorySafetyKeyId"
        | "areCoverageGroupSettingsOverridden"
        | "isTransferLeadTimeUsingWorkingDays"
        | "isProcumentLeadTimeUsingWorkingDays"
        | "areGeneralSettingsOverridden"
        | "defaultPlannedTransferOrderFromWarehouseId"
        | "coverageMethod"
        | "consumeOnHandInventoryMethod"
        | "plannedOrderType"
        | "isPlannedOrderTypeOverridden"
        | "isProductionLeadTimeUsingWorkingDays"
        | "isProductionLeadTimeOverridden"
        | "isMinimumOnHandSafetyPeriodUsed"
      >
    > {}

export interface SiteGate {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Type` |
   * | Type | `Microsoft.Dynamics.DataEntities.InventSiteGateType_IN` |
   */
  type: InventSiteGateTypeIn | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GateId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  gateId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SiteId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  siteId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   */
  description: string | null;
}

export type SiteGateId = {
  dataAreaId: string;
  type: InventSiteGateTypeIn | null;
  gateId: string;
  siteId: string;
};

export interface EditableSiteGate
  extends Pick<SiteGate, "dataAreaId" | "gateId" | "siteId">,
    Partial<Pick<SiteGate, "type" | "description">> {}

export interface ProductStyleV2 {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StyleId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  styleId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hexcode` |
   * | Type | `Edm.String` |
   */
  hexcode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisplayOrder` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  displayOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RefinerGroup` |
   * | Type | `Edm.String` |
   */
  refinerGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Url` |
   * | Type | `Edm.String` |
   */
  url: string | null;
}

export type ProductStyleV2Id = string | { styleId: string };

export interface EditableProductStyleV2
  extends Pick<ProductStyleV2, "displayOrder">,
    Partial<Pick<ProductStyleV2, "hexcode" | "refinerGroup" | "url">> {}

export interface ProductStyleGroupLineV2 {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductStyleGroupId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productStyleGroupId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductStyleId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productStyleId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RefinerGroup` |
   * | Type | `Edm.String` |
   */
  refinerGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReplenishmentWeight` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  replenishmentWeight: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StyleName` |
   * | Type | `Edm.String` |
   */
  styleName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StyleDescription` |
   * | Type | `Edm.String` |
   */
  styleDescription: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hexcode` |
   * | Type | `Edm.String` |
   */
  hexcode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisplayOrder` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  displayOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BarcodeNumber` |
   * | Type | `Edm.String` |
   */
  barcodeNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Url` |
   * | Type | `Edm.String` |
   */
  url: string | null;
}

export type ProductStyleGroupLineV2Id = {
  productStyleGroupId: string;
  productStyleId: string;
};

export interface EditableProductStyleGroupLineV2
  extends Pick<
      ProductStyleGroupLineV2,
      | "productStyleGroupId"
      | "productStyleId"
      | "replenishmentWeight"
      | "displayOrder"
    >,
    Partial<
      Pick<
        ProductStyleGroupLineV2,
        | "refinerGroup"
        | "styleName"
        | "styleDescription"
        | "hexcode"
        | "barcodeNumber"
        | "url"
      >
    > {}

export interface EngineeringProductCategoryDetails {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringProductCategoryName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  engineeringProductCategoryName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductType` |
   * | Type | `Microsoft.Dynamics.DataEntities.EcoResProductType` |
   */
  productType: EcoResProductType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductReadinessPolicyName` |
   * | Type | `Edm.String` |
   */
  productReadinessPolicyName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductSubtype` |
   * | Type | `Microsoft.Dynamics.DataEntities.EcoResProductSubtype` |
   */
  productSubtype: EcoResProductSubtype | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringOrganizationId` |
   * | Type | `Edm.String` |
   */
  engineeringOrganizationId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductionType` |
   * | Type | `Microsoft.Dynamics.DataEntities.PmfProductType` |
   */
  productionType: PmfProductType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PdsCWProduct` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  pdsCwProduct: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VariantConfigurationTechnology` |
   * | Type | `Microsoft.Dynamics.DataEntities.EcoResVariantConfigurationTechnologyType` |
   */
  variantConfigurationTechnology: EcoResVariantConfigurationTechnologyType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductDimensionGroupName` |
   * | Type | `Edm.String` |
   */
  productDimensionGroupName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VersionNumberingRuleName` |
   * | Type | `Edm.String` |
   */
  versionNumberingRuleName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreatedProductLifecycleStateId` |
   * | Type | `Edm.String` |
   */
  createdProductLifecycleStateId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EnforceDateRule` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  enforceDateRule: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductReleasePolicyName` |
   * | Type | `Edm.String` |
   */
  productReleasePolicyName: string | null;
}

export type EngineeringProductCategoryDetailsId =
  | string
  | { engineeringProductCategoryName: string };

export interface EditableEngineeringProductCategoryDetails
  extends Partial<
    Pick<
      EngineeringProductCategoryDetails,
      | "productType"
      | "productReadinessPolicyName"
      | "productSubtype"
      | "engineeringOrganizationId"
      | "productionType"
      | "pdsCwProduct"
      | "variantConfigurationTechnology"
      | "productDimensionGroupName"
      | "versionNumberingRuleName"
      | "createdProductLifecycleStateId"
      | "enforceDateRule"
      | "productReleasePolicyName"
    >
  > {}

export interface ProductSizeGroupLineV2 {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductSizeGroupId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productSizeGroupId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SizeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  sizeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SizeDescription` |
   * | Type | `Edm.String` |
   */
  sizeDescription: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductSizeId` |
   * | Type | `Edm.String` |
   */
  productSizeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RefinerGroup` |
   * | Type | `Edm.String` |
   */
  refinerGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReplenishmentWeight` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  replenishmentWeight: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hexcode` |
   * | Type | `Edm.String` |
   */
  hexcode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisplayOrder` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  displayOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BarcodeNumber` |
   * | Type | `Edm.String` |
   */
  barcodeNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Url` |
   * | Type | `Edm.String` |
   */
  url: string | null;
}

export type ProductSizeGroupLineV2Id = {
  productSizeGroupId: string;
  sizeName: string;
};

export interface EditableProductSizeGroupLineV2
  extends Pick<
      ProductSizeGroupLineV2,
      "productSizeGroupId" | "sizeName" | "replenishmentWeight" | "displayOrder"
    >,
    Partial<
      Pick<
        ProductSizeGroupLineV2,
        | "sizeDescription"
        | "productSizeId"
        | "refinerGroup"
        | "hexcode"
        | "barcodeNumber"
        | "url"
      >
    > {}

export interface PhysicalProductDimensionDetails {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DimensionType` |
   * | Type | `Microsoft.Dynamics.DataEntities.EcoResPhysicalDimensionType` |
   */
  dimensionType: EcoResPhysicalDimensionType | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PhysicalUnitSymbol` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  physicalUnitSymbol: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PhysicalDepth` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  physicalDepth: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MassUnitSymbol` |
   * | Type | `Edm.String` |
   */
  massUnitSymbol: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LengthUnitSymbol` |
   * | Type | `Edm.String` |
   */
  lengthUnitSymbol: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PhysicalWidth` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  physicalWidth: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PhysicalWeight` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  physicalWeight: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PhysicalHeight` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  physicalHeight: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VolumeUnitSymbol` |
   * | Type | `Edm.String` |
   */
  volumeUnitSymbol: string | null;
}

export type PhysicalProductDimensionDetailsId = {
  productNumber: string;
  dimensionType: EcoResPhysicalDimensionType | null;
  physicalUnitSymbol: string;
};

export interface EditablePhysicalProductDimensionDetails
  extends Pick<
      PhysicalProductDimensionDetails,
      | "productNumber"
      | "physicalUnitSymbol"
      | "physicalDepth"
      | "physicalWidth"
      | "physicalWeight"
      | "physicalHeight"
    >,
    Partial<
      Pick<
        PhysicalProductDimensionDetails,
        | "dimensionType"
        | "massUnitSymbol"
        | "lengthUnitSymbol"
        | "volumeUnitSymbol"
      >
    > {}

export interface ItemCoverageSettingsV2 {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  itemNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageWarehouseLocationId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageWarehouseLocationId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageItemBatchNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageItemBatchNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductColorId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductColorId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductSizeId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductSizeId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductStyleId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductStyleId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductVersionId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductVersionId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageWarehouseId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageWarehouseId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageItemSerialNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageItemSerialNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageSiteId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageSiteId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageInventoryStatusId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageInventoryStatusId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductConfigurationId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductConfigurationId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoveragePeriodDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  coveragePeriodDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VendorAccountNumber` |
   * | Type | `Edm.String` |
   */
  vendorAccountNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApprovedRequisitionTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  approvedRequisitionTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastPlanningFormulaPriorityChangedDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  lastPlanningFormulaPriorityChangedDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProcurementLeadTimeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  procurementLeadTimeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultPlanningFormulaPriority` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  defaultPlanningFormulaPriority: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProcurementLeadTimeOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProcurementLeadTimeOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutomaticFirmingTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  automaticFirmingTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsConsumeOnHandOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isConsumeOnHandOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductionLeadTimeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  productionLeadTimeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumOnHandFulfillmentMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.ReqMinSatisfy` |
   */
  minimumOnHandFulfillmentMethod: ReqMinSatisfy | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlanningFormulaItemNumber` |
   * | Type | `Edm.String` |
   */
  planningFormulaItemNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumOnHandInventoryQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  maximumOnHandInventoryQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AreTimeFencesOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  areTimeFencesOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FreezeTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  freezeTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsTransferLeadTimeOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isTransferLeadTimeOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CapacitySchedulingTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  capacitySchedulingTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NegativeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  negativeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumOnHandInventoryQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  minimumOnHandInventoryQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageInventoryDimensionId` |
   * | Type | `Edm.String` |
   */
  coverageInventoryDimensionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumOnHandInventorySafetyKeyId` |
   * | Type | `Edm.String` |
   */
  maximumOnHandInventorySafetyKeyId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PositiveDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  positiveDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  coverageTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CurrentPlanningFormulaPriority` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  currentPlanningFormulaPriority: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductCoverageGroupId` |
   * | Type | `Edm.String` |
   */
  productCoverageGroupId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumOnHandInventorySafetyKeyId` |
   * | Type | `Edm.String` |
   */
  minimumOnHandInventorySafetyKeyId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AreCoverageGroupSettingsOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  areCoverageGroupSettingsOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsTransferLeadTimeUsingWorkingDays` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isTransferLeadTimeUsingWorkingDays: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProcumentLeadTimeUsingWorkingDays` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProcumentLeadTimeUsingWorkingDays: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MustUseLatestPossibleSupplyFirst` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  mustUseLatestPossibleSupplyFirst: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BOMOrFormulaExplosionTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  bomOrFormulaExplosionTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AreGeneralSettingsOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  areGeneralSettingsOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultPlannedTransferOrderFromWarehouseId` |
   * | Type | `Edm.String` |
   */
  defaultPlannedTransferOrderFromWarehouseId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.ReqCovType` |
   */
  coverageMethod: ReqCovType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConsumeOnHandInventoryMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.ReqOnHandConsumptionStrategy` |
   */
  consumeOnHandInventoryMethod: ReqOnHandConsumptionStrategy | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransferLeadTimeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  transferLeadTimeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlannedOrderType` |
   * | Type | `Microsoft.Dynamics.DataEntities.ReqPOType` |
   */
  plannedOrderType: ReqPoType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsPlannedOrderTypeOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isPlannedOrderTypeOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProductionLeadTimeUsingWorkingDays` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProductionLeadTimeUsingWorkingDays: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProductionLeadTimeOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProductionLeadTimeOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsMinimumOnHandSafetyPeriodUsed` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isMinimumOnHandSafetyPeriodUsed: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OrderSpikeThreshold` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  orderSpikeThreshold: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AverageDailyUsage` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  averageDailyUsage: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DistributionBasedADUEnabled` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  distributionBasedAduEnabled: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UseDecouplingPointPeriodSettings` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  useDecouplingPointPeriodSettings: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReorderPoint` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  reorderPoint: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OrderCycle` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  orderCycle: number;
}

export type ItemCoverageSettingsV2Id = {
  dataAreaId: string;
  itemNumber: string;
  coverageWarehouseLocationId: string;
  coverageItemBatchNumber: string;
  coverageProductColorId: string;
  coverageProductSizeId: string;
  coverageProductStyleId: string;
  coverageProductVersionId: string;
  coverageWarehouseId: string;
  coverageItemSerialNumber: string;
  coverageSiteId: string;
  coverageInventoryStatusId: string;
  coverageProductConfigurationId: string;
};

export interface EditableItemCoverageSettingsV2
  extends Pick<
      ItemCoverageSettingsV2,
      | "dataAreaId"
      | "itemNumber"
      | "coverageWarehouseLocationId"
      | "coverageItemBatchNumber"
      | "coverageProductColorId"
      | "coverageProductSizeId"
      | "coverageProductStyleId"
      | "coverageProductVersionId"
      | "coverageWarehouseId"
      | "coverageItemSerialNumber"
      | "coverageSiteId"
      | "coverageInventoryStatusId"
      | "coverageProductConfigurationId"
      | "coveragePeriodDays"
      | "approvedRequisitionTimeFenceDays"
      | "lastPlanningFormulaPriorityChangedDate"
      | "procurementLeadTimeDays"
      | "defaultPlanningFormulaPriority"
      | "automaticFirmingTimeFenceDays"
      | "productionLeadTimeDays"
      | "maximumOnHandInventoryQuantity"
      | "freezeTimeFenceDays"
      | "capacitySchedulingTimeFenceDays"
      | "negativeDays"
      | "minimumOnHandInventoryQuantity"
      | "positiveDays"
      | "coverageTimeFenceDays"
      | "currentPlanningFormulaPriority"
      | "bomOrFormulaExplosionTimeFenceDays"
      | "transferLeadTimeDays"
      | "orderSpikeThreshold"
      | "averageDailyUsage"
      | "reorderPoint"
      | "orderCycle"
    >,
    Partial<
      Pick<
        ItemCoverageSettingsV2,
        | "vendorAccountNumber"
        | "isProcurementLeadTimeOverridden"
        | "isConsumeOnHandOverridden"
        | "minimumOnHandFulfillmentMethod"
        | "planningFormulaItemNumber"
        | "areTimeFencesOverridden"
        | "isTransferLeadTimeOverridden"
        | "coverageInventoryDimensionId"
        | "maximumOnHandInventorySafetyKeyId"
        | "productCoverageGroupId"
        | "minimumOnHandInventorySafetyKeyId"
        | "areCoverageGroupSettingsOverridden"
        | "isTransferLeadTimeUsingWorkingDays"
        | "isProcumentLeadTimeUsingWorkingDays"
        | "mustUseLatestPossibleSupplyFirst"
        | "areGeneralSettingsOverridden"
        | "defaultPlannedTransferOrderFromWarehouseId"
        | "coverageMethod"
        | "consumeOnHandInventoryMethod"
        | "plannedOrderType"
        | "isPlannedOrderTypeOverridden"
        | "isProductionLeadTimeUsingWorkingDays"
        | "isProductionLeadTimeOverridden"
        | "isMinimumOnHandSafetyPeriodUsed"
        | "distributionBasedAduEnabled"
        | "useDecouplingPointPeriodSettings"
      >
    > {}

export interface TransferLineFiscalInfo {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransferId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  transferId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineNum` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  lineNum: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShipTaxItemGroup` |
   * | Type | `Edm.String` |
   */
  shipTaxItemGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PriceChangedManually` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  priceChangedManually: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceiveTaxGroup` |
   * | Type | `Edm.String` |
   */
  receiveTaxGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PriceUnit` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  priceUnit: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivePrice` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  receivePrice: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShipTaxGroup` |
   * | Type | `Edm.String` |
   */
  shipTaxGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceiveTaxItemGroup` |
   * | Type | `Edm.String` |
   */
  receiveTaxItemGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShipCFOPId` |
   * | Type | `Edm.String` |
   */
  shipCfopId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceiveCFOPId` |
   * | Type | `Edm.String` |
   */
  receiveCfopId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShipPrice` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  shipPrice: number;
}

export type TransferLineFiscalInfoId = {
  dataAreaId: string;
  transferId: string;
  lineNum: number;
};

export interface EditableTransferLineFiscalInfo
  extends Pick<
      TransferLineFiscalInfo,
      | "dataAreaId"
      | "transferId"
      | "lineNum"
      | "priceUnit"
      | "receivePrice"
      | "shipPrice"
    >,
    Partial<
      Pick<
        TransferLineFiscalInfo,
        | "shipTaxItemGroup"
        | "priceChangedManually"
        | "receiveTaxGroup"
        | "shipTaxGroup"
        | "receiveTaxItemGroup"
        | "shipCfopId"
        | "receiveCfopId"
      >
    > {}

export interface PackingSlipTrackingInformation {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SalesOrderNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  salesOrderNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PackingSlipNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  packingSlipNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeliveryDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  deliveryDate: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrackingNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  trackingNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrackingURL` |
   * | Type | `Edm.String` |
   */
  trackingUrl: string | null;
}

export type PackingSlipTrackingInformationId = {
  dataAreaId: string;
  salesOrderNumber: string;
  packingSlipNumber: string;
  deliveryDate: string;
  trackingNumber: string;
};

export interface EditablePackingSlipTrackingInformation
  extends Pick<
      PackingSlipTrackingInformation,
      | "dataAreaId"
      | "salesOrderNumber"
      | "packingSlipNumber"
      | "deliveryDate"
      | "trackingNumber"
    >,
    Partial<Pick<PackingSlipTrackingInformation, "trackingUrl">> {}

export interface KittingParameters {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ValidFor` |
   * | Type | `Microsoft.Dynamics.DataEntities.TableGroupAll` |
   */
  validFor: TableGroupAll | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemRelation` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  itemRelation: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UseKitTradeAgreement` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  useKitTradeAgreement: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartialDelivery` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  partialDelivery: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UseKitFinancialDimensions` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  useKitFinancialDimensions: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WHSCompleteKitCheck` |
   * | Type | `Microsoft.Dynamics.DataEntities.KittingCheckLoad` |
   */
  whsCompleteKitCheck: KittingCheckLoad | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowKitPriceOnKit` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showKitPriceOnKit: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReserveItemsAutomatically` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  reserveItemsAutomatically: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartPrice` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  partPrice: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ManualPosting` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  manualPosting: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompleteKitCheck` |
   * | Type | `Microsoft.Dynamics.DataEntities.KittingCheckPickingListRegistration` |
   */
  completeKitCheck: KittingCheckPickingListRegistration | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartialReturn` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  partialReturn: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReserveCompleteKits` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  reserveCompleteKits: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SetUpProductDimensions` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  setUpProductDimensions: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SetUpStorageDimensions` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  setUpStorageDimensions: NoYes | null;
}

export type KittingParametersId = {
  dataAreaId: string;
  validFor: TableGroupAll | null;
  itemRelation: string;
};

export interface EditableKittingParameters
  extends Pick<KittingParameters, "dataAreaId" | "itemRelation">,
    Partial<
      Pick<
        KittingParameters,
        | "validFor"
        | "useKitTradeAgreement"
        | "partialDelivery"
        | "useKitFinancialDimensions"
        | "whsCompleteKitCheck"
        | "showKitPriceOnKit"
        | "reserveItemsAutomatically"
        | "partPrice"
        | "manualPosting"
        | "completeKitCheck"
        | "partialReturn"
        | "reserveCompleteKits"
        | "setUpProductDimensions"
        | "setUpStorageDimensions"
      >
    > {}

export interface ProductColorGroupLineV2 {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductColorGroupId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productColorGroupId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ColorName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  colorName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RefinerGroup` |
   * | Type | `Edm.String` |
   */
  refinerGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ColorDescription` |
   * | Type | `Edm.String` |
   */
  colorDescription: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReplenishmentWeight` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  replenishmentWeight: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductColorId` |
   * | Type | `Edm.String` |
   */
  productColorId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hexcode` |
   * | Type | `Edm.String` |
   */
  hexcode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisplayOrder` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  displayOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BarcodeNumber` |
   * | Type | `Edm.String` |
   */
  barcodeNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Url` |
   * | Type | `Edm.String` |
   */
  url: string | null;
}

export type ProductColorGroupLineV2Id = {
  productColorGroupId: string;
  colorName: string;
};

export interface EditableProductColorGroupLineV2
  extends Pick<
      ProductColorGroupLineV2,
      | "productColorGroupId"
      | "colorName"
      | "replenishmentWeight"
      | "displayOrder"
    >,
    Partial<
      Pick<
        ProductColorGroupLineV2,
        | "refinerGroup"
        | "colorDescription"
        | "productColorId"
        | "hexcode"
        | "barcodeNumber"
        | "url"
      >
    > {}

export interface ProductDefaultOrderSettings {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  itemNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsSalesProcessingStopped` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isSalesProcessingStopped: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumSalesOrderQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  maximumSalesOrderQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProcurementWarehouseMandatory` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProcurementWarehouseMandatory: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProcurementSiteId` |
   * | Type | `Edm.String` |
   */
  procurementSiteId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumSalesOrderQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  minimumSalesOrderQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProcurementLeadTimeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  procurementLeadTimeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumInventoryOrderQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  maximumInventoryOrderQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventoryATPBackwardDemandTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  inventoryAtpBackwardDemandTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SalesQuantityMultiples` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  salesQuantityMultiples: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProcurementWarehouseId` |
   * | Type | `Edm.String` |
   */
  procurementWarehouseId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventoryLeadTimeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  inventoryLeadTimeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventorySiteId` |
   * | Type | `Edm.String` |
   */
  inventorySiteId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProcurementProcessingstopped` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProcurementProcessingstopped: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProcurementQuantityMultiples` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  procurementQuantityMultiples: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SalesATPDelayedDemandOffsetDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  salesAtpDelayedDemandOffsetDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsInventoryATPIncludingPlannedOrders` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  isInventoryAtpIncludingPlannedOrders: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardProcurementOrderQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  standardProcurementOrderQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SalesATPBackwardDemandTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  salesAtpBackwardDemandTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsSalesSiteMandatory` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isSalesSiteMandatory: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsInventoryProcessingStopped` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isInventoryProcessingStopped: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsSalesATPIncludingPlannedOrders` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  isSalesAtpIncludingPlannedOrders: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumProcurementOrderQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  minimumProcurementOrderQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumInventoryOrderQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  minimumInventoryOrderQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SalesATPDelayedSupplyOffsetDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  salesAtpDelayedSupplyOffsetDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardInventoryOrderQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  standardInventoryOrderQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SalesLeadTimeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  salesLeadTimeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SalesSiteId` |
   * | Type | `Edm.String` |
   */
  salesSiteId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventoryATPDelayedDemandOffsetDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  inventoryAtpDelayedDemandOffsetDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventoryOrderPromisingMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.SalesDeliveryDateControlType` |
   */
  inventoryOrderPromisingMethod: SalesDeliveryDateControlType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumProcurementOrderQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  maximumProcurementOrderQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SalesOrderPromisingMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.SalesDeliveryDateControlType` |
   */
  salesOrderPromisingMethod: SalesDeliveryDateControlType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventoryATPDelayedSupplyOffsetDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  inventoryAtpDelayedSupplyOffsetDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsInventoryUsingWorkingDays` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isInventoryUsingWorkingDays: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardSalesOrderQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  standardSalesOrderQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventoryATPTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  inventoryAtpTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventoryATPBackwardSupplyTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  inventoryAtpBackwardSupplyTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SalesATPBackwardSupplyTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  salesAtpBackwardSupplyTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventoryQuantityMultiples` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  inventoryQuantityMultiples: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsSalesWarehouseMandatory` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isSalesWarehouseMandatory: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsSalesLeadTimeOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isSalesLeadTimeOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SalesATPTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  salesAtpTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProcurementUsingWorkingDays` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProcurementUsingWorkingDays: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AreInventoryOrderPromisingDefaultsOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  areInventoryOrderPromisingDefaultsOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProcurementSiteMandatory` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProcurementSiteMandatory: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventWarehouseId` |
   * | Type | `Edm.String` |
   */
  inventWarehouseId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AreSalesOrderPromisingDefaultsOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  areSalesOrderPromisingDefaultsOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsInventoryWarehouseMandatory` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isInventoryWarehouseMandatory: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsInventorySiteMandatory` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isInventorySiteMandatory: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventoryDimensionId` |
   * | Type | `Edm.String` |
   */
  inventoryDimensionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SalesWarehouseId` |
   * | Type | `Edm.String` |
   */
  salesWarehouseId: string | null;
}

export type ProductDefaultOrderSettingsId = {
  dataAreaId: string;
  itemNumber: string;
};

export interface EditableProductDefaultOrderSettings
  extends Pick<
      ProductDefaultOrderSettings,
      | "dataAreaId"
      | "itemNumber"
      | "maximumSalesOrderQuantity"
      | "minimumSalesOrderQuantity"
      | "procurementLeadTimeDays"
      | "maximumInventoryOrderQuantity"
      | "inventoryAtpBackwardDemandTimeFenceDays"
      | "salesQuantityMultiples"
      | "inventoryLeadTimeDays"
      | "procurementQuantityMultiples"
      | "salesAtpDelayedDemandOffsetDays"
      | "isInventoryAtpIncludingPlannedOrders"
      | "standardProcurementOrderQuantity"
      | "salesAtpBackwardDemandTimeFenceDays"
      | "isSalesAtpIncludingPlannedOrders"
      | "minimumProcurementOrderQuantity"
      | "minimumInventoryOrderQuantity"
      | "salesAtpDelayedSupplyOffsetDays"
      | "standardInventoryOrderQuantity"
      | "salesLeadTimeDays"
      | "inventoryAtpDelayedDemandOffsetDays"
      | "maximumProcurementOrderQuantity"
      | "inventoryAtpDelayedSupplyOffsetDays"
      | "standardSalesOrderQuantity"
      | "inventoryAtpTimeFenceDays"
      | "inventoryAtpBackwardSupplyTimeFenceDays"
      | "salesAtpBackwardSupplyTimeFenceDays"
      | "inventoryQuantityMultiples"
      | "salesAtpTimeFenceDays"
    >,
    Partial<
      Pick<
        ProductDefaultOrderSettings,
        | "isSalesProcessingStopped"
        | "isProcurementWarehouseMandatory"
        | "procurementSiteId"
        | "procurementWarehouseId"
        | "inventorySiteId"
        | "isProcurementProcessingstopped"
        | "isSalesSiteMandatory"
        | "isInventoryProcessingStopped"
        | "salesSiteId"
        | "inventoryOrderPromisingMethod"
        | "salesOrderPromisingMethod"
        | "isInventoryUsingWorkingDays"
        | "isSalesWarehouseMandatory"
        | "isSalesLeadTimeOverridden"
        | "isProcurementUsingWorkingDays"
        | "areInventoryOrderPromisingDefaultsOverridden"
        | "isProcurementSiteMandatory"
        | "inventWarehouseId"
        | "areSalesOrderPromisingDefaultsOverridden"
        | "isInventoryWarehouseMandatory"
        | "isInventorySiteMandatory"
        | "inventoryDimensionId"
        | "salesWarehouseId"
      >
    > {}

export interface InboundShipmentOrderRequestStatus {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InboundShipmentOrderRequestId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  inboundShipmentOrderRequestId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RequestStatus` |
   * | Type | `Microsoft.Dynamics.DataEntities.WHSEWShipmentOrderRequestStatus` |
   */
  requestStatus: WhsewShipmentOrderRequestStatus | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ResponseMessage` |
   * | Type | `Edm.String` |
   */
  responseMessage: string | null;
}

export type InboundShipmentOrderRequestStatusId = {
  dataAreaId: string;
  inboundShipmentOrderRequestId: string;
};

export interface EditableInboundShipmentOrderRequestStatus
  extends Pick<
      InboundShipmentOrderRequestStatus,
      "dataAreaId" | "inboundShipmentOrderRequestId"
    >,
    Partial<
      Pick<
        InboundShipmentOrderRequestStatus,
        "requestStatus" | "responseMessage"
      >
    > {}

export interface ItemBasePricePending {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PriceType` |
   * | Type | `Microsoft.Dynamics.DataEntities.GUPBasePriceType` |
   */
  priceType: GupBasePriceType | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  itemId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VersionId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  versionId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FromDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  fromDate: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductConfigurationId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productConfigurationId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductColorId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productColorId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PriceWarehouseId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  priceWarehouseId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PriceSiteId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  priceSiteId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductSizeId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productSizeId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductStyleId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productStyleId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductVersionId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productVersionId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Markup` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  markup: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Price` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  price: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PriceAllocateMarkup` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  priceAllocateMarkup: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MarkupQty` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  markupQty: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnitId` |
   * | Type | `Edm.String` |
   */
  unitId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Calculated` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  calculated: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PriceQty` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  priceQty: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemDisplayName` |
   * | Type | `Edm.String` |
   */
  itemDisplayName: string | null;
}

export type ItemBasePricePendingId = {
  dataAreaId: string;
  priceType: GupBasePriceType | null;
  itemId: string;
  versionId: string;
  fromDate: string;
  productConfigurationId: string;
  productColorId: string;
  priceWarehouseId: string;
  priceSiteId: string;
  productSizeId: string;
  productStyleId: string;
  productVersionId: string;
};

export interface EditableItemBasePricePending
  extends Pick<
      ItemBasePricePending,
      | "dataAreaId"
      | "itemId"
      | "versionId"
      | "fromDate"
      | "productConfigurationId"
      | "productColorId"
      | "priceWarehouseId"
      | "priceSiteId"
      | "productSizeId"
      | "productStyleId"
      | "productVersionId"
      | "markup"
      | "price"
      | "markupQty"
      | "priceQty"
    >,
    Partial<
      Pick<
        ItemBasePricePending,
        | "priceType"
        | "priceAllocateMarkup"
        | "unitId"
        | "calculated"
        | "itemDisplayName"
      >
    > {}

export interface EngineeringChangeOrderProductRouteOperationPropertiesV2 {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  engineeringChangeOrderNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderProductLineNumber` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  engineeringChangeOrderProductLineNumber: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderProductRouteHeaderCreationSequenceNumber` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  engineeringChangeOrderProductRouteHeaderCreationSequenceNumber: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderProductRouteOperationNumber` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  engineeringChangeOrderProductRouteOperationNumber: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderProductRouteOperationPriority` |
   * | Type | `Microsoft.Dynamics.DataEntities.RouteOprPriority` |
   */
  engineeringChangeOrderProductRouteOperationPriority: RouteOprPriority | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderProductRouteOperationChangeType` |
   * | Type | `Microsoft.Dynamics.DataEntities.EngChgEcmChangeTypes` |
   */
  engineeringChangeOrderProductRouteOperationChangeType: EngChgEcmChangeTypes | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OperationId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  operationId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RouteId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  routeId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductConfigurationId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productConfigurationId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductGroupId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productGroupId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  itemNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RouteOperationPropertiesChangeType` |
   * | Type | `Microsoft.Dynamics.DataEntities.EngChgEcmChangeTypes` |
   */
  routeOperationPropertiesChangeType: EngChgEcmChangeTypes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProcessQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  processQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuantityCostCategoryId` |
   * | Type | `Edm.String` |
   */
  quantityCostCategoryId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RouteGroupId` |
   * | Type | `Edm.String` |
   */
  routeGroupId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductionSiteId` |
   * | Type | `Edm.String` |
   */
  productionSiteId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OperationsTimeToHourConversionFactor` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  operationsTimeToHourConversionFactor: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SetupTime` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  setupTime: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QueueTimeBefore` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  queueTimeBefore: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CostingOperationResourceId` |
   * | Type | `Edm.String` |
   */
  costingOperationResourceId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkingTimeSchedulingPropertyId` |
   * | Type | `Edm.String` |
   */
  workingTimeSchedulingPropertyId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConsumptionCalculationFactor` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  consumptionCalculationFactor: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConsumptionCalculationFormula` |
   * | Type | `Microsoft.Dynamics.DataEntities.RouteFormula` |
   */
  consumptionCalculationFormula: RouteFormula | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QueueTimeAfter` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  queueTimeAfter: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProcessTime` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  processTime: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransferBatchQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  transferBatchQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RouteType` |
   * | Type | `Microsoft.Dynamics.DataEntities.RouteOprType` |
   */
  routeType: RouteOprType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransitTime` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  transitTime: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SetupCategoryId` |
   * | Type | `Edm.String` |
   */
  setupCategoryId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProcessCostCategoryId` |
   * | Type | `Edm.String` |
   */
  processCostCategoryId: string | null;
}

export type EngineeringChangeOrderProductRouteOperationPropertiesV2Id = {
  dataAreaId: string;
  engineeringChangeOrderNumber: string;
  engineeringChangeOrderProductLineNumber: number;
  engineeringChangeOrderProductRouteHeaderCreationSequenceNumber: number;
  engineeringChangeOrderProductRouteOperationNumber: number;
  engineeringChangeOrderProductRouteOperationPriority: RouteOprPriority | null;
  engineeringChangeOrderProductRouteOperationChangeType: EngChgEcmChangeTypes | null;
  operationId: string;
  routeId: string;
  productConfigurationId: string;
  productGroupId: string;
  itemNumber: string;
  routeOperationPropertiesChangeType: EngChgEcmChangeTypes | null;
};

export interface EditableEngineeringChangeOrderProductRouteOperationPropertiesV2
  extends Pick<
      EngineeringChangeOrderProductRouteOperationPropertiesV2,
      | "dataAreaId"
      | "engineeringChangeOrderNumber"
      | "engineeringChangeOrderProductLineNumber"
      | "engineeringChangeOrderProductRouteHeaderCreationSequenceNumber"
      | "engineeringChangeOrderProductRouteOperationNumber"
      | "operationId"
      | "routeId"
      | "productConfigurationId"
      | "productGroupId"
      | "itemNumber"
      | "processQuantity"
      | "operationsTimeToHourConversionFactor"
      | "setupTime"
      | "queueTimeBefore"
      | "consumptionCalculationFactor"
      | "queueTimeAfter"
      | "processTime"
      | "transferBatchQuantity"
      | "transitTime"
    >,
    Partial<
      Pick<
        EngineeringChangeOrderProductRouteOperationPropertiesV2,
        | "engineeringChangeOrderProductRouteOperationPriority"
        | "engineeringChangeOrderProductRouteOperationChangeType"
        | "routeOperationPropertiesChangeType"
        | "quantityCostCategoryId"
        | "routeGroupId"
        | "productionSiteId"
        | "costingOperationResourceId"
        | "workingTimeSchedulingPropertyId"
        | "consumptionCalculationFormula"
        | "routeType"
        | "setupCategoryId"
        | "processCostCategoryId"
      >
    > {}

export interface ItemCoverageWithDerivedSettingsEntity {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  itemNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageWarehouseLocationId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageWarehouseLocationId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageItemBatchNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageItemBatchNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductColorId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductColorId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductSizeId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductSizeId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductStyleId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductStyleId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductVersionId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductVersionId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageWarehouseId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageWarehouseId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageItemSerialNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageItemSerialNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageSiteId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageSiteId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageInventoryStatusId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageInventoryStatusId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductConfigurationId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductConfigurationId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoveragePeriodDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  coveragePeriodDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VendorAccountNumber` |
   * | Type | `Edm.String` |
   */
  vendorAccountNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApprovedRequisitionTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  approvedRequisitionTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastPlanningFormulaPriorityChangedDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  lastPlanningFormulaPriorityChangedDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProcurementLeadTimeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  procurementLeadTimeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultPlanningFormulaPriority` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  defaultPlanningFormulaPriority: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProcurementLeadTimeOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProcurementLeadTimeOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutomaticFirmingTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  automaticFirmingTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsConsumeOnHandOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isConsumeOnHandOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductionLeadTimeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  productionLeadTimeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumOnHandFulfillmentMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.ReqMinSatisfy` |
   */
  minimumOnHandFulfillmentMethod: ReqMinSatisfy | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlanningFormulaItemNumber` |
   * | Type | `Edm.String` |
   */
  planningFormulaItemNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumOnHandInventoryQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  maximumOnHandInventoryQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AreTimeFencesOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  areTimeFencesOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FreezeTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  freezeTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsTransferLeadTimeOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isTransferLeadTimeOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CapacitySchedulingTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  capacitySchedulingTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NegativeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  negativeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumOnHandInventoryQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  minimumOnHandInventoryQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageInventoryDimensionId` |
   * | Type | `Edm.String` |
   */
  coverageInventoryDimensionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumOnHandInventorySafetyKeyId` |
   * | Type | `Edm.String` |
   */
  maximumOnHandInventorySafetyKeyId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PositiveDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  positiveDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  coverageTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CurrentPlanningFormulaPriority` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  currentPlanningFormulaPriority: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductCoverageGroupId` |
   * | Type | `Edm.String` |
   */
  productCoverageGroupId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumOnHandInventorySafetyKeyId` |
   * | Type | `Edm.String` |
   */
  minimumOnHandInventorySafetyKeyId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AreCoverageGroupSettingsOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  areCoverageGroupSettingsOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsTransferLeadTimeUsingWorkingDays` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isTransferLeadTimeUsingWorkingDays: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProcumentLeadTimeUsingWorkingDays` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProcumentLeadTimeUsingWorkingDays: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MustUseLatestPossibleSupplyFirst` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  mustUseLatestPossibleSupplyFirst: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BOMOrFormulaExplosionTimeFenceDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  bomOrFormulaExplosionTimeFenceDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AreGeneralSettingsOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  areGeneralSettingsOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultPlannedTransferOrderFromWarehouseId` |
   * | Type | `Edm.String` |
   */
  defaultPlannedTransferOrderFromWarehouseId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.ReqCovType` |
   */
  coverageMethod: ReqCovType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConsumeOnHandInventoryMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.ReqOnHandConsumptionStrategy` |
   */
  consumeOnHandInventoryMethod: ReqOnHandConsumptionStrategy | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransferLeadTimeDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  transferLeadTimeDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlannedOrderType` |
   * | Type | `Microsoft.Dynamics.DataEntities.ReqPOType` |
   */
  plannedOrderType: ReqPoType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsPlannedOrderTypeOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isPlannedOrderTypeOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProductionLeadTimeUsingWorkingDays` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProductionLeadTimeUsingWorkingDays: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProductionLeadTimeOverridden` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProductionLeadTimeOverridden: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsMinimumOnHandSafetyPeriodUsed` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isMinimumOnHandSafetyPeriodUsed: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OrderSpikeThreshold` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  orderSpikeThreshold: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AverageDailyUsage` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  averageDailyUsage: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DistributionBasedADUEnabled` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  distributionBasedAduEnabled: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UseDecouplingPointPeriodSettings` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  useDecouplingPointPeriodSettings: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReorderPoint` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  reorderPoint: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OrderCycle` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  orderCycle: number;
}

export type ItemCoverageWithDerivedSettingsEntityId = {
  dataAreaId: string;
  itemNumber: string;
  coverageWarehouseLocationId: string;
  coverageItemBatchNumber: string;
  coverageProductColorId: string;
  coverageProductSizeId: string;
  coverageProductStyleId: string;
  coverageProductVersionId: string;
  coverageWarehouseId: string;
  coverageItemSerialNumber: string;
  coverageSiteId: string;
  coverageInventoryStatusId: string;
  coverageProductConfigurationId: string;
};

export interface EditableItemCoverageWithDerivedSettingsEntity
  extends Pick<
      ItemCoverageWithDerivedSettingsEntity,
      | "dataAreaId"
      | "itemNumber"
      | "coverageWarehouseLocationId"
      | "coverageItemBatchNumber"
      | "coverageProductColorId"
      | "coverageProductSizeId"
      | "coverageProductStyleId"
      | "coverageProductVersionId"
      | "coverageWarehouseId"
      | "coverageItemSerialNumber"
      | "coverageSiteId"
      | "coverageInventoryStatusId"
      | "coverageProductConfigurationId"
      | "coveragePeriodDays"
      | "approvedRequisitionTimeFenceDays"
      | "lastPlanningFormulaPriorityChangedDate"
      | "procurementLeadTimeDays"
      | "defaultPlanningFormulaPriority"
      | "automaticFirmingTimeFenceDays"
      | "productionLeadTimeDays"
      | "maximumOnHandInventoryQuantity"
      | "freezeTimeFenceDays"
      | "capacitySchedulingTimeFenceDays"
      | "negativeDays"
      | "minimumOnHandInventoryQuantity"
      | "positiveDays"
      | "coverageTimeFenceDays"
      | "currentPlanningFormulaPriority"
      | "bomOrFormulaExplosionTimeFenceDays"
      | "transferLeadTimeDays"
      | "orderSpikeThreshold"
      | "averageDailyUsage"
      | "reorderPoint"
      | "orderCycle"
    >,
    Partial<
      Pick<
        ItemCoverageWithDerivedSettingsEntity,
        | "vendorAccountNumber"
        | "isProcurementLeadTimeOverridden"
        | "isConsumeOnHandOverridden"
        | "minimumOnHandFulfillmentMethod"
        | "planningFormulaItemNumber"
        | "areTimeFencesOverridden"
        | "isTransferLeadTimeOverridden"
        | "coverageInventoryDimensionId"
        | "maximumOnHandInventorySafetyKeyId"
        | "productCoverageGroupId"
        | "minimumOnHandInventorySafetyKeyId"
        | "areCoverageGroupSettingsOverridden"
        | "isTransferLeadTimeUsingWorkingDays"
        | "isProcumentLeadTimeUsingWorkingDays"
        | "mustUseLatestPossibleSupplyFirst"
        | "areGeneralSettingsOverridden"
        | "defaultPlannedTransferOrderFromWarehouseId"
        | "coverageMethod"
        | "consumeOnHandInventoryMethod"
        | "plannedOrderType"
        | "isPlannedOrderTypeOverridden"
        | "isProductionLeadTimeUsingWorkingDays"
        | "isProductionLeadTimeOverridden"
        | "isMinimumOnHandSafetyPeriodUsed"
        | "distributionBasedAduEnabled"
        | "useDecouplingPointPeriodSettings"
      >
    > {}

export interface OutboundShipmentOrderRequestStatus {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OutboundShipmentOrderRequestId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  outboundShipmentOrderRequestId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RequestStatus` |
   * | Type | `Microsoft.Dynamics.DataEntities.WHSEWShipmentOrderRequestStatus` |
   */
  requestStatus: WhsewShipmentOrderRequestStatus | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ResponseMessage` |
   * | Type | `Edm.String` |
   */
  responseMessage: string | null;
}

export type OutboundShipmentOrderRequestStatusId = {
  dataAreaId: string;
  outboundShipmentOrderRequestId: string;
};

export interface EditableOutboundShipmentOrderRequestStatus
  extends Pick<
      OutboundShipmentOrderRequestStatus,
      "dataAreaId" | "outboundShipmentOrderRequestId"
    >,
    Partial<
      Pick<
        OutboundShipmentOrderRequestStatus,
        "requestStatus" | "responseMessage"
      >
    > {}

export interface InboundLoadPackingStructures {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LicensePlateNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  licensePlateNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InboundShipmentId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  inboundShipmentId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Module` |
   * | Type | `Microsoft.Dynamics.DataEntities.WHSModule` |
   */
  module: WhsModule | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventoryUnitSymbol` |
   * | Type | `Edm.String` |
   */
  inventoryUnitSymbol: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PackedTotalQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  packedTotalQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContainedItemNumber` |
   * | Type | `Edm.String` |
   */
  containedItemNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivingUnitSymbol` |
   * | Type | `Edm.String` |
   */
  receivingUnitSymbol: string | null;
}

export type InboundLoadPackingStructuresId = {
  dataAreaId: string;
  licensePlateNumber: string;
  inboundShipmentId: string;
};

export interface EditableInboundLoadPackingStructures
  extends Pick<
      InboundLoadPackingStructures,
      | "dataAreaId"
      | "licensePlateNumber"
      | "inboundShipmentId"
      | "packedTotalQuantity"
    >,
    Partial<
      Pick<
        InboundLoadPackingStructures,
        | "module"
        | "inventoryUnitSymbol"
        | "containedItemNumber"
        | "receivingUnitSymbol"
      >
    > {}

export interface WhsMobileWorkUnavailable {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordId` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  recordId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SessionRecId` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  sessionRecId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubmissionType` |
   * | Type | `Edm.String` |
   */
  submissionType: string | null;
}

export type WhsMobileWorkUnavailableId = number | { recordId: number };

export interface EditableWhsMobileWorkUnavailable
  extends Pick<WhsMobileWorkUnavailable, "sessionRecId">,
    Partial<Pick<WhsMobileWorkUnavailable, "submissionType">> {}

export interface EngineeringChangeOrderProductRouteOperationProperties {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  engineeringChangeOrderNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderProductLineNumber` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  engineeringChangeOrderProductLineNumber: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderProductRouteProductionSiteId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  engineeringChangeOrderProductRouteProductionSiteId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderProductRouteOperationId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  engineeringChangeOrderProductRouteOperationId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderProductRouteOperationNumber` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  engineeringChangeOrderProductRouteOperationNumber: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RouteId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  routeId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductConfigurationId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productConfigurationId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductGroupId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productGroupId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  itemNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OperationsTimeToHourConversionFactor` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  operationsTimeToHourConversionFactor: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProcessCostCategoryId` |
   * | Type | `Edm.String` |
   */
  processCostCategoryId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProcessQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  processQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RouteGroupId` |
   * | Type | `Edm.String` |
   */
  routeGroupId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderProductRouteOperationPriority` |
   * | Type | `Microsoft.Dynamics.DataEntities.RouteOprPriority` |
   */
  engineeringChangeOrderProductRouteOperationPriority: RouteOprPriority | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransferBatchQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  transferBatchQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QueueTimeBefore` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  queueTimeBefore: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransitTime` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  transitTime: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProcessTime` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  processTime: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConsumptionCalculationFactor` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  consumptionCalculationFactor: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuantityCostCategoryId` |
   * | Type | `Edm.String` |
   */
  quantityCostCategoryId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QueueTimeAfter` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  queueTimeAfter: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkingTimeSchedulingPropertyId` |
   * | Type | `Edm.String` |
   */
  workingTimeSchedulingPropertyId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CostingOperationResourceId` |
   * | Type | `Edm.String` |
   */
  costingOperationResourceId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RouteType` |
   * | Type | `Microsoft.Dynamics.DataEntities.RouteOprType` |
   */
  routeType: RouteOprType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConsumptionCalculationFormula` |
   * | Type | `Microsoft.Dynamics.DataEntities.RouteFormula` |
   */
  consumptionCalculationFormula: RouteFormula | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SetupCategoryId` |
   * | Type | `Edm.String` |
   */
  setupCategoryId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductionSiteId` |
   * | Type | `Edm.String` |
   */
  productionSiteId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SetupTime` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  setupTime: number;
}

export type EngineeringChangeOrderProductRouteOperationPropertiesId = {
  dataAreaId: string;
  engineeringChangeOrderNumber: string;
  engineeringChangeOrderProductLineNumber: number;
  engineeringChangeOrderProductRouteProductionSiteId: string;
  engineeringChangeOrderProductRouteOperationId: string;
  engineeringChangeOrderProductRouteOperationNumber: number;
  routeId: string;
  productConfigurationId: string;
  productGroupId: string;
  itemNumber: string;
};

export interface EditableEngineeringChangeOrderProductRouteOperationProperties
  extends Pick<
      EngineeringChangeOrderProductRouteOperationProperties,
      | "dataAreaId"
      | "engineeringChangeOrderNumber"
      | "engineeringChangeOrderProductLineNumber"
      | "engineeringChangeOrderProductRouteProductionSiteId"
      | "engineeringChangeOrderProductRouteOperationId"
      | "engineeringChangeOrderProductRouteOperationNumber"
      | "routeId"
      | "productConfigurationId"
      | "productGroupId"
      | "itemNumber"
      | "operationsTimeToHourConversionFactor"
      | "processQuantity"
      | "transferBatchQuantity"
      | "queueTimeBefore"
      | "transitTime"
      | "processTime"
      | "consumptionCalculationFactor"
      | "queueTimeAfter"
      | "setupTime"
    >,
    Partial<
      Pick<
        EngineeringChangeOrderProductRouteOperationProperties,
        | "processCostCategoryId"
        | "routeGroupId"
        | "engineeringChangeOrderProductRouteOperationPriority"
        | "quantityCostCategoryId"
        | "workingTimeSchedulingPropertyId"
        | "costingOperationResourceId"
        | "routeType"
        | "consumptionCalculationFormula"
        | "setupCategoryId"
        | "productionSiteId"
      >
    > {}

export interface EngineeringProductCategoryAttributeDetails {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringProductCategoryName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  engineeringProductCategoryName: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringProductAttributeTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  engineeringProductAttributeTypeName: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringProductAttributeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  engineeringProductAttributeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsInheritingAttribute` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isInheritingAttribute: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsMandatoryAttribute` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isMandatoryAttribute: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsSynchronisedWithBatchAttribute` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isSynchronisedWithBatchAttribute: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntegerToleranceIncrement` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  integerToleranceIncrement: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumIntegerTolerance` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  maximumIntegerTolerance: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumIntegerTolerance` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  minimumIntegerTolerance: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ToleranceFailingAction` |
   * | Type | `Microsoft.Dynamics.DataEntities.PdsBatchAttribToleranceAction` |
   */
  toleranceFailingAction: PdsBatchAttribToleranceAction | null;
}

export type EngineeringProductCategoryAttributeDetailsId = {
  engineeringProductCategoryName: string;
  engineeringProductAttributeTypeName: string;
  engineeringProductAttributeName: string;
};

export interface EditableEngineeringProductCategoryAttributeDetails
  extends Pick<
      EngineeringProductCategoryAttributeDetails,
      | "engineeringProductCategoryName"
      | "engineeringProductAttributeTypeName"
      | "engineeringProductAttributeName"
      | "integerToleranceIncrement"
      | "maximumIntegerTolerance"
      | "minimumIntegerTolerance"
    >,
    Partial<
      Pick<
        EngineeringProductCategoryAttributeDetails,
        | "isInheritingAttribute"
        | "isMandatoryAttribute"
        | "isSynchronisedWithBatchAttribute"
        | "toleranceFailingAction"
      >
    > {}

export interface ProductColorV2 {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ColorId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  colorId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hexcode` |
   * | Type | `Edm.String` |
   */
  hexcode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RefinerGroup` |
   * | Type | `Edm.String` |
   */
  refinerGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Url` |
   * | Type | `Edm.String` |
   */
  url: string | null;
}

export type ProductColorV2Id = string | { colorId: string };

export interface EditableProductColorV2
  extends Partial<Pick<ProductColorV2, "hexcode" | "refinerGroup" | "url">> {}

export interface EngineeringChangeOrderProductFormulaStepConsumption {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  engineeringChangeOrderNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderProductLineNumber` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  engineeringChangeOrderProductLineNumber: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EngineeringChangeOrderProductBOMCreationSequenceNumber` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  engineeringChangeOrderProductBomCreationSequenceNumber: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FromQty` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  fromQty: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BOMQty` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  bomQty: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PdsCWQty` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  pdsCwQty: number;
}

export type EngineeringChangeOrderProductFormulaStepConsumptionId = {
  dataAreaId: string;
  engineeringChangeOrderNumber: string;
  engineeringChangeOrderProductLineNumber: number;
  engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber: number;
  engineeringChangeOrderProductBomCreationSequenceNumber: number;
  fromQty: number;
};

export interface EditableEngineeringChangeOrderProductFormulaStepConsumption
  extends Pick<
    EngineeringChangeOrderProductFormulaStepConsumption,
    | "dataAreaId"
    | "engineeringChangeOrderNumber"
    | "engineeringChangeOrderProductLineNumber"
    | "engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber"
    | "engineeringChangeOrderProductBomCreationSequenceNumber"
    | "fromQty"
    | "bomQty"
    | "pdsCwQty"
  > {}

export interface ProductSizeV2 {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SizeId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  sizeId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hexcode` |
   * | Type | `Edm.String` |
   */
  hexcode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RefinerGroup` |
   * | Type | `Edm.String` |
   */
  refinerGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Url` |
   * | Type | `Edm.String` |
   */
  url: string | null;
}

export type ProductSizeV2Id = string | { sizeId: string };

export interface EditableProductSizeV2
  extends Partial<Pick<ProductSizeV2, "hexcode" | "refinerGroup" | "url">> {}

export interface LabelLayoutDataSourceParameters {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LabelLayoutDataSourceId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  labelLayoutDataSourceId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultValueString` |
   * | Type | `Edm.String` |
   */
  defaultValueString: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisplayText` |
   * | Type | `Edm.String` |
   */
  displayText: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Mandatory` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  mandatory: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Type` |
   * | Type | `Microsoft.Dynamics.DataEntities.WhsLabelLayoutDataSourceParameterType` |
   */
  type: WhsLabelLayoutDataSourceParameterType | null;
}

export type LabelLayoutDataSourceParametersId = {
  dataAreaId: string;
  labelLayoutDataSourceId: string;
  name: string;
};

export interface EditableLabelLayoutDataSourceParameters
  extends Pick<
      LabelLayoutDataSourceParameters,
      "dataAreaId" | "labelLayoutDataSourceId" | "name"
    >,
    Partial<
      Pick<
        LabelLayoutDataSourceParameters,
        "defaultValueString" | "displayText" | "mandatory" | "type"
      >
    > {}

export interface ReqItemCoverageDecouplingPointPeriodSettings {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  itemNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageWarehouseLocationId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageWarehouseLocationId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageItemBatchNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageItemBatchNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductColorId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductColorId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductSizeId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductSizeId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductStyleId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductStyleId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductVersionId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductVersionId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageWarehouseId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageWarehouseId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageItemSerialNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageItemSerialNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageSiteId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageSiteId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageInventoryStatusId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageInventoryStatusId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CoverageProductConfigurationId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  coverageProductConfigurationId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FromDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  fromDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeadTimeFactor` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  leadTimeFactor: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumInventOnhandQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  maximumInventOnhandQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `YellowQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  yellowQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReorderPointQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  reorderPointQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DecoupledLeadTime` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  decoupledLeadTime: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalculatedMaximumOnhandQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  calculatedMaximumOnhandQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumInventOnhandQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  minimumInventOnhandQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalculatedReorderPointQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  calculatedReorderPointQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ToDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  toDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalculatedMinimumOnhandQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  calculatedMinimumOnhandQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RedBaseQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  redBaseQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VariabilityFactor` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  variabilityFactor: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GreenQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  greenQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RedSafetyQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  redSafetyQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AverageDailyUsage` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  averageDailyUsage: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandAdjustmentFactor` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  demandAdjustmentFactor: number;
}

export type ReqItemCoverageDecouplingPointPeriodSettingsId = {
  dataAreaId: string;
  itemNumber: string;
  coverageWarehouseLocationId: string;
  coverageItemBatchNumber: string;
  coverageProductColorId: string;
  coverageProductSizeId: string;
  coverageProductStyleId: string;
  coverageProductVersionId: string;
  coverageWarehouseId: string;
  coverageItemSerialNumber: string;
  coverageSiteId: string;
  coverageInventoryStatusId: string;
  coverageProductConfigurationId: string;
  fromDate: string;
};

export interface EditableReqItemCoverageDecouplingPointPeriodSettings
  extends Pick<
    ReqItemCoverageDecouplingPointPeriodSettings,
    | "dataAreaId"
    | "itemNumber"
    | "coverageWarehouseLocationId"
    | "coverageItemBatchNumber"
    | "coverageProductColorId"
    | "coverageProductSizeId"
    | "coverageProductStyleId"
    | "coverageProductVersionId"
    | "coverageWarehouseId"
    | "coverageItemSerialNumber"
    | "coverageSiteId"
    | "coverageInventoryStatusId"
    | "coverageProductConfigurationId"
    | "fromDate"
    | "leadTimeFactor"
    | "maximumInventOnhandQuantity"
    | "yellowQuantity"
    | "reorderPointQuantity"
    | "decoupledLeadTime"
    | "calculatedMaximumOnhandQuantity"
    | "minimumInventOnhandQuantity"
    | "calculatedReorderPointQuantity"
    | "toDate"
    | "calculatedMinimumOnhandQuantity"
    | "redBaseQuantity"
    | "variabilityFactor"
    | "greenQuantity"
    | "redSafetyQuantity"
    | "averageDailyUsage"
    | "demandAdjustmentFactor"
  > {}

export interface WarehouseWorkLines {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WarehouseWorkId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  warehouseWorkId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkLineNumber` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  workLineNumber: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsWorkLineMandatory` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isWorkLineMandatory: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SortOrderCode` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  sortOrderCode: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductStyleId` |
   * | Type | `Edm.String` |
   */
  productStyleId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SourceOrderNumber` |
   * | Type | `Edm.String` |
   */
  sourceOrderNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WarehouseLocationId` |
   * | Type | `Edm.String` |
   */
  warehouseLocationId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WarehouseWorkClosedDateTime` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  warehouseWorkClosedDateTime: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventoryStatusId` |
   * | Type | `Edm.String` |
   */
  inventoryStatusId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProcessingWarehouseMobileDeviceUserId` |
   * | Type | `Edm.String` |
   */
  processingWarehouseMobileDeviceUserId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemNumber` |
   * | Type | `Edm.String` |
   */
  itemNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RemainingWorkQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  remainingWorkQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WarehouseZoneId` |
   * | Type | `Edm.String` |
   */
  warehouseZoneId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActualProcessingTimeSeconds` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  actualProcessingTimeSeconds: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HandlingQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  handlingQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OriginalPackingToteLicensePlateNumber` |
   * | Type | `Edm.String` |
   */
  originalPackingToteLicensePlateNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EstimatedProcessingTimeSeconds` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  estimatedProcessingTimeSeconds: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductSizeId` |
   * | Type | `Edm.String` |
   */
  productSizeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsWorkExecutionStopped` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isWorkExecutionStopped: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WarehouseWorkStatus` |
   * | Type | `Microsoft.Dynamics.DataEntities.WHSWorkStatus` |
   */
  warehouseWorkStatus: WhsWorkStatus | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LoadId` |
   * | Type | `Edm.String` |
   */
  loadId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShipmentId` |
   * | Type | `Edm.String` |
   */
  shipmentId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  workQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkQuantityUnitSymbol` |
   * | Type | `Edm.String` |
   */
  workQuantityUnitSymbol: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemSerialNumber` |
   * | Type | `Edm.String` |
   */
  itemSerialNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductConfigurationId` |
   * | Type | `Edm.String` |
   */
  productConfigurationId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LicensePlateNumber` |
   * | Type | `Edm.String` |
   */
  licensePlateNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventorySiteId` |
   * | Type | `Edm.String` |
   */
  inventorySiteId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WarehouseId` |
   * | Type | `Edm.String` |
   */
  warehouseId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductVersionId` |
   * | Type | `Edm.String` |
   */
  productVersionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WarehouseWorkProcessingStartDateTime` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  warehouseWorkProcessingStartDateTime: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WarehouseWorkType` |
   * | Type | `Microsoft.Dynamics.DataEntities.WHSWorkType` |
   */
  warehouseWorkType: WhsWorkType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FEFOItemBatchNumber` |
   * | Type | `Edm.String` |
   */
  fefoItemBatchNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemBatchNumber` |
   * | Type | `Edm.String` |
   */
  itemBatchNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductColorId` |
   * | Type | `Edm.String` |
   */
  productColorId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RemainingHandlingQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  remainingHandlingQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExtraHandlingQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  extraHandlingQuantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContainerId` |
   * | Type | `Edm.String` |
   */
  containerId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsReplenishmentNeeded` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isReplenishmentNeeded: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CapturedWeight` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  capturedWeight: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventoryOwnerId` |
   * | Type | `Edm.String` |
   */
  inventoryOwnerId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkLinePairId` |
   * | Type | `Edm.String` |
   */
  workLinePairId: string | null;
}

export type WarehouseWorkLinesId = {
  dataAreaId: string;
  warehouseWorkId: string;
  workLineNumber: number;
};

export interface EditableWarehouseWorkLines
  extends Pick<
      WarehouseWorkLines,
      | "dataAreaId"
      | "warehouseWorkId"
      | "workLineNumber"
      | "sortOrderCode"
      | "warehouseWorkClosedDateTime"
      | "remainingWorkQuantity"
      | "actualProcessingTimeSeconds"
      | "handlingQuantity"
      | "estimatedProcessingTimeSeconds"
      | "workQuantity"
      | "warehouseWorkProcessingStartDateTime"
      | "remainingHandlingQuantity"
      | "extraHandlingQuantity"
      | "capturedWeight"
    >,
    Partial<
      Pick<
        WarehouseWorkLines,
        | "isWorkLineMandatory"
        | "productStyleId"
        | "sourceOrderNumber"
        | "warehouseLocationId"
        | "inventoryStatusId"
        | "processingWarehouseMobileDeviceUserId"
        | "itemNumber"
        | "warehouseZoneId"
        | "originalPackingToteLicensePlateNumber"
        | "productSizeId"
        | "isWorkExecutionStopped"
        | "warehouseWorkStatus"
        | "loadId"
        | "shipmentId"
        | "workQuantityUnitSymbol"
        | "itemSerialNumber"
        | "productConfigurationId"
        | "licensePlateNumber"
        | "inventorySiteId"
        | "warehouseId"
        | "productVersionId"
        | "warehouseWorkType"
        | "fefoItemBatchNumber"
        | "itemBatchNumber"
        | "productColorId"
        | "containerId"
        | "isReplenishmentNeeded"
        | "inventoryOwnerId"
        | "workLinePairId"
      >
    > {}

export interface ReplenishmentRuleLinesV2 {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReplenishmentRule` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  replenishmentRule: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Type` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailReplenishmentRuleType` |
   */
  type: RetailReplenishmentRuleType | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelationId` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  relationId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReplenishmentHierarchyValidFrom` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  replenishmentHierarchyValidFrom: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultWeight` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  defaultWeight: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Percent` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  percent: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReplenishmentHierarchyValidTo` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  replenishmentHierarchyValidTo: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Weight` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  weight: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   */
  description: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RetailChannelId` |
   * | Type | `Edm.String` |
   */
  retailChannelId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReplenishmentOrganizationPartyNumber` |
   * | Type | `Edm.String` |
   */
  replenishmentOrganizationPartyNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultPercent` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  defaultPercent: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReplenishmentHierarchyTypeName` |
   * | Type | `Edm.String` |
   */
  replenishmentHierarchyTypeName: string | null;
}

export type ReplenishmentRuleLinesV2Id = {
  dataAreaId: string;
  replenishmentRule: string;
  type: RetailReplenishmentRuleType | null;
  relationId: number;
};

export interface EditableReplenishmentRuleLinesV2
  extends Pick<
      ReplenishmentRuleLinesV2,
      | "dataAreaId"
      | "replenishmentRule"
      | "relationId"
      | "replenishmentHierarchyValidFrom"
      | "defaultWeight"
      | "percent"
      | "replenishmentHierarchyValidTo"
      | "weight"
      | "defaultPercent"
    >,
    Partial<
      Pick<
        ReplenishmentRuleLinesV2,
        | "type"
        | "description"
        | "retailChannelId"
        | "replenishmentOrganizationPartyNumber"
        | "replenishmentHierarchyTypeName"
      >
    > {}

export interface MaterialHandlingParameters {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EnableManualInboundMessageCreation` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  enableManualInboundMessageCreation: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserId` |
   * | Type | `Edm.String` |
   */
  userId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EnableMessageId` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  enableMessageId: NoYes | null;
}

export type MaterialHandlingParametersId = string | { dataAreaId: string };

export interface EditableMaterialHandlingParameters
  extends Partial<
    Pick<
      MaterialHandlingParameters,
      "enableManualInboundMessageCreation" | "userId" | "enableMessageId"
    >
  > {}

export interface WhsMobileWorkLocationComplete {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordId` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  recordId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SessionRecId` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  sessionRecId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubmissionType` |
   * | Type | `Edm.String` |
   */
  submissionType: string | null;
}

export type WhsMobileWorkLocationCompleteId = number | { recordId: number };

export interface EditableWhsMobileWorkLocationComplete
  extends Pick<WhsMobileWorkLocationComplete, "sessionRecId">,
    Partial<Pick<WhsMobileWorkLocationComplete, "submissionType">> {}

export interface DeliveryMode {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeliveryModeId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  deliveryModeId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeliveryModeName` |
   * | Type | `Edm.String` |
   */
  deliveryModeName: string | null;
}

export type DeliveryModeId = string | { deliveryModeId: string };

export interface EditableDeliveryMode
  extends Partial<Pick<DeliveryMode, "deliveryModeName">> {}

export interface ProdComParameters {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutomaticRecalculation` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  automaticRecalculation: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExternalContactID` |
   * | Type | `Edm.String` |
   */
  externalContactId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Company` |
   * | Type | `Edm.String` |
   */
  company: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BranchNumber` |
   * | Type | `Microsoft.Dynamics.DataEntities.InventProdComBranchType` |
   */
  branchNumber: InventProdComBranchType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PrimaryContactID` |
   * | Type | `Edm.String` |
   */
  primaryContactId: string | null;
}

export type ProdComParametersId = { dataAreaId: string; id: number };

export interface EditableProdComParameters
  extends Pick<ProdComParameters, "dataAreaId" | "id">,
    Partial<
      Pick<
        ProdComParameters,
        | "automaticRecalculation"
        | "externalContactId"
        | "company"
        | "branchNumber"
        | "primaryContactId"
      >
    > {}

export interface WhsMobileWorkGuidedCycleCounting {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordId` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  recordId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemId` |
   * | Type | `Edm.String` |
   */
  itemId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SessionRecId` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  sessionRecId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubmissionType` |
   * | Type | `Edm.String` |
   */
  submissionType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventStatusId_Options` |
   * | Type | `Edm.String` |
   */
  inventStatusIdOptions: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Error` |
   * | Type | `Edm.String` |
   */
  error: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MutableProperties` |
   * | Type | `Edm.String` |
   */
  mutableProperties: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CycleCountQty1` |
   * | Type | `Edm.String` |
   */
  cycleCountQty1: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WMSLocationId` |
   * | Type | `Edm.String` |
   */
  wmsLocationId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CycleCountUOM1` |
   * | Type | `Edm.String` |
   */
  cycleCountUom1: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CycleCountUOM1_Options` |
   * | Type | `Edm.String` |
   */
  cycleCountUom1Options: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LicensePlateId` |
   * | Type | `Edm.String` |
   */
  licensePlateId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventStatusId` |
   * | Type | `Edm.String` |
   */
  inventStatusId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RFDescription1` |
   * | Type | `Edm.String` |
   */
  rfDescription1: string | null;
}

export type WhsMobileWorkGuidedCycleCountingId = number | { recordId: number };

export interface EditableWhsMobileWorkGuidedCycleCounting
  extends Pick<WhsMobileWorkGuidedCycleCounting, "sessionRecId">,
    Partial<
      Pick<
        WhsMobileWorkGuidedCycleCounting,
        | "itemId"
        | "submissionType"
        | "inventStatusIdOptions"
        | "error"
        | "mutableProperties"
        | "cycleCountQty1"
        | "wmsLocationId"
        | "cycleCountUom1"
        | "cycleCountUom1Options"
        | "licensePlateId"
        | "inventStatusId"
        | "rfDescription1"
      >
    > {}

export interface InventoryAccountingKpiGoals {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventoryAccuracy` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  inventoryAccuracy: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AnnualInventoryTurn` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  annualInventoryTurn: number;
}

export type InventoryAccountingKpiGoalsId = string | { dataAreaId: string };

export interface EditableInventoryAccountingKpiGoals
  extends Pick<
    InventoryAccountingKpiGoals,
    "inventoryAccuracy" | "annualInventoryTurn"
  > {}

export interface ShippingParameters {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RentalContainerShipmentStatusId` |
   * | Type | `Edm.String` |
   */
  rentalContainerShipmentStatusId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultCostingVersionId` |
   * | Type | `Edm.String` |
   */
  defaultCostingVersionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Activate` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  activate: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsOverUnderNonShipPurch` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isOverUnderNonShipPurch: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CostPostingSpecificationRule` |
   * | Type | `Microsoft.Dynamics.DataEntities.InventAdjustmentSpec` |
   */
  costPostingSpecificationRule: InventAdjustmentSpec | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VoyageCreatorWeightTolerancePercentage` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  voyageCreatorWeightTolerancePercentage: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MultipleVendorPerFolioTolerance` |
   * | Type | `Microsoft.Dynamics.DataEntities.ErrorTolerance` |
   */
  multipleVendorPerFolioTolerance: ErrorTolerance | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsOverUnderNonGITPurch` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isOverUnderNonGitPurch: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShippingExchangeRateTypeName` |
   * | Type | `Edm.String` |
   */
  shippingExchangeRateTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ServiceProviderVendorInvoiceTolerance` |
   * | Type | `Microsoft.Dynamics.DataEntities.ErrorTolerance` |
   */
  serviceProviderVendorInvoiceTolerance: ErrorTolerance | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OverUnderDeliveryInventoryMovementJournalNameId` |
   * | Type | `Edm.String` |
   */
  overUnderDeliveryInventoryMovementJournalNameId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClosedGoodsInTransitOrderReceiptGracePeriodDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  closedGoodsInTransitOrderReceiptGracePeriodDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WillLandedCostCalculationAllowZeroCost` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  willLandedCostCalculationAllowZeroCost: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MultipleVendorInvoicePerCostTransactionTolerance` |
   * | Type | `Microsoft.Dynamics.DataEntities.ErrorTolerance` |
   */
  multipleVendorInvoicePerCostTransactionTolerance: ErrorTolerance | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WillLandedCostCalculationUseShippingExchangeRate` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  willLandedCostCalculationUseShippingExchangeRate: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CostCalculationMissingItemVolumeTolerance` |
   * | Type | `Microsoft.Dynamics.DataEntities.ErrorTolerance` |
   */
  costCalculationMissingItemVolumeTolerance: ErrorTolerance | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CostedShipmentStatusId` |
   * | Type | `Edm.String` |
   */
  costedShipmentStatusId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RentalContainerJourneyTemplateId` |
   * | Type | `Edm.String` |
   */
  rentalContainerJourneyTemplateId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CostingReadyShipmentStatusId` |
   * | Type | `Edm.String` |
   */
  costingReadyShipmentStatusId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MultipleWarehousePerVoyageTolerance` |
   * | Type | `Microsoft.Dynamics.DataEntities.ErrorTolerance` |
   */
  multipleWarehousePerVoyageTolerance: ErrorTolerance | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsContainerHeaderCartonsAutomaticallyUpdated` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isContainerHeaderCartonsAutomaticallyUpdated: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AllowCreateVoyageInBatch` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  allowCreateVoyageInBatch: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InTransitShipmentStatusId` |
   * | Type | `Edm.String` |
   */
  inTransitShipmentStatusId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WillCostAccrualUseVendorInvoiceVoucherNumber` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  willCostAccrualUseVendorInvoiceVoucherNumber: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GenerateVoyageEditorDataManually` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  generateVoyageEditorDataManually: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WillMovingAveragePostAdjustmentAsVariance` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  willMovingAveragePostAdjustmentAsVariance: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CostAdjustmentAccountingDateRule` |
   * | Type | `Microsoft.Dynamics.DataEntities.ITMCostPostingDatePrinciple` |
   */
  costAdjustmentAccountingDateRule: ItmCostPostingDatePrinciple | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SingletonKey` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  singletonKey: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchaseOrderLineQuantityUpdateTolerance` |
   * | Type | `Microsoft.Dynamics.DataEntities.ErrorTolerance` |
   */
  purchaseOrderLineQuantityUpdateTolerance: ErrorTolerance | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnderDeliveryInventoryTransferJournalNameId` |
   * | Type | `Edm.String` |
   */
  underDeliveryInventoryTransferJournalNameId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `KeepAutoTrackingDimNumber` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  keepAutoTrackingDimNumber: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WillCostingUseLandedCostTypeChargeAccrualMainAccount` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  willCostingUseLandedCostTypeChargeAccrualMainAccount: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MultipleDeliveryModePerVoyageTolerance` |
   * | Type | `Microsoft.Dynamics.DataEntities.ErrorTolerance` |
   */
  multipleDeliveryModePerVoyageTolerance: ErrorTolerance | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PreCostedShipmentStatusId` |
   * | Type | `Edm.String` |
   */
  preCostedShipmentStatusId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VoyageCreatorVolumeTolerancePercentage` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  voyageCreatorVolumeTolerancePercentage: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemArrivalJournalNameId` |
   * | Type | `Edm.String` |
   */
  itemArrivalJournalNameId: string | null;
}

export type ShippingParametersId = string | { dataAreaId: string };

export interface EditableShippingParameters
  extends Pick<
      ShippingParameters,
      | "voyageCreatorWeightTolerancePercentage"
      | "closedGoodsInTransitOrderReceiptGracePeriodDays"
      | "singletonKey"
      | "voyageCreatorVolumeTolerancePercentage"
    >,
    Partial<
      Pick<
        ShippingParameters,
        | "rentalContainerShipmentStatusId"
        | "defaultCostingVersionId"
        | "activate"
        | "isOverUnderNonShipPurch"
        | "costPostingSpecificationRule"
        | "multipleVendorPerFolioTolerance"
        | "isOverUnderNonGitPurch"
        | "shippingExchangeRateTypeName"
        | "serviceProviderVendorInvoiceTolerance"
        | "overUnderDeliveryInventoryMovementJournalNameId"
        | "willLandedCostCalculationAllowZeroCost"
        | "multipleVendorInvoicePerCostTransactionTolerance"
        | "willLandedCostCalculationUseShippingExchangeRate"
        | "costCalculationMissingItemVolumeTolerance"
        | "costedShipmentStatusId"
        | "rentalContainerJourneyTemplateId"
        | "costingReadyShipmentStatusId"
        | "multipleWarehousePerVoyageTolerance"
        | "isContainerHeaderCartonsAutomaticallyUpdated"
        | "allowCreateVoyageInBatch"
        | "inTransitShipmentStatusId"
        | "willCostAccrualUseVendorInvoiceVoucherNumber"
        | "generateVoyageEditorDataManually"
        | "willMovingAveragePostAdjustmentAsVariance"
        | "costAdjustmentAccountingDateRule"
        | "purchaseOrderLineQuantityUpdateTolerance"
        | "underDeliveryInventoryTransferJournalNameId"
        | "keepAutoTrackingDimNumber"
        | "willCostingUseLandedCostTypeChargeAccrualMainAccount"
        | "multipleDeliveryModePerVoyageTolerance"
        | "preCostedShipmentStatusId"
        | "itemArrivalJournalNameId"
      >
    > {}
