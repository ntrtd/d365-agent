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
import { DimensionParameters } from './DimensionParameters';

/**
 * Request builder class for operations supported on the {@link DimensionParameters} entity.
 */
export class DimensionParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimensionParameters<T>, T> {
  /**
   * Returns a request builder for querying all `DimensionParameters` entities.
   * @returns A request builder for creating requests to retrieve all `DimensionParameters` entities.
   */
  getAll(): GetAllRequestBuilder<DimensionParameters<T>, T> {
    return new GetAllRequestBuilder<DimensionParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DimensionParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimensionParameters`.
   */
  create(
    entity: DimensionParameters<T>
  ): CreateRequestBuilder<DimensionParameters<T>, T> {
    return new CreateRequestBuilder<DimensionParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimensionParameters` entity based on its keys.
   * @param key Key property. See {@link DimensionParameters.key}.
   * @returns A request builder for creating requests to retrieve one `DimensionParameters` entity based on its keys.
   */
  getByKey(
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DimensionParameters<T>, T> {
    return new GetByKeyRequestBuilder<DimensionParameters<T>, T>(
      this.entityApi,
      { Key: key }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimensionParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimensionParameters`.
   */
  update(
    entity: DimensionParameters<T>
  ): UpdateRequestBuilder<DimensionParameters<T>, T> {
    return new UpdateRequestBuilder<DimensionParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimensionParameters`.
   * @param key Key property. See {@link DimensionParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `DimensionParameters`.
   */
  delete(key: number): DeleteRequestBuilder<DimensionParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimensionParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimensionParameters` by taking the entity as a parameter.
   */
  delete(
    entity: DimensionParameters<T>
  ): DeleteRequestBuilder<DimensionParameters<T>, T>;
  delete(keyOrEntity: any): DeleteRequestBuilder<DimensionParameters<T>, T> {
    return new DeleteRequestBuilder<DimensionParameters<T>, T>(
      this.entityApi,
      keyOrEntity instanceof DimensionParameters
        ? keyOrEntity
        : { Key: keyOrEntity! }
    );
  }
}
