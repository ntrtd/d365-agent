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
import { Companies } from './Companies';

/**
 * Request builder class for operations supported on the {@link Companies} entity.
 */
export class CompaniesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Companies<T>, T> {
  /**
   * Returns a request builder for querying all `Companies` entities.
   * @returns A request builder for creating requests to retrieve all `Companies` entities.
   */
  getAll(): GetAllRequestBuilder<Companies<T>, T> {
    return new GetAllRequestBuilder<Companies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Companies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Companies`.
   */
  create(entity: Companies<T>): CreateRequestBuilder<Companies<T>, T> {
    return new CreateRequestBuilder<Companies<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Companies` entity based on its keys.
   * @param dataArea Key property. See {@link Companies.dataArea}.
   * @returns A request builder for creating requests to retrieve one `Companies` entity based on its keys.
   */
  getByKey(
    dataArea: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Companies<T>, T> {
    return new GetByKeyRequestBuilder<Companies<T>, T>(this.entityApi, {
      DataArea: dataArea
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Companies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Companies`.
   */
  update(entity: Companies<T>): UpdateRequestBuilder<Companies<T>, T> {
    return new UpdateRequestBuilder<Companies<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Companies`.
   * @param dataArea Key property. See {@link Companies.dataArea}.
   * @returns A request builder for creating requests that delete an entity of type `Companies`.
   */
  delete(dataArea: string): DeleteRequestBuilder<Companies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Companies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Companies` by taking the entity as a parameter.
   */
  delete(entity: Companies<T>): DeleteRequestBuilder<Companies<T>, T>;
  delete(dataAreaOrEntity: any): DeleteRequestBuilder<Companies<T>, T> {
    return new DeleteRequestBuilder<Companies<T>, T>(
      this.entityApi,
      dataAreaOrEntity instanceof Companies
        ? dataAreaOrEntity
        : { DataArea: dataAreaOrEntity! }
    );
  }
}
