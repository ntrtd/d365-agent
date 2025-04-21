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
import type { AssetMaintenanceJobTypeItemForecastsV2Api } from './AssetMaintenanceJobTypeItemForecastsV2Api';

/**
 * This class represents the entity "AssetMaintenanceJobTypeItemForecastsV2" of service "d365_metadata".
 */
export class AssetMaintenanceJobTypeItemForecastsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceJobTypeItemForecastsV2Type<T>
{
  /**
   * Technical entity name for AssetMaintenanceJobTypeItemForecastsV2.
   */
  static override _entityName = 'AssetMaintenanceJobTypeItemForecastsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceJobTypeItemForecastsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'MaintenanceAssetId',
    'FunctionalLocationId',
    'JobTradeId',
    'JobTypeId',
    'JobVariantId',
    'ModelId',
    'ModelProductId',
    'MaintenanceAssetTypeId',
    'ProductId',
    'ForecastItemId',
    'ForecastProjectLinePropertyId',
    'ProductColorId',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId',
    'StorageSiteId',
    'StorageLocationId',
    'StorageWarehouseId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Id.
   */
  declare functionalLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Trade Id.
   */
  declare jobTradeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Type Id.
   */
  declare jobTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Variant Id.
   */
  declare jobVariantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Id.
   */
  declare modelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Product Id.
   */
  declare modelProductId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Type Id.
   */
  declare maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Id.
   */
  declare productId: DeserializedType<T, 'Edm.String'>;
  /**
   * Forecast Item Id.
   */
  declare forecastItemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Forecast Project Line Property Id.
   */
  declare forecastProjectLinePropertyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Site Id.
   */
  declare storageSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Location Id.
   */
  declare storageLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Warehouse Id.
   */
  declare storageWarehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Forecast Cost Price.
   */
  declare forecastCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Forecast Sales Unit Id.
   * @nullable
   */
  declare forecastSalesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Model Id.
   * @nullable
   */
  declare forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Sales Quantity.
   */
  declare forecastSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Forecast Currency.
   * @nullable
   */
  declare forecastCurrency?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetMaintenanceJobTypeItemForecastsV2Api<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceJobTypeItemForecastsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  functionalLocationId: DeserializedType<T, 'Edm.String'>;
  jobTradeId: DeserializedType<T, 'Edm.String'>;
  jobTypeId: DeserializedType<T, 'Edm.String'>;
  jobVariantId: DeserializedType<T, 'Edm.String'>;
  modelId: DeserializedType<T, 'Edm.String'>;
  modelProductId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  productId: DeserializedType<T, 'Edm.String'>;
  forecastItemId: DeserializedType<T, 'Edm.String'>;
  forecastProjectLinePropertyId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  storageSiteId: DeserializedType<T, 'Edm.String'>;
  storageLocationId: DeserializedType<T, 'Edm.String'>;
  storageWarehouseId: DeserializedType<T, 'Edm.String'>;
  forecastCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  forecastSalesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  forecastSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  forecastCurrency?: DeserializedType<T, 'Edm.String'> | null;
}
