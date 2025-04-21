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
import { AssetMaintenanceJobTypeDefaultDescriptions } from './AssetMaintenanceJobTypeDefaultDescriptions';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceJobTypeDefaultDescriptions} entity.
 */
export class AssetMaintenanceJobTypeDefaultDescriptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceJobTypeDefaultDescriptions<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceJobTypeDefaultDescriptions` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceJobTypeDefaultDescriptions` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceJobTypeDefaultDescriptions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceJobTypeDefaultDescriptions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceJobTypeDefaultDescriptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceJobTypeDefaultDescriptions`.
   */
  create(
    entity: AssetMaintenanceJobTypeDefaultDescriptions<T>
  ): CreateRequestBuilder<AssetMaintenanceJobTypeDefaultDescriptions<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceJobTypeDefaultDescriptions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceJobTypeDefaultDescriptions` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.modelId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.maintenanceAssetId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.jobVariantId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.jobTradeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceJobTypeDefaultDescriptions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    productId: DeserializedType<T, 'Edm.String'>,
    modelProductId: DeserializedType<T, 'Edm.String'>,
    modelId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    jobTypeId: DeserializedType<T, 'Edm.String'>,
    jobVariantId: DeserializedType<T, 'Edm.String'>,
    jobTradeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceJobTypeDefaultDescriptions<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceJobTypeDefaultDescriptions<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FunctionalLocationId: functionalLocationId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      ProductId: productId,
      ModelProductId: modelProductId,
      ModelId: modelId,
      MaintenanceAssetId: maintenanceAssetId,
      JobTypeId: jobTypeId,
      JobVariantId: jobVariantId,
      JobTradeId: jobTradeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceJobTypeDefaultDescriptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceJobTypeDefaultDescriptions`.
   */
  update(
    entity: AssetMaintenanceJobTypeDefaultDescriptions<T>
  ): UpdateRequestBuilder<AssetMaintenanceJobTypeDefaultDescriptions<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceJobTypeDefaultDescriptions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeDefaultDescriptions`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.modelId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.maintenanceAssetId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.jobVariantId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceJobTypeDefaultDescriptions.jobTradeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeDefaultDescriptions`.
   */
  delete(
    dataAreaId: string,
    functionalLocationId: string,
    maintenanceAssetTypeId: string,
    productId: string,
    modelProductId: string,
    modelId: string,
    maintenanceAssetId: string,
    jobTypeId: string,
    jobVariantId: string,
    jobTradeId: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeDefaultDescriptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeDefaultDescriptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeDefaultDescriptions` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceJobTypeDefaultDescriptions<T>
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeDefaultDescriptions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationId?: string,
    maintenanceAssetTypeId?: string,
    productId?: string,
    modelProductId?: string,
    modelId?: string,
    maintenanceAssetId?: string,
    jobTypeId?: string,
    jobVariantId?: string,
    jobTradeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeDefaultDescriptions<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceJobTypeDefaultDescriptions<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceJobTypeDefaultDescriptions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationId: functionalLocationId!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            ProductId: productId!,
            ModelProductId: modelProductId!,
            ModelId: modelId!,
            MaintenanceAssetId: maintenanceAssetId!,
            JobTypeId: jobTypeId!,
            JobVariantId: jobVariantId!,
            JobTradeId: jobTradeId!
          }
    );
  }
}
