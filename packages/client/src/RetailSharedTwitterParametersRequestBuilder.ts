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
import { RetailSharedTwitterParameters } from './RetailSharedTwitterParameters';

/**
 * Request builder class for operations supported on the {@link RetailSharedTwitterParameters} entity.
 */
export class RetailSharedTwitterParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailSharedTwitterParameters<T>, T> {
  /**
   * Returns a request builder for querying all `RetailSharedTwitterParameters` entities.
   * @returns A request builder for creating requests to retrieve all `RetailSharedTwitterParameters` entities.
   */
  getAll(): GetAllRequestBuilder<RetailSharedTwitterParameters<T>, T> {
    return new GetAllRequestBuilder<RetailSharedTwitterParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailSharedTwitterParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailSharedTwitterParameters`.
   */
  create(
    entity: RetailSharedTwitterParameters<T>
  ): CreateRequestBuilder<RetailSharedTwitterParameters<T>, T> {
    return new CreateRequestBuilder<RetailSharedTwitterParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailSharedTwitterParameters` entity based on its keys.
   * @param key Key property. See {@link RetailSharedTwitterParameters.key}.
   * @returns A request builder for creating requests to retrieve one `RetailSharedTwitterParameters` entity based on its keys.
   */
  getByKey(
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailSharedTwitterParameters<T>, T> {
    return new GetByKeyRequestBuilder<RetailSharedTwitterParameters<T>, T>(
      this.entityApi,
      { Key: key }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailSharedTwitterParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailSharedTwitterParameters`.
   */
  update(
    entity: RetailSharedTwitterParameters<T>
  ): UpdateRequestBuilder<RetailSharedTwitterParameters<T>, T> {
    return new UpdateRequestBuilder<RetailSharedTwitterParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailSharedTwitterParameters`.
   * @param key Key property. See {@link RetailSharedTwitterParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `RetailSharedTwitterParameters`.
   */
  delete(
    key: number
  ): DeleteRequestBuilder<RetailSharedTwitterParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailSharedTwitterParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailSharedTwitterParameters` by taking the entity as a parameter.
   */
  delete(
    entity: RetailSharedTwitterParameters<T>
  ): DeleteRequestBuilder<RetailSharedTwitterParameters<T>, T>;
  delete(
    keyOrEntity: any
  ): DeleteRequestBuilder<RetailSharedTwitterParameters<T>, T> {
    return new DeleteRequestBuilder<RetailSharedTwitterParameters<T>, T>(
      this.entityApi,
      keyOrEntity instanceof RetailSharedTwitterParameters
        ? keyOrEntity
        : { Key: keyOrEntity! }
    );
  }
}
