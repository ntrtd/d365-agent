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
import { LocationRoleCds } from './LocationRoleCds';

/**
 * Request builder class for operations supported on the {@link LocationRoleCds} entity.
 */
export class LocationRoleCdsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LocationRoleCds<T>, T> {
  /**
   * Returns a request builder for querying all `LocationRoleCds` entities.
   * @returns A request builder for creating requests to retrieve all `LocationRoleCds` entities.
   */
  getAll(): GetAllRequestBuilder<LocationRoleCds<T>, T> {
    return new GetAllRequestBuilder<LocationRoleCds<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LocationRoleCds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LocationRoleCds`.
   */
  create(
    entity: LocationRoleCds<T>
  ): CreateRequestBuilder<LocationRoleCds<T>, T> {
    return new CreateRequestBuilder<LocationRoleCds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LocationRoleCds` entity based on its keys.
   * @param purpose Key property. See {@link LocationRoleCds.purpose}.
   * @returns A request builder for creating requests to retrieve one `LocationRoleCds` entity based on its keys.
   */
  getByKey(
    purpose: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LocationRoleCds<T>, T> {
    return new GetByKeyRequestBuilder<LocationRoleCds<T>, T>(this.entityApi, {
      Purpose: purpose
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LocationRoleCds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LocationRoleCds`.
   */
  update(
    entity: LocationRoleCds<T>
  ): UpdateRequestBuilder<LocationRoleCds<T>, T> {
    return new UpdateRequestBuilder<LocationRoleCds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LocationRoleCds`.
   * @param purpose Key property. See {@link LocationRoleCds.purpose}.
   * @returns A request builder for creating requests that delete an entity of type `LocationRoleCds`.
   */
  delete(purpose: string): DeleteRequestBuilder<LocationRoleCds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LocationRoleCds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LocationRoleCds` by taking the entity as a parameter.
   */
  delete(
    entity: LocationRoleCds<T>
  ): DeleteRequestBuilder<LocationRoleCds<T>, T>;
  delete(purposeOrEntity: any): DeleteRequestBuilder<LocationRoleCds<T>, T> {
    return new DeleteRequestBuilder<LocationRoleCds<T>, T>(
      this.entityApi,
      purposeOrEntity instanceof LocationRoleCds
        ? purposeOrEntity
        : { Purpose: purposeOrEntity! }
    );
  }
}
