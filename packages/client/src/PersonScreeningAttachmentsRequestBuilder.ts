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
import { PersonScreeningAttachments } from './PersonScreeningAttachments';

/**
 * Request builder class for operations supported on the {@link PersonScreeningAttachments} entity.
 */
export class PersonScreeningAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonScreeningAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `PersonScreeningAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `PersonScreeningAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<PersonScreeningAttachments<T>, T> {
    return new GetAllRequestBuilder<PersonScreeningAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PersonScreeningAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonScreeningAttachments`.
   */
  create(
    entity: PersonScreeningAttachments<T>
  ): CreateRequestBuilder<PersonScreeningAttachments<T>, T> {
    return new CreateRequestBuilder<PersonScreeningAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonScreeningAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link PersonScreeningAttachments.dataAreaId}.
   * @param documentId Key property. See {@link PersonScreeningAttachments.documentId}.
   * @returns A request builder for creating requests to retrieve one `PersonScreeningAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<PersonScreeningAttachments<T>, T> {
    return new GetByKeyRequestBuilder<PersonScreeningAttachments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentId: documentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonScreeningAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonScreeningAttachments`.
   */
  update(
    entity: PersonScreeningAttachments<T>
  ): UpdateRequestBuilder<PersonScreeningAttachments<T>, T> {
    return new UpdateRequestBuilder<PersonScreeningAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonScreeningAttachments`.
   * @param dataAreaId Key property. See {@link PersonScreeningAttachments.dataAreaId}.
   * @param documentId Key property. See {@link PersonScreeningAttachments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `PersonScreeningAttachments`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<PersonScreeningAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonScreeningAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonScreeningAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: PersonScreeningAttachments<T>
  ): DeleteRequestBuilder<PersonScreeningAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<PersonScreeningAttachments<T>, T> {
    return new DeleteRequestBuilder<PersonScreeningAttachments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PersonScreeningAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
