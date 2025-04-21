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
import { AssetInventTransBiEntities } from './AssetInventTransBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetInventTransBiEntities} entity.
 */
export class AssetInventTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetInventTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetInventTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetInventTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetInventTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetInventTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetInventTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetInventTransBiEntities`.
   */
  create(
    entity: AssetInventTransBiEntities<T>
  ): CreateRequestBuilder<AssetInventTransBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetInventTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetInventTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetInventTransBiEntities.dataAreaId}.
   * @param inventTransOrigin Key property. See {@link AssetInventTransBiEntities.inventTransOrigin}.
   * @returns A request builder for creating requests to retrieve one `AssetInventTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventTransOrigin: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetInventTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetInventTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventTransOrigin: inventTransOrigin
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetInventTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetInventTransBiEntities`.
   */
  update(
    entity: AssetInventTransBiEntities<T>
  ): UpdateRequestBuilder<AssetInventTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetInventTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetInventTransBiEntities`.
   * @param dataAreaId Key property. See {@link AssetInventTransBiEntities.dataAreaId}.
   * @param inventTransOrigin Key property. See {@link AssetInventTransBiEntities.inventTransOrigin}.
   * @returns A request builder for creating requests that delete an entity of type `AssetInventTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    inventTransOrigin: BigNumber
  ): DeleteRequestBuilder<AssetInventTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetInventTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetInventTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetInventTransBiEntities<T>
  ): DeleteRequestBuilder<AssetInventTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventTransOrigin?: BigNumber
  ): DeleteRequestBuilder<AssetInventTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetInventTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetInventTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventTransOrigin: inventTransOrigin!
          }
    );
  }
}
