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
import { AssetSensorDowntimeThresholds } from './AssetSensorDowntimeThresholds';

/**
 * Request builder class for operations supported on the {@link AssetSensorDowntimeThresholds} entity.
 */
export class AssetSensorDowntimeThresholdsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetSensorDowntimeThresholds<T>, T> {
  /**
   * Returns a request builder for querying all `AssetSensorDowntimeThresholds` entities.
   * @returns A request builder for creating requests to retrieve all `AssetSensorDowntimeThresholds` entities.
   */
  getAll(): GetAllRequestBuilder<AssetSensorDowntimeThresholds<T>, T> {
    return new GetAllRequestBuilder<AssetSensorDowntimeThresholds<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetSensorDowntimeThresholds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetSensorDowntimeThresholds`.
   */
  create(
    entity: AssetSensorDowntimeThresholds<T>
  ): CreateRequestBuilder<AssetSensorDowntimeThresholds<T>, T> {
    return new CreateRequestBuilder<AssetSensorDowntimeThresholds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetSensorDowntimeThresholds` entity based on its keys.
   * @param sensorId Key property. See {@link AssetSensorDowntimeThresholds.sensorId}.
   * @returns A request builder for creating requests to retrieve one `AssetSensorDowntimeThresholds` entity based on its keys.
   */
  getByKey(
    sensorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetSensorDowntimeThresholds<T>, T> {
    return new GetByKeyRequestBuilder<AssetSensorDowntimeThresholds<T>, T>(
      this.entityApi,
      { SensorId: sensorId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetSensorDowntimeThresholds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetSensorDowntimeThresholds`.
   */
  update(
    entity: AssetSensorDowntimeThresholds<T>
  ): UpdateRequestBuilder<AssetSensorDowntimeThresholds<T>, T> {
    return new UpdateRequestBuilder<AssetSensorDowntimeThresholds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetSensorDowntimeThresholds`.
   * @param sensorId Key property. See {@link AssetSensorDowntimeThresholds.sensorId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetSensorDowntimeThresholds`.
   */
  delete(
    sensorId: string
  ): DeleteRequestBuilder<AssetSensorDowntimeThresholds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetSensorDowntimeThresholds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetSensorDowntimeThresholds` by taking the entity as a parameter.
   */
  delete(
    entity: AssetSensorDowntimeThresholds<T>
  ): DeleteRequestBuilder<AssetSensorDowntimeThresholds<T>, T>;
  delete(
    sensorIdOrEntity: any
  ): DeleteRequestBuilder<AssetSensorDowntimeThresholds<T>, T> {
    return new DeleteRequestBuilder<AssetSensorDowntimeThresholds<T>, T>(
      this.entityApi,
      sensorIdOrEntity instanceof AssetSensorDowntimeThresholds
        ? sensorIdOrEntity
        : { SensorId: sensorIdOrEntity! }
    );
  }
}
