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
import { MssLeaveRequestAttachments } from './MssLeaveRequestAttachments';

/**
 * Request builder class for operations supported on the {@link MssLeaveRequestAttachments} entity.
 */
export class MssLeaveRequestAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MssLeaveRequestAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `MssLeaveRequestAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `MssLeaveRequestAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<MssLeaveRequestAttachments<T>, T> {
    return new GetAllRequestBuilder<MssLeaveRequestAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MssLeaveRequestAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MssLeaveRequestAttachments`.
   */
  create(
    entity: MssLeaveRequestAttachments<T>
  ): CreateRequestBuilder<MssLeaveRequestAttachments<T>, T> {
    return new CreateRequestBuilder<MssLeaveRequestAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MssLeaveRequestAttachments` entity based on its keys.
   * @param documentId Key property. See {@link MssLeaveRequestAttachments.documentId}.
   * @returns A request builder for creating requests to retrieve one `MssLeaveRequestAttachments` entity based on its keys.
   */
  getByKey(
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<MssLeaveRequestAttachments<T>, T> {
    return new GetByKeyRequestBuilder<MssLeaveRequestAttachments<T>, T>(
      this.entityApi,
      { DocumentId: documentId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MssLeaveRequestAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MssLeaveRequestAttachments`.
   */
  update(
    entity: MssLeaveRequestAttachments<T>
  ): UpdateRequestBuilder<MssLeaveRequestAttachments<T>, T> {
    return new UpdateRequestBuilder<MssLeaveRequestAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MssLeaveRequestAttachments`.
   * @param documentId Key property. See {@link MssLeaveRequestAttachments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `MssLeaveRequestAttachments`.
   */
  delete(
    documentId: string
  ): DeleteRequestBuilder<MssLeaveRequestAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MssLeaveRequestAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MssLeaveRequestAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: MssLeaveRequestAttachments<T>
  ): DeleteRequestBuilder<MssLeaveRequestAttachments<T>, T>;
  delete(
    documentIdOrEntity: any
  ): DeleteRequestBuilder<MssLeaveRequestAttachments<T>, T> {
    return new DeleteRequestBuilder<MssLeaveRequestAttachments<T>, T>(
      this.entityApi,
      documentIdOrEntity instanceof MssLeaveRequestAttachments
        ? documentIdOrEntity
        : { DocumentId: documentIdOrEntity! }
    );
  }
}
