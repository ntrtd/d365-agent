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
import type { WorkerCertificatesApi } from './WorkerCertificatesApi';

/**
 * This class represents the entity "WorkerCertificates" of service "d365_metadata".
 */
export class WorkerCertificates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkerCertificatesType<T>
{
  /**
   * Technical entity name for WorkerCertificates.
   */
  static override _entityName = 'WorkerCertificates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerCertificates entity.
   */
  static _keys = ['PersonnelNumber', 'CertificateTypeId', 'StartDate'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: WorkerCertificatesApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerCertificatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  certificateTypeId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  notes?: DeserializedType<T, 'Edm.String'> | null;
}
