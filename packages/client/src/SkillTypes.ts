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
import type { SkillTypesApi } from './SkillTypesApi';
import { DualWriteSkills, DualWriteSkillsType } from './DualWriteSkills';

/**
 * This class represents the entity "SkillTypes" of service "d365_metadata".
 */
export class SkillTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SkillTypesType<T>
{
  /**
   * Technical entity name for SkillTypes.
   */
  static override _entityName = 'SkillTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SkillTypes entity.
   */
  static _keys = ['SkillType'];
  /**
   * Skill Type.
   */
  declare skillType: DeserializedType<T, 'Edm.String'>;
  /**
   * Color.
   */
  declare color: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link DualWriteSkills} entity.
   */
  declare hcmSkill: DualWriteSkills<T>[];

  constructor(_entityApi: SkillTypesApi<T>) {
    super(_entityApi);
  }
}

export interface SkillTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  skillType: DeserializedType<T, 'Edm.String'>;
  color: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  hcmSkill: DualWriteSkillsType<T>[];
}
