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
import { AssetMaintenanceAssetTypeDefaults } from './AssetMaintenanceAssetTypeDefaults';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetTypeDefaults} entity.
 */
export class AssetMaintenanceAssetTypeDefaultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetTypeDefaults<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetTypeDefaults` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetTypeDefaults` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetTypeDefaults<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetTypeDefaults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetTypeDefaults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetTypeDefaults`.
   */
  create(
    entity: AssetMaintenanceAssetTypeDefaults<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetTypeDefaults<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetTypeDefaults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetTypeDefaults` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeDefaults.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeDefaults.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceAssetTypeDefaults.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceAssetTypeDefaults.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceAssetTypeDefaults.modelId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetTypeDefaults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    productId: DeserializedType<T, 'Edm.String'>,
    modelProductId: DeserializedType<T, 'Edm.String'>,
    modelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetTypeDefaults<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceAssetTypeDefaults<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MaintenanceAssetTypeId: maintenanceAssetTypeId,
        ProductId: productId,
        ModelProductId: modelProductId,
        ModelId: modelId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetTypeDefaults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetTypeDefaults`.
   */
  update(
    entity: AssetMaintenanceAssetTypeDefaults<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetTypeDefaults<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetTypeDefaults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeDefaults`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeDefaults.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeDefaults.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceAssetTypeDefaults.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceAssetTypeDefaults.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceAssetTypeDefaults.modelId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeDefaults`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetTypeId: string,
    productId: string,
    modelProductId: string,
    modelId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeDefaults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeDefaults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeDefaults` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetTypeDefaults<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeDefaults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetTypeId?: string,
    productId?: string,
    modelProductId?: string,
    modelId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeDefaults<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetTypeDefaults<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetTypeDefaults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            ProductId: productId!,
            ModelProductId: modelProductId!,
            ModelId: modelId!
          }
    );
  }
}
