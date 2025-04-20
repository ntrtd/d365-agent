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
import { JobPreferredScreenings } from './JobPreferredScreenings';

/**
 * Request builder class for operations supported on the {@link JobPreferredScreenings} entity.
 */
export class JobPreferredScreeningsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobPreferredScreenings<T>, T> {
  /**
   * Returns a request builder for querying all `JobPreferredScreenings` entities.
   * @returns A request builder for creating requests to retrieve all `JobPreferredScreenings` entities.
   */
  getAll(): GetAllRequestBuilder<JobPreferredScreenings<T>, T> {
    return new GetAllRequestBuilder<JobPreferredScreenings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `JobPreferredScreenings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobPreferredScreenings`.
   */
  create(
    entity: JobPreferredScreenings<T>
  ): CreateRequestBuilder<JobPreferredScreenings<T>, T> {
    return new CreateRequestBuilder<JobPreferredScreenings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobPreferredScreenings` entity based on its keys.
   * @param jobId Key property. See {@link JobPreferredScreenings.jobId}.
   * @param screeningTypeId Key property. See {@link JobPreferredScreenings.screeningTypeId}.
   * @returns A request builder for creating requests to retrieve one `JobPreferredScreenings` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>,
    screeningTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobPreferredScreenings<T>, T> {
    return new GetByKeyRequestBuilder<JobPreferredScreenings<T>, T>(
      this.entityApi,
      {
        JobId: jobId,
        ScreeningTypeId: screeningTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JobPreferredScreenings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobPreferredScreenings`.
   */
  update(
    entity: JobPreferredScreenings<T>
  ): UpdateRequestBuilder<JobPreferredScreenings<T>, T> {
    return new UpdateRequestBuilder<JobPreferredScreenings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobPreferredScreenings`.
   * @param jobId Key property. See {@link JobPreferredScreenings.jobId}.
   * @param screeningTypeId Key property. See {@link JobPreferredScreenings.screeningTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `JobPreferredScreenings`.
   */
  delete(
    jobId: string,
    screeningTypeId: string
  ): DeleteRequestBuilder<JobPreferredScreenings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobPreferredScreenings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobPreferredScreenings` by taking the entity as a parameter.
   */
  delete(
    entity: JobPreferredScreenings<T>
  ): DeleteRequestBuilder<JobPreferredScreenings<T>, T>;
  delete(
    jobIdOrEntity: any,
    screeningTypeId?: string
  ): DeleteRequestBuilder<JobPreferredScreenings<T>, T> {
    return new DeleteRequestBuilder<JobPreferredScreenings<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof JobPreferredScreenings
        ? jobIdOrEntity
        : {
            JobId: jobIdOrEntity!,
            ScreeningTypeId: screeningTypeId!
          }
    );
  }
}
