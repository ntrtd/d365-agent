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
import type { AssetMaintenanceAssetTypeFaultSymptomsApi } from './AssetMaintenanceAssetTypeFaultSymptomsApi';
import {
  AssetMaintenanceAssetTypes,
  AssetMaintenanceAssetTypesType
} from './AssetMaintenanceAssetTypes';
import {
  AssetMaintenanceFaultSymptoms,
  AssetMaintenanceFaultSymptomsType
} from './AssetMaintenanceFaultSymptoms';

/**
 * This class represents the entity "AssetMaintenanceAssetTypeFaultSymptoms" of service "d365_metadata".
 */
export class AssetMaintenanceAssetTypeFaultSymptoms<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetTypeFaultSymptomsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetTypeFaultSymptoms.
   */
  static override _entityName = 'AssetMaintenanceAssetTypeFaultSymptoms';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetTypeFaultSymptoms entity.
   */
  static _keys = ['dataAreaId', 'MaintenanceAssetTypeId', 'FaultSymptomId'];
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
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypes} entity.
   */
  declare assetMaintenanceAssetType?: AssetMaintenanceAssetTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFaultSymptoms} entity.
   */
  declare assetMaintenanceFaultSymptom?: AssetMaintenanceFaultSymptoms<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetTypeFaultSymptomsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetTypeFaultSymptomsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  faultSymptomId: DeserializedType<T, 'Edm.String'>;
  assetMaintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
  assetMaintenanceFaultSymptom?: AssetMaintenanceFaultSymptomsType<T> | null;
}
