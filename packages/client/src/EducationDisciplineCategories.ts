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
import type { EducationDisciplineCategoriesApi } from './EducationDisciplineCategoriesApi';
import {
  EducationDisciplineGroups,
  EducationDisciplineGroupsType
} from './EducationDisciplineGroups';

/**
 * This class represents the entity "EducationDisciplineCategories" of service "d365_metadata".
 */
export class EducationDisciplineCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EducationDisciplineCategoriesType<T>
{
  /**
   * Technical entity name for EducationDisciplineCategories.
   */
  static override _entityName = 'EducationDisciplineCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EducationDisciplineCategories entity.
   */
  static _keys = ['EducationDisciplineCategory'];
  /**
   * Education Discipline Category.
   */
  declare educationDisciplineCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EducationDisciplineGroups} entity.
   */
  declare educationDisciplineGroups: EducationDisciplineGroups<T>[];

  constructor(_entityApi: EducationDisciplineCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface EducationDisciplineCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  educationDisciplineCategory: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  educationDisciplineGroups: EducationDisciplineGroupsType<T>[];
}
