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
import type { CertificateTypesApi } from './CertificateTypesApi';
import { NoYes } from './NoYes';
import {
  PersonCertificates,
  PersonCertificatesType
} from './PersonCertificates';
import {
  CourseTypeCertificateProfiles,
  CourseTypeCertificateProfilesType
} from './CourseTypeCertificateProfiles';
import {
  JobTemplateCertificates,
  JobTemplateCertificatesType
} from './JobTemplateCertificates';
import {
  JobPreferredCertificates,
  JobPreferredCertificatesType
} from './JobPreferredCertificates';

/**
 * This class represents the entity "CertificateTypes" of service "d365_metadata".
 */
export class CertificateTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CertificateTypesType<T>
{
  /**
   * Technical entity name for CertificateTypes.
   */
  static override _entityName = 'CertificateTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CertificateTypes entity.
   */
  static _keys = ['CertificateType'];
  /**
   * Certificate Type.
   */
  declare certificateType: DeserializedType<T, 'Edm.String'>;
  /**
   * Require Renewal.
   * @nullable
   */
  declare requireRenewal?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PersonCertificates} entity.
   */
  declare personCertificate: PersonCertificates<T>[];
  /**
   * One-to-many navigation property to the {@link CourseTypeCertificateProfiles} entity.
   */
  declare courseTypeCertificateProfile: CourseTypeCertificateProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link JobTemplateCertificates} entity.
   */
  declare jobTemplateCertificates: JobTemplateCertificates<T>[];
  /**
   * One-to-many navigation property to the {@link JobPreferredCertificates} entity.
   */
  declare jobPreferredCertificates: JobPreferredCertificates<T>[];

  constructor(_entityApi: CertificateTypesApi<T>) {
    super(_entityApi);
  }
}

export interface CertificateTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  certificateType: DeserializedType<T, 'Edm.String'>;
  requireRenewal?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  personCertificate: PersonCertificatesType<T>[];
  courseTypeCertificateProfile: CourseTypeCertificateProfilesType<T>[];
  jobTemplateCertificates: JobTemplateCertificatesType<T>[];
  jobPreferredCertificates: JobPreferredCertificatesType<T>[];
}
