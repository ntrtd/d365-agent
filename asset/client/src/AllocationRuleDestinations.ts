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
import type { AllocationRuleDestinationsApi } from './AllocationRuleDestinationsApi';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { AllocationRules, AllocationRulesType } from './AllocationRules';
import {
  AllocationBasisRules,
  AllocationBasisRulesType
} from './AllocationBasisRules';

/**
 * This class represents the entity "AllocationRuleDestinations" of service "d365_metadata".
 */
export class AllocationRuleDestinations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AllocationRuleDestinationsType<T>
{
  /**
   * Technical entity name for AllocationRuleDestinations.
   */
  static override _entityName = 'AllocationRuleDestinations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AllocationRuleDestinations entity.
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
   * Basis Id.
   * @nullable
   */
  declare basisId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Account Display Value.
   * @nullable
   */
  declare toAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Weight.
   */
  declare fixedWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * From Company.
   * @nullable
   */
  declare fromCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Dimensions Display Value.
   * @nullable
   */
  declare toDimensionsDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Percentage.
   */
  declare fixedPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link AllocationRules} entity.
   */
  declare allocationRule?: AllocationRules<T> | null;
  /**
   * One-to-one navigation property to the {@link AllocationBasisRules} entity.
   */
  declare allocationBasisRule?: AllocationBasisRules<T> | null;

  constructor(_entityApi: AllocationRuleDestinationsApi<T>) {
    super(_entityApi);
  }
}

export interface AllocationRuleDestinationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rule: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  basisId?: DeserializedType<T, 'Edm.String'> | null;
  toAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  fixedWeight: DeserializedType<T, 'Edm.Decimal'>;
  fromCompany?: DeserializedType<T, 'Edm.String'> | null;
  toDimensionsDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  fixedPercentage: DeserializedType<T, 'Edm.Decimal'>;
  dimensionSet?: DimensionSetsType<T> | null;
  legalEntity?: LegalEntitiesType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  allocationRule?: AllocationRulesType<T> | null;
  allocationBasisRule?: AllocationBasisRulesType<T> | null;
}
