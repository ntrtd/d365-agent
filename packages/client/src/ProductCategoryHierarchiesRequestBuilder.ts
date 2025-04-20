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
import { ProductCategoryHierarchies } from './ProductCategoryHierarchies';

/**
 * Request builder class for operations supported on the {@link ProductCategoryHierarchies} entity.
 */
export class ProductCategoryHierarchiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductCategoryHierarchies<T>, T> {
  /**
   * Returns a request builder for querying all `ProductCategoryHierarchies` entities.
   * @returns A request builder for creating requests to retrieve all `ProductCategoryHierarchies` entities.
   */
  getAll(): GetAllRequestBuilder<ProductCategoryHierarchies<T>, T> {
    return new GetAllRequestBuilder<ProductCategoryHierarchies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductCategoryHierarchies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductCategoryHierarchies`.
   */
  create(
    entity: ProductCategoryHierarchies<T>
  ): CreateRequestBuilder<ProductCategoryHierarchies<T>, T> {
    return new CreateRequestBuilder<ProductCategoryHierarchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductCategoryHierarchies` entity based on its keys.
   * @param hierarchyName Key property. See {@link ProductCategoryHierarchies.hierarchyName}.
   * @returns A request builder for creating requests to retrieve one `ProductCategoryHierarchies` entity based on its keys.
   */
  getByKey(
    hierarchyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductCategoryHierarchies<T>, T> {
    return new GetByKeyRequestBuilder<ProductCategoryHierarchies<T>, T>(
      this.entityApi,
      { HierarchyName: hierarchyName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductCategoryHierarchies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductCategoryHierarchies`.
   */
  update(
    entity: ProductCategoryHierarchies<T>
  ): UpdateRequestBuilder<ProductCategoryHierarchies<T>, T> {
    return new UpdateRequestBuilder<ProductCategoryHierarchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductCategoryHierarchies`.
   * @param hierarchyName Key property. See {@link ProductCategoryHierarchies.hierarchyName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductCategoryHierarchies`.
   */
  delete(
    hierarchyName: string
  ): DeleteRequestBuilder<ProductCategoryHierarchies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductCategoryHierarchies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductCategoryHierarchies` by taking the entity as a parameter.
   */
  delete(
    entity: ProductCategoryHierarchies<T>
  ): DeleteRequestBuilder<ProductCategoryHierarchies<T>, T>;
  delete(
    hierarchyNameOrEntity: any
  ): DeleteRequestBuilder<ProductCategoryHierarchies<T>, T> {
    return new DeleteRequestBuilder<ProductCategoryHierarchies<T>, T>(
      this.entityApi,
      hierarchyNameOrEntity instanceof ProductCategoryHierarchies
        ? hierarchyNameOrEntity
        : { HierarchyName: hierarchyNameOrEntity! }
    );
  }
}
