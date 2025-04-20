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
import { AssetLeaseExecutoryCostContractHistoryBiEntities } from './AssetLeaseExecutoryCostContractHistoryBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseExecutoryCostContractHistoryBiEntities} entity.
 */
export class AssetLeaseExecutoryCostContractHistoryBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetLeaseExecutoryCostContractHistoryBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetLeaseExecutoryCostContractHistoryBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseExecutoryCostContractHistoryBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetLeaseExecutoryCostContractHistoryBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetLeaseExecutoryCostContractHistoryBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetLeaseExecutoryCostContractHistoryBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseExecutoryCostContractHistoryBiEntities`.
   */
  create(
    entity: AssetLeaseExecutoryCostContractHistoryBiEntities<T>
  ): CreateRequestBuilder<
    AssetLeaseExecutoryCostContractHistoryBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetLeaseExecutoryCostContractHistoryBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseExecutoryCostContractHistoryBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseExecutoryCostContractHistoryBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link AssetLeaseExecutoryCostContractHistoryBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseExecutoryCostContractHistoryBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    AssetLeaseExecutoryCostContractHistoryBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetLeaseExecutoryCostContractHistoryBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceKey: sourceKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseExecutoryCostContractHistoryBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseExecutoryCostContractHistoryBiEntities`.
   */
  update(
    entity: AssetLeaseExecutoryCostContractHistoryBiEntities<T>
  ): UpdateRequestBuilder<
    AssetLeaseExecutoryCostContractHistoryBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetLeaseExecutoryCostContractHistoryBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseExecutoryCostContractHistoryBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseExecutoryCostContractHistoryBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link AssetLeaseExecutoryCostContractHistoryBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseExecutoryCostContractHistoryBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<
    AssetLeaseExecutoryCostContractHistoryBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseExecutoryCostContractHistoryBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseExecutoryCostContractHistoryBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseExecutoryCostContractHistoryBiEntities<T>
  ): DeleteRequestBuilder<
    AssetLeaseExecutoryCostContractHistoryBiEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<
    AssetLeaseExecutoryCostContractHistoryBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetLeaseExecutoryCostContractHistoryBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetLeaseExecutoryCostContractHistoryBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
