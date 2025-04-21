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
import type { BenefitHcmDetailsApi } from './BenefitHcmDetailsApi';
import { HcmBenefitEligibilityType } from './HcmBenefitEligibilityType';
import { Benefits, BenefitsType } from './Benefits';
import {
  BenefitEligibilityPolicyRuleTypes,
  BenefitEligibilityPolicyRuleTypesType
} from './BenefitEligibilityPolicyRuleTypes';

/**
 * This class represents the entity "BenefitHcmDetails" of service "d365_metadata".
 */
export class BenefitHcmDetails<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitHcmDetailsType<T>
{
  /**
   * Technical entity name for BenefitHcmDetails.
   */
  static override _entityName = 'BenefitHcmDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitHcmDetails entity.
   */
  static _keys = ['BenefitId', 'Effective'];
  /**
   * Benefit Id.
   */
  declare benefitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective.
   */
  declare effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Eligibility.
   * @nullable
   */
  declare eligibility?: HcmBenefitEligibilityType | null;
  /**
   * Expiration.
   */
  declare expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rule Name.
   * @nullable
   */
  declare ruleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Benefits} entity.
   */
  declare benefit?: Benefits<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitEligibilityPolicyRuleTypes} entity.
   */
  declare policyRuleType?: BenefitEligibilityPolicyRuleTypes<T> | null;

  constructor(_entityApi: BenefitHcmDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitHcmDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitId: DeserializedType<T, 'Edm.String'>;
  effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  eligibility?: HcmBenefitEligibilityType | null;
  expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ruleName?: DeserializedType<T, 'Edm.String'> | null;
  benefit?: BenefitsType<T> | null;
  policyRuleType?: BenefitEligibilityPolicyRuleTypesType<T> | null;
}
