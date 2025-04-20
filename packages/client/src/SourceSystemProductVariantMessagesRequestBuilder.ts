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
import { SourceSystemProductVariantMessages } from './SourceSystemProductVariantMessages';

/**
 * Request builder class for operations supported on the {@link SourceSystemProductVariantMessages} entity.
 */
export class SourceSystemProductVariantMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SourceSystemProductVariantMessages<T>, T> {
  /**
   * Returns a request builder for querying all `SourceSystemProductVariantMessages` entities.
   * @returns A request builder for creating requests to retrieve all `SourceSystemProductVariantMessages` entities.
   */
  getAll(): GetAllRequestBuilder<SourceSystemProductVariantMessages<T>, T> {
    return new GetAllRequestBuilder<SourceSystemProductVariantMessages<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SourceSystemProductVariantMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SourceSystemProductVariantMessages`.
   */
  create(
    entity: SourceSystemProductVariantMessages<T>
  ): CreateRequestBuilder<SourceSystemProductVariantMessages<T>, T> {
    return new CreateRequestBuilder<SourceSystemProductVariantMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SourceSystemProductVariantMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link SourceSystemProductVariantMessages.dataAreaId}.
   * @param messageId Key property. See {@link SourceSystemProductVariantMessages.messageId}.
   * @param sourceSystemId Key property. See {@link SourceSystemProductVariantMessages.sourceSystemId}.
   * @returns A request builder for creating requests to retrieve one `SourceSystemProductVariantMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SourceSystemProductVariantMessages<T>, T> {
    return new GetByKeyRequestBuilder<SourceSystemProductVariantMessages<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MessageId: messageId,
        SourceSystemId: sourceSystemId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SourceSystemProductVariantMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SourceSystemProductVariantMessages`.
   */
  update(
    entity: SourceSystemProductVariantMessages<T>
  ): UpdateRequestBuilder<SourceSystemProductVariantMessages<T>, T> {
    return new UpdateRequestBuilder<SourceSystemProductVariantMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SourceSystemProductVariantMessages`.
   * @param dataAreaId Key property. See {@link SourceSystemProductVariantMessages.dataAreaId}.
   * @param messageId Key property. See {@link SourceSystemProductVariantMessages.messageId}.
   * @param sourceSystemId Key property. See {@link SourceSystemProductVariantMessages.sourceSystemId}.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemProductVariantMessages`.
   */
  delete(
    dataAreaId: string,
    messageId: string,
    sourceSystemId: string
  ): DeleteRequestBuilder<SourceSystemProductVariantMessages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SourceSystemProductVariantMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemProductVariantMessages` by taking the entity as a parameter.
   */
  delete(
    entity: SourceSystemProductVariantMessages<T>
  ): DeleteRequestBuilder<SourceSystemProductVariantMessages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    messageId?: string,
    sourceSystemId?: string
  ): DeleteRequestBuilder<SourceSystemProductVariantMessages<T>, T> {
    return new DeleteRequestBuilder<SourceSystemProductVariantMessages<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SourceSystemProductVariantMessages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MessageId: messageId!,
            SourceSystemId: sourceSystemId!
          }
    );
  }
}
