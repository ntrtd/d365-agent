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
import type { AssetMaintenanceAssetTypeDefaultSparePartsApi } from './AssetMaintenanceAssetTypeDefaultSparePartsApi';
import { NoYes } from './NoYes';
import {
  AssetMaintenanceAssetTypeDefaults,
  AssetMaintenanceAssetTypeDefaultsType
} from './AssetMaintenanceAssetTypeDefaults';

/**
 * This class represents the entity "AssetMaintenanceAssetTypeDefaultSpareParts" of service "d365_metadata".
 */
export class AssetMaintenanceAssetTypeDefaultSpareParts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetTypeDefaultSparePartsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetTypeDefaultSpareParts.
   */
  static override _entityName = 'AssetMaintenanceAssetTypeDefaultSpareParts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetTypeDefaultSpareParts entity.
   */
  static _keys = [
    'dataAreaId',
    'MaintenanceAssetTypeId',
    'ProductId',
    'ModelProductId',
    'ModelId',
    'ItemId',
    'ValidFrom',
    'ValidTo'
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
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Approved.
   * @nullable
   */
  declare approved?: NoYes | null;
  /**
   * Approved Date Time.
   */
  declare approvedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Personnel Number.
   * @nullable
   */
  declare workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id Alt.
   * @nullable
   */
  declare itemIdAlt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypeDefaults} entity.
   */
  declare assetMaintenanceAssetTypeDefault?: AssetMaintenanceAssetTypeDefaults<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetTypeDefaultSparePartsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetTypeDefaultSparePartsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  productId: DeserializedType<T, 'Edm.String'>;
  modelProductId: DeserializedType<T, 'Edm.String'>;
  modelId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  approved?: NoYes | null;
  approvedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemIdAlt?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceAssetTypeDefault?: AssetMaintenanceAssetTypeDefaultsType<T> | null;
}
