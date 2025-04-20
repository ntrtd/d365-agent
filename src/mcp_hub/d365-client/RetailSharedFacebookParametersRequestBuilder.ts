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
import { RetailSharedFacebookParameters } from './RetailSharedFacebookParameters';

/**
 * Request builder class for operations supported on the {@link RetailSharedFacebookParameters} entity.
 */
export class RetailSharedFacebookParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailSharedFacebookParameters<T>, T> {
  /**
   * Returns a request builder for querying all `RetailSharedFacebookParameters` entities.
   * @returns A request builder for creating requests to retrieve all `RetailSharedFacebookParameters` entities.
   */
  getAll(): GetAllRequestBuilder<RetailSharedFacebookParameters<T>, T> {
    return new GetAllRequestBuilder<RetailSharedFacebookParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailSharedFacebookParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailSharedFacebookParameters`.
   */
  create(
    entity: RetailSharedFacebookParameters<T>
  ): CreateRequestBuilder<RetailSharedFacebookParameters<T>, T> {
    return new CreateRequestBuilder<RetailSharedFacebookParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailSharedFacebookParameters` entity based on its keys.
   * @param key Key property. See {@link RetailSharedFacebookParameters.key}.
   * @returns A request builder for creating requests to retrieve one `RetailSharedFacebookParameters` entity based on its keys.
   */
  getByKey(
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailSharedFacebookParameters<T>, T> {
    return new GetByKeyRequestBuilder<RetailSharedFacebookParameters<T>, T>(
      this.entityApi,
      { Key: key }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailSharedFacebookParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailSharedFacebookParameters`.
   */
  update(
    entity: RetailSharedFacebookParameters<T>
  ): UpdateRequestBuilder<RetailSharedFacebookParameters<T>, T> {
    return new UpdateRequestBuilder<RetailSharedFacebookParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailSharedFacebookParameters`.
   * @param key Key property. See {@link RetailSharedFacebookParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `RetailSharedFacebookParameters`.
   */
  delete(
    key: number
  ): DeleteRequestBuilder<RetailSharedFacebookParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailSharedFacebookParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailSharedFacebookParameters` by taking the entity as a parameter.
   */
  delete(
    entity: RetailSharedFacebookParameters<T>
  ): DeleteRequestBuilder<RetailSharedFacebookParameters<T>, T>;
  delete(
    keyOrEntity: any
  ): DeleteRequestBuilder<RetailSharedFacebookParameters<T>, T> {
    return new DeleteRequestBuilder<RetailSharedFacebookParameters<T>, T>(
      this.entityApi,
      keyOrEntity instanceof RetailSharedFacebookParameters
        ? keyOrEntity
        : { Key: keyOrEntity! }
    );
  }
}
