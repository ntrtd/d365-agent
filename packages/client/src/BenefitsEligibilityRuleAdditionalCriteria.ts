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
import type { BenefitsEligibilityRuleAdditionalCriteriaApi } from './BenefitsEligibilityRuleAdditionalCriteriaApi';
import { BenefitEligibleType } from './BenefitEligibleType';
import { BenefitAgeDirection } from './BenefitAgeDirection';

/**
 * This class represents the entity "BenefitsEligibilityRuleAdditionalCriteria" of service "d365_metadata".
 */
export class BenefitsEligibilityRuleAdditionalCriteria<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsEligibilityRuleAdditionalCriteriaType<T>
{
  /**
   * Technical entity name for BenefitsEligibilityRuleAdditionalCriteria.
   */
  static override _entityName = 'BenefitsEligibilityRuleAdditionalCriteria';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsEligibilityRuleAdditionalCriteria entity.
   */
  static _keys = ['EligibilityRuleId', 'EligibleType', 'ReferenceId'];
  /**
   * Eligibility Rule Id.
   */
  declare eligibilityRuleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Eligible Type.
   * @nullable
   */
  declare eligibleType?: BenefitEligibleType | null;
  /**
   * Reference Id.
   */
  declare referenceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Age Direction.
   * @nullable
   */
  declare ageDirection?: BenefitAgeDirection | null;
  /**
   * Age.
   */
  declare age: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: BenefitsEligibilityRuleAdditionalCriteriaApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsEligibilityRuleAdditionalCriteriaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  eligibilityRuleId: DeserializedType<T, 'Edm.String'>;
  eligibleType?: BenefitEligibleType | null;
  referenceId: DeserializedType<T, 'Edm.String'>;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  ageDirection?: BenefitAgeDirection | null;
  age: DeserializedType<T, 'Edm.Int32'>;
}
