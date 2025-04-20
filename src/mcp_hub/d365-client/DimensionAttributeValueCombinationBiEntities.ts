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
import type { DimensionAttributeValueCombinationBiEntitiesApi } from './DimensionAttributeValueCombinationBiEntitiesApi';

/**
 * This class represents the entity "DimensionAttributeValueCombinationBiEntities" of service "d365_metadata".
 */
export class DimensionAttributeValueCombinationBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimensionAttributeValueCombinationBiEntitiesType<T>
{
  /**
   * Technical entity name for DimensionAttributeValueCombinationBiEntities.
   */
  static override _entityName = 'DimensionAttributeValueCombinationBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimensionAttributeValueCombinationBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Dimension Values Json.
   * @nullable
   */
  declare dimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Value.
   * @nullable
   */
  declare displayValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimensionAttributeValueCombinationBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface DimensionAttributeValueCombinationBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  dimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  displayValue?: DeserializedType<T, 'Edm.String'> | null;
}
