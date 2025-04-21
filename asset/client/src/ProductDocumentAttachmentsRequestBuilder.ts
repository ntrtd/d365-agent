/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { ProductDocumentAttachments } from './ProductDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link ProductDocumentAttachments} entity.
 */
export class ProductDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductDocumentAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `ProductDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `ProductDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<ProductDocumentAttachments<T>, T> {
    return new GetAllRequestBuilder<ProductDocumentAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductDocumentAttachments`.
   */
  create(
    entity: ProductDocumentAttachments<T>
  ): CreateRequestBuilder<ProductDocumentAttachments<T>, T> {
    return new CreateRequestBuilder<ProductDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductDocumentAttachments` entity based on its keys.
   * @param productNumber Key property. See {@link ProductDocumentAttachments.productNumber}.
   * @param documentAttachmentTypeCode Key property. See {@link ProductDocumentAttachments.documentAttachmentTypeCode}.
   * @param attachmentDescription Key property. See {@link ProductDocumentAttachments.attachmentDescription}.
   * @param attachedDateTime Key property. See {@link ProductDocumentAttachments.attachedDateTime}.
   * @returns A request builder for creating requests to retrieve one `ProductDocumentAttachments` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>,
    documentAttachmentTypeCode: DeserializedType<T, 'Edm.String'>,
    attachmentDescription: DeserializedType<T, 'Edm.String'>,
    attachedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ProductDocumentAttachments<T>, T> {
    return new GetByKeyRequestBuilder<ProductDocumentAttachments<T>, T>(
      this.entityApi,
      {
        ProductNumber: productNumber,
        DocumentAttachmentTypeCode: documentAttachmentTypeCode,
        AttachmentDescription: attachmentDescription,
        AttachedDateTime: attachedDateTime
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductDocumentAttachments`.
   */
  update(
    entity: ProductDocumentAttachments<T>
  ): UpdateRequestBuilder<ProductDocumentAttachments<T>, T> {
    return new UpdateRequestBuilder<ProductDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductDocumentAttachments`.
   * @param productNumber Key property. See {@link ProductDocumentAttachments.productNumber}.
   * @param documentAttachmentTypeCode Key property. See {@link ProductDocumentAttachments.documentAttachmentTypeCode}.
   * @param attachmentDescription Key property. See {@link ProductDocumentAttachments.attachmentDescription}.
   * @param attachedDateTime Key property. See {@link ProductDocumentAttachments.attachedDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `ProductDocumentAttachments`.
   */
  delete(
    productNumber: string,
    documentAttachmentTypeCode: string,
    attachmentDescription: string,
    attachedDateTime: Moment
  ): DeleteRequestBuilder<ProductDocumentAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: ProductDocumentAttachments<T>
  ): DeleteRequestBuilder<ProductDocumentAttachments<T>, T>;
  delete(
    productNumberOrEntity: any,
    documentAttachmentTypeCode?: string,
    attachmentDescription?: string,
    attachedDateTime?: Moment
  ): DeleteRequestBuilder<ProductDocumentAttachments<T>, T> {
    return new DeleteRequestBuilder<ProductDocumentAttachments<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof ProductDocumentAttachments
        ? productNumberOrEntity
        : {
            ProductNumber: productNumberOrEntity!,
            DocumentAttachmentTypeCode: documentAttachmentTypeCode!,
            AttachmentDescription: attachmentDescription!,
            AttachedDateTime: attachedDateTime!
          }
    );
  }
}
