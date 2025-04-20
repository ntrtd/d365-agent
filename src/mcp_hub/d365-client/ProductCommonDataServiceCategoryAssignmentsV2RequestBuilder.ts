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
import { ProductCommonDataServiceCategoryAssignmentsV2 } from './ProductCommonDataServiceCategoryAssignmentsV2';

/**
 * Request builder class for operations supported on the {@link ProductCommonDataServiceCategoryAssignmentsV2} entity.
 */
export class ProductCommonDataServiceCategoryAssignmentsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductCommonDataServiceCategoryAssignmentsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductCommonDataServiceCategoryAssignmentsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductCommonDataServiceCategoryAssignmentsV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProductCommonDataServiceCategoryAssignmentsV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProductCommonDataServiceCategoryAssignmentsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductCommonDataServiceCategoryAssignmentsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductCommonDataServiceCategoryAssignmentsV2`.
   */
  create(
    entity: ProductCommonDataServiceCategoryAssignmentsV2<T>
  ): CreateRequestBuilder<ProductCommonDataServiceCategoryAssignmentsV2<T>, T> {
    return new CreateRequestBuilder<
      ProductCommonDataServiceCategoryAssignmentsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductCommonDataServiceCategoryAssignmentsV2` entity based on its keys.
   * @param productNumber Key property. See {@link ProductCommonDataServiceCategoryAssignmentsV2.productNumber}.
   * @param productCategoryName Key property. See {@link ProductCommonDataServiceCategoryAssignmentsV2.productCategoryName}.
   * @param productCategoryHierarchyName Key property. See {@link ProductCommonDataServiceCategoryAssignmentsV2.productCategoryHierarchyName}.
   * @returns A request builder for creating requests to retrieve one `ProductCommonDataServiceCategoryAssignmentsV2` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>,
    productCategoryName: DeserializedType<T, 'Edm.String'>,
    productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    ProductCommonDataServiceCategoryAssignmentsV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ProductCommonDataServiceCategoryAssignmentsV2<T>,
      T
    >(this.entityApi, {
      ProductNumber: productNumber,
      ProductCategoryName: productCategoryName,
      ProductCategoryHierarchyName: productCategoryHierarchyName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductCommonDataServiceCategoryAssignmentsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductCommonDataServiceCategoryAssignmentsV2`.
   */
  update(
    entity: ProductCommonDataServiceCategoryAssignmentsV2<T>
  ): UpdateRequestBuilder<ProductCommonDataServiceCategoryAssignmentsV2<T>, T> {
    return new UpdateRequestBuilder<
      ProductCommonDataServiceCategoryAssignmentsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductCommonDataServiceCategoryAssignmentsV2`.
   * @param productNumber Key property. See {@link ProductCommonDataServiceCategoryAssignmentsV2.productNumber}.
   * @param productCategoryName Key property. See {@link ProductCommonDataServiceCategoryAssignmentsV2.productCategoryName}.
   * @param productCategoryHierarchyName Key property. See {@link ProductCommonDataServiceCategoryAssignmentsV2.productCategoryHierarchyName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductCommonDataServiceCategoryAssignmentsV2`.
   */
  delete(
    productNumber: string,
    productCategoryName: string,
    productCategoryHierarchyName: string
  ): DeleteRequestBuilder<ProductCommonDataServiceCategoryAssignmentsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductCommonDataServiceCategoryAssignmentsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductCommonDataServiceCategoryAssignmentsV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProductCommonDataServiceCategoryAssignmentsV2<T>
  ): DeleteRequestBuilder<ProductCommonDataServiceCategoryAssignmentsV2<T>, T>;
  delete(
    productNumberOrEntity: any,
    productCategoryName?: string,
    productCategoryHierarchyName?: string
  ): DeleteRequestBuilder<ProductCommonDataServiceCategoryAssignmentsV2<T>, T> {
    return new DeleteRequestBuilder<
      ProductCommonDataServiceCategoryAssignmentsV2<T>,
      T
    >(
      this.entityApi,
      productNumberOrEntity instanceof
      ProductCommonDataServiceCategoryAssignmentsV2
        ? productNumberOrEntity
        : {
            ProductNumber: productNumberOrEntity!,
            ProductCategoryName: productCategoryName!,
            ProductCategoryHierarchyName: productCategoryHierarchyName!
          }
    );
  }
}
