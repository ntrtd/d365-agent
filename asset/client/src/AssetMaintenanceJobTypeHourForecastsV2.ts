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
import type { AssetMaintenanceJobTypeHourForecastsV2Api } from './AssetMaintenanceJobTypeHourForecastsV2Api';

/**
 * This class represents the entity "AssetMaintenanceJobTypeHourForecastsV2" of service "d365_metadata".
 */
export class AssetMaintenanceJobTypeHourForecastsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceJobTypeHourForecastsV2Type<T>
{
  /**
   * Technical entity name for AssetMaintenanceJobTypeHourForecastsV2.
   */
  static override _entityName = 'AssetMaintenanceJobTypeHourForecastsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceJobTypeHourForecastsV2 entity.
   */
  static _keys = ['dataAreaId', 'ForecastTransId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Forecast Trans Id.
   */
  declare forecastTransId: DeserializedType<T, 'Edm.String'>;
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
   * Model Product Id.
   * @nullable
   */
  declare modelProductId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Variant Id.
   * @nullable
   */
  declare jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functional Location Id.
   * @nullable
   */
  declare functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Trade Id.
   * @nullable
   */
  declare jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Type Id.
   * @nullable
   */
  declare maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Line Property Id.
   * @nullable
   */
  declare forecastLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Category Id.
   * @nullable
   */
  declare forecastCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Model Id.
   * @nullable
   */
  declare forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Id.
   * @nullable
   */
  declare productId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Id.
   * @nullable
   */
  declare modelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Project Id.
   * @nullable
   */
  declare forecastProjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Id.
   * @nullable
   */
  declare maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetMaintenanceJobTypeHourForecastsV2Api<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceJobTypeHourForecastsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  forecastTransId: DeserializedType<T, 'Edm.String'>;
  forecastHours: DeserializedType<T, 'Edm.Decimal'>;
  forecastCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  modelProductId?: DeserializedType<T, 'Edm.String'> | null;
  jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  forecastLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  forecastCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  productId?: DeserializedType<T, 'Edm.String'> | null;
  modelId?: DeserializedType<T, 'Edm.String'> | null;
  forecastProjectId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
}
