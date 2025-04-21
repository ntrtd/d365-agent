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
import type { AssetMaintenanceFaultAreasApi } from './AssetMaintenanceFaultAreasApi';
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

/**
 * This class represents the entity "AssetMaintenanceFaultAreas" of service "d365_metadata".
 */
export class AssetMaintenanceFaultAreas<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFaultAreasType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFaultAreas.
   */
  static override _entityName = 'AssetMaintenanceFaultAreas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFaultAreas entity.
   */
  static _keys = ['dataAreaId', 'FaultAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fault Area Id.
   */
  declare faultAreaId: DeserializedType<T, 'Edm.String'>;
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
  declare faultAreaMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestAssetFaults} entity.
   */
  declare faultAreaMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeFaultTypes} entity.
   */
  declare assetMaintenanceAssetTypeFaultType: AssetMaintenanceAssetTypeFaultTypes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeFaultAreas} entity.
   */
  declare assetMaintenanceAssetTypeFaultArea: AssetMaintenanceAssetTypeFaultAreas<T>[];

  constructor(_entityApi: AssetMaintenanceFaultAreasApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFaultAreasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faultAreaId: DeserializedType<T, 'Edm.String'>;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  faultAreaMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaultsType<T>[];
  faultAreaMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaultsType<T>[];
  assetMaintenanceAssetTypeFaultType: AssetMaintenanceAssetTypeFaultTypesType<T>[];
  assetMaintenanceAssetTypeFaultArea: AssetMaintenanceAssetTypeFaultAreasType<T>[];
}
