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
import type { ApplicantSkillsApi } from './ApplicantSkillsApi';
import { HrmSkillLevelType } from './HrmSkillLevelType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ApplicantSkills" of service "d365_metadata".
 */
export class ApplicantSkills<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApplicantSkillsType<T>
{
  /**
   * Technical entity name for ApplicantSkills.
   */
  static override _entityName = 'ApplicantSkills';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApplicantSkills entity.
   */
  static _keys = ['ApplicantId', 'LevelType', 'SkillId', 'LevelDate'];
  /**
   * Applicant Id.
   */
  declare applicantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Level Type.
   * @nullable
   */
  declare levelType?: HrmSkillLevelType | null;
  /**
   * Skill Id.
   */
  declare skillId: DeserializedType<T, 'Edm.String'>;
  /**
   * Level Date.
   */
  declare levelDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Certifier.
   * @nullable
   */
  declare certifier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rating Id.
   * @nullable
   */
  declare ratingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Verified.
   * @nullable
   */
  declare verified?: NoYes | null;
  /**
   * Years Of Experience.
   */
  declare yearsOfExperience: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rating Level Examiner.
   * @nullable
   */
  declare ratingLevelExaminer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Level Id.
   * @nullable
   */
  declare levelId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ApplicantSkillsApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicantSkillsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  applicantId: DeserializedType<T, 'Edm.String'>;
  levelType?: HrmSkillLevelType | null;
  skillId: DeserializedType<T, 'Edm.String'>;
  levelDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  certifier?: DeserializedType<T, 'Edm.String'> | null;
  ratingId?: DeserializedType<T, 'Edm.String'> | null;
  verified?: NoYes | null;
  yearsOfExperience: DeserializedType<T, 'Edm.Decimal'>;
  ratingLevelExaminer?: DeserializedType<T, 'Edm.String'> | null;
  levelId?: DeserializedType<T, 'Edm.String'> | null;
}
