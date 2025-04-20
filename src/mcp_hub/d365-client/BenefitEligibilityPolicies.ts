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
import type { BenefitEligibilityPoliciesApi } from './BenefitEligibilityPoliciesApi';
import { NoYes } from './NoYes';
import {
  BenefitEligibilityRules,
  BenefitEligibilityRulesType
} from './BenefitEligibilityRules';

/**
 * This class represents the entity "BenefitEligibilityPolicies" of service "d365_metadata".
 */
export class BenefitEligibilityPolicies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitEligibilityPoliciesType<T>
{
  /**
   * Technical entity name for BenefitEligibilityPolicies.
   */
  static override _entityName = 'BenefitEligibilityPolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitEligibilityPolicies entity.
   */
  static _keys = ['PolicyName'];
  /**
   * Policy Name.
   */
  declare policyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Policy Active.
   * @nullable
   */
  declare isPolicyActive?: NoYes | null;
  /**
   * Policy Description.
   * @nullable
   */
  declare policyDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BenefitEligibilityRules} entity.
   */
  declare benefitEligibilityRule?: BenefitEligibilityRules<T> | null;

  constructor(_entityApi: BenefitEligibilityPoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitEligibilityPoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  policyName: DeserializedType<T, 'Edm.String'>;
  isPolicyActive?: NoYes | null;
  policyDescription?: DeserializedType<T, 'Edm.String'> | null;
  benefitEligibilityRule?: BenefitEligibilityRulesType<T> | null;
}
