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
import type { RetirementBenefitPlanDetailsApi } from './RetirementBenefitPlanDetailsApi';
import { PayrollContributionLimitMethod } from './PayrollContributionLimitMethod';
import { PayrollRetirementType } from './PayrollRetirementType';
import { BenefitPlans, BenefitPlansType } from './BenefitPlans';

/**
 * This class represents the entity "RetirementBenefitPlanDetails" of service "d365_metadata".
 */
export class RetirementBenefitPlanDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetirementBenefitPlanDetailsType<T>
{
  /**
   * Technical entity name for RetirementBenefitPlanDetails.
   */
  static override _entityName = 'RetirementBenefitPlanDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetirementBenefitPlanDetails entity.
   */
  static _keys = ['BenefitPlanID'];
  /**
   * Benefit Plan Id.
   */
  declare benefitPlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contribution Limit Method.
   * @nullable
   */
  declare contributionLimitMethod?: PayrollContributionLimitMethod | null;
  /**
   * Retirement Type.
   * @nullable
   */
  declare retirementType?: PayrollRetirementType | null;
  /**
   * One-to-one navigation property to the {@link BenefitPlans} entity.
   */
  declare benefitPlan?: BenefitPlans<T> | null;

  constructor(_entityApi: RetirementBenefitPlanDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface RetirementBenefitPlanDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitPlanId: DeserializedType<T, 'Edm.String'>;
  contributionLimitMethod?: PayrollContributionLimitMethod | null;
  retirementType?: PayrollRetirementType | null;
  benefitPlan?: BenefitPlansType<T> | null;
}
