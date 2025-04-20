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
import { Parameters } from './Parameters';

/**
 * Request builder class for operations supported on the {@link Parameters} entity.
 */
export class ParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Parameters<T>, T> {
  /**
   * Returns a request builder for querying all `Parameters` entities.
   * @returns A request builder for creating requests to retrieve all `Parameters` entities.
   */
  getAll(): GetAllRequestBuilder<Parameters<T>, T> {
    return new GetAllRequestBuilder<Parameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Parameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Parameters`.
   */
  create(entity: Parameters<T>): CreateRequestBuilder<Parameters<T>, T> {
    return new CreateRequestBuilder<Parameters<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Parameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link Parameters.dataAreaId}.
   * @param key Key property. See {@link Parameters.key}.
   * @returns A request builder for creating requests to retrieve one `Parameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Parameters<T>, T> {
    return new GetByKeyRequestBuilder<Parameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      key: key
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Parameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Parameters`.
   */
  update(entity: Parameters<T>): UpdateRequestBuilder<Parameters<T>, T> {
    return new UpdateRequestBuilder<Parameters<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Parameters`.
   * @param dataAreaId Key property. See {@link Parameters.dataAreaId}.
   * @param key Key property. See {@link Parameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `Parameters`.
   */
  delete(
    dataAreaId: string,
    key: number
  ): DeleteRequestBuilder<Parameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Parameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Parameters` by taking the entity as a parameter.
   */
  delete(entity: Parameters<T>): DeleteRequestBuilder<Parameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    key?: number
  ): DeleteRequestBuilder<Parameters<T>, T> {
    return new DeleteRequestBuilder<Parameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Parameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            key: key!
          }
    );
  }
}
