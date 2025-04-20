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
import { JobPreferredEducationDisciplines } from './JobPreferredEducationDisciplines';

/**
 * Request builder class for operations supported on the {@link JobPreferredEducationDisciplines} entity.
 */
export class JobPreferredEducationDisciplinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobPreferredEducationDisciplines<T>, T> {
  /**
   * Returns a request builder for querying all `JobPreferredEducationDisciplines` entities.
   * @returns A request builder for creating requests to retrieve all `JobPreferredEducationDisciplines` entities.
   */
  getAll(): GetAllRequestBuilder<JobPreferredEducationDisciplines<T>, T> {
    return new GetAllRequestBuilder<JobPreferredEducationDisciplines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `JobPreferredEducationDisciplines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobPreferredEducationDisciplines`.
   */
  create(
    entity: JobPreferredEducationDisciplines<T>
  ): CreateRequestBuilder<JobPreferredEducationDisciplines<T>, T> {
    return new CreateRequestBuilder<JobPreferredEducationDisciplines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobPreferredEducationDisciplines` entity based on its keys.
   * @param jobId Key property. See {@link JobPreferredEducationDisciplines.jobId}.
   * @param educationId Key property. See {@link JobPreferredEducationDisciplines.educationId}.
   * @returns A request builder for creating requests to retrieve one `JobPreferredEducationDisciplines` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>,
    educationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobPreferredEducationDisciplines<T>, T> {
    return new GetByKeyRequestBuilder<JobPreferredEducationDisciplines<T>, T>(
      this.entityApi,
      {
        JobId: jobId,
        EducationId: educationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JobPreferredEducationDisciplines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobPreferredEducationDisciplines`.
   */
  update(
    entity: JobPreferredEducationDisciplines<T>
  ): UpdateRequestBuilder<JobPreferredEducationDisciplines<T>, T> {
    return new UpdateRequestBuilder<JobPreferredEducationDisciplines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobPreferredEducationDisciplines`.
   * @param jobId Key property. See {@link JobPreferredEducationDisciplines.jobId}.
   * @param educationId Key property. See {@link JobPreferredEducationDisciplines.educationId}.
   * @returns A request builder for creating requests that delete an entity of type `JobPreferredEducationDisciplines`.
   */
  delete(
    jobId: string,
    educationId: string
  ): DeleteRequestBuilder<JobPreferredEducationDisciplines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobPreferredEducationDisciplines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobPreferredEducationDisciplines` by taking the entity as a parameter.
   */
  delete(
    entity: JobPreferredEducationDisciplines<T>
  ): DeleteRequestBuilder<JobPreferredEducationDisciplines<T>, T>;
  delete(
    jobIdOrEntity: any,
    educationId?: string
  ): DeleteRequestBuilder<JobPreferredEducationDisciplines<T>, T> {
    return new DeleteRequestBuilder<JobPreferredEducationDisciplines<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof JobPreferredEducationDisciplines
        ? jobIdOrEntity
        : {
            JobId: jobIdOrEntity!,
            EducationId: educationId!
          }
    );
  }
}
