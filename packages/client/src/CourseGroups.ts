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
import type { CourseGroupsApi } from './CourseGroupsApi';
import { CourseTypes, CourseTypesType } from './CourseTypes';

/**
 * This class represents the entity "CourseGroups" of service "d365_metadata".
 */
export class CourseGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CourseGroupsType<T>
{
  /**
   * Technical entity name for CourseGroups.
   */
  static override _entityName = 'CourseGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseGroups entity.
   */
  static _keys = ['Group'];
  /**
   * Group.
   */
  declare group: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CourseTypes} entity.
   */
  declare courseTypes: CourseTypes<T>[];

  constructor(_entityApi: CourseGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface CourseGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  group: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  courseTypes: CourseTypesType<T>[];
}
