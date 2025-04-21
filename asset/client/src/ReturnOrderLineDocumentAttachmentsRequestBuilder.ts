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
import { ReturnOrderLineDocumentAttachments } from './ReturnOrderLineDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link ReturnOrderLineDocumentAttachments} entity.
 */
export class ReturnOrderLineDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnOrderLineDocumentAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnOrderLineDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnOrderLineDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnOrderLineDocumentAttachments<T>, T> {
    return new GetAllRequestBuilder<ReturnOrderLineDocumentAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReturnOrderLineDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnOrderLineDocumentAttachments`.
   */
  create(
    entity: ReturnOrderLineDocumentAttachments<T>
  ): CreateRequestBuilder<ReturnOrderLineDocumentAttachments<T>, T> {
    return new CreateRequestBuilder<ReturnOrderLineDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnOrderLineDocumentAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnOrderLineDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link ReturnOrderLineDocumentAttachments.documentId}.
   * @returns A request builder for creating requests to retrieve one `ReturnOrderLineDocumentAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<ReturnOrderLineDocumentAttachments<T>, T> {
    return new GetByKeyRequestBuilder<ReturnOrderLineDocumentAttachments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentId: documentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnOrderLineDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnOrderLineDocumentAttachments`.
   */
  update(
    entity: ReturnOrderLineDocumentAttachments<T>
  ): UpdateRequestBuilder<ReturnOrderLineDocumentAttachments<T>, T> {
    return new UpdateRequestBuilder<ReturnOrderLineDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnOrderLineDocumentAttachments`.
   * @param dataAreaId Key property. See {@link ReturnOrderLineDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link ReturnOrderLineDocumentAttachments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnOrderLineDocumentAttachments`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<ReturnOrderLineDocumentAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnOrderLineDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnOrderLineDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: ReturnOrderLineDocumentAttachments<T>
  ): DeleteRequestBuilder<ReturnOrderLineDocumentAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<ReturnOrderLineDocumentAttachments<T>, T> {
    return new DeleteRequestBuilder<ReturnOrderLineDocumentAttachments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnOrderLineDocumentAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
