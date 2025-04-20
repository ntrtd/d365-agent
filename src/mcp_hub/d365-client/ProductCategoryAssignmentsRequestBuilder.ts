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
import { ProductCategoryAssignments } from './ProductCategoryAssignments';

/**
 * Request builder class for operations supported on the {@link ProductCategoryAssignments} entity.
 */
export class ProductCategoryAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductCategoryAssignments<T>, T> {
  /**
   * Returns a request builder for querying all `ProductCategoryAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `ProductCategoryAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<ProductCategoryAssignments<T>, T> {
    return new GetAllRequestBuilder<ProductCategoryAssignments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductCategoryAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductCategoryAssignments`.
   */
  create(
    entity: ProductCategoryAssignments<T>
  ): CreateRequestBuilder<ProductCategoryAssignments<T>, T> {
    return new CreateRequestBuilder<ProductCategoryAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductCategoryAssignments` entity based on its keys.
   * @param productNumber Key property. See {@link ProductCategoryAssignments.productNumber}.
   * @param productCategoryName Key property. See {@link ProductCategoryAssignments.productCategoryName}.
   * @param productCategoryHierarchyName Key property. See {@link ProductCategoryAssignments.productCategoryHierarchyName}.
   * @returns A request builder for creating requests to retrieve one `ProductCategoryAssignments` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>,
    productCategoryName: DeserializedType<T, 'Edm.String'>,
    productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductCategoryAssignments<T>, T> {
    return new GetByKeyRequestBuilder<ProductCategoryAssignments<T>, T>(
      this.entityApi,
      {
        ProductNumber: productNumber,
        ProductCategoryName: productCategoryName,
        ProductCategoryHierarchyName: productCategoryHierarchyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductCategoryAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductCategoryAssignments`.
   */
  update(
    entity: ProductCategoryAssignments<T>
  ): UpdateRequestBuilder<ProductCategoryAssignments<T>, T> {
    return new UpdateRequestBuilder<ProductCategoryAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductCategoryAssignments`.
   * @param productNumber Key property. See {@link ProductCategoryAssignments.productNumber}.
   * @param productCategoryName Key property. See {@link ProductCategoryAssignments.productCategoryName}.
   * @param productCategoryHierarchyName Key property. See {@link ProductCategoryAssignments.productCategoryHierarchyName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductCategoryAssignments`.
   */
  delete(
    productNumber: string,
    productCategoryName: string,
    productCategoryHierarchyName: string
  ): DeleteRequestBuilder<ProductCategoryAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductCategoryAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductCategoryAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: ProductCategoryAssignments<T>
  ): DeleteRequestBuilder<ProductCategoryAssignments<T>, T>;
  delete(
    productNumberOrEntity: any,
    productCategoryName?: string,
    productCategoryHierarchyName?: string
  ): DeleteRequestBuilder<ProductCategoryAssignments<T>, T> {
    return new DeleteRequestBuilder<ProductCategoryAssignments<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof ProductCategoryAssignments
        ? productNumberOrEntity
        : {
            ProductNumber: productNumberOrEntity!,
            ProductCategoryName: productCategoryName!,
            ProductCategoryHierarchyName: productCategoryHierarchyName!
          }
    );
  }
}
