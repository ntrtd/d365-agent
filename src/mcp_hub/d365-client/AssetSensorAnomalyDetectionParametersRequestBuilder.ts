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
import { AssetSensorAnomalyDetectionParameters } from './AssetSensorAnomalyDetectionParameters';

/**
 * Request builder class for operations supported on the {@link AssetSensorAnomalyDetectionParameters} entity.
 */
export class AssetSensorAnomalyDetectionParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetSensorAnomalyDetectionParameters<T>, T> {
  /**
   * Returns a request builder for querying all `AssetSensorAnomalyDetectionParameters` entities.
   * @returns A request builder for creating requests to retrieve all `AssetSensorAnomalyDetectionParameters` entities.
   */
  getAll(): GetAllRequestBuilder<AssetSensorAnomalyDetectionParameters<T>, T> {
    return new GetAllRequestBuilder<
      AssetSensorAnomalyDetectionParameters<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetSensorAnomalyDetectionParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetSensorAnomalyDetectionParameters`.
   */
  create(
    entity: AssetSensorAnomalyDetectionParameters<T>
  ): CreateRequestBuilder<AssetSensorAnomalyDetectionParameters<T>, T> {
    return new CreateRequestBuilder<
      AssetSensorAnomalyDetectionParameters<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetSensorAnomalyDetectionParameters` entity based on its keys.
   * @param sensorId Key property. See {@link AssetSensorAnomalyDetectionParameters.sensorId}.
   * @returns A request builder for creating requests to retrieve one `AssetSensorAnomalyDetectionParameters` entity based on its keys.
   */
  getByKey(
    sensorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetSensorAnomalyDetectionParameters<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetSensorAnomalyDetectionParameters<T>,
      T
    >(this.entityApi, { SensorId: sensorId });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetSensorAnomalyDetectionParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetSensorAnomalyDetectionParameters`.
   */
  update(
    entity: AssetSensorAnomalyDetectionParameters<T>
  ): UpdateRequestBuilder<AssetSensorAnomalyDetectionParameters<T>, T> {
    return new UpdateRequestBuilder<
      AssetSensorAnomalyDetectionParameters<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetSensorAnomalyDetectionParameters`.
   * @param sensorId Key property. See {@link AssetSensorAnomalyDetectionParameters.sensorId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetSensorAnomalyDetectionParameters`.
   */
  delete(
    sensorId: string
  ): DeleteRequestBuilder<AssetSensorAnomalyDetectionParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetSensorAnomalyDetectionParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetSensorAnomalyDetectionParameters` by taking the entity as a parameter.
   */
  delete(
    entity: AssetSensorAnomalyDetectionParameters<T>
  ): DeleteRequestBuilder<AssetSensorAnomalyDetectionParameters<T>, T>;
  delete(
    sensorIdOrEntity: any
  ): DeleteRequestBuilder<AssetSensorAnomalyDetectionParameters<T>, T> {
    return new DeleteRequestBuilder<
      AssetSensorAnomalyDetectionParameters<T>,
      T
    >(
      this.entityApi,
      sensorIdOrEntity instanceof AssetSensorAnomalyDetectionParameters
        ? sensorIdOrEntity
        : { SensorId: sensorIdOrEntity! }
    );
  }
}
