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
import { MessageItemsLogDetails } from './MessageItemsLogDetails';

/**
 * Request builder class for operations supported on the {@link MessageItemsLogDetails} entity.
 */
export class MessageItemsLogDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageItemsLogDetails<T>, T> {
  /**
   * Returns a request builder for querying all `MessageItemsLogDetails` entities.
   * @returns A request builder for creating requests to retrieve all `MessageItemsLogDetails` entities.
   */
  getAll(): GetAllRequestBuilder<MessageItemsLogDetails<T>, T> {
    return new GetAllRequestBuilder<MessageItemsLogDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MessageItemsLogDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageItemsLogDetails`.
   */
  create(
    entity: MessageItemsLogDetails<T>
  ): CreateRequestBuilder<MessageItemsLogDetails<T>, T> {
    return new CreateRequestBuilder<MessageItemsLogDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessageItemsLogDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link MessageItemsLogDetails.dataAreaId}.
   * @param itemId Key property. See {@link MessageItemsLogDetails.itemId}.
   * @param messageId Key property. See {@link MessageItemsLogDetails.messageId}.
   * @param actionId Key property. See {@link MessageItemsLogDetails.actionId}.
   * @param itemTypeId Key property. See {@link MessageItemsLogDetails.itemTypeId}.
   * @param processingId Key property. See {@link MessageItemsLogDetails.processingId}.
   * @returns A request builder for creating requests to retrieve one `MessageItemsLogDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>,
    actionId: DeserializedType<T, 'Edm.String'>,
    itemTypeId: DeserializedType<T, 'Edm.String'>,
    processingId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageItemsLogDetails<T>, T> {
    return new GetByKeyRequestBuilder<MessageItemsLogDetails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId,
        MessageId: messageId,
        ActionId: actionId,
        ItemTypeId: itemTypeId,
        ProcessingId: processingId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MessageItemsLogDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageItemsLogDetails`.
   */
  update(
    entity: MessageItemsLogDetails<T>
  ): UpdateRequestBuilder<MessageItemsLogDetails<T>, T> {
    return new UpdateRequestBuilder<MessageItemsLogDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageItemsLogDetails`.
   * @param dataAreaId Key property. See {@link MessageItemsLogDetails.dataAreaId}.
   * @param itemId Key property. See {@link MessageItemsLogDetails.itemId}.
   * @param messageId Key property. See {@link MessageItemsLogDetails.messageId}.
   * @param actionId Key property. See {@link MessageItemsLogDetails.actionId}.
   * @param itemTypeId Key property. See {@link MessageItemsLogDetails.itemTypeId}.
   * @param processingId Key property. See {@link MessageItemsLogDetails.processingId}.
   * @returns A request builder for creating requests that delete an entity of type `MessageItemsLogDetails`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    messageId: string,
    actionId: string,
    itemTypeId: string,
    processingId: string
  ): DeleteRequestBuilder<MessageItemsLogDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageItemsLogDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageItemsLogDetails` by taking the entity as a parameter.
   */
  delete(
    entity: MessageItemsLogDetails<T>
  ): DeleteRequestBuilder<MessageItemsLogDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    messageId?: string,
    actionId?: string,
    itemTypeId?: string,
    processingId?: string
  ): DeleteRequestBuilder<MessageItemsLogDetails<T>, T> {
    return new DeleteRequestBuilder<MessageItemsLogDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MessageItemsLogDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            MessageId: messageId!,
            ActionId: actionId!,
            ItemTypeId: itemTypeId!,
            ProcessingId: processingId!
          }
    );
  }
}
