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
import type { AssetMaintenanceFaultTypesApi } from './AssetMaintenanceFaultTypesApi';
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

/**
 * This class represents the entity "AssetMaintenanceFaultTypes" of service "d365_metadata".
 */
export class AssetMaintenanceFaultTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFaultTypesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFaultTypes.
   */
  static override _entityName = 'AssetMaintenanceFaultTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFaultTypes entity.
   */
  static _keys = ['dataAreaId', 'FaultTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fault Type Id.
   */
  declare faultTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderAssetFaults} entity.
   */
  declare faultTypeMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestAssetFaults} entity.
   */
  declare faultTypeMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeFaultTypes} entity.
   */
  declare assetMaintenanceAssetTypeFaultType: AssetMaintenanceAssetTypeFaultTypes<T>[];

  constructor(_entityApi: AssetMaintenanceFaultTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFaultTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faultTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  faultTypeMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaultsType<T>[];
  faultTypeMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaultsType<T>[];
  assetMaintenanceAssetTypeFaultType: AssetMaintenanceAssetTypeFaultTypesType<T>[];
}
