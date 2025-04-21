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
import { AssetMaintenanceAssetCounterRegistrations } from './AssetMaintenanceAssetCounterRegistrations';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetCounterRegistrations} entity.
 */
export class AssetMaintenanceAssetCounterRegistrationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetCounterRegistrations<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetCounterRegistrations` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetCounterRegistrations` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceAssetCounterRegistrations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceAssetCounterRegistrations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetCounterRegistrations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetCounterRegistrations`.
   */
  create(
    entity: AssetMaintenanceAssetCounterRegistrations<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetCounterRegistrations<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceAssetCounterRegistrations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetCounterRegistrations` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetCounterRegistrations.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetCounterRegistrations.maintenanceAssetId}.
   * @param counterDateTime Key property. See {@link AssetMaintenanceAssetCounterRegistrations.counterDateTime}.
   * @param counterReplaced Key property. See {@link AssetMaintenanceAssetCounterRegistrations.counterReplaced}.
   * @param counterId Key property. See {@link AssetMaintenanceAssetCounterRegistrations.counterId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetCounterRegistrations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    counterDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>,
    counterReplaced: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.NoYes'
    >,
    counterId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetCounterRegistrations<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetCounterRegistrations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetId: maintenanceAssetId,
      CounterDateTime: counterDateTime,
      CounterReplaced: counterReplaced,
      CounterId: counterId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetCounterRegistrations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetCounterRegistrations`.
   */
  update(
    entity: AssetMaintenanceAssetCounterRegistrations<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetCounterRegistrations<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceAssetCounterRegistrations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetCounterRegistrations`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetCounterRegistrations.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetCounterRegistrations.maintenanceAssetId}.
   * @param counterDateTime Key property. See {@link AssetMaintenanceAssetCounterRegistrations.counterDateTime}.
   * @param counterReplaced Key property. See {@link AssetMaintenanceAssetCounterRegistrations.counterReplaced}.
   * @param counterId Key property. See {@link AssetMaintenanceAssetCounterRegistrations.counterId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetCounterRegistrations`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetId: string,
    counterDateTime: Moment,
    counterReplaced: NoYes,
    counterId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetCounterRegistrations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetCounterRegistrations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetCounterRegistrations` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetCounterRegistrations<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetCounterRegistrations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetId?: string,
    counterDateTime?: Moment,
    counterReplaced?: NoYes,
    counterId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetCounterRegistrations<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceAssetCounterRegistrations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetCounterRegistrations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetId: maintenanceAssetId!,
            CounterDateTime: counterDateTime!,
            CounterReplaced: counterReplaced!,
            CounterId: counterId!
          }
    );
  }
}
