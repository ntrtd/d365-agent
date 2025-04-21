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
import type { ProjectsV2Api } from './ProjectsV2Api';
import { NoYes } from './NoYes';
import { BankLgDocumentType } from './BankLgDocumentType';
import { ProjStatus } from './ProjStatus';
import { ProjBudgetInterval } from './ProjBudgetInterval';
import { DetailSummary } from './DetailSummary';
import { ProjBudgetOverrunOption } from './ProjBudgetOverrunOption';
import { ProjBudgetManagement } from './ProjBudgetManagement';
import { ProjLedgerPosting } from './ProjLedgerPosting';
import { ProjBudgetaryControlOn } from './ProjBudgetaryControlOn';
import { ProjLinePropertySearch } from './ProjLinePropertySearch';
import {
  EngineeringChangeOrderHeaders,
  EngineeringChangeOrderHeadersType
} from './EngineeringChangeOrderHeaders';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "ProjectsV2" of service "d365_metadata".
 */
export class ProjectsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectsV2Type<T>
{
  /**
   * Technical entity name for ProjectsV2.
   */
  static override _entityName = 'ProjectsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectsV2 entity.
   */
  static _keys = ['dataAreaId', 'ProjectId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Actual Start Date.
   */
  declare actualStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Ocip General Liability.
   * @nullable
   */
  declare isOcipGeneralLiability?: NoYes | null;
  /**
   * Sales Manager Personnel Number.
   * @nullable
   */
  declare salesManagerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Can Verify Cost Against Remaining Forecast.
   * @nullable
   */
  declare canVerifyCostAgainstRemainingForecast?: NoYes | null;
  /**
   * Can Carry Forward Remaining Budgets.
   * @nullable
   */
  declare canCarryForwardRemainingBudgets?: NoYes | null;
  /**
   * Bank Document Type.
   * @nullable
   */
  declare bankDocumentType?: BankLgDocumentType | null;
  /**
   * Subproject Id Format.
   * @nullable
   */
  declare subprojectIdFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price Group Id.
   * @nullable
   */
  declare salesPriceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Activity Required For Hour Forecast.
   * @nullable
   */
  declare isActivityRequiredForHourForecast?: NoYes | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Estimate Project Id.
   * @nullable
   */
  declare estimateProjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Project Id.
   * @nullable
   */
  declare parentProjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zakat Contract Amendment.
   */
  declare zakatContractAmendment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Schedule Date.
   */
  declare defaultScheduleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Budget Control Enabled.
   * @nullable
   */
  declare isBudgetControlEnabled?: NoYes | null;
  /**
   * Is Activity Required For Item Transaction.
   * @nullable
   */
  declare isActivityRequiredForItemTransaction?: NoYes | null;
  /**
   * Zakat Contract Period.
   * @nullable
   */
  declare zakatContractPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scheduling Calendar Id.
   * @nullable
   */
  declare schedulingCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Negative Budgets To Be Carried Forward.
   * @nullable
   */
  declare allowNegativeBudgetsToBeCarriedForward?: NoYes | null;
  /**
   * Project Stage.
   * @nullable
   */
  declare projectStage?: ProjStatus | null;
  /**
   * Is Project Template.
   * @nullable
   */
  declare isProjectTemplate?: NoYes | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zakat Project Value.
   */
  declare zakatProjectValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Budget Control Interval.
   * @nullable
   */
  declare budgetControlInterval?: ProjBudgetInterval | null;
  /**
   * Date Of Creation.
   */
  declare dateOfCreation: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Schedule Start Date.
   */
  declare scheduleStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Posting Level.
   * @nullable
   */
  declare postingLevel?: DetailSummary | null;
  /**
   * Extension Date.
   */
  declare extensionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Budget Overrun Default.
   * @nullable
   */
  declare budgetOverrunDefault?: ProjBudgetOverrunOption | null;
  /**
   * Project Name.
   * @nullable
   */
  declare projectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Manager Personnel Number.
   * @nullable
   */
  declare projectManagerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Controller Personnel Number.
   * @nullable
   */
  declare projectControllerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Schedule End Date.
   */
  declare scheduleEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Projected Start Date.
   */
  declare projectedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Project Category Validation Enabled.
   * @nullable
   */
  declare isProjectCategoryValidationEnabled?: NoYes | null;
  /**
   * Is Header.
   * @nullable
   */
  declare isHeader?: NoYes | null;
  /**
   * Architect Personnel Number.
   * @nullable
   */
  declare architectPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Activity Required For Expense Transaction.
   * @nullable
   */
  declare isActivityRequiredForExpenseTransaction?: NoYes | null;
  /**
   * Is Activity Required For Item Forecast.
   * @nullable
   */
  declare isActivityRequiredForItemForecast?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Projected End Date.
   */
  declare projectedEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Template Applied.
   * @nullable
   */
  declare isTemplateApplied?: NoYes | null;
  /**
   * Actual End Date.
   */
  declare actualEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Can Use Alternate Project Budget.
   * @nullable
   */
  declare canUseAlternateProjectBudget?: NoYes | null;
  /**
   * Project Budget Management.
   * @nullable
   */
  declare projectBudgetManagement?: ProjBudgetManagement | null;
  /**
   * Schedule Duration In Days.
   */
  declare scheduleDurationInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Posting Sort Priority.
   * @nullable
   */
  declare ledgerPostingSortPriority?: ProjLedgerPosting | null;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Types Controlled.
   * @nullable
   */
  declare transactionTypesControlled?: ProjBudgetaryControlOn | null;
  /**
   * Alternate Project Id.
   * @nullable
   */
  declare alternateProjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Group Id.
   * @nullable
   */
  declare projectGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Invoice Account.
   * @nullable
   */
  declare defaultInvoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Identification.
   * @nullable
   */
  declare jobIdentification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Property Search Priority.
   * @nullable
   */
  declare linePropertySearchPriority?: ProjLinePropertySearch | null;
  /**
   * Total Planned Effort In Hours.
   */
  declare totalPlannedEffortInHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Certified Payroll.
   * @nullable
   */
  declare isCertifiedPayroll?: NoYes | null;
  /**
   * Is Activity Required For Hour Transaction.
   * @nullable
   */
  declare isActivityRequiredForHourTransaction?: NoYes | null;
  /**
   * Is Resource Calendar Ignored.
   * @nullable
   */
  declare isResourceCalendarIgnored?: NoYes | null;
  /**
   * Project Contract Id.
   * @nullable
   */
  declare projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Ocip Worker Compensation.
   * @nullable
   */
  declare isOcipWorkerCompensation?: NoYes | null;
  /**
   * Integration Source Data Id.
   * @nullable
   */
  declare integrationSourceDataId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Id.
   * @nullable
   */
  declare salesTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sorting Field 3.
   * @nullable
   */
  declare sortingField3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sorting Field 2.
   * @nullable
   */
  declare sortingField2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sorting Field 1.
   * @nullable
   */
  declare sortingField1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zakat Subject.
   * @nullable
   */
  declare zakatSubject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderHeaders} entity.
   */
  declare engineeringChangeOrderHeaders: EngineeringChangeOrderHeaders<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: ProjectsV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProjectsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  actualStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isOcipGeneralLiability?: NoYes | null;
  salesManagerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  canVerifyCostAgainstRemainingForecast?: NoYes | null;
  canCarryForwardRemainingBudgets?: NoYes | null;
  bankDocumentType?: BankLgDocumentType | null;
  subprojectIdFormat?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isActivityRequiredForHourForecast?: NoYes | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  estimateProjectId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  parentProjectId?: DeserializedType<T, 'Edm.String'> | null;
  zakatContractAmendment: DeserializedType<T, 'Edm.Decimal'>;
  defaultScheduleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isBudgetControlEnabled?: NoYes | null;
  isActivityRequiredForItemTransaction?: NoYes | null;
  zakatContractPeriod?: DeserializedType<T, 'Edm.String'> | null;
  schedulingCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  allowNegativeBudgetsToBeCarriedForward?: NoYes | null;
  projectStage?: ProjStatus | null;
  isProjectTemplate?: NoYes | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  zakatProjectValue: DeserializedType<T, 'Edm.Decimal'>;
  budgetControlInterval?: ProjBudgetInterval | null;
  dateOfCreation: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scheduleStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  zakatContractDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isActivityRequiredForExpenseForecast?: NoYes | null;
  postingLevel?: DetailSummary | null;
  extensionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  budgetOverrunDefault?: ProjBudgetOverrunOption | null;
  projectName?: DeserializedType<T, 'Edm.String'> | null;
  projectManagerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectControllerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  scheduleEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isProjectCategoryValidationEnabled?: NoYes | null;
  isHeader?: NoYes | null;
  architectPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isActivityRequiredForExpenseTransaction?: NoYes | null;
  isActivityRequiredForItemForecast?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  projectedEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isTemplateApplied?: NoYes | null;
  actualEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  canUseAlternateProjectBudget?: NoYes | null;
  projectBudgetManagement?: ProjBudgetManagement | null;
  scheduleDurationInDays: DeserializedType<T, 'Edm.Decimal'>;
  ledgerPostingSortPriority?: ProjLedgerPosting | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  transactionTypesControlled?: ProjBudgetaryControlOn | null;
  alternateProjectId?: DeserializedType<T, 'Edm.String'> | null;
  projectGroupId?: DeserializedType<T, 'Edm.String'> | null;
  defaultInvoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  jobIdentification?: DeserializedType<T, 'Edm.String'> | null;
  linePropertySearchPriority?: ProjLinePropertySearch | null;
  totalPlannedEffortInHours: DeserializedType<T, 'Edm.Decimal'>;
  isCertifiedPayroll?: NoYes | null;
  isActivityRequiredForHourTransaction?: NoYes | null;
  isResourceCalendarIgnored?: NoYes | null;
  projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  isOcipWorkerCompensation?: NoYes | null;
  integrationSourceDataId?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  sortingField3?: DeserializedType<T, 'Edm.String'> | null;
  sortingField2?: DeserializedType<T, 'Edm.String'> | null;
  sortingField1?: DeserializedType<T, 'Edm.String'> | null;
  zakatSubject?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeOrderHeaders: EngineeringChangeOrderHeadersType<T>[];
  dimensionSet?: DimensionSetsType<T> | null;
}
