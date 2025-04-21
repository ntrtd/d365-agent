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
import type { AllocationForMainAccountsApi } from './AllocationForMainAccountsApi';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "AllocationForMainAccounts" of service "d365_metadata".
 */
export class AllocationForMainAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AllocationForMainAccountsType<T>
{
  /**
   * Technical entity name for AllocationForMainAccounts.
   */
  static override _entityName = 'AllocationForMainAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AllocationForMainAccounts entity.
   */
  static _keys = ['dataAreaId', 'MainAccountId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Account Id.
   */
  declare mainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Selection Criteria Display Value.
   * @nullable
   */
  declare sourceSelectionCriteriaDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Destination Keep Source Dimensions Display Value.
   * @nullable
   */
  declare destinationKeepSourceDimensionsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source Selection Criteria Dimensions Display Value.
   * @nullable
   */
  declare sourceSelectionCriteriaDimensionsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Allocation Percentage.
   */
  declare allocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Destination Dimensions Display Value.
   * @nullable
   */
  declare destinationDimensionsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Destination Account Display Value.
   * @nullable
   */
  declare destinationAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: AllocationForMainAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface AllocationForMainAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  mainAccountId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  sourceSelectionCriteriaDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  destinationKeepSourceDimensionsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  sourceSelectionCriteriaDimensionsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  allocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  destinationDimensionsDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  destinationAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
