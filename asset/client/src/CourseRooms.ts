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
import type { CourseRoomsApi } from './CourseRoomsApi';
import { CourseLocations, CourseLocationsType } from './CourseLocations';
import { ClassroomGroups, ClassroomGroupsType } from './ClassroomGroups';
import { CourseTables, CourseTablesType } from './CourseTables';
import { Courses, CoursesType } from './Courses';

/**
 * This class represents the entity "CourseRooms" of service "d365_metadata".
 */
export class CourseRooms<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CourseRoomsType<T>
{
  /**
   * Technical entity name for CourseRooms.
   */
  static override _entityName = 'CourseRooms';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseRooms entity.
   */
  static _keys = ['dataAreaId', 'Classroom'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Classroom.
   */
  declare classroom: DeserializedType<T, 'Edm.String'>;
  /**
   * Max Attendees.
   */
  declare maxAttendees: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Course Location.
   * @nullable
   */
  declare courseLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Intensity.
   */
  declare useIntensity: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Classroom Group.
   * @nullable
   */
  declare classroomGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CourseLocations} entity.
   */
  declare location?: CourseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link ClassroomGroups} entity.
   */
  declare group?: ClassroomGroups<T> | null;
  /**
   * One-to-many navigation property to the {@link CourseTables} entity.
   */
  declare courseTable: CourseTables<T>[];
  /**
   * One-to-many navigation property to the {@link Courses} entity.
   */
  declare course: Courses<T>[];

  constructor(_entityApi: CourseRoomsApi<T>) {
    super(_entityApi);
  }
}

export interface CourseRoomsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  classroom: DeserializedType<T, 'Edm.String'>;
  maxAttendees: DeserializedType<T, 'Edm.Int32'>;
  courseLocation?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  useIntensity: DeserializedType<T, 'Edm.Int32'>;
  classroomGroup?: DeserializedType<T, 'Edm.String'> | null;
  location?: CourseLocationsType<T> | null;
  group?: ClassroomGroupsType<T> | null;
  courseTable: CourseTablesType<T>[];
  course: CoursesType<T>[];
}
