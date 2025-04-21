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
import type { BenefitsCoverageOptionsApi } from './BenefitsCoverageOptionsApi';
import { NoYes } from './NoYes';
import { BenefitCoverageCode } from './BenefitCoverageCode';
import { BenefitStatus } from './BenefitStatus';
import {
  BenefitsCoverageOptionPersonalContactsEligibilityOptions,
  BenefitsCoverageOptionPersonalContactsEligibilityOptionsType
} from './BenefitsCoverageOptionPersonalContactsEligibilityOptions';
import {
  PayrollWorkerBenefitPlans,
  PayrollWorkerBenefitPlansType
} from './PayrollWorkerBenefitPlans';
import {
  BenefitsPlanTypeCoverageOptions,
  BenefitsPlanTypeCoverageOptionsType
} from './BenefitsPlanTypeCoverageOptions';

/**
 * This class represents the entity "BenefitsCoverageOptions" of service "d365_metadata".
 */
export class BenefitsCoverageOptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsCoverageOptionsType<T>
{
  /**
   * Technical entity name for BenefitsCoverageOptions.
   */
  static override _entityName = 'BenefitsCoverageOptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsCoverageOptions entity.
   */
  static _keys = ['CoverageOptionId'];
  /**
   * Coverage Option Id.
   */
  declare coverageOptionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Coverage Amount For Ess.
   * @nullable
   */
  declare allowCoverageAmountForEss?: NoYes | null;
  /**
   * Allow Employee Contribution Amount For Ess.
   * @nullable
   */
  declare allowEmployeeContributionAmountForEss?: NoYes | null;
  /**
   * Divisor.
   */
  declare divisor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percent Maximum.
   */
  declare percentMaximum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Coverage Code.
   * @nullable
   */
  declare coverageCode?: BenefitCoverageCode | null;
  /**
   * Percent Minimum.
   */
  declare percentMinimum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Max Number Of Dependents Or Beneficiaries.
   */
  declare maxNumberOfDependentsOrBeneficiaries: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Status.
   * @nullable
   */
  declare status?: BenefitStatus | null;
  /**
   * One-to-many navigation property to the {@link BenefitsCoverageOptionPersonalContactsEligibilityOptions} entity.
   */
  declare benefitsCoverageOptionPersonalContactsEligibilityOption: BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>[];
  /**
   * One-to-one navigation property to the {@link PayrollWorkerBenefitPlans} entity.
   */
  declare payrollWorkerBenefitPlan?: PayrollWorkerBenefitPlans<T> | null;
  /**
   * One-to-many navigation property to the {@link BenefitsPlanTypeCoverageOptions} entity.
   */
  declare benefitPlanTypeCoverageOptions: BenefitsPlanTypeCoverageOptions<T>[];

  constructor(_entityApi: BenefitsCoverageOptionsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsCoverageOptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  coverageOptionId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  allowCoverageAmountForEss?: NoYes | null;
  allowEmployeeContributionAmountForEss?: NoYes | null;
  divisor: DeserializedType<T, 'Edm.Decimal'>;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  percentMaximum: DeserializedType<T, 'Edm.Decimal'>;
  coverageCode?: BenefitCoverageCode | null;
  percentMinimum: DeserializedType<T, 'Edm.Decimal'>;
  maxNumberOfDependentsOrBeneficiaries: DeserializedType<T, 'Edm.Int32'>;
  status?: BenefitStatus | null;
  benefitsCoverageOptionPersonalContactsEligibilityOption: BenefitsCoverageOptionPersonalContactsEligibilityOptionsType<T>[];
  payrollWorkerBenefitPlan?: PayrollWorkerBenefitPlansType<T> | null;
  benefitPlanTypeCoverageOptions: BenefitsPlanTypeCoverageOptionsType<T>[];
}
