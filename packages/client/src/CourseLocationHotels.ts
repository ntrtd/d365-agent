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
import type { CourseLocationHotelsApi } from './CourseLocationHotelsApi';
import { Courses, CoursesType } from './Courses';
import { CourseLocations, CourseLocationsType } from './CourseLocations';
import { CourseHotels, CourseHotelsType } from './CourseHotels';

/**
 * This class represents the entity "CourseLocationHotels" of service "d365_metadata".
 */
export class CourseLocationHotels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CourseLocationHotelsType<T>
{
  /**
   * Technical entity name for CourseLocationHotels.
   */
  static override _entityName = 'CourseLocationHotels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseLocationHotels entity.
   */
  static _keys = ['dataAreaId', 'CourseId', 'CourseLocation', 'Hotel'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Course Id.
   */
  declare courseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Course Location.
   */
  declare courseLocation: DeserializedType<T, 'Edm.String'>;
  /**
   * Hotel.
   */
  declare hotel: DeserializedType<T, 'Edm.String'>;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Courses} entity.
   */
  declare course?: Courses<T> | null;
  /**
   * One-to-one navigation property to the {@link CourseLocations} entity.
   */
  declare relatedCourseLocation?: CourseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link CourseHotels} entity.
   */
  declare courseHotel?: CourseHotels<T> | null;

  constructor(_entityApi: CourseLocationHotelsApi<T>) {
    super(_entityApi);
  }
}

export interface CourseLocationHotelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  courseId: DeserializedType<T, 'Edm.String'>;
  courseLocation: DeserializedType<T, 'Edm.String'>;
  hotel: DeserializedType<T, 'Edm.String'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  course?: CoursesType<T> | null;
  relatedCourseLocation?: CourseLocationsType<T> | null;
  courseHotel?: CourseHotelsType<T> | null;
}
