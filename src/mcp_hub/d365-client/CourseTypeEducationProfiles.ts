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
import type { CourseTypeEducationProfilesApi } from './CourseTypeEducationProfilesApi';
import {
  EducationDisciplines,
  EducationDisciplinesType
} from './EducationDisciplines';
import { CourseTypes, CourseTypesType } from './CourseTypes';

/**
 * This class represents the entity "CourseTypeEducationProfiles" of service "d365_metadata".
 */
export class CourseTypeEducationProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CourseTypeEducationProfilesType<T>
{
  /**
   * Technical entity name for CourseTypeEducationProfiles.
   */
  static override _entityName = 'CourseTypeEducationProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseTypeEducationProfiles entity.
   */
  static _keys = ['CourseTypeId', 'EducationId'];
  /**
   * Course Type Id.
   */
  declare courseTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Education Id.
   */
  declare educationId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link EducationDisciplines} entity.
   */
  declare educationDiscipline?: EducationDisciplines<T> | null;
  /**
   * One-to-one navigation property to the {@link CourseTypes} entity.
   */
  declare courseType?: CourseTypes<T> | null;

  constructor(_entityApi: CourseTypeEducationProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface CourseTypeEducationProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  courseTypeId: DeserializedType<T, 'Edm.String'>;
  educationId: DeserializedType<T, 'Edm.String'>;
  educationDiscipline?: EducationDisciplinesType<T> | null;
  courseType?: CourseTypesType<T> | null;
}
