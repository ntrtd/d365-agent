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
import { SourceSystemProductMessages } from './SourceSystemProductMessages';

/**
 * Request builder class for operations supported on the {@link SourceSystemProductMessages} entity.
 */
export class SourceSystemProductMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SourceSystemProductMessages<T>, T> {
  /**
   * Returns a request builder for querying all `SourceSystemProductMessages` entities.
   * @returns A request builder for creating requests to retrieve all `SourceSystemProductMessages` entities.
   */
  getAll(): GetAllRequestBuilder<SourceSystemProductMessages<T>, T> {
    return new GetAllRequestBuilder<SourceSystemProductMessages<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SourceSystemProductMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SourceSystemProductMessages`.
   */
  create(
    entity: SourceSystemProductMessages<T>
  ): CreateRequestBuilder<SourceSystemProductMessages<T>, T> {
    return new CreateRequestBuilder<SourceSystemProductMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SourceSystemProductMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link SourceSystemProductMessages.dataAreaId}.
   * @param messageId Key property. See {@link SourceSystemProductMessages.messageId}.
   * @param sourceSystemId Key property. See {@link SourceSystemProductMessages.sourceSystemId}.
   * @returns A request builder for creating requests to retrieve one `SourceSystemProductMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SourceSystemProductMessages<T>, T> {
    return new GetByKeyRequestBuilder<SourceSystemProductMessages<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MessageId: messageId,
        SourceSystemId: sourceSystemId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SourceSystemProductMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SourceSystemProductMessages`.
   */
  update(
    entity: SourceSystemProductMessages<T>
  ): UpdateRequestBuilder<SourceSystemProductMessages<T>, T> {
    return new UpdateRequestBuilder<SourceSystemProductMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SourceSystemProductMessages`.
   * @param dataAreaId Key property. See {@link SourceSystemProductMessages.dataAreaId}.
   * @param messageId Key property. See {@link SourceSystemProductMessages.messageId}.
   * @param sourceSystemId Key property. See {@link SourceSystemProductMessages.sourceSystemId}.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemProductMessages`.
   */
  delete(
    dataAreaId: string,
    messageId: string,
    sourceSystemId: string
  ): DeleteRequestBuilder<SourceSystemProductMessages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SourceSystemProductMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemProductMessages` by taking the entity as a parameter.
   */
  delete(
    entity: SourceSystemProductMessages<T>
  ): DeleteRequestBuilder<SourceSystemProductMessages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    messageId?: string,
    sourceSystemId?: string
  ): DeleteRequestBuilder<SourceSystemProductMessages<T>, T> {
    return new DeleteRequestBuilder<SourceSystemProductMessages<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SourceSystemProductMessages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MessageId: messageId!,
            SourceSystemId: sourceSystemId!
          }
    );
  }
}
