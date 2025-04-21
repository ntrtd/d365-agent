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
import { SalesOrderLineDocumentAttachmentsV2 } from './SalesOrderLineDocumentAttachmentsV2';

/**
 * Request builder class for operations supported on the {@link SalesOrderLineDocumentAttachmentsV2} entity.
 */
export class SalesOrderLineDocumentAttachmentsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderLineDocumentAttachmentsV2<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderLineDocumentAttachmentsV2` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderLineDocumentAttachmentsV2` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderLineDocumentAttachmentsV2<T>, T> {
    return new GetAllRequestBuilder<SalesOrderLineDocumentAttachmentsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderLineDocumentAttachmentsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderLineDocumentAttachmentsV2`.
   */
  create(
    entity: SalesOrderLineDocumentAttachmentsV2<T>
  ): CreateRequestBuilder<SalesOrderLineDocumentAttachmentsV2<T>, T> {
    return new CreateRequestBuilder<SalesOrderLineDocumentAttachmentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderLineDocumentAttachmentsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderLineDocumentAttachmentsV2.dataAreaId}.
   * @param documentId Key property. See {@link SalesOrderLineDocumentAttachmentsV2.documentId}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderLineDocumentAttachmentsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<SalesOrderLineDocumentAttachmentsV2<T>, T> {
    return new GetByKeyRequestBuilder<
      SalesOrderLineDocumentAttachmentsV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentId: documentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderLineDocumentAttachmentsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderLineDocumentAttachmentsV2`.
   */
  update(
    entity: SalesOrderLineDocumentAttachmentsV2<T>
  ): UpdateRequestBuilder<SalesOrderLineDocumentAttachmentsV2<T>, T> {
    return new UpdateRequestBuilder<SalesOrderLineDocumentAttachmentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderLineDocumentAttachmentsV2`.
   * @param dataAreaId Key property. See {@link SalesOrderLineDocumentAttachmentsV2.dataAreaId}.
   * @param documentId Key property. See {@link SalesOrderLineDocumentAttachmentsV2.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderLineDocumentAttachmentsV2`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<SalesOrderLineDocumentAttachmentsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderLineDocumentAttachmentsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderLineDocumentAttachmentsV2` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderLineDocumentAttachmentsV2<T>
  ): DeleteRequestBuilder<SalesOrderLineDocumentAttachmentsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<SalesOrderLineDocumentAttachmentsV2<T>, T> {
    return new DeleteRequestBuilder<SalesOrderLineDocumentAttachmentsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderLineDocumentAttachmentsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
