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
import { JobTemplateSkills } from './JobTemplateSkills';

/**
 * Request builder class for operations supported on the {@link JobTemplateSkills} entity.
 */
export class JobTemplateSkillsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobTemplateSkills<T>, T> {
  /**
   * Returns a request builder for querying all `JobTemplateSkills` entities.
   * @returns A request builder for creating requests to retrieve all `JobTemplateSkills` entities.
   */
  getAll(): GetAllRequestBuilder<JobTemplateSkills<T>, T> {
    return new GetAllRequestBuilder<JobTemplateSkills<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobTemplateSkills` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobTemplateSkills`.
   */
  create(
    entity: JobTemplateSkills<T>
  ): CreateRequestBuilder<JobTemplateSkills<T>, T> {
    return new CreateRequestBuilder<JobTemplateSkills<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobTemplateSkills` entity based on its keys.
   * @param jobTemplateId Key property. See {@link JobTemplateSkills.jobTemplateId}.
   * @param skillId Key property. See {@link JobTemplateSkills.skillId}.
   * @returns A request builder for creating requests to retrieve one `JobTemplateSkills` entity based on its keys.
   */
  getByKey(
    jobTemplateId: DeserializedType<T, 'Edm.String'>,
    skillId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobTemplateSkills<T>, T> {
    return new GetByKeyRequestBuilder<JobTemplateSkills<T>, T>(this.entityApi, {
      JobTemplateId: jobTemplateId,
      SkillId: skillId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JobTemplateSkills`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobTemplateSkills`.
   */
  update(
    entity: JobTemplateSkills<T>
  ): UpdateRequestBuilder<JobTemplateSkills<T>, T> {
    return new UpdateRequestBuilder<JobTemplateSkills<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobTemplateSkills`.
   * @param jobTemplateId Key property. See {@link JobTemplateSkills.jobTemplateId}.
   * @param skillId Key property. See {@link JobTemplateSkills.skillId}.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateSkills`.
   */
  delete(
    jobTemplateId: string,
    skillId: string
  ): DeleteRequestBuilder<JobTemplateSkills<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobTemplateSkills`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateSkills` by taking the entity as a parameter.
   */
  delete(
    entity: JobTemplateSkills<T>
  ): DeleteRequestBuilder<JobTemplateSkills<T>, T>;
  delete(
    jobTemplateIdOrEntity: any,
    skillId?: string
  ): DeleteRequestBuilder<JobTemplateSkills<T>, T> {
    return new DeleteRequestBuilder<JobTemplateSkills<T>, T>(
      this.entityApi,
      jobTemplateIdOrEntity instanceof JobTemplateSkills
        ? jobTemplateIdOrEntity
        : {
            JobTemplateId: jobTemplateIdOrEntity!,
            SkillId: skillId!
          }
    );
  }
}
