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
import { JobPreferredExams } from './JobPreferredExams';

/**
 * Request builder class for operations supported on the {@link JobPreferredExams} entity.
 */
export class JobPreferredExamsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobPreferredExams<T>, T> {
  /**
   * Returns a request builder for querying all `JobPreferredExams` entities.
   * @returns A request builder for creating requests to retrieve all `JobPreferredExams` entities.
   */
  getAll(): GetAllRequestBuilder<JobPreferredExams<T>, T> {
    return new GetAllRequestBuilder<JobPreferredExams<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobPreferredExams` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobPreferredExams`.
   */
  create(
    entity: JobPreferredExams<T>
  ): CreateRequestBuilder<JobPreferredExams<T>, T> {
    return new CreateRequestBuilder<JobPreferredExams<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobPreferredExams` entity based on its keys.
   * @param jobId Key property. See {@link JobPreferredExams.jobId}.
   * @param testId Key property. See {@link JobPreferredExams.testId}.
   * @returns A request builder for creating requests to retrieve one `JobPreferredExams` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>,
    testId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobPreferredExams<T>, T> {
    return new GetByKeyRequestBuilder<JobPreferredExams<T>, T>(this.entityApi, {
      JobId: jobId,
      TestId: testId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JobPreferredExams`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobPreferredExams`.
   */
  update(
    entity: JobPreferredExams<T>
  ): UpdateRequestBuilder<JobPreferredExams<T>, T> {
    return new UpdateRequestBuilder<JobPreferredExams<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobPreferredExams`.
   * @param jobId Key property. See {@link JobPreferredExams.jobId}.
   * @param testId Key property. See {@link JobPreferredExams.testId}.
   * @returns A request builder for creating requests that delete an entity of type `JobPreferredExams`.
   */
  delete(
    jobId: string,
    testId: string
  ): DeleteRequestBuilder<JobPreferredExams<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobPreferredExams`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobPreferredExams` by taking the entity as a parameter.
   */
  delete(
    entity: JobPreferredExams<T>
  ): DeleteRequestBuilder<JobPreferredExams<T>, T>;
  delete(
    jobIdOrEntity: any,
    testId?: string
  ): DeleteRequestBuilder<JobPreferredExams<T>, T> {
    return new DeleteRequestBuilder<JobPreferredExams<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof JobPreferredExams
        ? jobIdOrEntity
        : {
            JobId: jobIdOrEntity!,
            TestId: testId!
          }
    );
  }
}
