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
import { SalesOrderLineDocumentAttachments } from './SalesOrderLineDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link SalesOrderLineDocumentAttachments} entity.
 */
export class SalesOrderLineDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderLineDocumentAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderLineDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderLineDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderLineDocumentAttachments<T>, T> {
    return new GetAllRequestBuilder<SalesOrderLineDocumentAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderLineDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderLineDocumentAttachments`.
   */
  create(
    entity: SalesOrderLineDocumentAttachments<T>
  ): CreateRequestBuilder<SalesOrderLineDocumentAttachments<T>, T> {
    return new CreateRequestBuilder<SalesOrderLineDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderLineDocumentAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderLineDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link SalesOrderLineDocumentAttachments.documentId}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderLineDocumentAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<SalesOrderLineDocumentAttachments<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderLineDocumentAttachments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentId: documentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderLineDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderLineDocumentAttachments`.
   */
  update(
    entity: SalesOrderLineDocumentAttachments<T>
  ): UpdateRequestBuilder<SalesOrderLineDocumentAttachments<T>, T> {
    return new UpdateRequestBuilder<SalesOrderLineDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderLineDocumentAttachments`.
   * @param dataAreaId Key property. See {@link SalesOrderLineDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link SalesOrderLineDocumentAttachments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderLineDocumentAttachments`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<SalesOrderLineDocumentAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderLineDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderLineDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderLineDocumentAttachments<T>
  ): DeleteRequestBuilder<SalesOrderLineDocumentAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<SalesOrderLineDocumentAttachments<T>, T> {
    return new DeleteRequestBuilder<SalesOrderLineDocumentAttachments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderLineDocumentAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
