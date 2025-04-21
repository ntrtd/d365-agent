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
import { InventDimBiEntities } from './InventDimBiEntities';

/**
 * Request builder class for operations supported on the {@link InventDimBiEntities} entity.
 */
export class InventDimBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventDimBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventDimBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventDimBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventDimBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventDimBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventDimBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventDimBiEntities`.
   */
  create(
    entity: InventDimBiEntities<T>
  ): CreateRequestBuilder<InventDimBiEntities<T>, T> {
    return new CreateRequestBuilder<InventDimBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventDimBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventDimBiEntities.dataAreaId}.
   * @param inventDimId Key property. See {@link InventDimBiEntities.inventDimId}.
   * @returns A request builder for creating requests to retrieve one `InventDimBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventDimId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventDimBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventDimBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        inventDimId: inventDimId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventDimBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventDimBiEntities`.
   */
  update(
    entity: InventDimBiEntities<T>
  ): UpdateRequestBuilder<InventDimBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventDimBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventDimBiEntities`.
   * @param dataAreaId Key property. See {@link InventDimBiEntities.dataAreaId}.
   * @param inventDimId Key property. See {@link InventDimBiEntities.inventDimId}.
   * @returns A request builder for creating requests that delete an entity of type `InventDimBiEntities`.
   */
  delete(
    dataAreaId: string,
    inventDimId: string
  ): DeleteRequestBuilder<InventDimBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventDimBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventDimBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventDimBiEntities<T>
  ): DeleteRequestBuilder<InventDimBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventDimId?: string
  ): DeleteRequestBuilder<InventDimBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventDimBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventDimBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            inventDimId: inventDimId!
          }
    );
  }
}
