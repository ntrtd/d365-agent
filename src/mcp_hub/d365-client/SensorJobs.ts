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
import type { SensorJobsApi } from './SensorJobsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SensorJobs" of service "d365_metadata".
 */
export class SensorJobs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SensorJobsType<T>
{
  /**
   * Technical entity name for SensorJobs.
   */
  static override _entityName = 'SensorJobs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SensorJobs entity.
   */
  static _keys = ['SensorId', 'JobId', 'JobDataAreaId'];
  /**
   * Sensor Id.
   */
  declare sensorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Data Area Id.
   */
  declare jobDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Machine Not Reporting Threshold.
   */
  declare machineNotReportingThreshold: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Job In Progress.
   * @nullable
   */
  declare isJobInProgress?: NoYes | null;

  constructor(_entityApi: SensorJobsApi<T>) {
    super(_entityApi);
  }
}

export interface SensorJobsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sensorId: DeserializedType<T, 'Edm.String'>;
  jobId: DeserializedType<T, 'Edm.String'>;
  jobDataAreaId: DeserializedType<T, 'Edm.String'>;
  machineNotReportingThreshold: DeserializedType<T, 'Edm.Int32'>;
  isJobInProgress?: NoYes | null;
}
