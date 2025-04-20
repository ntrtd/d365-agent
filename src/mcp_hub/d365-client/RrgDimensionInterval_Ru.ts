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
import type { RrgDimensionInterval_RuApi } from './RrgDimensionInterval_RuApi';

/**
 * This class represents the entity "RRGDimensionInterval_RU" of service "d365_metadata".
 */
export class RrgDimensionInterval_Ru<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RrgDimensionInterval_RuType<T>
{
  /**
   * Technical entity name for RrgDimensionInterval_Ru.
   */
  static override _entityName = 'RRGDimensionInterval_RU';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RrgDimensionInterval_Ru entity.
   */
  static _keys = [
    'dataAreaId',
    'DimensionAttributeName',
    'DimensionFromValue',
    'DimensionToValue',
    'RefLineId',
    'RefTableName'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Attribute Name.
   */
  declare dimensionAttributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension From Value.
   */
  declare dimensionFromValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension To Value.
   */
  declare dimensionToValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Line Id.
   */
  declare refLineId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Table Name.
   */
  declare refTableName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RrgDimensionInterval_RuApi<T>) {
    super(_entityApi);
  }
}

export interface RrgDimensionInterval_RuType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  dimensionAttributeName: DeserializedType<T, 'Edm.String'>;
  dimensionFromValue: DeserializedType<T, 'Edm.String'>;
  dimensionToValue: DeserializedType<T, 'Edm.String'>;
  refLineId: DeserializedType<T, 'Edm.String'>;
  refTableName: DeserializedType<T, 'Edm.String'>;
}
