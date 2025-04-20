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
import type { BatchServerSchedulesApi } from './BatchServerSchedulesApi';

/**
 * This class represents the entity "BatchServerSchedules" of service "d365_metadata".
 */
export class BatchServerSchedules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BatchServerSchedulesType<T>
{
  /**
   * Technical entity name for BatchServerSchedules.
   */
  static override _entityName = 'BatchServerSchedules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BatchServerSchedules entity.
   */
  static _keys = ['AOSInstanceName'];
  /**
   * Aos Instance Name.
   */
  declare aosInstanceName: DeserializedType<T, 'Edm.String'>;
  /**
   * End Time.
   */
  declare endTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Start Time.
   */
  declare startTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Maximum Batch Threads.
   */
  declare maximumBatchThreads: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: BatchServerSchedulesApi<T>) {
    super(_entityApi);
  }
}

export interface BatchServerSchedulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  aosInstanceName: DeserializedType<T, 'Edm.String'>;
  endTime: DeserializedType<T, 'Edm.Int32'>;
  startTime: DeserializedType<T, 'Edm.Int32'>;
  maximumBatchThreads: DeserializedType<T, 'Edm.Int32'>;
}
