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
import { EngineeringChangeCategories } from './EngineeringChangeCategories';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeCategories} entity.
 */
export class EngineeringChangeCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeCategories<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeCategories` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeCategories` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeCategories<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeCategories`.
   */
  create(
    entity: EngineeringChangeCategories<T>
  ): CreateRequestBuilder<EngineeringChangeCategories<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeCategories` entity based on its keys.
   * @param categoryName Key property. See {@link EngineeringChangeCategories.categoryName}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeCategories` entity based on its keys.
   */
  getByKey(
    categoryName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeCategories<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangeCategories<T>, T>(
      this.entityApi,
      { CategoryName: categoryName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeCategories`.
   */
  update(
    entity: EngineeringChangeCategories<T>
  ): UpdateRequestBuilder<EngineeringChangeCategories<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeCategories`.
   * @param categoryName Key property. See {@link EngineeringChangeCategories.categoryName}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeCategories`.
   */
  delete(
    categoryName: string
  ): DeleteRequestBuilder<EngineeringChangeCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeCategories` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeCategories<T>
  ): DeleteRequestBuilder<EngineeringChangeCategories<T>, T>;
  delete(
    categoryNameOrEntity: any
  ): DeleteRequestBuilder<EngineeringChangeCategories<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeCategories<T>, T>(
      this.entityApi,
      categoryNameOrEntity instanceof EngineeringChangeCategories
        ? categoryNameOrEntity
        : { CategoryName: categoryNameOrEntity! }
    );
  }
}
