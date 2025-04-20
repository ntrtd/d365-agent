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
import { ExpMobileTrvExpGuests } from './ExpMobileTrvExpGuests';

/**
 * Request builder class for operations supported on the {@link ExpMobileTrvExpGuests} entity.
 */
export class ExpMobileTrvExpGuestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileTrvExpGuests<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileTrvExpGuests` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileTrvExpGuests` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileTrvExpGuests<T>, T> {
    return new GetAllRequestBuilder<ExpMobileTrvExpGuests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpMobileTrvExpGuests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileTrvExpGuests`.
   */
  create(
    entity: ExpMobileTrvExpGuests<T>
  ): CreateRequestBuilder<ExpMobileTrvExpGuests<T>, T> {
    return new CreateRequestBuilder<ExpMobileTrvExpGuests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileTrvExpGuests` entity based on its keys.
   * @param entRecId Key property. See {@link ExpMobileTrvExpGuests.entRecId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileTrvExpGuests` entity based on its keys.
   */
  getByKey(
    entRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExpMobileTrvExpGuests<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileTrvExpGuests<T>, T>(
      this.entityApi,
      { EntRecId: entRecId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileTrvExpGuests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileTrvExpGuests`.
   */
  update(
    entity: ExpMobileTrvExpGuests<T>
  ): UpdateRequestBuilder<ExpMobileTrvExpGuests<T>, T> {
    return new UpdateRequestBuilder<ExpMobileTrvExpGuests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileTrvExpGuests`.
   * @param entRecId Key property. See {@link ExpMobileTrvExpGuests.entRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileTrvExpGuests`.
   */
  delete(
    entRecId: BigNumber
  ): DeleteRequestBuilder<ExpMobileTrvExpGuests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileTrvExpGuests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileTrvExpGuests` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileTrvExpGuests<T>
  ): DeleteRequestBuilder<ExpMobileTrvExpGuests<T>, T>;
  delete(
    entRecIdOrEntity: any
  ): DeleteRequestBuilder<ExpMobileTrvExpGuests<T>, T> {
    return new DeleteRequestBuilder<ExpMobileTrvExpGuests<T>, T>(
      this.entityApi,
      entRecIdOrEntity instanceof ExpMobileTrvExpGuests
        ? entRecIdOrEntity
        : { EntRecId: entRecIdOrEntity! }
    );
  }
}
