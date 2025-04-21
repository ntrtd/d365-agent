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
import { InventTransOriginCdsEntities } from './InventTransOriginCdsEntities';

/**
 * Request builder class for operations supported on the {@link InventTransOriginCdsEntities} entity.
 */
export class InventTransOriginCdsEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventTransOriginCdsEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventTransOriginCdsEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventTransOriginCdsEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventTransOriginCdsEntities<T>, T> {
    return new GetAllRequestBuilder<InventTransOriginCdsEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventTransOriginCdsEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventTransOriginCdsEntities`.
   */
  create(
    entity: InventTransOriginCdsEntities<T>
  ): CreateRequestBuilder<InventTransOriginCdsEntities<T>, T> {
    return new CreateRequestBuilder<InventTransOriginCdsEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventTransOriginCdsEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventTransOriginCdsEntities.dataAreaId}.
   * @param inventTransId Key property. See {@link InventTransOriginCdsEntities.inventTransId}.
   * @returns A request builder for creating requests to retrieve one `InventTransOriginCdsEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventTransId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventTransOriginCdsEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventTransOriginCdsEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventTransId: inventTransId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventTransOriginCdsEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventTransOriginCdsEntities`.
   */
  update(
    entity: InventTransOriginCdsEntities<T>
  ): UpdateRequestBuilder<InventTransOriginCdsEntities<T>, T> {
    return new UpdateRequestBuilder<InventTransOriginCdsEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventTransOriginCdsEntities`.
   * @param dataAreaId Key property. See {@link InventTransOriginCdsEntities.dataAreaId}.
   * @param inventTransId Key property. See {@link InventTransOriginCdsEntities.inventTransId}.
   * @returns A request builder for creating requests that delete an entity of type `InventTransOriginCdsEntities`.
   */
  delete(
    dataAreaId: string,
    inventTransId: string
  ): DeleteRequestBuilder<InventTransOriginCdsEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventTransOriginCdsEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventTransOriginCdsEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventTransOriginCdsEntities<T>
  ): DeleteRequestBuilder<InventTransOriginCdsEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventTransId?: string
  ): DeleteRequestBuilder<InventTransOriginCdsEntities<T>, T> {
    return new DeleteRequestBuilder<InventTransOriginCdsEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventTransOriginCdsEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventTransId: inventTransId!
          }
    );
  }
}
