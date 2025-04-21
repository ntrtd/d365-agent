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
import { EfDocAuthorities } from './EfDocAuthorities';

/**
 * Request builder class for operations supported on the {@link EfDocAuthorities} entity.
 */
export class EfDocAuthoritiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EfDocAuthorities<T>, T> {
  /**
   * Returns a request builder for querying all `EfDocAuthorities` entities.
   * @returns A request builder for creating requests to retrieve all `EfDocAuthorities` entities.
   */
  getAll(): GetAllRequestBuilder<EfDocAuthorities<T>, T> {
    return new GetAllRequestBuilder<EfDocAuthorities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EfDocAuthorities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EfDocAuthorities`.
   */
  create(
    entity: EfDocAuthorities<T>
  ): CreateRequestBuilder<EfDocAuthorities<T>, T> {
    return new CreateRequestBuilder<EfDocAuthorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EfDocAuthorities` entity based on its keys.
   * @param authority Key property. See {@link EfDocAuthorities.authority}.
   * @returns A request builder for creating requests to retrieve one `EfDocAuthorities` entity based on its keys.
   */
  getByKey(
    authority: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EfDocAuthorities<T>, T> {
    return new GetByKeyRequestBuilder<EfDocAuthorities<T>, T>(this.entityApi, {
      Authority: authority
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EfDocAuthorities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EfDocAuthorities`.
   */
  update(
    entity: EfDocAuthorities<T>
  ): UpdateRequestBuilder<EfDocAuthorities<T>, T> {
    return new UpdateRequestBuilder<EfDocAuthorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EfDocAuthorities`.
   * @param authority Key property. See {@link EfDocAuthorities.authority}.
   * @returns A request builder for creating requests that delete an entity of type `EfDocAuthorities`.
   */
  delete(authority: string): DeleteRequestBuilder<EfDocAuthorities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EfDocAuthorities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EfDocAuthorities` by taking the entity as a parameter.
   */
  delete(
    entity: EfDocAuthorities<T>
  ): DeleteRequestBuilder<EfDocAuthorities<T>, T>;
  delete(authorityOrEntity: any): DeleteRequestBuilder<EfDocAuthorities<T>, T> {
    return new DeleteRequestBuilder<EfDocAuthorities<T>, T>(
      this.entityApi,
      authorityOrEntity instanceof EfDocAuthorities
        ? authorityOrEntity
        : { Authority: authorityOrEntity! }
    );
  }
}
