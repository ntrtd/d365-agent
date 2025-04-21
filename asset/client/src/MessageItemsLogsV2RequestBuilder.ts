/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { MessageItemsLogsV2 } from './MessageItemsLogsV2';

/**
 * Request builder class for operations supported on the {@link MessageItemsLogsV2} entity.
 */
export class MessageItemsLogsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageItemsLogsV2<T>, T> {
  /**
   * Returns a request builder for querying all `MessageItemsLogsV2` entities.
   * @returns A request builder for creating requests to retrieve all `MessageItemsLogsV2` entities.
   */
  getAll(): GetAllRequestBuilder<MessageItemsLogsV2<T>, T> {
    return new GetAllRequestBuilder<MessageItemsLogsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MessageItemsLogsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageItemsLogsV2`.
   */
  create(
    entity: MessageItemsLogsV2<T>
  ): CreateRequestBuilder<MessageItemsLogsV2<T>, T> {
    return new CreateRequestBuilder<MessageItemsLogsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessageItemsLogsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link MessageItemsLogsV2.dataAreaId}.
   * @param itemId Key property. See {@link MessageItemsLogsV2.itemId}.
   * @param itemTypeId Key property. See {@link MessageItemsLogsV2.itemTypeId}.
   * @param messageId Key property. See {@link MessageItemsLogsV2.messageId}.
   * @param actionId Key property. See {@link MessageItemsLogsV2.actionId}.
   * @param createdDTime Key property. See {@link MessageItemsLogsV2.createdDTime}.
   * @returns A request builder for creating requests to retrieve one `MessageItemsLogsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    itemTypeId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>,
    actionId: DeserializedType<T, 'Edm.String'>,
    createdDTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<MessageItemsLogsV2<T>, T> {
    return new GetByKeyRequestBuilder<MessageItemsLogsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId,
        ItemTypeId: itemTypeId,
        MessageId: messageId,
        ActionId: actionId,
        CreatedDTime: createdDTime
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MessageItemsLogsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageItemsLogsV2`.
   */
  update(
    entity: MessageItemsLogsV2<T>
  ): UpdateRequestBuilder<MessageItemsLogsV2<T>, T> {
    return new UpdateRequestBuilder<MessageItemsLogsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageItemsLogsV2`.
   * @param dataAreaId Key property. See {@link MessageItemsLogsV2.dataAreaId}.
   * @param itemId Key property. See {@link MessageItemsLogsV2.itemId}.
   * @param itemTypeId Key property. See {@link MessageItemsLogsV2.itemTypeId}.
   * @param messageId Key property. See {@link MessageItemsLogsV2.messageId}.
   * @param actionId Key property. See {@link MessageItemsLogsV2.actionId}.
   * @param createdDTime Key property. See {@link MessageItemsLogsV2.createdDTime}.
   * @returns A request builder for creating requests that delete an entity of type `MessageItemsLogsV2`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    itemTypeId: string,
    messageId: string,
    actionId: string,
    createdDTime: Moment
  ): DeleteRequestBuilder<MessageItemsLogsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageItemsLogsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageItemsLogsV2` by taking the entity as a parameter.
   */
  delete(
    entity: MessageItemsLogsV2<T>
  ): DeleteRequestBuilder<MessageItemsLogsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    itemTypeId?: string,
    messageId?: string,
    actionId?: string,
    createdDTime?: Moment
  ): DeleteRequestBuilder<MessageItemsLogsV2<T>, T> {
    return new DeleteRequestBuilder<MessageItemsLogsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MessageItemsLogsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            ItemTypeId: itemTypeId!,
            MessageId: messageId!,
            ActionId: actionId!,
            CreatedDTime: createdDTime!
          }
    );
  }
}
