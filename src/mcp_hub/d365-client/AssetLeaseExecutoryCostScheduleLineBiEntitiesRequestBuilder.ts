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
import { AssetLeaseExecutoryCostScheduleLineBiEntities } from './AssetLeaseExecutoryCostScheduleLineBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseExecutoryCostScheduleLineBiEntities} entity.
 */
export class AssetLeaseExecutoryCostScheduleLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseExecutoryCostScheduleLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseExecutoryCostScheduleLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseExecutoryCostScheduleLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetLeaseExecutoryCostScheduleLineBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetLeaseExecutoryCostScheduleLineBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetLeaseExecutoryCostScheduleLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseExecutoryCostScheduleLineBiEntities`.
   */
  create(
    entity: AssetLeaseExecutoryCostScheduleLineBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseExecutoryCostScheduleLineBiEntities<T>, T> {
    return new CreateRequestBuilder<
      AssetLeaseExecutoryCostScheduleLineBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseExecutoryCostScheduleLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseExecutoryCostScheduleLineBiEntities.dataAreaId}.
   * @param executoryCostSchedule Key property. See {@link AssetLeaseExecutoryCostScheduleLineBiEntities.executoryCostSchedule}.
   * @param lineNumber Key property. See {@link AssetLeaseExecutoryCostScheduleLineBiEntities.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseExecutoryCostScheduleLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    executoryCostSchedule: DeserializedType<T, 'Edm.Int64'>,
    lineNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<
    AssetLeaseExecutoryCostScheduleLineBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetLeaseExecutoryCostScheduleLineBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ExecutoryCostSchedule: executoryCostSchedule,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseExecutoryCostScheduleLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseExecutoryCostScheduleLineBiEntities`.
   */
  update(
    entity: AssetLeaseExecutoryCostScheduleLineBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseExecutoryCostScheduleLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      AssetLeaseExecutoryCostScheduleLineBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseExecutoryCostScheduleLineBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseExecutoryCostScheduleLineBiEntities.dataAreaId}.
   * @param executoryCostSchedule Key property. See {@link AssetLeaseExecutoryCostScheduleLineBiEntities.executoryCostSchedule}.
   * @param lineNumber Key property. See {@link AssetLeaseExecutoryCostScheduleLineBiEntities.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseExecutoryCostScheduleLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    executoryCostSchedule: BigNumber,
    lineNumber: number
  ): DeleteRequestBuilder<AssetLeaseExecutoryCostScheduleLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseExecutoryCostScheduleLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseExecutoryCostScheduleLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseExecutoryCostScheduleLineBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseExecutoryCostScheduleLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    executoryCostSchedule?: BigNumber,
    lineNumber?: number
  ): DeleteRequestBuilder<AssetLeaseExecutoryCostScheduleLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      AssetLeaseExecutoryCostScheduleLineBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetLeaseExecutoryCostScheduleLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExecutoryCostSchedule: executoryCostSchedule!,
            LineNumber: lineNumber!
          }
    );
  }
}
