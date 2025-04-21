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
import { HumanResourcesSharedParameters } from './HumanResourcesSharedParameters';

/**
 * Request builder class for operations supported on the {@link HumanResourcesSharedParameters} entity.
 */
export class HumanResourcesSharedParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HumanResourcesSharedParameters<T>, T> {
  /**
   * Returns a request builder for querying all `HumanResourcesSharedParameters` entities.
   * @returns A request builder for creating requests to retrieve all `HumanResourcesSharedParameters` entities.
   */
  getAll(): GetAllRequestBuilder<HumanResourcesSharedParameters<T>, T> {
    return new GetAllRequestBuilder<HumanResourcesSharedParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HumanResourcesSharedParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HumanResourcesSharedParameters`.
   */
  create(
    entity: HumanResourcesSharedParameters<T>
  ): CreateRequestBuilder<HumanResourcesSharedParameters<T>, T> {
    return new CreateRequestBuilder<HumanResourcesSharedParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HumanResourcesSharedParameters` entity based on its keys.
   * @param key Key property. See {@link HumanResourcesSharedParameters.key}.
   * @returns A request builder for creating requests to retrieve one `HumanResourcesSharedParameters` entity based on its keys.
   */
  getByKey(
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<HumanResourcesSharedParameters<T>, T> {
    return new GetByKeyRequestBuilder<HumanResourcesSharedParameters<T>, T>(
      this.entityApi,
      { Key: key }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HumanResourcesSharedParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HumanResourcesSharedParameters`.
   */
  update(
    entity: HumanResourcesSharedParameters<T>
  ): UpdateRequestBuilder<HumanResourcesSharedParameters<T>, T> {
    return new UpdateRequestBuilder<HumanResourcesSharedParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HumanResourcesSharedParameters`.
   * @param key Key property. See {@link HumanResourcesSharedParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `HumanResourcesSharedParameters`.
   */
  delete(
    key: number
  ): DeleteRequestBuilder<HumanResourcesSharedParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HumanResourcesSharedParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HumanResourcesSharedParameters` by taking the entity as a parameter.
   */
  delete(
    entity: HumanResourcesSharedParameters<T>
  ): DeleteRequestBuilder<HumanResourcesSharedParameters<T>, T>;
  delete(
    keyOrEntity: any
  ): DeleteRequestBuilder<HumanResourcesSharedParameters<T>, T> {
    return new DeleteRequestBuilder<HumanResourcesSharedParameters<T>, T>(
      this.entityApi,
      keyOrEntity instanceof HumanResourcesSharedParameters
        ? keyOrEntity
        : { Key: keyOrEntity! }
    );
  }
}
