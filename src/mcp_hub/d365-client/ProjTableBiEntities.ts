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
import type { ProjTableBiEntitiesApi } from './ProjTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { BankLgDocumentType } from './BankLgDocumentType';
import { ProjBudgetOverrunOption } from './ProjBudgetOverrunOption';
import { ProjStatus } from './ProjStatus';
import { PsaProjStatus } from './PsaProjStatus';
import { ProjType } from './ProjType';
import { ProjLinePropertySearch } from './ProjLinePropertySearch';
import { ProjBudgetManagement } from './ProjBudgetManagement';
import { DetailSummary } from './DetailSummary';
import { ProjBudgetInterval } from './ProjBudgetInterval';
import { PsaResSchedStatus } from './PsaResSchedStatus';
import { ProjLedgerPosting } from './ProjLedgerPosting';
import { PsaScheduled } from './PsaScheduled';
import { JmgJobPayTypeEnum } from './JmgJobPayTypeEnum';
import { PsaInvoiceMethod } from './PsaInvoiceMethod';
import { ProjBudgetaryControlOn } from './ProjBudgetaryControlOn';

/**
 * This class represents the entity "ProjTableBiEntities" of service "d365_metadata".
 */
export class ProjTableBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjTableBiEntitiesType<T>
{
  /**
   * Technical entity name for ProjTableBiEntities.
   */
  static override _entityName = 'ProjTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'ProjId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Id.
   */
  declare projId: DeserializedType<T, 'Edm.String'>;
  /**
   * Certified Payroll.
   * @nullable
   */
  declare certifiedPayroll?: NoYes | null;
  /**
   * Proj Data Source.
   */
  declare projDataSource: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Document Type.
   * @nullable
   */
  declare bankDocumentType?: BankLgDocumentType | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Use Alternate Project.
   * @nullable
   */
  declare useAlternateProject?: NoYes | null;
  /**
   * Worker Responsible Sales.
   */
  declare workerResponsibleSales: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ocipgl.
   * @nullable
   */
  declare ocipgl?: NoYes | null;
  /**
   * Contract Date Sa.
   */
  declare contractDateSa: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Location.
   */
  declare deliveryLocation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Psa Sched Duration.
   */
  declare psaSchedDuration: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dlv Name.
   * @nullable
   */
  declare dlvName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternate Budget Project.
   * @nullable
   */
  declare alternateBudgetProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Budget Overrun Option.
   * @nullable
   */
  declare projBudgetOverrunOption?: ProjBudgetOverrunOption | null;
  /**
   * Created.
   */
  declare created: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Price Group.
   * @nullable
   */
  declare projPriceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Require Activity Expense Forecast.
   * @nullable
   */
  declare requireActivityExpenseForecast?: NoYes | null;
  /**
   * Alert Time Frame Weeks.
   */
  declare alertTimeFrameWeeks: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: ProjStatus | null;
  /**
   * Format.
   * @nullable
   */
  declare format?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Carry Forward Remaining Budget.
   * @nullable
   */
  declare projCarryForwardRemainingBudget?: NoYes | null;
  /**
   * Tax Group Id.
   * @nullable
   */
  declare taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psa Proj Status.
   * @nullable
   */
  declare psaProjStatus?: PsaProjStatus | null;
  /**
   * Subject Sa.
   * @nullable
   */
  declare subjectSa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: ProjType | null;
  /**
   * Require Activity Item Forecast.
   * @nullable
   */
  declare requireActivityItemForecast?: NoYes | null;
  /**
   * Min Time Increment.
   */
  declare minTimeIncrement: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Psa Sched Use Duration.
   * @nullable
   */
  declare psaSchedUseDuration?: NoYes | null;
  /**
   * Proj Line Property Search.
   * @nullable
   */
  declare projLinePropertySearch?: ProjLinePropertySearch | null;
  /**
   * Psa Sched From Time.
   */
  declare psaSchedFromTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Psa Forecast Model Id.
   * @nullable
   */
  declare psaForecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Value Sa.
   */
  declare contractValueSa: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ocip.
   * @nullable
   */
  declare ocip?: NoYes | null;
  /**
   * Extension Date.
   */
  declare extensionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Budget Management.
   * @nullable
   */
  declare projBudgetManagement?: ProjBudgetManagement | null;
  /**
   * Worker Responsible Financial.
   */
  declare workerResponsibleFinancial: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Projected Start Date.
   */
  declare projectedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Check Budget.
   * @nullable
   */
  declare checkBudget?: NoYes | null;
  /**
   * Time Post Detail Summary.
   * @nullable
   */
  declare timePostDetailSummary?: DetailSummary | null;
  /**
   * Proj Budget Interval.
   * @nullable
   */
  declare projBudgetInterval?: ProjBudgetInterval | null;
  /**
   * Require Activity Hour Forecast.
   * @nullable
   */
  declare requireActivityHourForecast?: NoYes | null;
  /**
   * Psa Sched Effort.
   */
  declare psaSchedEffort: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Psa Sched Start Date.
   */
  declare psaSchedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Psa Sched To Time.
   */
  declare psaSchedToTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Require Activity Hour Trx.
   * @nullable
   */
  declare requireActivityHourTrx?: NoYes | null;
  /**
   * Psa Res Sched Status.
   * @nullable
   */
  declare psaResSchedStatus?: PsaResSchedStatus | null;
  /**
   * Proj Ledger Posting.
   * @nullable
   */
  declare projLedgerPosting?: ProjLedgerPosting | null;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Period Sa.
   * @nullable
   */
  declare contractPeriodSa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Invoice Proj Id.
   * @nullable
   */
  declare projInvoiceProjId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Template.
   * @nullable
   */
  declare template?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psa Sched Scheduled.
   * @nullable
   */
  declare psaSchedScheduled?: PsaScheduled | null;
  /**
   * Projected End Date.
   */
  declare projectedEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Contract Amendment Sa.
   */
  declare contractAmendmentSa: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Parent Id.
   * @nullable
   */
  declare parentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Funding Source.
   */
  declare defaultFundingSource: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Psa Sched Calendar Id.
   * @nullable
   */
  declare psaSchedCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Carry Forward Negative Budget.
   * @nullable
   */
  declare projCarryForwardNegativeBudget?: NoYes | null;
  /**
   * Job Pay Type.
   * @nullable
   */
  declare jobPayType?: JmgJobPayTypeEnum | null;
  /**
   * Psa Forecast Model Id External.
   * @nullable
   */
  declare psaForecastModelIdExternal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psa Sched End Date.
   */
  declare psaSchedEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Use Budgeting.
   * @nullable
   */
  declare useBudgeting?: NoYes | null;
  /**
   * Psa Invoice Method.
   * @nullable
   */
  declare psaInvoiceMethod?: PsaInvoiceMethod | null;
  /**
   * Job Id.
   * @nullable
   */
  declare jobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Psa Sched Ignore Calendar.
   * @nullable
   */
  declare psaSchedIgnoreCalendar?: NoYes | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Require Activity Expense Trx.
   * @nullable
   */
  declare requireActivityExpenseTrx?: NoYes | null;
  /**
   * Worker Responsible.
   */
  declare workerResponsible: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Header.
   * @nullable
   */
  declare header?: NoYes | null;
  /**
   * Proj Group Id.
   * @nullable
   */
  declare projGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validate Proj Category.
   * @nullable
   */
  declare validateProjCategory?: NoYes | null;
  /**
   * Psa Do Invoice Cost.
   * @nullable
   */
  declare psaDoInvoiceCost?: NoYes | null;
  /**
   * Proj Budgetary Control On.
   * @nullable
   */
  declare projBudgetaryControlOn?: ProjBudgetaryControlOn | null;
  /**
   * Template Applied.
   * @nullable
   */
  declare templateApplied?: NoYes | null;
  /**
   * Wip Project.
   * @nullable
   */
  declare wipProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Complete Scheduled.
   * @nullable
   */
  declare completeScheduled?: NoYes | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Require Activity Item Trx.
   * @nullable
   */
  declare requireActivityItemTrx?: NoYes | null;
  /**
   * Worker Psa Architect.
   */
  declare workerPsaArchitect: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: ProjTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projId: DeserializedType<T, 'Edm.String'>;
  certifiedPayroll?: NoYes | null;
  projDataSource: DeserializedType<T, 'Edm.Int64'>;
  bankDocumentType?: BankLgDocumentType | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  useAlternateProject?: NoYes | null;
  workerResponsibleSales: DeserializedType<T, 'Edm.Int64'>;
  ocipgl?: NoYes | null;
  contractDateSa: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryLocation: DeserializedType<T, 'Edm.Int64'>;
  psaSchedDuration: DeserializedType<T, 'Edm.Decimal'>;
  dlvName?: DeserializedType<T, 'Edm.String'> | null;
  alternateBudgetProject?: DeserializedType<T, 'Edm.String'> | null;
  projBudgetOverrunOption?: ProjBudgetOverrunOption | null;
  created: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projPriceGroup?: DeserializedType<T, 'Edm.String'> | null;
  requireActivityExpenseForecast?: NoYes | null;
  alertTimeFrameWeeks: DeserializedType<T, 'Edm.Int32'>;
  status?: ProjStatus | null;
  format?: DeserializedType<T, 'Edm.String'> | null;
  projCarryForwardRemainingBudget?: NoYes | null;
  taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  psaProjStatus?: PsaProjStatus | null;
  subjectSa?: DeserializedType<T, 'Edm.String'> | null;
  type?: ProjType | null;
  requireActivityItemForecast?: NoYes | null;
  minTimeIncrement: DeserializedType<T, 'Edm.Decimal'>;
  psaSchedUseDuration?: NoYes | null;
  projLinePropertySearch?: ProjLinePropertySearch | null;
  psaSchedFromTime: DeserializedType<T, 'Edm.Int32'>;
  psaForecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  contractValueSa: DeserializedType<T, 'Edm.Decimal'>;
  ocip?: NoYes | null;
  extensionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projBudgetManagement?: ProjBudgetManagement | null;
  workerResponsibleFinancial: DeserializedType<T, 'Edm.Int64'>;
  projectedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  checkBudget?: NoYes | null;
  timePostDetailSummary?: DetailSummary | null;
  projBudgetInterval?: ProjBudgetInterval | null;
  requireActivityHourForecast?: NoYes | null;
  psaSchedEffort: DeserializedType<T, 'Edm.Decimal'>;
  psaSchedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  psaSchedToTime: DeserializedType<T, 'Edm.Int32'>;
  requireActivityHourTrx?: NoYes | null;
  psaResSchedStatus?: PsaResSchedStatus | null;
  projLedgerPosting?: ProjLedgerPosting | null;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  contractPeriodSa?: DeserializedType<T, 'Edm.String'> | null;
  projInvoiceProjId?: DeserializedType<T, 'Edm.String'> | null;
  template?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  psaSchedScheduled?: PsaScheduled | null;
  projectedEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  contractAmendmentSa: DeserializedType<T, 'Edm.Decimal'>;
  parentId?: DeserializedType<T, 'Edm.String'> | null;
  defaultFundingSource: DeserializedType<T, 'Edm.Int64'>;
  psaSchedCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  projCarryForwardNegativeBudget?: NoYes | null;
  jobPayType?: JmgJobPayTypeEnum | null;
  psaForecastModelIdExternal?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  psaSchedEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  useBudgeting?: NoYes | null;
  psaInvoiceMethod?: PsaInvoiceMethod | null;
  jobId?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  psaSchedIgnoreCalendar?: NoYes | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  requireActivityExpenseTrx?: NoYes | null;
  workerResponsible: DeserializedType<T, 'Edm.Int64'>;
  header?: NoYes | null;
  projGroupId?: DeserializedType<T, 'Edm.String'> | null;
  validateProjCategory?: NoYes | null;
  psaDoInvoiceCost?: NoYes | null;
  projBudgetaryControlOn?: ProjBudgetaryControlOn | null;
  templateApplied?: NoYes | null;
  wipProject?: DeserializedType<T, 'Edm.String'> | null;
  completeScheduled?: NoYes | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  requireActivityItemTrx?: NoYes | null;
  workerPsaArchitect: DeserializedType<T, 'Edm.Int64'>;
}
