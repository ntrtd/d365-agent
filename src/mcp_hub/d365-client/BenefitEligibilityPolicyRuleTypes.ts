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
import type { BenefitEligibilityPolicyRuleTypesApi } from './BenefitEligibilityPolicyRuleTypesApi';
import { BenefitHcmDetails, BenefitHcmDetailsType } from './BenefitHcmDetails';
import {
  BenefitEligibilityRules,
  BenefitEligibilityRulesType
} from './BenefitEligibilityRules';

/**
 * This class represents the entity "BenefitEligibilityPolicyRuleTypes" of service "d365_metadata".
 */
export class BenefitEligibilityPolicyRuleTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitEligibilityPolicyRuleTypesType<T>
{
  /**
   * Technical entity name for BenefitEligibilityPolicyRuleTypes.
   */
  static override _entityName = 'BenefitEligibilityPolicyRuleTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitEligibilityPolicyRuleTypes entity.
   */
  static _keys = ['RuleName'];
  /**
   * Rule Name.
   */
  declare ruleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Aot Query Name.
   * @nullable
   */
  declare aotQueryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BenefitHcmDetails} entity.
   */
  declare benefitDetails: BenefitHcmDetails<T>[];
  /**
   * One-to-one navigation property to the {@link BenefitEligibilityRules} entity.
   */
  declare benefitEligibilityRule?: BenefitEligibilityRules<T> | null;

  constructor(_entityApi: BenefitEligibilityPolicyRuleTypesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitEligibilityPolicyRuleTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ruleName: DeserializedType<T, 'Edm.String'>;
  aotQueryName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  benefitDetails: BenefitHcmDetailsType<T>[];
  benefitEligibilityRule?: BenefitEligibilityRulesType<T> | null;
}
