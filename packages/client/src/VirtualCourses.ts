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
import type { VirtualCoursesApi } from './VirtualCoursesApi';
import { HrmCourseTableStatus } from './HrmCourseTableStatus';
import { HrmCourseSetup } from './HrmCourseSetup';
import { NoYes } from './NoYes';
import { HrmCourseRequiredForAttendees } from './HrmCourseRequiredForAttendees';
import { HcmCourseCostOption } from './HcmCourseCostOption';

/**
 * This class represents the entity "VirtualCourses" of service "d365_metadata".
 */
export class VirtualCourses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VirtualCoursesType<T>
{
  /**
   * Technical entity name for VirtualCourses.
   */
  static override _entityName = 'VirtualCourses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VirtualCourses entity.
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
   * Status.
   * @nullable
   */
  declare status?: HrmCourseTableStatus | null;
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
   * End Date Time.
   */
  declare endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
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

  constructor(_entityApi: VirtualCoursesApi<T>) {
    super(_entityApi);
  }
}

export interface VirtualCoursesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  courseId: DeserializedType<T, 'Edm.String'>;
  courseDescription?: DeserializedType<T, 'Edm.String'> | null;
  workflow?: DeserializedType<T, 'Edm.String'> | null;
  status?: HrmCourseTableStatus | null;
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
  endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  registrationDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  allowSelfAttestation?: NoYes | null;
  courseObjectives?: DeserializedType<T, 'Edm.String'> | null;
  startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costOption?: HcmCourseCostOption | null;
}
