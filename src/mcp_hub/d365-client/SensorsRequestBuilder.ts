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
import { Sensors } from './Sensors';

/**
 * Request builder class for operations supported on the {@link Sensors} entity.
 */
export class SensorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Sensors<T>, T> {
  /**
   * Returns a request builder for querying all `Sensors` entities.
   * @returns A request builder for creating requests to retrieve all `Sensors` entities.
   */
  getAll(): GetAllRequestBuilder<Sensors<T>, T> {
    return new GetAllRequestBuilder<Sensors<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Sensors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Sensors`.
   */
  create(entity: Sensors<T>): CreateRequestBuilder<Sensors<T>, T> {
    return new CreateRequestBuilder<Sensors<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Sensors` entity based on its keys.
   * @param sensorId Key property. See {@link Sensors.sensorId}.
   * @returns A request builder for creating requests to retrieve one `Sensors` entity based on its keys.
   */
  getByKey(
    sensorId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Sensors<T>, T> {
    return new GetByKeyRequestBuilder<Sensors<T>, T>(this.entityApi, {
      SensorId: sensorId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Sensors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Sensors`.
   */
  update(entity: Sensors<T>): UpdateRequestBuilder<Sensors<T>, T> {
    return new UpdateRequestBuilder<Sensors<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Sensors`.
   * @param sensorId Key property. See {@link Sensors.sensorId}.
   * @returns A request builder for creating requests that delete an entity of type `Sensors`.
   */
  delete(sensorId: string): DeleteRequestBuilder<Sensors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Sensors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Sensors` by taking the entity as a parameter.
   */
  delete(entity: Sensors<T>): DeleteRequestBuilder<Sensors<T>, T>;
  delete(sensorIdOrEntity: any): DeleteRequestBuilder<Sensors<T>, T> {
    return new DeleteRequestBuilder<Sensors<T>, T>(
      this.entityApi,
      sensorIdOrEntity instanceof Sensors
        ? sensorIdOrEntity
        : { SensorId: sensorIdOrEntity! }
    );
  }
}
