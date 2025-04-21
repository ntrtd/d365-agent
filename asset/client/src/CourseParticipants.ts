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
import type { CourseParticipantsApi } from './CourseParticipantsApi';
import { HcmApprovalStatus } from './HcmApprovalStatus';
import { HrmCourseAttendeeStatus } from './HrmCourseAttendeeStatus';
import { HrmCourseAttendeeIsRequired } from './HrmCourseAttendeeIsRequired';
import { HcmWorkflowOperation } from './HcmWorkflowOperation';
import { People, PeopleType } from './People';
import { Courses, CoursesType } from './Courses';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "CourseParticipants" of service "d365_metadata".
 */
export class CourseParticipants<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CourseParticipantsType<T>
{
  /**
   * Technical entity name for CourseParticipants.
   */
  static override _entityName = 'CourseParticipants';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseParticipants entity.
   */
  static _keys = ['dataAreaId', 'CourseId', 'PersonId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Course Id.
   */
  declare courseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Person Id.
   */
  declare personId: DeserializedType<T, 'Edm.String'>;
  /**
   * Approval Status.
   * @nullable
   */
  declare approvalStatus?: HcmApprovalStatus | null;
  /**
   * Pre Cancel Status.
   * @nullable
   */
  declare preCancelStatus?: HrmCourseAttendeeStatus | null;
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
   * Registered Date.
   */
  declare registeredDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: HrmCourseAttendeeStatus | null;
  /**
   * Workflow Context.
   * @nullable
   */
  declare workflowContext?: HcmWorkflowOperation | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare dirPerson?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link Courses} entity.
   */
  declare course?: Courses<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: CourseParticipantsApi<T>) {
    super(_entityApi);
  }
}

export interface CourseParticipantsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  courseId: DeserializedType<T, 'Edm.String'>;
  personId: DeserializedType<T, 'Edm.String'>;
  approvalStatus?: HcmApprovalStatus | null;
  preCancelStatus?: HrmCourseAttendeeStatus | null;
  isRequired?: HrmCourseAttendeeIsRequired | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  registeredDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  status?: HrmCourseAttendeeStatus | null;
  workflowContext?: HcmWorkflowOperation | null;
  dirPerson?: PeopleType<T> | null;
  course?: CoursesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
