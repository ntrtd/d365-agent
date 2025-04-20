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
import { RetailVisualProfiles } from './RetailVisualProfiles';

/**
 * Request builder class for operations supported on the {@link RetailVisualProfiles} entity.
 */
export class RetailVisualProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailVisualProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `RetailVisualProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `RetailVisualProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<RetailVisualProfiles<T>, T> {
    return new GetAllRequestBuilder<RetailVisualProfiles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailVisualProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailVisualProfiles`.
   */
  create(
    entity: RetailVisualProfiles<T>
  ): CreateRequestBuilder<RetailVisualProfiles<T>, T> {
    return new CreateRequestBuilder<RetailVisualProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailVisualProfiles` entity based on its keys.
   * @param profileId Key property. See {@link RetailVisualProfiles.profileId}.
   * @returns A request builder for creating requests to retrieve one `RetailVisualProfiles` entity based on its keys.
   */
  getByKey(
    profileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailVisualProfiles<T>, T> {
    return new GetByKeyRequestBuilder<RetailVisualProfiles<T>, T>(
      this.entityApi,
      { ProfileId: profileId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailVisualProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailVisualProfiles`.
   */
  update(
    entity: RetailVisualProfiles<T>
  ): UpdateRequestBuilder<RetailVisualProfiles<T>, T> {
    return new UpdateRequestBuilder<RetailVisualProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailVisualProfiles`.
   * @param profileId Key property. See {@link RetailVisualProfiles.profileId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailVisualProfiles`.
   */
  delete(profileId: string): DeleteRequestBuilder<RetailVisualProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailVisualProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailVisualProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: RetailVisualProfiles<T>
  ): DeleteRequestBuilder<RetailVisualProfiles<T>, T>;
  delete(
    profileIdOrEntity: any
  ): DeleteRequestBuilder<RetailVisualProfiles<T>, T> {
    return new DeleteRequestBuilder<RetailVisualProfiles<T>, T>(
      this.entityApi,
      profileIdOrEntity instanceof RetailVisualProfiles
        ? profileIdOrEntity
        : { ProfileId: profileIdOrEntity! }
    );
  }
}
