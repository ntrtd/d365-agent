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
import { SensorMaintenanceAssetMappings } from './SensorMaintenanceAssetMappings';

/**
 * Request builder class for operations supported on the {@link SensorMaintenanceAssetMappings} entity.
 */
export class SensorMaintenanceAssetMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SensorMaintenanceAssetMappings<T>, T> {
  /**
   * Returns a request builder for querying all `SensorMaintenanceAssetMappings` entities.
   * @returns A request builder for creating requests to retrieve all `SensorMaintenanceAssetMappings` entities.
   */
  getAll(): GetAllRequestBuilder<SensorMaintenanceAssetMappings<T>, T> {
    return new GetAllRequestBuilder<SensorMaintenanceAssetMappings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SensorMaintenanceAssetMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SensorMaintenanceAssetMappings`.
   */
  create(
    entity: SensorMaintenanceAssetMappings<T>
  ): CreateRequestBuilder<SensorMaintenanceAssetMappings<T>, T> {
    return new CreateRequestBuilder<SensorMaintenanceAssetMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SensorMaintenanceAssetMappings` entity based on its keys.
   * @param sensorId Key property. See {@link SensorMaintenanceAssetMappings.sensorId}.
   * @returns A request builder for creating requests to retrieve one `SensorMaintenanceAssetMappings` entity based on its keys.
   */
  getByKey(
    sensorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SensorMaintenanceAssetMappings<T>, T> {
    return new GetByKeyRequestBuilder<SensorMaintenanceAssetMappings<T>, T>(
      this.entityApi,
      { SensorId: sensorId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SensorMaintenanceAssetMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SensorMaintenanceAssetMappings`.
   */
  update(
    entity: SensorMaintenanceAssetMappings<T>
  ): UpdateRequestBuilder<SensorMaintenanceAssetMappings<T>, T> {
    return new UpdateRequestBuilder<SensorMaintenanceAssetMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SensorMaintenanceAssetMappings`.
   * @param sensorId Key property. See {@link SensorMaintenanceAssetMappings.sensorId}.
   * @returns A request builder for creating requests that delete an entity of type `SensorMaintenanceAssetMappings`.
   */
  delete(
    sensorId: string
  ): DeleteRequestBuilder<SensorMaintenanceAssetMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SensorMaintenanceAssetMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SensorMaintenanceAssetMappings` by taking the entity as a parameter.
   */
  delete(
    entity: SensorMaintenanceAssetMappings<T>
  ): DeleteRequestBuilder<SensorMaintenanceAssetMappings<T>, T>;
  delete(
    sensorIdOrEntity: any
  ): DeleteRequestBuilder<SensorMaintenanceAssetMappings<T>, T> {
    return new DeleteRequestBuilder<SensorMaintenanceAssetMappings<T>, T>(
      this.entityApi,
      sensorIdOrEntity instanceof SensorMaintenanceAssetMappings
        ? sensorIdOrEntity
        : { SensorId: sensorIdOrEntity! }
    );
  }
}
