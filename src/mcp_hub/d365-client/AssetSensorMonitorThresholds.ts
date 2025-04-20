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
import type { AssetSensorMonitorThresholdsApi } from './AssetSensorMonitorThresholdsApi';

/**
 * This class represents the entity "AssetSensorMonitorThresholds" of service "d365_metadata".
 */
export class AssetSensorMonitorThresholds<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetSensorMonitorThresholdsType<T>
{
  /**
   * Technical entity name for AssetSensorMonitorThresholds.
   */
  static override _entityName = 'AssetSensorMonitorThresholds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetSensorMonitorThresholds entity.
   */
  static _keys = ['SensorId'];
  /**
   * Sensor Id.
   */
  declare sensorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counter Lower Threshold Value.
   */
  declare counterLowerThresholdValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Counter Name.
   * @nullable
   */
  declare counterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counter Upper Threshold Value.
   */
  declare counterUpperThresholdValue: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: AssetSensorMonitorThresholdsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetSensorMonitorThresholdsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sensorId: DeserializedType<T, 'Edm.String'>;
  counterLowerThresholdValue: DeserializedType<T, 'Edm.Decimal'>;
  counterName?: DeserializedType<T, 'Edm.String'> | null;
  counterUpperThresholdValue: DeserializedType<T, 'Edm.Decimal'>;
}
