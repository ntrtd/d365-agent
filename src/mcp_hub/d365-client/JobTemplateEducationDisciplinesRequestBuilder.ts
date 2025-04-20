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
import { JobTemplateEducationDisciplines } from './JobTemplateEducationDisciplines';

/**
 * Request builder class for operations supported on the {@link JobTemplateEducationDisciplines} entity.
 */
export class JobTemplateEducationDisciplinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobTemplateEducationDisciplines<T>, T> {
  /**
   * Returns a request builder for querying all `JobTemplateEducationDisciplines` entities.
   * @returns A request builder for creating requests to retrieve all `JobTemplateEducationDisciplines` entities.
   */
  getAll(): GetAllRequestBuilder<JobTemplateEducationDisciplines<T>, T> {
    return new GetAllRequestBuilder<JobTemplateEducationDisciplines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `JobTemplateEducationDisciplines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobTemplateEducationDisciplines`.
   */
  create(
    entity: JobTemplateEducationDisciplines<T>
  ): CreateRequestBuilder<JobTemplateEducationDisciplines<T>, T> {
    return new CreateRequestBuilder<JobTemplateEducationDisciplines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobTemplateEducationDisciplines` entity based on its keys.
   * @param jobTemplateId Key property. See {@link JobTemplateEducationDisciplines.jobTemplateId}.
   * @param educationId Key property. See {@link JobTemplateEducationDisciplines.educationId}.
   * @returns A request builder for creating requests to retrieve one `JobTemplateEducationDisciplines` entity based on its keys.
   */
  getByKey(
    jobTemplateId: DeserializedType<T, 'Edm.String'>,
    educationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobTemplateEducationDisciplines<T>, T> {
    return new GetByKeyRequestBuilder<JobTemplateEducationDisciplines<T>, T>(
      this.entityApi,
      {
        JobTemplateId: jobTemplateId,
        EducationId: educationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JobTemplateEducationDisciplines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobTemplateEducationDisciplines`.
   */
  update(
    entity: JobTemplateEducationDisciplines<T>
  ): UpdateRequestBuilder<JobTemplateEducationDisciplines<T>, T> {
    return new UpdateRequestBuilder<JobTemplateEducationDisciplines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobTemplateEducationDisciplines`.
   * @param jobTemplateId Key property. See {@link JobTemplateEducationDisciplines.jobTemplateId}.
   * @param educationId Key property. See {@link JobTemplateEducationDisciplines.educationId}.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateEducationDisciplines`.
   */
  delete(
    jobTemplateId: string,
    educationId: string
  ): DeleteRequestBuilder<JobTemplateEducationDisciplines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobTemplateEducationDisciplines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateEducationDisciplines` by taking the entity as a parameter.
   */
  delete(
    entity: JobTemplateEducationDisciplines<T>
  ): DeleteRequestBuilder<JobTemplateEducationDisciplines<T>, T>;
  delete(
    jobTemplateIdOrEntity: any,
    educationId?: string
  ): DeleteRequestBuilder<JobTemplateEducationDisciplines<T>, T> {
    return new DeleteRequestBuilder<JobTemplateEducationDisciplines<T>, T>(
      this.entityApi,
      jobTemplateIdOrEntity instanceof JobTemplateEducationDisciplines
        ? jobTemplateIdOrEntity
        : {
            JobTemplateId: jobTemplateIdOrEntity!,
            EducationId: educationId!
          }
    );
  }
}
