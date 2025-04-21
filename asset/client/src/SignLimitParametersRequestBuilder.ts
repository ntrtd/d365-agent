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
import { SignLimitParameters } from './SignLimitParameters';

/**
 * Request builder class for operations supported on the {@link SignLimitParameters} entity.
 */
export class SignLimitParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SignLimitParameters<T>, T> {
  /**
   * Returns a request builder for querying all `SignLimitParameters` entities.
   * @returns A request builder for creating requests to retrieve all `SignLimitParameters` entities.
   */
  getAll(): GetAllRequestBuilder<SignLimitParameters<T>, T> {
    return new GetAllRequestBuilder<SignLimitParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SignLimitParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SignLimitParameters`.
   */
  create(
    entity: SignLimitParameters<T>
  ): CreateRequestBuilder<SignLimitParameters<T>, T> {
    return new CreateRequestBuilder<SignLimitParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SignLimitParameters` entity based on its keys.
   * @param key Key property. See {@link SignLimitParameters.key}.
   * @returns A request builder for creating requests to retrieve one `SignLimitParameters` entity based on its keys.
   */
  getByKey(
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SignLimitParameters<T>, T> {
    return new GetByKeyRequestBuilder<SignLimitParameters<T>, T>(
      this.entityApi,
      { Key: key }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SignLimitParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SignLimitParameters`.
   */
  update(
    entity: SignLimitParameters<T>
  ): UpdateRequestBuilder<SignLimitParameters<T>, T> {
    return new UpdateRequestBuilder<SignLimitParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SignLimitParameters`.
   * @param key Key property. See {@link SignLimitParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `SignLimitParameters`.
   */
  delete(key: number): DeleteRequestBuilder<SignLimitParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SignLimitParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SignLimitParameters` by taking the entity as a parameter.
   */
  delete(
    entity: SignLimitParameters<T>
  ): DeleteRequestBuilder<SignLimitParameters<T>, T>;
  delete(keyOrEntity: any): DeleteRequestBuilder<SignLimitParameters<T>, T> {
    return new DeleteRequestBuilder<SignLimitParameters<T>, T>(
      this.entityApi,
      keyOrEntity instanceof SignLimitParameters
        ? keyOrEntity
        : { Key: keyOrEntity! }
    );
  }
}
