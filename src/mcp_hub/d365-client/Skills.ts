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
import type { SkillsApi } from './SkillsApi';
import {
  JobPreferredSkills,
  JobPreferredSkillsType
} from './JobPreferredSkills';
import {
  RecruitingRequestSkills,
  RecruitingRequestSkillsType
} from './RecruitingRequestSkills';
import {
  CourseTypeSkillProfiles,
  CourseTypeSkillProfilesType
} from './CourseTypeSkillProfiles';
import { PersonSkills, PersonSkillsType } from './PersonSkills';
import { JobTemplateSkills, JobTemplateSkillsType } from './JobTemplateSkills';

/**
 * This class represents the entity "Skills" of service "d365_metadata".
 */
export class Skills<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SkillsType<T>
{
  /**
   * Technical entity name for Skills.
   */
  static override _entityName = 'Skills';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Skills entity.
   */
  static _keys = ['Skill'];
  /**
   * Skill.
   */
  declare skill: DeserializedType<T, 'Edm.String'>;
  /**
   * Rating Id.
   * @nullable
   */
  declare ratingId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Skill Type Id.
   * @nullable
   */
  declare skillTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link JobPreferredSkills} entity.
   */
  declare jobPreferredSkill?: JobPreferredSkills<T> | null;
  /**
   * One-to-many navigation property to the {@link RecruitingRequestSkills} entity.
   */
  declare recruitingRequestSkills: RecruitingRequestSkills<T>[];
  /**
   * One-to-many navigation property to the {@link CourseTypeSkillProfiles} entity.
   */
  declare courseTypeSkillProfile: CourseTypeSkillProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link PersonSkills} entity.
   */
  declare personSkill: PersonSkills<T>[];
  /**
   * One-to-many navigation property to the {@link JobTemplateSkills} entity.
   */
  declare jobTemplateSkills: JobTemplateSkills<T>[];

  constructor(_entityApi: SkillsApi<T>) {
    super(_entityApi);
  }
}

export interface SkillsType<T extends DeSerializers = DefaultDeSerializers> {
  skill: DeserializedType<T, 'Edm.String'>;
  ratingId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  skillTypeId?: DeserializedType<T, 'Edm.String'> | null;
  jobPreferredSkill?: JobPreferredSkillsType<T> | null;
  recruitingRequestSkills: RecruitingRequestSkillsType<T>[];
  courseTypeSkillProfile: CourseTypeSkillProfilesType<T>[];
  personSkill: PersonSkillsType<T>[];
  jobTemplateSkills: JobTemplateSkillsType<T>[];
}
