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
import type { LedgerInterestDistributionRuleLedgerDimensionReferencesApi } from './LedgerInterestDistributionRuleLedgerDimensionReferencesApi';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "LedgerInterestDistributionRuleLedgerDimensionReferences" of service "d365_metadata".
 */
export class LedgerInterestDistributionRuleLedgerDimensionReferences<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerInterestDistributionRuleLedgerDimensionReferencesType<T>
{
  /**
   * Technical entity name for LedgerInterestDistributionRuleLedgerDimensionReferences.
   */
  static override _entityName =
    'LedgerInterestDistributionRuleLedgerDimensionReferences';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerInterestDistributionRuleLedgerDimensionReferences entity.
   */
  static _keys = [];
  /**
   * Cash Account Display Value.
   * @nullable
   */
  declare cashAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Account Display Value.
   * @nullable
   */
  declare ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Area Id.
   * @nullable
   */
  declare dataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare ledgerAccountDimension?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare cashAccountDimension?: DimensionCombinations<T> | null;

  constructor(
    _entityApi: LedgerInterestDistributionRuleLedgerDimensionReferencesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface LedgerInterestDistributionRuleLedgerDimensionReferencesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  cashAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  ledgerAccountDimension?: DimensionCombinationsType<T> | null;
  cashAccountDimension?: DimensionCombinationsType<T> | null;
}
