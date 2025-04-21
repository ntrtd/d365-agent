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
import { AssetLeaseAssetScheduleLineBiEntities } from './AssetLeaseAssetScheduleLineBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseAssetScheduleLineBiEntities} entity.
 */
export class AssetLeaseAssetScheduleLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseAssetScheduleLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseAssetScheduleLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseAssetScheduleLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLeaseAssetScheduleLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      AssetLeaseAssetScheduleLineBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetLeaseAssetScheduleLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseAssetScheduleLineBiEntities`.
   */
  create(
    entity: AssetLeaseAssetScheduleLineBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseAssetScheduleLineBiEntities<T>, T> {
    return new CreateRequestBuilder<
      AssetLeaseAssetScheduleLineBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseAssetScheduleLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseAssetScheduleLineBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link AssetLeaseAssetScheduleLineBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseAssetScheduleLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetLeaseAssetScheduleLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetLeaseAssetScheduleLineBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceKey: sourceKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseAssetScheduleLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseAssetScheduleLineBiEntities`.
   */
  update(
    entity: AssetLeaseAssetScheduleLineBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseAssetScheduleLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      AssetLeaseAssetScheduleLineBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseAssetScheduleLineBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseAssetScheduleLineBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link AssetLeaseAssetScheduleLineBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseAssetScheduleLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<AssetLeaseAssetScheduleLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseAssetScheduleLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseAssetScheduleLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseAssetScheduleLineBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseAssetScheduleLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<AssetLeaseAssetScheduleLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      AssetLeaseAssetScheduleLineBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseAssetScheduleLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
