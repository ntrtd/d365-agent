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
import type { CompensationPerformancePlansApi } from './CompensationPerformancePlansApi';
import {
  CompensationPayPerformanceAllocations,
  CompensationPayPerformanceAllocationsType
} from './CompensationPayPerformanceAllocations';

/**
 * This class represents the entity "CompensationPerformancePlans" of service "d365_metadata".
 */
export class CompensationPerformancePlans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CompensationPerformancePlansType<T>
{
  /**
   * Technical entity name for CompensationPerformancePlans.
   */
  static override _entityName = 'CompensationPerformancePlans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationPerformancePlans entity.
   */
  static _keys = ['dataAreaId', 'Plan'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan.
   */
  declare plan: DeserializedType<T, 'Edm.String'>;
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
   * One-to-many navigation property to the {@link CompensationPayPerformanceAllocations} entity.
   */
  declare compensationPayPerformanceAllocations: CompensationPayPerformanceAllocations<T>[];

  constructor(_entityApi: CompensationPerformancePlansApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationPerformancePlansType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  plan: DeserializedType<T, 'Edm.String'>;
  expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  compensationPayPerformanceAllocations: CompensationPayPerformanceAllocationsType<T>[];
}
