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
import { DirParameters } from './DirParameters';

/**
 * Request builder class for operations supported on the {@link DirParameters} entity.
 */
export class DirParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DirParameters<T>, T> {
  /**
   * Returns a request builder for querying all `DirParameters` entities.
   * @returns A request builder for creating requests to retrieve all `DirParameters` entities.
   */
  getAll(): GetAllRequestBuilder<DirParameters<T>, T> {
    return new GetAllRequestBuilder<DirParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DirParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DirParameters`.
   */
  create(entity: DirParameters<T>): CreateRequestBuilder<DirParameters<T>, T> {
    return new CreateRequestBuilder<DirParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DirParameters` entity based on its keys.
   * @param key Key property. See {@link DirParameters.key}.
   * @returns A request builder for creating requests to retrieve one `DirParameters` entity based on its keys.
   */
  getByKey(
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DirParameters<T>, T> {
    return new GetByKeyRequestBuilder<DirParameters<T>, T>(this.entityApi, {
      Key: key
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DirParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DirParameters`.
   */
  update(entity: DirParameters<T>): UpdateRequestBuilder<DirParameters<T>, T> {
    return new UpdateRequestBuilder<DirParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DirParameters`.
   * @param key Key property. See {@link DirParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `DirParameters`.
   */
  delete(key: number): DeleteRequestBuilder<DirParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DirParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DirParameters` by taking the entity as a parameter.
   */
  delete(entity: DirParameters<T>): DeleteRequestBuilder<DirParameters<T>, T>;
  delete(keyOrEntity: any): DeleteRequestBuilder<DirParameters<T>, T> {
    return new DeleteRequestBuilder<DirParameters<T>, T>(
      this.entityApi,
      keyOrEntity instanceof DirParameters ? keyOrEntity : { Key: keyOrEntity! }
    );
  }
}
