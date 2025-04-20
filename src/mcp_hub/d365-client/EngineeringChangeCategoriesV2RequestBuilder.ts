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
import { EngineeringChangeCategoriesV2 } from './EngineeringChangeCategoriesV2';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeCategoriesV2} entity.
 */
export class EngineeringChangeCategoriesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeCategoriesV2<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeCategoriesV2` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeCategoriesV2` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeCategoriesV2<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeCategoriesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeCategoriesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeCategoriesV2`.
   */
  create(
    entity: EngineeringChangeCategoriesV2<T>
  ): CreateRequestBuilder<EngineeringChangeCategoriesV2<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeCategoriesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeCategoriesV2` entity based on its keys.
   * @param categoryName Key property. See {@link EngineeringChangeCategoriesV2.categoryName}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeCategoriesV2` entity based on its keys.
   */
  getByKey(
    categoryName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeCategoriesV2<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangeCategoriesV2<T>, T>(
      this.entityApi,
      { CategoryName: categoryName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeCategoriesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeCategoriesV2`.
   */
  update(
    entity: EngineeringChangeCategoriesV2<T>
  ): UpdateRequestBuilder<EngineeringChangeCategoriesV2<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeCategoriesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeCategoriesV2`.
   * @param categoryName Key property. See {@link EngineeringChangeCategoriesV2.categoryName}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeCategoriesV2`.
   */
  delete(
    categoryName: string
  ): DeleteRequestBuilder<EngineeringChangeCategoriesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeCategoriesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeCategoriesV2` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeCategoriesV2<T>
  ): DeleteRequestBuilder<EngineeringChangeCategoriesV2<T>, T>;
  delete(
    categoryNameOrEntity: any
  ): DeleteRequestBuilder<EngineeringChangeCategoriesV2<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeCategoriesV2<T>, T>(
      this.entityApi,
      categoryNameOrEntity instanceof EngineeringChangeCategoriesV2
        ? categoryNameOrEntity
        : { CategoryName: categoryNameOrEntity! }
    );
  }
}
