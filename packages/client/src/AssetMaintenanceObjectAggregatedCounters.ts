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
import type { AssetMaintenanceObjectAggregatedCountersApi } from './AssetMaintenanceObjectAggregatedCountersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetMaintenanceObjectAggregatedCounters" of service "d365_metadata".
 */
export class AssetMaintenanceObjectAggregatedCounters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceObjectAggregatedCountersType<T>
{
  /**
   * Technical entity name for AssetMaintenanceObjectAggregatedCounters.
   */
  static override _entityName = 'AssetMaintenanceObjectAggregatedCounters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceObjectAggregatedCounters entity.
   */
  static _keys = [
    'dataAreaId',
    'MaintenanceAssetId',
    'MaintenanceAssetCounterId',
    'CounterDateTime',
    'CounterReplaced'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Counter Id.
   */
  declare maintenanceAssetCounterId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counter Date Time.
   */
  declare counterDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Counter Replaced.
   * @nullable
   */
  declare counterReplaced?: NoYes | null;
  /**
   * Parent Counter Maintenance Asset Id.
   * @nullable
   */
  declare parentCounterMaintenanceAssetId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Parent Counter Replaced.
   * @nullable
   */
  declare parentCounterReplaced?: NoYes | null;
  /**
   * Parent Counter Date Time.
   */
  declare parentCounterDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Parent Counter Maintenance Asset Counter Id.
   * @nullable
   */
  declare parentCounterMaintenanceAssetCounterId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Counter Total.
   */
  declare counterTotal: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: AssetMaintenanceObjectAggregatedCountersApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceObjectAggregatedCountersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetCounterId: DeserializedType<T, 'Edm.String'>;
  counterDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  counterReplaced?: NoYes | null;
  parentCounterMaintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  parentCounterReplaced?: NoYes | null;
  parentCounterDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  parentCounterMaintenanceAssetCounterId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  counterTotal: DeserializedType<T, 'Edm.Decimal'>;
}
