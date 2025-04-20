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
import type { WorkerEnrolledBenefitInquiriesApi } from './WorkerEnrolledBenefitInquiriesApi';
import { PayrollBenefitRateSource } from './PayrollBenefitRateSource';
import { PayrollDeductionBasis } from './PayrollDeductionBasis';
import { PayrollCategory } from './PayrollCategory';
import { PayrollContributionBasis } from './PayrollContributionBasis';
import { Workers, WorkersType } from './Workers';
import { Benefits, BenefitsType } from './Benefits';

/**
 * This class represents the entity "WorkerEnrolledBenefitInquiries" of service "d365_metadata".
 */
export class WorkerEnrolledBenefitInquiries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerEnrolledBenefitInquiriesType<T>
{
  /**
   * Technical entity name for WorkerEnrolledBenefitInquiries.
   */
  static override _entityName = 'WorkerEnrolledBenefitInquiries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerEnrolledBenefitInquiries entity.
   */
  static _keys = ['ValidFrom', 'ValidTo'];
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Deduction Rate Source.
   * @nullable
   */
  declare deductionRateSource?: PayrollBenefitRateSource | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduction Basis.
   * @nullable
   */
  declare deductionBasis?: PayrollDeductionBasis | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduction Amount Cur.
   */
  declare deductionAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Benefit Plan And Option.
   * @nullable
   */
  declare benefitPlanAndOption?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payroll Category.
   * @nullable
   */
  declare payrollCategory?: PayrollCategory | null;
  /**
   * Contribution Basis.
   * @nullable
   */
  declare contributionBasis?: PayrollContributionBasis | null;
  /**
   * Contribution Rate Source.
   * @nullable
   */
  declare contributionRateSource?: PayrollBenefitRateSource | null;
  /**
   * Benefit Type Id.
   * @nullable
   */
  declare benefitTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contribution Amount Cur.
   */
  declare contributionAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Benefit Id.
   * @nullable
   */
  declare benefitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Benefits} entity.
   */
  declare benefit?: Benefits<T> | null;

  constructor(_entityApi: WorkerEnrolledBenefitInquiriesApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerEnrolledBenefitInquiriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deductionRateSource?: PayrollBenefitRateSource | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  deductionBasis?: PayrollDeductionBasis | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  deductionAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  benefitPlanAndOption?: DeserializedType<T, 'Edm.String'> | null;
  payrollCategory?: PayrollCategory | null;
  contributionBasis?: PayrollContributionBasis | null;
  contributionRateSource?: PayrollBenefitRateSource | null;
  benefitTypeId?: DeserializedType<T, 'Edm.String'> | null;
  contributionAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  benefitId?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
  benefit?: BenefitsType<T> | null;
}
