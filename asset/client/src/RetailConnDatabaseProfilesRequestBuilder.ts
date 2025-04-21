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
import { RetailConnDatabaseProfiles } from './RetailConnDatabaseProfiles';

/**
 * Request builder class for operations supported on the {@link RetailConnDatabaseProfiles} entity.
 */
export class RetailConnDatabaseProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailConnDatabaseProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `RetailConnDatabaseProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `RetailConnDatabaseProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<RetailConnDatabaseProfiles<T>, T> {
    return new GetAllRequestBuilder<RetailConnDatabaseProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailConnDatabaseProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailConnDatabaseProfiles`.
   */
  create(
    entity: RetailConnDatabaseProfiles<T>
  ): CreateRequestBuilder<RetailConnDatabaseProfiles<T>, T> {
    return new CreateRequestBuilder<RetailConnDatabaseProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailConnDatabaseProfiles` entity based on its keys.
   * @param name Key property. See {@link RetailConnDatabaseProfiles.name}.
   * @returns A request builder for creating requests to retrieve one `RetailConnDatabaseProfiles` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailConnDatabaseProfiles<T>, T> {
    return new GetByKeyRequestBuilder<RetailConnDatabaseProfiles<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailConnDatabaseProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailConnDatabaseProfiles`.
   */
  update(
    entity: RetailConnDatabaseProfiles<T>
  ): UpdateRequestBuilder<RetailConnDatabaseProfiles<T>, T> {
    return new UpdateRequestBuilder<RetailConnDatabaseProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailConnDatabaseProfiles`.
   * @param name Key property. See {@link RetailConnDatabaseProfiles.name}.
   * @returns A request builder for creating requests that delete an entity of type `RetailConnDatabaseProfiles`.
   */
  delete(name: string): DeleteRequestBuilder<RetailConnDatabaseProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailConnDatabaseProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailConnDatabaseProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: RetailConnDatabaseProfiles<T>
  ): DeleteRequestBuilder<RetailConnDatabaseProfiles<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<RetailConnDatabaseProfiles<T>, T> {
    return new DeleteRequestBuilder<RetailConnDatabaseProfiles<T>, T>(
      this.entityApi,
      nameOrEntity instanceof RetailConnDatabaseProfiles
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
