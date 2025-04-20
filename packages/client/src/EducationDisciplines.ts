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
import type { EducationDisciplinesApi } from './EducationDisciplinesApi';
import {
  JobPreferredEducationDisciplines,
  JobPreferredEducationDisciplinesType
} from './JobPreferredEducationDisciplines';
import {
  RecruitingRequestEducations,
  RecruitingRequestEducationsType
} from './RecruitingRequestEducations';
import {
  JobTemplateEducationDisciplines,
  JobTemplateEducationDisciplinesType
} from './JobTemplateEducationDisciplines';
import { PersonEducations, PersonEducationsType } from './PersonEducations';
import {
  CourseTypeEducationProfiles,
  CourseTypeEducationProfilesType
} from './CourseTypeEducationProfiles';
import {
  EducationDisciplineGroups,
  EducationDisciplineGroupsType
} from './EducationDisciplineGroups';

/**
 * This class represents the entity "EducationDisciplines" of service "d365_metadata".
 */
export class EducationDisciplines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EducationDisciplinesType<T>
{
  /**
   * Technical entity name for EducationDisciplines.
   */
  static override _entityName = 'EducationDisciplines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EducationDisciplines entity.
   */
  static _keys = ['EducationDiscipline'];
  /**
   * Education Discipline.
   */
  declare educationDiscipline: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link JobPreferredEducationDisciplines} entity.
   */
  declare jobPreferredEducationDisciplines: JobPreferredEducationDisciplines<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequestEducations} entity.
   */
  declare recruitingRequestEducationDisciplines: RecruitingRequestEducations<T>[];
  /**
   * One-to-many navigation property to the {@link JobTemplateEducationDisciplines} entity.
   */
  declare jobTemplateEducationDisciplines: JobTemplateEducationDisciplines<T>[];
  /**
   * One-to-many navigation property to the {@link PersonEducations} entity.
   */
  declare personEducation: PersonEducations<T>[];
  /**
   * One-to-many navigation property to the {@link CourseTypeEducationProfiles} entity.
   */
  declare courseTypeEducationProfile: CourseTypeEducationProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link EducationDisciplineGroups} entity.
   */
  declare educationDisciplineGroups: EducationDisciplineGroups<T>[];

  constructor(_entityApi: EducationDisciplinesApi<T>) {
    super(_entityApi);
  }
}

export interface EducationDisciplinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  educationDiscipline: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  jobPreferredEducationDisciplines: JobPreferredEducationDisciplinesType<T>[];
  recruitingRequestEducationDisciplines: RecruitingRequestEducationsType<T>[];
  jobTemplateEducationDisciplines: JobTemplateEducationDisciplinesType<T>[];
  personEducation: PersonEducationsType<T>[];
  courseTypeEducationProfile: CourseTypeEducationProfilesType<T>[];
  educationDisciplineGroups: EducationDisciplineGroupsType<T>[];
}
