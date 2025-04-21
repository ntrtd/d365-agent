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
import type { AssetMaintenanceAssetPrioritiesV2Api } from './AssetMaintenanceAssetPrioritiesV2Api';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import {
  AssetMaintenanceProducts,
  AssetMaintenanceProductsType
} from './AssetMaintenanceProducts';
import {
  AssetMaintenanceWorkOrderTypes,
  AssetMaintenanceWorkOrderTypesType
} from './AssetMaintenanceWorkOrderTypes';
import {
  AssetMaintenanceModels,
  AssetMaintenanceModelsType
} from './AssetMaintenanceModels';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';
import {
  AssetMaintenanceAssetTypes,
  AssetMaintenanceAssetTypesType
} from './AssetMaintenanceAssetTypes';

/**
 * This class represents the entity "AssetMaintenanceAssetPrioritiesV2" of service "d365_metadata".
 */
export class AssetMaintenanceAssetPrioritiesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetPrioritiesV2Type<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetPrioritiesV2.
   */
  static override _entityName = 'AssetMaintenanceAssetPrioritiesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetPrioritiesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'FunctionalLocationId',
    'MaintenanceAssetTypeId',
    'ProductId',
    'ModelProductId',
    'ModelId',
    'MaintenanceAssetId',
    'WorkOrderTypeId'
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
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Type Id.
   */
  declare workOrderTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Formatted Service Level Name.
   * @nullable
   */
  declare formattedServiceLevelName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Level.
   */
  declare serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare asset?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceProducts} entity.
   */
  declare maintenanceProduct?: AssetMaintenanceProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderTypes} entity.
   */
  declare maintenanceWorkOrderType?: AssetMaintenanceWorkOrderTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceModels} entity.
   */
  declare maintenanceModel?: AssetMaintenanceModels<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare maintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypes} entity.
   */
  declare assetType?: AssetMaintenanceAssetTypes<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetPrioritiesV2Api<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetPrioritiesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  productId: DeserializedType<T, 'Edm.String'>;
  modelProductId: DeserializedType<T, 'Edm.String'>;
  modelId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  workOrderTypeId: DeserializedType<T, 'Edm.String'>;
  formattedServiceLevelName?: DeserializedType<T, 'Edm.String'> | null;
  serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  asset?: AssetMaintenanceAssetsV3Type<T> | null;
  maintenanceProduct?: AssetMaintenanceProductsType<T> | null;
  maintenanceWorkOrderType?: AssetMaintenanceWorkOrderTypesType<T> | null;
  maintenanceModel?: AssetMaintenanceModelsType<T> | null;
  maintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
  assetType?: AssetMaintenanceAssetTypesType<T> | null;
}
