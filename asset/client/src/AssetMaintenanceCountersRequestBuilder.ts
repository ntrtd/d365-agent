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
import { AssetMaintenanceCounters } from './AssetMaintenanceCounters';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceCounters} entity.
 */
export class AssetMaintenanceCountersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceCounters<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceCounters` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceCounters` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceCounters<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceCounters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceCounters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceCounters`.
   */
  create(
    entity: AssetMaintenanceCounters<T>
  ): CreateRequestBuilder<AssetMaintenanceCounters<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceCounters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceCounters` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceCounters.dataAreaId}.
   * @param counterDateTime Key property. See {@link AssetMaintenanceCounters.counterDateTime}.
   * @param deviceId Key property. See {@link AssetMaintenanceCounters.deviceId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceCounters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    counterDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>,
    deviceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceCounters<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceCounters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CounterDateTime: counterDateTime,
        DeviceId: deviceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceCounters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceCounters`.
   */
  update(
    entity: AssetMaintenanceCounters<T>
  ): UpdateRequestBuilder<AssetMaintenanceCounters<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceCounters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceCounters`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceCounters.dataAreaId}.
   * @param counterDateTime Key property. See {@link AssetMaintenanceCounters.counterDateTime}.
   * @param deviceId Key property. See {@link AssetMaintenanceCounters.deviceId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceCounters`.
   */
  delete(
    dataAreaId: string,
    counterDateTime: Moment,
    deviceId: string
  ): DeleteRequestBuilder<AssetMaintenanceCounters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceCounters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceCounters` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceCounters<T>
  ): DeleteRequestBuilder<AssetMaintenanceCounters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    counterDateTime?: Moment,
    deviceId?: string
  ): DeleteRequestBuilder<AssetMaintenanceCounters<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceCounters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceCounters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CounterDateTime: counterDateTime!,
            DeviceId: deviceId!
          }
    );
  }
}
