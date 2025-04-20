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
import { JobTasks } from './JobTasks';

/**
 * Request builder class for operations supported on the {@link JobTasks} entity.
 */
export class JobTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobTasks<T>, T> {
  /**
   * Returns a request builder for querying all `JobTasks` entities.
   * @returns A request builder for creating requests to retrieve all `JobTasks` entities.
   */
  getAll(): GetAllRequestBuilder<JobTasks<T>, T> {
    return new GetAllRequestBuilder<JobTasks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobTasks`.
   */
  create(entity: JobTasks<T>): CreateRequestBuilder<JobTasks<T>, T> {
    return new CreateRequestBuilder<JobTasks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `JobTasks` entity based on its keys.
   * @param jobTaskId Key property. See {@link JobTasks.jobTaskId}.
   * @returns A request builder for creating requests to retrieve one `JobTasks` entity based on its keys.
   */
  getByKey(
    jobTaskId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobTasks<T>, T> {
    return new GetByKeyRequestBuilder<JobTasks<T>, T>(this.entityApi, {
      JobTaskId: jobTaskId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JobTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobTasks`.
   */
  update(entity: JobTasks<T>): UpdateRequestBuilder<JobTasks<T>, T> {
    return new UpdateRequestBuilder<JobTasks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobTasks`.
   * @param jobTaskId Key property. See {@link JobTasks.jobTaskId}.
   * @returns A request builder for creating requests that delete an entity of type `JobTasks`.
   */
  delete(jobTaskId: string): DeleteRequestBuilder<JobTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobTasks` by taking the entity as a parameter.
   */
  delete(entity: JobTasks<T>): DeleteRequestBuilder<JobTasks<T>, T>;
  delete(jobTaskIdOrEntity: any): DeleteRequestBuilder<JobTasks<T>, T> {
    return new DeleteRequestBuilder<JobTasks<T>, T>(
      this.entityApi,
      jobTaskIdOrEntity instanceof JobTasks
        ? jobTaskIdOrEntity
        : { JobTaskId: jobTaskIdOrEntity! }
    );
  }
}
