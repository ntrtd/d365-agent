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
import type { CourseTypesApi } from './CourseTypesApi';
import { NoYes } from './NoYes';
import { CourseTypeNotes, CourseTypeNotesType } from './CourseTypeNotes';
import { CourseGroups, CourseGroupsType } from './CourseGroups';
import {
  CourseTypeCertificateProfiles,
  CourseTypeCertificateProfilesType
} from './CourseTypeCertificateProfiles';
import {
  CourseTypeSkillProfiles,
  CourseTypeSkillProfilesType
} from './CourseTypeSkillProfiles';
import {
  CourseTypeEducationProfiles,
  CourseTypeEducationProfilesType
} from './CourseTypeEducationProfiles';
import { CourseTables, CourseTablesType } from './CourseTables';
import {
  CourseTypeDefaultDimensions,
  CourseTypeDefaultDimensionsType
} from './CourseTypeDefaultDimensions';
import { Courses, CoursesType } from './Courses';

/**
 * This class represents the entity "CourseTypes" of service "d365_metadata".
 */
export class CourseTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CourseTypesType<T>
{
  /**
   * Technical entity name for CourseTypes.
   */
  static override _entityName = 'CourseTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseTypes entity.
   */
  static _keys = ['CourseType'];
  /**
   * Course Type.
   */
  declare courseType: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   * @nullable
   */
  declare groupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Employee Self Registration.
   * @nullable
   */
  declare allowEmployeeSelfRegistration?: NoYes | null;
  /**
   * Minimum Number Of Participants.
   */
  declare minimumNumberOfParticipants: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Days.
   */
  declare numberOfDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link CourseTypeNotes} entity.
   */
  declare courseTypeNotes: CourseTypeNotes<T>[];
  /**
   * One-to-one navigation property to the {@link CourseGroups} entity.
   */
  declare courseGroup?: CourseGroups<T> | null;
  /**
   * One-to-many navigation property to the {@link CourseTypeCertificateProfiles} entity.
   */
  declare courseTypeCertificateProfile: CourseTypeCertificateProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link CourseTypeSkillProfiles} entity.
   */
  declare courseTypeSkillProfile: CourseTypeSkillProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link CourseTypeEducationProfiles} entity.
   */
  declare courseTypeEducationProfile: CourseTypeEducationProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link CourseTables} entity.
   */
  declare courseTable: CourseTables<T>[];
  /**
   * One-to-many navigation property to the {@link CourseTypeDefaultDimensions} entity.
   */
  declare courseTypeDefaultDimension: CourseTypeDefaultDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link Courses} entity.
   */
  declare course: Courses<T>[];

  constructor(_entityApi: CourseTypesApi<T>) {
    super(_entityApi);
  }
}

export interface CourseTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  courseType: DeserializedType<T, 'Edm.String'>;
  groupId?: DeserializedType<T, 'Edm.String'> | null;
  allowEmployeeSelfRegistration?: NoYes | null;
  minimumNumberOfParticipants: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  numberOfDays: DeserializedType<T, 'Edm.Int32'>;
  courseTypeNotes: CourseTypeNotesType<T>[];
  courseGroup?: CourseGroupsType<T> | null;
  courseTypeCertificateProfile: CourseTypeCertificateProfilesType<T>[];
  courseTypeSkillProfile: CourseTypeSkillProfilesType<T>[];
  courseTypeEducationProfile: CourseTypeEducationProfilesType<T>[];
  courseTable: CourseTablesType<T>[];
  courseTypeDefaultDimension: CourseTypeDefaultDimensionsType<T>[];
  course: CoursesType<T>[];
}
