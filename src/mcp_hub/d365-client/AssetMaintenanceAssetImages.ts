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
import type { AssetMaintenanceAssetImagesApi } from './AssetMaintenanceAssetImagesApi';

/**
 * This class represents the entity "AssetMaintenanceAssetImages" of service "d365_metadata".
 */
export class AssetMaintenanceAssetImages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetImagesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetImages.
   */
  static override _entityName = 'AssetMaintenanceAssetImages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetImages entity.
   */
  static _keys = ['dataAreaId', 'MaintenanceAssetId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Image Type.
   * @nullable
   */
  declare imageType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Image.
   * @nullable
   */
  declare image?: DeserializedType<T, 'Edm.Binary'> | null;

  constructor(_entityApi: AssetMaintenanceAssetImagesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetImagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  imageType?: DeserializedType<T, 'Edm.String'> | null;
  image?: DeserializedType<T, 'Edm.Binary'> | null;
}
