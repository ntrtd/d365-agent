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
import type { CourseTablesApi } from './CourseTablesApi';
import { HrmCourseSetup } from './HrmCourseSetup';
import { NoYes } from './NoYes';
import { HrmCourseTableStatus } from './HrmCourseTableStatus';
import { CourseRooms, CourseRoomsType } from './CourseRooms';
import { CourseLocations, CourseLocationsType } from './CourseLocations';
import { CourseTypes, CourseTypesType } from './CourseTypes';
import { CourseInstructors, CourseInstructorsType } from './CourseInstructors';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "CourseTables" of service "d365_metadata".
 */
export class CourseTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CourseTablesType<T>
{
  /**
   * Technical entity name for CourseTables.
   */
  static override _entityName = 'CourseTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseTables entity.
   */
  static _keys = ['dataAreaId', 'CourseId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Course Id.
   */
  declare courseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Setup.
   * @nullable
   */
  declare setup?: HrmCourseSetup | null;
  /**
   * Courses.
   * @nullable
   */
  declare courses?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow.
   * @nullable
   */
  declare workflow?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Employee Self Registration.
   * @nullable
   */
  declare allowEmployeeSelfRegistration?: NoYes | null;
  /**
   * Registration Deadline.
   */
  declare registrationDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Classroom.
   * @nullable
   */
  declare classroom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date Time.
   */
  declare startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Max Attendees.
   */
  declare maxAttendees: DeserializedType<T, 'Edm.Int32'>;
  /**
   * End Date Time.
   */
  declare endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Number Of Participants.
   */
  declare minimumNumberOfParticipants: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Course Location.
   * @nullable
   */
  declare courseLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Course Type Id.
   * @nullable
   */
  declare courseTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructor Id.
   */
  declare instructorId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Course Status.
   * @nullable
   */
  declare courseStatus?: HrmCourseTableStatus | null;
  /**
   * Organizer.
   * @nullable
   */
  declare organizer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CourseRooms} entity.
   */
  declare courseRoom?: CourseRooms<T> | null;
  /**
   * One-to-one navigation property to the {@link CourseLocations} entity.
   */
  declare relatedCourseLocation?: CourseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link CourseTypes} entity.
   */
  declare courseType?: CourseTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link CourseInstructors} entity.
   */
  declare courseInstructor?: CourseInstructors<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: CourseTablesApi<T>) {
    super(_entityApi);
  }
}

export interface CourseTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  courseId: DeserializedType<T, 'Edm.String'>;
  setup?: HrmCourseSetup | null;
  courses?: DeserializedType<T, 'Edm.String'> | null;
  workflow?: DeserializedType<T, 'Edm.String'> | null;
  allowEmployeeSelfRegistration?: NoYes | null;
  registrationDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  classroom?: DeserializedType<T, 'Edm.String'> | null;
  startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maxAttendees: DeserializedType<T, 'Edm.Int32'>;
  endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  minimumNumberOfParticipants: DeserializedType<T, 'Edm.Int32'>;
  courseLocation?: DeserializedType<T, 'Edm.String'> | null;
  courseTypeId?: DeserializedType<T, 'Edm.String'> | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  instructorId: DeserializedType<T, 'Edm.Int64'>;
  courseStatus?: HrmCourseTableStatus | null;
  organizer?: DeserializedType<T, 'Edm.String'> | null;
  courseRoom?: CourseRoomsType<T> | null;
  relatedCourseLocation?: CourseLocationsType<T> | null;
  courseType?: CourseTypesType<T> | null;
  courseInstructor?: CourseInstructorsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
