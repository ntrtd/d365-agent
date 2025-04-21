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
import { AssetMaintenanceJobTypeDefaultTools } from './AssetMaintenanceJobTypeDefaultTools';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceJobTypeDefaultTools} entity.
 */
export class AssetMaintenanceJobTypeDefaultToolsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceJobTypeDefaultTools<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceJobTypeDefaultTools` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceJobTypeDefaultTools` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceJobTypeDefaultTools<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceJobTypeDefaultTools<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceJobTypeDefaultTools` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceJobTypeDefaultTools`.
   */
  create(
    entity: AssetMaintenanceJobTypeDefaultTools<T>
  ): CreateRequestBuilder<AssetMaintenanceJobTypeDefaultTools<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceJobTypeDefaultTools<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceJobTypeDefaultTools` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.modelId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.maintenanceAssetId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.jobVariantId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.jobTradeId}.
   * @param resource Key property. See {@link AssetMaintenanceJobTypeDefaultTools.resource}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceJobTypeDefaultTools` entity based on its keys.
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
    jobTradeId: DeserializedType<T, 'Edm.String'>,
    resource: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceJobTypeDefaultTools<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceJobTypeDefaultTools<T>,
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
      JobTradeId: jobTradeId,
      Resource: resource
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceJobTypeDefaultTools`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceJobTypeDefaultTools`.
   */
  update(
    entity: AssetMaintenanceJobTypeDefaultTools<T>
  ): UpdateRequestBuilder<AssetMaintenanceJobTypeDefaultTools<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceJobTypeDefaultTools<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeDefaultTools`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.modelId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.maintenanceAssetId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.jobVariantId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceJobTypeDefaultTools.jobTradeId}.
   * @param resource Key property. See {@link AssetMaintenanceJobTypeDefaultTools.resource}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeDefaultTools`.
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
    jobTradeId: string,
    resource: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeDefaultTools<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeDefaultTools`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeDefaultTools` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceJobTypeDefaultTools<T>
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeDefaultTools<T>, T>;
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
    jobTradeId?: string,
    resource?: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeDefaultTools<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceJobTypeDefaultTools<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceJobTypeDefaultTools
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
            JobTradeId: jobTradeId!,
            Resource: resource!
          }
    );
  }
}
