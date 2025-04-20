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
import { ItemBatchAttributeValues } from './ItemBatchAttributeValues';

/**
 * Request builder class for operations supported on the {@link ItemBatchAttributeValues} entity.
 */
export class ItemBatchAttributeValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemBatchAttributeValues<T>, T> {
  /**
   * Returns a request builder for querying all `ItemBatchAttributeValues` entities.
   * @returns A request builder for creating requests to retrieve all `ItemBatchAttributeValues` entities.
   */
  getAll(): GetAllRequestBuilder<ItemBatchAttributeValues<T>, T> {
    return new GetAllRequestBuilder<ItemBatchAttributeValues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemBatchAttributeValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemBatchAttributeValues`.
   */
  create(
    entity: ItemBatchAttributeValues<T>
  ): CreateRequestBuilder<ItemBatchAttributeValues<T>, T> {
    return new CreateRequestBuilder<ItemBatchAttributeValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemBatchAttributeValues` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemBatchAttributeValues.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemBatchAttributeValues.itemNumber}.
   * @param itemBatchNumber Key property. See {@link ItemBatchAttributeValues.itemBatchNumber}.
   * @param itemBatchAttributeId Key property. See {@link ItemBatchAttributeValues.itemBatchAttributeId}.
   * @returns A request builder for creating requests to retrieve one `ItemBatchAttributeValues` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    itemBatchNumber: DeserializedType<T, 'Edm.String'>,
    itemBatchAttributeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemBatchAttributeValues<T>, T> {
    return new GetByKeyRequestBuilder<ItemBatchAttributeValues<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ItemBatchNumber: itemBatchNumber,
        ItemBatchAttributeId: itemBatchAttributeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemBatchAttributeValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemBatchAttributeValues`.
   */
  update(
    entity: ItemBatchAttributeValues<T>
  ): UpdateRequestBuilder<ItemBatchAttributeValues<T>, T> {
    return new UpdateRequestBuilder<ItemBatchAttributeValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemBatchAttributeValues`.
   * @param dataAreaId Key property. See {@link ItemBatchAttributeValues.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemBatchAttributeValues.itemNumber}.
   * @param itemBatchNumber Key property. See {@link ItemBatchAttributeValues.itemBatchNumber}.
   * @param itemBatchAttributeId Key property. See {@link ItemBatchAttributeValues.itemBatchAttributeId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemBatchAttributeValues`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    itemBatchNumber: string,
    itemBatchAttributeId: string
  ): DeleteRequestBuilder<ItemBatchAttributeValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemBatchAttributeValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemBatchAttributeValues` by taking the entity as a parameter.
   */
  delete(
    entity: ItemBatchAttributeValues<T>
  ): DeleteRequestBuilder<ItemBatchAttributeValues<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    itemBatchNumber?: string,
    itemBatchAttributeId?: string
  ): DeleteRequestBuilder<ItemBatchAttributeValues<T>, T> {
    return new DeleteRequestBuilder<ItemBatchAttributeValues<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemBatchAttributeValues
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ItemBatchNumber: itemBatchNumber!,
            ItemBatchAttributeId: itemBatchAttributeId!
          }
    );
  }
}
