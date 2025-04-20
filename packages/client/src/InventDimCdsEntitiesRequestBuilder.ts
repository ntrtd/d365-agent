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
import { InventDimCdsEntities } from './InventDimCdsEntities';

/**
 * Request builder class for operations supported on the {@link InventDimCdsEntities} entity.
 */
export class InventDimCdsEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventDimCdsEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventDimCdsEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventDimCdsEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventDimCdsEntities<T>, T> {
    return new GetAllRequestBuilder<InventDimCdsEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventDimCdsEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventDimCdsEntities`.
   */
  create(
    entity: InventDimCdsEntities<T>
  ): CreateRequestBuilder<InventDimCdsEntities<T>, T> {
    return new CreateRequestBuilder<InventDimCdsEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventDimCdsEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventDimCdsEntities.dataAreaId}.
   * @param inventDimId Key property. See {@link InventDimCdsEntities.inventDimId}.
   * @returns A request builder for creating requests to retrieve one `InventDimCdsEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventDimId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventDimCdsEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventDimCdsEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        inventDimId: inventDimId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventDimCdsEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventDimCdsEntities`.
   */
  update(
    entity: InventDimCdsEntities<T>
  ): UpdateRequestBuilder<InventDimCdsEntities<T>, T> {
    return new UpdateRequestBuilder<InventDimCdsEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventDimCdsEntities`.
   * @param dataAreaId Key property. See {@link InventDimCdsEntities.dataAreaId}.
   * @param inventDimId Key property. See {@link InventDimCdsEntities.inventDimId}.
   * @returns A request builder for creating requests that delete an entity of type `InventDimCdsEntities`.
   */
  delete(
    dataAreaId: string,
    inventDimId: string
  ): DeleteRequestBuilder<InventDimCdsEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventDimCdsEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventDimCdsEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventDimCdsEntities<T>
  ): DeleteRequestBuilder<InventDimCdsEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventDimId?: string
  ): DeleteRequestBuilder<InventDimCdsEntities<T>, T> {
    return new DeleteRequestBuilder<InventDimCdsEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventDimCdsEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            inventDimId: inventDimId!
          }
    );
  }
}
