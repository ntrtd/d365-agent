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
import type { WorkerEnrolledBenefitDetailsApi } from './WorkerEnrolledBenefitDetailsApi';
import { PayrollContributionBasis } from './PayrollContributionBasis';
import { PayrollDeductionBasis } from './PayrollDeductionBasis';
import { PayrollBenefitRateSource } from './PayrollBenefitRateSource';
import { NoYes } from './NoYes';
import {
  WorkerEnrolledBenefits,
  WorkerEnrolledBenefitsType
} from './WorkerEnrolledBenefits';
import { PositionsV2, PositionsV2Type } from './PositionsV2';

/**
 * This class represents the entity "WorkerEnrolledBenefitDetails" of service "d365_metadata".
 */
export class WorkerEnrolledBenefitDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerEnrolledBenefitDetailsType<T>
{
  /**
   * Technical entity name for WorkerEnrolledBenefitDetails.
   */
  static override _entityName = 'WorkerEnrolledBenefitDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerEnrolledBenefitDetails entity.
   */
  static _keys = [
    'BenefitId',
    'PersonnelNumber',
    'EnrollmentStart',
    'EnrollmentEnd',
    'BenefitDetailValidFrom',
    'BenefitDetailValidTo'
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
   * Benefit Detail Valid From.
   */
  declare benefitDetailValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Benefit Detail Valid To.
   */
  declare benefitDetailValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Contribution Amount Cur.
   */
  declare contributionAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contribution Basis.
   * @nullable
   */
  declare contributionBasis?: PayrollContributionBasis | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduction Priority Number.
   */
  declare deductionPriorityNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Deduction Basis.
   * @nullable
   */
  declare deductionBasis?: PayrollDeductionBasis | null;
  /**
   * Contribution Rate Source.
   * @nullable
   */
  declare contributionRateSource?: PayrollBenefitRateSource | null;
  /**
   * Position Id.
   * @nullable
   */
  declare positionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Limit.
   * @nullable
   */
  declare overrideLimit?: NoYes | null;
  /**
   * Calculation Priority Number.
   */
  declare calculationPriorityNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduction Amount Cur.
   */
  declare deductionAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduction Rate Source.
   * @nullable
   */
  declare deductionRateSource?: PayrollBenefitRateSource | null;
  /**
   * Is Retirement Catch Up.
   * @nullable
   */
  declare isRetirementCatchUp?: NoYes | null;
  /**
   * Vend Account Num.
   * @nullable
   */
  declare vendAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WorkerEnrolledBenefits} entity.
   */
  declare workerEnrolledBenefit?: WorkerEnrolledBenefits<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare positionV2?: PositionsV2<T> | null;

  constructor(_entityApi: WorkerEnrolledBenefitDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerEnrolledBenefitDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  enrollmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  enrollmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitDetailValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitDetailValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  contributionAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  contributionBasis?: PayrollContributionBasis | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  deductionPriorityNumber: DeserializedType<T, 'Edm.Int64'>;
  deductionBasis?: PayrollDeductionBasis | null;
  contributionRateSource?: PayrollBenefitRateSource | null;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  overrideLimit?: NoYes | null;
  calculationPriorityNumber: DeserializedType<T, 'Edm.Int64'>;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  deductionAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  deductionRateSource?: PayrollBenefitRateSource | null;
  isRetirementCatchUp?: NoYes | null;
  vendAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  workerEnrolledBenefit?: WorkerEnrolledBenefitsType<T> | null;
  positionV2?: PositionsV2Type<T> | null;
}
