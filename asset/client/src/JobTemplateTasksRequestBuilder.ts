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
import { JobTemplateTasks } from './JobTemplateTasks';

/**
 * Request builder class for operations supported on the {@link JobTemplateTasks} entity.
 */
export class JobTemplateTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobTemplateTasks<T>, T> {
  /**
   * Returns a request builder for querying all `JobTemplateTasks` entities.
   * @returns A request builder for creating requests to retrieve all `JobTemplateTasks` entities.
   */
  getAll(): GetAllRequestBuilder<JobTemplateTasks<T>, T> {
    return new GetAllRequestBuilder<JobTemplateTasks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobTemplateTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobTemplateTasks`.
   */
  create(
    entity: JobTemplateTasks<T>
  ): CreateRequestBuilder<JobTemplateTasks<T>, T> {
    return new CreateRequestBuilder<JobTemplateTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobTemplateTasks` entity based on its keys.
   * @param jobTemplateId Key property. See {@link JobTemplateTasks.jobTemplateId}.
   * @param jobTaskId Key property. See {@link JobTemplateTasks.jobTaskId}.
   * @returns A request builder for creating requests to retrieve one `JobTemplateTasks` entity based on its keys.
   */
  getByKey(
    jobTemplateId: DeserializedType<T, 'Edm.String'>,
    jobTaskId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobTemplateTasks<T>, T> {
    return new GetByKeyRequestBuilder<JobTemplateTasks<T>, T>(this.entityApi, {
      JobTemplateId: jobTemplateId,
      JobTaskId: jobTaskId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JobTemplateTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobTemplateTasks`.
   */
  update(
    entity: JobTemplateTasks<T>
  ): UpdateRequestBuilder<JobTemplateTasks<T>, T> {
    return new UpdateRequestBuilder<JobTemplateTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobTemplateTasks`.
   * @param jobTemplateId Key property. See {@link JobTemplateTasks.jobTemplateId}.
   * @param jobTaskId Key property. See {@link JobTemplateTasks.jobTaskId}.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateTasks`.
   */
  delete(
    jobTemplateId: string,
    jobTaskId: string
  ): DeleteRequestBuilder<JobTemplateTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobTemplateTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateTasks` by taking the entity as a parameter.
   */
  delete(
    entity: JobTemplateTasks<T>
  ): DeleteRequestBuilder<JobTemplateTasks<T>, T>;
  delete(
    jobTemplateIdOrEntity: any,
    jobTaskId?: string
  ): DeleteRequestBuilder<JobTemplateTasks<T>, T> {
    return new DeleteRequestBuilder<JobTemplateTasks<T>, T>(
      this.entityApi,
      jobTemplateIdOrEntity instanceof JobTemplateTasks
        ? jobTemplateIdOrEntity
        : {
            JobTemplateId: jobTemplateIdOrEntity!,
            JobTaskId: jobTaskId!
          }
    );
  }
}
