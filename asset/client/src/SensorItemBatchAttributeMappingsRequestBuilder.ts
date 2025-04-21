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
import { SensorItemBatchAttributeMappings } from './SensorItemBatchAttributeMappings';

/**
 * Request builder class for operations supported on the {@link SensorItemBatchAttributeMappings} entity.
 */
export class SensorItemBatchAttributeMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SensorItemBatchAttributeMappings<T>, T> {
  /**
   * Returns a request builder for querying all `SensorItemBatchAttributeMappings` entities.
   * @returns A request builder for creating requests to retrieve all `SensorItemBatchAttributeMappings` entities.
   */
  getAll(): GetAllRequestBuilder<SensorItemBatchAttributeMappings<T>, T> {
    return new GetAllRequestBuilder<SensorItemBatchAttributeMappings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SensorItemBatchAttributeMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SensorItemBatchAttributeMappings`.
   */
  create(
    entity: SensorItemBatchAttributeMappings<T>
  ): CreateRequestBuilder<SensorItemBatchAttributeMappings<T>, T> {
    return new CreateRequestBuilder<SensorItemBatchAttributeMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SensorItemBatchAttributeMappings` entity based on its keys.
   * @param sensorId Key property. See {@link SensorItemBatchAttributeMappings.sensorId}.
   * @returns A request builder for creating requests to retrieve one `SensorItemBatchAttributeMappings` entity based on its keys.
   */
  getByKey(
    sensorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SensorItemBatchAttributeMappings<T>, T> {
    return new GetByKeyRequestBuilder<SensorItemBatchAttributeMappings<T>, T>(
      this.entityApi,
      { SensorId: sensorId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SensorItemBatchAttributeMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SensorItemBatchAttributeMappings`.
   */
  update(
    entity: SensorItemBatchAttributeMappings<T>
  ): UpdateRequestBuilder<SensorItemBatchAttributeMappings<T>, T> {
    return new UpdateRequestBuilder<SensorItemBatchAttributeMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SensorItemBatchAttributeMappings`.
   * @param sensorId Key property. See {@link SensorItemBatchAttributeMappings.sensorId}.
   * @returns A request builder for creating requests that delete an entity of type `SensorItemBatchAttributeMappings`.
   */
  delete(
    sensorId: string
  ): DeleteRequestBuilder<SensorItemBatchAttributeMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SensorItemBatchAttributeMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SensorItemBatchAttributeMappings` by taking the entity as a parameter.
   */
  delete(
    entity: SensorItemBatchAttributeMappings<T>
  ): DeleteRequestBuilder<SensorItemBatchAttributeMappings<T>, T>;
  delete(
    sensorIdOrEntity: any
  ): DeleteRequestBuilder<SensorItemBatchAttributeMappings<T>, T> {
    return new DeleteRequestBuilder<SensorItemBatchAttributeMappings<T>, T>(
      this.entityApi,
      sensorIdOrEntity instanceof SensorItemBatchAttributeMappings
        ? sensorIdOrEntity
        : { SensorId: sensorIdOrEntity! }
    );
  }
}
