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
import { JobTaskAssignments } from './JobTaskAssignments';

/**
 * Request builder class for operations supported on the {@link JobTaskAssignments} entity.
 */
export class JobTaskAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobTaskAssignments<T>, T> {
  /**
   * Returns a request builder for querying all `JobTaskAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `JobTaskAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<JobTaskAssignments<T>, T> {
    return new GetAllRequestBuilder<JobTaskAssignments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobTaskAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobTaskAssignments`.
   */
  create(
    entity: JobTaskAssignments<T>
  ): CreateRequestBuilder<JobTaskAssignments<T>, T> {
    return new CreateRequestBuilder<JobTaskAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobTaskAssignments` entity based on its keys.
   * @param jobId Key property. See {@link JobTaskAssignments.jobId}.
   * @param jobTaskId Key property. See {@link JobTaskAssignments.jobTaskId}.
   * @returns A request builder for creating requests to retrieve one `JobTaskAssignments` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>,
    jobTaskId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobTaskAssignments<T>, T> {
    return new GetByKeyRequestBuilder<JobTaskAssignments<T>, T>(
      this.entityApi,
      {
        JobId: jobId,
        JobTaskId: jobTaskId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JobTaskAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobTaskAssignments`.
   */
  update(
    entity: JobTaskAssignments<T>
  ): UpdateRequestBuilder<JobTaskAssignments<T>, T> {
    return new UpdateRequestBuilder<JobTaskAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobTaskAssignments`.
   * @param jobId Key property. See {@link JobTaskAssignments.jobId}.
   * @param jobTaskId Key property. See {@link JobTaskAssignments.jobTaskId}.
   * @returns A request builder for creating requests that delete an entity of type `JobTaskAssignments`.
   */
  delete(
    jobId: string,
    jobTaskId: string
  ): DeleteRequestBuilder<JobTaskAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobTaskAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobTaskAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: JobTaskAssignments<T>
  ): DeleteRequestBuilder<JobTaskAssignments<T>, T>;
  delete(
    jobIdOrEntity: any,
    jobTaskId?: string
  ): DeleteRequestBuilder<JobTaskAssignments<T>, T> {
    return new DeleteRequestBuilder<JobTaskAssignments<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof JobTaskAssignments
        ? jobIdOrEntity
        : {
            JobId: jobIdOrEntity!,
            JobTaskId: jobTaskId!
          }
    );
  }
}
