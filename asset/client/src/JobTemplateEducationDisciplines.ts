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
import type { JobTemplateEducationDisciplinesApi } from './JobTemplateEducationDisciplinesApi';
import { HrmSkillImportance } from './HrmSkillImportance';
import {
  EducationDisciplines,
  EducationDisciplinesType
} from './EducationDisciplines';
import { JobTemplates, JobTemplatesType } from './JobTemplates';

/**
 * This class represents the entity "JobTemplateEducationDisciplines" of service "d365_metadata".
 */
export class JobTemplateEducationDisciplines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JobTemplateEducationDisciplinesType<T>
{
  /**
   * Technical entity name for JobTemplateEducationDisciplines.
   */
  static override _entityName = 'JobTemplateEducationDisciplines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobTemplateEducationDisciplines entity.
   */
  static _keys = ['JobTemplateId', 'EducationId'];
  /**
   * Job Template Id.
   */
  declare jobTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Education Id.
   */
  declare educationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Importance.
   * @nullable
   */
  declare importance?: HrmSkillImportance | null;
  /**
   * One-to-one navigation property to the {@link EducationDisciplines} entity.
   */
  declare educationDiscipline?: EducationDisciplines<T> | null;
  /**
   * One-to-one navigation property to the {@link JobTemplates} entity.
   */
  declare jobTemplate?: JobTemplates<T> | null;

  constructor(_entityApi: JobTemplateEducationDisciplinesApi<T>) {
    super(_entityApi);
  }
}

export interface JobTemplateEducationDisciplinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobTemplateId: DeserializedType<T, 'Edm.String'>;
  educationId: DeserializedType<T, 'Edm.String'>;
  importance?: HrmSkillImportance | null;
  educationDiscipline?: EducationDisciplinesType<T> | null;
  jobTemplate?: JobTemplatesType<T> | null;
}
