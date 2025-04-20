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
import { RetailSharedParameters } from './RetailSharedParameters';

/**
 * Request builder class for operations supported on the {@link RetailSharedParameters} entity.
 */
export class RetailSharedParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailSharedParameters<T>, T> {
  /**
   * Returns a request builder for querying all `RetailSharedParameters` entities.
   * @returns A request builder for creating requests to retrieve all `RetailSharedParameters` entities.
   */
  getAll(): GetAllRequestBuilder<RetailSharedParameters<T>, T> {
    return new GetAllRequestBuilder<RetailSharedParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailSharedParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailSharedParameters`.
   */
  create(
    entity: RetailSharedParameters<T>
  ): CreateRequestBuilder<RetailSharedParameters<T>, T> {
    return new CreateRequestBuilder<RetailSharedParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailSharedParameters` entity based on its keys.
   * @param key Key property. See {@link RetailSharedParameters.key}.
   * @returns A request builder for creating requests to retrieve one `RetailSharedParameters` entity based on its keys.
   */
  getByKey(
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailSharedParameters<T>, T> {
    return new GetByKeyRequestBuilder<RetailSharedParameters<T>, T>(
      this.entityApi,
      { Key: key }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailSharedParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailSharedParameters`.
   */
  update(
    entity: RetailSharedParameters<T>
  ): UpdateRequestBuilder<RetailSharedParameters<T>, T> {
    return new UpdateRequestBuilder<RetailSharedParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailSharedParameters`.
   * @param key Key property. See {@link RetailSharedParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `RetailSharedParameters`.
   */
  delete(key: number): DeleteRequestBuilder<RetailSharedParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailSharedParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailSharedParameters` by taking the entity as a parameter.
   */
  delete(
    entity: RetailSharedParameters<T>
  ): DeleteRequestBuilder<RetailSharedParameters<T>, T>;
  delete(keyOrEntity: any): DeleteRequestBuilder<RetailSharedParameters<T>, T> {
    return new DeleteRequestBuilder<RetailSharedParameters<T>, T>(
      this.entityApi,
      keyOrEntity instanceof RetailSharedParameters
        ? keyOrEntity
        : { Key: keyOrEntity! }
    );
  }
}
