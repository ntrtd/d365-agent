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
import { EssLeaveRequestAttachments } from './EssLeaveRequestAttachments';

/**
 * Request builder class for operations supported on the {@link EssLeaveRequestAttachments} entity.
 */
export class EssLeaveRequestAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssLeaveRequestAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `EssLeaveRequestAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `EssLeaveRequestAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<EssLeaveRequestAttachments<T>, T> {
    return new GetAllRequestBuilder<EssLeaveRequestAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EssLeaveRequestAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssLeaveRequestAttachments`.
   */
  create(
    entity: EssLeaveRequestAttachments<T>
  ): CreateRequestBuilder<EssLeaveRequestAttachments<T>, T> {
    return new CreateRequestBuilder<EssLeaveRequestAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssLeaveRequestAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link EssLeaveRequestAttachments.dataAreaId}.
   * @param documentId Key property. See {@link EssLeaveRequestAttachments.documentId}.
   * @returns A request builder for creating requests to retrieve one `EssLeaveRequestAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<EssLeaveRequestAttachments<T>, T> {
    return new GetByKeyRequestBuilder<EssLeaveRequestAttachments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentId: documentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EssLeaveRequestAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssLeaveRequestAttachments`.
   */
  update(
    entity: EssLeaveRequestAttachments<T>
  ): UpdateRequestBuilder<EssLeaveRequestAttachments<T>, T> {
    return new UpdateRequestBuilder<EssLeaveRequestAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssLeaveRequestAttachments`.
   * @param dataAreaId Key property. See {@link EssLeaveRequestAttachments.dataAreaId}.
   * @param documentId Key property. See {@link EssLeaveRequestAttachments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveRequestAttachments`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<EssLeaveRequestAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssLeaveRequestAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveRequestAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: EssLeaveRequestAttachments<T>
  ): DeleteRequestBuilder<EssLeaveRequestAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<EssLeaveRequestAttachments<T>, T> {
    return new DeleteRequestBuilder<EssLeaveRequestAttachments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EssLeaveRequestAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
