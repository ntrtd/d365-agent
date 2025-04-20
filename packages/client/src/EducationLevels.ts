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
import type { EducationLevelsApi } from './EducationLevelsApi';
import {
  RecruitingRequestEducations,
  RecruitingRequestEducationsType
} from './RecruitingRequestEducations';

/**
 * This class represents the entity "EducationLevels" of service "d365_metadata".
 */
export class EducationLevels<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EducationLevelsType<T>
{
  /**
   * Technical entity name for EducationLevels.
   */
  static override _entityName = 'EducationLevels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EducationLevels entity.
   */
  static _keys = ['EducationLevelId'];
  /**
   * Education Level Id.
   */
  declare educationLevelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RecruitingRequestEducations} entity.
   */
  declare recruitingRequestEducationLevels: RecruitingRequestEducations<T>[];

  constructor(_entityApi: EducationLevelsApi<T>) {
    super(_entityApi);
  }
}

export interface EducationLevelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  educationLevelId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  recruitingRequestEducationLevels: RecruitingRequestEducationsType<T>[];
}
