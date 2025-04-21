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
import { RetailProductHierarchyCategories } from './RetailProductHierarchyCategories';

/**
 * Request builder class for operations supported on the {@link RetailProductHierarchyCategories} entity.
 */
export class RetailProductHierarchyCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailProductHierarchyCategories<T>, T> {
  /**
   * Returns a request builder for querying all `RetailProductHierarchyCategories` entities.
   * @returns A request builder for creating requests to retrieve all `RetailProductHierarchyCategories` entities.
   */
  getAll(): GetAllRequestBuilder<RetailProductHierarchyCategories<T>, T> {
    return new GetAllRequestBuilder<RetailProductHierarchyCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailProductHierarchyCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailProductHierarchyCategories`.
   */
  create(
    entity: RetailProductHierarchyCategories<T>
  ): CreateRequestBuilder<RetailProductHierarchyCategories<T>, T> {
    return new CreateRequestBuilder<RetailProductHierarchyCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailProductHierarchyCategories` entity based on its keys.
   * @param categoryName Key property. See {@link RetailProductHierarchyCategories.categoryName}.
   * @param categoryHierarchyName Key property. See {@link RetailProductHierarchyCategories.categoryHierarchyName}.
   * @returns A request builder for creating requests to retrieve one `RetailProductHierarchyCategories` entity based on its keys.
   */
  getByKey(
    categoryName: DeserializedType<T, 'Edm.String'>,
    categoryHierarchyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailProductHierarchyCategories<T>, T> {
    return new GetByKeyRequestBuilder<RetailProductHierarchyCategories<T>, T>(
      this.entityApi,
      {
        CategoryName: categoryName,
        CategoryHierarchyName: categoryHierarchyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailProductHierarchyCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailProductHierarchyCategories`.
   */
  update(
    entity: RetailProductHierarchyCategories<T>
  ): UpdateRequestBuilder<RetailProductHierarchyCategories<T>, T> {
    return new UpdateRequestBuilder<RetailProductHierarchyCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailProductHierarchyCategories`.
   * @param categoryName Key property. See {@link RetailProductHierarchyCategories.categoryName}.
   * @param categoryHierarchyName Key property. See {@link RetailProductHierarchyCategories.categoryHierarchyName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailProductHierarchyCategories`.
   */
  delete(
    categoryName: string,
    categoryHierarchyName: string
  ): DeleteRequestBuilder<RetailProductHierarchyCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailProductHierarchyCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailProductHierarchyCategories` by taking the entity as a parameter.
   */
  delete(
    entity: RetailProductHierarchyCategories<T>
  ): DeleteRequestBuilder<RetailProductHierarchyCategories<T>, T>;
  delete(
    categoryNameOrEntity: any,
    categoryHierarchyName?: string
  ): DeleteRequestBuilder<RetailProductHierarchyCategories<T>, T> {
    return new DeleteRequestBuilder<RetailProductHierarchyCategories<T>, T>(
      this.entityApi,
      categoryNameOrEntity instanceof RetailProductHierarchyCategories
        ? categoryNameOrEntity
        : {
            CategoryName: categoryNameOrEntity!,
            CategoryHierarchyName: categoryHierarchyName!
          }
    );
  }
}
