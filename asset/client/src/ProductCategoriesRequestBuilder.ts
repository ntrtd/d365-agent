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
import { ProductCategories } from './ProductCategories';

/**
 * Request builder class for operations supported on the {@link ProductCategories} entity.
 */
export class ProductCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductCategories<T>, T> {
  /**
   * Returns a request builder for querying all `ProductCategories` entities.
   * @returns A request builder for creating requests to retrieve all `ProductCategories` entities.
   */
  getAll(): GetAllRequestBuilder<ProductCategories<T>, T> {
    return new GetAllRequestBuilder<ProductCategories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductCategories`.
   */
  create(
    entity: ProductCategories<T>
  ): CreateRequestBuilder<ProductCategories<T>, T> {
    return new CreateRequestBuilder<ProductCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductCategories` entity based on its keys.
   * @param productCategoryHierarchyName Key property. See {@link ProductCategories.productCategoryHierarchyName}.
   * @param categoryName Key property. See {@link ProductCategories.categoryName}.
   * @returns A request builder for creating requests to retrieve one `ProductCategories` entity based on its keys.
   */
  getByKey(
    productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>,
    categoryName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductCategories<T>, T> {
    return new GetByKeyRequestBuilder<ProductCategories<T>, T>(this.entityApi, {
      ProductCategoryHierarchyName: productCategoryHierarchyName,
      CategoryName: categoryName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductCategories`.
   */
  update(
    entity: ProductCategories<T>
  ): UpdateRequestBuilder<ProductCategories<T>, T> {
    return new UpdateRequestBuilder<ProductCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductCategories`.
   * @param productCategoryHierarchyName Key property. See {@link ProductCategories.productCategoryHierarchyName}.
   * @param categoryName Key property. See {@link ProductCategories.categoryName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductCategories`.
   */
  delete(
    productCategoryHierarchyName: string,
    categoryName: string
  ): DeleteRequestBuilder<ProductCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductCategories` by taking the entity as a parameter.
   */
  delete(
    entity: ProductCategories<T>
  ): DeleteRequestBuilder<ProductCategories<T>, T>;
  delete(
    productCategoryHierarchyNameOrEntity: any,
    categoryName?: string
  ): DeleteRequestBuilder<ProductCategories<T>, T> {
    return new DeleteRequestBuilder<ProductCategories<T>, T>(
      this.entityApi,
      productCategoryHierarchyNameOrEntity instanceof ProductCategories
        ? productCategoryHierarchyNameOrEntity
        : {
            ProductCategoryHierarchyName: productCategoryHierarchyNameOrEntity!,
            CategoryName: categoryName!
          }
    );
  }
}
