/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { PostalAddressesForAi } from './PostalAddressesForAi';

/**
 * Request builder class for operations supported on the {@link PostalAddressesForAi} entity.
 */
export class PostalAddressesForAiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PostalAddressesForAi<T>, T> {
  /**
   * Returns a request builder for querying all `PostalAddressesForAi` entities.
   * @returns A request builder for creating requests to retrieve all `PostalAddressesForAi` entities.
   */
  getAll(): GetAllRequestBuilder<PostalAddressesForAi<T>, T> {
    return new GetAllRequestBuilder<PostalAddressesForAi<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PostalAddressesForAi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PostalAddressesForAi`.
   */
  create(
    entity: PostalAddressesForAi<T>
  ): CreateRequestBuilder<PostalAddressesForAi<T>, T> {
    return new CreateRequestBuilder<PostalAddressesForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PostalAddressesForAi` entity based on its keys.
   * @param validFrom Key property. See {@link PostalAddressesForAi.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PostalAddressesForAi` entity based on its keys.
   */
  getByKey(
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PostalAddressesForAi<T>, T> {
    return new GetByKeyRequestBuilder<PostalAddressesForAi<T>, T>(
      this.entityApi,
      { ValidFrom: validFrom }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PostalAddressesForAi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PostalAddressesForAi`.
   */
  update(
    entity: PostalAddressesForAi<T>
  ): UpdateRequestBuilder<PostalAddressesForAi<T>, T> {
    return new UpdateRequestBuilder<PostalAddressesForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PostalAddressesForAi`.
   * @param validFrom Key property. See {@link PostalAddressesForAi.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PostalAddressesForAi`.
   */
  delete(validFrom: Moment): DeleteRequestBuilder<PostalAddressesForAi<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PostalAddressesForAi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PostalAddressesForAi` by taking the entity as a parameter.
   */
  delete(
    entity: PostalAddressesForAi<T>
  ): DeleteRequestBuilder<PostalAddressesForAi<T>, T>;
  delete(
    validFromOrEntity: any
  ): DeleteRequestBuilder<PostalAddressesForAi<T>, T> {
    return new DeleteRequestBuilder<PostalAddressesForAi<T>, T>(
      this.entityApi,
      validFromOrEntity instanceof PostalAddressesForAi
        ? validFromOrEntity
        : { ValidFrom: validFromOrEntity! }
    );
  }
}
