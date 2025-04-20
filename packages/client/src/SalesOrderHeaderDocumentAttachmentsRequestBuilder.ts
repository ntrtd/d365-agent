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
import { SalesOrderHeaderDocumentAttachments } from './SalesOrderHeaderDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link SalesOrderHeaderDocumentAttachments} entity.
 */
export class SalesOrderHeaderDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderHeaderDocumentAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderHeaderDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderHeaderDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderHeaderDocumentAttachments<T>, T> {
    return new GetAllRequestBuilder<SalesOrderHeaderDocumentAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderHeaderDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderHeaderDocumentAttachments`.
   */
  create(
    entity: SalesOrderHeaderDocumentAttachments<T>
  ): CreateRequestBuilder<SalesOrderHeaderDocumentAttachments<T>, T> {
    return new CreateRequestBuilder<SalesOrderHeaderDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderHeaderDocumentAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderHeaderDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link SalesOrderHeaderDocumentAttachments.documentId}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderHeaderDocumentAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<SalesOrderHeaderDocumentAttachments<T>, T> {
    return new GetByKeyRequestBuilder<
      SalesOrderHeaderDocumentAttachments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentId: documentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderHeaderDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderHeaderDocumentAttachments`.
   */
  update(
    entity: SalesOrderHeaderDocumentAttachments<T>
  ): UpdateRequestBuilder<SalesOrderHeaderDocumentAttachments<T>, T> {
    return new UpdateRequestBuilder<SalesOrderHeaderDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaderDocumentAttachments`.
   * @param dataAreaId Key property. See {@link SalesOrderHeaderDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link SalesOrderHeaderDocumentAttachments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaderDocumentAttachments`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<SalesOrderHeaderDocumentAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaderDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaderDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderHeaderDocumentAttachments<T>
  ): DeleteRequestBuilder<SalesOrderHeaderDocumentAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<SalesOrderHeaderDocumentAttachments<T>, T> {
    return new DeleteRequestBuilder<SalesOrderHeaderDocumentAttachments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderHeaderDocumentAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
