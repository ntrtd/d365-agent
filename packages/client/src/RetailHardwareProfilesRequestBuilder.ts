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
import { RetailHardwareProfiles } from './RetailHardwareProfiles';

/**
 * Request builder class for operations supported on the {@link RetailHardwareProfiles} entity.
 */
export class RetailHardwareProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailHardwareProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `RetailHardwareProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `RetailHardwareProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<RetailHardwareProfiles<T>, T> {
    return new GetAllRequestBuilder<RetailHardwareProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailHardwareProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailHardwareProfiles`.
   */
  create(
    entity: RetailHardwareProfiles<T>
  ): CreateRequestBuilder<RetailHardwareProfiles<T>, T> {
    return new CreateRequestBuilder<RetailHardwareProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailHardwareProfiles` entity based on its keys.
   * @param profileId Key property. See {@link RetailHardwareProfiles.profileId}.
   * @returns A request builder for creating requests to retrieve one `RetailHardwareProfiles` entity based on its keys.
   */
  getByKey(
    profileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailHardwareProfiles<T>, T> {
    return new GetByKeyRequestBuilder<RetailHardwareProfiles<T>, T>(
      this.entityApi,
      { ProfileId: profileId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailHardwareProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailHardwareProfiles`.
   */
  update(
    entity: RetailHardwareProfiles<T>
  ): UpdateRequestBuilder<RetailHardwareProfiles<T>, T> {
    return new UpdateRequestBuilder<RetailHardwareProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailHardwareProfiles`.
   * @param profileId Key property. See {@link RetailHardwareProfiles.profileId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailHardwareProfiles`.
   */
  delete(profileId: string): DeleteRequestBuilder<RetailHardwareProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailHardwareProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailHardwareProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: RetailHardwareProfiles<T>
  ): DeleteRequestBuilder<RetailHardwareProfiles<T>, T>;
  delete(
    profileIdOrEntity: any
  ): DeleteRequestBuilder<RetailHardwareProfiles<T>, T> {
    return new DeleteRequestBuilder<RetailHardwareProfiles<T>, T>(
      this.entityApi,
      profileIdOrEntity instanceof RetailHardwareProfiles
        ? profileIdOrEntity
        : { ProfileId: profileIdOrEntity! }
    );
  }
}
