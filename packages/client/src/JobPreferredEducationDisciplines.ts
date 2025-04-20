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
import type { JobPreferredEducationDisciplinesApi } from './JobPreferredEducationDisciplinesApi';
import { HrmSkillImportance } from './HrmSkillImportance';
import {
  EducationDisciplines,
  EducationDisciplinesType
} from './EducationDisciplines';
import { Jobs, JobsType } from './Jobs';

/**
 * This class represents the entity "JobPreferredEducationDisciplines" of service "d365_metadata".
 */
export class JobPreferredEducationDisciplines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JobPreferredEducationDisciplinesType<T>
{
  /**
   * Technical entity name for JobPreferredEducationDisciplines.
   */
  static override _entityName = 'JobPreferredEducationDisciplines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobPreferredEducationDisciplines entity.
   */
  static _keys = ['JobId', 'EducationId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;

  constructor(_entityApi: JobPreferredEducationDisciplinesApi<T>) {
    super(_entityApi);
  }
}

export interface JobPreferredEducationDisciplinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  educationId: DeserializedType<T, 'Edm.String'>;
  importance?: HrmSkillImportance | null;
  educationDiscipline?: EducationDisciplinesType<T> | null;
  job?: JobsType<T> | null;
}
