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
import { ProductCommonDataServiceCategoriesV2 } from './ProductCommonDataServiceCategoriesV2';

/**
 * Request builder class for operations supported on the {@link ProductCommonDataServiceCategoriesV2} entity.
 */
export class ProductCommonDataServiceCategoriesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductCommonDataServiceCategoriesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductCommonDataServiceCategoriesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductCommonDataServiceCategoriesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductCommonDataServiceCategoriesV2<T>, T> {
    return new GetAllRequestBuilder<ProductCommonDataServiceCategoriesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductCommonDataServiceCategoriesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductCommonDataServiceCategoriesV2`.
   */
  create(
    entity: ProductCommonDataServiceCategoriesV2<T>
  ): CreateRequestBuilder<ProductCommonDataServiceCategoriesV2<T>, T> {
    return new CreateRequestBuilder<ProductCommonDataServiceCategoriesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductCommonDataServiceCategoriesV2` entity based on its keys.
   * @param productCategoryName Key property. See {@link ProductCommonDataServiceCategoriesV2.productCategoryName}.
   * @returns A request builder for creating requests to retrieve one `ProductCommonDataServiceCategoriesV2` entity based on its keys.
   */
  getByKey(
    productCategoryName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductCommonDataServiceCategoriesV2<T>, T> {
    return new GetByKeyRequestBuilder<
      ProductCommonDataServiceCategoriesV2<T>,
      T
    >(this.entityApi, { ProductCategoryName: productCategoryName });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductCommonDataServiceCategoriesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductCommonDataServiceCategoriesV2`.
   */
  update(
    entity: ProductCommonDataServiceCategoriesV2<T>
  ): UpdateRequestBuilder<ProductCommonDataServiceCategoriesV2<T>, T> {
    return new UpdateRequestBuilder<ProductCommonDataServiceCategoriesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductCommonDataServiceCategoriesV2`.
   * @param productCategoryName Key property. See {@link ProductCommonDataServiceCategoriesV2.productCategoryName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductCommonDataServiceCategoriesV2`.
   */
  delete(
    productCategoryName: string
  ): DeleteRequestBuilder<ProductCommonDataServiceCategoriesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductCommonDataServiceCategoriesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductCommonDataServiceCategoriesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProductCommonDataServiceCategoriesV2<T>
  ): DeleteRequestBuilder<ProductCommonDataServiceCategoriesV2<T>, T>;
  delete(
    productCategoryNameOrEntity: any
  ): DeleteRequestBuilder<ProductCommonDataServiceCategoriesV2<T>, T> {
    return new DeleteRequestBuilder<ProductCommonDataServiceCategoriesV2<T>, T>(
      this.entityApi,
      productCategoryNameOrEntity instanceof
      ProductCommonDataServiceCategoriesV2
        ? productCategoryNameOrEntity
        : { ProductCategoryName: productCategoryNameOrEntity! }
    );
  }
}
