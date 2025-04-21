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
import { ExpMobileAttachedDocuments } from './ExpMobileAttachedDocuments';

/**
 * Request builder class for operations supported on the {@link ExpMobileAttachedDocuments} entity.
 */
export class ExpMobileAttachedDocumentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileAttachedDocuments<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileAttachedDocuments` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileAttachedDocuments` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileAttachedDocuments<T>, T> {
    return new GetAllRequestBuilder<ExpMobileAttachedDocuments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpMobileAttachedDocuments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileAttachedDocuments`.
   */
  create(
    entity: ExpMobileAttachedDocuments<T>
  ): CreateRequestBuilder<ExpMobileAttachedDocuments<T>, T> {
    return new CreateRequestBuilder<ExpMobileAttachedDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileAttachedDocuments` entity based on its keys.
   * @param entRecId Key property. See {@link ExpMobileAttachedDocuments.entRecId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileAttachedDocuments` entity based on its keys.
   */
  getByKey(
    entRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExpMobileAttachedDocuments<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileAttachedDocuments<T>, T>(
      this.entityApi,
      { EntRecId: entRecId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileAttachedDocuments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileAttachedDocuments`.
   */
  update(
    entity: ExpMobileAttachedDocuments<T>
  ): UpdateRequestBuilder<ExpMobileAttachedDocuments<T>, T> {
    return new UpdateRequestBuilder<ExpMobileAttachedDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileAttachedDocuments`.
   * @param entRecId Key property. See {@link ExpMobileAttachedDocuments.entRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileAttachedDocuments`.
   */
  delete(
    entRecId: BigNumber
  ): DeleteRequestBuilder<ExpMobileAttachedDocuments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileAttachedDocuments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileAttachedDocuments` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileAttachedDocuments<T>
  ): DeleteRequestBuilder<ExpMobileAttachedDocuments<T>, T>;
  delete(
    entRecIdOrEntity: any
  ): DeleteRequestBuilder<ExpMobileAttachedDocuments<T>, T> {
    return new DeleteRequestBuilder<ExpMobileAttachedDocuments<T>, T>(
      this.entityApi,
      entRecIdOrEntity instanceof ExpMobileAttachedDocuments
        ? entRecIdOrEntity
        : { EntRecId: entRecIdOrEntity! }
    );
  }
}
