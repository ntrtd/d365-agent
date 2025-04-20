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
import { MessageItems } from './MessageItems';

/**
 * Request builder class for operations supported on the {@link MessageItems} entity.
 */
export class MessageItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageItems<T>, T> {
  /**
   * Returns a request builder for querying all `MessageItems` entities.
   * @returns A request builder for creating requests to retrieve all `MessageItems` entities.
   */
  getAll(): GetAllRequestBuilder<MessageItems<T>, T> {
    return new GetAllRequestBuilder<MessageItems<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MessageItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageItems`.
   */
  create(entity: MessageItems<T>): CreateRequestBuilder<MessageItems<T>, T> {
    return new CreateRequestBuilder<MessageItems<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MessageItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link MessageItems.dataAreaId}.
   * @param itemId Key property. See {@link MessageItems.itemId}.
   * @param itemType Key property. See {@link MessageItems.itemType}.
   * @param processingId Key property. See {@link MessageItems.processingId}.
   * @returns A request builder for creating requests to retrieve one `MessageItems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    itemType: DeserializedType<T, 'Edm.String'>,
    processingId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageItems<T>, T> {
    return new GetByKeyRequestBuilder<MessageItems<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemId: itemId,
      ItemType: itemType,
      ProcessingId: processingId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MessageItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageItems`.
   */
  update(entity: MessageItems<T>): UpdateRequestBuilder<MessageItems<T>, T> {
    return new UpdateRequestBuilder<MessageItems<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageItems`.
   * @param dataAreaId Key property. See {@link MessageItems.dataAreaId}.
   * @param itemId Key property. See {@link MessageItems.itemId}.
   * @param itemType Key property. See {@link MessageItems.itemType}.
   * @param processingId Key property. See {@link MessageItems.processingId}.
   * @returns A request builder for creating requests that delete an entity of type `MessageItems`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    itemType: string,
    processingId: string
  ): DeleteRequestBuilder<MessageItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageItems` by taking the entity as a parameter.
   */
  delete(entity: MessageItems<T>): DeleteRequestBuilder<MessageItems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    itemType?: string,
    processingId?: string
  ): DeleteRequestBuilder<MessageItems<T>, T> {
    return new DeleteRequestBuilder<MessageItems<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MessageItems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            ItemType: itemType!,
            ProcessingId: processingId!
          }
    );
  }
}
