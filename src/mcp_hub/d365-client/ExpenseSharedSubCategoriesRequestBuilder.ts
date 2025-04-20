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
import { ExpenseSharedSubCategories } from './ExpenseSharedSubCategories';

/**
 * Request builder class for operations supported on the {@link ExpenseSharedSubCategories} entity.
 */
export class ExpenseSharedSubCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseSharedSubCategories<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseSharedSubCategories` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseSharedSubCategories` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseSharedSubCategories<T>, T> {
    return new GetAllRequestBuilder<ExpenseSharedSubCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpenseSharedSubCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseSharedSubCategories`.
   */
  create(
    entity: ExpenseSharedSubCategories<T>
  ): CreateRequestBuilder<ExpenseSharedSubCategories<T>, T> {
    return new CreateRequestBuilder<ExpenseSharedSubCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseSharedSubCategories` entity based on its keys.
   * @param name Key property. See {@link ExpenseSharedSubCategories.name}.
   * @param sharedCategoryId Key property. See {@link ExpenseSharedSubCategories.sharedCategoryId}.
   * @returns A request builder for creating requests to retrieve one `ExpenseSharedSubCategories` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    sharedCategoryId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseSharedSubCategories<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseSharedSubCategories<T>, T>(
      this.entityApi,
      {
        Name: name,
        SharedCategoryId: sharedCategoryId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseSharedSubCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseSharedSubCategories`.
   */
  update(
    entity: ExpenseSharedSubCategories<T>
  ): UpdateRequestBuilder<ExpenseSharedSubCategories<T>, T> {
    return new UpdateRequestBuilder<ExpenseSharedSubCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseSharedSubCategories`.
   * @param name Key property. See {@link ExpenseSharedSubCategories.name}.
   * @param sharedCategoryId Key property. See {@link ExpenseSharedSubCategories.sharedCategoryId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseSharedSubCategories`.
   */
  delete(
    name: string,
    sharedCategoryId: string
  ): DeleteRequestBuilder<ExpenseSharedSubCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseSharedSubCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseSharedSubCategories` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseSharedSubCategories<T>
  ): DeleteRequestBuilder<ExpenseSharedSubCategories<T>, T>;
  delete(
    nameOrEntity: any,
    sharedCategoryId?: string
  ): DeleteRequestBuilder<ExpenseSharedSubCategories<T>, T> {
    return new DeleteRequestBuilder<ExpenseSharedSubCategories<T>, T>(
      this.entityApi,
      nameOrEntity instanceof ExpenseSharedSubCategories
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            SharedCategoryId: sharedCategoryId!
          }
    );
  }
}
