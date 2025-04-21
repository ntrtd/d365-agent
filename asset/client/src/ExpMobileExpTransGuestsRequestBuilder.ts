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
import { ExpMobileExpTransGuests } from './ExpMobileExpTransGuests';

/**
 * Request builder class for operations supported on the {@link ExpMobileExpTransGuests} entity.
 */
export class ExpMobileExpTransGuestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileExpTransGuests<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileExpTransGuests` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileExpTransGuests` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileExpTransGuests<T>, T> {
    return new GetAllRequestBuilder<ExpMobileExpTransGuests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpMobileExpTransGuests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileExpTransGuests`.
   */
  create(
    entity: ExpMobileExpTransGuests<T>
  ): CreateRequestBuilder<ExpMobileExpTransGuests<T>, T> {
    return new CreateRequestBuilder<ExpMobileExpTransGuests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileExpTransGuests` entity based on its keys.
   * @param entRecId Key property. See {@link ExpMobileExpTransGuests.entRecId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileExpTransGuests` entity based on its keys.
   */
  getByKey(
    entRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExpMobileExpTransGuests<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileExpTransGuests<T>, T>(
      this.entityApi,
      { EntRecId: entRecId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileExpTransGuests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileExpTransGuests`.
   */
  update(
    entity: ExpMobileExpTransGuests<T>
  ): UpdateRequestBuilder<ExpMobileExpTransGuests<T>, T> {
    return new UpdateRequestBuilder<ExpMobileExpTransGuests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileExpTransGuests`.
   * @param entRecId Key property. See {@link ExpMobileExpTransGuests.entRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileExpTransGuests`.
   */
  delete(
    entRecId: BigNumber
  ): DeleteRequestBuilder<ExpMobileExpTransGuests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileExpTransGuests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileExpTransGuests` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileExpTransGuests<T>
  ): DeleteRequestBuilder<ExpMobileExpTransGuests<T>, T>;
  delete(
    entRecIdOrEntity: any
  ): DeleteRequestBuilder<ExpMobileExpTransGuests<T>, T> {
    return new DeleteRequestBuilder<ExpMobileExpTransGuests<T>, T>(
      this.entityApi,
      entRecIdOrEntity instanceof ExpMobileExpTransGuests
        ? entRecIdOrEntity
        : { EntRecId: entRecIdOrEntity! }
    );
  }
}
