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
import { DimAttributeMainAccounts } from './DimAttributeMainAccounts';

/**
 * Request builder class for operations supported on the {@link DimAttributeMainAccounts} entity.
 */
export class DimAttributeMainAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeMainAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeMainAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeMainAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeMainAccounts<T>, T> {
    return new GetAllRequestBuilder<DimAttributeMainAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeMainAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeMainAccounts`.
   */
  create(
    entity: DimAttributeMainAccounts<T>
  ): CreateRequestBuilder<DimAttributeMainAccounts<T>, T> {
    return new CreateRequestBuilder<DimAttributeMainAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeMainAccounts` entity based on its keys.
   * @param value Key property. See {@link DimAttributeMainAccounts.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeMainAccounts` entity based on its keys.
   */
  getByKey(
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeMainAccounts<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeMainAccounts<T>, T>(
      this.entityApi,
      { Value: value }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeMainAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeMainAccounts`.
   */
  update(
    entity: DimAttributeMainAccounts<T>
  ): UpdateRequestBuilder<DimAttributeMainAccounts<T>, T> {
    return new UpdateRequestBuilder<DimAttributeMainAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeMainAccounts`.
   * @param value Key property. See {@link DimAttributeMainAccounts.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeMainAccounts`.
   */
  delete(value: string): DeleteRequestBuilder<DimAttributeMainAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeMainAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeMainAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeMainAccounts<T>
  ): DeleteRequestBuilder<DimAttributeMainAccounts<T>, T>;
  delete(
    valueOrEntity: any
  ): DeleteRequestBuilder<DimAttributeMainAccounts<T>, T> {
    return new DeleteRequestBuilder<DimAttributeMainAccounts<T>, T>(
      this.entityApi,
      valueOrEntity instanceof DimAttributeMainAccounts
        ? valueOrEntity
        : { Value: valueOrEntity! }
    );
  }
}
