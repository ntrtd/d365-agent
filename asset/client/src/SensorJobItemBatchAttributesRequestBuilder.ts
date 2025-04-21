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
import { SensorJobItemBatchAttributes } from './SensorJobItemBatchAttributes';

/**
 * Request builder class for operations supported on the {@link SensorJobItemBatchAttributes} entity.
 */
export class SensorJobItemBatchAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SensorJobItemBatchAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `SensorJobItemBatchAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `SensorJobItemBatchAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<SensorJobItemBatchAttributes<T>, T> {
    return new GetAllRequestBuilder<SensorJobItemBatchAttributes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SensorJobItemBatchAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SensorJobItemBatchAttributes`.
   */
  create(
    entity: SensorJobItemBatchAttributes<T>
  ): CreateRequestBuilder<SensorJobItemBatchAttributes<T>, T> {
    return new CreateRequestBuilder<SensorJobItemBatchAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SensorJobItemBatchAttributes` entity based on its keys.
   * @param sensorId Key property. See {@link SensorJobItemBatchAttributes.sensorId}.
   * @param jobId Key property. See {@link SensorJobItemBatchAttributes.jobId}.
   * @param jobDataAreaId Key property. See {@link SensorJobItemBatchAttributes.jobDataAreaId}.
   * @returns A request builder for creating requests to retrieve one `SensorJobItemBatchAttributes` entity based on its keys.
   */
  getByKey(
    sensorId: DeserializedType<T, 'Edm.String'>,
    jobId: DeserializedType<T, 'Edm.String'>,
    jobDataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SensorJobItemBatchAttributes<T>, T> {
    return new GetByKeyRequestBuilder<SensorJobItemBatchAttributes<T>, T>(
      this.entityApi,
      {
        SensorId: sensorId,
        JobId: jobId,
        JobDataAreaId: jobDataAreaId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SensorJobItemBatchAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SensorJobItemBatchAttributes`.
   */
  update(
    entity: SensorJobItemBatchAttributes<T>
  ): UpdateRequestBuilder<SensorJobItemBatchAttributes<T>, T> {
    return new UpdateRequestBuilder<SensorJobItemBatchAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SensorJobItemBatchAttributes`.
   * @param sensorId Key property. See {@link SensorJobItemBatchAttributes.sensorId}.
   * @param jobId Key property. See {@link SensorJobItemBatchAttributes.jobId}.
   * @param jobDataAreaId Key property. See {@link SensorJobItemBatchAttributes.jobDataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `SensorJobItemBatchAttributes`.
   */
  delete(
    sensorId: string,
    jobId: string,
    jobDataAreaId: string
  ): DeleteRequestBuilder<SensorJobItemBatchAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SensorJobItemBatchAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SensorJobItemBatchAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: SensorJobItemBatchAttributes<T>
  ): DeleteRequestBuilder<SensorJobItemBatchAttributes<T>, T>;
  delete(
    sensorIdOrEntity: any,
    jobId?: string,
    jobDataAreaId?: string
  ): DeleteRequestBuilder<SensorJobItemBatchAttributes<T>, T> {
    return new DeleteRequestBuilder<SensorJobItemBatchAttributes<T>, T>(
      this.entityApi,
      sensorIdOrEntity instanceof SensorJobItemBatchAttributes
        ? sensorIdOrEntity
        : {
            SensorId: sensorIdOrEntity!,
            JobId: jobId!,
            JobDataAreaId: jobDataAreaId!
          }
    );
  }
}
