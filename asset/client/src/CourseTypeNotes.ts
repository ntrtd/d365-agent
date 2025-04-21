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
import type { CourseTypeNotesApi } from './CourseTypeNotesApi';
import { HrmCourseNotesType } from './HrmCourseNotesType';
import { CourseTypes, CourseTypesType } from './CourseTypes';

/**
 * This class represents the entity "CourseTypeNotes" of service "d365_metadata".
 */
export class CourseTypeNotes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CourseTypeNotesType<T>
{
  /**
   * Technical entity name for CourseTypeNotes.
   */
  static override _entityName = 'CourseTypeNotes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseTypeNotes entity.
   */
  static _keys = ['CourseTypeId', 'NotesType'];
  /**
   * Course Type Id.
   */
  declare courseTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Notes Type.
   * @nullable
   */
  declare notesType?: HrmCourseNotesType | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CourseTypes} entity.
   */
  declare courseType?: CourseTypes<T> | null;

  constructor(_entityApi: CourseTypeNotesApi<T>) {
    super(_entityApi);
  }
}

export interface CourseTypeNotesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  courseTypeId: DeserializedType<T, 'Edm.String'>;
  notesType?: HrmCourseNotesType | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  courseType?: CourseTypesType<T> | null;
}
