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
import { AssetMaintenanceModels } from './AssetMaintenanceModels';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceModels} entity.
 */
export class AssetMaintenanceModelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceModels<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceModels` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceModels` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceModels<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceModels<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceModels`.
   */
  create(
    entity: AssetMaintenanceModels<T>
  ): CreateRequestBuilder<AssetMaintenanceModels<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceModels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceModels` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceModels.dataAreaId}.
   * @param productId Key property. See {@link AssetMaintenanceModels.productId}.
   * @param modelId Key property. See {@link AssetMaintenanceModels.modelId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceModels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productId: DeserializedType<T, 'Edm.String'>,
    modelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceModels<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceModels<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductId: productId,
        ModelId: modelId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceModels`.
   */
  update(
    entity: AssetMaintenanceModels<T>
  ): UpdateRequestBuilder<AssetMaintenanceModels<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceModels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceModels`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceModels.dataAreaId}.
   * @param productId Key property. See {@link AssetMaintenanceModels.productId}.
   * @param modelId Key property. See {@link AssetMaintenanceModels.modelId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceModels`.
   */
  delete(
    dataAreaId: string,
    productId: string,
    modelId: string
  ): DeleteRequestBuilder<AssetMaintenanceModels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceModels` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceModels<T>
  ): DeleteRequestBuilder<AssetMaintenanceModels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productId?: string,
    modelId?: string
  ): DeleteRequestBuilder<AssetMaintenanceModels<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceModels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceModels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductId: productId!,
            ModelId: modelId!
          }
    );
  }
}
