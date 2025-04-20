// @ts-nocheck
import {
  QStringPath,
  QNumberPath,
  QEnumPath,
  QDateTimeOffsetPath,
  QueryObject,
  QId,
  QStringParam,
  QNumberParam,
  QAction,
  QEnumParam,
  QDateTimeOffsetParam,
  QGuidPath,
  QGuidParam,
} from "@odata2ts/odata-query-objects";
import type {
  ValidationProjectTaskStatusId,
  ValidationProjectTaskStatus_DataValidationProjectTaskStatusEntityProjectNameParams,
  ProjectReportSortFieldsId,
  ProjectAllocationKeyDetailsId,
  ProjectItemJournalTransId,
  ProjectParameterV2Id,
  ProjInvoiceWId,
  ProjForecastSalesImportId,
  ProjectJournalApprovalDetailsId,
  ProjectCollaborationWorkspaceSettingsId,
  ProjEstimateHoursImportId,
} from "./MicrosoftDynamicsDataEntitiesModel";
import {
  DataValidationTaskStatus,
  ProjSortValue,
  ProjLineTotal,
  NoYes,
  ProjDefaultInvoiceLayout,
  ProjTaxItemGroupMethod,
  ProjTaxGroupMethod,
  TaxCalculationProjDateType,
  ProjCdsTransType,
  ProjBillingType,
  CollabSiteEntityType,
  CollabSiteSharePointType,
} from "./MicrosoftDynamicsDataEntitiesModel";

export class QValidationProjectTaskStatus extends QueryObject {
  public readonly dataValidationProjectName = new QStringPath(
    this.withPrefix("DataValidationProject_Name"),
  );
  public readonly dataValidationProjectTaskLineNumber = new QNumberPath(
    this.withPrefix("DataValidationProjectTask_LineNumber"),
  );
  public readonly legalEntity = new QStringPath(this.withPrefix("LegalEntity"));
  public readonly completedByWorkerPersonnelNumber = new QStringPath(
    this.withPrefix("CompletedByWorker_PersonnelNumber"),
  );
  public readonly dataValidationProjectTaskName = new QStringPath(
    this.withPrefix("DataValidationProjectTask_Name"),
  );
  public readonly responsibleWorkerPersonnelNumber = new QStringPath(
    this.withPrefix("ResponsibleWorker_PersonnelNumber"),
  );
  public readonly status = new QEnumPath(
    this.withPrefix("Status"),
    DataValidationTaskStatus,
  );
  public readonly completedDateTime = new QDateTimeOffsetPath(
    this.withPrefix("CompletedDateTime"),
  );
}

export const qValidationProjectTaskStatus = new QValidationProjectTaskStatus();

export class QValidationProjectTaskStatusId extends QId<ValidationProjectTaskStatusId> {
  private readonly params = [
    new QStringParam("DataValidationProject_Name", "dataValidationProjectName"),
    new QNumberParam(
      "DataValidationProjectTask_LineNumber",
      "dataValidationProjectTaskLineNumber",
    ),
    new QStringParam("LegalEntity", "legalEntity"),
  ];

  getParams() {
    return this.params;
  }
}

export class ValidationProjectTaskStatus_QDataValidationProjectTaskStatusEntityProjectName extends QAction<ValidationProjectTaskStatus_DataValidationProjectTaskStatusEntityProjectNameParams> {
  private readonly params = [new QStringParam("_fields", "fields")];

  constructor() {
    super(
      "Microsoft.Dynamics.DataEntities.DataValidationProjectTaskStatusEntityProjectName",
    );
  }

  getParams() {
    return this.params;
  }
}

export class QProjectReportSortFields extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly sortCode = new QEnumPath(
    this.withPrefix("SortCode"),
    ProjSortValue,
  );
  public readonly sortingId = new QStringPath(this.withPrefix("SortingId"));
  public readonly description = new QStringPath(this.withPrefix("Description"));
}

export const qProjectReportSortFields = new QProjectReportSortFields();

export class QProjectReportSortFieldsId extends QId<ProjectReportSortFieldsId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QEnumParam("SortCode", "sortCode"),
    new QStringParam("SortingId", "sortingId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QProjectAllocationKeyDetails extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly allocationKey = new QStringPath(
    this.withPrefix("AllocationKey"),
  );
  public readonly lineNumber = new QNumberPath(this.withPrefix("LineNumber"));
  public readonly resourcePersonnelNumber = new QStringPath(
    this.withPrefix("ResourcePersonnelNumber"),
  );
  public readonly allocationPercentage = new QNumberPath(
    this.withPrefix("AllocationPercentage"),
  );
  public readonly projectId = new QStringPath(this.withPrefix("ProjectID"));
  public readonly lineProperty = new QStringPath(
    this.withPrefix("LineProperty"),
  );
  public readonly category = new QStringPath(this.withPrefix("Category"));
}

export const qProjectAllocationKeyDetails = new QProjectAllocationKeyDetails();

export class QProjectAllocationKeyDetailsId extends QId<ProjectAllocationKeyDetailsId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("AllocationKey", "allocationKey"),
    new QNumberParam("LineNumber", "lineNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QProjectItemJournalTrans extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly journalId = new QStringPath(this.withPrefix("JournalId"));
  public readonly voucher = new QStringPath(this.withPrefix("Voucher"));
  public readonly lineNum = new QNumberPath(this.withPrefix("LineNum"));
  public readonly storageSiteId = new QStringPath(
    this.withPrefix("StorageSiteId"),
  );
  public readonly productConfigurationId = new QStringPath(
    this.withPrefix("ProductConfigurationId"),
  );
  public readonly inventDimensionId = new QStringPath(
    this.withPrefix("InventDimensionId"),
  );
  public readonly projectTaxItemGroupId = new QStringPath(
    this.withPrefix("ProjectTaxItemGroupId"),
  );
  public readonly cwQuantity = new QNumberPath(this.withPrefix("CWQuantity"));
  public readonly productSizeId = new QStringPath(
    this.withPrefix("ProductSizeId"),
  );
  public readonly productVersionId = new QStringPath(
    this.withPrefix("ProductVersionId"),
  );
  public readonly priceUnit = new QNumberPath(this.withPrefix("PriceUnit"));
  public readonly activityNumber = new QStringPath(
    this.withPrefix("ActivityNumber"),
  );
  public readonly projectLinePropertyId = new QStringPath(
    this.withPrefix("ProjectLinePropertyId"),
  );
  public readonly projectUnitId = new QStringPath(
    this.withPrefix("ProjectUnitID"),
  );
  public readonly inventTransactionReturnId = new QStringPath(
    this.withPrefix("InventTransactionReturnId"),
  );
  public readonly projectCategoryId = new QStringPath(
    this.withPrefix("ProjectCategoryId"),
  );
  public readonly costAmount = new QNumberPath(this.withPrefix("CostAmount"));
  public readonly projectSalesPrice = new QNumberPath(
    this.withPrefix("ProjectSalesPrice"),
  );
  public readonly projectTransactionId = new QStringPath(
    this.withPrefix("ProjectTransactionId"),
  );
  public readonly projectSalesCurrencyId = new QStringPath(
    this.withPrefix("ProjectSalesCurrencyId"),
  );
  public readonly inventTransactionId = new QStringPath(
    this.withPrefix("InventTransactionId"),
  );
  public readonly inventSerialId = new QStringPath(
    this.withPrefix("inventSerialId"),
  );
  public readonly costMarkup = new QNumberPath(this.withPrefix("CostMarkup"));
  public readonly storageLocationId = new QStringPath(
    this.withPrefix("StorageLocationId"),
  );
  public readonly projectDate = new QDateTimeOffsetPath(
    this.withPrefix("ProjectDate"),
  );
  public readonly itemId = new QStringPath(this.withPrefix("ItemId"));
  public readonly storageWarehouseId = new QStringPath(
    this.withPrefix("StorageWarehouseId"),
  );
  public readonly costPrice = new QNumberPath(this.withPrefix("CostPrice"));
  public readonly productColorId = new QStringPath(
    this.withPrefix("ProductColorId"),
  );
  public readonly projectId = new QStringPath(this.withPrefix("ProjectId"));
  public readonly defaultDimensionDisplayValue = new QStringPath(
    this.withPrefix("DefaultDimensionDisplayValue"),
  );
  public readonly projectTaxGroupId = new QStringPath(
    this.withPrefix("ProjectTaxGroupId"),
  );
  public readonly quantity = new QNumberPath(this.withPrefix("Quantity"));
  public readonly productStyleId = new QStringPath(
    this.withPrefix("ProductStyleId"),
  );
}

export const qProjectItemJournalTrans = new QProjectItemJournalTrans();

export class QProjectItemJournalTransId extends QId<ProjectItemJournalTransId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("JournalId", "journalId"),
    new QStringParam("Voucher", "voucher"),
    new QNumberParam("LineNum", "lineNum"),
  ];

  getParams() {
    return this.params;
  }
}

export class QProjectParameterV2 extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly key = new QNumberPath(this.withPrefix("Key"));
  public readonly lineTotalPostCost = new QEnumPath(
    this.withPrefix("LineTotalPostCost"),
    ProjLineTotal,
  );
  public readonly taxItemGroupOnAcc = new QStringPath(
    this.withPrefix("TaxItemGroupOnAcc"),
  );
  public readonly costCategory = new QStringPath(
    this.withPrefix("CostCategory"),
  );
  public readonly projectOperationsIntegrationFeatureStatus = new QEnumPath(
    this.withPrefix("ProjectOperationsIntegrationFeatureStatus"),
    NoYes,
  );
  public readonly emplCategory = new QStringPath(
    this.withPrefix("EmplCategory"),
  );
  public readonly lineTotalEstimate = new QEnumPath(
    this.withPrefix("LineTotalEstimate"),
    ProjLineTotal,
  );
  public readonly defaultInvoiceLayout = new QEnumPath(
    this.withPrefix("DefaultInvoiceLayout"),
    ProjDefaultInvoiceLayout,
  );
  public readonly onAccountCategory = new QStringPath(
    this.withPrefix("OnAccountCategory"),
  );
  public readonly itemCategory = new QStringPath(
    this.withPrefix("ItemCategory"),
  );
  public readonly projectOperationsForecastModelId = new QStringPath(
    this.withPrefix("ProjectOperationsForecastModelId"),
  );
  public readonly taxItemGroupMethod = new QEnumPath(
    this.withPrefix("TaxItemGroupMethod"),
    ProjTaxItemGroupMethod,
  );
  public readonly isAccountingDateUpdateAllowed = new QEnumPath(
    this.withPrefix("IsAccountingDateUpdateAllowed"),
    NoYes,
  );
  public readonly revenueCategory = new QStringPath(
    this.withPrefix("RevenueCategory"),
  );
  public readonly taxGroupMethod = new QEnumPath(
    this.withPrefix("TaxGroupMethod"),
    ProjTaxGroupMethod,
  );
  public readonly lineTotalInvoice = new QEnumPath(
    this.withPrefix("LineTotalInvoice"),
    ProjLineTotal,
  );
  public readonly lineTotalAccrueRevenue = new QEnumPath(
    this.withPrefix("LineTotalAccrueRevenue"),
    ProjLineTotal,
  );
  public readonly dimensionAttributeValueCombinationDisplayValue =
    new QStringPath(
      this.withPrefix("DimensionAttributeValueCombinationDisplayValue"),
    );
  public readonly taxCalcDateType = new QEnumPath(
    this.withPrefix("TaxCalcDateType"),
    TaxCalculationProjDateType,
  );
}

export const qProjectParameterV2 = new QProjectParameterV2();

export class QProjectParameterV2Id extends QId<ProjectParameterV2Id> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QNumberParam("Key", "key"),
  ];

  getParams() {
    return this.params;
  }
}

export class QProjInvoiceW extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly projInvoiceId = new QStringPath(
    this.withPrefix("ProjInvoiceId"),
  );
  public readonly ledgerVoucher = new QStringPath(
    this.withPrefix("LedgerVoucher"),
  );
  public readonly invoiceDate = new QDateTimeOffsetPath(
    this.withPrefix("InvoiceDate"),
  );
  public readonly submissionUuidW = new QStringPath(
    this.withPrefix("SubmissionUUID_W"),
  );
  public readonly qrCodeW = new QStringPath(this.withPrefix("QRCode_W"));
}

export const qProjInvoiceW = new QProjInvoiceW();

export class QProjInvoiceWId extends QId<ProjInvoiceWId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("ProjInvoiceId", "projInvoiceId"),
    new QStringParam("LedgerVoucher", "ledgerVoucher"),
    new QDateTimeOffsetParam("InvoiceDate", "invoiceDate"),
  ];

  getParams() {
    return this.params;
  }
}

export class QProjForecastSalesImport extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly importId = new QGuidPath(this.withPrefix("ImportId"));
  public readonly itemId = new QStringPath(this.withPrefix("ItemId"));
  public readonly activityNumber = new QStringPath(
    this.withPrefix("ActivityNumber"),
  );
  public readonly transId = new QStringPath(this.withPrefix("TransId"));
  public readonly currency = new QStringPath(this.withPrefix("Currency"));
  public readonly transType = new QEnumPath(
    this.withPrefix("TransType"),
    ProjCdsTransType,
  );
  public readonly sequenceNumber = new QNumberPath(
    this.withPrefix("SequenceNumber"),
  );
  public readonly projId = new QStringPath(this.withPrefix("ProjId"));
  public readonly forecastCostPaymDate = new QDateTimeOffsetPath(
    this.withPrefix("ForecastCostPaymDate"),
  );
  public readonly forecastInvoiceDate = new QDateTimeOffsetPath(
    this.withPrefix("ForecastInvoiceDate"),
  );
  public readonly price = new QNumberPath(this.withPrefix("Price"));
  public readonly forecastLineId = new QGuidPath(
    this.withPrefix("ForecastLineId"),
  );
  public readonly transactionCategoryId = new QStringPath(
    this.withPrefix("TransactionCategoryId"),
  );
  public readonly forecastLineIdOrigin = new QGuidPath(
    this.withPrefix("ForecastLineIdOrigin"),
  );
  public readonly comment = new QStringPath(this.withPrefix("Comment"));
  public readonly startDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate"),
  );
  public readonly inventQty = new QNumberPath(this.withPrefix("InventQty"));
  public readonly billingType = new QEnumPath(
    this.withPrefix("BillingType"),
    ProjBillingType,
  );
  public readonly endDate = new QDateTimeOffsetPath(this.withPrefix("EndDate"));
  public readonly itemDescription = new QStringPath(
    this.withPrefix("ItemDescription"),
  );
  public readonly contractLineId = new QStringPath(
    this.withPrefix("ContractLineId"),
  );
  public readonly salesQty = new QNumberPath(this.withPrefix("SalesQty"));
}

export const qProjForecastSalesImport = new QProjForecastSalesImport();

export class QProjForecastSalesImportId extends QId<ProjForecastSalesImportId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QGuidParam("ImportId", "importId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QProjectJournalApprovalDetails extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly approve = new QStringPath(this.withPrefix("Approve"));
  public readonly statusValue = new QStringPath(this.withPrefix("StatusValue"));
  public readonly next = new QStringPath(this.withPrefix("Next"));
  public readonly checkJournal = new QEnumPath(
    this.withPrefix("CheckJournal"),
    NoYes,
  );
  public readonly editing = new QEnumPath(this.withPrefix("Editing"), NoYes);
  public readonly group = new QStringPath(this.withPrefix("Group"));
  public readonly readyForPosting = new QEnumPath(
    this.withPrefix("ReadyForPosting"),
    NoYes,
  );
}

export const qProjectJournalApprovalDetails =
  new QProjectJournalApprovalDetails();

export class QProjectJournalApprovalDetailsId extends QId<ProjectJournalApprovalDetailsId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("Approve", "approve"),
    new QStringParam("StatusValue", "statusValue"),
  ];

  getParams() {
    return this.params;
  }
}

export class QProjectCollaborationWorkspaceSettings extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly businessArea = new QEnumPath(
    this.withPrefix("BusinessArea"),
    CollabSiteEntityType,
  );
  public readonly isWorkspaceAutoCreated = new QEnumPath(
    this.withPrefix("IsWorkspaceAutoCreated"),
    NoYes,
  );
  public readonly isCreatingWorkspacePrompted = new QEnumPath(
    this.withPrefix("IsCreatingWorkspacePrompted"),
    NoYes,
  );
  public readonly sharePointVersion = new QEnumPath(
    this.withPrefix("SharePointVersion"),
    CollabSiteSharePointType,
  );
  public readonly isDeletingWorkspacePrompted = new QEnumPath(
    this.withPrefix("IsDeletingWorkspacePrompted"),
    NoYes,
  );
  public readonly workspaceHomePage = new QStringPath(
    this.withPrefix("WorkspaceHomePage"),
  );
  public readonly template = new QStringPath(this.withPrefix("Template"));
  public readonly isWorkspaceAutoCreatedForTime = new QEnumPath(
    this.withPrefix("IsWorkspaceAutoCreatedForTime"),
    NoYes,
  );
  public readonly isWorkspaceAutoCreatedForCost = new QEnumPath(
    this.withPrefix("IsWorkspaceAutoCreatedForCost"),
    NoYes,
  );
  public readonly isWorkspaceAutoCreatedForInternal = new QEnumPath(
    this.withPrefix("IsWorkspaceAutoCreatedForInternal"),
    NoYes,
  );
  public readonly storeMsProjectFiles = new QEnumPath(
    this.withPrefix("StoreMSProjectFiles"),
    NoYes,
  );
  public readonly isWorkspaceAutoCreatedForInvestment = new QEnumPath(
    this.withPrefix("IsWorkspaceAutoCreatedForInvestment"),
    NoYes,
  );
  public readonly isWorkspaceAutoCreatedForTimeMaterial = new QEnumPath(
    this.withPrefix("IsWorkspaceAutoCreatedForTimeMaterial"),
    NoYes,
  );
  public readonly isWorkspaceAutoCreatedForFixedPrice = new QEnumPath(
    this.withPrefix("IsWorkspaceAutoCreatedForFixedPrice"),
    NoYes,
  );
  public readonly syncTaskLists = new QEnumPath(
    this.withPrefix("SyncTaskLists"),
    NoYes,
  );
}

export const qProjectCollaborationWorkspaceSettings =
  new QProjectCollaborationWorkspaceSettings();

export class QProjectCollaborationWorkspaceSettingsId extends QId<ProjectCollaborationWorkspaceSettingsId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QEnumParam("BusinessArea", "businessArea"),
  ];

  getParams() {
    return this.params;
  }
}

export class QProjEstimateHoursImport extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly estimateHoursImportId = new QGuidPath(
    this.withPrefix("EstimateHoursImportId"),
  );
  public readonly activityNumber = new QStringPath(
    this.withPrefix("ActivityNumber"),
  );
  public readonly description = new QStringPath(this.withPrefix("Description"));
  public readonly duration = new QNumberPath(this.withPrefix("Duration"));
  public readonly sequenceNumber = new QNumberPath(
    this.withPrefix("SequenceNumber"),
  );
  public readonly projCdsResourceId = new QGuidPath(
    this.withPrefix("ProjCDSResourceId"),
  );
  public readonly resourceCategoryId = new QStringPath(
    this.withPrefix("ResourceCategoryId"),
  );
  public readonly transactionCategoryId = new QStringPath(
    this.withPrefix("TransactionCategoryId"),
  );
  public readonly projectId = new QStringPath(this.withPrefix("ProjectId"));
  public readonly plannedSalesAmount = new QNumberPath(
    this.withPrefix("PlannedSalesAmount"),
  );
  public readonly startDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate"),
  );
  public readonly contractLineId = new QStringPath(
    this.withPrefix("ContractLineId"),
  );
  public readonly plannedCostAmount = new QNumberPath(
    this.withPrefix("PlannedCostAmount"),
  );
}

export const qProjEstimateHoursImport = new QProjEstimateHoursImport();

export class QProjEstimateHoursImportId extends QId<ProjEstimateHoursImportId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QGuidParam("EstimateHoursImportId", "estimateHoursImportId"),
  ];

  getParams() {
    return this.params;
  }
}
