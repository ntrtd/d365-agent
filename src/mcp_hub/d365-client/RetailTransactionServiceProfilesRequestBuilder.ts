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
import { RetailTransactionServiceProfiles } from './RetailTransactionServiceProfiles';

/**
 * Request builder class for operations supported on the {@link RetailTransactionServiceProfiles} entity.
 */
export class RetailTransactionServiceProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionServiceProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionServiceProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionServiceProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionServiceProfiles<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionServiceProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionServiceProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionServiceProfiles`.
   */
  create(
    entity: RetailTransactionServiceProfiles<T>
  ): CreateRequestBuilder<RetailTransactionServiceProfiles<T>, T> {
    return new CreateRequestBuilder<RetailTransactionServiceProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionServiceProfiles` entity based on its keys.
   * @param profileId Key property. See {@link RetailTransactionServiceProfiles.profileId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionServiceProfiles` entity based on its keys.
   */
  getByKey(
    profileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionServiceProfiles<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionServiceProfiles<T>, T>(
      this.entityApi,
      { ProfileId: profileId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionServiceProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionServiceProfiles`.
   */
  update(
    entity: RetailTransactionServiceProfiles<T>
  ): UpdateRequestBuilder<RetailTransactionServiceProfiles<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionServiceProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionServiceProfiles`.
   * @param profileId Key property. See {@link RetailTransactionServiceProfiles.profileId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionServiceProfiles`.
   */
  delete(
    profileId: string
  ): DeleteRequestBuilder<RetailTransactionServiceProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionServiceProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionServiceProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionServiceProfiles<T>
  ): DeleteRequestBuilder<RetailTransactionServiceProfiles<T>, T>;
  delete(
    profileIdOrEntity: any
  ): DeleteRequestBuilder<RetailTransactionServiceProfiles<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionServiceProfiles<T>, T>(
      this.entityApi,
      profileIdOrEntity instanceof RetailTransactionServiceProfiles
        ? profileIdOrEntity
        : { ProfileId: profileIdOrEntity! }
    );
  }
}
