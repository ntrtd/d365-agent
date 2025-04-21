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
import type { WorkerTitlesCurrentApi } from './WorkerTitlesCurrentApi';
import { NoYes } from './NoYes';
import { Titles, TitlesType } from './Titles';
import { Workers, WorkersType } from './Workers';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';

/**
 * This class represents the entity "WorkerTitlesCurrent" of service "d365_metadata".
 */
export class WorkerTitlesCurrent<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkerTitlesCurrentType<T>
{
  /**
   * Technical entity name for WorkerTitlesCurrent.
   */
  static override _entityName = 'WorkerTitlesCurrent';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerTitlesCurrent entity.
   */
  static _keys = ['PersonnelNumber'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
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
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Office Location.
   * @nullable
   */
  declare officeLocation?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: WorkerTitlesCurrentApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerTitlesCurrentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  anniversaryDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  worksFromHome?: NoYes | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  originalHireDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  officeLocation?: DeserializedType<T, 'Edm.String'> | null;
  seniorityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  title?: TitlesType<T> | null;
  worker?: WorkersType<T> | null;
  baseWorker?: BaseWorkersType<T> | null;
}
