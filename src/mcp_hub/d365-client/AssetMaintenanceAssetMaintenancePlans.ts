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
import type { AssetMaintenanceAssetMaintenancePlansApi } from './AssetMaintenanceAssetMaintenancePlansApi';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import {
  AssetMaintenancePlans,
  AssetMaintenancePlansType
} from './AssetMaintenancePlans';

/**
 * This class represents the entity "AssetMaintenanceAssetMaintenancePlans" of service "d365_metadata".
 */
export class AssetMaintenanceAssetMaintenancePlans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetMaintenancePlansType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetMaintenancePlans.
   */
  static override _entityName = 'AssetMaintenanceAssetMaintenancePlans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetMaintenancePlans entity.
   */
  static _keys = ['dataAreaId', 'MaintenanceAssetId', 'MaintenancePlanId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Plan Id.
   */
  declare maintenancePlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare maintenanceAssetV3?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenancePlans} entity.
   */
  declare assetMaintenancePlan?: AssetMaintenancePlans<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetMaintenancePlansApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetMaintenancePlansType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  maintenancePlanId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maintenanceAssetV3?: AssetMaintenanceAssetsV3Type<T> | null;
  assetMaintenancePlan?: AssetMaintenancePlansType<T> | null;
}
