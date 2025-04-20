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
import type { CoursesApi } from './CoursesApi';
import { HrmCourseSetup } from './HrmCourseSetup';
import { NoYes } from './NoYes';
import { HrmCourseRequiredForAttendees } from './HrmCourseRequiredForAttendees';
import { HrmCourseTableStatus } from './HrmCourseTableStatus';
import { HcmCourseCostOption } from './HcmCourseCostOption';
import {
  CourseParticipants,
  CourseParticipantsType
} from './CourseParticipants';
import {
  CourseLocationHotels,
  CourseLocationHotelsType
} from './CourseLocationHotels';
import {
  CourseParticipantsV2,
  CourseParticipantsV2Type
} from './CourseParticipantsV2';
import { PersonCourses, PersonCoursesType } from './PersonCourses';
import { CourseRooms, CourseRoomsType } from './CourseRooms';
import { CourseLocations, CourseLocationsType } from './CourseLocations';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { CourseTypes, CourseTypesType } from './CourseTypes';

/**
 * This class represents the entity "Courses" of service "d365_metadata".
 */
export class Courses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CoursesType<T>
{
  /**
   * Technical entity name for Courses.
   */
  static override _entityName = 'Courses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Courses entity.
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
   * Course Description.
   * @nullable
   */
  declare courseDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow.
   * @nullable
   */
  declare workflow?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Course Type Id.
   * @nullable
   */
  declare courseTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Course Link.
   * @nullable
   */
  declare courseLink?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Course Subjects.
   * @nullable
   */
  declare courseSubjects?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Setup.
   * @nullable
   */
  declare setup?: HrmCourseSetup | null;
  /**
   * Cost For Participant.
   */
  declare costForParticipant: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Max Participants.
   */
  declare maxParticipants: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cost For Course.
   */
  declare costForCourse: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Min Participants.
   */
  declare minParticipants: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Employee Self Registration.
   * @nullable
   */
  declare allowEmployeeSelfRegistration?: NoYes | null;
  /**
   * Require Attendees.
   * @nullable
   */
  declare requireAttendees?: HrmCourseRequiredForAttendees | null;
  /**
   * Target Audience.
   * @nullable
   */
  declare targetAudience?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Course Title.
   * @nullable
   */
  declare courseTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Course Status.
   * @nullable
   */
  declare courseStatus?: HrmCourseTableStatus | null;
  /**
   * End Date Time.
   */
  declare endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Course Location.
   * @nullable
   */
  declare courseLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Registration Deadline.
   */
  declare registrationDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Allow Self Attestation.
   * @nullable
   */
  declare allowSelfAttestation?: NoYes | null;
  /**
   * Classroom.
   * @nullable
   */
  declare classroom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Virtual.
   * @nullable
   */
  declare isVirtual?: NoYes | null;
  /**
   * Course Objectives.
   * @nullable
   */
  declare courseObjectives?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date Time.
   */
  declare startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cost Option.
   * @nullable
   */
  declare costOption?: HcmCourseCostOption | null;
  /**
   * Organizer.
   * @nullable
   */
  declare organizer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CourseParticipants} entity.
   */
  declare courseParticipant: CourseParticipants<T>[];
  /**
   * One-to-many navigation property to the {@link CourseLocationHotels} entity.
   */
  declare courseLocationHotel: CourseLocationHotels<T>[];
  /**
   * One-to-many navigation property to the {@link CourseParticipantsV2} entity.
   */
  declare courseParticipantV2: CourseParticipantsV2<T>[];
  /**
   * One-to-many navigation property to the {@link PersonCourses} entity.
   */
  declare personCourse: PersonCourses<T>[];
  /**
   * One-to-one navigation property to the {@link CourseRooms} entity.
   */
  declare courseRoom?: CourseRooms<T> | null;
  /**
   * One-to-one navigation property to the {@link CourseLocations} entity.
   */
  declare relatedCourseLocation?: CourseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link CourseTypes} entity.
   */
  declare courseType?: CourseTypes<T> | null;

  constructor(_entityApi: CoursesApi<T>) {
    super(_entityApi);
  }
}

export interface CoursesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  courseId: DeserializedType<T, 'Edm.String'>;
  courseDescription?: DeserializedType<T, 'Edm.String'> | null;
  workflow?: DeserializedType<T, 'Edm.String'> | null;
  courseTypeId?: DeserializedType<T, 'Edm.String'> | null;
  courseLink?: DeserializedType<T, 'Edm.String'> | null;
  courseSubjects?: DeserializedType<T, 'Edm.String'> | null;
  setup?: HrmCourseSetup | null;
  costForParticipant: DeserializedType<T, 'Edm.Decimal'>;
  maxParticipants: DeserializedType<T, 'Edm.Int32'>;
  costForCourse: DeserializedType<T, 'Edm.Decimal'>;
  minParticipants: DeserializedType<T, 'Edm.Int32'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  allowEmployeeSelfRegistration?: NoYes | null;
  requireAttendees?: HrmCourseRequiredForAttendees | null;
  targetAudience?: DeserializedType<T, 'Edm.String'> | null;
  courseTitle?: DeserializedType<T, 'Edm.String'> | null;
  courseStatus?: HrmCourseTableStatus | null;
  endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  courseLocation?: DeserializedType<T, 'Edm.String'> | null;
  registrationDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  allowSelfAttestation?: NoYes | null;
  classroom?: DeserializedType<T, 'Edm.String'> | null;
  isVirtual?: NoYes | null;
  courseObjectives?: DeserializedType<T, 'Edm.String'> | null;
  startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costOption?: HcmCourseCostOption | null;
  organizer?: DeserializedType<T, 'Edm.String'> | null;
  courseParticipant: CourseParticipantsType<T>[];
  courseLocationHotel: CourseLocationHotelsType<T>[];
  courseParticipantV2: CourseParticipantsV2Type<T>[];
  personCourse: PersonCoursesType<T>[];
  courseRoom?: CourseRoomsType<T> | null;
  relatedCourseLocation?: CourseLocationsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  courseType?: CourseTypesType<T> | null;
}
