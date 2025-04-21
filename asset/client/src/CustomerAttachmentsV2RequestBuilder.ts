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
import { CustomerAttachmentsV2 } from './CustomerAttachmentsV2';

/**
 * Request builder class for operations supported on the {@link CustomerAttachmentsV2} entity.
 */
export class CustomerAttachmentsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerAttachmentsV2<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerAttachmentsV2` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerAttachmentsV2` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerAttachmentsV2<T>, T> {
    return new GetAllRequestBuilder<CustomerAttachmentsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerAttachmentsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerAttachmentsV2`.
   */
  create(
    entity: CustomerAttachmentsV2<T>
  ): CreateRequestBuilder<CustomerAttachmentsV2<T>, T> {
    return new CreateRequestBuilder<CustomerAttachmentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerAttachmentsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerAttachmentsV2.dataAreaId}.
   * @param documentId Key property. See {@link CustomerAttachmentsV2.documentId}.
   * @returns A request builder for creating requests to retrieve one `CustomerAttachmentsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<CustomerAttachmentsV2<T>, T> {
    return new GetByKeyRequestBuilder<CustomerAttachmentsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentId: documentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerAttachmentsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerAttachmentsV2`.
   */
  update(
    entity: CustomerAttachmentsV2<T>
  ): UpdateRequestBuilder<CustomerAttachmentsV2<T>, T> {
    return new UpdateRequestBuilder<CustomerAttachmentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerAttachmentsV2`.
   * @param dataAreaId Key property. See {@link CustomerAttachmentsV2.dataAreaId}.
   * @param documentId Key property. See {@link CustomerAttachmentsV2.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerAttachmentsV2`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<CustomerAttachmentsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerAttachmentsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerAttachmentsV2` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerAttachmentsV2<T>
  ): DeleteRequestBuilder<CustomerAttachmentsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<CustomerAttachmentsV2<T>, T> {
    return new DeleteRequestBuilder<CustomerAttachmentsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerAttachmentsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
