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
import type { AssetMaintenanceAssetTypeJobTypeAssociationsApi } from './AssetMaintenanceAssetTypeJobTypeAssociationsApi';

/**
 * This class represents the entity "AssetMaintenanceAssetTypeJobTypeAssociations" of service "d365_metadata".
 */
export class AssetMaintenanceAssetTypeJobTypeAssociations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetTypeJobTypeAssociationsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetTypeJobTypeAssociations.
   */
  static override _entityName = 'AssetMaintenanceAssetTypeJobTypeAssociations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetTypeJobTypeAssociations entity.
   */
  static _keys = ['dataAreaId', 'MaintenanceAssetTypeId', 'JobTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Type Id.
   */
  declare maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Type Id.
   */
  declare jobTypeId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: AssetMaintenanceAssetTypeJobTypeAssociationsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetTypeJobTypeAssociationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  jobTypeId: DeserializedType<T, 'Edm.String'>;
}
