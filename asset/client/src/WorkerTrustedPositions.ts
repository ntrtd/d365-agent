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
import type { WorkerTrustedPositionsApi } from './WorkerTrustedPositionsApi';

/**
 * This class represents the entity "WorkerTrustedPositions" of service "d365_metadata".
 */
export class WorkerTrustedPositions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerTrustedPositionsType<T>
{
  /**
   * Technical entity name for WorkerTrustedPositions.
   */
  static override _entityName = 'WorkerTrustedPositions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerTrustedPositions entity.
   */
  static _keys = ['PersonnelNumber', 'Position', 'Employer'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Position.
   */
  declare position: DeserializedType<T, 'Edm.String'>;
  /**
   * Employer.
   */
  declare employer: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WorkerTrustedPositionsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerTrustedPositionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  position: DeserializedType<T, 'Edm.String'>;
  employer: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
}
