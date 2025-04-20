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
import type { AssetMaintenanceWarrantiesApi } from './AssetMaintenanceWarrantiesApi';
import {
  AssetMaintenanceWarrantyLines,
  AssetMaintenanceWarrantyLinesType
} from './AssetMaintenanceWarrantyLines';
import {
  AssetMaintenanceAssets,
  AssetMaintenanceAssetsType
} from './AssetMaintenanceAssets';
import {
  AssetMaintenanceAssetsV2,
  AssetMaintenanceAssetsV2Type
} from './AssetMaintenanceAssetsV2';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';

/**
 * This class represents the entity "AssetMaintenanceWarranties" of service "d365_metadata".
 */
export class AssetMaintenanceWarranties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWarrantiesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWarranties.
   */
  static override _entityName = 'AssetMaintenanceWarranties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWarranties entity.
   */
  static _keys = ['dataAreaId', 'WarrantyId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warranty Id.
   */
  declare warrantyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWarrantyLines} entity.
   */
  declare assetMaintenanceWarrantyLine: AssetMaintenanceWarrantyLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssets} entity.
   */
  declare assetMaintenanceAsset: AssetMaintenanceAssets<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetsV2} entity.
   */
  declare entAssetObjectTableEntityWarranty: AssetMaintenanceAssetsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare entAssetObjectTableV3EntityWarranty: AssetMaintenanceAssetsV3<T>[];

  constructor(_entityApi: AssetMaintenanceWarrantiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWarrantiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warrantyId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceWarrantyLine: AssetMaintenanceWarrantyLinesType<T>[];
  assetMaintenanceAsset: AssetMaintenanceAssetsType<T>[];
  entAssetObjectTableEntityWarranty: AssetMaintenanceAssetsV2Type<T>[];
  entAssetObjectTableV3EntityWarranty: AssetMaintenanceAssetsV3Type<T>[];
}
