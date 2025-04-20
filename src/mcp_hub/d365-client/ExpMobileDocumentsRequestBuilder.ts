/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ExpMobileDocuments } from './ExpMobileDocuments';

/**
 * Request builder class for operations supported on the {@link ExpMobileDocuments} entity.
 */
export class ExpMobileDocumentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileDocuments<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileDocuments` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileDocuments` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileDocuments<T>, T> {
    return new GetAllRequestBuilder<ExpMobileDocuments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpMobileDocuments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileDocuments`.
   */
  create(
    entity: ExpMobileDocuments<T>
  ): CreateRequestBuilder<ExpMobileDocuments<T>, T> {
    return new CreateRequestBuilder<ExpMobileDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileDocuments` entity based on its keys.
   * @param entRecId Key property. See {@link ExpMobileDocuments.entRecId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileDocuments` entity based on its keys.
   */
  getByKey(
    entRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExpMobileDocuments<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileDocuments<T>, T>(
      this.entityApi,
      { EntRecId: entRecId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileDocuments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileDocuments`.
   */
  update(
    entity: ExpMobileDocuments<T>
  ): UpdateRequestBuilder<ExpMobileDocuments<T>, T> {
    return new UpdateRequestBuilder<ExpMobileDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileDocuments`.
   * @param entRecId Key property. See {@link ExpMobileDocuments.entRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileDocuments`.
   */
  delete(entRecId: BigNumber): DeleteRequestBuilder<ExpMobileDocuments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileDocuments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileDocuments` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileDocuments<T>
  ): DeleteRequestBuilder<ExpMobileDocuments<T>, T>;
  delete(
    entRecIdOrEntity: any
  ): DeleteRequestBuilder<ExpMobileDocuments<T>, T> {
    return new DeleteRequestBuilder<ExpMobileDocuments<T>, T>(
      this.entityApi,
      entRecIdOrEntity instanceof ExpMobileDocuments
        ? entRecIdOrEntity
        : { EntRecId: entRecIdOrEntity! }
    );
  }
}
