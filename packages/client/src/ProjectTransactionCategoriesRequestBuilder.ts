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
import { ProjectTransactionCategories } from './ProjectTransactionCategories';

/**
 * Request builder class for operations supported on the {@link ProjectTransactionCategories} entity.
 */
export class ProjectTransactionCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectTransactionCategories<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectTransactionCategories` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectTransactionCategories` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectTransactionCategories<T>, T> {
    return new GetAllRequestBuilder<ProjectTransactionCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectTransactionCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectTransactionCategories`.
   */
  create(
    entity: ProjectTransactionCategories<T>
  ): CreateRequestBuilder<ProjectTransactionCategories<T>, T> {
    return new CreateRequestBuilder<ProjectTransactionCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectTransactionCategories` entity based on its keys.
   * @param categoryId Key property. See {@link ProjectTransactionCategories.categoryId}.
   * @returns A request builder for creating requests to retrieve one `ProjectTransactionCategories` entity based on its keys.
   */
  getByKey(
    categoryId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectTransactionCategories<T>, T> {
    return new GetByKeyRequestBuilder<ProjectTransactionCategories<T>, T>(
      this.entityApi,
      { CategoryId: categoryId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectTransactionCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectTransactionCategories`.
   */
  update(
    entity: ProjectTransactionCategories<T>
  ): UpdateRequestBuilder<ProjectTransactionCategories<T>, T> {
    return new UpdateRequestBuilder<ProjectTransactionCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectTransactionCategories`.
   * @param categoryId Key property. See {@link ProjectTransactionCategories.categoryId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectTransactionCategories`.
   */
  delete(
    categoryId: string
  ): DeleteRequestBuilder<ProjectTransactionCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectTransactionCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectTransactionCategories` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectTransactionCategories<T>
  ): DeleteRequestBuilder<ProjectTransactionCategories<T>, T>;
  delete(
    categoryIdOrEntity: any
  ): DeleteRequestBuilder<ProjectTransactionCategories<T>, T> {
    return new DeleteRequestBuilder<ProjectTransactionCategories<T>, T>(
      this.entityApi,
      categoryIdOrEntity instanceof ProjectTransactionCategories
        ? categoryIdOrEntity
        : { CategoryId: categoryIdOrEntity! }
    );
  }
}
