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
import type { RatingLevelsApi } from './RatingLevelsApi';
import { DiscussionGoals, DiscussionGoalsType } from './DiscussionGoals';
import {
  JobPreferredSkills,
  JobPreferredSkillsType
} from './JobPreferredSkills';
import { DiscussionTopics, DiscussionTopicsType } from './DiscussionTopics';
import {
  RecruitingRequestSkills,
  RecruitingRequestSkillsType
} from './RecruitingRequestSkills';
import {
  CompensationPayPerformanceAllocationLines,
  CompensationPayPerformanceAllocationLinesType
} from './CompensationPayPerformanceAllocationLines';
import {
  CourseTypeSkillProfiles,
  CourseTypeSkillProfilesType
} from './CourseTypeSkillProfiles';
import { RatingModels, RatingModelsType } from './RatingModels';
import { PersonSkills, PersonSkillsType } from './PersonSkills';
import { Discussions, DiscussionsType } from './Discussions';
import { JobTemplateSkills, JobTemplateSkillsType } from './JobTemplateSkills';

/**
 * This class represents the entity "RatingLevels" of service "d365_metadata".
 */
export class RatingLevels<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RatingLevelsType<T>
{
  /**
   * Technical entity name for RatingLevels.
   */
  static override _entityName = 'RatingLevels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RatingLevels entity.
   */
  static _keys = ['RatingLevelId', 'RatingModelId'];
  /**
   * Rating Level Id.
   */
  declare ratingLevelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rating Model Id.
   */
  declare ratingModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Factor.
   */
  declare factor: DeserializedType<T, 'Edm.Int32'>;
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
   * One-to-many navigation property to the {@link DiscussionGoals} entity.
   */
  declare discussionGoalsEmployee: DiscussionGoals<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionGoals} entity.
   */
  declare discussionGoalsManager: DiscussionGoals<T>[];
  /**
   * One-to-many navigation property to the {@link JobPreferredSkills} entity.
   */
  declare jobPreferredSkills: JobPreferredSkills<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionTopics} entity.
   */
  declare discussionTopicsEmployee: DiscussionTopics<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionTopics} entity.
   */
  declare discussionTopicsManager: DiscussionTopics<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequestSkills} entity.
   */
  declare recruitingRequestSkills: RecruitingRequestSkills<T>[];
  /**
   * One-to-many navigation property to the {@link CompensationPayPerformanceAllocationLines} entity.
   */
  declare compPerfAllocationLine: CompensationPayPerformanceAllocationLines<T>[];
  /**
   * One-to-many navigation property to the {@link CourseTypeSkillProfiles} entity.
   */
  declare courseTypeSkillProfile: CourseTypeSkillProfiles<T>[];
  /**
   * One-to-one navigation property to the {@link RatingModels} entity.
   */
  declare ratingModelEntity?: RatingModels<T> | null;
  /**
   * One-to-many navigation property to the {@link PersonSkills} entity.
   */
  declare personSkill: PersonSkills<T>[];
  /**
   * One-to-many navigation property to the {@link Discussions} entity.
   */
  declare discussion: Discussions<T>[];
  /**
   * One-to-many navigation property to the {@link JobTemplateSkills} entity.
   */
  declare jobTemplateSkills: JobTemplateSkills<T>[];

  constructor(_entityApi: RatingLevelsApi<T>) {
    super(_entityApi);
  }
}

export interface RatingLevelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ratingLevelId: DeserializedType<T, 'Edm.String'>;
  ratingModelId: DeserializedType<T, 'Edm.String'>;
  factor: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  discussionGoalsEmployee: DiscussionGoalsType<T>[];
  discussionGoalsManager: DiscussionGoalsType<T>[];
  jobPreferredSkills: JobPreferredSkillsType<T>[];
  discussionTopicsEmployee: DiscussionTopicsType<T>[];
  discussionTopicsManager: DiscussionTopicsType<T>[];
  recruitingRequestSkills: RecruitingRequestSkillsType<T>[];
  compPerfAllocationLine: CompensationPayPerformanceAllocationLinesType<T>[];
  courseTypeSkillProfile: CourseTypeSkillProfilesType<T>[];
  ratingModelEntity?: RatingModelsType<T> | null;
  personSkill: PersonSkillsType<T>[];
  discussion: DiscussionsType<T>[];
  jobTemplateSkills: JobTemplateSkillsType<T>[];
}
