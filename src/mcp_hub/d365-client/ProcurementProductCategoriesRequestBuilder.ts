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
import { ProcurementProductCategories } from './ProcurementProductCategories';

/**
 * Request builder class for operations supported on the {@link ProcurementProductCategories} entity.
 */
export class ProcurementProductCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcurementProductCategories<T>, T> {
  /**
   * Returns a request builder for querying all `ProcurementProductCategories` entities.
   * @returns A request builder for creating requests to retrieve all `ProcurementProductCategories` entities.
   */
  getAll(): GetAllRequestBuilder<ProcurementProductCategories<T>, T> {
    return new GetAllRequestBuilder<ProcurementProductCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProcurementProductCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcurementProductCategories`.
   */
  create(
    entity: ProcurementProductCategories<T>
  ): CreateRequestBuilder<ProcurementProductCategories<T>, T> {
    return new CreateRequestBuilder<ProcurementProductCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcurementProductCategories` entity based on its keys.
   * @param categoryName Key property. See {@link ProcurementProductCategories.categoryName}.
   * @param categoryHierarchyName Key property. See {@link ProcurementProductCategories.categoryHierarchyName}.
   * @returns A request builder for creating requests to retrieve one `ProcurementProductCategories` entity based on its keys.
   */
  getByKey(
    categoryName: DeserializedType<T, 'Edm.String'>,
    categoryHierarchyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcurementProductCategories<T>, T> {
    return new GetByKeyRequestBuilder<ProcurementProductCategories<T>, T>(
      this.entityApi,
      {
        CategoryName: categoryName,
        CategoryHierarchyName: categoryHierarchyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProcurementProductCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcurementProductCategories`.
   */
  update(
    entity: ProcurementProductCategories<T>
  ): UpdateRequestBuilder<ProcurementProductCategories<T>, T> {
    return new UpdateRequestBuilder<ProcurementProductCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcurementProductCategories`.
   * @param categoryName Key property. See {@link ProcurementProductCategories.categoryName}.
   * @param categoryHierarchyName Key property. See {@link ProcurementProductCategories.categoryHierarchyName}.
   * @returns A request builder for creating requests that delete an entity of type `ProcurementProductCategories`.
   */
  delete(
    categoryName: string,
    categoryHierarchyName: string
  ): DeleteRequestBuilder<ProcurementProductCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcurementProductCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcurementProductCategories` by taking the entity as a parameter.
   */
  delete(
    entity: ProcurementProductCategories<T>
  ): DeleteRequestBuilder<ProcurementProductCategories<T>, T>;
  delete(
    categoryNameOrEntity: any,
    categoryHierarchyName?: string
  ): DeleteRequestBuilder<ProcurementProductCategories<T>, T> {
    return new DeleteRequestBuilder<ProcurementProductCategories<T>, T>(
      this.entityApi,
      categoryNameOrEntity instanceof ProcurementProductCategories
        ? categoryNameOrEntity
        : {
            CategoryName: categoryNameOrEntity!,
            CategoryHierarchyName: categoryHierarchyName!
          }
    );
  }
}
