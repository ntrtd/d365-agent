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
import { InventTransOriginBiEntities } from './InventTransOriginBiEntities';

/**
 * Request builder class for operations supported on the {@link InventTransOriginBiEntities} entity.
 */
export class InventTransOriginBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventTransOriginBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventTransOriginBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventTransOriginBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventTransOriginBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventTransOriginBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventTransOriginBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventTransOriginBiEntities`.
   */
  create(
    entity: InventTransOriginBiEntities<T>
  ): CreateRequestBuilder<InventTransOriginBiEntities<T>, T> {
    return new CreateRequestBuilder<InventTransOriginBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventTransOriginBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventTransOriginBiEntities.dataAreaId}.
   * @param inventTransId Key property. See {@link InventTransOriginBiEntities.inventTransId}.
   * @returns A request builder for creating requests to retrieve one `InventTransOriginBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventTransId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventTransOriginBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventTransOriginBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventTransId: inventTransId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventTransOriginBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventTransOriginBiEntities`.
   */
  update(
    entity: InventTransOriginBiEntities<T>
  ): UpdateRequestBuilder<InventTransOriginBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventTransOriginBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventTransOriginBiEntities`.
   * @param dataAreaId Key property. See {@link InventTransOriginBiEntities.dataAreaId}.
   * @param inventTransId Key property. See {@link InventTransOriginBiEntities.inventTransId}.
   * @returns A request builder for creating requests that delete an entity of type `InventTransOriginBiEntities`.
   */
  delete(
    dataAreaId: string,
    inventTransId: string
  ): DeleteRequestBuilder<InventTransOriginBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventTransOriginBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventTransOriginBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventTransOriginBiEntities<T>
  ): DeleteRequestBuilder<InventTransOriginBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventTransId?: string
  ): DeleteRequestBuilder<InventTransOriginBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventTransOriginBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventTransOriginBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventTransId: inventTransId!
          }
    );
  }
}
