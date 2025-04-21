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
import type { WorkerCoursesApi } from './WorkerCoursesApi';

/**
 * This class represents the entity "WorkerCourses" of service "d365_metadata".
 */
export class WorkerCourses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkerCoursesType<T>
{
  /**
   * Technical entity name for WorkerCourses.
   */
  static override _entityName = 'WorkerCourses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerCourses entity.
   */
  static _keys = ['PersonnelNumber', 'StartDate', 'Courses'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Courses.
   */
  declare courses: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: WorkerCoursesApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerCoursesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  courses: DeserializedType<T, 'Edm.String'>;
  courseId?: DeserializedType<T, 'Edm.String'> | null;
  courseDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  location?: DeserializedType<T, 'Edm.String'> | null;
}
