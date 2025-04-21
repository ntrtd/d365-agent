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
import type { ApplicantCertificatesApi } from './ApplicantCertificatesApi';

/**
 * This class represents the entity "ApplicantCertificates" of service "d365_metadata".
 */
export class ApplicantCertificates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ApplicantCertificatesType<T>
{
  /**
   * Technical entity name for ApplicantCertificates.
   */
  static override _entityName = 'ApplicantCertificates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApplicantCertificates entity.
   */
  static _keys = ['ApplicantId', 'CertificateTypeId', 'StartDate'];
  /**
   * Applicant Id.
   */
  declare applicantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Certificate Type Id.
   */
  declare certificateTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ApplicantCertificatesApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicantCertificatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  applicantId: DeserializedType<T, 'Edm.String'>;
  certificateTypeId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  notes?: DeserializedType<T, 'Edm.String'> | null;
}
