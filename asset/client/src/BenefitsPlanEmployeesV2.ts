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
import type { BenefitsPlanEmployeesV2Api } from './BenefitsPlanEmployeesV2Api';
import { BenefitLifeEventTypes } from './BenefitLifeEventTypes';
import { NoYes } from './NoYes';
import { BenefitEmployeePlanStatus } from './BenefitEmployeePlanStatus';
import { BenefitPlanTypeCode } from './BenefitPlanTypeCode';
import { BenefitCoverageCode } from './BenefitCoverageCode';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "BenefitsPlanEmployeesV2" of service "d365_metadata".
 */
export class BenefitsPlanEmployeesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsPlanEmployeesV2Type<T>
{
  /**
   * Technical entity name for BenefitsPlanEmployeesV2.
   */
  static override _entityName = 'BenefitsPlanEmployeesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPlanEmployeesV2 entity.
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
   * Reopen Reason Code Id.
   * @nullable
   */
  declare reopenReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Empl Life Event Types.
   * @nullable
   */
  declare periodEmplLifeEventTypes?: BenefitLifeEventTypes | null;
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
   * Enrollment Reason Code Id.
   * @nullable
   */
  declare enrollmentReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Benefit Credit Has Rate.
   * @nullable
   */
  declare benefitCreditHasRate?: NoYes | null;
  /**
   * Benefit Credit Applied Value.
   */
  declare benefitCreditAppliedValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Option.
   * @nullable
   */
  declare defaultOption?: NoYes | null;
  /**
   * Cancellation Reason Code Id.
   * @nullable
   */
  declare cancellationReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Benefit Credit Life Event Prevent Sub Allocation.
   * @nullable
   */
  declare benefitCreditLifeEventPreventSubAllocation?: NoYes | null;
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
   * Benefit Credit Life Event Open Allocation.
   * @nullable
   */
  declare benefitCreditLifeEventOpenAllocation?: NoYes | null;
  /**
   * Life Event Benefit Credit Applied Value.
   */
  declare lifeEventBenefitCreditAppliedValue: DeserializedType<
    T,
    'Edm.Decimal'
  >;
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
   * Cancel Reopen Link.
   */
  declare cancelReopenLink: DeserializedType<T, 'Edm.Int64'>;
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
   * Deduction Start Date Time.
   */
  declare deductionStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Coverage Code.
   * @nullable
   */
  declare coverageCode?: BenefitCoverageCode | null;
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
   * Life Event Reporting Window.
   */
  declare lifeEventReportingWindow: DeserializedType<T, 'Edm.Int32'>;
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
   * Benefit Credit Life Event Prevent Add Allocation.
   * @nullable
   */
  declare benefitCreditLifeEventPreventAddAllocation?: NoYes | null;
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

  constructor(_entityApi: BenefitsPlanEmployeesV2Api<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPlanEmployeesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  planPeriodId: DeserializedType<T, 'Edm.String'>;
  planId: DeserializedType<T, 'Edm.String'>;
  coverageOptionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reopenReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  periodEmplLifeEventTypes?: BenefitLifeEventTypes | null;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  lifeEventAutoCancelPlanPrev?: NoYes | null;
  essCheckedOut?: NoYes | null;
  enrollmentReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  cancellationBy?: DeserializedType<T, 'Edm.String'> | null;
  lifeEventAllowCancellationPrev?: NoYes | null;
  status?: BenefitEmployeePlanStatus | null;
  benefitCreditHasRate?: NoYes | null;
  benefitCreditAppliedValue: DeserializedType<T, 'Edm.Decimal'>;
  defaultOption?: NoYes | null;
  cancellationReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  planTypeCode?: BenefitPlanTypeCode | null;
  programId?: DeserializedType<T, 'Edm.String'> | null;
  lifeEventAllowCancellation?: NoYes | null;
  benefitCreditLifeEventPreventSubAllocation?: NoYes | null;
  lIfeEventChangeCoverage?: NoYes | null;
  cancellationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lifeEventAutoReOpenEligibility?: NoYes | null;
  enrollmentStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  annualContribution: DeserializedType<T, 'Edm.Decimal'>;
  enrollmentConfirmedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  coverageEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitCreditLifeEventOpenAllocation?: NoYes | null;
  lifeEventBenefitCreditAppliedValue: DeserializedType<T, 'Edm.Decimal'>;
  administrativeStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payPeriod: DeserializedType<T, 'Edm.Int32'>;
  bundleMaster?: NoYes | null;
  lifeEventAutoCancelPlan?: NoYes | null;
  cancelReopenLink: DeserializedType<T, 'Edm.Int64'>;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  lifeEventReportingWindowPrev: DeserializedType<T, 'Edm.Int32'>;
  lifeEventChangeCoveragePrev?: NoYes | null;
  deductionEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lifeEventPrev?: NoYes | null;
  deductionStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  coverageCode?: BenefitCoverageCode | null;
  amountEmployee: DeserializedType<T, 'Edm.Decimal'>;
  cancellation?: NoYes | null;
  lifeEventAutoReOpenEligibilityPrev?: NoYes | null;
  lifeEventChangeToNewPlan?: NoYes | null;
  lifeEventChangeToNewPlanPrev?: NoYes | null;
  lifeEventReportingWindow: DeserializedType<T, 'Edm.Int32'>;
  coverageStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountAdmin: DeserializedType<T, 'Edm.Decimal'>;
  coverageAmount: DeserializedType<T, 'Edm.Decimal'>;
  enrollmentConfirmed?: NoYes | null;
  enrollmentConfirmedBy?: DeserializedType<T, 'Edm.String'> | null;
  lifeEvent?: NoYes | null;
  benefitCreditLifeEventPreventAddAllocation?: NoYes | null;
  amountEmployer: DeserializedType<T, 'Edm.Decimal'>;
  bundledId?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
}
