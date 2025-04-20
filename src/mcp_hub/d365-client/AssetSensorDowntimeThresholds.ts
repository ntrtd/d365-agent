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
import type { AssetSensorDowntimeThresholdsApi } from './AssetSensorDowntimeThresholdsApi';

/**
 * This class represents the entity "AssetSensorDowntimeThresholds" of service "d365_metadata".
 */
export class AssetSensorDowntimeThresholds<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetSensorDowntimeThresholdsType<T>
{
  /**
   * Technical entity name for AssetSensorDowntimeThresholds.
   */
  static override _entityName = 'AssetSensorDowntimeThresholds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetSensorDowntimeThresholds entity.
   */
  static _keys = ['SensorId'];
  /**
   * Sensor Id.
   */
  declare sensorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Asset Not Responding Threshold Mins.
   */
  declare assetNotRespondingThresholdMins: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: AssetSensorDowntimeThresholdsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetSensorDowntimeThresholdsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sensorId: DeserializedType<T, 'Edm.String'>;
  assetNotRespondingThresholdMins: DeserializedType<T, 'Edm.Int32'>;
}
