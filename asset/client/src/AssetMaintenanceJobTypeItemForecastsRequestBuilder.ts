/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { AssetMaintenanceJobTypeItemForecasts } from './AssetMaintenanceJobTypeItemForecasts';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceJobTypeItemForecasts} entity.
 */
export class AssetMaintenanceJobTypeItemForecastsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceJobTypeItemForecasts<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceJobTypeItemForecasts` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceJobTypeItemForecasts` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceJobTypeItemForecasts<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceJobTypeItemForecasts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceJobTypeItemForecasts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceJobTypeItemForecasts`.
   */
  create(
    entity: AssetMaintenanceJobTypeItemForecasts<T>
  ): CreateRequestBuilder<AssetMaintenanceJobTypeItemForecasts<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceJobTypeItemForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceJobTypeItemForecasts` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.maintenanceAssetId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.functionalLocationId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.jobTradeId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.jobVariantId}.
   * @param modelId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.modelId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.modelProductId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.productId}.
   * @param forecastItemId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.forecastItemId}.
   * @param forecastProjectLinePropertyId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.forecastProjectLinePropertyId}.
   * @param productColorId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.productColorId}.
   * @param productConfigurationId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.productConfigurationId}.
   * @param productSizeId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.productSizeId}.
   * @param productStyleId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.productStyleId}.
   * @param storageSiteId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.storageSiteId}.
   * @param storageLocationId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.storageLocationId}.
   * @param storageWarehouseId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.storageWarehouseId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceJobTypeItemForecasts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>,
    jobTradeId: DeserializedType<T, 'Edm.String'>,
    jobTypeId: DeserializedType<T, 'Edm.String'>,
    jobVariantId: DeserializedType<T, 'Edm.String'>,
    modelId: DeserializedType<T, 'Edm.String'>,
    modelProductId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    productId: DeserializedType<T, 'Edm.String'>,
    forecastItemId: DeserializedType<T, 'Edm.String'>,
    forecastProjectLinePropertyId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    storageSiteId: DeserializedType<T, 'Edm.String'>,
    storageLocationId: DeserializedType<T, 'Edm.String'>,
    storageWarehouseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceJobTypeItemForecasts<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceJobTypeItemForecasts<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetId: maintenanceAssetId,
      FunctionalLocationId: functionalLocationId,
      JobTradeId: jobTradeId,
      JobTypeId: jobTypeId,
      JobVariantId: jobVariantId,
      ModelId: modelId,
      ModelProductId: modelProductId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      ProductId: productId,
      ForecastItemId: forecastItemId,
      ForecastProjectLinePropertyId: forecastProjectLinePropertyId,
      ProductColorId: productColorId,
      ProductConfigurationId: productConfigurationId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      StorageSiteId: storageSiteId,
      StorageLocationId: storageLocationId,
      StorageWarehouseId: storageWarehouseId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceJobTypeItemForecasts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceJobTypeItemForecasts`.
   */
  update(
    entity: AssetMaintenanceJobTypeItemForecasts<T>
  ): UpdateRequestBuilder<AssetMaintenanceJobTypeItemForecasts<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceJobTypeItemForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeItemForecasts`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.maintenanceAssetId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.functionalLocationId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.jobTradeId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.jobVariantId}.
   * @param modelId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.modelId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.modelProductId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.productId}.
   * @param forecastItemId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.forecastItemId}.
   * @param forecastProjectLinePropertyId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.forecastProjectLinePropertyId}.
   * @param productColorId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.productColorId}.
   * @param productConfigurationId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.productConfigurationId}.
   * @param productSizeId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.productSizeId}.
   * @param productStyleId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.productStyleId}.
   * @param storageSiteId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.storageSiteId}.
   * @param storageLocationId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.storageLocationId}.
   * @param storageWarehouseId Key property. See {@link AssetMaintenanceJobTypeItemForecasts.storageWarehouseId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeItemForecasts`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetId: string,
    functionalLocationId: string,
    jobTradeId: string,
    jobTypeId: string,
    jobVariantId: string,
    modelId: string,
    modelProductId: string,
    maintenanceAssetTypeId: string,
    productId: string,
    forecastItemId: string,
    forecastProjectLinePropertyId: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    storageSiteId: string,
    storageLocationId: string,
    storageWarehouseId: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeItemForecasts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeItemForecasts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeItemForecasts` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceJobTypeItemForecasts<T>
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeItemForecasts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetId?: string,
    functionalLocationId?: string,
    jobTradeId?: string,
    jobTypeId?: string,
    jobVariantId?: string,
    modelId?: string,
    modelProductId?: string,
    maintenanceAssetTypeId?: string,
    productId?: string,
    forecastItemId?: string,
    forecastProjectLinePropertyId?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    storageSiteId?: string,
    storageLocationId?: string,
    storageWarehouseId?: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeItemForecasts<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceJobTypeItemForecasts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceJobTypeItemForecasts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetId: maintenanceAssetId!,
            FunctionalLocationId: functionalLocationId!,
            JobTradeId: jobTradeId!,
            JobTypeId: jobTypeId!,
            JobVariantId: jobVariantId!,
            ModelId: modelId!,
            ModelProductId: modelProductId!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            ProductId: productId!,
            ForecastItemId: forecastItemId!,
            ForecastProjectLinePropertyId: forecastProjectLinePropertyId!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            StorageSiteId: storageSiteId!,
            StorageLocationId: storageLocationId!,
            StorageWarehouseId: storageWarehouseId!
          }
    );
  }
}
