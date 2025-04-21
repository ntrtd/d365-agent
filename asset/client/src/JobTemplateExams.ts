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
import type { JobTemplateExamsApi } from './JobTemplateExamsApi';
import { JobTemplates, JobTemplatesType } from './JobTemplates';
import { TestTypes, TestTypesType } from './TestTypes';

/**
 * This class represents the entity "JobTemplateExams" of service "d365_metadata".
 */
export class JobTemplateExams<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobTemplateExamsType<T>
{
  /**
   * Technical entity name for JobTemplateExams.
   */
  static override _entityName = 'JobTemplateExams';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobTemplateExams entity.
   */
  static _keys = ['JobTemplateId', 'TestId'];
  /**
   * Job Template Id.
   */
  declare jobTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Test Id.
   */
  declare testId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link JobTemplates} entity.
   */
  declare jobTemplate?: JobTemplates<T> | null;
  /**
   * One-to-one navigation property to the {@link TestTypes} entity.
   */
  declare testType?: TestTypes<T> | null;

  constructor(_entityApi: JobTemplateExamsApi<T>) {
    super(_entityApi);
  }
}

export interface JobTemplateExamsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobTemplateId: DeserializedType<T, 'Edm.String'>;
  testId: DeserializedType<T, 'Edm.String'>;
  jobTemplate?: JobTemplatesType<T> | null;
  testType?: TestTypesType<T> | null;
}
