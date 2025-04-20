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
import type { AssetMaintenanceWorkOrderStandardProjectGroupsApi } from './AssetMaintenanceWorkOrderStandardProjectGroupsApi';
import {
  AssetMaintenanceAssets,
  AssetMaintenanceAssetsType
} from './AssetMaintenanceAssets';
import {
  AssetMaintenanceWorkOrderTypes,
  AssetMaintenanceWorkOrderTypesType
} from './AssetMaintenanceWorkOrderTypes';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import {
  AssetMaintenanceAssetTypes,
  AssetMaintenanceAssetTypesType
} from './AssetMaintenanceAssetTypes';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderStandardProjectGroups" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderStandardProjectGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderStandardProjectGroupsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderStandardProjectGroups.
   */
  static override _entityName =
    'AssetMaintenanceWorkOrderStandardProjectGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderStandardProjectGroups entity.
   */
  static _keys = [
    'dataAreaId',
    'WorkOrderTypeId',
    'MaintenanceAssetTypeId',
    'MaintenanceAssetId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Type Id.
   */
  declare workOrderTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Type Id.
   */
  declare maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Group Id.
   * @nullable
   */
  declare projGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssets} entity.
   */
  declare assetMaintenanceAsset?: AssetMaintenanceAssets<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderTypes} entity.
   */
  declare assetMaintenanceWorkOrderType?: AssetMaintenanceWorkOrderTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare maintenanceAssetV3?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypes} entity.
   */
  declare assetMaintenanceAssetType?: AssetMaintenanceAssetTypes<T> | null;

  constructor(
    _entityApi: AssetMaintenanceWorkOrderStandardProjectGroupsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderStandardProjectGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderTypeId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  projGroupId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceAsset?: AssetMaintenanceAssetsType<T> | null;
  assetMaintenanceWorkOrderType?: AssetMaintenanceWorkOrderTypesType<T> | null;
  maintenanceAssetV3?: AssetMaintenanceAssetsV3Type<T> | null;
  assetMaintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
}
