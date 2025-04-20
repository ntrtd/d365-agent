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
import { RetailOfflineProfiles } from './RetailOfflineProfiles';

/**
 * Request builder class for operations supported on the {@link RetailOfflineProfiles} entity.
 */
export class RetailOfflineProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailOfflineProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `RetailOfflineProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `RetailOfflineProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<RetailOfflineProfiles<T>, T> {
    return new GetAllRequestBuilder<RetailOfflineProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailOfflineProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailOfflineProfiles`.
   */
  create(
    entity: RetailOfflineProfiles<T>
  ): CreateRequestBuilder<RetailOfflineProfiles<T>, T> {
    return new CreateRequestBuilder<RetailOfflineProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailOfflineProfiles` entity based on its keys.
   * @param name Key property. See {@link RetailOfflineProfiles.name}.
   * @returns A request builder for creating requests to retrieve one `RetailOfflineProfiles` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailOfflineProfiles<T>, T> {
    return new GetByKeyRequestBuilder<RetailOfflineProfiles<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailOfflineProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailOfflineProfiles`.
   */
  update(
    entity: RetailOfflineProfiles<T>
  ): UpdateRequestBuilder<RetailOfflineProfiles<T>, T> {
    return new UpdateRequestBuilder<RetailOfflineProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailOfflineProfiles`.
   * @param name Key property. See {@link RetailOfflineProfiles.name}.
   * @returns A request builder for creating requests that delete an entity of type `RetailOfflineProfiles`.
   */
  delete(name: string): DeleteRequestBuilder<RetailOfflineProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailOfflineProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailOfflineProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: RetailOfflineProfiles<T>
  ): DeleteRequestBuilder<RetailOfflineProfiles<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<RetailOfflineProfiles<T>, T> {
    return new DeleteRequestBuilder<RetailOfflineProfiles<T>, T>(
      this.entityApi,
      nameOrEntity instanceof RetailOfflineProfiles
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
