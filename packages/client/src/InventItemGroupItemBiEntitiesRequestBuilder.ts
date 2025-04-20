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
import { InventItemGroupItemBiEntities } from './InventItemGroupItemBiEntities';

/**
 * Request builder class for operations supported on the {@link InventItemGroupItemBiEntities} entity.
 */
export class InventItemGroupItemBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventItemGroupItemBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventItemGroupItemBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventItemGroupItemBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventItemGroupItemBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventItemGroupItemBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventItemGroupItemBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventItemGroupItemBiEntities`.
   */
  create(
    entity: InventItemGroupItemBiEntities<T>
  ): CreateRequestBuilder<InventItemGroupItemBiEntities<T>, T> {
    return new CreateRequestBuilder<InventItemGroupItemBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventItemGroupItemBiEntities` entity based on its keys.
   * @param itemId Key property. See {@link InventItemGroupItemBiEntities.itemId}.
   * @param itemDataAreaId Key property. See {@link InventItemGroupItemBiEntities.itemDataAreaId}.
   * @returns A request builder for creating requests to retrieve one `InventItemGroupItemBiEntities` entity based on its keys.
   */
  getByKey(
    itemId: DeserializedType<T, 'Edm.String'>,
    itemDataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventItemGroupItemBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventItemGroupItemBiEntities<T>, T>(
      this.entityApi,
      {
        ItemId: itemId,
        ItemDataAreaId: itemDataAreaId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventItemGroupItemBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventItemGroupItemBiEntities`.
   */
  update(
    entity: InventItemGroupItemBiEntities<T>
  ): UpdateRequestBuilder<InventItemGroupItemBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventItemGroupItemBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventItemGroupItemBiEntities`.
   * @param itemId Key property. See {@link InventItemGroupItemBiEntities.itemId}.
   * @param itemDataAreaId Key property. See {@link InventItemGroupItemBiEntities.itemDataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `InventItemGroupItemBiEntities`.
   */
  delete(
    itemId: string,
    itemDataAreaId: string
  ): DeleteRequestBuilder<InventItemGroupItemBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventItemGroupItemBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventItemGroupItemBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventItemGroupItemBiEntities<T>
  ): DeleteRequestBuilder<InventItemGroupItemBiEntities<T>, T>;
  delete(
    itemIdOrEntity: any,
    itemDataAreaId?: string
  ): DeleteRequestBuilder<InventItemGroupItemBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventItemGroupItemBiEntities<T>, T>(
      this.entityApi,
      itemIdOrEntity instanceof InventItemGroupItemBiEntities
        ? itemIdOrEntity
        : {
            ItemId: itemIdOrEntity!,
            ItemDataAreaId: itemDataAreaId!
          }
    );
  }
}
