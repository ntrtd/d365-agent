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
import { RetailStoreLocatorGroups } from './RetailStoreLocatorGroups';

/**
 * Request builder class for operations supported on the {@link RetailStoreLocatorGroups} entity.
 */
export class RetailStoreLocatorGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoreLocatorGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoreLocatorGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoreLocatorGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoreLocatorGroups<T>, T> {
    return new GetAllRequestBuilder<RetailStoreLocatorGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStoreLocatorGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoreLocatorGroups`.
   */
  create(
    entity: RetailStoreLocatorGroups<T>
  ): CreateRequestBuilder<RetailStoreLocatorGroups<T>, T> {
    return new CreateRequestBuilder<RetailStoreLocatorGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoreLocatorGroups` entity based on its keys.
   * @param name Key property. See {@link RetailStoreLocatorGroups.name}.
   * @returns A request builder for creating requests to retrieve one `RetailStoreLocatorGroups` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStoreLocatorGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoreLocatorGroups<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoreLocatorGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoreLocatorGroups`.
   */
  update(
    entity: RetailStoreLocatorGroups<T>
  ): UpdateRequestBuilder<RetailStoreLocatorGroups<T>, T> {
    return new UpdateRequestBuilder<RetailStoreLocatorGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoreLocatorGroups`.
   * @param name Key property. See {@link RetailStoreLocatorGroups.name}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreLocatorGroups`.
   */
  delete(name: string): DeleteRequestBuilder<RetailStoreLocatorGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoreLocatorGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreLocatorGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoreLocatorGroups<T>
  ): DeleteRequestBuilder<RetailStoreLocatorGroups<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<RetailStoreLocatorGroups<T>, T> {
    return new DeleteRequestBuilder<RetailStoreLocatorGroups<T>, T>(
      this.entityApi,
      nameOrEntity instanceof RetailStoreLocatorGroups
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
