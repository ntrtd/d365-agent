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
import { ProductCommonDataServiceCategoryAssignments } from './ProductCommonDataServiceCategoryAssignments';

/**
 * Request builder class for operations supported on the {@link ProductCommonDataServiceCategoryAssignments} entity.
 */
export class ProductCommonDataServiceCategoryAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductCommonDataServiceCategoryAssignments<T>, T> {
  /**
   * Returns a request builder for querying all `ProductCommonDataServiceCategoryAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `ProductCommonDataServiceCategoryAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProductCommonDataServiceCategoryAssignments<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProductCommonDataServiceCategoryAssignments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductCommonDataServiceCategoryAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductCommonDataServiceCategoryAssignments`.
   */
  create(
    entity: ProductCommonDataServiceCategoryAssignments<T>
  ): CreateRequestBuilder<ProductCommonDataServiceCategoryAssignments<T>, T> {
    return new CreateRequestBuilder<
      ProductCommonDataServiceCategoryAssignments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductCommonDataServiceCategoryAssignments` entity based on its keys.
   * @param productNumber Key property. See {@link ProductCommonDataServiceCategoryAssignments.productNumber}.
   * @param category Key property. See {@link ProductCommonDataServiceCategoryAssignments.category}.
   * @param categoryHierarchy Key property. See {@link ProductCommonDataServiceCategoryAssignments.categoryHierarchy}.
   * @returns A request builder for creating requests to retrieve one `ProductCommonDataServiceCategoryAssignments` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>,
    category: DeserializedType<T, 'Edm.Int64'>,
    categoryHierarchy: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ProductCommonDataServiceCategoryAssignments<T>, T> {
    return new GetByKeyRequestBuilder<
      ProductCommonDataServiceCategoryAssignments<T>,
      T
    >(this.entityApi, {
      ProductNumber: productNumber,
      Category: category,
      CategoryHierarchy: categoryHierarchy
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductCommonDataServiceCategoryAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductCommonDataServiceCategoryAssignments`.
   */
  update(
    entity: ProductCommonDataServiceCategoryAssignments<T>
  ): UpdateRequestBuilder<ProductCommonDataServiceCategoryAssignments<T>, T> {
    return new UpdateRequestBuilder<
      ProductCommonDataServiceCategoryAssignments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductCommonDataServiceCategoryAssignments`.
   * @param productNumber Key property. See {@link ProductCommonDataServiceCategoryAssignments.productNumber}.
   * @param category Key property. See {@link ProductCommonDataServiceCategoryAssignments.category}.
   * @param categoryHierarchy Key property. See {@link ProductCommonDataServiceCategoryAssignments.categoryHierarchy}.
   * @returns A request builder for creating requests that delete an entity of type `ProductCommonDataServiceCategoryAssignments`.
   */
  delete(
    productNumber: string,
    category: BigNumber,
    categoryHierarchy: BigNumber
  ): DeleteRequestBuilder<ProductCommonDataServiceCategoryAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductCommonDataServiceCategoryAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductCommonDataServiceCategoryAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: ProductCommonDataServiceCategoryAssignments<T>
  ): DeleteRequestBuilder<ProductCommonDataServiceCategoryAssignments<T>, T>;
  delete(
    productNumberOrEntity: any,
    category?: BigNumber,
    categoryHierarchy?: BigNumber
  ): DeleteRequestBuilder<ProductCommonDataServiceCategoryAssignments<T>, T> {
    return new DeleteRequestBuilder<
      ProductCommonDataServiceCategoryAssignments<T>,
      T
    >(
      this.entityApi,
      productNumberOrEntity instanceof
      ProductCommonDataServiceCategoryAssignments
        ? productNumberOrEntity
        : {
            ProductNumber: productNumberOrEntity!,
            Category: category!,
            CategoryHierarchy: categoryHierarchy!
          }
    );
  }
}
