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
import { SalesProductCategories } from './SalesProductCategories';

/**
 * Request builder class for operations supported on the {@link SalesProductCategories} entity.
 */
export class SalesProductCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesProductCategories<T>, T> {
  /**
   * Returns a request builder for querying all `SalesProductCategories` entities.
   * @returns A request builder for creating requests to retrieve all `SalesProductCategories` entities.
   */
  getAll(): GetAllRequestBuilder<SalesProductCategories<T>, T> {
    return new GetAllRequestBuilder<SalesProductCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesProductCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesProductCategories`.
   */
  create(
    entity: SalesProductCategories<T>
  ): CreateRequestBuilder<SalesProductCategories<T>, T> {
    return new CreateRequestBuilder<SalesProductCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesProductCategories` entity based on its keys.
   * @param categoryName Key property. See {@link SalesProductCategories.categoryName}.
   * @returns A request builder for creating requests to retrieve one `SalesProductCategories` entity based on its keys.
   */
  getByKey(
    categoryName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesProductCategories<T>, T> {
    return new GetByKeyRequestBuilder<SalesProductCategories<T>, T>(
      this.entityApi,
      { CategoryName: categoryName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesProductCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesProductCategories`.
   */
  update(
    entity: SalesProductCategories<T>
  ): UpdateRequestBuilder<SalesProductCategories<T>, T> {
    return new UpdateRequestBuilder<SalesProductCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesProductCategories`.
   * @param categoryName Key property. See {@link SalesProductCategories.categoryName}.
   * @returns A request builder for creating requests that delete an entity of type `SalesProductCategories`.
   */
  delete(
    categoryName: string
  ): DeleteRequestBuilder<SalesProductCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesProductCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesProductCategories` by taking the entity as a parameter.
   */
  delete(
    entity: SalesProductCategories<T>
  ): DeleteRequestBuilder<SalesProductCategories<T>, T>;
  delete(
    categoryNameOrEntity: any
  ): DeleteRequestBuilder<SalesProductCategories<T>, T> {
    return new DeleteRequestBuilder<SalesProductCategories<T>, T>(
      this.entityApi,
      categoryNameOrEntity instanceof SalesProductCategories
        ? categoryNameOrEntity
        : { CategoryName: categoryNameOrEntity! }
    );
  }
}
