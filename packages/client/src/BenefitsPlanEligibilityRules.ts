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
import type { BenefitsPlanEligibilityRulesApi } from './BenefitsPlanEligibilityRulesApi';
import { BenefitRuleStartDate } from './BenefitRuleStartDate';
import { BenefitAction } from './BenefitAction';
import { BenefitsPlans, BenefitsPlansType } from './BenefitsPlans';
import {
  BenefitsWaitingPeriods,
  BenefitsWaitingPeriodsType
} from './BenefitsWaitingPeriods';
import {
  BenefitsEligibilityRules,
  BenefitsEligibilityRulesType
} from './BenefitsEligibilityRules';

/**
 * This class represents the entity "BenefitsPlanEligibilityRules" of service "d365_metadata".
 */
export class BenefitsPlanEligibilityRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsPlanEligibilityRulesType<T>
{
  /**
   * Technical entity name for BenefitsPlanEligibilityRules.
   */
  static override _entityName = 'BenefitsPlanEligibilityRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPlanEligibilityRules entity.
   */
  static _keys = ['PlanId', 'EligibilityRuleId', 'LineNumber'];
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * Eligibility Rule Id.
   */
  declare eligibilityRuleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Date.
   * @nullable
   */
  declare sourceDate?: BenefitRuleStartDate | null;
  /**
   * Deduction Waiting Period Id.
   * @nullable
   */
  declare deductionWaitingPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Action Type.
   * @nullable
   */
  declare actionType?: BenefitAction | null;
  /**
   * Coverage Waiting Period Id.
   * @nullable
   */
  declare coverageWaitingPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsPlans} entity.
   */
  declare benefitsPlan?: BenefitsPlans<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsWaitingPeriods} entity.
   */
  declare benefitsWaitingPeriod?: BenefitsWaitingPeriods<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsEligibilityRules} entity.
   */
  declare benefitsEligibilityRule?: BenefitsEligibilityRules<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsWaitingPeriods} entity.
   */
  declare benefitsDeductionWaitingPeriod?: BenefitsWaitingPeriods<T> | null;

  constructor(_entityApi: BenefitsPlanEligibilityRulesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPlanEligibilityRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  planId: DeserializedType<T, 'Edm.String'>;
  eligibilityRuleId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  sourceDate?: BenefitRuleStartDate | null;
  deductionWaitingPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  actionType?: BenefitAction | null;
  coverageWaitingPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  benefitsPlan?: BenefitsPlansType<T> | null;
  benefitsWaitingPeriod?: BenefitsWaitingPeriodsType<T> | null;
  benefitsEligibilityRule?: BenefitsEligibilityRulesType<T> | null;
  benefitsDeductionWaitingPeriod?: BenefitsWaitingPeriodsType<T> | null;
}
