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
import type { CourseParticipantsStatusByEmailApi } from './CourseParticipantsStatusByEmailApi';
import { HrmCourseAttendeeIsRequired } from './HrmCourseAttendeeIsRequired';
import { HrmCourseAttendeeStatus } from './HrmCourseAttendeeStatus';

/**
 * This class represents the entity "CourseParticipantsStatusByEmail" of service "d365_metadata".
 */
export class CourseParticipantsStatusByEmail<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CourseParticipantsStatusByEmailType<T>
{
  /**
   * Technical entity name for CourseParticipantsStatusByEmail.
   */
  static override _entityName = 'CourseParticipantsStatusByEmail';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseParticipantsStatusByEmail entity.
   */
  static _keys = ['dataAreaId', 'CourseId', 'UserEmail'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Course Id.
   */
  declare courseId: DeserializedType<T, 'Edm.String'>;
  /**
   * User Email.
   */
  declare userEmail: DeserializedType<T, 'Edm.String'>;
  /**
   * First Name.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Required.
   * @nullable
   */
  declare isRequired?: HrmCourseAttendeeIsRequired | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: HrmCourseAttendeeStatus | null;

  constructor(_entityApi: CourseParticipantsStatusByEmailApi<T>) {
    super(_entityApi);
  }
}

export interface CourseParticipantsStatusByEmailType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  courseId: DeserializedType<T, 'Edm.String'>;
  userEmail: DeserializedType<T, 'Edm.String'>;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  isRequired?: HrmCourseAttendeeIsRequired | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  status?: HrmCourseAttendeeStatus | null;
}
