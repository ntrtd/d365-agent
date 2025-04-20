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
import type { AssetMaintenanceFaultSymptomsApi } from './AssetMaintenanceFaultSymptomsApi';
import {
  AssetMaintenanceWorkOrderAssetFaults,
  AssetMaintenanceWorkOrderAssetFaultsType
} from './AssetMaintenanceWorkOrderAssetFaults';
import {
  AssetMaintenanceRequestAssetFaults,
  AssetMaintenanceRequestAssetFaultsType
} from './AssetMaintenanceRequestAssetFaults';
import {
  AssetMaintenanceAssetTypeFaultTypes,
  AssetMaintenanceAssetTypeFaultTypesType
} from './AssetMaintenanceAssetTypeFaultTypes';
import {
  AssetMaintenanceAssetTypeFaultAreas,
  AssetMaintenanceAssetTypeFaultAreasType
} from './AssetMaintenanceAssetTypeFaultAreas';
import {
  AssetMaintenanceAssetTypeFaultSymptoms,
  AssetMaintenanceAssetTypeFaultSymptomsType
} from './AssetMaintenanceAssetTypeFaultSymptoms';

/**
 * This class represents the entity "AssetMaintenanceFaultSymptoms" of service "d365_metadata".
 */
export class AssetMaintenanceFaultSymptoms<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFaultSymptomsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFaultSymptoms.
   */
  static override _entityName = 'AssetMaintenanceFaultSymptoms';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFaultSymptoms entity.
   */
  static _keys = ['dataAreaId', 'FaultSymptomId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fault Symptom Id.
   */
  declare faultSymptomId: DeserializedType<T, 'Edm.String'>;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderAssetFaults} entity.
   */
  declare faultSymptomMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestAssetFaults} entity.
   */
  declare faultSymptomMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeFaultTypes} entity.
   */
  declare assetMaintenanceAssetTypeFaultType: AssetMaintenanceAssetTypeFaultTypes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeFaultAreas} entity.
   */
  declare assetMaintenanceAssetTypeFaultArea: AssetMaintenanceAssetTypeFaultAreas<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeFaultSymptoms} entity.
   */
  declare assetMaintenanceAssetTypeFaultSymptom: AssetMaintenanceAssetTypeFaultSymptoms<T>[];

  constructor(_entityApi: AssetMaintenanceFaultSymptomsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFaultSymptomsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faultSymptomId: DeserializedType<T, 'Edm.String'>;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  faultSymptomMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaultsType<T>[];
  faultSymptomMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaultsType<T>[];
  assetMaintenanceAssetTypeFaultType: AssetMaintenanceAssetTypeFaultTypesType<T>[];
  assetMaintenanceAssetTypeFaultArea: AssetMaintenanceAssetTypeFaultAreasType<T>[];
  assetMaintenanceAssetTypeFaultSymptom: AssetMaintenanceAssetTypeFaultSymptomsType<T>[];
}
