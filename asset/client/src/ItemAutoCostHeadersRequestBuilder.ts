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
import { ItemAutoCostHeaders } from './ItemAutoCostHeaders';

/**
 * Request builder class for operations supported on the {@link ItemAutoCostHeaders} entity.
 */
export class ItemAutoCostHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemAutoCostHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ItemAutoCostHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ItemAutoCostHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ItemAutoCostHeaders<T>, T> {
    return new GetAllRequestBuilder<ItemAutoCostHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ItemAutoCostHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemAutoCostHeaders`.
   */
  create(
    entity: ItemAutoCostHeaders<T>
  ): CreateRequestBuilder<ItemAutoCostHeaders<T>, T> {
    return new CreateRequestBuilder<ItemAutoCostHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemAutoCostHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemAutoCostHeaders.dataAreaId}.
   * @param itemCostAutoNumber Key property. See {@link ItemAutoCostHeaders.itemCostAutoNumber}.
   * @returns A request builder for creating requests to retrieve one `ItemAutoCostHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemCostAutoNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemAutoCostHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ItemAutoCostHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemCostAutoNumber: itemCostAutoNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemAutoCostHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemAutoCostHeaders`.
   */
  update(
    entity: ItemAutoCostHeaders<T>
  ): UpdateRequestBuilder<ItemAutoCostHeaders<T>, T> {
    return new UpdateRequestBuilder<ItemAutoCostHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemAutoCostHeaders`.
   * @param dataAreaId Key property. See {@link ItemAutoCostHeaders.dataAreaId}.
   * @param itemCostAutoNumber Key property. See {@link ItemAutoCostHeaders.itemCostAutoNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ItemAutoCostHeaders`.
   */
  delete(
    dataAreaId: string,
    itemCostAutoNumber: string
  ): DeleteRequestBuilder<ItemAutoCostHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemAutoCostHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemAutoCostHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ItemAutoCostHeaders<T>
  ): DeleteRequestBuilder<ItemAutoCostHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemCostAutoNumber?: string
  ): DeleteRequestBuilder<ItemAutoCostHeaders<T>, T> {
    return new DeleteRequestBuilder<ItemAutoCostHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemAutoCostHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemCostAutoNumber: itemCostAutoNumber!
          }
    );
  }
}
