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
import { SharedCategories } from './SharedCategories';

/**
 * Request builder class for operations supported on the {@link SharedCategories} entity.
 */
export class SharedCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SharedCategories<T>, T> {
  /**
   * Returns a request builder for querying all `SharedCategories` entities.
   * @returns A request builder for creating requests to retrieve all `SharedCategories` entities.
   */
  getAll(): GetAllRequestBuilder<SharedCategories<T>, T> {
    return new GetAllRequestBuilder<SharedCategories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SharedCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SharedCategories`.
   */
  create(
    entity: SharedCategories<T>
  ): CreateRequestBuilder<SharedCategories<T>, T> {
    return new CreateRequestBuilder<SharedCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SharedCategories` entity based on its keys.
   * @param categoryId Key property. See {@link SharedCategories.categoryId}.
   * @returns A request builder for creating requests to retrieve one `SharedCategories` entity based on its keys.
   */
  getByKey(
    categoryId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SharedCategories<T>, T> {
    return new GetByKeyRequestBuilder<SharedCategories<T>, T>(this.entityApi, {
      CategoryId: categoryId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SharedCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SharedCategories`.
   */
  update(
    entity: SharedCategories<T>
  ): UpdateRequestBuilder<SharedCategories<T>, T> {
    return new UpdateRequestBuilder<SharedCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SharedCategories`.
   * @param categoryId Key property. See {@link SharedCategories.categoryId}.
   * @returns A request builder for creating requests that delete an entity of type `SharedCategories`.
   */
  delete(categoryId: string): DeleteRequestBuilder<SharedCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SharedCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SharedCategories` by taking the entity as a parameter.
   */
  delete(
    entity: SharedCategories<T>
  ): DeleteRequestBuilder<SharedCategories<T>, T>;
  delete(
    categoryIdOrEntity: any
  ): DeleteRequestBuilder<SharedCategories<T>, T> {
    return new DeleteRequestBuilder<SharedCategories<T>, T>(
      this.entityApi,
      categoryIdOrEntity instanceof SharedCategories
        ? categoryIdOrEntity
        : { CategoryId: categoryIdOrEntity! }
    );
  }
}
