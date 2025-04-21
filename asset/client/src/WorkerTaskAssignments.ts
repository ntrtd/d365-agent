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
import type { WorkerTaskAssignmentsApi } from './WorkerTaskAssignmentsApi';

/**
 * This class represents the entity "WorkerTaskAssignments" of service "d365_metadata".
 */
export class WorkerTaskAssignments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerTaskAssignmentsType<T>
{
  /**
   * Technical entity name for WorkerTaskAssignments.
   */
  static override _entityName = 'WorkerTaskAssignments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerTaskAssignments entity.
   */
  static _keys = ['WorkerPersonnelNumber', 'WorkerTaskId'];
  /**
   * Worker Personnel Number.
   */
  declare workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker Task Id.
   */
  declare workerTaskId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: WorkerTaskAssignmentsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerTaskAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  workerTaskId: DeserializedType<T, 'Edm.String'>;
}
