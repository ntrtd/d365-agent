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
import { InventParametersBiEntities } from './InventParametersBiEntities';

/**
 * Request builder class for operations supported on the {@link InventParametersBiEntities} entity.
 */
export class InventParametersBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventParametersBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventParametersBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventParametersBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventParametersBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventParametersBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventParametersBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventParametersBiEntities`.
   */
  create(
    entity: InventParametersBiEntities<T>
  ): CreateRequestBuilder<InventParametersBiEntities<T>, T> {
    return new CreateRequestBuilder<InventParametersBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventParametersBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventParametersBiEntities.dataAreaId}.
   * @param key Key property. See {@link InventParametersBiEntities.key}.
   * @returns A request builder for creating requests to retrieve one `InventParametersBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<InventParametersBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventParametersBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Key: key
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventParametersBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventParametersBiEntities`.
   */
  update(
    entity: InventParametersBiEntities<T>
  ): UpdateRequestBuilder<InventParametersBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventParametersBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventParametersBiEntities`.
   * @param dataAreaId Key property. See {@link InventParametersBiEntities.dataAreaId}.
   * @param key Key property. See {@link InventParametersBiEntities.key}.
   * @returns A request builder for creating requests that delete an entity of type `InventParametersBiEntities`.
   */
  delete(
    dataAreaId: string,
    key: number
  ): DeleteRequestBuilder<InventParametersBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventParametersBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventParametersBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventParametersBiEntities<T>
  ): DeleteRequestBuilder<InventParametersBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    key?: number
  ): DeleteRequestBuilder<InventParametersBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventParametersBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventParametersBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Key: key!
          }
    );
  }
}
