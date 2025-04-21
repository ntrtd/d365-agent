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
import { CustomerAttachments } from './CustomerAttachments';

/**
 * Request builder class for operations supported on the {@link CustomerAttachments} entity.
 */
export class CustomerAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerAttachments<T>, T> {
    return new GetAllRequestBuilder<CustomerAttachments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerAttachments`.
   */
  create(
    entity: CustomerAttachments<T>
  ): CreateRequestBuilder<CustomerAttachments<T>, T> {
    return new CreateRequestBuilder<CustomerAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerAttachments.dataAreaId}.
   * @param documentId Key property. See {@link CustomerAttachments.documentId}.
   * @returns A request builder for creating requests to retrieve one `CustomerAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<CustomerAttachments<T>, T> {
    return new GetByKeyRequestBuilder<CustomerAttachments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentId: documentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerAttachments`.
   */
  update(
    entity: CustomerAttachments<T>
  ): UpdateRequestBuilder<CustomerAttachments<T>, T> {
    return new UpdateRequestBuilder<CustomerAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerAttachments`.
   * @param dataAreaId Key property. See {@link CustomerAttachments.dataAreaId}.
   * @param documentId Key property. See {@link CustomerAttachments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerAttachments`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<CustomerAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerAttachments<T>
  ): DeleteRequestBuilder<CustomerAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<CustomerAttachments<T>, T> {
    return new DeleteRequestBuilder<CustomerAttachments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
