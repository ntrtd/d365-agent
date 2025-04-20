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
import { AddressParameters } from './AddressParameters';

/**
 * Request builder class for operations supported on the {@link AddressParameters} entity.
 */
export class AddressParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressParameters<T>, T> {
  /**
   * Returns a request builder for querying all `AddressParameters` entities.
   * @returns A request builder for creating requests to retrieve all `AddressParameters` entities.
   */
  getAll(): GetAllRequestBuilder<AddressParameters<T>, T> {
    return new GetAllRequestBuilder<AddressParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressParameters`.
   */
  create(
    entity: AddressParameters<T>
  ): CreateRequestBuilder<AddressParameters<T>, T> {
    return new CreateRequestBuilder<AddressParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressParameters` entity based on its keys.
   * @param key Key property. See {@link AddressParameters.key}.
   * @returns A request builder for creating requests to retrieve one `AddressParameters` entity based on its keys.
   */
  getByKey(
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AddressParameters<T>, T> {
    return new GetByKeyRequestBuilder<AddressParameters<T>, T>(this.entityApi, {
      Key: key
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AddressParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressParameters`.
   */
  update(
    entity: AddressParameters<T>
  ): UpdateRequestBuilder<AddressParameters<T>, T> {
    return new UpdateRequestBuilder<AddressParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressParameters`.
   * @param key Key property. See {@link AddressParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `AddressParameters`.
   */
  delete(key: number): DeleteRequestBuilder<AddressParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressParameters` by taking the entity as a parameter.
   */
  delete(
    entity: AddressParameters<T>
  ): DeleteRequestBuilder<AddressParameters<T>, T>;
  delete(keyOrEntity: any): DeleteRequestBuilder<AddressParameters<T>, T> {
    return new DeleteRequestBuilder<AddressParameters<T>, T>(
      this.entityApi,
      keyOrEntity instanceof AddressParameters
        ? keyOrEntity
        : { Key: keyOrEntity! }
    );
  }
}
