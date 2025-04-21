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
import type { BenefitEligibilityRulesApi } from './BenefitEligibilityRulesApi';
import { NoYes } from './NoYes';
import {
  BenefitEligibilityPolicies,
  BenefitEligibilityPoliciesType
} from './BenefitEligibilityPolicies';
import {
  BenefitEligibilityPolicyRuleTypes,
  BenefitEligibilityPolicyRuleTypesType
} from './BenefitEligibilityPolicyRuleTypes';

/**
 * This class represents the entity "BenefitEligibilityRules" of service "d365_metadata".
 */
export class BenefitEligibilityRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitEligibilityRulesType<T>
{
  /**
   * Technical entity name for BenefitEligibilityRules.
   */
  static override _entityName = 'BenefitEligibilityRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitEligibilityRules entity.
   */
  static _keys = ['PolicyName', 'PolicyRulesName'];
  /**
   * Policy Name.
   */
  declare policyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Rules Name.
   */
  declare policyRulesName: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expression Id.
   */
  declare expressionId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Inherited.
   * @nullable
   */
  declare isInherited?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link BenefitEligibilityPolicies} entity.
   */
  declare benefitEligibilityPolicy?: BenefitEligibilityPolicies<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitEligibilityPolicyRuleTypes} entity.
   */
  declare benefitEligibilityPolicyRuleType?: BenefitEligibilityPolicyRuleTypes<T> | null;

  constructor(_entityApi: BenefitEligibilityRulesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitEligibilityRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  policyName: DeserializedType<T, 'Edm.String'>;
  policyRulesName: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expressionId: DeserializedType<T, 'Edm.Guid'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isInherited?: NoYes | null;
  benefitEligibilityPolicy?: BenefitEligibilityPoliciesType<T> | null;
  benefitEligibilityPolicyRuleType?: BenefitEligibilityPolicyRuleTypesType<T> | null;
}
