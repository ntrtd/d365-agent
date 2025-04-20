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
import { RetailCdxFileStorageProviders } from './RetailCdxFileStorageProviders';

/**
 * Request builder class for operations supported on the {@link RetailCdxFileStorageProviders} entity.
 */
export class RetailCdxFileStorageProvidersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCdxFileStorageProviders<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCdxFileStorageProviders` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCdxFileStorageProviders` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCdxFileStorageProviders<T>, T> {
    return new GetAllRequestBuilder<RetailCdxFileStorageProviders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailCdxFileStorageProviders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCdxFileStorageProviders`.
   */
  create(
    entity: RetailCdxFileStorageProviders<T>
  ): CreateRequestBuilder<RetailCdxFileStorageProviders<T>, T> {
    return new CreateRequestBuilder<RetailCdxFileStorageProviders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCdxFileStorageProviders` entity based on its keys.
   * @param name Key property. See {@link RetailCdxFileStorageProviders.name}.
   * @returns A request builder for creating requests to retrieve one `RetailCdxFileStorageProviders` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailCdxFileStorageProviders<T>, T> {
    return new GetByKeyRequestBuilder<RetailCdxFileStorageProviders<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCdxFileStorageProviders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCdxFileStorageProviders`.
   */
  update(
    entity: RetailCdxFileStorageProviders<T>
  ): UpdateRequestBuilder<RetailCdxFileStorageProviders<T>, T> {
    return new UpdateRequestBuilder<RetailCdxFileStorageProviders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCdxFileStorageProviders`.
   * @param name Key property. See {@link RetailCdxFileStorageProviders.name}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCdxFileStorageProviders`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<RetailCdxFileStorageProviders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCdxFileStorageProviders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCdxFileStorageProviders` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCdxFileStorageProviders<T>
  ): DeleteRequestBuilder<RetailCdxFileStorageProviders<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<RetailCdxFileStorageProviders<T>, T> {
    return new DeleteRequestBuilder<RetailCdxFileStorageProviders<T>, T>(
      this.entityApi,
      nameOrEntity instanceof RetailCdxFileStorageProviders
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
