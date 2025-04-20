// @ts-nocheck
import {
  QStringPath,
  QNumberPath,
  QEnumPath,
  QueryObject,
  QId,
  QStringParam,
  QDateTimeOffsetPath,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import type {
  AssetMaintenanceWorkOrderScheduleParametersId,
  AssetMaintenanceUnplannedWorkOrderLinesId,
  AssetMaintenanceParametersId,
} from "./MicrosoftDynamicsDataEntitiesModel";
import {
  EntAssetWorkOrderDefaultScheduledStart,
  SchedJobLink,
  EntAssetProductReportLanguage,
  NoYes,
  EntAssetObjectViewType,
} from "./MicrosoftDynamicsDataEntitiesModel";

export class QAssetMaintenanceWorkOrderScheduleParameters extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly maintenanceAssetLocation = new QNumberPath(
    this.withPrefix("MaintenanceAssetLocation"),
  );
  public readonly workOrderCriticality = new QNumberPath(
    this.withPrefix("WorkOrderCriticality"),
  );
  public readonly workerStartDate = new QNumberPath(
    this.withPrefix("WorkerStartDate"),
  );
  public readonly reqPlanIdSched = new QStringPath(
    this.withPrefix("ReqPlanIdSched"),
  );
  public readonly workOrderPriority = new QNumberPath(
    this.withPrefix("WorkOrderPriority"),
  );
  public readonly responsibleWorkerGroup = new QNumberPath(
    this.withPrefix("ResponsibleWorkerGroup"),
  );
  public readonly workOrderStartDate = new QNumberPath(
    this.withPrefix("WorkOrderStartDate"),
  );
  public readonly preferredWorkerGroup = new QNumberPath(
    this.withPrefix("PreferredWorkerGroup"),
  );
  public readonly responsibleWorker = new QNumberPath(
    this.withPrefix("ResponsibleWorker"),
  );
  public readonly defaultScheduledStartDate = new QEnumPath(
    this.withPrefix("DefaultScheduledStartDate"),
    EntAssetWorkOrderDefaultScheduledStart,
  );
  public readonly preferredWorker = new QNumberPath(
    this.withPrefix("PreferredWorker"),
  );
  public readonly timeFenceSchedule = new QNumberPath(
    this.withPrefix("TimeFenceSchedule"),
  );
}

export const qAssetMaintenanceWorkOrderScheduleParameters =
  new QAssetMaintenanceWorkOrderScheduleParameters();

export class QAssetMaintenanceWorkOrderScheduleParametersId extends QId<AssetMaintenanceWorkOrderScheduleParametersId> {
  private readonly params = [new QStringParam("dataAreaId")];

  getParams() {
    return this.params;
  }
}

export class QAssetMaintenanceUnplannedWorkOrderLines extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly workOrderId = new QStringPath(this.withPrefix("WorkOrderId"));
  public readonly lineNumber = new QNumberPath(this.withPrefix("LineNumber"));
  public readonly maintenanceAssetId = new QStringPath(
    this.withPrefix("MaintenanceAssetId"),
  );
  public readonly replacementMaintenanceAssetId = new QStringPath(
    this.withPrefix("ReplacementMaintenanceAssetId"),
  );
  public readonly workOrderJobDescription = new QStringPath(
    this.withPrefix("WorkOrderJobDescription"),
  );
  public readonly maintenanceAssetFunctionalLocationId = new QStringPath(
    this.withPrefix("MaintenanceAssetFunctionalLocationId"),
  );
  public readonly scheduledStartDateTime = new QDateTimeOffsetPath(
    this.withPrefix("ScheduledStartDateTime"),
  );
  public readonly jobVariantId = new QStringPath(
    this.withPrefix("JobVariantId"),
  );
  public readonly scheduledEndDateTime = new QDateTimeOffsetPath(
    this.withPrefix("ScheduledEndDateTime"),
  );
  public readonly workOrderJobMaintenanceWorkerRemarks = new QStringPath(
    this.withPrefix("WorkOrderJobMaintenanceWorkerRemarks"),
  );
  public readonly addressLongitude = new QNumberPath(
    this.withPrefix("AddressLongitude"),
  );
  public readonly replacementMaintenanceAssetInstallationFunctionalLocationId =
    new QStringPath(
      this.withPrefix(
        "ReplacementMaintenanceAssetInstallationFunctionalLocationId",
      ),
    );
  public readonly workOrderJobInternalNote = new QStringPath(
    this.withPrefix("WorkOrderJobInternalNote"),
  );
  public readonly forecastHourQty = new QNumberPath(
    this.withPrefix("ForecastHourQty"),
  );
  public readonly addressLatitude = new QNumberPath(
    this.withPrefix("AddressLatitude"),
  );
  public readonly jobScheduleLinkType = new QEnumPath(
    this.withPrefix("JobScheduleLinkType"),
    SchedJobLink,
  );
  public readonly jobTypeId = new QStringPath(this.withPrefix("JobTypeId"));
  public readonly jobTradeId = new QStringPath(this.withPrefix("JobTradeId"));
  public readonly scheduledWorkerPersonnelNumber = new QStringPath(
    this.withPrefix("ScheduledWorkerPersonnelNumber"),
  );
}

export const qAssetMaintenanceUnplannedWorkOrderLines =
  new QAssetMaintenanceUnplannedWorkOrderLines();

export class QAssetMaintenanceUnplannedWorkOrderLinesId extends QId<AssetMaintenanceUnplannedWorkOrderLinesId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("WorkOrderId", "workOrderId"),
    new QNumberParam("LineNumber", "lineNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QAssetMaintenanceParameters extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly functionalLocationId = new QStringPath(
    this.withPrefix("FunctionalLocationId"),
  );
  public readonly projIdForecast = new QStringPath(
    this.withPrefix("ProjIdForecast"),
  );
  public readonly workOrderReportLanguage = new QEnumPath(
    this.withPrefix("WorkOrderReportLanguage"),
    EntAssetProductReportLanguage,
  );
  public readonly preventiveWorkOrderTypeId = new QStringPath(
    this.withPrefix("PreventiveWorkOrderTypeId"),
  );
  public readonly defaultRequestTypeId = new QStringPath(
    this.withPrefix("DefaultRequestTypeId"),
  );
  public readonly itemCategory = new QStringPath(
    this.withPrefix("ItemCategory"),
  );
  public readonly standardCalendarId = new QStringPath(
    this.withPrefix("StandardCalendarId"),
  );
  public readonly forecastModelId = new QStringPath(
    this.withPrefix("ForecastModelId"),
  );
  public readonly journalExpense = new QStringPath(
    this.withPrefix("JournalExpense"),
  );
  public readonly journalItem = new QStringPath(this.withPrefix("JournalItem"));
  public readonly costCategory = new QStringPath(
    this.withPrefix("CostCategory"),
  );
  public readonly workOrderRelatedFormat = new QStringPath(
    this.withPrefix("WorkOrderRelatedFormat"),
  );
  public readonly functionalLocationLevel = new QNumberPath(
    this.withPrefix("FunctionalLocationLevel"),
  );
  public readonly bingKey = new QStringPath(this.withPrefix("BingKey"));
  public readonly workOrderCopyDescription = new QEnumPath(
    this.withPrefix("WorkOrderCopyDescription"),
    NoYes,
  );
  public readonly emplCategory = new QStringPath(
    this.withPrefix("EmplCategory"),
  );
  public readonly workOrderCopyFault2Request = new QEnumPath(
    this.withPrefix("WorkOrderCopyFault2Request"),
    NoYes,
  );
  public readonly defaultWorkOrderTypeId = new QStringPath(
    this.withPrefix("DefaultWorkOrderTypeId"),
  );
  public readonly standardMaintenanceAssetViewType = new QEnumPath(
    this.withPrefix("StandardMaintenanceAssetViewType"),
    EntAssetObjectViewType,
  );
  public readonly journalHour = new QStringPath(this.withPrefix("JournalHour"));
}

export const qAssetMaintenanceParameters = new QAssetMaintenanceParameters();

export class QAssetMaintenanceParametersId extends QId<AssetMaintenanceParametersId> {
  private readonly params = [new QStringParam("dataAreaId")];

  getParams() {
    return this.params;
  }
}
