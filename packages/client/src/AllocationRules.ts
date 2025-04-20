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
import type { AllocationRulesApi } from './AllocationRulesApi';
import { NoYes } from './NoYes';
import { LedgerAllocationFromTo } from './LedgerAllocationFromTo';
import { LedgerAllocationMathType } from './LedgerAllocationMathType';
import { LedgerAllocationSource } from './LedgerAllocationSource';
import { LedgerAllocationMethod } from './LedgerAllocationMethod';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  AllocationRuleDestinations,
  AllocationRuleDestinationsType
} from './AllocationRuleDestinations';
import {
  AllocationRuleSources,
  AllocationRuleSourcesType
} from './AllocationRuleSources';

/**
 * This class represents the entity "AllocationRules" of service "d365_metadata".
 */
export class AllocationRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AllocationRulesType<T>
{
  /**
   * Technical entity name for AllocationRules.
   */
  static override _entityName = 'AllocationRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AllocationRules entity.
   */
  static _keys = ['dataAreaId', 'Rule'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule.
   */
  declare rule: DeserializedType<T, 'Edm.String'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Intercompany Rule.
   * @nullable
   */
  declare intercompanyRule?: NoYes | null;
  /**
   * Date Last Run.
   */
  declare dateLastRun: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Keep Dimension From.
   * @nullable
   */
  declare keepDimensionFrom?: LedgerAllocationFromTo | null;
  /**
   * Active.
   * @nullable
   */
  declare active?: NoYes | null;
  /**
   * Keep Account From.
   * @nullable
   */
  declare keepAccountFrom?: LedgerAllocationFromTo | null;
  /**
   * Mathematical Operation.
   * @nullable
   */
  declare mathematicalOperation?: LedgerAllocationMathType | null;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Source.
   * @nullable
   */
  declare dataSource?: LedgerAllocationSource | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Value.
   */
  declare fixedValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allocation Method.
   * @nullable
   */
  declare allocationMethod?: LedgerAllocationMethod | null;
  /**
   * Offset Account From.
   * @nullable
   */
  declare offsetAccountFrom?: LedgerAllocationFromTo | null;
  /**
   * Offset Dimension From.
   * @nullable
   */
  declare offsetDimensionFrom?: LedgerAllocationFromTo | null;
  /**
   * Date Interval Code.
   * @nullable
   */
  declare dateIntervalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-many navigation property to the {@link AllocationRuleDestinations} entity.
   */
  declare allocationRuleDestination: AllocationRuleDestinations<T>[];
  /**
   * One-to-many navigation property to the {@link AllocationRuleSources} entity.
   */
  declare allocationRuleSource: AllocationRuleSources<T>[];

  constructor(_entityApi: AllocationRulesApi<T>) {
    super(_entityApi);
  }
}

export interface AllocationRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rule: DeserializedType<T, 'Edm.String'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  intercompanyRule?: NoYes | null;
  dateLastRun: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  keepDimensionFrom?: LedgerAllocationFromTo | null;
  active?: NoYes | null;
  keepAccountFrom?: LedgerAllocationFromTo | null;
  mathematicalOperation?: LedgerAllocationMathType | null;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dataSource?: LedgerAllocationSource | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  fixedValue: DeserializedType<T, 'Edm.Decimal'>;
  allocationMethod?: LedgerAllocationMethod | null;
  offsetAccountFrom?: LedgerAllocationFromTo | null;
  offsetDimensionFrom?: LedgerAllocationFromTo | null;
  dateIntervalCode?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  allocationRuleDestination: AllocationRuleDestinationsType<T>[];
  allocationRuleSource: AllocationRuleSourcesType<T>[];
}
