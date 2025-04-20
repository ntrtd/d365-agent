// @ts-nocheck

export enum NoYes {
  No = "No",
  Yes = "Yes",
}

export enum SchedJobLink {
  None = "None",
  SS = "SS",
  FF = "FF",
  FS = "FS",
  SF = "SF",
}

export enum EntAssetWorkOrderDefaultScheduledStart {
  ExpectedStartDateFromHeader = "ExpectedStartDateFromHeader",
  ScheduledStartDateFromLines = "ScheduledStartDateFromLines",
}

export enum EntAssetProductReportLanguage {
  Company = "Company",
  User = "User",
}

export enum EntAssetObjectViewType {
  FunctionalLocations = "FunctionalLocations",
  ObjectsFunctionalLocations = "ObjectsFunctionalLocations",
  ObjectTypes = "ObjectTypes",
  Objects = "Objects",
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

export interface AssetMaintenanceWorkOrderScheduleParameters {
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
   * | Name | `MaintenanceAssetLocation` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  maintenanceAssetLocation: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkOrderCriticality` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  workOrderCriticality: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkerStartDate` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  workerStartDate: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReqPlanIdSched` |
   * | Type | `Edm.String` |
   */
  reqPlanIdSched: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkOrderPriority` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  workOrderPriority: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ResponsibleWorkerGroup` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  responsibleWorkerGroup: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkOrderStartDate` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  workOrderStartDate: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PreferredWorkerGroup` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  preferredWorkerGroup: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ResponsibleWorker` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  responsibleWorker: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultScheduledStartDate` |
   * | Type | `Microsoft.Dynamics.DataEntities.EntAssetWorkOrderDefaultScheduledStart` |
   */
  defaultScheduledStartDate: EntAssetWorkOrderDefaultScheduledStart | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PreferredWorker` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  preferredWorker: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TimeFenceSchedule` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  timeFenceSchedule: number;
}

export type AssetMaintenanceWorkOrderScheduleParametersId =
  | string
  | { dataAreaId: string };

export interface EditableAssetMaintenanceWorkOrderScheduleParameters
  extends Pick<
      AssetMaintenanceWorkOrderScheduleParameters,
      | "maintenanceAssetLocation"
      | "workOrderCriticality"
      | "workerStartDate"
      | "workOrderPriority"
      | "responsibleWorkerGroup"
      | "workOrderStartDate"
      | "preferredWorkerGroup"
      | "responsibleWorker"
      | "preferredWorker"
      | "timeFenceSchedule"
    >,
    Partial<
      Pick<
        AssetMaintenanceWorkOrderScheduleParameters,
        "reqPlanIdSched" | "defaultScheduledStartDate"
      >
    > {}

export interface AssetMaintenanceUnplannedWorkOrderLines {
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
   * | Name | `WorkOrderId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  workOrderId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineNumber` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  lineNumber: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaintenanceAssetId` |
   * | Type | `Edm.String` |
   */
  maintenanceAssetId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReplacementMaintenanceAssetId` |
   * | Type | `Edm.String` |
   */
  replacementMaintenanceAssetId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkOrderJobDescription` |
   * | Type | `Edm.String` |
   */
  workOrderJobDescription: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaintenanceAssetFunctionalLocationId` |
   * | Type | `Edm.String` |
   */
  maintenanceAssetFunctionalLocationId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ScheduledStartDateTime` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  scheduledStartDateTime: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JobVariantId` |
   * | Type | `Edm.String` |
   */
  jobVariantId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ScheduledEndDateTime` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  scheduledEndDateTime: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkOrderJobMaintenanceWorkerRemarks` |
   * | Type | `Edm.String` |
   */
  workOrderJobMaintenanceWorkerRemarks: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressLongitude` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  addressLongitude: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReplacementMaintenanceAssetInstallationFunctionalLocationId` |
   * | Type | `Edm.String` |
   */
  replacementMaintenanceAssetInstallationFunctionalLocationId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkOrderJobInternalNote` |
   * | Type | `Edm.String` |
   */
  workOrderJobInternalNote: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ForecastHourQty` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  forecastHourQty: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressLatitude` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  addressLatitude: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JobScheduleLinkType` |
   * | Type | `Microsoft.Dynamics.DataEntities.SchedJobLink` |
   */
  jobScheduleLinkType: SchedJobLink | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JobTypeId` |
   * | Type | `Edm.String` |
   */
  jobTypeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JobTradeId` |
   * | Type | `Edm.String` |
   */
  jobTradeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ScheduledWorkerPersonnelNumber` |
   * | Type | `Edm.String` |
   */
  scheduledWorkerPersonnelNumber: string | null;
}

export type AssetMaintenanceUnplannedWorkOrderLinesId = {
  dataAreaId: string;
  workOrderId: string;
  lineNumber: number;
};

export interface EditableAssetMaintenanceUnplannedWorkOrderLines
  extends Pick<
      AssetMaintenanceUnplannedWorkOrderLines,
      | "dataAreaId"
      | "workOrderId"
      | "lineNumber"
      | "scheduledStartDateTime"
      | "scheduledEndDateTime"
      | "addressLongitude"
      | "forecastHourQty"
      | "addressLatitude"
    >,
    Partial<
      Pick<
        AssetMaintenanceUnplannedWorkOrderLines,
        | "maintenanceAssetId"
        | "replacementMaintenanceAssetId"
        | "workOrderJobDescription"
        | "maintenanceAssetFunctionalLocationId"
        | "jobVariantId"
        | "workOrderJobMaintenanceWorkerRemarks"
        | "replacementMaintenanceAssetInstallationFunctionalLocationId"
        | "workOrderJobInternalNote"
        | "jobScheduleLinkType"
        | "jobTypeId"
        | "jobTradeId"
        | "scheduledWorkerPersonnelNumber"
      >
    > {}

export interface AssetMaintenanceParameters {
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
   * | Name | `FunctionalLocationId` |
   * | Type | `Edm.String` |
   */
  functionalLocationId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjIdForecast` |
   * | Type | `Edm.String` |
   */
  projIdForecast: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkOrderReportLanguage` |
   * | Type | `Microsoft.Dynamics.DataEntities.EntAssetProductReportLanguage` |
   */
  workOrderReportLanguage: EntAssetProductReportLanguage | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PreventiveWorkOrderTypeId` |
   * | Type | `Edm.String` |
   */
  preventiveWorkOrderTypeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultRequestTypeId` |
   * | Type | `Edm.String` |
   */
  defaultRequestTypeId: string | null;
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
   * | Name | `StandardCalendarId` |
   * | Type | `Edm.String` |
   */
  standardCalendarId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ForecastModelId` |
   * | Type | `Edm.String` |
   */
  forecastModelId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JournalExpense` |
   * | Type | `Edm.String` |
   */
  journalExpense: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JournalItem` |
   * | Type | `Edm.String` |
   */
  journalItem: string | null;
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
   * | Name | `WorkOrderRelatedFormat` |
   * | Type | `Edm.String` |
   */
  workOrderRelatedFormat: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FunctionalLocationLevel` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  functionalLocationLevel: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BingKey` |
   * | Type | `Edm.String` |
   */
  bingKey: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkOrderCopyDescription` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  workOrderCopyDescription: NoYes | null;
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
   * | Name | `WorkOrderCopyFault2Request` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  workOrderCopyFault2Request: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultWorkOrderTypeId` |
   * | Type | `Edm.String` |
   */
  defaultWorkOrderTypeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardMaintenanceAssetViewType` |
   * | Type | `Microsoft.Dynamics.DataEntities.EntAssetObjectViewType` |
   */
  standardMaintenanceAssetViewType: EntAssetObjectViewType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JournalHour` |
   * | Type | `Edm.String` |
   */
  journalHour: string | null;
}

export type AssetMaintenanceParametersId = string | { dataAreaId: string };

export interface EditableAssetMaintenanceParameters
  extends Pick<AssetMaintenanceParameters, "functionalLocationLevel">,
    Partial<
      Pick<
        AssetMaintenanceParameters,
        | "functionalLocationId"
        | "projIdForecast"
        | "workOrderReportLanguage"
        | "preventiveWorkOrderTypeId"
        | "defaultRequestTypeId"
        | "itemCategory"
        | "standardCalendarId"
        | "forecastModelId"
        | "journalExpense"
        | "journalItem"
        | "costCategory"
        | "workOrderRelatedFormat"
        | "bingKey"
        | "workOrderCopyDescription"
        | "emplCategory"
        | "workOrderCopyFault2Request"
        | "defaultWorkOrderTypeId"
        | "standardMaintenanceAssetViewType"
        | "journalHour"
      >
    > {}
