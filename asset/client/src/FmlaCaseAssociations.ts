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
import type { FmlaCaseAssociationsApi } from './FmlaCaseAssociationsApi';

/**
 * This class represents the entity "FMLACaseAssociations" of service "d365_metadata".
 */
export class FmlaCaseAssociations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FmlaCaseAssociationsType<T>
{
  /**
   * Technical entity name for FmlaCaseAssociations.
   */
  static override _entityName = 'FMLACaseAssociations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FmlaCaseAssociations entity.
   */
  static _keys = [
    'dataAreaId',
    'CaseID',
    'PersonnelNumber',
    'WorkerPartyId',
    'EmploymentStartDate',
    'EmploymentEndDate',
    'LeaveType',
    'StartDate',
    'DataArea'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Case Id.
   */
  declare caseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker Party Id.
   */
  declare workerPartyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Start Date.
   */
  declare employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment End Date.
   */
  declare employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Leave Type.
   */
  declare leaveType: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Data Area.
   */
  declare dataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FmlaCaseAssociationsApi<T>) {
    super(_entityApi);
  }
}

export interface FmlaCaseAssociationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  caseId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  workerPartyId: DeserializedType<T, 'Edm.String'>;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leaveType: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dataArea: DeserializedType<T, 'Edm.String'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
}
