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
import type { AdvancedRulesApi } from './AdvancedRulesApi';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';
import { DimensionRuleType } from './DimensionRuleType';
import {
  LedgerAdvancedRuleStructures,
  LedgerAdvancedRuleStructuresType
} from './LedgerAdvancedRuleStructures';
import {
  AdvancedRuleCriteria,
  AdvancedRuleCriteriaType
} from './AdvancedRuleCriteria';
import { AccountStructures, AccountStructuresType } from './AccountStructures';

/**
 * This class represents the entity "AdvancedRules" of service "d365_metadata".
 */
export class AdvancedRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AdvancedRulesType<T>
{
  /**
   * Technical entity name for AdvancedRules.
   */
  static override _entityName = 'AdvancedRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AdvancedRules entity.
   */
  static _keys = ['AccountStructure', 'AdvancedRuleName', 'Status'];
  /**
   * Account Structure.
   */
  declare accountStructure: DeserializedType<T, 'Edm.String'>;
  /**
   * Advanced Rule Name.
   */
  declare advancedRuleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: DimensionHierarchyConstraintStatus | null;
  /**
   * Advanced Rule Structure 2.
   * @nullable
   */
  declare advancedRuleStructure2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rule Type.
   * @nullable
   */
  declare ruleType?: DimensionRuleType | null;
  /**
   * Advanced Rule Structure 1.
   * @nullable
   */
  declare advancedRuleStructure1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Advanced Rule Structure 4.
   * @nullable
   */
  declare advancedRuleStructure4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Advanced Rule Structure 3.
   * @nullable
   */
  declare advancedRuleStructure3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity3?: LedgerAdvancedRuleStructures<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity4?: LedgerAdvancedRuleStructures<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity1?: LedgerAdvancedRuleStructures<T> | null;
  /**
   * One-to-one navigation property to the {@link AdvancedRuleCriteria} entity.
   */
  declare ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleCriterionEntity?: AdvancedRuleCriteria<T> | null;
  /**
   * One-to-one navigation property to the {@link AccountStructures} entity.
   */
  declare ledgerAdvancedRuleEntityRelatedRoleLedgerAccountStructureEntity?: AccountStructures<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity2?: LedgerAdvancedRuleStructures<T> | null;
  /**
   * One-to-many navigation property to the {@link AdvancedRuleCriteria} entity.
   */
  declare ledgerAdvancedRuleCriterionEntityRoleLedgerAdvancedRuleEntity: AdvancedRuleCriteria<T>[];

  constructor(_entityApi: AdvancedRulesApi<T>) {
    super(_entityApi);
  }
}

export interface AdvancedRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accountStructure: DeserializedType<T, 'Edm.String'>;
  advancedRuleName: DeserializedType<T, 'Edm.String'>;
  status?: DimensionHierarchyConstraintStatus | null;
  advancedRuleStructure2?: DeserializedType<T, 'Edm.String'> | null;
  ruleType?: DimensionRuleType | null;
  advancedRuleStructure1?: DeserializedType<T, 'Edm.String'> | null;
  advancedRuleStructure4?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  advancedRuleStructure3?: DeserializedType<T, 'Edm.String'> | null;
  ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity3?: LedgerAdvancedRuleStructuresType<T> | null;
  ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity4?: LedgerAdvancedRuleStructuresType<T> | null;
  ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity1?: LedgerAdvancedRuleStructuresType<T> | null;
  ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleCriterionEntity?: AdvancedRuleCriteriaType<T> | null;
  ledgerAdvancedRuleEntityRelatedRoleLedgerAccountStructureEntity?: AccountStructuresType<T> | null;
  ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity2?: LedgerAdvancedRuleStructuresType<T> | null;
  ledgerAdvancedRuleCriterionEntityRoleLedgerAdvancedRuleEntity: AdvancedRuleCriteriaType<T>[];
}
