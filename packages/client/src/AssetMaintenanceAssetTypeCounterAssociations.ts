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
import type { AssetMaintenanceAssetTypeCounterAssociationsApi } from './AssetMaintenanceAssetTypeCounterAssociationsApi';
import {
  AssetMaintenanceAssetCounters,
  AssetMaintenanceAssetCountersType
} from './AssetMaintenanceAssetCounters';
import {
  AssetMaintenanceAssetTypes,
  AssetMaintenanceAssetTypesType
} from './AssetMaintenanceAssetTypes';

/**
 * This class represents the entity "AssetMaintenanceAssetTypeCounterAssociations" of service "d365_metadata".
 */
export class AssetMaintenanceAssetTypeCounterAssociations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetTypeCounterAssociationsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetTypeCounterAssociations.
   */
  static override _entityName = 'AssetMaintenanceAssetTypeCounterAssociations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetTypeCounterAssociations entity.
   */
  static _keys = [
    'dataAreaId',
    'MaintenanceAssetTypeId',
    'MaintenanceAssetCounterId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Type Id.
   */
  declare maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Counter Id.
   */
  declare maintenanceAssetCounterId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counter Lower Threshold Value.
   */
  declare counterLowerThresholdValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Counter Upper Threshold Value.
   */
  declare counterUpperThresholdValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetCounters} entity.
   */
  declare assetMaintenanceAssetCounter?: AssetMaintenanceAssetCounters<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypes} entity.
   */
  declare assetMaintenanceAssetType?: AssetMaintenanceAssetTypes<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetTypeCounterAssociationsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetTypeCounterAssociationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetCounterId: DeserializedType<T, 'Edm.String'>;
  counterLowerThresholdValue: DeserializedType<T, 'Edm.Decimal'>;
  counterUpperThresholdValue: DeserializedType<T, 'Edm.Decimal'>;
  assetMaintenanceAssetCounter?: AssetMaintenanceAssetCountersType<T> | null;
  assetMaintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
}
