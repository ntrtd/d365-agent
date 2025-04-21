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
import type { AssetMaintenanceWorkOrderLineItemForecastsApi } from './AssetMaintenanceWorkOrderLineItemForecastsApi';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderLineItemForecasts" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderLineItemForecasts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderLineItemForecastsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderLineItemForecasts.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderLineItemForecasts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderLineItemForecasts entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjectLinePropertyId',
    'ProductColorId',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId',
    'StorageSiteId',
    'StorageLocationId',
    'StorageWarehouseId',
    'ItemId',
    'WorkOrderId',
    'WorkOrderLineNumber',
    'SalesQuantity',
    'SalesUnitId',
    'CostPrice',
    'Currency',
    'ModelId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Line Property Id.
   */
  declare projectLinePropertyId: DeserializedType<T, 'Edm.String'>;
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
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Id.
   */
  declare workOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Line Number.
   */
  declare workOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Quantity.
   */
  declare salesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Unit Id.
   */
  declare salesUnitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   */
  declare currency: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Id.
   */
  declare modelId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: AssetMaintenanceWorkOrderLineItemForecastsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderLineItemForecastsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectLinePropertyId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  storageSiteId: DeserializedType<T, 'Edm.String'>;
  storageLocationId: DeserializedType<T, 'Edm.String'>;
  storageWarehouseId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  workOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  salesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesUnitId: DeserializedType<T, 'Edm.String'>;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
  currency: DeserializedType<T, 'Edm.String'>;
  modelId: DeserializedType<T, 'Edm.String'>;
}
