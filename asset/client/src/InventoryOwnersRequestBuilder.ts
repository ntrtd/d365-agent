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
import { InventoryOwners } from './InventoryOwners';

/**
 * Request builder class for operations supported on the {@link InventoryOwners} entity.
 */
export class InventoryOwnersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryOwners<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryOwners` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryOwners` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryOwners<T>, T> {
    return new GetAllRequestBuilder<InventoryOwners<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryOwners` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryOwners`.
   */
  create(
    entity: InventoryOwners<T>
  ): CreateRequestBuilder<InventoryOwners<T>, T> {
    return new CreateRequestBuilder<InventoryOwners<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryOwners` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryOwners.dataAreaId}.
   * @param inventoryOwnerId Key property. See {@link InventoryOwners.inventoryOwnerId}.
   * @returns A request builder for creating requests to retrieve one `InventoryOwners` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryOwnerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryOwners<T>, T> {
    return new GetByKeyRequestBuilder<InventoryOwners<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      InventoryOwnerId: inventoryOwnerId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryOwners`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryOwners`.
   */
  update(
    entity: InventoryOwners<T>
  ): UpdateRequestBuilder<InventoryOwners<T>, T> {
    return new UpdateRequestBuilder<InventoryOwners<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryOwners`.
   * @param dataAreaId Key property. See {@link InventoryOwners.dataAreaId}.
   * @param inventoryOwnerId Key property. See {@link InventoryOwners.inventoryOwnerId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryOwners`.
   */
  delete(
    dataAreaId: string,
    inventoryOwnerId: string
  ): DeleteRequestBuilder<InventoryOwners<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryOwners`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryOwners` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryOwners<T>
  ): DeleteRequestBuilder<InventoryOwners<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryOwnerId?: string
  ): DeleteRequestBuilder<InventoryOwners<T>, T> {
    return new DeleteRequestBuilder<InventoryOwners<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryOwners
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryOwnerId: inventoryOwnerId!
          }
    );
  }
}
