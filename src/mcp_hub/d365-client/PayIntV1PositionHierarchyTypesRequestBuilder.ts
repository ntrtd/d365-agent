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
import { PayIntV1PositionHierarchyTypes } from './PayIntV1PositionHierarchyTypes';

/**
 * Request builder class for operations supported on the {@link PayIntV1PositionHierarchyTypes} entity.
 */
export class PayIntV1PositionHierarchyTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1PositionHierarchyTypes<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1PositionHierarchyTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1PositionHierarchyTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1PositionHierarchyTypes<T>, T> {
    return new GetAllRequestBuilder<PayIntV1PositionHierarchyTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1PositionHierarchyTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1PositionHierarchyTypes`.
   */
  create(
    entity: PayIntV1PositionHierarchyTypes<T>
  ): CreateRequestBuilder<PayIntV1PositionHierarchyTypes<T>, T> {
    return new CreateRequestBuilder<PayIntV1PositionHierarchyTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1PositionHierarchyTypes` entity based on its keys.
   * @param name Key property. See {@link PayIntV1PositionHierarchyTypes.name}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1PositionHierarchyTypes` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1PositionHierarchyTypes<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1PositionHierarchyTypes<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1PositionHierarchyTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1PositionHierarchyTypes`.
   */
  update(
    entity: PayIntV1PositionHierarchyTypes<T>
  ): UpdateRequestBuilder<PayIntV1PositionHierarchyTypes<T>, T> {
    return new UpdateRequestBuilder<PayIntV1PositionHierarchyTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PositionHierarchyTypes`.
   * @param name Key property. See {@link PayIntV1PositionHierarchyTypes.name}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PositionHierarchyTypes`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<PayIntV1PositionHierarchyTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PositionHierarchyTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PositionHierarchyTypes` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1PositionHierarchyTypes<T>
  ): DeleteRequestBuilder<PayIntV1PositionHierarchyTypes<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<PayIntV1PositionHierarchyTypes<T>, T> {
    return new DeleteRequestBuilder<PayIntV1PositionHierarchyTypes<T>, T>(
      this.entityApi,
      nameOrEntity instanceof PayIntV1PositionHierarchyTypes
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
