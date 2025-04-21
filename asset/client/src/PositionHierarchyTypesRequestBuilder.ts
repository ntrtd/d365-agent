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
import { PositionHierarchyTypes } from './PositionHierarchyTypes';

/**
 * Request builder class for operations supported on the {@link PositionHierarchyTypes} entity.
 */
export class PositionHierarchyTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionHierarchyTypes<T>, T> {
  /**
   * Returns a request builder for querying all `PositionHierarchyTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PositionHierarchyTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PositionHierarchyTypes<T>, T> {
    return new GetAllRequestBuilder<PositionHierarchyTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PositionHierarchyTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionHierarchyTypes`.
   */
  create(
    entity: PositionHierarchyTypes<T>
  ): CreateRequestBuilder<PositionHierarchyTypes<T>, T> {
    return new CreateRequestBuilder<PositionHierarchyTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionHierarchyTypes` entity based on its keys.
   * @param name Key property. See {@link PositionHierarchyTypes.name}.
   * @returns A request builder for creating requests to retrieve one `PositionHierarchyTypes` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PositionHierarchyTypes<T>, T> {
    return new GetByKeyRequestBuilder<PositionHierarchyTypes<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PositionHierarchyTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionHierarchyTypes`.
   */
  update(
    entity: PositionHierarchyTypes<T>
  ): UpdateRequestBuilder<PositionHierarchyTypes<T>, T> {
    return new UpdateRequestBuilder<PositionHierarchyTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionHierarchyTypes`.
   * @param name Key property. See {@link PositionHierarchyTypes.name}.
   * @returns A request builder for creating requests that delete an entity of type `PositionHierarchyTypes`.
   */
  delete(name: string): DeleteRequestBuilder<PositionHierarchyTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionHierarchyTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionHierarchyTypes` by taking the entity as a parameter.
   */
  delete(
    entity: PositionHierarchyTypes<T>
  ): DeleteRequestBuilder<PositionHierarchyTypes<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<PositionHierarchyTypes<T>, T> {
    return new DeleteRequestBuilder<PositionHierarchyTypes<T>, T>(
      this.entityApi,
      nameOrEntity instanceof PositionHierarchyTypes
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
