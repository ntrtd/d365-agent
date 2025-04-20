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
import type { AssetMaintenanceAssetTypeFaultTypesApi } from './AssetMaintenanceAssetTypeFaultTypesApi';
import {
  AssetMaintenanceFaultTypes,
  AssetMaintenanceFaultTypesType
} from './AssetMaintenanceFaultTypes';
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
 * This class represents the entity "AssetMaintenanceAssetTypeFaultTypes" of service "d365_metadata".
 */
export class AssetMaintenanceAssetTypeFaultTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetTypeFaultTypesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetTypeFaultTypes.
   */
  static override _entityName = 'AssetMaintenanceAssetTypeFaultTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetTypeFaultTypes entity.
   */
  static _keys = [
    'dataAreaId',
    'MaintenanceAssetTypeId',
    'FaultSymptomId',
    'FaultAreaId',
    'FaultTypeId'
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
   * Fault Symptom Id.
   */
  declare faultSymptomId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fault Area Id.
   */
  declare faultAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fault Type Id.
   */
  declare faultTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFaultTypes} entity.
   */
  declare assetMaintenanceFaultType?: AssetMaintenanceFaultTypes<T> | null;
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

  constructor(_entityApi: AssetMaintenanceAssetTypeFaultTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetTypeFaultTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  faultSymptomId: DeserializedType<T, 'Edm.String'>;
  faultAreaId: DeserializedType<T, 'Edm.String'>;
  faultTypeId: DeserializedType<T, 'Edm.String'>;
  assetMaintenanceFaultType?: AssetMaintenanceFaultTypesType<T> | null;
  assetMaintenanceFaultArea?: AssetMaintenanceFaultAreasType<T> | null;
  assetMaintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
  assetMaintenanceFaultSymptom?: AssetMaintenanceFaultSymptomsType<T> | null;
}
