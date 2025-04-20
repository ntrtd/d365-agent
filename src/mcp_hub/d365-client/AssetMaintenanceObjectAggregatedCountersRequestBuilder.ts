/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { AssetMaintenanceObjectAggregatedCounters } from './AssetMaintenanceObjectAggregatedCounters';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceObjectAggregatedCounters} entity.
 */
export class AssetMaintenanceObjectAggregatedCountersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceObjectAggregatedCounters<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceObjectAggregatedCounters` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceObjectAggregatedCounters` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceObjectAggregatedCounters<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceObjectAggregatedCounters<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceObjectAggregatedCounters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceObjectAggregatedCounters`.
   */
  create(
    entity: AssetMaintenanceObjectAggregatedCounters<T>
  ): CreateRequestBuilder<AssetMaintenanceObjectAggregatedCounters<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceObjectAggregatedCounters<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceObjectAggregatedCounters` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceObjectAggregatedCounters.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceObjectAggregatedCounters.maintenanceAssetId}.
   * @param maintenanceAssetCounterId Key property. See {@link AssetMaintenanceObjectAggregatedCounters.maintenanceAssetCounterId}.
   * @param counterDateTime Key property. See {@link AssetMaintenanceObjectAggregatedCounters.counterDateTime}.
   * @param counterReplaced Key property. See {@link AssetMaintenanceObjectAggregatedCounters.counterReplaced}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceObjectAggregatedCounters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetCounterId: DeserializedType<T, 'Edm.String'>,
    counterDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>,
    counterReplaced: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.NoYes'
    >
  ): GetByKeyRequestBuilder<AssetMaintenanceObjectAggregatedCounters<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceObjectAggregatedCounters<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetId: maintenanceAssetId,
      MaintenanceAssetCounterId: maintenanceAssetCounterId,
      CounterDateTime: counterDateTime,
      CounterReplaced: counterReplaced
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceObjectAggregatedCounters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceObjectAggregatedCounters`.
   */
  update(
    entity: AssetMaintenanceObjectAggregatedCounters<T>
  ): UpdateRequestBuilder<AssetMaintenanceObjectAggregatedCounters<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceObjectAggregatedCounters<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceObjectAggregatedCounters`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceObjectAggregatedCounters.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceObjectAggregatedCounters.maintenanceAssetId}.
   * @param maintenanceAssetCounterId Key property. See {@link AssetMaintenanceObjectAggregatedCounters.maintenanceAssetCounterId}.
   * @param counterDateTime Key property. See {@link AssetMaintenanceObjectAggregatedCounters.counterDateTime}.
   * @param counterReplaced Key property. See {@link AssetMaintenanceObjectAggregatedCounters.counterReplaced}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceObjectAggregatedCounters`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetId: string,
    maintenanceAssetCounterId: string,
    counterDateTime: Moment,
    counterReplaced: NoYes
  ): DeleteRequestBuilder<AssetMaintenanceObjectAggregatedCounters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceObjectAggregatedCounters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceObjectAggregatedCounters` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceObjectAggregatedCounters<T>
  ): DeleteRequestBuilder<AssetMaintenanceObjectAggregatedCounters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetId?: string,
    maintenanceAssetCounterId?: string,
    counterDateTime?: Moment,
    counterReplaced?: NoYes
  ): DeleteRequestBuilder<AssetMaintenanceObjectAggregatedCounters<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceObjectAggregatedCounters<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceObjectAggregatedCounters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetId: maintenanceAssetId!,
            MaintenanceAssetCounterId: maintenanceAssetCounterId!,
            CounterDateTime: counterDateTime!,
            CounterReplaced: counterReplaced!
          }
    );
  }
}
