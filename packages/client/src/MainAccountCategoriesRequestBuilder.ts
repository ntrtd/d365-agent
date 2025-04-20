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
import { MainAccountCategories } from './MainAccountCategories';

/**
 * Request builder class for operations supported on the {@link MainAccountCategories} entity.
 */
export class MainAccountCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MainAccountCategories<T>, T> {
  /**
   * Returns a request builder for querying all `MainAccountCategories` entities.
   * @returns A request builder for creating requests to retrieve all `MainAccountCategories` entities.
   */
  getAll(): GetAllRequestBuilder<MainAccountCategories<T>, T> {
    return new GetAllRequestBuilder<MainAccountCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MainAccountCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MainAccountCategories`.
   */
  create(
    entity: MainAccountCategories<T>
  ): CreateRequestBuilder<MainAccountCategories<T>, T> {
    return new CreateRequestBuilder<MainAccountCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MainAccountCategories` entity based on its keys.
   * @param referenceId Key property. See {@link MainAccountCategories.referenceId}.
   * @returns A request builder for creating requests to retrieve one `MainAccountCategories` entity based on its keys.
   */
  getByKey(
    referenceId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<MainAccountCategories<T>, T> {
    return new GetByKeyRequestBuilder<MainAccountCategories<T>, T>(
      this.entityApi,
      { ReferenceId: referenceId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MainAccountCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MainAccountCategories`.
   */
  update(
    entity: MainAccountCategories<T>
  ): UpdateRequestBuilder<MainAccountCategories<T>, T> {
    return new UpdateRequestBuilder<MainAccountCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MainAccountCategories`.
   * @param referenceId Key property. See {@link MainAccountCategories.referenceId}.
   * @returns A request builder for creating requests that delete an entity of type `MainAccountCategories`.
   */
  delete(
    referenceId: number
  ): DeleteRequestBuilder<MainAccountCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MainAccountCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MainAccountCategories` by taking the entity as a parameter.
   */
  delete(
    entity: MainAccountCategories<T>
  ): DeleteRequestBuilder<MainAccountCategories<T>, T>;
  delete(
    referenceIdOrEntity: any
  ): DeleteRequestBuilder<MainAccountCategories<T>, T> {
    return new DeleteRequestBuilder<MainAccountCategories<T>, T>(
      this.entityApi,
      referenceIdOrEntity instanceof MainAccountCategories
        ? referenceIdOrEntity
        : { ReferenceId: referenceIdOrEntity! }
    );
  }
}
