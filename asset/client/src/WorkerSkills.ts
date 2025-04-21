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
import type { WorkerSkillsApi } from './WorkerSkillsApi';
import { HrmSkillLevelType } from './HrmSkillLevelType';
import { NoYes } from './NoYes';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "WorkerSkills" of service "d365_metadata".
 */
export class WorkerSkills<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkerSkillsType<T>
{
  /**
   * Technical entity name for WorkerSkills.
   */
  static override _entityName = 'WorkerSkills';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerSkills entity.
   */
  static _keys = ['PersonnelNumber', 'LevelType', 'SkillId', 'LevelDate'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
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
   * Rating Level Examiner.
   * @nullable
   */
  declare ratingLevelExaminer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Years Of Experience.
   */
  declare yearsOfExperience: DeserializedType<T, 'Edm.Decimal'>;
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
   * Verified.
   * @nullable
   */
  declare verified?: NoYes | null;
  /**
   * Certifier.
   * @nullable
   */
  declare certifier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: WorkerSkillsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerSkillsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  levelType?: HrmSkillLevelType | null;
  skillId: DeserializedType<T, 'Edm.String'>;
  levelDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ratingLevelExaminer?: DeserializedType<T, 'Edm.String'> | null;
  yearsOfExperience: DeserializedType<T, 'Edm.Decimal'>;
  levelId?: DeserializedType<T, 'Edm.String'> | null;
  ratingId?: DeserializedType<T, 'Edm.String'> | null;
  verified?: NoYes | null;
  certifier?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
}
