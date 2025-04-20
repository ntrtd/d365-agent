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
import type { CourseInstructorsApi } from './CourseInstructorsApi';
import { People, PeopleType } from './People';
import { CourseLocations, CourseLocationsType } from './CourseLocations';
import { CourseTables, CourseTablesType } from './CourseTables';

/**
 * This class represents the entity "CourseInstructors" of service "d365_metadata".
 */
export class CourseInstructors<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CourseInstructorsType<T>
{
  /**
   * Technical entity name for CourseInstructors.
   */
  static override _entityName = 'CourseInstructors';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseInstructors entity.
   */
  static _keys = ['dataAreaId', 'PersonId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Person Id.
   */
  declare personId: DeserializedType<T, 'Edm.String'>;
  /**
   * Course Location.
   * @nullable
   */
  declare courseLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link CourseLocations} entity.
   */
  declare location?: CourseLocations<T> | null;
  /**
   * One-to-many navigation property to the {@link CourseTables} entity.
   */
  declare course: CourseTables<T>[];

  constructor(_entityApi: CourseInstructorsApi<T>) {
    super(_entityApi);
  }
}

export interface CourseInstructorsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personId: DeserializedType<T, 'Edm.String'>;
  courseLocation?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  person?: PeopleType<T> | null;
  location?: CourseLocationsType<T> | null;
  course: CourseTablesType<T>[];
}
