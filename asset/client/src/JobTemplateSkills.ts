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
import type { JobTemplateSkillsApi } from './JobTemplateSkillsApi';
import { HrmSkillImportance } from './HrmSkillImportance';
import { JobTemplates, JobTemplatesType } from './JobTemplates';
import { RatingLevels, RatingLevelsType } from './RatingLevels';
import { Skills, SkillsType } from './Skills';

/**
 * This class represents the entity "JobTemplateSkills" of service "d365_metadata".
 */
export class JobTemplateSkills<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobTemplateSkillsType<T>
{
  /**
   * Technical entity name for JobTemplateSkills.
   */
  static override _entityName = 'JobTemplateSkills';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobTemplateSkills entity.
   */
  static _keys = ['JobTemplateId', 'SkillId'];
  /**
   * Job Template Id.
   */
  declare jobTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Skill Id.
   */
  declare skillId: DeserializedType<T, 'Edm.String'>;
  /**
   * Importance.
   * @nullable
   */
  declare importance?: HrmSkillImportance | null;
  /**
   * Rating Id.
   * @nullable
   */
  declare ratingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Level Id.
   * @nullable
   */
  declare levelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link JobTemplates} entity.
   */
  declare jobTemplate?: JobTemplates<T> | null;
  /**
   * One-to-one navigation property to the {@link RatingLevels} entity.
   */
  declare ratingLevel?: RatingLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link Skills} entity.
   */
  declare skill?: Skills<T> | null;

  constructor(_entityApi: JobTemplateSkillsApi<T>) {
    super(_entityApi);
  }
}

export interface JobTemplateSkillsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobTemplateId: DeserializedType<T, 'Edm.String'>;
  skillId: DeserializedType<T, 'Edm.String'>;
  importance?: HrmSkillImportance | null;
  ratingId?: DeserializedType<T, 'Edm.String'> | null;
  levelId?: DeserializedType<T, 'Edm.String'> | null;
  jobTemplate?: JobTemplatesType<T> | null;
  ratingLevel?: RatingLevelsType<T> | null;
  skill?: SkillsType<T> | null;
}
