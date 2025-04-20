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
import type { SensorJobExecutionsApi } from './SensorJobExecutionsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SensorJobExecutions" of service "d365_metadata".
 */
export class SensorJobExecutions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SensorJobExecutionsType<T>
{
  /**
   * Technical entity name for SensorJobExecutions.
   */
  static override _entityName = 'SensorJobExecutions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SensorJobExecutions entity.
   */
  static _keys = ['SensorId', 'JobId'];
  /**
   * Sensor Id.
   */
  declare sensorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Registration Start Date Time.
   */
  declare jobRegistrationStartDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Processing Time In Hours.
   */
  declare processingTimeInHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Quantity.
   */
  declare requestedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Order Id.
   * @nullable
   */
  declare orderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Rate Deviation Threshold.
   */
  declare productionRateDeviationThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Job Completed.
   * @nullable
   */
  declare isJobCompleted?: NoYes | null;
  /**
   * Job Registration Stop Date Time.
   */
  declare jobRegistrationStopDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Job Last Registration Date Time.
   */
  declare jobLastRegistrationDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Job Data Area Id.
   * @nullable
   */
  declare jobDataAreaId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SensorJobExecutionsApi<T>) {
    super(_entityApi);
  }
}

export interface SensorJobExecutionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sensorId: DeserializedType<T, 'Edm.String'>;
  jobId: DeserializedType<T, 'Edm.String'>;
  jobRegistrationStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  processingTimeInHours: DeserializedType<T, 'Edm.Decimal'>;
  requestedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  orderId?: DeserializedType<T, 'Edm.String'> | null;
  productionRateDeviationThreshold: DeserializedType<T, 'Edm.Decimal'>;
  isJobCompleted?: NoYes | null;
  jobRegistrationStopDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobLastRegistrationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
}
