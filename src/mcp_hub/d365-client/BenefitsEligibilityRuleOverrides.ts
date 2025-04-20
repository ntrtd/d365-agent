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
import type { BenefitsEligibilityRuleOverridesApi } from './BenefitsEligibilityRuleOverridesApi';
import { BenefitProgramPlanRelation } from './BenefitProgramPlanRelation';

/**
 * This class represents the entity "BenefitsEligibilityRuleOverrides" of service "d365_metadata".
 */
export class BenefitsEligibilityRuleOverrides<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsEligibilityRuleOverridesType<T>
{
  /**
   * Technical entity name for BenefitsEligibilityRuleOverrides.
   */
  static override _entityName = 'BenefitsEligibilityRuleOverrides';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsEligibilityRuleOverrides entity.
   */
  static _keys = [
    'WorkerPersonnelNumber',
    'RelationshipType',
    'PlanOrProgramId'
  ];
  /**
   * Worker Personnel Number.
   */
  declare workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Relationship Type.
   * @nullable
   */
  declare relationshipType?: BenefitProgramPlanRelation | null;
  /**
   * Plan Or Program Id.
   */
  declare planOrProgramId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: BenefitsEligibilityRuleOverridesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsEligibilityRuleOverridesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  relationshipType?: BenefitProgramPlanRelation | null;
  planOrProgramId: DeserializedType<T, 'Edm.String'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
