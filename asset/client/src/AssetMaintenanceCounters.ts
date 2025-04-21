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
import type { AssetMaintenanceCountersApi } from './AssetMaintenanceCountersApi';

/**
 * This class represents the entity "AssetMaintenanceCounters" of service "d365_metadata".
 */
export class AssetMaintenanceCounters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceCountersType<T>
{
  /**
   * Technical entity name for AssetMaintenanceCounters.
   */
  static override _entityName = 'AssetMaintenanceCounters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceCounters entity.
   */
  static _keys = ['dataAreaId', 'CounterDateTime', 'DeviceId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counter Date Time.
   */
  declare counterDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Device Id.
   */
  declare deviceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counter Value.
   */
  declare counterValue: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: AssetMaintenanceCountersApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceCountersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  counterDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deviceId: DeserializedType<T, 'Edm.String'>;
  counterValue: DeserializedType<T, 'Edm.Decimal'>;
}
