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
import { RetailEcoResCategoryHierarchy } from './RetailEcoResCategoryHierarchy';

/**
 * Request builder class for operations supported on the {@link RetailEcoResCategoryHierarchy} entity.
 */
export class RetailEcoResCategoryHierarchyRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEcoResCategoryHierarchy<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEcoResCategoryHierarchy` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEcoResCategoryHierarchy` entities.
   */
  getAll(): GetAllRequestBuilder<RetailEcoResCategoryHierarchy<T>, T> {
    return new GetAllRequestBuilder<RetailEcoResCategoryHierarchy<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailEcoResCategoryHierarchy` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEcoResCategoryHierarchy`.
   */
  create(
    entity: RetailEcoResCategoryHierarchy<T>
  ): CreateRequestBuilder<RetailEcoResCategoryHierarchy<T>, T> {
    return new CreateRequestBuilder<RetailEcoResCategoryHierarchy<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailEcoResCategoryHierarchy` entity based on its keys.
   * @param name Key property. See {@link RetailEcoResCategoryHierarchy.name}.
   * @returns A request builder for creating requests to retrieve one `RetailEcoResCategoryHierarchy` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailEcoResCategoryHierarchy<T>, T> {
    return new GetByKeyRequestBuilder<RetailEcoResCategoryHierarchy<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEcoResCategoryHierarchy`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEcoResCategoryHierarchy`.
   */
  update(
    entity: RetailEcoResCategoryHierarchy<T>
  ): UpdateRequestBuilder<RetailEcoResCategoryHierarchy<T>, T> {
    return new UpdateRequestBuilder<RetailEcoResCategoryHierarchy<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEcoResCategoryHierarchy`.
   * @param name Key property. See {@link RetailEcoResCategoryHierarchy.name}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEcoResCategoryHierarchy`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<RetailEcoResCategoryHierarchy<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEcoResCategoryHierarchy`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEcoResCategoryHierarchy` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEcoResCategoryHierarchy<T>
  ): DeleteRequestBuilder<RetailEcoResCategoryHierarchy<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<RetailEcoResCategoryHierarchy<T>, T> {
    return new DeleteRequestBuilder<RetailEcoResCategoryHierarchy<T>, T>(
      this.entityApi,
      nameOrEntity instanceof RetailEcoResCategoryHierarchy
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
