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
import { JobPreferredSkills } from './JobPreferredSkills';

/**
 * Request builder class for operations supported on the {@link JobPreferredSkills} entity.
 */
export class JobPreferredSkillsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobPreferredSkills<T>, T> {
  /**
   * Returns a request builder for querying all `JobPreferredSkills` entities.
   * @returns A request builder for creating requests to retrieve all `JobPreferredSkills` entities.
   */
  getAll(): GetAllRequestBuilder<JobPreferredSkills<T>, T> {
    return new GetAllRequestBuilder<JobPreferredSkills<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobPreferredSkills` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobPreferredSkills`.
   */
  create(
    entity: JobPreferredSkills<T>
  ): CreateRequestBuilder<JobPreferredSkills<T>, T> {
    return new CreateRequestBuilder<JobPreferredSkills<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobPreferredSkills` entity based on its keys.
   * @param jobId Key property. See {@link JobPreferredSkills.jobId}.
   * @param skillId Key property. See {@link JobPreferredSkills.skillId}.
   * @returns A request builder for creating requests to retrieve one `JobPreferredSkills` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>,
    skillId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobPreferredSkills<T>, T> {
    return new GetByKeyRequestBuilder<JobPreferredSkills<T>, T>(
      this.entityApi,
      {
        JobId: jobId,
        SkillId: skillId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JobPreferredSkills`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobPreferredSkills`.
   */
  update(
    entity: JobPreferredSkills<T>
  ): UpdateRequestBuilder<JobPreferredSkills<T>, T> {
    return new UpdateRequestBuilder<JobPreferredSkills<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobPreferredSkills`.
   * @param jobId Key property. See {@link JobPreferredSkills.jobId}.
   * @param skillId Key property. See {@link JobPreferredSkills.skillId}.
   * @returns A request builder for creating requests that delete an entity of type `JobPreferredSkills`.
   */
  delete(
    jobId: string,
    skillId: string
  ): DeleteRequestBuilder<JobPreferredSkills<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobPreferredSkills`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobPreferredSkills` by taking the entity as a parameter.
   */
  delete(
    entity: JobPreferredSkills<T>
  ): DeleteRequestBuilder<JobPreferredSkills<T>, T>;
  delete(
    jobIdOrEntity: any,
    skillId?: string
  ): DeleteRequestBuilder<JobPreferredSkills<T>, T> {
    return new DeleteRequestBuilder<JobPreferredSkills<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof JobPreferredSkills
        ? jobIdOrEntity
        : {
            JobId: jobIdOrEntity!,
            SkillId: skillId!
          }
    );
  }
}
