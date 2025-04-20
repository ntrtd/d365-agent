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
import { MessageStatus } from './MessageStatus';

/**
 * Request builder class for operations supported on the {@link MessageStatus} entity.
 */
export class MessageStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageStatus<T>, T> {
  /**
   * Returns a request builder for querying all `MessageStatus` entities.
   * @returns A request builder for creating requests to retrieve all `MessageStatus` entities.
   */
  getAll(): GetAllRequestBuilder<MessageStatus<T>, T> {
    return new GetAllRequestBuilder<MessageStatus<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MessageStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageStatus`.
   */
  create(entity: MessageStatus<T>): CreateRequestBuilder<MessageStatus<T>, T> {
    return new CreateRequestBuilder<MessageStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessageStatus` entity based on its keys.
   * @param dataAreaId Key property. See {@link MessageStatus.dataAreaId}.
   * @param messageStatus Key property. See {@link MessageStatus.messageStatus}.
   * @returns A request builder for creating requests to retrieve one `MessageStatus` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    messageStatus: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageStatus<T>, T> {
    return new GetByKeyRequestBuilder<MessageStatus<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      MessageStatus: messageStatus
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MessageStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageStatus`.
   */
  update(entity: MessageStatus<T>): UpdateRequestBuilder<MessageStatus<T>, T> {
    return new UpdateRequestBuilder<MessageStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageStatus`.
   * @param dataAreaId Key property. See {@link MessageStatus.dataAreaId}.
   * @param messageStatus Key property. See {@link MessageStatus.messageStatus}.
   * @returns A request builder for creating requests that delete an entity of type `MessageStatus`.
   */
  delete(
    dataAreaId: string,
    messageStatus: string
  ): DeleteRequestBuilder<MessageStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageStatus` by taking the entity as a parameter.
   */
  delete(entity: MessageStatus<T>): DeleteRequestBuilder<MessageStatus<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    messageStatus?: string
  ): DeleteRequestBuilder<MessageStatus<T>, T> {
    return new DeleteRequestBuilder<MessageStatus<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MessageStatus
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MessageStatus: messageStatus!
          }
    );
  }
}
