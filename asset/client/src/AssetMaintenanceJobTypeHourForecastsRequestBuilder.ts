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
import { AssetMaintenanceJobTypeHourForecasts } from './AssetMaintenanceJobTypeHourForecasts';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceJobTypeHourForecasts} entity.
 */
export class AssetMaintenanceJobTypeHourForecastsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceJobTypeHourForecasts<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceJobTypeHourForecasts` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceJobTypeHourForecasts` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceJobTypeHourForecasts<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceJobTypeHourForecasts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceJobTypeHourForecasts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceJobTypeHourForecasts`.
   */
  create(
    entity: AssetMaintenanceJobTypeHourForecasts<T>
  ): CreateRequestBuilder<AssetMaintenanceJobTypeHourForecasts<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceJobTypeHourForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceJobTypeHourForecasts` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.maintenanceAssetId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.functionalLocationId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.jobTradeId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.jobVariantId}.
   * @param modelId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.modelId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.modelProductId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.productId}.
   * @param forecastCategoryId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.forecastCategoryId}.
   * @param forecastLinePropertyId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.forecastLinePropertyId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceJobTypeHourForecasts` entity based on its keys.
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
    forecastCategoryId: DeserializedType<T, 'Edm.String'>,
    forecastLinePropertyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceJobTypeHourForecasts<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceJobTypeHourForecasts<T>,
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
      ForecastCategoryId: forecastCategoryId,
      ForecastLinePropertyId: forecastLinePropertyId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceJobTypeHourForecasts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceJobTypeHourForecasts`.
   */
  update(
    entity: AssetMaintenanceJobTypeHourForecasts<T>
  ): UpdateRequestBuilder<AssetMaintenanceJobTypeHourForecasts<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceJobTypeHourForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeHourForecasts`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.maintenanceAssetId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.functionalLocationId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.jobTradeId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.jobVariantId}.
   * @param modelId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.modelId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.modelProductId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.productId}.
   * @param forecastCategoryId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.forecastCategoryId}.
   * @param forecastLinePropertyId Key property. See {@link AssetMaintenanceJobTypeHourForecasts.forecastLinePropertyId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeHourForecasts`.
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
    forecastCategoryId: string,
    forecastLinePropertyId: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeHourForecasts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeHourForecasts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeHourForecasts` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceJobTypeHourForecasts<T>
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeHourForecasts<T>, T>;
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
    forecastCategoryId?: string,
    forecastLinePropertyId?: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeHourForecasts<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceJobTypeHourForecasts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceJobTypeHourForecasts
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
            ForecastCategoryId: forecastCategoryId!,
            ForecastLinePropertyId: forecastLinePropertyId!
          }
    );
  }
}
