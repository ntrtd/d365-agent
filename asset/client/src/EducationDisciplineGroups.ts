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
import type { EducationDisciplineGroupsApi } from './EducationDisciplineGroupsApi';
import {
  EducationDisciplines,
  EducationDisciplinesType
} from './EducationDisciplines';
import {
  EducationDisciplineCategories,
  EducationDisciplineCategoriesType
} from './EducationDisciplineCategories';

/**
 * This class represents the entity "EducationDisciplineGroups" of service "d365_metadata".
 */
export class EducationDisciplineGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EducationDisciplineGroupsType<T>
{
  /**
   * Technical entity name for EducationDisciplineGroups.
   */
  static override _entityName = 'EducationDisciplineGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EducationDisciplineGroups entity.
   */
  static _keys = ['EducationId', 'EducationDisciplineCategoryId'];
  /**
   * Education Id.
   */
  declare educationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Education Discipline Category Id.
   */
  declare educationDisciplineCategoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link EducationDisciplines} entity.
   */
  declare educationDiscipline?: EducationDisciplines<T> | null;
  /**
   * One-to-one navigation property to the {@link EducationDisciplineCategories} entity.
   */
  declare educationDisciplineCategory?: EducationDisciplineCategories<T> | null;

  constructor(_entityApi: EducationDisciplineGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface EducationDisciplineGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  educationId: DeserializedType<T, 'Edm.String'>;
  educationDisciplineCategoryId: DeserializedType<T, 'Edm.String'>;
  educationDiscipline?: EducationDisciplinesType<T> | null;
  educationDisciplineCategory?: EducationDisciplineCategoriesType<T> | null;
}
