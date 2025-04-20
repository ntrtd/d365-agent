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
import type { AssetMaintenanceAssetTypeDefaultsApi } from './AssetMaintenanceAssetTypeDefaultsApi';
import {
  AssetMaintenanceAssetTypeDefaultSpareParts,
  AssetMaintenanceAssetTypeDefaultSparePartsType
} from './AssetMaintenanceAssetTypeDefaultSpareParts';
import {
  AssetMaintenanceAssetTypeDefaultSparePartsV2,
  AssetMaintenanceAssetTypeDefaultSparePartsV2Type
} from './AssetMaintenanceAssetTypeDefaultSparePartsV2';
import {
  AssetMaintenanceProducts,
  AssetMaintenanceProductsType
} from './AssetMaintenanceProducts';
import {
  AssetMaintenanceModels,
  AssetMaintenanceModelsType
} from './AssetMaintenanceModels';
import {
  AssetMaintenanceAssetTypes,
  AssetMaintenanceAssetTypesType
} from './AssetMaintenanceAssetTypes';

/**
 * This class represents the entity "AssetMaintenanceAssetTypeDefaults" of service "d365_metadata".
 */
export class AssetMaintenanceAssetTypeDefaults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetTypeDefaultsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetTypeDefaults.
   */
  static override _entityName = 'AssetMaintenanceAssetTypeDefaults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetTypeDefaults entity.
   */
  static _keys = [
    'dataAreaId',
    'MaintenanceAssetTypeId',
    'ProductId',
    'ModelProductId',
    'ModelId'
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
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeDefaultSpareParts} entity.
   */
  declare assetMaintenanceAssetTypeDefaultSparePart: AssetMaintenanceAssetTypeDefaultSpareParts<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeDefaultSparePartsV2} entity.
   */
  declare maintenanceAssetSparePartsAssetTypeDefault: AssetMaintenanceAssetTypeDefaultSparePartsV2<T>[];
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceProducts} entity.
   */
  declare assetMaintenanceProduct?: AssetMaintenanceProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceModels} entity.
   */
  declare assetMaintenanceModel?: AssetMaintenanceModels<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypes} entity.
   */
  declare assetMaintenanceAssetType?: AssetMaintenanceAssetTypes<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetTypeDefaultsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetTypeDefaultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  productId: DeserializedType<T, 'Edm.String'>;
  modelProductId: DeserializedType<T, 'Edm.String'>;
  modelId: DeserializedType<T, 'Edm.String'>;
  assetMaintenanceAssetTypeDefaultSparePart: AssetMaintenanceAssetTypeDefaultSparePartsType<T>[];
  maintenanceAssetSparePartsAssetTypeDefault: AssetMaintenanceAssetTypeDefaultSparePartsV2Type<T>[];
  assetMaintenanceProduct?: AssetMaintenanceProductsType<T> | null;
  assetMaintenanceModel?: AssetMaintenanceModelsType<T> | null;
  assetMaintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
}
