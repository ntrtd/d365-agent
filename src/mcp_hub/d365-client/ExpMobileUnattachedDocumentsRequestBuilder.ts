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
import { ExpMobileUnattachedDocuments } from './ExpMobileUnattachedDocuments';

/**
 * Request builder class for operations supported on the {@link ExpMobileUnattachedDocuments} entity.
 */
export class ExpMobileUnattachedDocumentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileUnattachedDocuments<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileUnattachedDocuments` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileUnattachedDocuments` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileUnattachedDocuments<T>, T> {
    return new GetAllRequestBuilder<ExpMobileUnattachedDocuments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpMobileUnattachedDocuments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileUnattachedDocuments`.
   */
  create(
    entity: ExpMobileUnattachedDocuments<T>
  ): CreateRequestBuilder<ExpMobileUnattachedDocuments<T>, T> {
    return new CreateRequestBuilder<ExpMobileUnattachedDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileUnattachedDocuments` entity based on its keys.
   * @param entRecId Key property. See {@link ExpMobileUnattachedDocuments.entRecId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileUnattachedDocuments` entity based on its keys.
   */
  getByKey(
    entRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExpMobileUnattachedDocuments<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileUnattachedDocuments<T>, T>(
      this.entityApi,
      { EntRecId: entRecId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileUnattachedDocuments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileUnattachedDocuments`.
   */
  update(
    entity: ExpMobileUnattachedDocuments<T>
  ): UpdateRequestBuilder<ExpMobileUnattachedDocuments<T>, T> {
    return new UpdateRequestBuilder<ExpMobileUnattachedDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileUnattachedDocuments`.
   * @param entRecId Key property. See {@link ExpMobileUnattachedDocuments.entRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileUnattachedDocuments`.
   */
  delete(
    entRecId: BigNumber
  ): DeleteRequestBuilder<ExpMobileUnattachedDocuments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileUnattachedDocuments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileUnattachedDocuments` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileUnattachedDocuments<T>
  ): DeleteRequestBuilder<ExpMobileUnattachedDocuments<T>, T>;
  delete(
    entRecIdOrEntity: any
  ): DeleteRequestBuilder<ExpMobileUnattachedDocuments<T>, T> {
    return new DeleteRequestBuilder<ExpMobileUnattachedDocuments<T>, T>(
      this.entityApi,
      entRecIdOrEntity instanceof ExpMobileUnattachedDocuments
        ? entRecIdOrEntity
        : { EntRecId: entRecIdOrEntity! }
    );
  }
}
