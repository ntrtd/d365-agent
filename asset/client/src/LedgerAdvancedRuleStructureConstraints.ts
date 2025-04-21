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
import type { LedgerAdvancedRuleStructureConstraintsApi } from './LedgerAdvancedRuleStructureConstraintsApi';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';
import {
  LedgerAdvancedRuleStructures,
  LedgerAdvancedRuleStructuresType
} from './LedgerAdvancedRuleStructures';

/**
 * This class represents the entity "LedgerAdvancedRuleStructureConstraints" of service "d365_metadata".
 */
export class LedgerAdvancedRuleStructureConstraints<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerAdvancedRuleStructureConstraintsType<T>
{
  /**
   * Technical entity name for LedgerAdvancedRuleStructureConstraints.
   */
  static override _entityName = 'LedgerAdvancedRuleStructureConstraints';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerAdvancedRuleStructureConstraints entity.
   */
  static _keys = ['AdvancedRuleStructure', 'Status', 'Position'];
  /**
   * Advanced Rule Structure.
   */
  declare advancedRuleStructure: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: DimensionHierarchyConstraintStatus | null;
  /**
   * Position.
   */
  declare position: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Active To.
   */
  declare activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Active From.
   */
  declare activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Segment Criteria 11.
   * @nullable
   */
  declare segmentCriteria11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Criteria 10.
   * @nullable
   */
  declare segmentCriteria10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Criteria 05.
   * @nullable
   */
  declare segmentCriteria05?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Criteria 04.
   * @nullable
   */
  declare segmentCriteria04?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Criteria 07.
   * @nullable
   */
  declare segmentCriteria07?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Criteria 06.
   * @nullable
   */
  declare segmentCriteria06?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Criteria 01.
   * @nullable
   */
  declare segmentCriteria01?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Criteria 03.
   * @nullable
   */
  declare segmentCriteria03?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Criteria 02.
   * @nullable
   */
  declare segmentCriteria02?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Criteria 09.
   * @nullable
   */
  declare segmentCriteria09?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Criteria 08.
   * @nullable
   */
  declare segmentCriteria08?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleStructureConstraintEntityRelatedRoleLedgerAdvancedRuleStructureConstraintEntityRelatedRoleLedgerAdvancedRuleStructureEntity?: LedgerAdvancedRuleStructures<T> | null;

  constructor(_entityApi: LedgerAdvancedRuleStructureConstraintsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerAdvancedRuleStructureConstraintsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  advancedRuleStructure: DeserializedType<T, 'Edm.String'>;
  status?: DimensionHierarchyConstraintStatus | null;
  position: DeserializedType<T, 'Edm.Int32'>;
  activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  segmentCriteria11?: DeserializedType<T, 'Edm.String'> | null;
  segmentCriteria10?: DeserializedType<T, 'Edm.String'> | null;
  segmentCriteria05?: DeserializedType<T, 'Edm.String'> | null;
  segmentCriteria04?: DeserializedType<T, 'Edm.String'> | null;
  segmentCriteria07?: DeserializedType<T, 'Edm.String'> | null;
  segmentCriteria06?: DeserializedType<T, 'Edm.String'> | null;
  segmentCriteria01?: DeserializedType<T, 'Edm.String'> | null;
  segmentCriteria03?: DeserializedType<T, 'Edm.String'> | null;
  segmentCriteria02?: DeserializedType<T, 'Edm.String'> | null;
  segmentCriteria09?: DeserializedType<T, 'Edm.String'> | null;
  segmentCriteria08?: DeserializedType<T, 'Edm.String'> | null;
  ledgerAdvancedRuleStructureConstraintEntityRelatedRoleLedgerAdvancedRuleStructureConstraintEntityRelatedRoleLedgerAdvancedRuleStructureEntity?: LedgerAdvancedRuleStructuresType<T> | null;
}
