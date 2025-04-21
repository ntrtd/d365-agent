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
import { Measurements } from './Measurements';

/**
 * Request builder class for operations supported on the {@link Measurements} entity.
 */
export class MeasurementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Measurements<T>, T> {
  /**
   * Returns a request builder for querying all `Measurements` entities.
   * @returns A request builder for creating requests to retrieve all `Measurements` entities.
   */
  getAll(): GetAllRequestBuilder<Measurements<T>, T> {
    return new GetAllRequestBuilder<Measurements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Measurements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Measurements`.
   */
  create(entity: Measurements<T>): CreateRequestBuilder<Measurements<T>, T> {
    return new CreateRequestBuilder<Measurements<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Measurements` entity based on its keys.
   * @param measurementId Key property. See {@link Measurements.measurementId}.
   * @returns A request builder for creating requests to retrieve one `Measurements` entity based on its keys.
   */
  getByKey(
    measurementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Measurements<T>, T> {
    return new GetByKeyRequestBuilder<Measurements<T>, T>(this.entityApi, {
      MeasurementId: measurementId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Measurements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Measurements`.
   */
  update(entity: Measurements<T>): UpdateRequestBuilder<Measurements<T>, T> {
    return new UpdateRequestBuilder<Measurements<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Measurements`.
   * @param measurementId Key property. See {@link Measurements.measurementId}.
   * @returns A request builder for creating requests that delete an entity of type `Measurements`.
   */
  delete(measurementId: string): DeleteRequestBuilder<Measurements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Measurements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Measurements` by taking the entity as a parameter.
   */
  delete(entity: Measurements<T>): DeleteRequestBuilder<Measurements<T>, T>;
  delete(measurementIdOrEntity: any): DeleteRequestBuilder<Measurements<T>, T> {
    return new DeleteRequestBuilder<Measurements<T>, T>(
      this.entityApi,
      measurementIdOrEntity instanceof Measurements
        ? measurementIdOrEntity
        : { MeasurementId: measurementIdOrEntity! }
    );
  }
}
