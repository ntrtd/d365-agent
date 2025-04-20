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
import type { LedgerEliminationRuleLinesApi } from './LedgerEliminationRuleLinesApi';
import { LedgerEliminationDestination } from './LedgerEliminationDestination';
import { LedgerEliminationMethod } from './LedgerEliminationMethod';
import {
  LedgerEliminationRules,
  LedgerEliminationRulesType
} from './LedgerEliminationRules';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "LedgerEliminationRuleLines" of service "d365_metadata".
 */
export class LedgerEliminationRuleLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerEliminationRuleLinesType<T>
{
  /**
   * Technical entity name for LedgerEliminationRuleLines.
   */
  static override _entityName = 'LedgerEliminationRuleLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerEliminationRuleLines entity.
   */
  static _keys = ['dataAreaId', 'RuleId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Id.
   */
  declare ruleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Destination Account.
   * @nullable
   */
  declare destinationAccount?: LedgerEliminationDestination | null;
  /**
   * Destination Dimension.
   * @nullable
   */
  declare destinationDimension?: LedgerEliminationDestination | null;
  /**
   * Source Account.
   * @nullable
   */
  declare sourceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Elimination Method.
   * @nullable
   */
  declare eliminationMethod?: LedgerEliminationMethod | null;
  /**
   * One-to-one navigation property to the {@link LedgerEliminationRules} entity.
   */
  declare ledgerEliminationRule?: LedgerEliminationRules<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: LedgerEliminationRuleLinesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerEliminationRuleLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ruleId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  destinationAccount?: LedgerEliminationDestination | null;
  destinationDimension?: LedgerEliminationDestination | null;
  sourceAccount?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  eliminationMethod?: LedgerEliminationMethod | null;
  ledgerEliminationRule?: LedgerEliminationRulesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
