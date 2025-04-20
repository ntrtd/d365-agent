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
import type { AssetSensorAnomalyDetectionParametersApi } from './AssetSensorAnomalyDetectionParametersApi';

/**
 * This class represents the entity "AssetSensorAnomalyDetectionParameters" of service "d365_metadata".
 */
export class AssetSensorAnomalyDetectionParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetSensorAnomalyDetectionParametersType<T>
{
  /**
   * Technical entity name for AssetSensorAnomalyDetectionParameters.
   */
  static override _entityName = 'AssetSensorAnomalyDetectionParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetSensorAnomalyDetectionParameters entity.
   */
  static _keys = ['SensorId'];
  /**
   * Sensor Id.
   */
  declare sensorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counter Max Anomaly Ratio Value.
   */
  declare counterMaxAnomalyRatioValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Counter Sensitivity Value.
   */
  declare counterSensitivityValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Counter Name.
   * @nullable
   */
  declare counterName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetSensorAnomalyDetectionParametersApi<T>) {
    super(_entityApi);
  }
}

export interface AssetSensorAnomalyDetectionParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sensorId: DeserializedType<T, 'Edm.String'>;
  counterMaxAnomalyRatioValue: DeserializedType<T, 'Edm.Decimal'>;
  counterSensitivityValue: DeserializedType<T, 'Edm.Int32'>;
  counterName?: DeserializedType<T, 'Edm.String'> | null;
}
