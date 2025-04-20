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
import { SensorMaintenanceAssetCounterMappings } from './SensorMaintenanceAssetCounterMappings';

/**
 * Request builder class for operations supported on the {@link SensorMaintenanceAssetCounterMappings} entity.
 */
export class SensorMaintenanceAssetCounterMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SensorMaintenanceAssetCounterMappings<T>, T> {
  /**
   * Returns a request builder for querying all `SensorMaintenanceAssetCounterMappings` entities.
   * @returns A request builder for creating requests to retrieve all `SensorMaintenanceAssetCounterMappings` entities.
   */
  getAll(): GetAllRequestBuilder<SensorMaintenanceAssetCounterMappings<T>, T> {
    return new GetAllRequestBuilder<
      SensorMaintenanceAssetCounterMappings<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SensorMaintenanceAssetCounterMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SensorMaintenanceAssetCounterMappings`.
   */
  create(
    entity: SensorMaintenanceAssetCounterMappings<T>
  ): CreateRequestBuilder<SensorMaintenanceAssetCounterMappings<T>, T> {
    return new CreateRequestBuilder<
      SensorMaintenanceAssetCounterMappings<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SensorMaintenanceAssetCounterMappings` entity based on its keys.
   * @param sensorId Key property. See {@link SensorMaintenanceAssetCounterMappings.sensorId}.
   * @returns A request builder for creating requests to retrieve one `SensorMaintenanceAssetCounterMappings` entity based on its keys.
   */
  getByKey(
    sensorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SensorMaintenanceAssetCounterMappings<T>, T> {
    return new GetByKeyRequestBuilder<
      SensorMaintenanceAssetCounterMappings<T>,
      T
    >(this.entityApi, { SensorId: sensorId });
  }

  /**
   * Returns a request builder for updating an entity of type `SensorMaintenanceAssetCounterMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SensorMaintenanceAssetCounterMappings`.
   */
  update(
    entity: SensorMaintenanceAssetCounterMappings<T>
  ): UpdateRequestBuilder<SensorMaintenanceAssetCounterMappings<T>, T> {
    return new UpdateRequestBuilder<
      SensorMaintenanceAssetCounterMappings<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SensorMaintenanceAssetCounterMappings`.
   * @param sensorId Key property. See {@link SensorMaintenanceAssetCounterMappings.sensorId}.
   * @returns A request builder for creating requests that delete an entity of type `SensorMaintenanceAssetCounterMappings`.
   */
  delete(
    sensorId: string
  ): DeleteRequestBuilder<SensorMaintenanceAssetCounterMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SensorMaintenanceAssetCounterMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SensorMaintenanceAssetCounterMappings` by taking the entity as a parameter.
   */
  delete(
    entity: SensorMaintenanceAssetCounterMappings<T>
  ): DeleteRequestBuilder<SensorMaintenanceAssetCounterMappings<T>, T>;
  delete(
    sensorIdOrEntity: any
  ): DeleteRequestBuilder<SensorMaintenanceAssetCounterMappings<T>, T> {
    return new DeleteRequestBuilder<
      SensorMaintenanceAssetCounterMappings<T>,
      T
    >(
      this.entityApi,
      sensorIdOrEntity instanceof SensorMaintenanceAssetCounterMappings
        ? sensorIdOrEntity
        : { SensorId: sensorIdOrEntity! }
    );
  }
}
