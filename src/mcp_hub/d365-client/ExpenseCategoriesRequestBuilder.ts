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
import { ExpenseCategories } from './ExpenseCategories';

/**
 * Request builder class for operations supported on the {@link ExpenseCategories} entity.
 */
export class ExpenseCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseCategories<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseCategories` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseCategories` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseCategories<T>, T> {
    return new GetAllRequestBuilder<ExpenseCategories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpenseCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseCategories`.
   */
  create(
    entity: ExpenseCategories<T>
  ): CreateRequestBuilder<ExpenseCategories<T>, T> {
    return new CreateRequestBuilder<ExpenseCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseCategories` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpenseCategories.dataAreaId}.
   * @param expenseCategory Key property. See {@link ExpenseCategories.expenseCategory}.
   * @returns A request builder for creating requests to retrieve one `ExpenseCategories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    expenseCategory: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseCategories<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseCategories<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ExpenseCategory: expenseCategory
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseCategories`.
   */
  update(
    entity: ExpenseCategories<T>
  ): UpdateRequestBuilder<ExpenseCategories<T>, T> {
    return new UpdateRequestBuilder<ExpenseCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseCategories`.
   * @param dataAreaId Key property. See {@link ExpenseCategories.dataAreaId}.
   * @param expenseCategory Key property. See {@link ExpenseCategories.expenseCategory}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseCategories`.
   */
  delete(
    dataAreaId: string,
    expenseCategory: string
  ): DeleteRequestBuilder<ExpenseCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseCategories` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseCategories<T>
  ): DeleteRequestBuilder<ExpenseCategories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    expenseCategory?: string
  ): DeleteRequestBuilder<ExpenseCategories<T>, T> {
    return new DeleteRequestBuilder<ExpenseCategories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpenseCategories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExpenseCategory: expenseCategory!
          }
    );
  }
}
