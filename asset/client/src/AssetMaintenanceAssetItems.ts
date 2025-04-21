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
import type { AssetMaintenanceAssetItemsApi } from './AssetMaintenanceAssetItemsApi';

/**
 * This class represents the entity "AssetMaintenanceAssetItems" of service "d365_metadata".
 */
export class AssetMaintenanceAssetItems<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetItemsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetItems.
   */
  static override _entityName = 'AssetMaintenanceAssetItems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetItems entity.
   */
  static _keys = ['dataAreaId', 'ItemId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Id.
   * @nullable
   */
  declare modelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Id.
   * @nullable
   */
  declare productId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Type Id.
   * @nullable
   */
  declare maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Product Id.
   * @nullable
   */
  declare modelProductId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetMaintenanceAssetItemsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  modelId?: DeserializedType<T, 'Edm.String'> | null;
  productId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  modelProductId?: DeserializedType<T, 'Edm.String'> | null;
}
