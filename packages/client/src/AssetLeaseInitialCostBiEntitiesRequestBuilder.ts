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
import { AssetLeaseInitialCostBiEntities } from './AssetLeaseInitialCostBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseInitialCostBiEntities} entity.
 */
export class AssetLeaseInitialCostBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseInitialCostBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseInitialCostBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseInitialCostBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLeaseInitialCostBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetLeaseInitialCostBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetLeaseInitialCostBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseInitialCostBiEntities`.
   */
  create(
    entity: AssetLeaseInitialCostBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseInitialCostBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetLeaseInitialCostBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseInitialCostBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseInitialCostBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link AssetLeaseInitialCostBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseInitialCostBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetLeaseInitialCostBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetLeaseInitialCostBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseInitialCostBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseInitialCostBiEntities`.
   */
  update(
    entity: AssetLeaseInitialCostBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseInitialCostBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetLeaseInitialCostBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseInitialCostBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseInitialCostBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link AssetLeaseInitialCostBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseInitialCostBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<AssetLeaseInitialCostBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseInitialCostBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseInitialCostBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseInitialCostBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseInitialCostBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<AssetLeaseInitialCostBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetLeaseInitialCostBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseInitialCostBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
