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
import type { SensorMaintenanceAssetMappingsApi } from './SensorMaintenanceAssetMappingsApi';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import { Sensors, SensorsType } from './Sensors';

/**
 * This class represents the entity "SensorMaintenanceAssetMappings" of service "d365_metadata".
 */
export class SensorMaintenanceAssetMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SensorMaintenanceAssetMappingsType<T>
{
  /**
   * Technical entity name for SensorMaintenanceAssetMappings.
   */
  static override _entityName = 'SensorMaintenanceAssetMappings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SensorMaintenanceAssetMappings entity.
   */
  static _keys = ['SensorId'];
  /**
   * Sensor Id.
   */
  declare sensorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Data Area Id.
   * @nullable
   */
  declare maintenanceAssetDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Id.
   * @nullable
   */
  declare maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare maintenanceAssetV3?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-one navigation property to the {@link Sensors} entity.
   */
  declare sensor?: Sensors<T> | null;

  constructor(_entityApi: SensorMaintenanceAssetMappingsApi<T>) {
    super(_entityApi);
  }
}

export interface SensorMaintenanceAssetMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sensorId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetV3?: AssetMaintenanceAssetsV3Type<T> | null;
  sensor?: SensorsType<T> | null;
}
