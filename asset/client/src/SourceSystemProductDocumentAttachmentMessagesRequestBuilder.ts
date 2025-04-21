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
import { SourceSystemProductDocumentAttachmentMessages } from './SourceSystemProductDocumentAttachmentMessages';

/**
 * Request builder class for operations supported on the {@link SourceSystemProductDocumentAttachmentMessages} entity.
 */
export class SourceSystemProductDocumentAttachmentMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SourceSystemProductDocumentAttachmentMessages<T>, T> {
  /**
   * Returns a request builder for querying all `SourceSystemProductDocumentAttachmentMessages` entities.
   * @returns A request builder for creating requests to retrieve all `SourceSystemProductDocumentAttachmentMessages` entities.
   */
  getAll(): GetAllRequestBuilder<
    SourceSystemProductDocumentAttachmentMessages<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SourceSystemProductDocumentAttachmentMessages<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SourceSystemProductDocumentAttachmentMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SourceSystemProductDocumentAttachmentMessages`.
   */
  create(
    entity: SourceSystemProductDocumentAttachmentMessages<T>
  ): CreateRequestBuilder<SourceSystemProductDocumentAttachmentMessages<T>, T> {
    return new CreateRequestBuilder<
      SourceSystemProductDocumentAttachmentMessages<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SourceSystemProductDocumentAttachmentMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link SourceSystemProductDocumentAttachmentMessages.dataAreaId}.
   * @param messageId Key property. See {@link SourceSystemProductDocumentAttachmentMessages.messageId}.
   * @param sourceSystemId Key property. See {@link SourceSystemProductDocumentAttachmentMessages.sourceSystemId}.
   * @returns A request builder for creating requests to retrieve one `SourceSystemProductDocumentAttachmentMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    SourceSystemProductDocumentAttachmentMessages<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      SourceSystemProductDocumentAttachmentMessages<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MessageId: messageId,
      SourceSystemId: sourceSystemId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SourceSystemProductDocumentAttachmentMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SourceSystemProductDocumentAttachmentMessages`.
   */
  update(
    entity: SourceSystemProductDocumentAttachmentMessages<T>
  ): UpdateRequestBuilder<SourceSystemProductDocumentAttachmentMessages<T>, T> {
    return new UpdateRequestBuilder<
      SourceSystemProductDocumentAttachmentMessages<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SourceSystemProductDocumentAttachmentMessages`.
   * @param dataAreaId Key property. See {@link SourceSystemProductDocumentAttachmentMessages.dataAreaId}.
   * @param messageId Key property. See {@link SourceSystemProductDocumentAttachmentMessages.messageId}.
   * @param sourceSystemId Key property. See {@link SourceSystemProductDocumentAttachmentMessages.sourceSystemId}.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemProductDocumentAttachmentMessages`.
   */
  delete(
    dataAreaId: string,
    messageId: string,
    sourceSystemId: string
  ): DeleteRequestBuilder<SourceSystemProductDocumentAttachmentMessages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SourceSystemProductDocumentAttachmentMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemProductDocumentAttachmentMessages` by taking the entity as a parameter.
   */
  delete(
    entity: SourceSystemProductDocumentAttachmentMessages<T>
  ): DeleteRequestBuilder<SourceSystemProductDocumentAttachmentMessages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    messageId?: string,
    sourceSystemId?: string
  ): DeleteRequestBuilder<SourceSystemProductDocumentAttachmentMessages<T>, T> {
    return new DeleteRequestBuilder<
      SourceSystemProductDocumentAttachmentMessages<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      SourceSystemProductDocumentAttachmentMessages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MessageId: messageId!,
            SourceSystemId: sourceSystemId!
          }
    );
  }
}
