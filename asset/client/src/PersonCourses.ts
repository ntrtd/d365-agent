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
import type { PersonCoursesApi } from './PersonCoursesApi';
import { People, PeopleType } from './People';
import { Courses, CoursesType } from './Courses';

/**
 * This class represents the entity "PersonCourses" of service "d365_metadata".
 */
export class PersonCourses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonCoursesType<T>
{
  /**
   * Technical entity name for PersonCourses.
   */
  static override _entityName = 'PersonCourses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonCourses entity.
   */
  static _keys = ['PartyNumber', 'Courses', 'StartDate'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Courses.
   */
  declare courses: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Course Id.
   * @nullable
   */
  declare courseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Course Data Area Id.
   * @nullable
   */
  declare courseDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link Courses} entity.
   */
  declare course?: Courses<T> | null;

  constructor(_entityApi: PersonCoursesApi<T>) {
    super(_entityApi);
  }
}

export interface PersonCoursesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  courses: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  courseId?: DeserializedType<T, 'Edm.String'> | null;
  courseDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  location?: DeserializedType<T, 'Edm.String'> | null;
  person?: PeopleType<T> | null;
  course?: CoursesType<T> | null;
}
