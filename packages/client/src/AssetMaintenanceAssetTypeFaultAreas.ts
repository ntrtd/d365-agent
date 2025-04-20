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
import type { AssetMaintenanceAssetTypeFaultAreasApi } from './AssetMaintenanceAssetTypeFaultAreasApi';
import {
  AssetMaintenanceFaultAreas,
  AssetMaintenanceFaultAreasType
} from './AssetMaintenanceFaultAreas';
import {
  AssetMaintenanceAssetTypes,
  AssetMaintenanceAssetTypesType
} from './AssetMaintenanceAssetTypes';
import {
  AssetMaintenanceFaultSymptoms,
  AssetMaintenanceFaultSymptomsType
} from './AssetMaintenanceFaultSymptoms';

/**
 * This class represents the entity "AssetMaintenanceAssetTypeFaultAreas" of service "d365_metadata".
 */
export class AssetMaintenanceAssetTypeFaultAreas<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetTypeFaultAreasType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetTypeFaultAreas.
   */
  static override _entityName = 'AssetMaintenanceAssetTypeFaultAreas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetTypeFaultAreas entity.
   */
  static _keys = [
    'dataAreaId',
    'MaintenanceAssetTypeId',
    'FaultAreaId',
    'FaultSymptomId'
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
   * Fault Area Id.
   */
  declare faultAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fault Symptom Id.
   */
  declare faultSymptomId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFaultAreas} entity.
   */
  declare assetMaintenanceFaultArea?: AssetMaintenanceFaultAreas<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypes} entity.
   */
  declare assetMaintenanceAssetType?: AssetMaintenanceAssetTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFaultSymptoms} entity.
   */
  declare assetMaintenanceFaultSymptom?: AssetMaintenanceFaultSymptoms<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetTypeFaultAreasApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetTypeFaultAreasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  faultAreaId: DeserializedType<T, 'Edm.String'>;
  faultSymptomId: DeserializedType<T, 'Edm.String'>;
  assetMaintenanceFaultArea?: AssetMaintenanceFaultAreasType<T> | null;
  assetMaintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
  assetMaintenanceFaultSymptom?: AssetMaintenanceFaultSymptomsType<T> | null;
}
