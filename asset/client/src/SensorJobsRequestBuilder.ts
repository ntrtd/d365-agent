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
import { SensorJobs } from './SensorJobs';

/**
 * Request builder class for operations supported on the {@link SensorJobs} entity.
 */
export class SensorJobsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SensorJobs<T>, T> {
  /**
   * Returns a request builder for querying all `SensorJobs` entities.
   * @returns A request builder for creating requests to retrieve all `SensorJobs` entities.
   */
  getAll(): GetAllRequestBuilder<SensorJobs<T>, T> {
    return new GetAllRequestBuilder<SensorJobs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SensorJobs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SensorJobs`.
   */
  create(entity: SensorJobs<T>): CreateRequestBuilder<SensorJobs<T>, T> {
    return new CreateRequestBuilder<SensorJobs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SensorJobs` entity based on its keys.
   * @param sensorId Key property. See {@link SensorJobs.sensorId}.
   * @param jobId Key property. See {@link SensorJobs.jobId}.
   * @param jobDataAreaId Key property. See {@link SensorJobs.jobDataAreaId}.
   * @returns A request builder for creating requests to retrieve one `SensorJobs` entity based on its keys.
   */
  getByKey(
    sensorId: DeserializedType<T, 'Edm.String'>,
    jobId: DeserializedType<T, 'Edm.String'>,
    jobDataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SensorJobs<T>, T> {
    return new GetByKeyRequestBuilder<SensorJobs<T>, T>(this.entityApi, {
      SensorId: sensorId,
      JobId: jobId,
      JobDataAreaId: jobDataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SensorJobs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SensorJobs`.
   */
  update(entity: SensorJobs<T>): UpdateRequestBuilder<SensorJobs<T>, T> {
    return new UpdateRequestBuilder<SensorJobs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SensorJobs`.
   * @param sensorId Key property. See {@link SensorJobs.sensorId}.
   * @param jobId Key property. See {@link SensorJobs.jobId}.
   * @param jobDataAreaId Key property. See {@link SensorJobs.jobDataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `SensorJobs`.
   */
  delete(
    sensorId: string,
    jobId: string,
    jobDataAreaId: string
  ): DeleteRequestBuilder<SensorJobs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SensorJobs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SensorJobs` by taking the entity as a parameter.
   */
  delete(entity: SensorJobs<T>): DeleteRequestBuilder<SensorJobs<T>, T>;
  delete(
    sensorIdOrEntity: any,
    jobId?: string,
    jobDataAreaId?: string
  ): DeleteRequestBuilder<SensorJobs<T>, T> {
    return new DeleteRequestBuilder<SensorJobs<T>, T>(
      this.entityApi,
      sensorIdOrEntity instanceof SensorJobs
        ? sensorIdOrEntity
        : {
            SensorId: sensorIdOrEntity!,
            JobId: jobId!,
            JobDataAreaId: jobDataAreaId!
          }
    );
  }
}
