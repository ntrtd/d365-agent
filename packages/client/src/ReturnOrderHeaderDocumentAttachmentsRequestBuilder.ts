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
import { ReturnOrderHeaderDocumentAttachments } from './ReturnOrderHeaderDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link ReturnOrderHeaderDocumentAttachments} entity.
 */
export class ReturnOrderHeaderDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnOrderHeaderDocumentAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnOrderHeaderDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnOrderHeaderDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnOrderHeaderDocumentAttachments<T>, T> {
    return new GetAllRequestBuilder<ReturnOrderHeaderDocumentAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReturnOrderHeaderDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnOrderHeaderDocumentAttachments`.
   */
  create(
    entity: ReturnOrderHeaderDocumentAttachments<T>
  ): CreateRequestBuilder<ReturnOrderHeaderDocumentAttachments<T>, T> {
    return new CreateRequestBuilder<ReturnOrderHeaderDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnOrderHeaderDocumentAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnOrderHeaderDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link ReturnOrderHeaderDocumentAttachments.documentId}.
   * @returns A request builder for creating requests to retrieve one `ReturnOrderHeaderDocumentAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<ReturnOrderHeaderDocumentAttachments<T>, T> {
    return new GetByKeyRequestBuilder<
      ReturnOrderHeaderDocumentAttachments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentId: documentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnOrderHeaderDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnOrderHeaderDocumentAttachments`.
   */
  update(
    entity: ReturnOrderHeaderDocumentAttachments<T>
  ): UpdateRequestBuilder<ReturnOrderHeaderDocumentAttachments<T>, T> {
    return new UpdateRequestBuilder<ReturnOrderHeaderDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnOrderHeaderDocumentAttachments`.
   * @param dataAreaId Key property. See {@link ReturnOrderHeaderDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link ReturnOrderHeaderDocumentAttachments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnOrderHeaderDocumentAttachments`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<ReturnOrderHeaderDocumentAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnOrderHeaderDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnOrderHeaderDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: ReturnOrderHeaderDocumentAttachments<T>
  ): DeleteRequestBuilder<ReturnOrderHeaderDocumentAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<ReturnOrderHeaderDocumentAttachments<T>, T> {
    return new DeleteRequestBuilder<ReturnOrderHeaderDocumentAttachments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnOrderHeaderDocumentAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
