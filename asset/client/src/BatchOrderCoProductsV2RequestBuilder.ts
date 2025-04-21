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
import { BatchOrderCoProductsV2 } from './BatchOrderCoProductsV2';

/**
 * Request builder class for operations supported on the {@link BatchOrderCoProductsV2} entity.
 */
export class BatchOrderCoProductsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BatchOrderCoProductsV2<T>, T> {
  /**
   * Returns a request builder for querying all `BatchOrderCoProductsV2` entities.
   * @returns A request builder for creating requests to retrieve all `BatchOrderCoProductsV2` entities.
   */
  getAll(): GetAllRequestBuilder<BatchOrderCoProductsV2<T>, T> {
    return new GetAllRequestBuilder<BatchOrderCoProductsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BatchOrderCoProductsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BatchOrderCoProductsV2`.
   */
  create(
    entity: BatchOrderCoProductsV2<T>
  ): CreateRequestBuilder<BatchOrderCoProductsV2<T>, T> {
    return new CreateRequestBuilder<BatchOrderCoProductsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BatchOrderCoProductsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link BatchOrderCoProductsV2.dataAreaId}.
   * @param inventoryLotId Key property. See {@link BatchOrderCoProductsV2.inventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `BatchOrderCoProductsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BatchOrderCoProductsV2<T>, T> {
    return new GetByKeyRequestBuilder<BatchOrderCoProductsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventoryLotId: inventoryLotId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BatchOrderCoProductsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BatchOrderCoProductsV2`.
   */
  update(
    entity: BatchOrderCoProductsV2<T>
  ): UpdateRequestBuilder<BatchOrderCoProductsV2<T>, T> {
    return new UpdateRequestBuilder<BatchOrderCoProductsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BatchOrderCoProductsV2`.
   * @param dataAreaId Key property. See {@link BatchOrderCoProductsV2.dataAreaId}.
   * @param inventoryLotId Key property. See {@link BatchOrderCoProductsV2.inventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `BatchOrderCoProductsV2`.
   */
  delete(
    dataAreaId: string,
    inventoryLotId: string
  ): DeleteRequestBuilder<BatchOrderCoProductsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BatchOrderCoProductsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BatchOrderCoProductsV2` by taking the entity as a parameter.
   */
  delete(
    entity: BatchOrderCoProductsV2<T>
  ): DeleteRequestBuilder<BatchOrderCoProductsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryLotId?: string
  ): DeleteRequestBuilder<BatchOrderCoProductsV2<T>, T> {
    return new DeleteRequestBuilder<BatchOrderCoProductsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BatchOrderCoProductsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryLotId: inventoryLotId!
          }
    );
  }
}
