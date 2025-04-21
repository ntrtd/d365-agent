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
import type { BenefitEligibilityOverridesApi } from './BenefitEligibilityOverridesApi';
import { BenefitPlans, BenefitPlansType } from './BenefitPlans';
import { Workers, WorkersType } from './Workers';
import { BenefitOptions, BenefitOptionsType } from './BenefitOptions';
import { Benefits, BenefitsType } from './Benefits';

/**
 * This class represents the entity "BenefitEligibilityOverrides" of service "d365_metadata".
 */
export class BenefitEligibilityOverrides<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitEligibilityOverridesType<T>
{
  /**
   * Technical entity name for BenefitEligibilityOverrides.
   */
  static override _entityName = 'BenefitEligibilityOverrides';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitEligibilityOverrides entity.
   */
  static _keys = [
    'BenefitPlanId',
    'BenefitOptionId',
    'Effective',
    'Expiration',
    'WorkerId',
    'OverrideStartDate'
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
   * Worker Id.
   */
  declare workerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Override Start Date.
   */
  declare overrideStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Benefit Id.
   * @nullable
   */
  declare benefitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override End Date.
   */
  declare overrideEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link BenefitPlans} entity.
   */
  declare benefitPlan?: BenefitPlans<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitOptions} entity.
   */
  declare benefitOption?: BenefitOptions<T> | null;
  /**
   * One-to-one navigation property to the {@link Benefits} entity.
   */
  declare benefit?: Benefits<T> | null;

  constructor(_entityApi: BenefitEligibilityOverridesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitEligibilityOverridesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitPlanId: DeserializedType<T, 'Edm.String'>;
  benefitOptionId: DeserializedType<T, 'Edm.String'>;
  effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerId: DeserializedType<T, 'Edm.String'>;
  overrideStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitId?: DeserializedType<T, 'Edm.String'> | null;
  overrideEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitPlan?: BenefitPlansType<T> | null;
  worker?: WorkersType<T> | null;
  benefitOption?: BenefitOptionsType<T> | null;
  benefit?: BenefitsType<T> | null;
}
