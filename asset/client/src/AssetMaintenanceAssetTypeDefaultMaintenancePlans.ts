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
import type { AssetMaintenanceAssetTypeDefaultMaintenancePlansApi } from './AssetMaintenanceAssetTypeDefaultMaintenancePlansApi';

/**
 * This class represents the entity "AssetMaintenanceAssetTypeDefaultMaintenancePlans" of service "d365_metadata".
 */
export class AssetMaintenanceAssetTypeDefaultMaintenancePlans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetTypeDefaultMaintenancePlansType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetTypeDefaultMaintenancePlans.
   */
  static override _entityName =
    'AssetMaintenanceAssetTypeDefaultMaintenancePlans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetTypeDefaultMaintenancePlans entity.
   */
  static _keys = [
    'dataAreaId',
    'MaintenanceAssetTypeId',
    'ProductId',
    'ModelProductId',
    'MaintenanceAssetTypeSetupModelId',
    'MaintenancePlanId'
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
   * Maintenance Asset Type Setup Model Id.
   */
  declare maintenanceAssetTypeSetupModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Plan Id.
   */
  declare maintenancePlanId: DeserializedType<T, 'Edm.String'>;

  constructor(
    _entityApi: AssetMaintenanceAssetTypeDefaultMaintenancePlansApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetTypeDefaultMaintenancePlansType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  productId: DeserializedType<T, 'Edm.String'>;
  modelProductId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeSetupModelId: DeserializedType<T, 'Edm.String'>;
  maintenancePlanId: DeserializedType<T, 'Edm.String'>;
}
