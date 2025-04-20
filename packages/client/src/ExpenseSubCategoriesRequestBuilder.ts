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
import { ExpenseSubCategories } from './ExpenseSubCategories';

/**
 * Request builder class for operations supported on the {@link ExpenseSubCategories} entity.
 */
export class ExpenseSubCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseSubCategories<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseSubCategories` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseSubCategories` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseSubCategories<T>, T> {
    return new GetAllRequestBuilder<ExpenseSubCategories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpenseSubCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseSubCategories`.
   */
  create(
    entity: ExpenseSubCategories<T>
  ): CreateRequestBuilder<ExpenseSubCategories<T>, T> {
    return new CreateRequestBuilder<ExpenseSubCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseSubCategories` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpenseSubCategories.dataAreaId}.
   * @param expenseCategory Key property. See {@link ExpenseSubCategories.expenseCategory}.
   * @param sharedSubCategoryName Key property. See {@link ExpenseSubCategories.sharedSubCategoryName}.
   * @returns A request builder for creating requests to retrieve one `ExpenseSubCategories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    expenseCategory: DeserializedType<T, 'Edm.String'>,
    sharedSubCategoryName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseSubCategories<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseSubCategories<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ExpenseCategory: expenseCategory,
        SharedSubCategoryName: sharedSubCategoryName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseSubCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseSubCategories`.
   */
  update(
    entity: ExpenseSubCategories<T>
  ): UpdateRequestBuilder<ExpenseSubCategories<T>, T> {
    return new UpdateRequestBuilder<ExpenseSubCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseSubCategories`.
   * @param dataAreaId Key property. See {@link ExpenseSubCategories.dataAreaId}.
   * @param expenseCategory Key property. See {@link ExpenseSubCategories.expenseCategory}.
   * @param sharedSubCategoryName Key property. See {@link ExpenseSubCategories.sharedSubCategoryName}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseSubCategories`.
   */
  delete(
    dataAreaId: string,
    expenseCategory: string,
    sharedSubCategoryName: string
  ): DeleteRequestBuilder<ExpenseSubCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseSubCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseSubCategories` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseSubCategories<T>
  ): DeleteRequestBuilder<ExpenseSubCategories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    expenseCategory?: string,
    sharedSubCategoryName?: string
  ): DeleteRequestBuilder<ExpenseSubCategories<T>, T> {
    return new DeleteRequestBuilder<ExpenseSubCategories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpenseSubCategories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExpenseCategory: expenseCategory!,
            SharedSubCategoryName: sharedSubCategoryName!
          }
    );
  }
}
