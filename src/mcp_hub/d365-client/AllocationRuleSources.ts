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
import type { AllocationRuleSourcesApi } from './AllocationRuleSourcesApi';
import { LedgerAllocationAccountDimension } from './LedgerAllocationAccountDimension';
import { AllocationRules, AllocationRulesType } from './AllocationRules';

/**
 * This class represents the entity "AllocationRuleSources" of service "d365_metadata".
 */
export class AllocationRuleSources<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AllocationRuleSourcesType<T>
{
  /**
   * Technical entity name for AllocationRuleSources.
   */
  static override _entityName = 'AllocationRuleSources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AllocationRuleSources entity.
   */
  static _keys = ['dataAreaId', 'Rule', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule.
   */
  declare rule: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Criteria.
   * @nullable
   */
  declare sourceCriteria?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Attribute Name.
   * @nullable
   */
  declare dimensionAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Field Setting.
   * @nullable
   */
  declare fieldSetting?: LedgerAllocationAccountDimension | null;
  /**
   * One-to-one navigation property to the {@link AllocationRules} entity.
   */
  declare allocationRule?: AllocationRules<T> | null;

  constructor(_entityApi: AllocationRuleSourcesApi<T>) {
    super(_entityApi);
  }
}

export interface AllocationRuleSourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rule: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  sourceCriteria?: DeserializedType<T, 'Edm.String'> | null;
  dimensionAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  fieldSetting?: LedgerAllocationAccountDimension | null;
  allocationRule?: AllocationRulesType<T> | null;
}
