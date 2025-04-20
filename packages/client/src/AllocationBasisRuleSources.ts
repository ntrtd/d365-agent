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
import type { AllocationBasisRuleSourcesApi } from './AllocationBasisRuleSourcesApi';
import { LedgerAllocationAccountDimension } from './LedgerAllocationAccountDimension';
import {
  AllocationBasisRules,
  AllocationBasisRulesType
} from './AllocationBasisRules';

/**
 * This class represents the entity "AllocationBasisRuleSources" of service "d365_metadata".
 */
export class AllocationBasisRuleSources<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AllocationBasisRuleSourcesType<T>
{
  /**
   * Technical entity name for AllocationBasisRuleSources.
   */
  static override _entityName = 'AllocationBasisRuleSources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AllocationBasisRuleSources entity.
   */
  static _keys = ['dataAreaId', 'BasisId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Basis Id.
   */
  declare basisId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Basis Criteria.
   * @nullable
   */
  declare basisCriteria?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Field Setting.
   * @nullable
   */
  declare fieldSetting?: LedgerAllocationAccountDimension | null;
  /**
   * Basis Dimension Attribute Name.
   * @nullable
   */
  declare basisDimensionAttributeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link AllocationBasisRules} entity.
   */
  declare allocationBasisRule?: AllocationBasisRules<T> | null;

  constructor(_entityApi: AllocationBasisRuleSourcesApi<T>) {
    super(_entityApi);
  }
}

export interface AllocationBasisRuleSourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  basisId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  basisCriteria?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  fieldSetting?: LedgerAllocationAccountDimension | null;
  basisDimensionAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  allocationBasisRule?: AllocationBasisRulesType<T> | null;
}
