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
import { AssetMaintenanceAssetCriticalities } from './AssetMaintenanceAssetCriticalities';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetCriticalities} entity.
 */
export class AssetMaintenanceAssetCriticalitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetCriticalities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetCriticalities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetCriticalities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetCriticalities<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetCriticalities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetCriticalities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetCriticalities`.
   */
  create(
    entity: AssetMaintenanceAssetCriticalities<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetCriticalities<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetCriticalities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetCriticalities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetCriticalities.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetCriticalities.maintenanceAssetId}.
   * @param jobGroupId Key property. See {@link AssetMaintenanceAssetCriticalities.jobGroupId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceAssetCriticalities.jobTradeId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceAssetCriticalities.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceAssetCriticalities.jobVariantId}.
   * @param modelId Key property. See {@link AssetMaintenanceAssetCriticalities.modelId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceAssetCriticalities.modelProductId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetCriticalities.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceAssetCriticalities.productId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceAssetCriticalities.functionalLocationId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetCriticalities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    jobGroupId: DeserializedType<T, 'Edm.String'>,
    jobTradeId: DeserializedType<T, 'Edm.String'>,
    jobTypeId: DeserializedType<T, 'Edm.String'>,
    jobVariantId: DeserializedType<T, 'Edm.String'>,
    modelId: DeserializedType<T, 'Edm.String'>,
    modelProductId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    productId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetCriticalities<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceAssetCriticalities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MaintenanceAssetId: maintenanceAssetId,
        JobGroupId: jobGroupId,
        JobTradeId: jobTradeId,
        JobTypeId: jobTypeId,
        JobVariantId: jobVariantId,
        ModelId: modelId,
        ModelProductId: modelProductId,
        MaintenanceAssetTypeId: maintenanceAssetTypeId,
        ProductId: productId,
        FunctionalLocationId: functionalLocationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetCriticalities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetCriticalities`.
   */
  update(
    entity: AssetMaintenanceAssetCriticalities<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetCriticalities<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetCriticalities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetCriticalities`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetCriticalities.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetCriticalities.maintenanceAssetId}.
   * @param jobGroupId Key property. See {@link AssetMaintenanceAssetCriticalities.jobGroupId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceAssetCriticalities.jobTradeId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceAssetCriticalities.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceAssetCriticalities.jobVariantId}.
   * @param modelId Key property. See {@link AssetMaintenanceAssetCriticalities.modelId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceAssetCriticalities.modelProductId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetCriticalities.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceAssetCriticalities.productId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceAssetCriticalities.functionalLocationId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetCriticalities`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetId: string,
    jobGroupId: string,
    jobTradeId: string,
    jobTypeId: string,
    jobVariantId: string,
    modelId: string,
    modelProductId: string,
    maintenanceAssetTypeId: string,
    productId: string,
    functionalLocationId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetCriticalities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetCriticalities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetCriticalities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetCriticalities<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetCriticalities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetId?: string,
    jobGroupId?: string,
    jobTradeId?: string,
    jobTypeId?: string,
    jobVariantId?: string,
    modelId?: string,
    modelProductId?: string,
    maintenanceAssetTypeId?: string,
    productId?: string,
    functionalLocationId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetCriticalities<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetCriticalities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetCriticalities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetId: maintenanceAssetId!,
            JobGroupId: jobGroupId!,
            JobTradeId: jobTradeId!,
            JobTypeId: jobTypeId!,
            JobVariantId: jobVariantId!,
            ModelId: modelId!,
            ModelProductId: modelProductId!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            ProductId: productId!,
            FunctionalLocationId: functionalLocationId!
          }
    );
  }
}
