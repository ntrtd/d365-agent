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
import { SalesOrderHeaderDocumentAttachmentsV2 } from './SalesOrderHeaderDocumentAttachmentsV2';

/**
 * Request builder class for operations supported on the {@link SalesOrderHeaderDocumentAttachmentsV2} entity.
 */
export class SalesOrderHeaderDocumentAttachmentsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderHeaderDocumentAttachmentsV2<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderHeaderDocumentAttachmentsV2` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderHeaderDocumentAttachmentsV2` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderHeaderDocumentAttachmentsV2<T>, T> {
    return new GetAllRequestBuilder<
      SalesOrderHeaderDocumentAttachmentsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesOrderHeaderDocumentAttachmentsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderHeaderDocumentAttachmentsV2`.
   */
  create(
    entity: SalesOrderHeaderDocumentAttachmentsV2<T>
  ): CreateRequestBuilder<SalesOrderHeaderDocumentAttachmentsV2<T>, T> {
    return new CreateRequestBuilder<
      SalesOrderHeaderDocumentAttachmentsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderHeaderDocumentAttachmentsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderHeaderDocumentAttachmentsV2.dataAreaId}.
   * @param documentId Key property. See {@link SalesOrderHeaderDocumentAttachmentsV2.documentId}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderHeaderDocumentAttachmentsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<SalesOrderHeaderDocumentAttachmentsV2<T>, T> {
    return new GetByKeyRequestBuilder<
      SalesOrderHeaderDocumentAttachmentsV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentId: documentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderHeaderDocumentAttachmentsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderHeaderDocumentAttachmentsV2`.
   */
  update(
    entity: SalesOrderHeaderDocumentAttachmentsV2<T>
  ): UpdateRequestBuilder<SalesOrderHeaderDocumentAttachmentsV2<T>, T> {
    return new UpdateRequestBuilder<
      SalesOrderHeaderDocumentAttachmentsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaderDocumentAttachmentsV2`.
   * @param dataAreaId Key property. See {@link SalesOrderHeaderDocumentAttachmentsV2.dataAreaId}.
   * @param documentId Key property. See {@link SalesOrderHeaderDocumentAttachmentsV2.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaderDocumentAttachmentsV2`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<SalesOrderHeaderDocumentAttachmentsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaderDocumentAttachmentsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaderDocumentAttachmentsV2` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderHeaderDocumentAttachmentsV2<T>
  ): DeleteRequestBuilder<SalesOrderHeaderDocumentAttachmentsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<SalesOrderHeaderDocumentAttachmentsV2<T>, T> {
    return new DeleteRequestBuilder<
      SalesOrderHeaderDocumentAttachmentsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderHeaderDocumentAttachmentsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
