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
import type { AdvancedRuleCriteriaApi } from './AdvancedRuleCriteriaApi';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';
import { DimensionRuleType } from './DimensionRuleType';
import { AdvancedRules, AdvancedRulesType } from './AdvancedRules';
import {
  DimensionAttributes,
  DimensionAttributesType
} from './DimensionAttributes';

/**
 * This class represents the entity "AdvancedRuleCriteria" of service "d365_metadata".
 */
export class AdvancedRuleCriteria<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AdvancedRuleCriteriaType<T>
{
  /**
   * Technical entity name for AdvancedRuleCriteria.
   */
  static override _entityName = 'AdvancedRuleCriteria';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AdvancedRuleCriteria entity.
   */
  static _keys = ['AccountStructure', 'AdvancedRule', 'Status', 'SegmentName'];
  /**
   * Account Structure.
   */
  declare accountStructure: DeserializedType<T, 'Edm.String'>;
  /**
   * Advanced Rule.
   */
  declare advancedRule: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: DimensionHierarchyConstraintStatus | null;
  /**
   * Segment Name.
   */
  declare segmentName: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Type.
   * @nullable
   */
  declare ruleType?: DimensionRuleType | null;
  /**
   * Advanced Rule Criterion.
   * @nullable
   */
  declare advancedRuleCriterion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AdvancedRules} entity.
   */
  declare ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleCriterionEntity: AdvancedRules<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAdvancedRuleCriterionEntityRelatedRoleDimensionAttributeEntity?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link AdvancedRules} entity.
   */
  declare ledgerAdvancedRuleCriterionEntityRelatedRoleLedgerAdvancedRuleEntity?: AdvancedRules<T> | null;

  constructor(_entityApi: AdvancedRuleCriteriaApi<T>) {
    super(_entityApi);
  }
}

export interface AdvancedRuleCriteriaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accountStructure: DeserializedType<T, 'Edm.String'>;
  advancedRule: DeserializedType<T, 'Edm.String'>;
  status?: DimensionHierarchyConstraintStatus | null;
  segmentName: DeserializedType<T, 'Edm.String'>;
  ruleType?: DimensionRuleType | null;
  advancedRuleCriterion?: DeserializedType<T, 'Edm.String'> | null;
  ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleCriterionEntity: AdvancedRulesType<T>[];
  ledgerAdvancedRuleCriterionEntityRelatedRoleDimensionAttributeEntity?: DimensionAttributesType<T> | null;
  ledgerAdvancedRuleCriterionEntityRelatedRoleLedgerAdvancedRuleEntity?: AdvancedRulesType<T> | null;
}
