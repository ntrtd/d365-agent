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
import { InventTransArchiveBiEntities } from './InventTransArchiveBiEntities';

/**
 * Request builder class for operations supported on the {@link InventTransArchiveBiEntities} entity.
 */
export class InventTransArchiveBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventTransArchiveBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventTransArchiveBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventTransArchiveBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventTransArchiveBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventTransArchiveBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventTransArchiveBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventTransArchiveBiEntities`.
   */
  create(
    entity: InventTransArchiveBiEntities<T>
  ): CreateRequestBuilder<InventTransArchiveBiEntities<T>, T> {
    return new CreateRequestBuilder<InventTransArchiveBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventTransArchiveBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventTransArchiveBiEntities.dataAreaId}.
   * @param inventTrans Key property. See {@link InventTransArchiveBiEntities.inventTrans}.
   * @returns A request builder for creating requests to retrieve one `InventTransArchiveBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventTrans: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InventTransArchiveBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventTransArchiveBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventTrans: inventTrans
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventTransArchiveBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventTransArchiveBiEntities`.
   */
  update(
    entity: InventTransArchiveBiEntities<T>
  ): UpdateRequestBuilder<InventTransArchiveBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventTransArchiveBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventTransArchiveBiEntities`.
   * @param dataAreaId Key property. See {@link InventTransArchiveBiEntities.dataAreaId}.
   * @param inventTrans Key property. See {@link InventTransArchiveBiEntities.inventTrans}.
   * @returns A request builder for creating requests that delete an entity of type `InventTransArchiveBiEntities`.
   */
  delete(
    dataAreaId: string,
    inventTrans: BigNumber
  ): DeleteRequestBuilder<InventTransArchiveBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventTransArchiveBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventTransArchiveBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventTransArchiveBiEntities<T>
  ): DeleteRequestBuilder<InventTransArchiveBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventTrans?: BigNumber
  ): DeleteRequestBuilder<InventTransArchiveBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventTransArchiveBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventTransArchiveBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventTrans: inventTrans!
          }
    );
  }
}
