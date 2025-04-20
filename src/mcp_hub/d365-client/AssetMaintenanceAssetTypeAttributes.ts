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
import type { AssetMaintenanceAssetTypeAttributesApi } from './AssetMaintenanceAssetTypeAttributesApi';
import {
  AssetMaintenanceSpecificationTypes,
  AssetMaintenanceSpecificationTypesType
} from './AssetMaintenanceSpecificationTypes';
import {
  AssetMaintenanceAssetTypes,
  AssetMaintenanceAssetTypesType
} from './AssetMaintenanceAssetTypes';

/**
 * This class represents the entity "AssetMaintenanceAssetTypeAttributes" of service "d365_metadata".
 */
export class AssetMaintenanceAssetTypeAttributes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetTypeAttributesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetTypeAttributes.
   */
  static override _entityName = 'AssetMaintenanceAssetTypeAttributes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetTypeAttributes entity.
   */
  static _keys = ['dataAreaId', 'MaintenanceAssetTypeId', 'AttributeTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Type Id.
   */
  declare maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Type Id.
   */
  declare attributeTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceSpecificationTypes} entity.
   */
  declare assetMaintenanceSpecificationType?: AssetMaintenanceSpecificationTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypes} entity.
   */
  declare assetMaintenanceAssetType?: AssetMaintenanceAssetTypes<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetTypeAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetTypeAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  attributeTypeId: DeserializedType<T, 'Edm.String'>;
  assetMaintenanceSpecificationType?: AssetMaintenanceSpecificationTypesType<T> | null;
  assetMaintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
}
