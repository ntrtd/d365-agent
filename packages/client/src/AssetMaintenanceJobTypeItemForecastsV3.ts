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
import type { AssetMaintenanceJobTypeItemForecastsV3Api } from './AssetMaintenanceJobTypeItemForecastsV3Api';

/**
 * This class represents the entity "AssetMaintenanceJobTypeItemForecastsV3" of service "d365_metadata".
 */
export class AssetMaintenanceJobTypeItemForecastsV3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceJobTypeItemForecastsV3Type<T>
{
  /**
   * Technical entity name for AssetMaintenanceJobTypeItemForecastsV3.
   */
  static override _entityName = 'AssetMaintenanceJobTypeItemForecastsV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceJobTypeItemForecastsV3 entity.
   */
  static _keys = ['dataAreaId', 'ForecastEntryNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Forecast Entry Number.
   */
  declare forecastEntryNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Site Id.
   * @nullable
   */
  declare storageSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Cost Price.
   */
  declare forecastCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Product Id.
   * @nullable
   */
  declare modelProductId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Variant Id.
   * @nullable
   */
  declare jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Location Id.
   * @nullable
   */
  declare storageLocationId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Forecast Item Id.
   * @nullable
   */
  declare forecastItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Sales Quantity.
   */
  declare forecastSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Id.
   * @nullable
   */
  declare productId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Warehouse Id.
   * @nullable
   */
  declare storageWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Id.
   * @nullable
   */
  declare modelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Project Line Property Id.
   * @nullable
   */
  declare forecastProjectLinePropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Forecast Currency.
   * @nullable
   */
  declare forecastCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Id.
   * @nullable
   */
  declare maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetMaintenanceJobTypeItemForecastsV3Api<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceJobTypeItemForecastsV3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  forecastEntryNumber: DeserializedType<T, 'Edm.String'>;
  storageSiteId?: DeserializedType<T, 'Edm.String'> | null;
  forecastCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  modelProductId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  storageLocationId?: DeserializedType<T, 'Edm.String'> | null;
  forecastSalesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  forecastItemId?: DeserializedType<T, 'Edm.String'> | null;
  forecastSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productId?: DeserializedType<T, 'Edm.String'> | null;
  storageWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  modelId?: DeserializedType<T, 'Edm.String'> | null;
  forecastProjectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  forecastCurrency?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
}
