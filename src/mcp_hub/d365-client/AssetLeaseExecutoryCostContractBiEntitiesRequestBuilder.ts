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
import { AssetLeaseExecutoryCostContractBiEntities } from './AssetLeaseExecutoryCostContractBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseExecutoryCostContractBiEntities} entity.
 */
export class AssetLeaseExecutoryCostContractBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseExecutoryCostContractBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseExecutoryCostContractBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseExecutoryCostContractBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetLeaseExecutoryCostContractBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetLeaseExecutoryCostContractBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetLeaseExecutoryCostContractBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseExecutoryCostContractBiEntities`.
   */
  create(
    entity: AssetLeaseExecutoryCostContractBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseExecutoryCostContractBiEntities<T>, T> {
    return new CreateRequestBuilder<
      AssetLeaseExecutoryCostContractBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseExecutoryCostContractBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseExecutoryCostContractBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link AssetLeaseExecutoryCostContractBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseExecutoryCostContractBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetLeaseExecutoryCostContractBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetLeaseExecutoryCostContractBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceKey: sourceKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseExecutoryCostContractBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseExecutoryCostContractBiEntities`.
   */
  update(
    entity: AssetLeaseExecutoryCostContractBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseExecutoryCostContractBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      AssetLeaseExecutoryCostContractBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseExecutoryCostContractBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseExecutoryCostContractBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link AssetLeaseExecutoryCostContractBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseExecutoryCostContractBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<AssetLeaseExecutoryCostContractBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseExecutoryCostContractBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseExecutoryCostContractBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseExecutoryCostContractBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseExecutoryCostContractBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<AssetLeaseExecutoryCostContractBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      AssetLeaseExecutoryCostContractBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseExecutoryCostContractBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
