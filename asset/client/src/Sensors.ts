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
import type { SensorsApi } from './SensorsApi';
import {
  SensorItemBatchAttributeMappings,
  SensorItemBatchAttributeMappingsType
} from './SensorItemBatchAttributeMappings';
import {
  SensorMaintenanceAssetCounterMappings,
  SensorMaintenanceAssetCounterMappingsType
} from './SensorMaintenanceAssetCounterMappings';
import {
  SensorOperationsResourceMappings,
  SensorOperationsResourceMappingsType
} from './SensorOperationsResourceMappings';
import {
  SensorScenarioMappings,
  SensorScenarioMappingsType
} from './SensorScenarioMappings';
import {
  SensorMaintenanceAssetMappings,
  SensorMaintenanceAssetMappingsType
} from './SensorMaintenanceAssetMappings';

/**
 * This class represents the entity "Sensors" of service "d365_metadata".
 */
export class Sensors<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SensorsType<T>
{
  /**
   * Technical entity name for Sensors.
   */
  static override _entityName = 'Sensors';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Sensors entity.
   */
  static _keys = ['SensorId'];
  /**
   * Sensor Id.
   */
  declare sensorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sensor Description.
   * @nullable
   */
  declare sensorDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SensorItemBatchAttributeMappings} entity.
   */
  declare sensorItemBatchAttributeMappings: SensorItemBatchAttributeMappings<T>[];
  /**
   * One-to-many navigation property to the {@link SensorMaintenanceAssetCounterMappings} entity.
   */
  declare sensorMaintenanceAssetCounterMappings: SensorMaintenanceAssetCounterMappings<T>[];
  /**
   * One-to-many navigation property to the {@link SensorOperationsResourceMappings} entity.
   */
  declare sensorOperationsResourceMappings: SensorOperationsResourceMappings<T>[];
  /**
   * One-to-many navigation property to the {@link SensorScenarioMappings} entity.
   */
  declare sensorScenarioMappings: SensorScenarioMappings<T>[];
  /**
   * One-to-many navigation property to the {@link SensorMaintenanceAssetMappings} entity.
   */
  declare sensorMaintenanceAssetMappings: SensorMaintenanceAssetMappings<T>[];

  constructor(_entityApi: SensorsApi<T>) {
    super(_entityApi);
  }
}

export interface SensorsType<T extends DeSerializers = DefaultDeSerializers> {
  sensorId: DeserializedType<T, 'Edm.String'>;
  sensorDescription?: DeserializedType<T, 'Edm.String'> | null;
  sensorItemBatchAttributeMappings: SensorItemBatchAttributeMappingsType<T>[];
  sensorMaintenanceAssetCounterMappings: SensorMaintenanceAssetCounterMappingsType<T>[];
  sensorOperationsResourceMappings: SensorOperationsResourceMappingsType<T>[];
  sensorScenarioMappings: SensorScenarioMappingsType<T>[];
  sensorMaintenanceAssetMappings: SensorMaintenanceAssetMappingsType<T>[];
}
