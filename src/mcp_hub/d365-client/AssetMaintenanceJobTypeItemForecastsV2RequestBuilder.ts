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
import { AssetMaintenanceJobTypeItemForecastsV2 } from './AssetMaintenanceJobTypeItemForecastsV2';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceJobTypeItemForecastsV2} entity.
 */
export class AssetMaintenanceJobTypeItemForecastsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceJobTypeItemForecastsV2<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceJobTypeItemForecastsV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceJobTypeItemForecastsV2` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceJobTypeItemForecastsV2<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceJobTypeItemForecastsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceJobTypeItemForecastsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceJobTypeItemForecastsV2`.
   */
  create(
    entity: AssetMaintenanceJobTypeItemForecastsV2<T>
  ): CreateRequestBuilder<AssetMaintenanceJobTypeItemForecastsV2<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceJobTypeItemForecastsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceJobTypeItemForecastsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.maintenanceAssetId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.functionalLocationId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.jobTradeId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.jobVariantId}.
   * @param modelId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.modelId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.modelProductId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.productId}.
   * @param forecastItemId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.forecastItemId}.
   * @param forecastProjectLinePropertyId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.forecastProjectLinePropertyId}.
   * @param productColorId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.productColorId}.
   * @param productConfigurationId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.productSizeId}.
   * @param productStyleId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.productStyleId}.
   * @param productVersionId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.productVersionId}.
   * @param storageSiteId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.storageSiteId}.
   * @param storageLocationId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.storageLocationId}.
   * @param storageWarehouseId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.storageWarehouseId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceJobTypeItemForecastsV2` entity based on its keys.
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
    productVersionId: DeserializedType<T, 'Edm.String'>,
    storageSiteId: DeserializedType<T, 'Edm.String'>,
    storageLocationId: DeserializedType<T, 'Edm.String'>,
    storageWarehouseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceJobTypeItemForecastsV2<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceJobTypeItemForecastsV2<T>,
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
      ProductVersionId: productVersionId,
      StorageSiteId: storageSiteId,
      StorageLocationId: storageLocationId,
      StorageWarehouseId: storageWarehouseId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceJobTypeItemForecastsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceJobTypeItemForecastsV2`.
   */
  update(
    entity: AssetMaintenanceJobTypeItemForecastsV2<T>
  ): UpdateRequestBuilder<AssetMaintenanceJobTypeItemForecastsV2<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceJobTypeItemForecastsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeItemForecastsV2`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.maintenanceAssetId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.functionalLocationId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.jobTradeId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.jobVariantId}.
   * @param modelId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.modelId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.modelProductId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.productId}.
   * @param forecastItemId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.forecastItemId}.
   * @param forecastProjectLinePropertyId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.forecastProjectLinePropertyId}.
   * @param productColorId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.productColorId}.
   * @param productConfigurationId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.productSizeId}.
   * @param productStyleId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.productStyleId}.
   * @param productVersionId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.productVersionId}.
   * @param storageSiteId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.storageSiteId}.
   * @param storageLocationId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.storageLocationId}.
   * @param storageWarehouseId Key property. See {@link AssetMaintenanceJobTypeItemForecastsV2.storageWarehouseId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeItemForecastsV2`.
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
    productVersionId: string,
    storageSiteId: string,
    storageLocationId: string,
    storageWarehouseId: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeItemForecastsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeItemForecastsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeItemForecastsV2` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceJobTypeItemForecastsV2<T>
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeItemForecastsV2<T>, T>;
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
    productVersionId?: string,
    storageSiteId?: string,
    storageLocationId?: string,
    storageWarehouseId?: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeItemForecastsV2<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceJobTypeItemForecastsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceJobTypeItemForecastsV2
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
            ProductVersionId: productVersionId!,
            StorageSiteId: storageSiteId!,
            StorageLocationId: storageLocationId!,
            StorageWarehouseId: storageWarehouseId!
          }
    );
  }
}
