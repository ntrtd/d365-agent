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
import type { JobTemplateCertificatesApi } from './JobTemplateCertificatesApi';
import { HrmSkillImportance } from './HrmSkillImportance';
import { CertificateTypes, CertificateTypesType } from './CertificateTypes';
import { JobTemplates, JobTemplatesType } from './JobTemplates';

/**
 * This class represents the entity "JobTemplateCertificates" of service "d365_metadata".
 */
export class JobTemplateCertificates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JobTemplateCertificatesType<T>
{
  /**
   * Technical entity name for JobTemplateCertificates.
   */
  static override _entityName = 'JobTemplateCertificates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobTemplateCertificates entity.
   */
  static _keys = ['JobTemplateId', 'CertificateTypeId'];
  /**
   * Job Template Id.
   */
  declare jobTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Certificate Type Id.
   */
  declare certificateTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Importance.
   * @nullable
   */
  declare importance?: HrmSkillImportance | null;
  /**
   * One-to-one navigation property to the {@link CertificateTypes} entity.
   */
  declare certificateType?: CertificateTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link JobTemplates} entity.
   */
  declare jobTemplate?: JobTemplates<T> | null;

  constructor(_entityApi: JobTemplateCertificatesApi<T>) {
    super(_entityApi);
  }
}

export interface JobTemplateCertificatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobTemplateId: DeserializedType<T, 'Edm.String'>;
  certificateTypeId: DeserializedType<T, 'Edm.String'>;
  importance?: HrmSkillImportance | null;
  certificateType?: CertificateTypesType<T> | null;
  jobTemplate?: JobTemplatesType<T> | null;
}
