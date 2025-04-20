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
import type { AssetMaintenanceJobTypeHourForecastsApi } from './AssetMaintenanceJobTypeHourForecastsApi';

/**
 * This class represents the entity "AssetMaintenanceJobTypeHourForecasts" of service "d365_metadata".
 */
export class AssetMaintenanceJobTypeHourForecasts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceJobTypeHourForecastsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceJobTypeHourForecasts.
   */
  static override _entityName = 'AssetMaintenanceJobTypeHourForecasts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceJobTypeHourForecasts entity.
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
    'ForecastCategoryId',
    'ForecastLinePropertyId'
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
   * Forecast Category Id.
   */
  declare forecastCategoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Forecast Line Property Id.
   */
  declare forecastLinePropertyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Forecast Hours.
   */
  declare forecastHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Forecast Currency Id.
   * @nullable
   */
  declare forecastCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Model Id.
   * @nullable
   */
  declare forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Project Id.
   * @nullable
   */
  declare forecastProjectId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetMaintenanceJobTypeHourForecastsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceJobTypeHourForecastsType<
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
  forecastCategoryId: DeserializedType<T, 'Edm.String'>;
  forecastLinePropertyId: DeserializedType<T, 'Edm.String'>;
  forecastHours: DeserializedType<T, 'Edm.Decimal'>;
  forecastCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  forecastProjectId?: DeserializedType<T, 'Edm.String'> | null;
}
