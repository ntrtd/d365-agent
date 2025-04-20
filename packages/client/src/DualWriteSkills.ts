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
import type { DualWriteSkillsApi } from './DualWriteSkillsApi';
import { RatingModels, RatingModelsType } from './RatingModels';
import { SkillTypes, SkillTypesType } from './SkillTypes';

/**
 * This class represents the entity "DualWriteSkills" of service "d365_metadata".
 */
export class DualWriteSkills<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DualWriteSkillsType<T>
{
  /**
   * Technical entity name for DualWriteSkills.
   */
  static override _entityName = 'DualWriteSkills';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DualWriteSkills entity.
   */
  static _keys = ['Skill', 'CharacteristicType'];
  /**
   * Skill.
   */
  declare skill: DeserializedType<T, 'Edm.String'>;
  /**
   * Characteristic Type.
   */
  declare characteristicType: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link RatingModels} entity.
   */
  declare hcmRatingModel?: RatingModels<T> | null;
  /**
   * One-to-one navigation property to the {@link SkillTypes} entity.
   */
  declare hcmSkillType?: SkillTypes<T> | null;

  constructor(_entityApi: DualWriteSkillsApi<T>) {
    super(_entityApi);
  }
}

export interface DualWriteSkillsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  skill: DeserializedType<T, 'Edm.String'>;
  characteristicType: DeserializedType<T, 'Edm.String'>;
  ratingId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  skillTypeId?: DeserializedType<T, 'Edm.String'> | null;
  hcmRatingModel?: RatingModelsType<T> | null;
  hcmSkillType?: SkillTypesType<T> | null;
}
