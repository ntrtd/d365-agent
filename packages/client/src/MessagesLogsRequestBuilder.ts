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
import { MessagesLogs } from './MessagesLogs';

/**
 * Request builder class for operations supported on the {@link MessagesLogs} entity.
 */
export class MessagesLogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessagesLogs<T>, T> {
  /**
   * Returns a request builder for querying all `MessagesLogs` entities.
   * @returns A request builder for creating requests to retrieve all `MessagesLogs` entities.
   */
  getAll(): GetAllRequestBuilder<MessagesLogs<T>, T> {
    return new GetAllRequestBuilder<MessagesLogs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MessagesLogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessagesLogs`.
   */
  create(entity: MessagesLogs<T>): CreateRequestBuilder<MessagesLogs<T>, T> {
    return new CreateRequestBuilder<MessagesLogs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MessagesLogs` entity based on its keys.
   * @param dataAreaId Key property. See {@link MessagesLogs.dataAreaId}.
   * @param messageId Key property. See {@link MessagesLogs.messageId}.
   * @param actionId Key property. See {@link MessagesLogs.actionId}.
   * @returns A request builder for creating requests to retrieve one `MessagesLogs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>,
    actionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessagesLogs<T>, T> {
    return new GetByKeyRequestBuilder<MessagesLogs<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      MessageId: messageId,
      ActionId: actionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MessagesLogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessagesLogs`.
   */
  update(entity: MessagesLogs<T>): UpdateRequestBuilder<MessagesLogs<T>, T> {
    return new UpdateRequestBuilder<MessagesLogs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MessagesLogs`.
   * @param dataAreaId Key property. See {@link MessagesLogs.dataAreaId}.
   * @param messageId Key property. See {@link MessagesLogs.messageId}.
   * @param actionId Key property. See {@link MessagesLogs.actionId}.
   * @returns A request builder for creating requests that delete an entity of type `MessagesLogs`.
   */
  delete(
    dataAreaId: string,
    messageId: string,
    actionId: string
  ): DeleteRequestBuilder<MessagesLogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessagesLogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessagesLogs` by taking the entity as a parameter.
   */
  delete(entity: MessagesLogs<T>): DeleteRequestBuilder<MessagesLogs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    messageId?: string,
    actionId?: string
  ): DeleteRequestBuilder<MessagesLogs<T>, T> {
    return new DeleteRequestBuilder<MessagesLogs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MessagesLogs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MessageId: messageId!,
            ActionId: actionId!
          }
    );
  }
}
