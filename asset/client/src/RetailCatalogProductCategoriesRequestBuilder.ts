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
import { RetailCatalogProductCategories } from './RetailCatalogProductCategories';

/**
 * Request builder class for operations supported on the {@link RetailCatalogProductCategories} entity.
 */
export class RetailCatalogProductCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCatalogProductCategories<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCatalogProductCategories` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCatalogProductCategories` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCatalogProductCategories<T>, T> {
    return new GetAllRequestBuilder<RetailCatalogProductCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailCatalogProductCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCatalogProductCategories`.
   */
  create(
    entity: RetailCatalogProductCategories<T>
  ): CreateRequestBuilder<RetailCatalogProductCategories<T>, T> {
    return new CreateRequestBuilder<RetailCatalogProductCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCatalogProductCategories` entity based on its keys.
   * @param catalogNumber Key property. See {@link RetailCatalogProductCategories.catalogNumber}.
   * @param displayProductNumber Key property. See {@link RetailCatalogProductCategories.displayProductNumber}.
   * @param categoryName Key property. See {@link RetailCatalogProductCategories.categoryName}.
   * @param categoryHierarchyName Key property. See {@link RetailCatalogProductCategories.categoryHierarchyName}.
   * @returns A request builder for creating requests to retrieve one `RetailCatalogProductCategories` entity based on its keys.
   */
  getByKey(
    catalogNumber: DeserializedType<T, 'Edm.String'>,
    displayProductNumber: DeserializedType<T, 'Edm.String'>,
    categoryName: DeserializedType<T, 'Edm.String'>,
    categoryHierarchyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailCatalogProductCategories<T>, T> {
    return new GetByKeyRequestBuilder<RetailCatalogProductCategories<T>, T>(
      this.entityApi,
      {
        CatalogNumber: catalogNumber,
        DisplayProductNumber: displayProductNumber,
        CategoryName: categoryName,
        CategoryHierarchyName: categoryHierarchyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCatalogProductCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCatalogProductCategories`.
   */
  update(
    entity: RetailCatalogProductCategories<T>
  ): UpdateRequestBuilder<RetailCatalogProductCategories<T>, T> {
    return new UpdateRequestBuilder<RetailCatalogProductCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogProductCategories`.
   * @param catalogNumber Key property. See {@link RetailCatalogProductCategories.catalogNumber}.
   * @param displayProductNumber Key property. See {@link RetailCatalogProductCategories.displayProductNumber}.
   * @param categoryName Key property. See {@link RetailCatalogProductCategories.categoryName}.
   * @param categoryHierarchyName Key property. See {@link RetailCatalogProductCategories.categoryHierarchyName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogProductCategories`.
   */
  delete(
    catalogNumber: string,
    displayProductNumber: string,
    categoryName: string,
    categoryHierarchyName: string
  ): DeleteRequestBuilder<RetailCatalogProductCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogProductCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogProductCategories` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCatalogProductCategories<T>
  ): DeleteRequestBuilder<RetailCatalogProductCategories<T>, T>;
  delete(
    catalogNumberOrEntity: any,
    displayProductNumber?: string,
    categoryName?: string,
    categoryHierarchyName?: string
  ): DeleteRequestBuilder<RetailCatalogProductCategories<T>, T> {
    return new DeleteRequestBuilder<RetailCatalogProductCategories<T>, T>(
      this.entityApi,
      catalogNumberOrEntity instanceof RetailCatalogProductCategories
        ? catalogNumberOrEntity
        : {
            CatalogNumber: catalogNumberOrEntity!,
            DisplayProductNumber: displayProductNumber!,
            CategoryName: categoryName!,
            CategoryHierarchyName: categoryHierarchyName!
          }
    );
  }
}
