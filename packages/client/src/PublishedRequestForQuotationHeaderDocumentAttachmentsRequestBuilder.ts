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
import { PublishedRequestForQuotationHeaderDocumentAttachments } from './PublishedRequestForQuotationHeaderDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link PublishedRequestForQuotationHeaderDocumentAttachments} entity.
 */
export class PublishedRequestForQuotationHeaderDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  PublishedRequestForQuotationHeaderDocumentAttachments<T>,
  T
> {
  /**
   * Returns a request builder for querying all `PublishedRequestForQuotationHeaderDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `PublishedRequestForQuotationHeaderDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<
    PublishedRequestForQuotationHeaderDocumentAttachments<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PublishedRequestForQuotationHeaderDocumentAttachments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PublishedRequestForQuotationHeaderDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PublishedRequestForQuotationHeaderDocumentAttachments`.
   */
  create(
    entity: PublishedRequestForQuotationHeaderDocumentAttachments<T>
  ): CreateRequestBuilder<
    PublishedRequestForQuotationHeaderDocumentAttachments<T>,
    T
  > {
    return new CreateRequestBuilder<
      PublishedRequestForQuotationHeaderDocumentAttachments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PublishedRequestForQuotationHeaderDocumentAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link PublishedRequestForQuotationHeaderDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link PublishedRequestForQuotationHeaderDocumentAttachments.documentId}.
   * @returns A request builder for creating requests to retrieve one `PublishedRequestForQuotationHeaderDocumentAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<
    PublishedRequestForQuotationHeaderDocumentAttachments<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      PublishedRequestForQuotationHeaderDocumentAttachments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentId: documentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PublishedRequestForQuotationHeaderDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PublishedRequestForQuotationHeaderDocumentAttachments`.
   */
  update(
    entity: PublishedRequestForQuotationHeaderDocumentAttachments<T>
  ): UpdateRequestBuilder<
    PublishedRequestForQuotationHeaderDocumentAttachments<T>,
    T
  > {
    return new UpdateRequestBuilder<
      PublishedRequestForQuotationHeaderDocumentAttachments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PublishedRequestForQuotationHeaderDocumentAttachments`.
   * @param dataAreaId Key property. See {@link PublishedRequestForQuotationHeaderDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link PublishedRequestForQuotationHeaderDocumentAttachments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `PublishedRequestForQuotationHeaderDocumentAttachments`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<
    PublishedRequestForQuotationHeaderDocumentAttachments<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `PublishedRequestForQuotationHeaderDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PublishedRequestForQuotationHeaderDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: PublishedRequestForQuotationHeaderDocumentAttachments<T>
  ): DeleteRequestBuilder<
    PublishedRequestForQuotationHeaderDocumentAttachments<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<
    PublishedRequestForQuotationHeaderDocumentAttachments<T>,
    T
  > {
    return new DeleteRequestBuilder<
      PublishedRequestForQuotationHeaderDocumentAttachments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      PublishedRequestForQuotationHeaderDocumentAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
