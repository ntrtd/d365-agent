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
import type { BenefitsPlanEmployeesApi } from './BenefitsPlanEmployeesApi';
import { NoYes } from './NoYes';
import { BenefitEmployeePlanStatus } from './BenefitEmployeePlanStatus';
import { BenefitPlanTypeCode } from './BenefitPlanTypeCode';
import { BenefitCoverageCode } from './BenefitCoverageCode';
import { BenefitLifeEventTypes } from './BenefitLifeEventTypes';
import { BenefitDesigneeType } from './BenefitDesigneeType';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "BenefitsPlanEmployees" of service "d365_metadata".
 */
export class BenefitsPlanEmployees<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsPlanEmployeesType<T>
{
  /**
   * Technical entity name for BenefitsPlanEmployees.
   */
  static override _entityName = 'BenefitsPlanEmployees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPlanEmployees entity.
   */
  static _keys = [
    'PersonnelNumber',
    'PlanPeriodId',
    'PlanId',
    'CoverageOptionId',
    'ValidFrom',
    'ValidTo'
  ];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Period Id.
   */
  declare planPeriodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Option Id.
   */
  declare coverageOptionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cancel Reason Code Id.
   * @nullable
   */
  declare cancelReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Life Event Prevent Sub Allocation.
   * @nullable
   */
  declare creditLifeEventPreventSubAllocation?: NoYes | null;
  /**
   * Plan Description.
   * @nullable
   */
  declare planDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Life Event Auto Cancel Plan Prev.
   * @nullable
   */
  declare lifeEventAutoCancelPlanPrev?: NoYes | null;
  /**
   * Ess Checked Out.
   * @nullable
   */
  declare essCheckedOut?: NoYes | null;
  /**
   * Cancellation By.
   * @nullable
   */
  declare cancellationBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Life Event Allow Cancellation Prev.
   * @nullable
   */
  declare lifeEventAllowCancellationPrev?: NoYes | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: BenefitEmployeePlanStatus | null;
  /**
   * Default Option.
   * @nullable
   */
  declare defaultOption?: NoYes | null;
  /**
   * Reason Code Id.
   * @nullable
   */
  declare reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plan Type Code.
   * @nullable
   */
  declare planTypeCode?: BenefitPlanTypeCode | null;
  /**
   * Program Id.
   * @nullable
   */
  declare programId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Life Event Allow Cancellation.
   * @nullable
   */
  declare lifeEventAllowCancellation?: NoYes | null;
  /**
   * Credit Applied Value.
   */
  declare creditAppliedValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * L Ife Event Change Coverage.
   * @nullable
   */
  declare lIfeEventChangeCoverage?: NoYes | null;
  /**
   * Cancellation Date Time.
   */
  declare cancellationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Life Event Auto Re Open Eligibility.
   * @nullable
   */
  declare lifeEventAutoReOpenEligibility?: NoYes | null;
  /**
   * Enrollment Start Date Time.
   */
  declare enrollmentStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Annual Contribution.
   */
  declare annualContribution: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Enrollment Confirmed Date Time.
   */
  declare enrollmentConfirmedDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Coverage End Date Time.
   */
  declare coverageEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Plan Type Id.
   * @nullable
   */
  declare planTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Administrative Start Date Time.
   */
  declare administrativeStartDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Pay Period.
   */
  declare payPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bundle Master.
   * @nullable
   */
  declare bundleMaster?: NoYes | null;
  /**
   * Life Event Auto Cancel Plan.
   * @nullable
   */
  declare lifeEventAutoCancelPlan?: NoYes | null;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Life Event Reporting Window Prev.
   */
  declare lifeEventReportingWindowPrev: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Life Event Change Coverage Prev.
   * @nullable
   */
  declare lifeEventChangeCoveragePrev?: NoYes | null;
  /**
   * Deduction End Date Time.
   */
  declare deductionEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Life Event Prev.
   * @nullable
   */
  declare lifeEventPrev?: NoYes | null;
  /**
   * Credit Life Event Prevent Add Allocation.
   * @nullable
   */
  declare creditLifeEventPreventAddAllocation?: NoYes | null;
  /**
   * Deduction Start Date Time.
   */
  declare deductionStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Coverage Code.
   * @nullable
   */
  declare coverageCode?: BenefitCoverageCode | null;
  /**
   * Period Employee Name.
   * @nullable
   */
  declare periodEmployeeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Employee.
   */
  declare amountEmployee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cancellation.
   * @nullable
   */
  declare cancellation?: NoYes | null;
  /**
   * Credit Life Event Open Allocation.
   * @nullable
   */
  declare creditLifeEventOpenAllocation?: NoYes | null;
  /**
   * Credit Has Rate.
   * @nullable
   */
  declare creditHasRate?: NoYes | null;
  /**
   * Life Event Auto Re Open Eligibility Prev.
   * @nullable
   */
  declare lifeEventAutoReOpenEligibilityPrev?: NoYes | null;
  /**
   * Life Event Change To New Plan.
   * @nullable
   */
  declare lifeEventChangeToNewPlan?: NoYes | null;
  /**
   * Life Event Change To New Plan Prev.
   * @nullable
   */
  declare lifeEventChangeToNewPlanPrev?: NoYes | null;
  /**
   * Life Event Types.
   * @nullable
   */
  declare lifeEventTypes?: BenefitLifeEventTypes | null;
  /**
   * Life Event Reporting Window.
   */
  declare lifeEventReportingWindow: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Plan Type Designee Type.
   * @nullable
   */
  declare planTypeDesigneeType?: BenefitDesigneeType | null;
  /**
   * Re Open Reason Code Id.
   * @nullable
   */
  declare reOpenReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Coverage Start Date Time.
   */
  declare coverageStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount Admin.
   */
  declare amountAdmin: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Coverage Amount.
   */
  declare coverageAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Enrollment Confirmed.
   * @nullable
   */
  declare enrollmentConfirmed?: NoYes | null;
  /**
   * Enrollment Confirmed By.
   * @nullable
   */
  declare enrollmentConfirmedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Life Event.
   * @nullable
   */
  declare lifeEvent?: NoYes | null;
  /**
   * Amount Employer.
   */
  declare amountEmployer: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bundled Id.
   * @nullable
   */
  declare bundledId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: BenefitsPlanEmployeesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPlanEmployeesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  planPeriodId: DeserializedType<T, 'Edm.String'>;
  planId: DeserializedType<T, 'Edm.String'>;
  coverageOptionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cancelReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  creditLifeEventPreventSubAllocation?: NoYes | null;
  planDescription?: DeserializedType<T, 'Edm.String'> | null;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  lifeEventAutoCancelPlanPrev?: NoYes | null;
  essCheckedOut?: NoYes | null;
  cancellationBy?: DeserializedType<T, 'Edm.String'> | null;
  lifeEventAllowCancellationPrev?: NoYes | null;
  status?: BenefitEmployeePlanStatus | null;
  defaultOption?: NoYes | null;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  planTypeCode?: BenefitPlanTypeCode | null;
  programId?: DeserializedType<T, 'Edm.String'> | null;
  lifeEventAllowCancellation?: NoYes | null;
  creditAppliedValue: DeserializedType<T, 'Edm.Decimal'>;
  lIfeEventChangeCoverage?: NoYes | null;
  cancellationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lifeEventAutoReOpenEligibility?: NoYes | null;
  enrollmentStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  annualContribution: DeserializedType<T, 'Edm.Decimal'>;
  enrollmentConfirmedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  coverageEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  planTypeId?: DeserializedType<T, 'Edm.String'> | null;
  administrativeStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payPeriod: DeserializedType<T, 'Edm.Int32'>;
  bundleMaster?: NoYes | null;
  lifeEventAutoCancelPlan?: NoYes | null;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  lifeEventReportingWindowPrev: DeserializedType<T, 'Edm.Int32'>;
  lifeEventChangeCoveragePrev?: NoYes | null;
  deductionEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lifeEventPrev?: NoYes | null;
  creditLifeEventPreventAddAllocation?: NoYes | null;
  deductionStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  coverageCode?: BenefitCoverageCode | null;
  periodEmployeeName?: DeserializedType<T, 'Edm.String'> | null;
  amountEmployee: DeserializedType<T, 'Edm.Decimal'>;
  cancellation?: NoYes | null;
  creditLifeEventOpenAllocation?: NoYes | null;
  creditHasRate?: NoYes | null;
  lifeEventAutoReOpenEligibilityPrev?: NoYes | null;
  lifeEventChangeToNewPlan?: NoYes | null;
  lifeEventChangeToNewPlanPrev?: NoYes | null;
  lifeEventTypes?: BenefitLifeEventTypes | null;
  lifeEventReportingWindow: DeserializedType<T, 'Edm.Int32'>;
  planTypeDesigneeType?: BenefitDesigneeType | null;
  reOpenReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  coverageStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountAdmin: DeserializedType<T, 'Edm.Decimal'>;
  coverageAmount: DeserializedType<T, 'Edm.Decimal'>;
  enrollmentConfirmed?: NoYes | null;
  enrollmentConfirmedBy?: DeserializedType<T, 'Edm.String'> | null;
  lifeEvent?: NoYes | null;
  amountEmployer: DeserializedType<T, 'Edm.Decimal'>;
  bundledId?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
}
