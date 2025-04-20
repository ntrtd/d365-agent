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
import type { JobTaskAssignmentsApi } from './JobTaskAssignmentsApi';
import { Jobs, JobsType } from './Jobs';
import { JobTasks, JobTasksType } from './JobTasks';

/**
 * This class represents the entity "JobTaskAssignments" of service "d365_metadata".
 */
export class JobTaskAssignments<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobTaskAssignmentsType<T>
{
  /**
   * Technical entity name for JobTaskAssignments.
   */
  static override _entityName = 'JobTaskAssignments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobTaskAssignments entity.
   */
  static _keys = ['JobId', 'JobTaskId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Task Id.
   */
  declare jobTaskId: DeserializedType<T, 'Edm.String'>;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-one navigation property to the {@link JobTasks} entity.
   */
  declare jobTask?: JobTasks<T> | null;

  constructor(_entityApi: JobTaskAssignmentsApi<T>) {
    super(_entityApi);
  }
}

export interface JobTaskAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  jobTaskId: DeserializedType<T, 'Edm.String'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  job?: JobsType<T> | null;
  jobTask?: JobTasksType<T> | null;
}
