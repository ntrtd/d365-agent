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
import { InventTableBiEntities } from './InventTableBiEntities';

/**
 * Request builder class for operations supported on the {@link InventTableBiEntities} entity.
 */
export class InventTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventTableBiEntities`.
   */
  create(
    entity: InventTableBiEntities<T>
  ): CreateRequestBuilder<InventTableBiEntities<T>, T> {
    return new CreateRequestBuilder<InventTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventTableBiEntities.dataAreaId}.
   * @param itemId Key property. See {@link InventTableBiEntities.itemId}.
   * @returns A request builder for creating requests to retrieve one `InventTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventTableBiEntities`.
   */
  update(
    entity: InventTableBiEntities<T>
  ): UpdateRequestBuilder<InventTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventTableBiEntities`.
   * @param dataAreaId Key property. See {@link InventTableBiEntities.dataAreaId}.
   * @param itemId Key property. See {@link InventTableBiEntities.itemId}.
   * @returns A request builder for creating requests that delete an entity of type `InventTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    itemId: string
  ): DeleteRequestBuilder<InventTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventTableBiEntities<T>
  ): DeleteRequestBuilder<InventTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string
  ): DeleteRequestBuilder<InventTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!
          }
    );
  }
}
