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
import type { SensorJobItemBatchAttributesApi } from './SensorJobItemBatchAttributesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SensorJobItemBatchAttributes" of service "d365_metadata".
 */
export class SensorJobItemBatchAttributes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SensorJobItemBatchAttributesType<T>
{
  /**
   * Technical entity name for SensorJobItemBatchAttributes.
   */
  static override _entityName = 'SensorJobItemBatchAttributes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SensorJobItemBatchAttributes entity.
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
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Optimal Batch Attribute Value.
   * @nullable
   */
  declare optimalBatchAttributeValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Batch Attribute Tolerance.
   */
  declare maximumBatchAttributeTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Job Registration Start Date Time.
   */
  declare jobRegistrationStartDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Order Id.
   * @nullable
   */
  declare orderId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Attribute Name.
   * @nullable
   */
  declare attributeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Batch Attribute Tolerance.
   */
  declare minimumBatchAttributeTolerance: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: SensorJobItemBatchAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface SensorJobItemBatchAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sensorId: DeserializedType<T, 'Edm.String'>;
  jobId: DeserializedType<T, 'Edm.String'>;
  jobDataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  optimalBatchAttributeValue?: DeserializedType<T, 'Edm.String'> | null;
  maximumBatchAttributeTolerance: DeserializedType<T, 'Edm.Decimal'>;
  jobRegistrationStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  orderId?: DeserializedType<T, 'Edm.String'> | null;
  isJobCompleted?: NoYes | null;
  jobRegistrationStopDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobLastRegistrationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  attributeName?: DeserializedType<T, 'Edm.String'> | null;
  minimumBatchAttributeTolerance: DeserializedType<T, 'Edm.Decimal'>;
}
