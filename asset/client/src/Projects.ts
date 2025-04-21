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
import type { ProjectsApi } from './ProjectsApi';
import { NoYes } from './NoYes';
import { PsaProjTask } from './PsaProjTask';
import { PsapReqControl } from './PsapReqControl';
import { PsaResSchedStatus } from './PsaResSchedStatus';
import { ProjBudgetaryControlOn } from './ProjBudgetaryControlOn';
import { PsaInvoiceMethod } from './PsaInvoiceMethod';
import { PsaProjTrackCost } from './PsaProjTrackCost';
import { BankLgDocumentType } from './BankLgDocumentType';
import { PsaConstraintType } from './PsaConstraintType';
import { PsapReqValidate } from './PsapReqValidate';
import { DetailSummary } from './DetailSummary';
import { ProjBudgetManagement } from './ProjBudgetManagement';
import { ProjStatus } from './ProjStatus';
import { PsaProjStatus } from './PsaProjStatus';
import { ProjLedgerPosting } from './ProjLedgerPosting';
import { ProjBudgetOverrunOption } from './ProjBudgetOverrunOption';
import { ProjLinePropertySearch } from './ProjLinePropertySearch';
import { PsaProjTimeMeasure } from './PsaProjTimeMeasure';
import { ProjType } from './ProjType';
import { ProjBudgetInterval } from './ProjBudgetInterval';
import { JmgJobPayTypeEnum } from './JmgJobPayTypeEnum';
import {
  SalesOrderHeadersV4,
  SalesOrderHeadersV4Type
} from './SalesOrderHeadersV4';
import { JournalTrans, JournalTransType } from './JournalTrans';
import {
  BeginningBalanceCostSaleTransactions,
  BeginningBalanceCostSaleTransactionsType
} from './BeginningBalanceCostSaleTransactions';
import {
  ProjectEmplForecasts,
  ProjectEmplForecastsType
} from './ProjectEmplForecasts';
import {
  PurchaseAgreementConfirmationLines,
  PurchaseAgreementConfirmationLinesType
} from './PurchaseAgreementConfirmationLines';
import {
  PurchaseRequisitionLinesV2,
  PurchaseRequisitionLinesV2Type
} from './PurchaseRequisitionLinesV2';
import {
  PurchaseOrderLines,
  PurchaseOrderLinesType
} from './PurchaseOrderLines';
import {
  UbuyPurchaseRequisitionLines,
  UbuyPurchaseRequisitionLinesType
} from './UbuyPurchaseRequisitionLines';
import {
  ProjectExpenseForecasts,
  ProjectExpenseForecastsType
} from './ProjectExpenseForecasts';
import {
  BeginningBalanceOnAccTransactions,
  BeginningBalanceOnAccTransactionsType
} from './BeginningBalanceOnAccTransactions';
import {
  PersonProjectRoles,
  PersonProjectRolesType
} from './PersonProjectRoles';
import {
  PurchaseOrderConfirmationLines,
  PurchaseOrderConfirmationLinesType
} from './PurchaseOrderConfirmationLines';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  ProjectItemJournalTrans,
  ProjectItemJournalTransType
} from './ProjectItemJournalTrans';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import {
  CdsSalesOrderHeaders,
  CdsSalesOrderHeadersType
} from './CdsSalesOrderHeaders';
import {
  PurchaseOrderConfirmationHeaders,
  PurchaseOrderConfirmationHeadersType
} from './PurchaseOrderConfirmationHeaders';
import {
  SalesAgreementConfirmationLines,
  SalesAgreementConfirmationLinesType
} from './SalesAgreementConfirmationLines';
import {
  SalesAgreementLines,
  SalesAgreementLinesType
} from './SalesAgreementLines';
import { ProjectWbsDrafts, ProjectWbsDraftsType } from './ProjectWbsDrafts';
import {
  PurchaseAgreementLines,
  PurchaseAgreementLinesType
} from './PurchaseAgreementLines';
import {
  BeginningBalanceFeeTransactions,
  BeginningBalanceFeeTransactionsType
} from './BeginningBalanceFeeTransactions';
import {
  AssetMaintenanceWorkOrderParentProjectsV2,
  AssetMaintenanceWorkOrderParentProjectsV2Type
} from './AssetMaintenanceWorkOrderParentProjectsV2';
import {
  PurchaseOrderHeaders,
  PurchaseOrderHeadersType
} from './PurchaseOrderHeaders';
import {
  ClmIntegrationPurchaseAgreementLines,
  ClmIntegrationPurchaseAgreementLinesType
} from './ClmIntegrationPurchaseAgreementLines';
import {
  PurchaseRequisitionLines,
  PurchaseRequisitionLinesType
} from './PurchaseRequisitionLines';
import {
  ServiceAgreementHeaders,
  ServiceAgreementHeadersType
} from './ServiceAgreementHeaders';
import {
  ServiceOrderHeaders,
  ServiceOrderHeadersType
} from './ServiceOrderHeaders';
import {
  ProjectOnAccForecasts,
  ProjectOnAccForecastsType
} from './ProjectOnAccForecasts';
import {
  AssetMaintenanceWorkOrderParentProjects,
  AssetMaintenanceWorkOrderParentProjectsType
} from './AssetMaintenanceWorkOrderParentProjects';
import {
  ProjectItemForecasts,
  ProjectItemForecastsType
} from './ProjectItemForecasts';
import {
  ServiceAgreementLines,
  ServiceAgreementLinesType
} from './ServiceAgreementLines';
import {
  ProjectDefaultOffsetAccounts,
  ProjectDefaultOffsetAccountsType
} from './ProjectDefaultOffsetAccounts';
import { ServiceOrderLines, ServiceOrderLinesType } from './ServiceOrderLines';
import {
  ProjectFeeForecasts,
  ProjectFeeForecastsType
} from './ProjectFeeForecasts';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';

/**
 * This class represents the entity "Projects" of service "d365_metadata".
 */
export class Projects<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectsType<T>
{
  /**
   * Technical entity name for Projects.
   */
  static override _entityName = 'Projects';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Projects entity.
   */
  static _keys = ['dataAreaId', 'ProjectID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Default On Subprojects.
   * @nullable
   */
  declare defaultOnSubprojects?: NoYes | null;
  /**
   * Project Or Task.
   * @nullable
   */
  declare projectOrTask?: PsaProjTask | null;
  /**
   * Fixed Asset Number.
   * @nullable
   */
  declare fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active Revision.
   * @nullable
   */
  declare activeRevision?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Activity Required For Hour Transaction.
   * @nullable
   */
  declare isActivityRequiredForHourTransaction?: NoYes | null;
  /**
   * Percent To Retain.
   */
  declare percentToRetain: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Resp Financial Personnel Number.
   * @nullable
   */
  declare workerRespFinancialPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Requisition Or Purchase Order Control.
   * @nullable
   */
  declare requisitionOrPurchaseOrderControl?: PsapReqControl | null;
  /**
   * Date Of Creation.
   */
  declare dateOfCreation: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Schedule Status.
   * @nullable
   */
  declare scheduleStatus?: PsaResSchedStatus | null;
  /**
   * Zakat Project Value.
   */
  declare zakatProjectValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Worker Responsible Personnel Number.
   * @nullable
   */
  declare workerResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transaction Types Controlled.
   * @nullable
   */
  declare transactionTypesControlled?: ProjBudgetaryControlOn | null;
  /**
   * Category.
   * @nullable
   */
  declare category?: NoYes | null;
  /**
   * Is Activity Required For Item Forecast.
   * @nullable
   */
  declare isActivityRequiredForItemForecast?: NoYes | null;
  /**
   * Header.
   * @nullable
   */
  declare header?: NoYes | null;
  /**
   * Project Template.
   * @nullable
   */
  declare projectTemplate?: NoYes | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoicing Method.
   * @nullable
   */
  declare invoicingMethod?: PsaInvoiceMethod | null;
  /**
   * Track Cost.
   * @nullable
   */
  declare trackCost?: PsaProjTrackCost | null;
  /**
   * Is Activity Required For Expense Transaction.
   * @nullable
   */
  declare isActivityRequiredForExpenseTransaction?: NoYes | null;
  /**
   * Invoice Cost.
   * @nullable
   */
  declare invoiceCost?: NoYes | null;
  /**
   * Zakat Subject.
   * @nullable
   */
  declare zakatSubject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Revision.
   * @nullable
   */
  declare externalRevision?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Completely Scheduled.
   * @nullable
   */
  declare taskCompletelyScheduled?: NoYes | null;
  /**
   * Subproject Id Format.
   * @nullable
   */
  declare subprojectIdFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Projected End Date.
   */
  declare projectedEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Can Use Alternate Project Budget.
   * @nullable
   */
  declare canUseAlternateProjectBudget?: NoYes | null;
  /**
   * Sorting Id 2.
   * @nullable
   */
  declare sortingId2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Can Use Budget Control.
   * @nullable
   */
  declare canUseBudgetControl?: NoYes | null;
  /**
   * Extension Date.
   */
  declare extensionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Project.
   * @nullable
   */
  declare parentProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Alternate Project.
   * @nullable
   */
  declare alternateProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Document Type.
   * @nullable
   */
  declare bankDocumentType?: BankLgDocumentType | null;
  /**
   * Start Date 1.
   */
  declare startDate1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Constraint Type.
   * @nullable
   */
  declare constraintType?: PsaConstraintType | null;
  /**
   * Customer Retention Term Id.
   * @nullable
   */
  declare customerRetentionTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alert Time Frame Weeks.
   */
  declare alertTimeFrameWeeks: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calendar.
   * @nullable
   */
  declare calendar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Activity Required For Hour Forecast.
   * @nullable
   */
  declare isActivityRequiredForHourForecast?: NoYes | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hour Validation.
   * @nullable
   */
  declare hourValidation?: PsapReqValidate | null;
  /**
   * Start Time.
   */
  declare startTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Zakat Contract Period.
   * @nullable
   */
  declare zakatContractPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zakat Contract Date.
   */
  declare zakatContractDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Activity Required For Expense Forecast.
   * @nullable
   */
  declare isActivityRequiredForExpenseForecast?: NoYes | null;
  /**
   * Is Activity Required For Item Transaction.
   * @nullable
   */
  declare isActivityRequiredForItemTransaction?: NoYes | null;
  /**
   * Posting Level.
   * @nullable
   */
  declare postingLevel?: DetailSummary | null;
  /**
   * Template Applied.
   * @nullable
   */
  declare templateApplied?: NoYes | null;
  /**
   * Projected Start Date.
   */
  declare projectedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Can Verify Cost Against Remaining Forecast.
   * @nullable
   */
  declare canVerifyCostAgainstRemainingForecast?: NoYes | null;
  /**
   * Psa Sched Ignore Calendar.
   * @nullable
   */
  declare psaSchedIgnoreCalendar?: NoYes | null;
  /**
   * Telephone.
   * @nullable
   */
  declare telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Budget Management.
   * @nullable
   */
  declare projectBudgetManagement?: ProjBudgetManagement | null;
  /**
   * Project Stage.
   * @nullable
   */
  declare projectStage?: ProjStatus | null;
  /**
   * Certified Payroll.
   * @nullable
   */
  declare certifiedPayroll?: NoYes | null;
  /**
   * Sorting Id 1.
   * @nullable
   */
  declare sortingId1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: PsaProjStatus | null;
  /**
   * Can Carry Forward Remaining Budgets.
   * @nullable
   */
  declare canCarryForwardRemainingBudgets?: NoYes | null;
  /**
   * Ledger Posting Sort Priority.
   * @nullable
   */
  declare ledgerPostingSortPriority?: ProjLedgerPosting | null;
  /**
   * Fax.
   * @nullable
   */
  declare fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Validation.
   * @nullable
   */
  declare itemValidation?: PsapReqValidate | null;
  /**
   * Actual Start Date.
   */
  declare actualStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Job Identification.
   * @nullable
   */
  declare jobIdentification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Overrun Default.
   * @nullable
   */
  declare budgetOverrunDefault?: ProjBudgetOverrunOption | null;
  /**
   * Search Priority.
   * @nullable
   */
  declare searchPriority?: ProjLinePropertySearch | null;
  /**
   * Zakat Contract Amendment.
   */
  declare zakatContractAmendment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Effort In Hours.
   */
  declare totalEffortInHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Negative Budgets To Be Carried Forward.
   * @nullable
   */
  declare allowNegativeBudgetsToBeCarriedForward?: NoYes | null;
  /**
   * Default Invoice Account.
   * @nullable
   */
  declare defaultInvoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Resp Sales Personnel Number.
   * @nullable
   */
  declare workerRespSalesPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Time Measure.
   * @nullable
   */
  declare timeMeasure?: PsaProjTimeMeasure | null;
  /**
   * Sales Price Group.
   * @nullable
   */
  declare salesPriceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Contract Id.
   * @nullable
   */
  declare projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Type.
   * @nullable
   */
  declare projectType?: ProjType | null;
  /**
   * Constraint Date.
   */
  declare constraintDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sorting Id 3.
   * @nullable
   */
  declare sortingId3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Time Increment.
   */
  declare minimumTimeIncrement: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Group.
   * @nullable
   */
  declare projectGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date 1.
   */
  declare endDate1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Duration In Days.
   */
  declare durationInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Ready For Invoicing.
   * @nullable
   */
  declare isReadyForInvoicing?: NoYes | null;
  /**
   * End Time.
   */
  declare endTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Milestone.
   * @nullable
   */
  declare milestone?: NoYes | null;
  /**
   * Worker Architect Personnel Number.
   * @nullable
   */
  declare workerArchitectPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Name.
   * @nullable
   */
  declare projectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Estimate Project Id.
   * @nullable
   */
  declare estimateProjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duration Determines End Date.
   * @nullable
   */
  declare durationDeterminesEndDate?: NoYes | null;
  /**
   * Budget Control Interval.
   * @nullable
   */
  declare budgetControlInterval?: ProjBudgetInterval | null;
  /**
   * Actual End Date.
   */
  declare actualEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Job Pay Type.
   * @nullable
   */
  declare jobPayType?: JmgJobPayTypeEnum | null;
  /**
   * One-to-many navigation property to the {@link SalesOrderHeadersV4} entity.
   */
  declare salesOrderHeaders: SalesOrderHeadersV4<T>[];
  /**
   * One-to-one navigation property to the {@link JournalTrans} entity.
   */
  declare journalTrans?: JournalTrans<T> | null;
  /**
   * One-to-many navigation property to the {@link BeginningBalanceCostSaleTransactions} entity.
   */
  declare beginningBalanceCostSaleTransaction: BeginningBalanceCostSaleTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectEmplForecasts} entity.
   */
  declare projectEmplForecast: ProjectEmplForecasts<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementConfirmationLines} entity.
   */
  declare purchaseAgreementLinesV2: PurchaseAgreementConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequisitionLinesV2} entity.
   */
  declare project: PurchaseRequisitionLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderLines} entity.
   */
  declare purchaseOrderLines: PurchaseOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link UbuyPurchaseRequisitionLines} entity.
   */
  declare ubuyPurchaseRequisitionLines: UbuyPurchaseRequisitionLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectExpenseForecasts} entity.
   */
  declare projectExpenseForecast: ProjectExpenseForecasts<T>[];
  /**
   * One-to-many navigation property to the {@link BeginningBalanceOnAccTransactions} entity.
   */
  declare beginningBalanceOnAccTransaction: BeginningBalanceOnAccTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link PersonProjectRoles} entity.
   */
  declare personProjectRole: PersonProjectRoles<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderConfirmationLines} entity.
   */
  declare purchaseOrderConfirmationLines: PurchaseOrderConfirmationLines<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectItemJournalTrans} entity.
   */
  declare projectItemJournalTrans?: ProjectItemJournalTrans<T> | null;
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link CdsSalesOrderHeaders} entity.
   */
  declare salesOrderHeadersCds: CdsSalesOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderConfirmationHeaders} entity.
   */
  declare purchaseOrderConfirmationHeaders: PurchaseOrderConfirmationHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmationLines} entity.
   */
  declare salesAgreementConfirmationLines: SalesAgreementConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementLines} entity.
   */
  declare salesAgreementLines: SalesAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectWbsDrafts} entity.
   */
  declare wbs: ProjectWbsDrafts<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementLines} entity.
   */
  declare purchaseAgreementLine: PurchaseAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link BeginningBalanceFeeTransactions} entity.
   */
  declare beginningBalanceFeeTransaction: BeginningBalanceFeeTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderParentProjectsV2} entity.
   */
  declare assetMaintenanceWorkOrderParentProjectsV2: AssetMaintenanceWorkOrderParentProjectsV2<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderHeaders} entity.
   */
  declare purchaseOrders: PurchaseOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreementLines} entity.
   */
  declare clmIntegrationPurchaseAgreementLines: ClmIntegrationPurchaseAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequisitionLines} entity.
   */
  declare purchaseRequisitionLines: PurchaseRequisitionLines<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceAgreementHeaders} entity.
   */
  declare serviceAgreementHeaders: ServiceAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderHeaders} entity.
   */
  declare serviceOrderHeaders: ServiceOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectOnAccForecasts} entity.
   */
  declare projectOnAccForecast: ProjectOnAccForecasts<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderParentProjects} entity.
   */
  declare assetMaintenanceWorkOrderParentProject: AssetMaintenanceWorkOrderParentProjects<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectItemForecasts} entity.
   */
  declare projectItemForecast: ProjectItemForecasts<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceAgreementLines} entity.
   */
  declare serviceAgreementLines: ServiceAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectDefaultOffsetAccounts} entity.
   */
  declare projectDefaultOffsetAccount: ProjectDefaultOffsetAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderLines} entity.
   */
  declare serviceOrderLines: ServiceOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectFeeForecasts} entity.
   */
  declare projectFeeForecast: ProjectFeeForecasts<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];

  constructor(_entityApi: ProjectsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  defaultOnSubprojects?: NoYes | null;
  projectOrTask?: PsaProjTask | null;
  fixedAssetNumber?: DeserializedType<T, 'Edm.String'> | null;
  activeRevision?: DeserializedType<T, 'Edm.String'> | null;
  isActivityRequiredForHourTransaction?: NoYes | null;
  percentToRetain: DeserializedType<T, 'Edm.Decimal'>;
  email?: DeserializedType<T, 'Edm.String'> | null;
  workerRespFinancialPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  requisitionOrPurchaseOrderControl?: PsapReqControl | null;
  dateOfCreation: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scheduleStatus?: PsaResSchedStatus | null;
  zakatProjectValue: DeserializedType<T, 'Edm.Decimal'>;
  workerResponsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  transactionTypesControlled?: ProjBudgetaryControlOn | null;
  category?: NoYes | null;
  isActivityRequiredForItemForecast?: NoYes | null;
  header?: NoYes | null;
  projectTemplate?: NoYes | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  invoicingMethod?: PsaInvoiceMethod | null;
  trackCost?: PsaProjTrackCost | null;
  isActivityRequiredForExpenseTransaction?: NoYes | null;
  invoiceCost?: NoYes | null;
  zakatSubject?: DeserializedType<T, 'Edm.String'> | null;
  externalRevision?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  taskCompletelyScheduled?: NoYes | null;
  subprojectIdFormat?: DeserializedType<T, 'Edm.String'> | null;
  projectedEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  canUseAlternateProjectBudget?: NoYes | null;
  sortingId2?: DeserializedType<T, 'Edm.String'> | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  canUseBudgetControl?: NoYes | null;
  extensionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  parentProject?: DeserializedType<T, 'Edm.String'> | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  alternateProject?: DeserializedType<T, 'Edm.String'> | null;
  bankDocumentType?: BankLgDocumentType | null;
  startDate1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  constraintType?: PsaConstraintType | null;
  customerRetentionTermId?: DeserializedType<T, 'Edm.String'> | null;
  alertTimeFrameWeeks: DeserializedType<T, 'Edm.Int32'>;
  calendar?: DeserializedType<T, 'Edm.String'> | null;
  isActivityRequiredForHourForecast?: NoYes | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  hourValidation?: PsapReqValidate | null;
  startTime: DeserializedType<T, 'Edm.Int32'>;
  zakatContractPeriod?: DeserializedType<T, 'Edm.String'> | null;
  zakatContractDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isActivityRequiredForExpenseForecast?: NoYes | null;
  isActivityRequiredForItemTransaction?: NoYes | null;
  postingLevel?: DetailSummary | null;
  templateApplied?: NoYes | null;
  projectedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  canVerifyCostAgainstRemainingForecast?: NoYes | null;
  psaSchedIgnoreCalendar?: NoYes | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  projectBudgetManagement?: ProjBudgetManagement | null;
  projectStage?: ProjStatus | null;
  certifiedPayroll?: NoYes | null;
  sortingId1?: DeserializedType<T, 'Edm.String'> | null;
  status?: PsaProjStatus | null;
  canCarryForwardRemainingBudgets?: NoYes | null;
  ledgerPostingSortPriority?: ProjLedgerPosting | null;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  itemValidation?: PsapReqValidate | null;
  actualStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobIdentification?: DeserializedType<T, 'Edm.String'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  budgetOverrunDefault?: ProjBudgetOverrunOption | null;
  searchPriority?: ProjLinePropertySearch | null;
  zakatContractAmendment: DeserializedType<T, 'Edm.Decimal'>;
  totalEffortInHours: DeserializedType<T, 'Edm.Decimal'>;
  allowNegativeBudgetsToBeCarriedForward?: NoYes | null;
  defaultInvoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  workerRespSalesPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  timeMeasure?: PsaProjTimeMeasure | null;
  salesPriceGroup?: DeserializedType<T, 'Edm.String'> | null;
  projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  projectType?: ProjType | null;
  constraintDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sortingId3?: DeserializedType<T, 'Edm.String'> | null;
  minimumTimeIncrement: DeserializedType<T, 'Edm.Decimal'>;
  projectGroup?: DeserializedType<T, 'Edm.String'> | null;
  endDate1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  durationInDays: DeserializedType<T, 'Edm.Decimal'>;
  isReadyForInvoicing?: NoYes | null;
  endTime: DeserializedType<T, 'Edm.Int32'>;
  milestone?: NoYes | null;
  workerArchitectPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectName?: DeserializedType<T, 'Edm.String'> | null;
  estimateProjectId?: DeserializedType<T, 'Edm.String'> | null;
  durationDeterminesEndDate?: NoYes | null;
  budgetControlInterval?: ProjBudgetInterval | null;
  actualEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobPayType?: JmgJobPayTypeEnum | null;
  salesOrderHeaders: SalesOrderHeadersV4Type<T>[];
  journalTrans?: JournalTransType<T> | null;
  beginningBalanceCostSaleTransaction: BeginningBalanceCostSaleTransactionsType<T>[];
  projectEmplForecast: ProjectEmplForecastsType<T>[];
  purchaseAgreementLinesV2: PurchaseAgreementConfirmationLinesType<T>[];
  project: PurchaseRequisitionLinesV2Type<T>[];
  purchaseOrderLines: PurchaseOrderLinesType<T>[];
  ubuyPurchaseRequisitionLines: UbuyPurchaseRequisitionLinesType<T>[];
  projectExpenseForecast: ProjectExpenseForecastsType<T>[];
  beginningBalanceOnAccTransaction: BeginningBalanceOnAccTransactionsType<T>[];
  personProjectRole: PersonProjectRolesType<T>[];
  purchaseOrderConfirmationLines: PurchaseOrderConfirmationLinesType<T>[];
  dimensionSet?: DimensionSetsType<T> | null;
  projectItemJournalTrans?: ProjectItemJournalTransType<T> | null;
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  salesOrderHeadersCds: CdsSalesOrderHeadersType<T>[];
  purchaseOrderConfirmationHeaders: PurchaseOrderConfirmationHeadersType<T>[];
  salesAgreementConfirmationLines: SalesAgreementConfirmationLinesType<T>[];
  salesAgreementLines: SalesAgreementLinesType<T>[];
  wbs: ProjectWbsDraftsType<T>[];
  purchaseAgreementLine: PurchaseAgreementLinesType<T>[];
  beginningBalanceFeeTransaction: BeginningBalanceFeeTransactionsType<T>[];
  assetMaintenanceWorkOrderParentProjectsV2: AssetMaintenanceWorkOrderParentProjectsV2Type<T>[];
  purchaseOrders: PurchaseOrderHeadersType<T>[];
  clmIntegrationPurchaseAgreementLines: ClmIntegrationPurchaseAgreementLinesType<T>[];
  purchaseRequisitionLines: PurchaseRequisitionLinesType<T>[];
  serviceAgreementHeaders: ServiceAgreementHeadersType<T>[];
  serviceOrderHeaders: ServiceOrderHeadersType<T>[];
  projectOnAccForecast: ProjectOnAccForecastsType<T>[];
  assetMaintenanceWorkOrderParentProject: AssetMaintenanceWorkOrderParentProjectsType<T>[];
  projectItemForecast: ProjectItemForecastsType<T>[];
  serviceAgreementLines: ServiceAgreementLinesType<T>[];
  projectDefaultOffsetAccount: ProjectDefaultOffsetAccountsType<T>[];
  serviceOrderLines: ServiceOrderLinesType<T>[];
  projectFeeForecast: ProjectFeeForecastsType<T>[];
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
}
