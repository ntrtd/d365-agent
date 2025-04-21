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
import type { WorkerTasksApi } from './WorkerTasksApi';

/**
 * This class represents the entity "WorkerTasks" of service "d365_metadata".
 */
export class WorkerTasks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkerTasksType<T>
{
  /**
   * Technical entity name for WorkerTasks.
   */
  static override _entityName = 'WorkerTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerTasks entity.
   */
  static _keys = ['WorkerTaskId'];
  /**
   * Worker Task Id.
   */
  declare workerTaskId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WorkerTasksApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workerTaskId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
}
