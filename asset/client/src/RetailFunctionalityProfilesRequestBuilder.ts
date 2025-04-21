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
import { RetailFunctionalityProfiles } from './RetailFunctionalityProfiles';

/**
 * Request builder class for operations supported on the {@link RetailFunctionalityProfiles} entity.
 */
export class RetailFunctionalityProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailFunctionalityProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `RetailFunctionalityProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `RetailFunctionalityProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<RetailFunctionalityProfiles<T>, T> {
    return new GetAllRequestBuilder<RetailFunctionalityProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailFunctionalityProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailFunctionalityProfiles`.
   */
  create(
    entity: RetailFunctionalityProfiles<T>
  ): CreateRequestBuilder<RetailFunctionalityProfiles<T>, T> {
    return new CreateRequestBuilder<RetailFunctionalityProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailFunctionalityProfiles` entity based on its keys.
   * @param profileId Key property. See {@link RetailFunctionalityProfiles.profileId}.
   * @returns A request builder for creating requests to retrieve one `RetailFunctionalityProfiles` entity based on its keys.
   */
  getByKey(
    profileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailFunctionalityProfiles<T>, T> {
    return new GetByKeyRequestBuilder<RetailFunctionalityProfiles<T>, T>(
      this.entityApi,
      { profileId: profileId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailFunctionalityProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailFunctionalityProfiles`.
   */
  update(
    entity: RetailFunctionalityProfiles<T>
  ): UpdateRequestBuilder<RetailFunctionalityProfiles<T>, T> {
    return new UpdateRequestBuilder<RetailFunctionalityProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailFunctionalityProfiles`.
   * @param profileId Key property. See {@link RetailFunctionalityProfiles.profileId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailFunctionalityProfiles`.
   */
  delete(
    profileId: string
  ): DeleteRequestBuilder<RetailFunctionalityProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailFunctionalityProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailFunctionalityProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: RetailFunctionalityProfiles<T>
  ): DeleteRequestBuilder<RetailFunctionalityProfiles<T>, T>;
  delete(
    profileIdOrEntity: any
  ): DeleteRequestBuilder<RetailFunctionalityProfiles<T>, T> {
    return new DeleteRequestBuilder<RetailFunctionalityProfiles<T>, T>(
      this.entityApi,
      profileIdOrEntity instanceof RetailFunctionalityProfiles
        ? profileIdOrEntity
        : { profileId: profileIdOrEntity! }
    );
  }
}
