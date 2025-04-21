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
import type { JobTasksApi } from './JobTasksApi';
import {
  JobTaskAssignments,
  JobTaskAssignmentsType
} from './JobTaskAssignments';
import { JobTemplateTasks, JobTemplateTasksType } from './JobTemplateTasks';

/**
 * This class represents the entity "JobTasks" of service "d365_metadata".
 */
export class JobTasks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobTasksType<T>
{
  /**
   * Technical entity name for JobTasks.
   */
  static override _entityName = 'JobTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobTasks entity.
   */
  static _keys = ['JobTaskId'];
  /**
   * Job Task Id.
   */
  declare jobTaskId: DeserializedType<T, 'Edm.String'>;
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
  /**
   * One-to-many navigation property to the {@link JobTaskAssignments} entity.
   */
  declare jobTaskAssignments: JobTaskAssignments<T>[];
  /**
   * One-to-many navigation property to the {@link JobTemplateTasks} entity.
   */
  declare jobTemplateTasks: JobTemplateTasks<T>[];

  constructor(_entityApi: JobTasksApi<T>) {
    super(_entityApi);
  }
}

export interface JobTasksType<T extends DeSerializers = DefaultDeSerializers> {
  jobTaskId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  jobTaskAssignments: JobTaskAssignmentsType<T>[];
  jobTemplateTasks: JobTemplateTasksType<T>[];
}
