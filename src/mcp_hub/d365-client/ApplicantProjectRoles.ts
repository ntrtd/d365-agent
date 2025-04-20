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
import type { ApplicantProjectRolesApi } from './ApplicantProjectRolesApi';

/**
 * This class represents the entity "ApplicantProjectRoles" of service "d365_metadata".
 */
export class ApplicantProjectRoles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ApplicantProjectRolesType<T>
{
  /**
   * Technical entity name for ApplicantProjectRoles.
   */
  static override _entityName = 'ApplicantProjectRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApplicantProjectRoles entity.
   */
  static _keys = [
    'dataAreaId',
    'ApplicantId',
    'ProjectId',
    'ProjectName',
    'Role',
    'DataArea'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Applicant Id.
   */
  declare applicantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Name.
   */
  declare projectName: DeserializedType<T, 'Edm.String'>;
  /**
   * Role.
   */
  declare role: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Area.
   */
  declare dataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: ApplicantProjectRolesApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicantProjectRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  applicantId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  projectName: DeserializedType<T, 'Edm.String'>;
  role: DeserializedType<T, 'Edm.String'>;
  dataArea: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
