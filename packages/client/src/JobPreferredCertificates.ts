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
import type { JobPreferredCertificatesApi } from './JobPreferredCertificatesApi';
import { HrmSkillImportance } from './HrmSkillImportance';
import { CertificateTypes, CertificateTypesType } from './CertificateTypes';
import { Jobs, JobsType } from './Jobs';

/**
 * This class represents the entity "JobPreferredCertificates" of service "d365_metadata".
 */
export class JobPreferredCertificates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JobPreferredCertificatesType<T>
{
  /**
   * Technical entity name for JobPreferredCertificates.
   */
  static override _entityName = 'JobPreferredCertificates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobPreferredCertificates entity.
   */
  static _keys = ['JobId', 'CertificateTypeId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;

  constructor(_entityApi: JobPreferredCertificatesApi<T>) {
    super(_entityApi);
  }
}

export interface JobPreferredCertificatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  certificateTypeId: DeserializedType<T, 'Edm.String'>;
  importance?: HrmSkillImportance | null;
  certificateType?: CertificateTypesType<T> | null;
  job?: JobsType<T> | null;
}
