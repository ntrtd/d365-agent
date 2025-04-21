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
import { TaxAuthorities } from './TaxAuthorities';

/**
 * Request builder class for operations supported on the {@link TaxAuthorities} entity.
 */
export class TaxAuthoritiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxAuthorities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxAuthorities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxAuthorities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxAuthorities<T>, T> {
    return new GetAllRequestBuilder<TaxAuthorities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxAuthorities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxAuthorities`.
   */
  create(
    entity: TaxAuthorities<T>
  ): CreateRequestBuilder<TaxAuthorities<T>, T> {
    return new CreateRequestBuilder<TaxAuthorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxAuthorities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxAuthorities.dataAreaId}.
   * @param taxAuthorityCode Key property. See {@link TaxAuthorities.taxAuthorityCode}.
   * @returns A request builder for creating requests to retrieve one `TaxAuthorities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxAuthorityCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxAuthorities<T>, T> {
    return new GetByKeyRequestBuilder<TaxAuthorities<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxAuthorityCode: taxAuthorityCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxAuthorities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxAuthorities`.
   */
  update(
    entity: TaxAuthorities<T>
  ): UpdateRequestBuilder<TaxAuthorities<T>, T> {
    return new UpdateRequestBuilder<TaxAuthorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxAuthorities`.
   * @param dataAreaId Key property. See {@link TaxAuthorities.dataAreaId}.
   * @param taxAuthorityCode Key property. See {@link TaxAuthorities.taxAuthorityCode}.
   * @returns A request builder for creating requests that delete an entity of type `TaxAuthorities`.
   */
  delete(
    dataAreaId: string,
    taxAuthorityCode: string
  ): DeleteRequestBuilder<TaxAuthorities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxAuthorities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxAuthorities` by taking the entity as a parameter.
   */
  delete(entity: TaxAuthorities<T>): DeleteRequestBuilder<TaxAuthorities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxAuthorityCode?: string
  ): DeleteRequestBuilder<TaxAuthorities<T>, T> {
    return new DeleteRequestBuilder<TaxAuthorities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxAuthorities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxAuthorityCode: taxAuthorityCode!
          }
    );
  }
}
