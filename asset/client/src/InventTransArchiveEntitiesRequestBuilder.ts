/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { InventTransArchiveEntities } from './InventTransArchiveEntities';

/**
 * Request builder class for operations supported on the {@link InventTransArchiveEntities} entity.
 */
export class InventTransArchiveEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventTransArchiveEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventTransArchiveEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventTransArchiveEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventTransArchiveEntities<T>, T> {
    return new GetAllRequestBuilder<InventTransArchiveEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventTransArchiveEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventTransArchiveEntities`.
   */
  create(
    entity: InventTransArchiveEntities<T>
  ): CreateRequestBuilder<InventTransArchiveEntities<T>, T> {
    return new CreateRequestBuilder<InventTransArchiveEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventTransArchiveEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventTransArchiveEntities.dataAreaId}.
   * @param inventTrans Key property. See {@link InventTransArchiveEntities.inventTrans}.
   * @returns A request builder for creating requests to retrieve one `InventTransArchiveEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventTrans: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InventTransArchiveEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventTransArchiveEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventTrans: inventTrans
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventTransArchiveEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventTransArchiveEntities`.
   */
  update(
    entity: InventTransArchiveEntities<T>
  ): UpdateRequestBuilder<InventTransArchiveEntities<T>, T> {
    return new UpdateRequestBuilder<InventTransArchiveEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventTransArchiveEntities`.
   * @param dataAreaId Key property. See {@link InventTransArchiveEntities.dataAreaId}.
   * @param inventTrans Key property. See {@link InventTransArchiveEntities.inventTrans}.
   * @returns A request builder for creating requests that delete an entity of type `InventTransArchiveEntities`.
   */
  delete(
    dataAreaId: string,
    inventTrans: BigNumber
  ): DeleteRequestBuilder<InventTransArchiveEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventTransArchiveEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventTransArchiveEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventTransArchiveEntities<T>
  ): DeleteRequestBuilder<InventTransArchiveEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventTrans?: BigNumber
  ): DeleteRequestBuilder<InventTransArchiveEntities<T>, T> {
    return new DeleteRequestBuilder<InventTransArchiveEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventTransArchiveEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventTrans: inventTrans!
          }
    );
  }
}
