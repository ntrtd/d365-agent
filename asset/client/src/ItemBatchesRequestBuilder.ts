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
import { ItemBatches } from './ItemBatches';

/**
 * Request builder class for operations supported on the {@link ItemBatches} entity.
 */
export class ItemBatchesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemBatches<T>, T> {
  /**
   * Returns a request builder for querying all `ItemBatches` entities.
   * @returns A request builder for creating requests to retrieve all `ItemBatches` entities.
   */
  getAll(): GetAllRequestBuilder<ItemBatches<T>, T> {
    return new GetAllRequestBuilder<ItemBatches<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ItemBatches` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemBatches`.
   */
  create(entity: ItemBatches<T>): CreateRequestBuilder<ItemBatches<T>, T> {
    return new CreateRequestBuilder<ItemBatches<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ItemBatches` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemBatches.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemBatches.itemNumber}.
   * @param batchNumber Key property. See {@link ItemBatches.batchNumber}.
   * @returns A request builder for creating requests to retrieve one `ItemBatches` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    batchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemBatches<T>, T> {
    return new GetByKeyRequestBuilder<ItemBatches<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemNumber: itemNumber,
      BatchNumber: batchNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ItemBatches`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemBatches`.
   */
  update(entity: ItemBatches<T>): UpdateRequestBuilder<ItemBatches<T>, T> {
    return new UpdateRequestBuilder<ItemBatches<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemBatches`.
   * @param dataAreaId Key property. See {@link ItemBatches.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemBatches.itemNumber}.
   * @param batchNumber Key property. See {@link ItemBatches.batchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ItemBatches`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    batchNumber: string
  ): DeleteRequestBuilder<ItemBatches<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemBatches`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemBatches` by taking the entity as a parameter.
   */
  delete(entity: ItemBatches<T>): DeleteRequestBuilder<ItemBatches<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    batchNumber?: string
  ): DeleteRequestBuilder<ItemBatches<T>, T> {
    return new DeleteRequestBuilder<ItemBatches<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemBatches
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            BatchNumber: batchNumber!
          }
    );
  }
}
