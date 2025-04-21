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
import type { SensorMaintenanceAssetCounterMappingsApi } from './SensorMaintenanceAssetCounterMappingsApi';
import {
  AssetMaintenanceAssetCounters,
  AssetMaintenanceAssetCountersType
} from './AssetMaintenanceAssetCounters';
import { Sensors, SensorsType } from './Sensors';

/**
 * This class represents the entity "SensorMaintenanceAssetCounterMappings" of service "d365_metadata".
 */
export class SensorMaintenanceAssetCounterMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SensorMaintenanceAssetCounterMappingsType<T>
{
  /**
   * Technical entity name for SensorMaintenanceAssetCounterMappings.
   */
  static override _entityName = 'SensorMaintenanceAssetCounterMappings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SensorMaintenanceAssetCounterMappings entity.
   */
  static _keys = ['SensorId'];
  /**
   * Sensor Id.
   */
  declare sensorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Counter Id.
   * @nullable
   */
  declare maintenanceAssetCounterId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Counter Data Area Id.
   * @nullable
   */
  declare maintenanceAssetCounterDataAreaId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetCounters} entity.
   */
  declare maintenanceAssetCounter?: AssetMaintenanceAssetCounters<T> | null;
  /**
   * One-to-one navigation property to the {@link Sensors} entity.
   */
  declare sensor?: Sensors<T> | null;

  constructor(_entityApi: SensorMaintenanceAssetCounterMappingsApi<T>) {
    super(_entityApi);
  }
}

export interface SensorMaintenanceAssetCounterMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sensorId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetCounterId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetCounterDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetCounter?: AssetMaintenanceAssetCountersType<T> | null;
  sensor?: SensorsType<T> | null;
}
