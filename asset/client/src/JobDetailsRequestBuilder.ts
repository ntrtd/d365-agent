/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { JobDetails } from './JobDetails';

/**
 * Request builder class for operations supported on the {@link JobDetails} entity.
 */
export class JobDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobDetails<T>, T> {
  /**
   * Returns a request builder for querying all `JobDetails` entities.
   * @returns A request builder for creating requests to retrieve all `JobDetails` entities.
   */
  getAll(): GetAllRequestBuilder<JobDetails<T>, T> {
    return new GetAllRequestBuilder<JobDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobDetails`.
   */
  create(entity: JobDetails<T>): CreateRequestBuilder<JobDetails<T>, T> {
    return new CreateRequestBuilder<JobDetails<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `JobDetails` entity based on its keys.
   * @param jobId Key property. See {@link JobDetails.jobId}.
   * @param validFrom Key property. See {@link JobDetails.validFrom}.
   * @param validTo Key property. See {@link JobDetails.validTo}.
   * @returns A request builder for creating requests to retrieve one `JobDetails` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<JobDetails<T>, T> {
    return new GetByKeyRequestBuilder<JobDetails<T>, T>(this.entityApi, {
      JobId: jobId,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JobDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobDetails`.
   */
  update(entity: JobDetails<T>): UpdateRequestBuilder<JobDetails<T>, T> {
    return new UpdateRequestBuilder<JobDetails<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobDetails`.
   * @param jobId Key property. See {@link JobDetails.jobId}.
   * @param validFrom Key property. See {@link JobDetails.validFrom}.
   * @param validTo Key property. See {@link JobDetails.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `JobDetails`.
   */
  delete(
    jobId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<JobDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobDetails` by taking the entity as a parameter.
   */
  delete(entity: JobDetails<T>): DeleteRequestBuilder<JobDetails<T>, T>;
  delete(
    jobIdOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<JobDetails<T>, T> {
    return new DeleteRequestBuilder<JobDetails<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof JobDetails
        ? jobIdOrEntity
        : {
            JobId: jobIdOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
