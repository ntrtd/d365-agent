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
import type { PositionsV2Api } from './PositionsV2Api';
import { NoYes } from './NoYes';
import {
  PayIntV1HcmPositionDetails,
  PayIntV1HcmPositionDetailsType
} from './PayIntV1HcmPositionDetails';
import {
  OnboardingWorkerChecklistTasks,
  OnboardingWorkerChecklistTasksType
} from './OnboardingWorkerChecklistTasks';
import {
  PositionWorkerAssignmentsV2,
  PositionWorkerAssignmentsV2Type
} from './PositionWorkerAssignmentsV2';
import {
  PositionWorkerDefaultTaxRgns,
  PositionWorkerDefaultTaxRgnsType
} from './PositionWorkerDefaultTaxRgns';
import { InjuryIncidents, InjuryIncidentsType } from './InjuryIncidents';
import {
  RecruitingRequestPositions,
  RecruitingRequestPositionsType
} from './RecruitingRequestPositions';
import { PositionDetails, PositionDetailsType } from './PositionDetails';
import {
  PayrollFixedCompensationPlans,
  PayrollFixedCompensationPlansType
} from './PayrollFixedCompensationPlans';
import {
  WorkerPositionEarningCodesV2,
  WorkerPositionEarningCodesV2Type
} from './WorkerPositionEarningCodesV2';
import {
  PositionDefaultDimensions,
  PositionDefaultDimensionsType
} from './PositionDefaultDimensions';
import {
  PayIntV1HcmPositionHierarchies,
  PayIntV1HcmPositionHierarchiesType
} from './PayIntV1HcmPositionHierarchies';
import {
  IntV1PayrollFixedCompensationPlans,
  IntV1PayrollFixedCompensationPlansType
} from './IntV1PayrollFixedCompensationPlans';
import {
  WorkerPositionEarningCodes,
  WorkerPositionEarningCodesType
} from './WorkerPositionEarningCodes';
import {
  OnboardProcessTasksDualWrite,
  OnboardProcessTasksDualWriteType
} from './OnboardProcessTasksDualWrite';
import { PositionDurations, PositionDurationsType } from './PositionDurations';
import {
  PositionWorkerAssignments,
  PositionWorkerAssignmentsType
} from './PositionWorkerAssignments';
import {
  PayIntV1PayrollPositions,
  PayIntV1PayrollPositionsType
} from './PayIntV1PayrollPositions';
import { CandidatesToHire, CandidatesToHireType } from './CandidatesToHire';
import { PayrollPositions, PayrollPositionsType } from './PayrollPositions';
import {
  PositionHierarchies,
  PositionHierarchiesType
} from './PositionHierarchies';
import {
  OnboardingChecklistTemplateTasks,
  OnboardingChecklistTemplateTasksType
} from './OnboardingChecklistTemplateTasks';
import {
  OnboardingLibraryTasks,
  OnboardingLibraryTasksType
} from './OnboardingLibraryTasks';
import {
  PayStatementEarningLines,
  PayStatementEarningLinesType
} from './PayStatementEarningLines';
import { PayCycles, PayCyclesType } from './PayCycles';
import { Titles, TitlesType } from './Titles';
import { Departments, DepartmentsType } from './Departments';
import { Jobs, JobsType } from './Jobs';
import {
  CompensationRegions,
  CompensationRegionsType
} from './CompensationRegions';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';
import { PositionTypes, PositionTypesType } from './PositionTypes';
import { Workers, WorkersType } from './Workers';
import {
  WorkerEnrolledBenefitDetails,
  WorkerEnrolledBenefitDetailsType
} from './WorkerEnrolledBenefitDetails';
import {
  ProcessGroupAssignmentMembers,
  ProcessGroupAssignmentMembersType
} from './ProcessGroupAssignmentMembers';
import {
  EarningStatementLineInquiries,
  EarningStatementLineInquiriesType
} from './EarningStatementLineInquiries';
import {
  PositionUnionAgreements,
  PositionUnionAgreementsType
} from './PositionUnionAgreements';

/**
 * This class represents the entity "PositionsV2" of service "d365_metadata".
 */
export class PositionsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PositionsV2Type<T>
{
  /**
   * Technical entity name for PositionsV2.
   */
  static override _entityName = 'PositionsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionsV2 entity.
   */
  static _keys = ['PositionId'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Detail Effective.
   */
  declare detailEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pay Cycle Id.
   * @nullable
   */
  declare payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Type Id.
   * @nullable
   */
  declare positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payroll Detail Effective.
   */
  declare payrollDetailEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retirement.
   */
  declare retirement: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Department Number.
   * @nullable
   */
  declare departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Id.
   * @nullable
   */
  declare jobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Annual Regular Hours.
   */
  declare annualRegularHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Full Time Equivalent.
   */
  declare fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Worker Assignment End.
   */
  declare workerAssignmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Detail Expiration.
   */
  declare detailExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Name.
   * @nullable
   */
  declare workerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activation.
   */
  declare activation: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Personnel Number.
   * @nullable
   */
  declare workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Assignment Reason Code Id.
   * @nullable
   */
  declare workerAssignmentReasonCodeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Assignment Start.
   */
  declare workerAssignmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Available For Assignment.
   */
  declare availableForAssignment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payroll Detail Expiration.
   */
  declare payrollDetailExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Paid By Legal Entity.
   * @nullable
   */
  declare paidByLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Compensation Region Id.
   * @nullable
   */
  declare compensationRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Period Overtime Hours.
   */
  declare payPeriodOvertimeHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Salary Generated.
   * @nullable
   */
  declare isSalaryGenerated?: NoYes | null;
  /**
   * Schedule.
   * @nullable
   */
  declare schedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Benefit Id.
   * @nullable
   */
  declare benefitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Earnings Generated From Schedule.
   * @nullable
   */
  declare areEarningsGeneratedFromSchedule?: NoYes | null;
  /**
   * Default Earning Code Id.
   * @nullable
   */
  declare defaultEarningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PayIntV1HcmPositionDetails} entity.
   */
  declare payIntDetails: PayIntV1HcmPositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link OnboardingWorkerChecklistTasks} entity.
   */
  declare checklistTasks: OnboardingWorkerChecklistTasks<T>[];
  /**
   * One-to-many navigation property to the {@link PositionWorkerAssignmentsV2} entity.
   */
  declare workerAssignmentsV2: PositionWorkerAssignmentsV2<T>[];
  /**
   * One-to-one navigation property to the {@link PositionWorkerDefaultTaxRgns} entity.
   */
  declare positionWorkerDefaultTaxRgn?: PositionWorkerDefaultTaxRgns<T> | null;
  /**
   * One-to-many navigation property to the {@link InjuryIncidents} entity.
   */
  declare injuryIncidents: InjuryIncidents<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequestPositions} entity.
   */
  declare recruitingRequestPositions: RecruitingRequestPositions<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequestPositions} entity.
   */
  declare recruitingRequestPositionPositions: RecruitingRequestPositions<T>[];
  /**
   * One-to-many navigation property to the {@link PositionDetails} entity.
   */
  declare details: PositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link PayrollFixedCompensationPlans} entity.
   */
  declare payrollFixedCompensationPlan: PayrollFixedCompensationPlans<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerPositionEarningCodesV2} entity.
   */
  declare workerPositionEarningCodeV2: WorkerPositionEarningCodesV2<T>[];
  /**
   * One-to-many navigation property to the {@link PositionDefaultDimensions} entity.
   */
  declare positionDefaultDimensions: PositionDefaultDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link PayIntV1HcmPositionHierarchies} entity.
   */
  declare payIntParentPositions: PayIntV1HcmPositionHierarchies<T>[];
  /**
   * One-to-many navigation property to the {@link PayIntV1HcmPositionHierarchies} entity.
   */
  declare payIntReportingPositions: PayIntV1HcmPositionHierarchies<T>[];
  /**
   * One-to-many navigation property to the {@link IntV1PayrollFixedCompensationPlans} entity.
   */
  declare intV1PayrollFixedCompensationPlan: IntV1PayrollFixedCompensationPlans<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerPositionEarningCodes} entity.
   */
  declare workerPositionEarningCode: WorkerPositionEarningCodes<T>[];
  /**
   * One-to-many navigation property to the {@link OnboardProcessTasksDualWrite} entity.
   */
  declare positions: OnboardProcessTasksDualWrite<T>[];
  /**
   * One-to-many navigation property to the {@link PositionDurations} entity.
   */
  declare durations: PositionDurations<T>[];
  /**
   * One-to-many navigation property to the {@link PositionWorkerAssignments} entity.
   */
  declare workerAssignments: PositionWorkerAssignments<T>[];
  /**
   * One-to-one navigation property to the {@link PayIntV1PayrollPositions} entity.
   */
  declare payIntV1PayrollPosition?: PayIntV1PayrollPositions<T> | null;
  /**
   * One-to-many navigation property to the {@link CandidatesToHire} entity.
   */
  declare candidatesToHire: CandidatesToHire<T>[];
  /**
   * One-to-one navigation property to the {@link PayrollPositions} entity.
   */
  declare payrollPosition?: PayrollPositions<T> | null;
  /**
   * One-to-many navigation property to the {@link PositionHierarchies} entity.
   */
  declare parentPositions: PositionHierarchies<T>[];
  /**
   * One-to-many navigation property to the {@link PositionHierarchies} entity.
   */
  declare reportingPositions: PositionHierarchies<T>[];
  /**
   * One-to-many navigation property to the {@link OnboardingChecklistTemplateTasks} entity.
   */
  declare checklistTemplateTasks: OnboardingChecklistTemplateTasks<T>[];
  /**
   * One-to-many navigation property to the {@link OnboardingLibraryTasks} entity.
   */
  declare libraryTasks: OnboardingLibraryTasks<T>[];
  /**
   * One-to-many navigation property to the {@link PayStatementEarningLines} entity.
   */
  declare payStatementEarningLine: PayStatementEarningLines<T>[];
  /**
   * One-to-one navigation property to the {@link PayCycles} entity.
   */
  declare payrollPayCycle?: PayCycles<T> | null;
  /**
   * One-to-one navigation property to the {@link Titles} entity.
   */
  declare title?: Titles<T> | null;
  /**
   * One-to-one navigation property to the {@link Departments} entity.
   */
  declare department?: Departments<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionDefaultDimensions} entity.
   */
  declare positionDefaultDimension?: PositionDefaultDimensions<T> | null;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationRegions} entity.
   */
  declare compensationRegion?: CompensationRegions<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCode?: ReasonCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionTypes} entity.
   */
  declare positionType?: PositionTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-many navigation property to the {@link WorkerEnrolledBenefitDetails} entity.
   */
  declare workerEnrolledBenefitDetails: WorkerEnrolledBenefitDetails<T>[];
  /**
   * One-to-many navigation property to the {@link ProcessGroupAssignmentMembers} entity.
   */
  declare groupAssignmentMemberships: ProcessGroupAssignmentMembers<T>[];
  /**
   * One-to-many navigation property to the {@link EarningStatementLineInquiries} entity.
   */
  declare earningStatementLineInquiry: EarningStatementLineInquiries<T>[];
  /**
   * One-to-many navigation property to the {@link PositionUnionAgreements} entity.
   */
  declare unionAgreements: PositionUnionAgreements<T>[];

  constructor(_entityApi: PositionsV2Api<T>) {
    super(_entityApi);
  }
}

export interface PositionsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  detailEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  payrollDetailEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retirement: DeserializedType<T, 'Edm.DateTimeOffset'>;
  departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  jobId?: DeserializedType<T, 'Edm.String'> | null;
  annualRegularHours: DeserializedType<T, 'Edm.Decimal'>;
  fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  workerAssignmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  detailExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerName?: DeserializedType<T, 'Edm.String'> | null;
  activation: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  workerAssignmentReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  workerAssignmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  availableForAssignment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payrollDetailExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paidByLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  compensationRegionId?: DeserializedType<T, 'Edm.String'> | null;
  payPeriodOvertimeHours: DeserializedType<T, 'Edm.Decimal'>;
  isSalaryGenerated?: NoYes | null;
  schedule?: DeserializedType<T, 'Edm.String'> | null;
  benefitId?: DeserializedType<T, 'Edm.String'> | null;
  areEarningsGeneratedFromSchedule?: NoYes | null;
  defaultEarningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  payIntDetails: PayIntV1HcmPositionDetailsType<T>[];
  checklistTasks: OnboardingWorkerChecklistTasksType<T>[];
  workerAssignmentsV2: PositionWorkerAssignmentsV2Type<T>[];
  positionWorkerDefaultTaxRgn?: PositionWorkerDefaultTaxRgnsType<T> | null;
  injuryIncidents: InjuryIncidentsType<T>[];
  recruitingRequestPositions: RecruitingRequestPositionsType<T>[];
  recruitingRequestPositionPositions: RecruitingRequestPositionsType<T>[];
  details: PositionDetailsType<T>[];
  payrollFixedCompensationPlan: PayrollFixedCompensationPlansType<T>[];
  workerPositionEarningCodeV2: WorkerPositionEarningCodesV2Type<T>[];
  positionDefaultDimensions: PositionDefaultDimensionsType<T>[];
  payIntParentPositions: PayIntV1HcmPositionHierarchiesType<T>[];
  payIntReportingPositions: PayIntV1HcmPositionHierarchiesType<T>[];
  intV1PayrollFixedCompensationPlan: IntV1PayrollFixedCompensationPlansType<T>[];
  workerPositionEarningCode: WorkerPositionEarningCodesType<T>[];
  positions: OnboardProcessTasksDualWriteType<T>[];
  durations: PositionDurationsType<T>[];
  workerAssignments: PositionWorkerAssignmentsType<T>[];
  payIntV1PayrollPosition?: PayIntV1PayrollPositionsType<T> | null;
  candidatesToHire: CandidatesToHireType<T>[];
  payrollPosition?: PayrollPositionsType<T> | null;
  parentPositions: PositionHierarchiesType<T>[];
  reportingPositions: PositionHierarchiesType<T>[];
  checklistTemplateTasks: OnboardingChecklistTemplateTasksType<T>[];
  libraryTasks: OnboardingLibraryTasksType<T>[];
  payStatementEarningLine: PayStatementEarningLinesType<T>[];
  payrollPayCycle?: PayCyclesType<T> | null;
  title?: TitlesType<T> | null;
  department?: DepartmentsType<T> | null;
  positionDefaultDimension?: PositionDefaultDimensionsType<T> | null;
  job?: JobsType<T> | null;
  compensationRegion?: CompensationRegionsType<T> | null;
  reasonCode?: ReasonCodesType<T> | null;
  positionType?: PositionTypesType<T> | null;
  worker?: WorkersType<T> | null;
  workerEnrolledBenefitDetails: WorkerEnrolledBenefitDetailsType<T>[];
  groupAssignmentMemberships: ProcessGroupAssignmentMembersType<T>[];
  earningStatementLineInquiry: EarningStatementLineInquiriesType<T>[];
  unionAgreements: PositionUnionAgreementsType<T>[];
}
