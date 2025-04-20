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
import type { PersonSkillsApi } from './PersonSkillsApi';
import { HrmSkillLevelType } from './HrmSkillLevelType';
import { NoYes } from './NoYes';
import { People, PeopleType } from './People';
import { Workers, WorkersType } from './Workers';
import { RatingLevels, RatingLevelsType } from './RatingLevels';
import { Skills, SkillsType } from './Skills';

/**
 * This class represents the entity "PersonSkills" of service "d365_metadata".
 */
export class PersonSkills<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonSkillsType<T>
{
  /**
   * Technical entity name for PersonSkills.
   */
  static override _entityName = 'PersonSkills';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonSkills entity.
   */
  static _keys = ['PartyNumber', 'LevelType', 'SkillId', 'LevelDate'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
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
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare relatedRatingLevelExaminer?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare relatedCertifier?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link RatingLevels} entity.
   */
  declare ratingLevel?: RatingLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link Skills} entity.
   */
  declare skill?: Skills<T> | null;

  constructor(_entityApi: PersonSkillsApi<T>) {
    super(_entityApi);
  }
}

export interface PersonSkillsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  levelType?: HrmSkillLevelType | null;
  skillId: DeserializedType<T, 'Edm.String'>;
  levelDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  certifier?: DeserializedType<T, 'Edm.String'> | null;
  ratingId?: DeserializedType<T, 'Edm.String'> | null;
  verified?: NoYes | null;
  yearsOfExperience: DeserializedType<T, 'Edm.Decimal'>;
  ratingLevelExaminer?: DeserializedType<T, 'Edm.String'> | null;
  levelId?: DeserializedType<T, 'Edm.String'> | null;
  person?: PeopleType<T> | null;
  relatedRatingLevelExaminer?: WorkersType<T> | null;
  relatedCertifier?: WorkersType<T> | null;
  ratingLevel?: RatingLevelsType<T> | null;
  skill?: SkillsType<T> | null;
}
