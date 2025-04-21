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
import type { LedgerAdvancedRuleStructuresApi } from './LedgerAdvancedRuleStructuresApi';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';
import {
  AdvancedRuleStructureActivations,
  AdvancedRuleStructureActivationsType
} from './AdvancedRuleStructureActivations';
import {
  LedgerAdvancedRuleStructureConstraints,
  LedgerAdvancedRuleStructureConstraintsType
} from './LedgerAdvancedRuleStructureConstraints';
import { AdvancedRules, AdvancedRulesType } from './AdvancedRules';
import {
  DimensionAttributes,
  DimensionAttributesType
} from './DimensionAttributes';

/**
 * This class represents the entity "LedgerAdvancedRuleStructures" of service "d365_metadata".
 */
export class LedgerAdvancedRuleStructures<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerAdvancedRuleStructuresType<T>
{
  /**
   * Technical entity name for LedgerAdvancedRuleStructures.
   */
  static override _entityName = 'LedgerAdvancedRuleStructures';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerAdvancedRuleStructures entity.
   */
  static _keys = ['AccountRuleStructureName', 'Status'];
  /**
   * Account Rule Structure Name.
   */
  declare accountRuleStructureName: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: DimensionHierarchyConstraintStatus | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 04.
   * @nullable
   */
  declare segmentName04?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 05.
   * @nullable
   */
  declare segmentName05?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 06.
   * @nullable
   */
  declare segmentName06?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 07.
   * @nullable
   */
  declare segmentName07?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 01.
   * @nullable
   */
  declare segmentName01?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 02.
   * @nullable
   */
  declare segmentName02?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 03.
   * @nullable
   */
  declare segmentName03?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 08.
   * @nullable
   */
  declare segmentName08?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 09.
   * @nullable
   */
  declare segmentName09?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 10.
   * @nullable
   */
  declare segmentName10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 11.
   * @nullable
   */
  declare segmentName11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AdvancedRuleStructureActivations} entity.
   */
  declare ledgerAdvancedRuleStructureActivationEntityRoleLedgerAdvancedRuleStructureEntity: AdvancedRuleStructureActivations<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAdvancedRuleStructureConstraints} entity.
   */
  declare ledgerAdvancedRuleStructureConstraintEntityRelatedRoleLedgerAdvancedRuleStructureConstraintEntityRoleLedgerAdvancedRuleStructureEntity: LedgerAdvancedRuleStructureConstraints<T>[];
  /**
   * One-to-many navigation property to the {@link AdvancedRules} entity.
   */
  declare ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity3: AdvancedRules<T>[];
  /**
   * One-to-many navigation property to the {@link AdvancedRules} entity.
   */
  declare ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity4: AdvancedRules<T>[];
  /**
   * One-to-many navigation property to the {@link AdvancedRules} entity.
   */
  declare ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity1: AdvancedRules<T>[];
  /**
   * One-to-many navigation property to the {@link AdvancedRules} entity.
   */
  declare ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity2: AdvancedRules<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName04?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName05?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName06?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName07?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName01?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName02?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName03?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName08?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName09?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName10?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName11?: DimensionAttributes<T> | null;

  constructor(_entityApi: LedgerAdvancedRuleStructuresApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerAdvancedRuleStructuresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accountRuleStructureName: DeserializedType<T, 'Edm.String'>;
  status?: DimensionHierarchyConstraintStatus | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  segmentName04?: DeserializedType<T, 'Edm.String'> | null;
  segmentName05?: DeserializedType<T, 'Edm.String'> | null;
  segmentName06?: DeserializedType<T, 'Edm.String'> | null;
  segmentName07?: DeserializedType<T, 'Edm.String'> | null;
  segmentName01?: DeserializedType<T, 'Edm.String'> | null;
  segmentName02?: DeserializedType<T, 'Edm.String'> | null;
  segmentName03?: DeserializedType<T, 'Edm.String'> | null;
  segmentName08?: DeserializedType<T, 'Edm.String'> | null;
  segmentName09?: DeserializedType<T, 'Edm.String'> | null;
  segmentName10?: DeserializedType<T, 'Edm.String'> | null;
  segmentName11?: DeserializedType<T, 'Edm.String'> | null;
  ledgerAdvancedRuleStructureActivationEntityRoleLedgerAdvancedRuleStructureEntity: AdvancedRuleStructureActivationsType<T>[];
  ledgerAdvancedRuleStructureConstraintEntityRelatedRoleLedgerAdvancedRuleStructureConstraintEntityRoleLedgerAdvancedRuleStructureEntity: LedgerAdvancedRuleStructureConstraintsType<T>[];
  ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity3: AdvancedRulesType<T>[];
  ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity4: AdvancedRulesType<T>[];
  ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity1: AdvancedRulesType<T>[];
  ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity2: AdvancedRulesType<T>[];
  ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName04?: DimensionAttributesType<T> | null;
  ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName05?: DimensionAttributesType<T> | null;
  ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName06?: DimensionAttributesType<T> | null;
  ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName07?: DimensionAttributesType<T> | null;
  ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName01?: DimensionAttributesType<T> | null;
  ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName02?: DimensionAttributesType<T> | null;
  ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName03?: DimensionAttributesType<T> | null;
  ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName08?: DimensionAttributesType<T> | null;
  ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName09?: DimensionAttributesType<T> | null;
  ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName10?: DimensionAttributesType<T> | null;
  ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName11?: DimensionAttributesType<T> | null;
}
