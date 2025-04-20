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
import { InventoryReservationHierarchies } from './InventoryReservationHierarchies';

/**
 * Request builder class for operations supported on the {@link InventoryReservationHierarchies} entity.
 */
export class InventoryReservationHierarchiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryReservationHierarchies<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryReservationHierarchies` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryReservationHierarchies` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryReservationHierarchies<T>, T> {
    return new GetAllRequestBuilder<InventoryReservationHierarchies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryReservationHierarchies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryReservationHierarchies`.
   */
  create(
    entity: InventoryReservationHierarchies<T>
  ): CreateRequestBuilder<InventoryReservationHierarchies<T>, T> {
    return new CreateRequestBuilder<InventoryReservationHierarchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryReservationHierarchies` entity based on its keys.
   * @param hierarchyName Key property. See {@link InventoryReservationHierarchies.hierarchyName}.
   * @returns A request builder for creating requests to retrieve one `InventoryReservationHierarchies` entity based on its keys.
   */
  getByKey(
    hierarchyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryReservationHierarchies<T>, T> {
    return new GetByKeyRequestBuilder<InventoryReservationHierarchies<T>, T>(
      this.entityApi,
      { HierarchyName: hierarchyName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryReservationHierarchies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryReservationHierarchies`.
   */
  update(
    entity: InventoryReservationHierarchies<T>
  ): UpdateRequestBuilder<InventoryReservationHierarchies<T>, T> {
    return new UpdateRequestBuilder<InventoryReservationHierarchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryReservationHierarchies`.
   * @param hierarchyName Key property. See {@link InventoryReservationHierarchies.hierarchyName}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryReservationHierarchies`.
   */
  delete(
    hierarchyName: string
  ): DeleteRequestBuilder<InventoryReservationHierarchies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryReservationHierarchies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryReservationHierarchies` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryReservationHierarchies<T>
  ): DeleteRequestBuilder<InventoryReservationHierarchies<T>, T>;
  delete(
    hierarchyNameOrEntity: any
  ): DeleteRequestBuilder<InventoryReservationHierarchies<T>, T> {
    return new DeleteRequestBuilder<InventoryReservationHierarchies<T>, T>(
      this.entityApi,
      hierarchyNameOrEntity instanceof InventoryReservationHierarchies
        ? hierarchyNameOrEntity
        : { HierarchyName: hierarchyNameOrEntity! }
    );
  }
}
