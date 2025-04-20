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
import type { JobTemplateTasksApi } from './JobTemplateTasksApi';
import { JobTemplates, JobTemplatesType } from './JobTemplates';
import { JobTasks, JobTasksType } from './JobTasks';

/**
 * This class represents the entity "JobTemplateTasks" of service "d365_metadata".
 */
export class JobTemplateTasks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobTemplateTasksType<T>
{
  /**
   * Technical entity name for JobTemplateTasks.
   */
  static override _entityName = 'JobTemplateTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobTemplateTasks entity.
   */
  static _keys = ['JobTemplateId', 'JobTaskId'];
  /**
   * Job Template Id.
   */
  declare jobTemplateId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link JobTemplates} entity.
   */
  declare jobTemplate?: JobTemplates<T> | null;
  /**
   * One-to-one navigation property to the {@link JobTasks} entity.
   */
  declare jobTask?: JobTasks<T> | null;

  constructor(_entityApi: JobTemplateTasksApi<T>) {
    super(_entityApi);
  }
}

export interface JobTemplateTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobTemplateId: DeserializedType<T, 'Edm.String'>;
  jobTaskId: DeserializedType<T, 'Edm.String'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  jobTemplate?: JobTemplatesType<T> | null;
  jobTask?: JobTasksType<T> | null;
}
