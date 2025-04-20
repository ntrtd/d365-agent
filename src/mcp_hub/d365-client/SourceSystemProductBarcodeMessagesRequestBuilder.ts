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
import { SourceSystemProductBarcodeMessages } from './SourceSystemProductBarcodeMessages';

/**
 * Request builder class for operations supported on the {@link SourceSystemProductBarcodeMessages} entity.
 */
export class SourceSystemProductBarcodeMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SourceSystemProductBarcodeMessages<T>, T> {
  /**
   * Returns a request builder for querying all `SourceSystemProductBarcodeMessages` entities.
   * @returns A request builder for creating requests to retrieve all `SourceSystemProductBarcodeMessages` entities.
   */
  getAll(): GetAllRequestBuilder<SourceSystemProductBarcodeMessages<T>, T> {
    return new GetAllRequestBuilder<SourceSystemProductBarcodeMessages<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SourceSystemProductBarcodeMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SourceSystemProductBarcodeMessages`.
   */
  create(
    entity: SourceSystemProductBarcodeMessages<T>
  ): CreateRequestBuilder<SourceSystemProductBarcodeMessages<T>, T> {
    return new CreateRequestBuilder<SourceSystemProductBarcodeMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SourceSystemProductBarcodeMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link SourceSystemProductBarcodeMessages.dataAreaId}.
   * @param messageId Key property. See {@link SourceSystemProductBarcodeMessages.messageId}.
   * @param sourceSystemId Key property. See {@link SourceSystemProductBarcodeMessages.sourceSystemId}.
   * @returns A request builder for creating requests to retrieve one `SourceSystemProductBarcodeMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SourceSystemProductBarcodeMessages<T>, T> {
    return new GetByKeyRequestBuilder<SourceSystemProductBarcodeMessages<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MessageId: messageId,
        SourceSystemId: sourceSystemId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SourceSystemProductBarcodeMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SourceSystemProductBarcodeMessages`.
   */
  update(
    entity: SourceSystemProductBarcodeMessages<T>
  ): UpdateRequestBuilder<SourceSystemProductBarcodeMessages<T>, T> {
    return new UpdateRequestBuilder<SourceSystemProductBarcodeMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SourceSystemProductBarcodeMessages`.
   * @param dataAreaId Key property. See {@link SourceSystemProductBarcodeMessages.dataAreaId}.
   * @param messageId Key property. See {@link SourceSystemProductBarcodeMessages.messageId}.
   * @param sourceSystemId Key property. See {@link SourceSystemProductBarcodeMessages.sourceSystemId}.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemProductBarcodeMessages`.
   */
  delete(
    dataAreaId: string,
    messageId: string,
    sourceSystemId: string
  ): DeleteRequestBuilder<SourceSystemProductBarcodeMessages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SourceSystemProductBarcodeMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemProductBarcodeMessages` by taking the entity as a parameter.
   */
  delete(
    entity: SourceSystemProductBarcodeMessages<T>
  ): DeleteRequestBuilder<SourceSystemProductBarcodeMessages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    messageId?: string,
    sourceSystemId?: string
  ): DeleteRequestBuilder<SourceSystemProductBarcodeMessages<T>, T> {
    return new DeleteRequestBuilder<SourceSystemProductBarcodeMessages<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SourceSystemProductBarcodeMessages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MessageId: messageId!,
            SourceSystemId: sourceSystemId!
          }
    );
  }
}
