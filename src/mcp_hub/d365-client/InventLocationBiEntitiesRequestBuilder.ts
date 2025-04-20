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
import { InventLocationBiEntities } from './InventLocationBiEntities';

/**
 * Request builder class for operations supported on the {@link InventLocationBiEntities} entity.
 */
export class InventLocationBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventLocationBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventLocationBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventLocationBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventLocationBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventLocationBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventLocationBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventLocationBiEntities`.
   */
  create(
    entity: InventLocationBiEntities<T>
  ): CreateRequestBuilder<InventLocationBiEntities<T>, T> {
    return new CreateRequestBuilder<InventLocationBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventLocationBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventLocationBiEntities.dataAreaId}.
   * @param inventLocationId Key property. See {@link InventLocationBiEntities.inventLocationId}.
   * @returns A request builder for creating requests to retrieve one `InventLocationBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventLocationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventLocationBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventLocationBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventLocationId: inventLocationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventLocationBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventLocationBiEntities`.
   */
  update(
    entity: InventLocationBiEntities<T>
  ): UpdateRequestBuilder<InventLocationBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventLocationBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventLocationBiEntities`.
   * @param dataAreaId Key property. See {@link InventLocationBiEntities.dataAreaId}.
   * @param inventLocationId Key property. See {@link InventLocationBiEntities.inventLocationId}.
   * @returns A request builder for creating requests that delete an entity of type `InventLocationBiEntities`.
   */
  delete(
    dataAreaId: string,
    inventLocationId: string
  ): DeleteRequestBuilder<InventLocationBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventLocationBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventLocationBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventLocationBiEntities<T>
  ): DeleteRequestBuilder<InventLocationBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventLocationId?: string
  ): DeleteRequestBuilder<InventLocationBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventLocationBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventLocationBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventLocationId: inventLocationId!
          }
    );
  }
}
