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
import type { JobTemplatesApi } from './JobTemplatesApi';
import {
  JobTemplateResponsibilities,
  JobTemplateResponsibilitiesType
} from './JobTemplateResponsibilities';
import {
  AdaRequirementReports,
  AdaRequirementReportsType
} from './AdaRequirementReports';
import { JobTemplateExams, JobTemplateExamsType } from './JobTemplateExams';
import { JobTemplateTasks, JobTemplateTasksType } from './JobTemplateTasks';
import {
  JobTemplateEducationDisciplines,
  JobTemplateEducationDisciplinesType
} from './JobTemplateEducationDisciplines';
import {
  JobTemplateCertificates,
  JobTemplateCertificatesType
} from './JobTemplateCertificates';
import {
  JobTemplateAdaRequirements,
  JobTemplateAdaRequirementsType
} from './JobTemplateAdaRequirements';
import { JobTemplateSkills, JobTemplateSkillsType } from './JobTemplateSkills';
import {
  JobTemplateScreenings,
  JobTemplateScreeningsType
} from './JobTemplateScreenings';

/**
 * This class represents the entity "JobTemplates" of service "d365_metadata".
 */
export class JobTemplates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobTemplatesType<T>
{
  /**
   * Technical entity name for JobTemplates.
   */
  static override _entityName = 'JobTemplates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobTemplates entity.
   */
  static _keys = ['JobTemplate'];
  /**
   * Job Template.
   */
  declare jobTemplate: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link JobTemplateResponsibilities} entity.
   */
  declare jobTemplateResponsibilities: JobTemplateResponsibilities<T>[];
  /**
   * One-to-one navigation property to the {@link AdaRequirementReports} entity.
   */
  declare jobTemplateAdaRequirementReport?: AdaRequirementReports<T> | null;
  /**
   * One-to-many navigation property to the {@link JobTemplateExams} entity.
   */
  declare jobTemplateExams: JobTemplateExams<T>[];
  /**
   * One-to-many navigation property to the {@link JobTemplateTasks} entity.
   */
  declare jobTemplateTasks: JobTemplateTasks<T>[];
  /**
   * One-to-many navigation property to the {@link JobTemplateEducationDisciplines} entity.
   */
  declare jobTemplateEducationDisciplines: JobTemplateEducationDisciplines<T>[];
  /**
   * One-to-many navigation property to the {@link JobTemplateCertificates} entity.
   */
  declare jobTemplateCertificates: JobTemplateCertificates<T>[];
  /**
   * One-to-one navigation property to the {@link JobTemplateAdaRequirements} entity.
   */
  declare jobTemplateAdaRequirement?: JobTemplateAdaRequirements<T> | null;
  /**
   * One-to-many navigation property to the {@link JobTemplateSkills} entity.
   */
  declare jobTemplateSkills: JobTemplateSkills<T>[];
  /**
   * One-to-many navigation property to the {@link JobTemplateScreenings} entity.
   */
  declare jobTemplateScreenings: JobTemplateScreenings<T>[];

  constructor(_entityApi: JobTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface JobTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobTemplate: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  jobTemplateResponsibilities: JobTemplateResponsibilitiesType<T>[];
  jobTemplateAdaRequirementReport?: AdaRequirementReportsType<T> | null;
  jobTemplateExams: JobTemplateExamsType<T>[];
  jobTemplateTasks: JobTemplateTasksType<T>[];
  jobTemplateEducationDisciplines: JobTemplateEducationDisciplinesType<T>[];
  jobTemplateCertificates: JobTemplateCertificatesType<T>[];
  jobTemplateAdaRequirement?: JobTemplateAdaRequirementsType<T> | null;
  jobTemplateSkills: JobTemplateSkillsType<T>[];
  jobTemplateScreenings: JobTemplateScreeningsType<T>[];
}
