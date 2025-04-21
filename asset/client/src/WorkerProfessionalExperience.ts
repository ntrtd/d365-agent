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
import type { WorkerProfessionalExperienceApi } from './WorkerProfessionalExperienceApi';
import { HrmBlankYesNo } from './HrmBlankYesNo';

/**
 * This class represents the entity "WorkerProfessionalExperience" of service "d365_metadata".
 */
export class WorkerProfessionalExperience<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerProfessionalExperienceType<T>
{
  /**
   * Technical entity name for WorkerProfessionalExperience.
   */
  static override _entityName = 'WorkerProfessionalExperience';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerProfessionalExperience entity.
   */
  static _keys = [
    'StartDate',
    'EmployerPosition',
    'EmployerName',
    'PersonnelNumber'
  ];
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employer Position.
   */
  declare employerPosition: DeserializedType<T, 'Edm.String'>;
  /**
   * Employer Name.
   */
  declare employerName: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employer Location.
   * @nullable
   */
  declare employerLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Contact Employer.
   * @nullable
   */
  declare allowContactEmployer?: HrmBlankYesNo | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Phone.
   * @nullable
   */
  declare phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WorkerProfessionalExperienceApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerProfessionalExperienceType<
  T extends DeSerializers = DefaultDeSerializers
> {
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employerPosition: DeserializedType<T, 'Edm.String'>;
  employerName: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  employerLocation?: DeserializedType<T, 'Edm.String'> | null;
  allowContactEmployer?: HrmBlankYesNo | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
}
