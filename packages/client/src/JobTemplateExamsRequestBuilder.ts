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
import { JobTemplateExams } from './JobTemplateExams';

/**
 * Request builder class for operations supported on the {@link JobTemplateExams} entity.
 */
export class JobTemplateExamsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobTemplateExams<T>, T> {
  /**
   * Returns a request builder for querying all `JobTemplateExams` entities.
   * @returns A request builder for creating requests to retrieve all `JobTemplateExams` entities.
   */
  getAll(): GetAllRequestBuilder<JobTemplateExams<T>, T> {
    return new GetAllRequestBuilder<JobTemplateExams<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobTemplateExams` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobTemplateExams`.
   */
  create(
    entity: JobTemplateExams<T>
  ): CreateRequestBuilder<JobTemplateExams<T>, T> {
    return new CreateRequestBuilder<JobTemplateExams<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobTemplateExams` entity based on its keys.
   * @param jobTemplateId Key property. See {@link JobTemplateExams.jobTemplateId}.
   * @param testId Key property. See {@link JobTemplateExams.testId}.
   * @returns A request builder for creating requests to retrieve one `JobTemplateExams` entity based on its keys.
   */
  getByKey(
    jobTemplateId: DeserializedType<T, 'Edm.String'>,
    testId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobTemplateExams<T>, T> {
    return new GetByKeyRequestBuilder<JobTemplateExams<T>, T>(this.entityApi, {
      JobTemplateId: jobTemplateId,
      TestId: testId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JobTemplateExams`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobTemplateExams`.
   */
  update(
    entity: JobTemplateExams<T>
  ): UpdateRequestBuilder<JobTemplateExams<T>, T> {
    return new UpdateRequestBuilder<JobTemplateExams<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobTemplateExams`.
   * @param jobTemplateId Key property. See {@link JobTemplateExams.jobTemplateId}.
   * @param testId Key property. See {@link JobTemplateExams.testId}.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateExams`.
   */
  delete(
    jobTemplateId: string,
    testId: string
  ): DeleteRequestBuilder<JobTemplateExams<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobTemplateExams`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateExams` by taking the entity as a parameter.
   */
  delete(
    entity: JobTemplateExams<T>
  ): DeleteRequestBuilder<JobTemplateExams<T>, T>;
  delete(
    jobTemplateIdOrEntity: any,
    testId?: string
  ): DeleteRequestBuilder<JobTemplateExams<T>, T> {
    return new DeleteRequestBuilder<JobTemplateExams<T>, T>(
      this.entityApi,
      jobTemplateIdOrEntity instanceof JobTemplateExams
        ? jobTemplateIdOrEntity
        : {
            JobTemplateId: jobTemplateIdOrEntity!,
            TestId: testId!
          }
    );
  }
}
