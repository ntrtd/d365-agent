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
import type { AssetMaintenanceStopsApi } from './AssetMaintenanceStopsApi';
import {
  AssetMaintenanceStopObjects,
  AssetMaintenanceStopObjectsType
} from './AssetMaintenanceStopObjects';

/**
 * This class represents the entity "AssetMaintenanceStops" of service "d365_metadata".
 */
export class AssetMaintenanceStops<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceStopsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceStops.
   */
  static override _entityName = 'AssetMaintenanceStops';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceStops entity.
   */
  static _keys = ['dataAreaId', 'MaintenanceStopId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Stop Id.
   */
  declare maintenanceStopId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date Time.
   */
  declare fromDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Date Time.
   */
  declare toDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceStopObjects} entity.
   */
  declare assetMaintenanceStopObject: AssetMaintenanceStopObjects<T>[];

  constructor(_entityApi: AssetMaintenanceStopsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceStopsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceStopId: DeserializedType<T, 'Edm.String'>;
  fromDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  toDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  assetMaintenanceStopObject: AssetMaintenanceStopObjectsType<T>[];
}
