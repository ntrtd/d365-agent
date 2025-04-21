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
import { ExpMobileUserDisplayInfoes } from './ExpMobileUserDisplayInfoes';

/**
 * Request builder class for operations supported on the {@link ExpMobileUserDisplayInfoes} entity.
 */
export class ExpMobileUserDisplayInfoesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileUserDisplayInfoes<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileUserDisplayInfoes` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileUserDisplayInfoes` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileUserDisplayInfoes<T>, T> {
    return new GetAllRequestBuilder<ExpMobileUserDisplayInfoes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpMobileUserDisplayInfoes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileUserDisplayInfoes`.
   */
  create(
    entity: ExpMobileUserDisplayInfoes<T>
  ): CreateRequestBuilder<ExpMobileUserDisplayInfoes<T>, T> {
    return new CreateRequestBuilder<ExpMobileUserDisplayInfoes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileUserDisplayInfoes` entity based on its keys.
   * @param dirPersonPartyNumber Key property. See {@link ExpMobileUserDisplayInfoes.dirPersonPartyNumber}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileUserDisplayInfoes` entity based on its keys.
   */
  getByKey(
    dirPersonPartyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpMobileUserDisplayInfoes<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileUserDisplayInfoes<T>, T>(
      this.entityApi,
      { DirPerson_PartyNumber: dirPersonPartyNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileUserDisplayInfoes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileUserDisplayInfoes`.
   */
  update(
    entity: ExpMobileUserDisplayInfoes<T>
  ): UpdateRequestBuilder<ExpMobileUserDisplayInfoes<T>, T> {
    return new UpdateRequestBuilder<ExpMobileUserDisplayInfoes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileUserDisplayInfoes`.
   * @param dirPersonPartyNumber Key property. See {@link ExpMobileUserDisplayInfoes.dirPersonPartyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileUserDisplayInfoes`.
   */
  delete(
    dirPersonPartyNumber: string
  ): DeleteRequestBuilder<ExpMobileUserDisplayInfoes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileUserDisplayInfoes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileUserDisplayInfoes` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileUserDisplayInfoes<T>
  ): DeleteRequestBuilder<ExpMobileUserDisplayInfoes<T>, T>;
  delete(
    dirPersonPartyNumberOrEntity: any
  ): DeleteRequestBuilder<ExpMobileUserDisplayInfoes<T>, T> {
    return new DeleteRequestBuilder<ExpMobileUserDisplayInfoes<T>, T>(
      this.entityApi,
      dirPersonPartyNumberOrEntity instanceof ExpMobileUserDisplayInfoes
        ? dirPersonPartyNumberOrEntity
        : { DirPerson_PartyNumber: dirPersonPartyNumberOrEntity! }
    );
  }
}
