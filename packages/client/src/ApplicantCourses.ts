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
import type { ApplicantCoursesApi } from './ApplicantCoursesApi';

/**
 * This class represents the entity "ApplicantCourses" of service "d365_metadata".
 */
export class ApplicantCourses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApplicantCoursesType<T>
{
  /**
   * Technical entity name for ApplicantCourses.
   */
  static override _entityName = 'ApplicantCourses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApplicantCourses entity.
   */
  static _keys = ['ApplicantId', 'Courses', 'StartDate'];
  /**
   * Applicant Id.
   */
  declare applicantId: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: ApplicantCoursesApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicantCoursesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  applicantId: DeserializedType<T, 'Edm.String'>;
  courses: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  courseId?: DeserializedType<T, 'Edm.String'> | null;
  courseDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  location?: DeserializedType<T, 'Edm.String'> | null;
}
