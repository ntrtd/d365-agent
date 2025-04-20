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
import type { BenefitsProgramEligibilityRulesApi } from './BenefitsProgramEligibilityRulesApi';
import { BenefitsPrograms, BenefitsProgramsType } from './BenefitsPrograms';
import {
  BenefitsEligibilityRules,
  BenefitsEligibilityRulesType
} from './BenefitsEligibilityRules';

/**
 * This class represents the entity "BenefitsProgramEligibilityRules" of service "d365_metadata".
 */
export class BenefitsProgramEligibilityRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsProgramEligibilityRulesType<T>
{
  /**
   * Technical entity name for BenefitsProgramEligibilityRules.
   */
  static override _entityName = 'BenefitsProgramEligibilityRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsProgramEligibilityRules entity.
   */
  static _keys = ['ProgramId', 'EligibilityRuleId'];
  /**
   * Program Id.
   */
  declare programId: DeserializedType<T, 'Edm.String'>;
  /**
   * Eligibility Rule Id.
   */
  declare eligibilityRuleId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link BenefitsPrograms} entity.
   */
  declare benefitsProgram?: BenefitsPrograms<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsEligibilityRules} entity.
   */
  declare benefitsEligibilityRule?: BenefitsEligibilityRules<T> | null;

  constructor(_entityApi: BenefitsProgramEligibilityRulesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsProgramEligibilityRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  programId: DeserializedType<T, 'Edm.String'>;
  eligibilityRuleId: DeserializedType<T, 'Edm.String'>;
  benefitsProgram?: BenefitsProgramsType<T> | null;
  benefitsEligibilityRule?: BenefitsEligibilityRulesType<T> | null;
}
