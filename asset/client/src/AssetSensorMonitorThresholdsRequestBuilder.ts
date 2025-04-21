/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { AssetSensorMonitorThresholds } from './AssetSensorMonitorThresholds';

/**
 * Request builder class for operations supported on the {@link AssetSensorMonitorThresholds} entity.
 */
export class AssetSensorMonitorThresholdsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetSensorMonitorThresholds<T>, T> {
  /**
   * Returns a request builder for querying all `AssetSensorMonitorThresholds` entities.
   * @returns A request builder for creating requests to retrieve all `AssetSensorMonitorThresholds` entities.
   */
  getAll(): GetAllRequestBuilder<AssetSensorMonitorThresholds<T>, T> {
    return new GetAllRequestBuilder<AssetSensorMonitorThresholds<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetSensorMonitorThresholds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetSensorMonitorThresholds`.
   */
  create(
    entity: AssetSensorMonitorThresholds<T>
  ): CreateRequestBuilder<AssetSensorMonitorThresholds<T>, T> {
    return new CreateRequestBuilder<AssetSensorMonitorThresholds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetSensorMonitorThresholds` entity based on its keys.
   * @param sensorId Key property. See {@link AssetSensorMonitorThresholds.sensorId}.
   * @returns A request builder for creating requests to retrieve one `AssetSensorMonitorThresholds` entity based on its keys.
   */
  getByKey(
    sensorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetSensorMonitorThresholds<T>, T> {
    return new GetByKeyRequestBuilder<AssetSensorMonitorThresholds<T>, T>(
      this.entityApi,
      { SensorId: sensorId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetSensorMonitorThresholds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetSensorMonitorThresholds`.
   */
  update(
    entity: AssetSensorMonitorThresholds<T>
  ): UpdateRequestBuilder<AssetSensorMonitorThresholds<T>, T> {
    return new UpdateRequestBuilder<AssetSensorMonitorThresholds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetSensorMonitorThresholds`.
   * @param sensorId Key property. See {@link AssetSensorMonitorThresholds.sensorId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetSensorMonitorThresholds`.
   */
  delete(
    sensorId: string
  ): DeleteRequestBuilder<AssetSensorMonitorThresholds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetSensorMonitorThresholds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetSensorMonitorThresholds` by taking the entity as a parameter.
   */
  delete(
    entity: AssetSensorMonitorThresholds<T>
  ): DeleteRequestBuilder<AssetSensorMonitorThresholds<T>, T>;
  delete(
    sensorIdOrEntity: any
  ): DeleteRequestBuilder<AssetSensorMonitorThresholds<T>, T> {
    return new DeleteRequestBuilder<AssetSensorMonitorThresholds<T>, T>(
      this.entityApi,
      sensorIdOrEntity instanceof AssetSensorMonitorThresholds
        ? sensorIdOrEntity
        : { SensorId: sensorIdOrEntity! }
    );
  }
}
