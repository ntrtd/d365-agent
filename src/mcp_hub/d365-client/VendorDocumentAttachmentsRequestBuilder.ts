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
import { VendorDocumentAttachments } from './VendorDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link VendorDocumentAttachments} entity.
 */
export class VendorDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorDocumentAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `VendorDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `VendorDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<VendorDocumentAttachments<T>, T> {
    return new GetAllRequestBuilder<VendorDocumentAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorDocumentAttachments`.
   */
  create(
    entity: VendorDocumentAttachments<T>
  ): CreateRequestBuilder<VendorDocumentAttachments<T>, T> {
    return new CreateRequestBuilder<VendorDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorDocumentAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link VendorDocumentAttachments.documentId}.
   * @returns A request builder for creating requests to retrieve one `VendorDocumentAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<VendorDocumentAttachments<T>, T> {
    return new GetByKeyRequestBuilder<VendorDocumentAttachments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentId: documentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorDocumentAttachments`.
   */
  update(
    entity: VendorDocumentAttachments<T>
  ): UpdateRequestBuilder<VendorDocumentAttachments<T>, T> {
    return new UpdateRequestBuilder<VendorDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorDocumentAttachments`.
   * @param dataAreaId Key property. See {@link VendorDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link VendorDocumentAttachments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorDocumentAttachments`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<VendorDocumentAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: VendorDocumentAttachments<T>
  ): DeleteRequestBuilder<VendorDocumentAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<VendorDocumentAttachments<T>, T> {
    return new DeleteRequestBuilder<VendorDocumentAttachments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorDocumentAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
