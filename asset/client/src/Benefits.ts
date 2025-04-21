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
import type { BenefitsApi } from './BenefitsApi';
import {
  WorkerEnrolledBenefitInquiries,
  WorkerEnrolledBenefitInquiriesType
} from './WorkerEnrolledBenefitInquiries';
import {
  DisposableIncomeBenefits,
  DisposableIncomeBenefitsType
} from './DisposableIncomeBenefits';
import { BenefitPlans, BenefitPlansType } from './BenefitPlans';
import { BenefitOptions, BenefitOptionsType } from './BenefitOptions';
import {
  BenefitEarningBasis,
  BenefitEarningBasisType
} from './BenefitEarningBasis';
import { BenefitHcmDetails, BenefitHcmDetailsType } from './BenefitHcmDetails';
import {
  WorkerEnrolledBenefits,
  WorkerEnrolledBenefitsType
} from './WorkerEnrolledBenefits';
import {
  BenefitEligibilityOverrides,
  BenefitEligibilityOverridesType
} from './BenefitEligibilityOverrides';
import {
  PayStatementBenefitLines,
  PayStatementBenefitLinesType
} from './PayStatementBenefitLines';
import { BenefitDetails, BenefitDetailsType } from './BenefitDetails';
import {
  PayrollPositionDetails,
  PayrollPositionDetailsType
} from './PayrollPositionDetails';
import {
  DeductionArrearRecoveries,
  DeductionArrearRecoveriesType
} from './DeductionArrearRecoveries';
import {
  TotalCompStatementSectionBenefits,
  TotalCompStatementSectionBenefitsType
} from './TotalCompStatementSectionBenefits';
import { Positions, PositionsType } from './Positions';
import {
  PayStatementBenefitLineInquiries,
  PayStatementBenefitLineInquiriesType
} from './PayStatementBenefitLineInquiries';
import { DeductionArrears, DeductionArrearsType } from './DeductionArrears';

/**
 * This class represents the entity "Benefits" of service "d365_metadata".
 */
export class Benefits<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitsType<T>
{
  /**
   * Technical entity name for Benefits.
   */
  static override _entityName = 'Benefits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Benefits entity.
   */
  static _keys = [
    'BenefitPlanId',
    'BenefitOptionId',
    'Effective',
    'Expiration'
  ];
  /**
   * Benefit Plan Id.
   */
  declare benefitPlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Benefit Option Id.
   */
  declare benefitOptionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective.
   */
  declare effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expiration.
   */
  declare expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Benefit Id.
   * @nullable
   */
  declare benefitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link WorkerEnrolledBenefitInquiries} entity.
   */
  declare workerEnrolledBenefitInquiry: WorkerEnrolledBenefitInquiries<T>[];
  /**
   * One-to-many navigation property to the {@link DisposableIncomeBenefits} entity.
   */
  declare disposableIncomeBenefits: DisposableIncomeBenefits<T>[];
  /**
   * One-to-one navigation property to the {@link BenefitPlans} entity.
   */
  declare benefitPlan?: BenefitPlans<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitOptions} entity.
   */
  declare benefitOption?: BenefitOptions<T> | null;
  /**
   * One-to-many navigation property to the {@link BenefitEarningBasis} entity.
   */
  declare benefitEarningBasis: BenefitEarningBasis<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitHcmDetails} entity.
   */
  declare benefitDetails: BenefitHcmDetails<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerEnrolledBenefits} entity.
   */
  declare workerEnrolledBenefits: WorkerEnrolledBenefits<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitEligibilityOverrides} entity.
   */
  declare benefitEligibilityOverrides: BenefitEligibilityOverrides<T>[];
  /**
   * One-to-many navigation property to the {@link PayStatementBenefitLines} entity.
   */
  declare payStatementBenefitLine: PayStatementBenefitLines<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitDetails} entity.
   */
  declare benefitDetail: BenefitDetails<T>[];
  /**
   * One-to-many navigation property to the {@link PayrollPositionDetails} entity.
   */
  declare payrollPositionDetail: PayrollPositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link DeductionArrearRecoveries} entity.
   */
  declare deductionArrearRecovery: DeductionArrearRecoveries<T>[];
  /**
   * One-to-many navigation property to the {@link TotalCompStatementSectionBenefits} entity.
   */
  declare totalCompStatementSectionBenefit: TotalCompStatementSectionBenefits<T>[];
  /**
   * One-to-many navigation property to the {@link Positions} entity.
   */
  declare positions: Positions<T>[];
  /**
   * One-to-many navigation property to the {@link PayStatementBenefitLineInquiries} entity.
   */
  declare payStatementBenefitLines: PayStatementBenefitLineInquiries<T>[];
  /**
   * One-to-many navigation property to the {@link DeductionArrears} entity.
   */
  declare deductionArrear: DeductionArrears<T>[];

  constructor(_entityApi: BenefitsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsType<T extends DeSerializers = DefaultDeSerializers> {
  benefitPlanId: DeserializedType<T, 'Edm.String'>;
  benefitOptionId: DeserializedType<T, 'Edm.String'>;
  effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitId?: DeserializedType<T, 'Edm.String'> | null;
  workerEnrolledBenefitInquiry: WorkerEnrolledBenefitInquiriesType<T>[];
  disposableIncomeBenefits: DisposableIncomeBenefitsType<T>[];
  benefitPlan?: BenefitPlansType<T> | null;
  benefitOption?: BenefitOptionsType<T> | null;
  benefitEarningBasis: BenefitEarningBasisType<T>[];
  benefitDetails: BenefitHcmDetailsType<T>[];
  workerEnrolledBenefits: WorkerEnrolledBenefitsType<T>[];
  benefitEligibilityOverrides: BenefitEligibilityOverridesType<T>[];
  payStatementBenefitLine: PayStatementBenefitLinesType<T>[];
  benefitDetail: BenefitDetailsType<T>[];
  payrollPositionDetail: PayrollPositionDetailsType<T>[];
  deductionArrearRecovery: DeductionArrearRecoveriesType<T>[];
  totalCompStatementSectionBenefit: TotalCompStatementSectionBenefitsType<T>[];
  positions: PositionsType<T>[];
  payStatementBenefitLines: PayStatementBenefitLineInquiriesType<T>[];
  deductionArrear: DeductionArrearsType<T>[];
}
