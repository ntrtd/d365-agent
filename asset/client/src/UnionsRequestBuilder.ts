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
import { Unions } from './Unions';

/**
 * Request builder class for operations supported on the {@link Unions} entity.
 */
export class UnionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Unions<T>, T> {
  /**
   * Returns a request builder for querying all `Unions` entities.
   * @returns A request builder for creating requests to retrieve all `Unions` entities.
   */
  getAll(): GetAllRequestBuilder<Unions<T>, T> {
    return new GetAllRequestBuilder<Unions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Unions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Unions`.
   */
  create(entity: Unions<T>): CreateRequestBuilder<Unions<T>, T> {
    return new CreateRequestBuilder<Unions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Unions` entity based on its keys.
   * @param unionId Key property. See {@link Unions.unionId}.
   * @returns A request builder for creating requests to retrieve one `Unions` entity based on its keys.
   */
  getByKey(
    unionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Unions<T>, T> {
    return new GetByKeyRequestBuilder<Unions<T>, T>(this.entityApi, {
      UnionId: unionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Unions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Unions`.
   */
  update(entity: Unions<T>): UpdateRequestBuilder<Unions<T>, T> {
    return new UpdateRequestBuilder<Unions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Unions`.
   * @param unionId Key property. See {@link Unions.unionId}.
   * @returns A request builder for creating requests that delete an entity of type `Unions`.
   */
  delete(unionId: string): DeleteRequestBuilder<Unions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Unions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Unions` by taking the entity as a parameter.
   */
  delete(entity: Unions<T>): DeleteRequestBuilder<Unions<T>, T>;
  delete(unionIdOrEntity: any): DeleteRequestBuilder<Unions<T>, T> {
    return new DeleteRequestBuilder<Unions<T>, T>(
      this.entityApi,
      unionIdOrEntity instanceof Unions
        ? unionIdOrEntity
        : { UnionId: unionIdOrEntity! }
    );
  }
}
