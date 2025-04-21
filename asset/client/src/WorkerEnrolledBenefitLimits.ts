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
import type { WorkerEnrolledBenefitLimitsApi } from './WorkerEnrolledBenefitLimitsApi';
import { PayrollLimitPeriod } from './PayrollLimitPeriod';
import {
  WorkerEnrolledBenefits,
  WorkerEnrolledBenefitsType
} from './WorkerEnrolledBenefits';

/**
 * This class represents the entity "WorkerEnrolledBenefitLimits" of service "d365_metadata".
 */
export class WorkerEnrolledBenefitLimits<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerEnrolledBenefitLimitsType<T>
{
  /**
   * Technical entity name for WorkerEnrolledBenefitLimits.
   */
  static override _entityName = 'WorkerEnrolledBenefitLimits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerEnrolledBenefitLimits entity.
   */
  static _keys = [
    'BenefitId',
    'PersonnelNumber',
    'EnrollmentStart',
    'EnrollmentEnd'
  ];
  /**
   * Benefit Id.
   */
  declare benefitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Enrollment Start.
   */
  declare enrollmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Enrollment End.
   */
  declare enrollmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Deduction Limit Period.
   * @nullable
   */
  declare deductionLimitPeriod?: PayrollLimitPeriod | null;
  /**
   * Deduction Limit End Date.
   */
  declare deductionLimitEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Contribution Limit Period Remaining.
   */
  declare contributionLimitPeriodRemaining: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contribution Limit Period.
   * @nullable
   */
  declare contributionLimitPeriod?: PayrollLimitPeriod | null;
  /**
   * Deduction Limit Period Remaining.
   */
  declare deductionLimitPeriodRemaining: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deduction Limit Amount.
   */
  declare deductionLimitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contribution Limit Amount.
   */
  declare contributionLimitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contribution Limit End Date.
   */
  declare contributionLimitEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link WorkerEnrolledBenefits} entity.
   */
  declare workerEnrolledBenefit?: WorkerEnrolledBenefits<T> | null;

  constructor(_entityApi: WorkerEnrolledBenefitLimitsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerEnrolledBenefitLimitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  enrollmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  enrollmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deductionLimitPeriod?: PayrollLimitPeriod | null;
  deductionLimitEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  contributionLimitPeriodRemaining: DeserializedType<T, 'Edm.Decimal'>;
  contributionLimitPeriod?: PayrollLimitPeriod | null;
  deductionLimitPeriodRemaining: DeserializedType<T, 'Edm.Decimal'>;
  deductionLimitAmount: DeserializedType<T, 'Edm.Decimal'>;
  contributionLimitAmount: DeserializedType<T, 'Edm.Decimal'>;
  contributionLimitEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerEnrolledBenefit?: WorkerEnrolledBenefitsType<T> | null;
}
