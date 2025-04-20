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
import { PurchaseOrderHeaderDocumentAttachments } from './PurchaseOrderHeaderDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderHeaderDocumentAttachments} entity.
 */
export class PurchaseOrderHeaderDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderHeaderDocumentAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderHeaderDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderHeaderDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderHeaderDocumentAttachments<T>, T> {
    return new GetAllRequestBuilder<
      PurchaseOrderHeaderDocumentAttachments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderHeaderDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderHeaderDocumentAttachments`.
   */
  create(
    entity: PurchaseOrderHeaderDocumentAttachments<T>
  ): CreateRequestBuilder<PurchaseOrderHeaderDocumentAttachments<T>, T> {
    return new CreateRequestBuilder<
      PurchaseOrderHeaderDocumentAttachments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderHeaderDocumentAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderHeaderDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link PurchaseOrderHeaderDocumentAttachments.documentId}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderHeaderDocumentAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<PurchaseOrderHeaderDocumentAttachments<T>, T> {
    return new GetByKeyRequestBuilder<
      PurchaseOrderHeaderDocumentAttachments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentId: documentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderHeaderDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderHeaderDocumentAttachments`.
   */
  update(
    entity: PurchaseOrderHeaderDocumentAttachments<T>
  ): UpdateRequestBuilder<PurchaseOrderHeaderDocumentAttachments<T>, T> {
    return new UpdateRequestBuilder<
      PurchaseOrderHeaderDocumentAttachments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderHeaderDocumentAttachments`.
   * @param dataAreaId Key property. See {@link PurchaseOrderHeaderDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link PurchaseOrderHeaderDocumentAttachments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderHeaderDocumentAttachments`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<PurchaseOrderHeaderDocumentAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderHeaderDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderHeaderDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderHeaderDocumentAttachments<T>
  ): DeleteRequestBuilder<PurchaseOrderHeaderDocumentAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<PurchaseOrderHeaderDocumentAttachments<T>, T> {
    return new DeleteRequestBuilder<
      PurchaseOrderHeaderDocumentAttachments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderHeaderDocumentAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
