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
import type { RatingModelsApi } from './RatingModelsApi';
import { DiscussionGoals, DiscussionGoalsType } from './DiscussionGoals';
import {
  JobPreferredSkills,
  JobPreferredSkillsType
} from './JobPreferredSkills';
import { DualWriteSkills, DualWriteSkillsType } from './DualWriteSkills';
import {
  HumanResourcesParameters,
  HumanResourcesParametersType
} from './HumanResourcesParameters';
import { DiscussionTopics, DiscussionTopicsType } from './DiscussionTopics';
import {
  RecruitingRequestSkills,
  RecruitingRequestSkillsType
} from './RecruitingRequestSkills';
import { Measurements, MeasurementsType } from './Measurements';
import {
  CourseTypeSkillProfiles,
  CourseTypeSkillProfilesType
} from './CourseTypeSkillProfiles';
import { RatingLevels, RatingLevelsType } from './RatingLevels';
import { Discussions, DiscussionsType } from './Discussions';
import {
  DiscussionTemplates,
  DiscussionTemplatesType
} from './DiscussionTemplates';

/**
 * This class represents the entity "RatingModels" of service "d365_metadata".
 */
export class RatingModels<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RatingModelsType<T>
{
  /**
   * Technical entity name for RatingModels.
   */
  static override _entityName = 'RatingModels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RatingModels entity.
   */
  static _keys = ['RatingModelId'];
  /**
   * Rating Model Id.
   */
  declare ratingModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DiscussionGoals} entity.
   */
  declare discussionGoal?: DiscussionGoals<T> | null;
  /**
   * One-to-many navigation property to the {@link JobPreferredSkills} entity.
   */
  declare jobPreferredSkill: JobPreferredSkills<T>[];
  /**
   * One-to-many navigation property to the {@link DualWriteSkills} entity.
   */
  declare hcmRatingModelHcmSkill: DualWriteSkills<T>[];
  /**
   * One-to-many navigation property to the {@link HumanResourcesParameters} entity.
   */
  declare humanResourcesParameters: HumanResourcesParameters<T>[];
  /**
   * One-to-one navigation property to the {@link DiscussionTopics} entity.
   */
  declare discussionTopic?: DiscussionTopics<T> | null;
  /**
   * One-to-many navigation property to the {@link RecruitingRequestSkills} entity.
   */
  declare recruitingRequestSkills: RecruitingRequestSkills<T>[];
  /**
   * One-to-many navigation property to the {@link Measurements} entity.
   */
  declare measurement: Measurements<T>[];
  /**
   * One-to-many navigation property to the {@link CourseTypeSkillProfiles} entity.
   */
  declare courseTypeSkillProfiles: CourseTypeSkillProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link RatingLevels} entity.
   */
  declare ratingLevels: RatingLevels<T>[];
  /**
   * One-to-many navigation property to the {@link Discussions} entity.
   */
  declare discussion: Discussions<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionTemplates} entity.
   */
  declare discussionTemplates: DiscussionTemplates<T>[];

  constructor(_entityApi: RatingModelsApi<T>) {
    super(_entityApi);
  }
}

export interface RatingModelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ratingModelId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  discussionGoal?: DiscussionGoalsType<T> | null;
  jobPreferredSkill: JobPreferredSkillsType<T>[];
  hcmRatingModelHcmSkill: DualWriteSkillsType<T>[];
  humanResourcesParameters: HumanResourcesParametersType<T>[];
  discussionTopic?: DiscussionTopicsType<T> | null;
  recruitingRequestSkills: RecruitingRequestSkillsType<T>[];
  measurement: MeasurementsType<T>[];
  courseTypeSkillProfiles: CourseTypeSkillProfilesType<T>[];
  ratingLevels: RatingLevelsType<T>[];
  discussion: DiscussionsType<T>[];
  discussionTemplates: DiscussionTemplatesType<T>[];
}
