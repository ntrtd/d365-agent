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
import type { AssetMaintenanceAssetDocumentsApi } from './AssetMaintenanceAssetDocumentsApi';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import {
  AssetMaintenanceAssets,
  AssetMaintenanceAssetsType
} from './AssetMaintenanceAssets';

/**
 * This class represents the entity "AssetMaintenanceAssetDocuments" of service "d365_metadata".
 */
export class AssetMaintenanceAssetDocuments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetDocumentsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetDocuments.
   */
  static override _entityName = 'AssetMaintenanceAssetDocuments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetDocuments entity.
   */
  static _keys = [
    'dataAreaId',
    'FunctionalLocationId',
    'MaintenanceAssetTypeId',
    'ProductId',
    'ModelProductId',
    'ModelId',
    'MaintenanceAssetId',
    'JobGroupId',
    'JobTypeId',
    'JobVariantId',
    'JobTradeId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Id.
   */
  declare functionalLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Type Id.
   */
  declare maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Id.
   */
  declare productId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Product Id.
   */
  declare modelProductId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Id.
   */
  declare modelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Group Id.
   */
  declare jobGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Type Id.
   */
  declare jobTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Variant Id.
   */
  declare jobVariantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Trade Id.
   */
  declare jobTradeId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare maintenanceAssetV3?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssets} entity.
   */
  declare assetMaintenanceAsset?: AssetMaintenanceAssets<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetDocumentsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetDocumentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  productId: DeserializedType<T, 'Edm.String'>;
  modelProductId: DeserializedType<T, 'Edm.String'>;
  modelId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  jobGroupId: DeserializedType<T, 'Edm.String'>;
  jobTypeId: DeserializedType<T, 'Edm.String'>;
  jobVariantId: DeserializedType<T, 'Edm.String'>;
  jobTradeId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetV3?: AssetMaintenanceAssetsV3Type<T> | null;
  assetMaintenanceAsset?: AssetMaintenanceAssetsType<T> | null;
}
