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
import type { CourseTypeSkillProfilesApi } from './CourseTypeSkillProfilesApi';
import { RatingModels, RatingModelsType } from './RatingModels';
import { CourseTypes, CourseTypesType } from './CourseTypes';
import { RatingLevels, RatingLevelsType } from './RatingLevels';
import { Skills, SkillsType } from './Skills';

/**
 * This class represents the entity "CourseTypeSkillProfiles" of service "d365_metadata".
 */
export class CourseTypeSkillProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CourseTypeSkillProfilesType<T>
{
  /**
   * Technical entity name for CourseTypeSkillProfiles.
   */
  static override _entityName = 'CourseTypeSkillProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseTypeSkillProfiles entity.
   */
  static _keys = ['CourseTypeId', 'SkillId'];
  /**
   * Course Type Id.
   */
  declare courseTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Skill Id.
   */
  declare skillId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link RatingModels} entity.
   */
  declare ratingModel?: RatingModels<T> | null;
  /**
   * One-to-one navigation property to the {@link CourseTypes} entity.
   */
  declare courseType?: CourseTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link RatingLevels} entity.
   */
  declare ratingLevel?: RatingLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link Skills} entity.
   */
  declare skill?: Skills<T> | null;

  constructor(_entityApi: CourseTypeSkillProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface CourseTypeSkillProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  courseTypeId: DeserializedType<T, 'Edm.String'>;
  skillId: DeserializedType<T, 'Edm.String'>;
  ratingId?: DeserializedType<T, 'Edm.String'> | null;
  levelId?: DeserializedType<T, 'Edm.String'> | null;
  ratingModel?: RatingModelsType<T> | null;
  courseType?: CourseTypesType<T> | null;
  ratingLevel?: RatingLevelsType<T> | null;
  skill?: SkillsType<T> | null;
}
