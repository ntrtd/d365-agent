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
import { RetailSharedBingParameters } from './RetailSharedBingParameters';

/**
 * Request builder class for operations supported on the {@link RetailSharedBingParameters} entity.
 */
export class RetailSharedBingParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailSharedBingParameters<T>, T> {
  /**
   * Returns a request builder for querying all `RetailSharedBingParameters` entities.
   * @returns A request builder for creating requests to retrieve all `RetailSharedBingParameters` entities.
   */
  getAll(): GetAllRequestBuilder<RetailSharedBingParameters<T>, T> {
    return new GetAllRequestBuilder<RetailSharedBingParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailSharedBingParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailSharedBingParameters`.
   */
  create(
    entity: RetailSharedBingParameters<T>
  ): CreateRequestBuilder<RetailSharedBingParameters<T>, T> {
    return new CreateRequestBuilder<RetailSharedBingParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailSharedBingParameters` entity based on its keys.
   * @param key Key property. See {@link RetailSharedBingParameters.key}.
   * @returns A request builder for creating requests to retrieve one `RetailSharedBingParameters` entity based on its keys.
   */
  getByKey(
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailSharedBingParameters<T>, T> {
    return new GetByKeyRequestBuilder<RetailSharedBingParameters<T>, T>(
      this.entityApi,
      { Key: key }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailSharedBingParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailSharedBingParameters`.
   */
  update(
    entity: RetailSharedBingParameters<T>
  ): UpdateRequestBuilder<RetailSharedBingParameters<T>, T> {
    return new UpdateRequestBuilder<RetailSharedBingParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailSharedBingParameters`.
   * @param key Key property. See {@link RetailSharedBingParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `RetailSharedBingParameters`.
   */
  delete(key: number): DeleteRequestBuilder<RetailSharedBingParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailSharedBingParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailSharedBingParameters` by taking the entity as a parameter.
   */
  delete(
    entity: RetailSharedBingParameters<T>
  ): DeleteRequestBuilder<RetailSharedBingParameters<T>, T>;
  delete(
    keyOrEntity: any
  ): DeleteRequestBuilder<RetailSharedBingParameters<T>, T> {
    return new DeleteRequestBuilder<RetailSharedBingParameters<T>, T>(
      this.entityApi,
      keyOrEntity instanceof RetailSharedBingParameters
        ? keyOrEntity
        : { Key: keyOrEntity! }
    );
  }
}
