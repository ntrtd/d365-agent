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
import { BatchOrderByProductsV2 } from './BatchOrderByProductsV2';

/**
 * Request builder class for operations supported on the {@link BatchOrderByProductsV2} entity.
 */
export class BatchOrderByProductsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BatchOrderByProductsV2<T>, T> {
  /**
   * Returns a request builder for querying all `BatchOrderByProductsV2` entities.
   * @returns A request builder for creating requests to retrieve all `BatchOrderByProductsV2` entities.
   */
  getAll(): GetAllRequestBuilder<BatchOrderByProductsV2<T>, T> {
    return new GetAllRequestBuilder<BatchOrderByProductsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BatchOrderByProductsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BatchOrderByProductsV2`.
   */
  create(
    entity: BatchOrderByProductsV2<T>
  ): CreateRequestBuilder<BatchOrderByProductsV2<T>, T> {
    return new CreateRequestBuilder<BatchOrderByProductsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BatchOrderByProductsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link BatchOrderByProductsV2.dataAreaId}.
   * @param inventoryLotId Key property. See {@link BatchOrderByProductsV2.inventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `BatchOrderByProductsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BatchOrderByProductsV2<T>, T> {
    return new GetByKeyRequestBuilder<BatchOrderByProductsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventoryLotId: inventoryLotId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BatchOrderByProductsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BatchOrderByProductsV2`.
   */
  update(
    entity: BatchOrderByProductsV2<T>
  ): UpdateRequestBuilder<BatchOrderByProductsV2<T>, T> {
    return new UpdateRequestBuilder<BatchOrderByProductsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BatchOrderByProductsV2`.
   * @param dataAreaId Key property. See {@link BatchOrderByProductsV2.dataAreaId}.
   * @param inventoryLotId Key property. See {@link BatchOrderByProductsV2.inventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `BatchOrderByProductsV2`.
   */
  delete(
    dataAreaId: string,
    inventoryLotId: string
  ): DeleteRequestBuilder<BatchOrderByProductsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BatchOrderByProductsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BatchOrderByProductsV2` by taking the entity as a parameter.
   */
  delete(
    entity: BatchOrderByProductsV2<T>
  ): DeleteRequestBuilder<BatchOrderByProductsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryLotId?: string
  ): DeleteRequestBuilder<BatchOrderByProductsV2<T>, T> {
    return new DeleteRequestBuilder<BatchOrderByProductsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BatchOrderByProductsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryLotId: inventoryLotId!
          }
    );
  }
}
