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
import { ReleasedProductDocumentAttachments } from './ReleasedProductDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link ReleasedProductDocumentAttachments} entity.
 */
export class ReleasedProductDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedProductDocumentAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedProductDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedProductDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedProductDocumentAttachments<T>, T> {
    return new GetAllRequestBuilder<ReleasedProductDocumentAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReleasedProductDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedProductDocumentAttachments`.
   */
  create(
    entity: ReleasedProductDocumentAttachments<T>
  ): CreateRequestBuilder<ReleasedProductDocumentAttachments<T>, T> {
    return new CreateRequestBuilder<ReleasedProductDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReleasedProductDocumentAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedProductDocumentAttachments.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedProductDocumentAttachments.itemNumber}.
   * @param documentAttachmentTypeCode Key property. See {@link ReleasedProductDocumentAttachments.documentAttachmentTypeCode}.
   * @param attachmentDescription Key property. See {@link ReleasedProductDocumentAttachments.attachmentDescription}.
   * @param attachedDateTime Key property. See {@link ReleasedProductDocumentAttachments.attachedDateTime}.
   * @returns A request builder for creating requests to retrieve one `ReleasedProductDocumentAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    documentAttachmentTypeCode: DeserializedType<T, 'Edm.String'>,
    attachmentDescription: DeserializedType<T, 'Edm.String'>,
    attachedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ReleasedProductDocumentAttachments<T>, T> {
    return new GetByKeyRequestBuilder<ReleasedProductDocumentAttachments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        DocumentAttachmentTypeCode: documentAttachmentTypeCode,
        AttachmentDescription: attachmentDescription,
        AttachedDateTime: attachedDateTime
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedProductDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedProductDocumentAttachments`.
   */
  update(
    entity: ReleasedProductDocumentAttachments<T>
  ): UpdateRequestBuilder<ReleasedProductDocumentAttachments<T>, T> {
    return new UpdateRequestBuilder<ReleasedProductDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductDocumentAttachments`.
   * @param dataAreaId Key property. See {@link ReleasedProductDocumentAttachments.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedProductDocumentAttachments.itemNumber}.
   * @param documentAttachmentTypeCode Key property. See {@link ReleasedProductDocumentAttachments.documentAttachmentTypeCode}.
   * @param attachmentDescription Key property. See {@link ReleasedProductDocumentAttachments.attachmentDescription}.
   * @param attachedDateTime Key property. See {@link ReleasedProductDocumentAttachments.attachedDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductDocumentAttachments`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    documentAttachmentTypeCode: string,
    attachmentDescription: string,
    attachedDateTime: Moment
  ): DeleteRequestBuilder<ReleasedProductDocumentAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedProductDocumentAttachments<T>
  ): DeleteRequestBuilder<ReleasedProductDocumentAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    documentAttachmentTypeCode?: string,
    attachmentDescription?: string,
    attachedDateTime?: Moment
  ): DeleteRequestBuilder<ReleasedProductDocumentAttachments<T>, T> {
    return new DeleteRequestBuilder<ReleasedProductDocumentAttachments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedProductDocumentAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            DocumentAttachmentTypeCode: documentAttachmentTypeCode!,
            AttachmentDescription: attachmentDescription!,
            AttachedDateTime: attachedDateTime!
          }
    );
  }
}
