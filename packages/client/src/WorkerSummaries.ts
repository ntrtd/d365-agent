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
import type { WorkerSummariesApi } from './WorkerSummariesApi';
import { NoYes } from './NoYes';
import { Titles, TitlesType } from './Titles';
import { Workers, WorkersType } from './Workers';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';

/**
 * This class represents the entity "WorkerSummaries" of service "d365_metadata".
 */
export class WorkerSummaries<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkerSummariesType<T>
{
  /**
   * Technical entity name for WorkerSummaries.
   */
  static override _entityName = 'WorkerSummaries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerSummaries entity.
   */
  static _keys = ['PersonnelNumber', 'ValidFrom', 'ValidTo'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Anniversary Date Time.
   */
  declare anniversaryDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Works From Home.
   * @nullable
   */
  declare worksFromHome?: NoYes | null;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Hire Date Time.
   */
  declare originalHireDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Office Location.
   * @nullable
   */
  declare officeLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building Address Id.
   * @nullable
   */
  declare buildingAddressId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Seniority Date.
   */
  declare seniorityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link Titles} entity.
   */
  declare title?: Titles<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker?: BaseWorkers<T> | null;

  constructor(_entityApi: WorkerSummariesApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerSummariesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  anniversaryDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  worksFromHome?: NoYes | null;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  originalHireDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  officeLocation?: DeserializedType<T, 'Edm.String'> | null;
  buildingAddressId?: DeserializedType<T, 'Edm.String'> | null;
  seniorityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  title?: TitlesType<T> | null;
  worker?: WorkersType<T> | null;
  baseWorker?: BaseWorkersType<T> | null;
}
