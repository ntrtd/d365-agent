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
import { AssetTransBiEntities } from './AssetTransBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetTransBiEntities} entity.
 */
export class AssetTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetTransBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetTransBiEntities`.
   */
  create(
    entity: AssetTransBiEntities<T>
  ): CreateRequestBuilder<AssetTransBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link AssetTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `AssetTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetTransBiEntities`.
   */
  update(
    entity: AssetTransBiEntities<T>
  ): UpdateRequestBuilder<AssetTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetTransBiEntities`.
   * @param dataAreaId Key property. See {@link AssetTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link AssetTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `AssetTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<AssetTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetTransBiEntities<T>
  ): DeleteRequestBuilder<AssetTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<AssetTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
