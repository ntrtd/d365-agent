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
import { LeaveRequestAttachment } from './LeaveRequestAttachment';

/**
 * Request builder class for operations supported on the {@link LeaveRequestAttachment} entity.
 */
export class LeaveRequestAttachmentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveRequestAttachment<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveRequestAttachment` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveRequestAttachment` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveRequestAttachment<T>, T> {
    return new GetAllRequestBuilder<LeaveRequestAttachment<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaveRequestAttachment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveRequestAttachment`.
   */
  create(
    entity: LeaveRequestAttachment<T>
  ): CreateRequestBuilder<LeaveRequestAttachment<T>, T> {
    return new CreateRequestBuilder<LeaveRequestAttachment<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveRequestAttachment` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveRequestAttachment.dataAreaId}.
   * @param documentId Key property. See {@link LeaveRequestAttachment.documentId}.
   * @returns A request builder for creating requests to retrieve one `LeaveRequestAttachment` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<LeaveRequestAttachment<T>, T> {
    return new GetByKeyRequestBuilder<LeaveRequestAttachment<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentId: documentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveRequestAttachment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveRequestAttachment`.
   */
  update(
    entity: LeaveRequestAttachment<T>
  ): UpdateRequestBuilder<LeaveRequestAttachment<T>, T> {
    return new UpdateRequestBuilder<LeaveRequestAttachment<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveRequestAttachment`.
   * @param dataAreaId Key property. See {@link LeaveRequestAttachment.dataAreaId}.
   * @param documentId Key property. See {@link LeaveRequestAttachment.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveRequestAttachment`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<LeaveRequestAttachment<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveRequestAttachment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveRequestAttachment` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveRequestAttachment<T>
  ): DeleteRequestBuilder<LeaveRequestAttachment<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<LeaveRequestAttachment<T>, T> {
    return new DeleteRequestBuilder<LeaveRequestAttachment<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveRequestAttachment
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
