/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ProductCommonDataServiceCategories } from './ProductCommonDataServiceCategories';

/**
 * Request builder class for operations supported on the {@link ProductCommonDataServiceCategories} entity.
 */
export class ProductCommonDataServiceCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductCommonDataServiceCategories<T>, T> {
  /**
   * Returns a request builder for querying all `ProductCommonDataServiceCategories` entities.
   * @returns A request builder for creating requests to retrieve all `ProductCommonDataServiceCategories` entities.
   */
  getAll(): GetAllRequestBuilder<ProductCommonDataServiceCategories<T>, T> {
    return new GetAllRequestBuilder<ProductCommonDataServiceCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductCommonDataServiceCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductCommonDataServiceCategories`.
   */
  create(
    entity: ProductCommonDataServiceCategories<T>
  ): CreateRequestBuilder<ProductCommonDataServiceCategories<T>, T> {
    return new CreateRequestBuilder<ProductCommonDataServiceCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductCommonDataServiceCategories` entity based on its keys.
   * @param categoryId Key property. See {@link ProductCommonDataServiceCategories.categoryId}.
   * @returns A request builder for creating requests to retrieve one `ProductCommonDataServiceCategories` entity based on its keys.
   */
  getByKey(
    categoryId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ProductCommonDataServiceCategories<T>, T> {
    return new GetByKeyRequestBuilder<ProductCommonDataServiceCategories<T>, T>(
      this.entityApi,
      { CategoryId: categoryId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductCommonDataServiceCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductCommonDataServiceCategories`.
   */
  update(
    entity: ProductCommonDataServiceCategories<T>
  ): UpdateRequestBuilder<ProductCommonDataServiceCategories<T>, T> {
    return new UpdateRequestBuilder<ProductCommonDataServiceCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductCommonDataServiceCategories`.
   * @param categoryId Key property. See {@link ProductCommonDataServiceCategories.categoryId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductCommonDataServiceCategories`.
   */
  delete(
    categoryId: BigNumber
  ): DeleteRequestBuilder<ProductCommonDataServiceCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductCommonDataServiceCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductCommonDataServiceCategories` by taking the entity as a parameter.
   */
  delete(
    entity: ProductCommonDataServiceCategories<T>
  ): DeleteRequestBuilder<ProductCommonDataServiceCategories<T>, T>;
  delete(
    categoryIdOrEntity: any
  ): DeleteRequestBuilder<ProductCommonDataServiceCategories<T>, T> {
    return new DeleteRequestBuilder<ProductCommonDataServiceCategories<T>, T>(
      this.entityApi,
      categoryIdOrEntity instanceof ProductCommonDataServiceCategories
        ? categoryIdOrEntity
        : { CategoryId: categoryIdOrEntity! }
    );
  }
}
