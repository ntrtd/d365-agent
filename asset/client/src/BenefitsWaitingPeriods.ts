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
import type { BenefitsWaitingPeriodsApi } from './BenefitsWaitingPeriodsApi';
import { BenefitWaitingPeriodMethod } from './BenefitWaitingPeriodMethod';
import {
  BenefitsPlanEligibilityRules,
  BenefitsPlanEligibilityRulesType
} from './BenefitsPlanEligibilityRules';

/**
 * This class represents the entity "BenefitsWaitingPeriods" of service "d365_metadata".
 */
export class BenefitsWaitingPeriods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsWaitingPeriodsType<T>
{
  /**
   * Technical entity name for BenefitsWaitingPeriods.
   */
  static override _entityName = 'BenefitsWaitingPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsWaitingPeriods entity.
   */
  static _keys = ['WaitingCode'];
  /**
   * Waiting Code.
   */
  declare waitingCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Waiting Days.
   * @nullable
   */
  declare waitingDays?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Days.
   */
  declare days: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Months.
   */
  declare months: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Waiting Method.
   * @nullable
   */
  declare waitingMethod?: BenefitWaitingPeriodMethod | null;
  /**
   * One-to-many navigation property to the {@link BenefitsPlanEligibilityRules} entity.
   */
  declare planEligibilityRules: BenefitsPlanEligibilityRules<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsPlanEligibilityRules} entity.
   */
  declare benefitsPlanEligibilityRules: BenefitsPlanEligibilityRules<T>[];

  constructor(_entityApi: BenefitsWaitingPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsWaitingPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  waitingCode: DeserializedType<T, 'Edm.String'>;
  waitingDays?: DeserializedType<T, 'Edm.String'> | null;
  days: DeserializedType<T, 'Edm.Int32'>;
  months: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  waitingMethod?: BenefitWaitingPeriodMethod | null;
  planEligibilityRules: BenefitsPlanEligibilityRulesType<T>[];
  benefitsPlanEligibilityRules: BenefitsPlanEligibilityRulesType<T>[];
}
