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
import type { JobPreferredSkillsApi } from './JobPreferredSkillsApi';
import { HrmSkillImportance } from './HrmSkillImportance';
import { RatingModels, RatingModelsType } from './RatingModels';
import { Jobs, JobsType } from './Jobs';
import { RatingLevels, RatingLevelsType } from './RatingLevels';
import { Skills, SkillsType } from './Skills';

/**
 * This class represents the entity "JobPreferredSkills" of service "d365_metadata".
 */
export class JobPreferredSkills<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobPreferredSkillsType<T>
{
  /**
   * Technical entity name for JobPreferredSkills.
   */
  static override _entityName = 'JobPreferredSkills';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobPreferredSkills entity.
   */
  static _keys = ['JobId', 'SkillId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Skill Id.
   */
  declare skillId: DeserializedType<T, 'Edm.String'>;
  /**
   * Level Id.
   * @nullable
   */
  declare levelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rating Id.
   * @nullable
   */
  declare ratingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Importance.
   * @nullable
   */
  declare importance?: HrmSkillImportance | null;
  /**
   * One-to-one navigation property to the {@link RatingModels} entity.
   */
  declare ratingModel?: RatingModels<T> | null;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-one navigation property to the {@link RatingLevels} entity.
   */
  declare ratingLevel?: RatingLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link Skills} entity.
   */
  declare skill?: Skills<T> | null;

  constructor(_entityApi: JobPreferredSkillsApi<T>) {
    super(_entityApi);
  }
}

export interface JobPreferredSkillsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  skillId: DeserializedType<T, 'Edm.String'>;
  levelId?: DeserializedType<T, 'Edm.String'> | null;
  ratingId?: DeserializedType<T, 'Edm.String'> | null;
  importance?: HrmSkillImportance | null;
  ratingModel?: RatingModelsType<T> | null;
  job?: JobsType<T> | null;
  ratingLevel?: RatingLevelsType<T> | null;
  skill?: SkillsType<T> | null;
}
