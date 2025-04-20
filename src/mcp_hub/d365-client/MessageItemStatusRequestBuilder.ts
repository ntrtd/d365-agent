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
import { MessageItemStatus } from './MessageItemStatus';

/**
 * Request builder class for operations supported on the {@link MessageItemStatus} entity.
 */
export class MessageItemStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageItemStatus<T>, T> {
  /**
   * Returns a request builder for querying all `MessageItemStatus` entities.
   * @returns A request builder for creating requests to retrieve all `MessageItemStatus` entities.
   */
  getAll(): GetAllRequestBuilder<MessageItemStatus<T>, T> {
    return new GetAllRequestBuilder<MessageItemStatus<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MessageItemStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageItemStatus`.
   */
  create(
    entity: MessageItemStatus<T>
  ): CreateRequestBuilder<MessageItemStatus<T>, T> {
    return new CreateRequestBuilder<MessageItemStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessageItemStatus` entity based on its keys.
   * @param dataAreaId Key property. See {@link MessageItemStatus.dataAreaId}.
   * @param messageItemStatus Key property. See {@link MessageItemStatus.messageItemStatus}.
   * @returns A request builder for creating requests to retrieve one `MessageItemStatus` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    messageItemStatus: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageItemStatus<T>, T> {
    return new GetByKeyRequestBuilder<MessageItemStatus<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      MessageItemStatus: messageItemStatus
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MessageItemStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageItemStatus`.
   */
  update(
    entity: MessageItemStatus<T>
  ): UpdateRequestBuilder<MessageItemStatus<T>, T> {
    return new UpdateRequestBuilder<MessageItemStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageItemStatus`.
   * @param dataAreaId Key property. See {@link MessageItemStatus.dataAreaId}.
   * @param messageItemStatus Key property. See {@link MessageItemStatus.messageItemStatus}.
   * @returns A request builder for creating requests that delete an entity of type `MessageItemStatus`.
   */
  delete(
    dataAreaId: string,
    messageItemStatus: string
  ): DeleteRequestBuilder<MessageItemStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageItemStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageItemStatus` by taking the entity as a parameter.
   */
  delete(
    entity: MessageItemStatus<T>
  ): DeleteRequestBuilder<MessageItemStatus<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    messageItemStatus?: string
  ): DeleteRequestBuilder<MessageItemStatus<T>, T> {
    return new DeleteRequestBuilder<MessageItemStatus<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MessageItemStatus
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MessageItemStatus: messageItemStatus!
          }
    );
  }
}
