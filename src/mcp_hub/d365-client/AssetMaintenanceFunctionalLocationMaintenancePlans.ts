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
import type { AssetMaintenanceFunctionalLocationMaintenancePlansApi } from './AssetMaintenanceFunctionalLocationMaintenancePlansApi';
import {
  AssetMaintenanceProducts,
  AssetMaintenanceProductsType
} from './AssetMaintenanceProducts';
import {
  AssetMaintenanceModels,
  AssetMaintenanceModelsType
} from './AssetMaintenanceModels';
import {
  AssetMaintenancePlans,
  AssetMaintenancePlansType
} from './AssetMaintenancePlans';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';
import {
  AssetMaintenanceAssetTypes,
  AssetMaintenanceAssetTypesType
} from './AssetMaintenanceAssetTypes';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationMaintenancePlans" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationMaintenancePlans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationMaintenancePlansType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationMaintenancePlans.
   */
  static override _entityName =
    'AssetMaintenanceFunctionalLocationMaintenancePlans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationMaintenancePlans entity.
   */
  static _keys = [
    'dataAreaId',
    'FunctionalLocationId',
    'MaintenanceAssetTypeId',
    'ModelId',
    'MaintenancePlanId'
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
   * Model Id.
   */
  declare modelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Plan Id.
   */
  declare maintenancePlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Id.
   * @nullable
   */
  declare productId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Model Product Id.
   * @nullable
   */
  declare modelProductId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceProducts} entity.
   */
  declare assetMaintenanceProduct?: AssetMaintenanceProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceModels} entity.
   */
  declare assetMaintenanceModel?: AssetMaintenanceModels<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenancePlans} entity.
   */
  declare assetMaintenancePlan?: AssetMaintenancePlans<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypes} entity.
   */
  declare assetMaintenanceAssetType?: AssetMaintenanceAssetTypes<T> | null;

  constructor(
    _entityApi: AssetMaintenanceFunctionalLocationMaintenancePlansApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationMaintenancePlansType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  modelId: DeserializedType<T, 'Edm.String'>;
  maintenancePlanId: DeserializedType<T, 'Edm.String'>;
  productId?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  modelProductId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceProduct?: AssetMaintenanceProductsType<T> | null;
  assetMaintenanceModel?: AssetMaintenanceModelsType<T> | null;
  assetMaintenancePlan?: AssetMaintenancePlansType<T> | null;
  assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
  assetMaintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
}
