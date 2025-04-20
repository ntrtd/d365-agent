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
import { SensorOperationsResourceMappings } from './SensorOperationsResourceMappings';

/**
 * Request builder class for operations supported on the {@link SensorOperationsResourceMappings} entity.
 */
export class SensorOperationsResourceMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SensorOperationsResourceMappings<T>, T> {
  /**
   * Returns a request builder for querying all `SensorOperationsResourceMappings` entities.
   * @returns A request builder for creating requests to retrieve all `SensorOperationsResourceMappings` entities.
   */
  getAll(): GetAllRequestBuilder<SensorOperationsResourceMappings<T>, T> {
    return new GetAllRequestBuilder<SensorOperationsResourceMappings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SensorOperationsResourceMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SensorOperationsResourceMappings`.
   */
  create(
    entity: SensorOperationsResourceMappings<T>
  ): CreateRequestBuilder<SensorOperationsResourceMappings<T>, T> {
    return new CreateRequestBuilder<SensorOperationsResourceMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SensorOperationsResourceMappings` entity based on its keys.
   * @param sensorId Key property. See {@link SensorOperationsResourceMappings.sensorId}.
   * @returns A request builder for creating requests to retrieve one `SensorOperationsResourceMappings` entity based on its keys.
   */
  getByKey(
    sensorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SensorOperationsResourceMappings<T>, T> {
    return new GetByKeyRequestBuilder<SensorOperationsResourceMappings<T>, T>(
      this.entityApi,
      { SensorId: sensorId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SensorOperationsResourceMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SensorOperationsResourceMappings`.
   */
  update(
    entity: SensorOperationsResourceMappings<T>
  ): UpdateRequestBuilder<SensorOperationsResourceMappings<T>, T> {
    return new UpdateRequestBuilder<SensorOperationsResourceMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SensorOperationsResourceMappings`.
   * @param sensorId Key property. See {@link SensorOperationsResourceMappings.sensorId}.
   * @returns A request builder for creating requests that delete an entity of type `SensorOperationsResourceMappings`.
   */
  delete(
    sensorId: string
  ): DeleteRequestBuilder<SensorOperationsResourceMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SensorOperationsResourceMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SensorOperationsResourceMappings` by taking the entity as a parameter.
   */
  delete(
    entity: SensorOperationsResourceMappings<T>
  ): DeleteRequestBuilder<SensorOperationsResourceMappings<T>, T>;
  delete(
    sensorIdOrEntity: any
  ): DeleteRequestBuilder<SensorOperationsResourceMappings<T>, T> {
    return new DeleteRequestBuilder<SensorOperationsResourceMappings<T>, T>(
      this.entityApi,
      sensorIdOrEntity instanceof SensorOperationsResourceMappings
        ? sensorIdOrEntity
        : { SensorId: sensorIdOrEntity! }
    );
  }
}
