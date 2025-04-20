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
import type { CompensationPerformanceRatingsApi } from './CompensationPerformanceRatingsApi';
import {
  CompensationPayPerformanceAllocationLines,
  CompensationPayPerformanceAllocationLinesType
} from './CompensationPayPerformanceAllocationLines';

/**
 * This class represents the entity "CompensationPerformanceRatings" of service "d365_metadata".
 */
export class CompensationPerformanceRatings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CompensationPerformanceRatingsType<T>
{
  /**
   * Technical entity name for CompensationPerformanceRatings.
   */
  static override _entityName = 'CompensationPerformanceRatings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationPerformanceRatings entity.
   */
  static _keys = ['dataAreaId', 'Rating'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rating.
   */
  declare rating: DeserializedType<T, 'Edm.String'>;
  /**
   * Expiration.
   */
  declare expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective.
   */
  declare effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link CompensationPayPerformanceAllocationLines} entity.
   */
  declare compensationPayPerformanceAllocationLine: CompensationPayPerformanceAllocationLines<T>[];

  constructor(_entityApi: CompensationPerformanceRatingsApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationPerformanceRatingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rating: DeserializedType<T, 'Edm.String'>;
  expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  compensationPayPerformanceAllocationLine: CompensationPayPerformanceAllocationLinesType<T>[];
}
