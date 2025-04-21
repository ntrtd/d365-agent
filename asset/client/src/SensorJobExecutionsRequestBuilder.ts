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
import { SensorJobExecutions } from './SensorJobExecutions';

/**
 * Request builder class for operations supported on the {@link SensorJobExecutions} entity.
 */
export class SensorJobExecutionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SensorJobExecutions<T>, T> {
  /**
   * Returns a request builder for querying all `SensorJobExecutions` entities.
   * @returns A request builder for creating requests to retrieve all `SensorJobExecutions` entities.
   */
  getAll(): GetAllRequestBuilder<SensorJobExecutions<T>, T> {
    return new GetAllRequestBuilder<SensorJobExecutions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SensorJobExecutions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SensorJobExecutions`.
   */
  create(
    entity: SensorJobExecutions<T>
  ): CreateRequestBuilder<SensorJobExecutions<T>, T> {
    return new CreateRequestBuilder<SensorJobExecutions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SensorJobExecutions` entity based on its keys.
   * @param sensorId Key property. See {@link SensorJobExecutions.sensorId}.
   * @param jobId Key property. See {@link SensorJobExecutions.jobId}.
   * @returns A request builder for creating requests to retrieve one `SensorJobExecutions` entity based on its keys.
   */
  getByKey(
    sensorId: DeserializedType<T, 'Edm.String'>,
    jobId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SensorJobExecutions<T>, T> {
    return new GetByKeyRequestBuilder<SensorJobExecutions<T>, T>(
      this.entityApi,
      {
        SensorId: sensorId,
        JobId: jobId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SensorJobExecutions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SensorJobExecutions`.
   */
  update(
    entity: SensorJobExecutions<T>
  ): UpdateRequestBuilder<SensorJobExecutions<T>, T> {
    return new UpdateRequestBuilder<SensorJobExecutions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SensorJobExecutions`.
   * @param sensorId Key property. See {@link SensorJobExecutions.sensorId}.
   * @param jobId Key property. See {@link SensorJobExecutions.jobId}.
   * @returns A request builder for creating requests that delete an entity of type `SensorJobExecutions`.
   */
  delete(
    sensorId: string,
    jobId: string
  ): DeleteRequestBuilder<SensorJobExecutions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SensorJobExecutions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SensorJobExecutions` by taking the entity as a parameter.
   */
  delete(
    entity: SensorJobExecutions<T>
  ): DeleteRequestBuilder<SensorJobExecutions<T>, T>;
  delete(
    sensorIdOrEntity: any,
    jobId?: string
  ): DeleteRequestBuilder<SensorJobExecutions<T>, T> {
    return new DeleteRequestBuilder<SensorJobExecutions<T>, T>(
      this.entityApi,
      sensorIdOrEntity instanceof SensorJobExecutions
        ? sensorIdOrEntity
        : {
            SensorId: sensorIdOrEntity!,
            JobId: jobId!
          }
    );
  }
}
