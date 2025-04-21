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
import type { ClassroomGroupsApi } from './ClassroomGroupsApi';
import { CourseRooms, CourseRoomsType } from './CourseRooms';

/**
 * This class represents the entity "ClassroomGroups" of service "d365_metadata".
 */
export class ClassroomGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ClassroomGroupsType<T>
{
  /**
   * Technical entity name for ClassroomGroups.
   */
  static override _entityName = 'ClassroomGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ClassroomGroups entity.
   */
  static _keys = ['dataAreaId', 'ClassroomGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Classroom Group Id.
   */
  declare classroomGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CourseRooms} entity.
   */
  declare courseRooms: CourseRooms<T>[];

  constructor(_entityApi: ClassroomGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ClassroomGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  classroomGroupId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  courseRooms: CourseRoomsType<T>[];
}
