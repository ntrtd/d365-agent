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
import { EssSystemParameters } from './EssSystemParameters';

/**
 * Request builder class for operations supported on the {@link EssSystemParameters} entity.
 */
export class EssSystemParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssSystemParameters<T>, T> {
  /**
   * Returns a request builder for querying all `EssSystemParameters` entities.
   * @returns A request builder for creating requests to retrieve all `EssSystemParameters` entities.
   */
  getAll(): GetAllRequestBuilder<EssSystemParameters<T>, T> {
    return new GetAllRequestBuilder<EssSystemParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EssSystemParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssSystemParameters`.
   */
  create(
    entity: EssSystemParameters<T>
  ): CreateRequestBuilder<EssSystemParameters<T>, T> {
    return new CreateRequestBuilder<EssSystemParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssSystemParameters` entity based on its keys.
   * @param key Key property. See {@link EssSystemParameters.key}.
   * @returns A request builder for creating requests to retrieve one `EssSystemParameters` entity based on its keys.
   */
  getByKey(
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EssSystemParameters<T>, T> {
    return new GetByKeyRequestBuilder<EssSystemParameters<T>, T>(
      this.entityApi,
      { Key: key }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EssSystemParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssSystemParameters`.
   */
  update(
    entity: EssSystemParameters<T>
  ): UpdateRequestBuilder<EssSystemParameters<T>, T> {
    return new UpdateRequestBuilder<EssSystemParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssSystemParameters`.
   * @param key Key property. See {@link EssSystemParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `EssSystemParameters`.
   */
  delete(key: number): DeleteRequestBuilder<EssSystemParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssSystemParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssSystemParameters` by taking the entity as a parameter.
   */
  delete(
    entity: EssSystemParameters<T>
  ): DeleteRequestBuilder<EssSystemParameters<T>, T>;
  delete(keyOrEntity: any): DeleteRequestBuilder<EssSystemParameters<T>, T> {
    return new DeleteRequestBuilder<EssSystemParameters<T>, T>(
      this.entityApi,
      keyOrEntity instanceof EssSystemParameters
        ? keyOrEntity
        : { Key: keyOrEntity! }
    );
  }
}
