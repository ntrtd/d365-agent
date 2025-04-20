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
import { MessageItemsLogs } from './MessageItemsLogs';

/**
 * Request builder class for operations supported on the {@link MessageItemsLogs} entity.
 */
export class MessageItemsLogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageItemsLogs<T>, T> {
  /**
   * Returns a request builder for querying all `MessageItemsLogs` entities.
   * @returns A request builder for creating requests to retrieve all `MessageItemsLogs` entities.
   */
  getAll(): GetAllRequestBuilder<MessageItemsLogs<T>, T> {
    return new GetAllRequestBuilder<MessageItemsLogs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MessageItemsLogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageItemsLogs`.
   */
  create(
    entity: MessageItemsLogs<T>
  ): CreateRequestBuilder<MessageItemsLogs<T>, T> {
    return new CreateRequestBuilder<MessageItemsLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessageItemsLogs` entity based on its keys.
   * @param dataAreaId Key property. See {@link MessageItemsLogs.dataAreaId}.
   * @param itemId Key property. See {@link MessageItemsLogs.itemId}.
   * @param itemTypeId Key property. See {@link MessageItemsLogs.itemTypeId}.
   * @param messageId Key property. See {@link MessageItemsLogs.messageId}.
   * @param actionId Key property. See {@link MessageItemsLogs.actionId}.
   * @returns A request builder for creating requests to retrieve one `MessageItemsLogs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    itemTypeId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>,
    actionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageItemsLogs<T>, T> {
    return new GetByKeyRequestBuilder<MessageItemsLogs<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemId: itemId,
      ItemTypeId: itemTypeId,
      MessageId: messageId,
      ActionId: actionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MessageItemsLogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageItemsLogs`.
   */
  update(
    entity: MessageItemsLogs<T>
  ): UpdateRequestBuilder<MessageItemsLogs<T>, T> {
    return new UpdateRequestBuilder<MessageItemsLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageItemsLogs`.
   * @param dataAreaId Key property. See {@link MessageItemsLogs.dataAreaId}.
   * @param itemId Key property. See {@link MessageItemsLogs.itemId}.
   * @param itemTypeId Key property. See {@link MessageItemsLogs.itemTypeId}.
   * @param messageId Key property. See {@link MessageItemsLogs.messageId}.
   * @param actionId Key property. See {@link MessageItemsLogs.actionId}.
   * @returns A request builder for creating requests that delete an entity of type `MessageItemsLogs`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    itemTypeId: string,
    messageId: string,
    actionId: string
  ): DeleteRequestBuilder<MessageItemsLogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageItemsLogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageItemsLogs` by taking the entity as a parameter.
   */
  delete(
    entity: MessageItemsLogs<T>
  ): DeleteRequestBuilder<MessageItemsLogs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    itemTypeId?: string,
    messageId?: string,
    actionId?: string
  ): DeleteRequestBuilder<MessageItemsLogs<T>, T> {
    return new DeleteRequestBuilder<MessageItemsLogs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MessageItemsLogs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            ItemTypeId: itemTypeId!,
            MessageId: messageId!,
            ActionId: actionId!
          }
    );
  }
}
