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
import type { CountingReasonCodeGroupRelationsApi } from './CountingReasonCodeGroupRelationsApi';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "CountingReasonCodeGroupRelations" of service "d365_metadata".
 */
export class CountingReasonCodeGroupRelations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CountingReasonCodeGroupRelationsType<T>
{
  /**
   * Technical entity name for CountingReasonCodeGroupRelations.
   */
  static override _entityName = 'CountingReasonCodeGroupRelations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CountingReasonCodeGroupRelations entity.
   */
  static _keys = ['dataAreaId', 'ReasonCode', 'ReasonCodeGroupName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code.
   */
  declare reasonCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code Group Name.
   */
  declare reasonCodeGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code Description.
   * @nullable
   */
  declare reasonCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Code Ledger Dimension Display Value.
   * @nullable
   */
  declare reasonCodeLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reason Code Group Description.
   * @nullable
   */
  declare reasonCodeGroupDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: CountingReasonCodeGroupRelationsApi<T>) {
    super(_entityApi);
  }
}

export interface CountingReasonCodeGroupRelationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reasonCode: DeserializedType<T, 'Edm.String'>;
  reasonCodeGroupName: DeserializedType<T, 'Edm.String'>;
  reasonCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  reasonCodeLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  reasonCodeGroupDescription?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
