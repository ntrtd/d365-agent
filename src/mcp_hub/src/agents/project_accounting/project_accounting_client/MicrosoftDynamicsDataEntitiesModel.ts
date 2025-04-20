// @ts-nocheck

export enum NoYes {
  No = "No",
  Yes = "Yes",
}

export enum DataValidationTaskStatus {
  Open = "Open",
  InProgress = "InProgress",
  Complete = "Complete",
}

export enum ProjSortValue {
  Sorting1 = "Sorting1",
  Sorting2 = "Sorting2",
  Sorting3 = "Sorting3",
}

export enum ProjCdsTransType {
  Cost = "Cost",
  Sales = "Sales",
  Tax = "Tax",
  BilledSales = "BilledSales",
  InterOrgSales = "InterOrgSales",
  ResourcingUnitCost = "ResourcingUnitCost",
}

export enum ProjBillingType {
  NotSpecified = "NotSpecified",
  Chargeable = "Chargeable",
  NonChargeable = "NonChargeable",
  Complimentary = "Complimentary",
  NotAvailable = "NotAvailable",
}

export enum ProjLineTotal {
  Total = "Total",
  Line = "Line",
}

export enum ProjDefaultInvoiceLayout {
  Detail = "Detail",
  Summary = "Summary",
  SummaryByCategory = "SummaryByCategory",
}

export enum ProjTaxItemGroupMethod {
  ItemNumber = "ItemNumber",
  Category = "Category",
}

export enum ProjTaxGroupMethod {
  Project = "Project",
  InvoiceProject = "InvoiceProject",
  AccountReceivable = "AccountReceivable",
  Search = "Search",
}

export enum TaxCalculationProjDateType {
  InvoiceDate = "InvoiceDate",
  ProjectDate = "ProjectDate",
}

export enum CollabSiteEntityType {
  All = "All",
  Project = "Project",
}

export enum CollabSiteSharePointType {
  OnPremise = "OnPremise",
  Online = "Online",
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

export interface ValidationProjectTaskStatus {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DataValidationProject_Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataValidationProjectName: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DataValidationProjectTask_LineNumber` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  dataValidationProjectTaskLineNumber: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LegalEntity` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  legalEntity: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompletedByWorker_PersonnelNumber` |
   * | Type | `Edm.String` |
   */
  completedByWorkerPersonnelNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DataValidationProjectTask_Name` |
   * | Type | `Edm.String` |
   */
  dataValidationProjectTaskName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ResponsibleWorker_PersonnelNumber` |
   * | Type | `Edm.String` |
   */
  responsibleWorkerPersonnelNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Status` |
   * | Type | `Microsoft.Dynamics.DataEntities.DataValidationTaskStatus` |
   */
  status: DataValidationTaskStatus | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompletedDateTime` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  completedDateTime: string;
}

export type ValidationProjectTaskStatusId = {
  dataValidationProjectName: string;
  dataValidationProjectTaskLineNumber: number;
  legalEntity: string;
};

export interface EditableValidationProjectTaskStatus
  extends Pick<
      ValidationProjectTaskStatus,
      | "dataValidationProjectName"
      | "dataValidationProjectTaskLineNumber"
      | "legalEntity"
      | "completedDateTime"
    >,
    Partial<
      Pick<
        ValidationProjectTaskStatus,
        | "completedByWorkerPersonnelNumber"
        | "dataValidationProjectTaskName"
        | "responsibleWorkerPersonnelNumber"
        | "status"
      >
    > {}

export interface ValidationProjectTaskStatus_DataValidationProjectTaskStatusEntityProjectNameParams {
  fields?: Array<string>;
}

export interface ProjectReportSortFields {
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
   * | Name | `SortCode` |
   * | Type | `Microsoft.Dynamics.DataEntities.ProjSortValue` |
   */
  sortCode: ProjSortValue | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SortingId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  sortingId: string;
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

export type ProjectReportSortFieldsId = {
  dataAreaId: string;
  sortCode: ProjSortValue | null;
  sortingId: string;
};

export interface EditableProjectReportSortFields
  extends Pick<ProjectReportSortFields, "dataAreaId" | "sortingId">,
    Partial<Pick<ProjectReportSortFields, "sortCode" | "description">> {}

export interface ProjectAllocationKeyDetails {
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
   * | Name | `AllocationKey` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  allocationKey: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineNumber` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  lineNumber: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ResourcePersonnelNumber` |
   * | Type | `Edm.String` |
   */
  resourcePersonnelNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AllocationPercentage` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  allocationPercentage: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjectID` |
   * | Type | `Edm.String` |
   */
  projectId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineProperty` |
   * | Type | `Edm.String` |
   */
  lineProperty: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Category` |
   * | Type | `Edm.String` |
   */
  category: string | null;
}

export type ProjectAllocationKeyDetailsId = {
  dataAreaId: string;
  allocationKey: string;
  lineNumber: number;
};

export interface EditableProjectAllocationKeyDetails
  extends Pick<
      ProjectAllocationKeyDetails,
      "dataAreaId" | "allocationKey" | "lineNumber" | "allocationPercentage"
    >,
    Partial<
      Pick<
        ProjectAllocationKeyDetails,
        "resourcePersonnelNumber" | "projectId" | "lineProperty" | "category"
      >
    > {}

export interface ProjectItemJournalTrans {
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
   * | Name | `JournalId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  journalId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Voucher` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  voucher: string;
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
   * | Name | `StorageSiteId` |
   * | Type | `Edm.String` |
   */
  storageSiteId: string | null;
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
   * | Name | `InventDimensionId` |
   * | Type | `Edm.String` |
   */
  inventDimensionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjectTaxItemGroupId` |
   * | Type | `Edm.String` |
   */
  projectTaxItemGroupId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CWQuantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  cwQuantity: number;
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
   * | Name | `ProductVersionId` |
   * | Type | `Edm.String` |
   */
  productVersionId: string | null;
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
   * | Name | `ActivityNumber` |
   * | Type | `Edm.String` |
   */
  activityNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjectLinePropertyId` |
   * | Type | `Edm.String` |
   */
  projectLinePropertyId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjectUnitID` |
   * | Type | `Edm.String` |
   */
  projectUnitId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventTransactionReturnId` |
   * | Type | `Edm.String` |
   */
  inventTransactionReturnId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjectCategoryId` |
   * | Type | `Edm.String` |
   */
  projectCategoryId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CostAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  costAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjectSalesPrice` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  projectSalesPrice: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjectTransactionId` |
   * | Type | `Edm.String` |
   */
  projectTransactionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjectSalesCurrencyId` |
   * | Type | `Edm.String` |
   */
  projectSalesCurrencyId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventTransactionId` |
   * | Type | `Edm.String` |
   */
  inventTransactionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `inventSerialId` |
   * | Type | `Edm.String` |
   */
  inventSerialId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CostMarkup` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  costMarkup: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StorageLocationId` |
   * | Type | `Edm.String` |
   */
  storageLocationId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjectDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  projectDate: string;
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
   * | Name | `StorageWarehouseId` |
   * | Type | `Edm.String` |
   */
  storageWarehouseId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CostPrice` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  costPrice: number;
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
   * | Name | `ProjectId` |
   * | Type | `Edm.String` |
   */
  projectId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultDimensionDisplayValue` |
   * | Type | `Edm.String` |
   */
  defaultDimensionDisplayValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjectTaxGroupId` |
   * | Type | `Edm.String` |
   */
  projectTaxGroupId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Quantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  quantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductStyleId` |
   * | Type | `Edm.String` |
   */
  productStyleId: string | null;
}

export type ProjectItemJournalTransId = {
  dataAreaId: string;
  journalId: string;
  voucher: string;
  lineNum: number;
};

export interface EditableProjectItemJournalTrans
  extends Pick<
      ProjectItemJournalTrans,
      | "dataAreaId"
      | "journalId"
      | "voucher"
      | "lineNum"
      | "cwQuantity"
      | "priceUnit"
      | "costAmount"
      | "projectSalesPrice"
      | "costMarkup"
      | "projectDate"
      | "costPrice"
      | "quantity"
    >,
    Partial<
      Pick<
        ProjectItemJournalTrans,
        | "storageSiteId"
        | "productConfigurationId"
        | "inventDimensionId"
        | "projectTaxItemGroupId"
        | "productSizeId"
        | "productVersionId"
        | "activityNumber"
        | "projectLinePropertyId"
        | "projectUnitId"
        | "inventTransactionReturnId"
        | "projectCategoryId"
        | "projectTransactionId"
        | "projectSalesCurrencyId"
        | "inventTransactionId"
        | "inventSerialId"
        | "storageLocationId"
        | "itemId"
        | "storageWarehouseId"
        | "productColorId"
        | "projectId"
        | "defaultDimensionDisplayValue"
        | "projectTaxGroupId"
        | "productStyleId"
      >
    > {}

export interface ProjectParameterV2 {
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
   * | Name | `Key` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  key: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineTotalPostCost` |
   * | Type | `Microsoft.Dynamics.DataEntities.ProjLineTotal` |
   */
  lineTotalPostCost: ProjLineTotal | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TaxItemGroupOnAcc` |
   * | Type | `Edm.String` |
   */
  taxItemGroupOnAcc: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CostCategory` |
   * | Type | `Edm.String` |
   */
  costCategory: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjectOperationsIntegrationFeatureStatus` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  projectOperationsIntegrationFeatureStatus: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmplCategory` |
   * | Type | `Edm.String` |
   */
  emplCategory: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineTotalEstimate` |
   * | Type | `Microsoft.Dynamics.DataEntities.ProjLineTotal` |
   */
  lineTotalEstimate: ProjLineTotal | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultInvoiceLayout` |
   * | Type | `Microsoft.Dynamics.DataEntities.ProjDefaultInvoiceLayout` |
   */
  defaultInvoiceLayout: ProjDefaultInvoiceLayout | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OnAccountCategory` |
   * | Type | `Edm.String` |
   */
  onAccountCategory: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemCategory` |
   * | Type | `Edm.String` |
   */
  itemCategory: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjectOperationsForecastModelId` |
   * | Type | `Edm.String` |
   */
  projectOperationsForecastModelId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TaxItemGroupMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.ProjTaxItemGroupMethod` |
   */
  taxItemGroupMethod: ProjTaxItemGroupMethod | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsAccountingDateUpdateAllowed` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isAccountingDateUpdateAllowed: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RevenueCategory` |
   * | Type | `Edm.String` |
   */
  revenueCategory: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TaxGroupMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.ProjTaxGroupMethod` |
   */
  taxGroupMethod: ProjTaxGroupMethod | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineTotalInvoice` |
   * | Type | `Microsoft.Dynamics.DataEntities.ProjLineTotal` |
   */
  lineTotalInvoice: ProjLineTotal | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineTotalAccrueRevenue` |
   * | Type | `Microsoft.Dynamics.DataEntities.ProjLineTotal` |
   */
  lineTotalAccrueRevenue: ProjLineTotal | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DimensionAttributeValueCombinationDisplayValue` |
   * | Type | `Edm.String` |
   */
  dimensionAttributeValueCombinationDisplayValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TaxCalcDateType` |
   * | Type | `Microsoft.Dynamics.DataEntities.TaxCalculationProjDateType` |
   */
  taxCalcDateType: TaxCalculationProjDateType | null;
}

export type ProjectParameterV2Id = { dataAreaId: string; key: number };

export interface EditableProjectParameterV2
  extends Pick<ProjectParameterV2, "dataAreaId" | "key">,
    Partial<
      Pick<
        ProjectParameterV2,
        | "lineTotalPostCost"
        | "taxItemGroupOnAcc"
        | "costCategory"
        | "projectOperationsIntegrationFeatureStatus"
        | "emplCategory"
        | "lineTotalEstimate"
        | "defaultInvoiceLayout"
        | "onAccountCategory"
        | "itemCategory"
        | "projectOperationsForecastModelId"
        | "taxItemGroupMethod"
        | "isAccountingDateUpdateAllowed"
        | "revenueCategory"
        | "taxGroupMethod"
        | "lineTotalInvoice"
        | "lineTotalAccrueRevenue"
        | "dimensionAttributeValueCombinationDisplayValue"
        | "taxCalcDateType"
      >
    > {}

export interface ProjInvoiceW {
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
   * | Name | `ProjInvoiceId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  projInvoiceId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LedgerVoucher` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ledgerVoucher: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InvoiceDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  invoiceDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubmissionUUID_W` |
   * | Type | `Edm.String` |
   */
  submissionUuidW: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QRCode_W` |
   * | Type | `Edm.String` |
   */
  qrCodeW: string | null;
}

export type ProjInvoiceWId = {
  dataAreaId: string;
  projInvoiceId: string;
  ledgerVoucher: string;
  invoiceDate: string;
};

export interface EditableProjInvoiceW
  extends Pick<
      ProjInvoiceW,
      "dataAreaId" | "projInvoiceId" | "ledgerVoucher" | "invoiceDate"
    >,
    Partial<Pick<ProjInvoiceW, "submissionUuidW" | "qrCodeW">> {}

export interface ProjForecastSalesImport {
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
   * | Name | `ImportId` |
   * | Type | `Edm.Guid` |
   * | Nullable | `false` |
   */
  importId: string;
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
   * | Name | `ActivityNumber` |
   * | Type | `Edm.String` |
   */
  activityNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransId` |
   * | Type | `Edm.String` |
   */
  transId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Currency` |
   * | Type | `Edm.String` |
   */
  currency: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransType` |
   * | Type | `Microsoft.Dynamics.DataEntities.ProjCDSTransType` |
   */
  transType: ProjCdsTransType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SequenceNumber` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  sequenceNumber: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjId` |
   * | Type | `Edm.String` |
   */
  projId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ForecastCostPaymDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  forecastCostPaymDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ForecastInvoiceDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  forecastInvoiceDate: string;
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
   * | Name | `ForecastLineId` |
   * | Type | `Edm.Guid` |
   * | Nullable | `false` |
   */
  forecastLineId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransactionCategoryId` |
   * | Type | `Edm.String` |
   */
  transactionCategoryId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ForecastLineIdOrigin` |
   * | Type | `Edm.Guid` |
   * | Nullable | `false` |
   */
  forecastLineIdOrigin: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Comment` |
   * | Type | `Edm.String` |
   */
  comment: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  startDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventQty` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  inventQty: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillingType` |
   * | Type | `Microsoft.Dynamics.DataEntities.ProjBillingType` |
   */
  billingType: ProjBillingType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  endDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemDescription` |
   * | Type | `Edm.String` |
   */
  itemDescription: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContractLineId` |
   * | Type | `Edm.String` |
   */
  contractLineId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SalesQty` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  salesQty: number;
}

export type ProjForecastSalesImportId = {
  dataAreaId: string;
  importId: string;
};

export interface EditableProjForecastSalesImport
  extends Pick<
      ProjForecastSalesImport,
      | "dataAreaId"
      | "importId"
      | "sequenceNumber"
      | "forecastCostPaymDate"
      | "forecastInvoiceDate"
      | "price"
      | "forecastLineId"
      | "forecastLineIdOrigin"
      | "startDate"
      | "inventQty"
      | "endDate"
      | "salesQty"
    >,
    Partial<
      Pick<
        ProjForecastSalesImport,
        | "itemId"
        | "activityNumber"
        | "transId"
        | "currency"
        | "transType"
        | "projId"
        | "transactionCategoryId"
        | "comment"
        | "billingType"
        | "itemDescription"
        | "contractLineId"
      >
    > {}

export interface ProjectJournalApprovalDetails {
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
   * | Name | `Approve` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  approve: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StatusValue` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  statusValue: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Next` |
   * | Type | `Edm.String` |
   */
  next: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CheckJournal` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  checkJournal: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Editing` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  editing: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Group` |
   * | Type | `Edm.String` |
   */
  group: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReadyForPosting` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  readyForPosting: NoYes | null;
}

export type ProjectJournalApprovalDetailsId = {
  dataAreaId: string;
  approve: string;
  statusValue: string;
};

export interface EditableProjectJournalApprovalDetails
  extends Pick<
      ProjectJournalApprovalDetails,
      "dataAreaId" | "approve" | "statusValue"
    >,
    Partial<
      Pick<
        ProjectJournalApprovalDetails,
        "next" | "checkJournal" | "editing" | "group" | "readyForPosting"
      >
    > {}

export interface ProjectCollaborationWorkspaceSettings {
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
   * | Name | `BusinessArea` |
   * | Type | `Microsoft.Dynamics.DataEntities.CollabSiteEntityType` |
   */
  businessArea: CollabSiteEntityType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsWorkspaceAutoCreated` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isWorkspaceAutoCreated: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsCreatingWorkspacePrompted` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isCreatingWorkspacePrompted: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SharePointVersion` |
   * | Type | `Microsoft.Dynamics.DataEntities.CollabSiteSharePointType` |
   */
  sharePointVersion: CollabSiteSharePointType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsDeletingWorkspacePrompted` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isDeletingWorkspacePrompted: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkspaceHomePage` |
   * | Type | `Edm.String` |
   */
  workspaceHomePage: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Template` |
   * | Type | `Edm.String` |
   */
  template: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsWorkspaceAutoCreatedForTime` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isWorkspaceAutoCreatedForTime: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsWorkspaceAutoCreatedForCost` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isWorkspaceAutoCreatedForCost: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsWorkspaceAutoCreatedForInternal` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isWorkspaceAutoCreatedForInternal: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StoreMSProjectFiles` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  storeMsProjectFiles: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsWorkspaceAutoCreatedForInvestment` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isWorkspaceAutoCreatedForInvestment: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsWorkspaceAutoCreatedForTimeMaterial` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isWorkspaceAutoCreatedForTimeMaterial: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsWorkspaceAutoCreatedForFixedPrice` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isWorkspaceAutoCreatedForFixedPrice: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SyncTaskLists` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  syncTaskLists: NoYes | null;
}

export type ProjectCollaborationWorkspaceSettingsId = {
  dataAreaId: string;
  businessArea: CollabSiteEntityType | null;
};

export interface EditableProjectCollaborationWorkspaceSettings
  extends Pick<ProjectCollaborationWorkspaceSettings, "dataAreaId">,
    Partial<
      Pick<
        ProjectCollaborationWorkspaceSettings,
        | "businessArea"
        | "isWorkspaceAutoCreated"
        | "isCreatingWorkspacePrompted"
        | "sharePointVersion"
        | "isDeletingWorkspacePrompted"
        | "workspaceHomePage"
        | "template"
        | "isWorkspaceAutoCreatedForTime"
        | "isWorkspaceAutoCreatedForCost"
        | "isWorkspaceAutoCreatedForInternal"
        | "storeMsProjectFiles"
        | "isWorkspaceAutoCreatedForInvestment"
        | "isWorkspaceAutoCreatedForTimeMaterial"
        | "isWorkspaceAutoCreatedForFixedPrice"
        | "syncTaskLists"
      >
    > {}

export interface ProjEstimateHoursImport {
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
   * | Name | `EstimateHoursImportId` |
   * | Type | `Edm.Guid` |
   * | Nullable | `false` |
   */
  estimateHoursImportId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityNumber` |
   * | Type | `Edm.String` |
   */
  activityNumber: string | null;
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
   * | Name | `Duration` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  duration: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SequenceNumber` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  sequenceNumber: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjCDSResourceId` |
   * | Type | `Edm.Guid` |
   * | Nullable | `false` |
   */
  projCdsResourceId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ResourceCategoryId` |
   * | Type | `Edm.String` |
   */
  resourceCategoryId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransactionCategoryId` |
   * | Type | `Edm.String` |
   */
  transactionCategoryId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjectId` |
   * | Type | `Edm.String` |
   */
  projectId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlannedSalesAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  plannedSalesAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  startDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContractLineId` |
   * | Type | `Edm.String` |
   */
  contractLineId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlannedCostAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  plannedCostAmount: number;
}

export type ProjEstimateHoursImportId = {
  dataAreaId: string;
  estimateHoursImportId: string;
};

export interface EditableProjEstimateHoursImport
  extends Pick<
      ProjEstimateHoursImport,
      | "dataAreaId"
      | "estimateHoursImportId"
      | "duration"
      | "sequenceNumber"
      | "projCdsResourceId"
      | "plannedSalesAmount"
      | "startDate"
      | "plannedCostAmount"
    >,
    Partial<
      Pick<
        ProjEstimateHoursImport,
        | "activityNumber"
        | "description"
        | "resourceCategoryId"
        | "transactionCategoryId"
        | "projectId"
        | "contractLineId"
      >
    > {}
