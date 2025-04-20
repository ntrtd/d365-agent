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
import type { RecruitingRequestSkillsApi } from './RecruitingRequestSkillsApi';
import { RatingModels, RatingModelsType } from './RatingModels';
import {
  RecruitingRequests,
  RecruitingRequestsType
} from './RecruitingRequests';
import { RatingLevels, RatingLevelsType } from './RatingLevels';
import { Skills, SkillsType } from './Skills';

/**
 * This class represents the entity "RecruitingRequestSkills" of service "d365_metadata".
 */
export class RecruitingRequestSkills<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RecruitingRequestSkillsType<T>
{
  /**
   * Technical entity name for RecruitingRequestSkills.
   */
  static override _entityName = 'RecruitingRequestSkills';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RecruitingRequestSkills entity.
   */
  static _keys = ['dataAreaId', 'RecruitingRequestId', 'SkillId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Recruiting Request Id.
   */
  declare recruitingRequestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Skill Id.
   */
  declare skillId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rating Level Id.
   * @nullable
   */
  declare ratingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rating Level Description.
   * @nullable
   */
  declare ratingLevelDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rating Model Id.
   * @nullable
   */
  declare ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skill Description.
   * @nullable
   */
  declare skillDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RatingModels} entity.
   */
  declare ratingModel?: RatingModels<T> | null;
  /**
   * One-to-one navigation property to the {@link RecruitingRequests} entity.
   */
  declare recruitingRequest?: RecruitingRequests<T> | null;
  /**
   * One-to-one navigation property to the {@link RatingLevels} entity.
   */
  declare ratingLevel?: RatingLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link Skills} entity.
   */
  declare skill?: Skills<T> | null;

  constructor(_entityApi: RecruitingRequestSkillsApi<T>) {
    super(_entityApi);
  }
}

export interface RecruitingRequestSkillsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recruitingRequestId: DeserializedType<T, 'Edm.String'>;
  skillId: DeserializedType<T, 'Edm.String'>;
  ratingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  ratingLevelDescription?: DeserializedType<T, 'Edm.String'> | null;
  ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  skillDescription?: DeserializedType<T, 'Edm.String'> | null;
  ratingModel?: RatingModelsType<T> | null;
  recruitingRequest?: RecruitingRequestsType<T> | null;
  ratingLevel?: RatingLevelsType<T> | null;
  skill?: SkillsType<T> | null;
}
