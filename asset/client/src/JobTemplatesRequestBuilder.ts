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
import { JobTemplates } from './JobTemplates';

/**
 * Request builder class for operations supported on the {@link JobTemplates} entity.
 */
export class JobTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `JobTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `JobTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<JobTemplates<T>, T> {
    return new GetAllRequestBuilder<JobTemplates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobTemplates`.
   */
  create(entity: JobTemplates<T>): CreateRequestBuilder<JobTemplates<T>, T> {
    return new CreateRequestBuilder<JobTemplates<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `JobTemplates` entity based on its keys.
   * @param jobTemplate Key property. See {@link JobTemplates.jobTemplate}.
   * @returns A request builder for creating requests to retrieve one `JobTemplates` entity based on its keys.
   */
  getByKey(
    jobTemplate: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobTemplates<T>, T> {
    return new GetByKeyRequestBuilder<JobTemplates<T>, T>(this.entityApi, {
      JobTemplate: jobTemplate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JobTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobTemplates`.
   */
  update(entity: JobTemplates<T>): UpdateRequestBuilder<JobTemplates<T>, T> {
    return new UpdateRequestBuilder<JobTemplates<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobTemplates`.
   * @param jobTemplate Key property. See {@link JobTemplates.jobTemplate}.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplates`.
   */
  delete(jobTemplate: string): DeleteRequestBuilder<JobTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplates` by taking the entity as a parameter.
   */
  delete(entity: JobTemplates<T>): DeleteRequestBuilder<JobTemplates<T>, T>;
  delete(jobTemplateOrEntity: any): DeleteRequestBuilder<JobTemplates<T>, T> {
    return new DeleteRequestBuilder<JobTemplates<T>, T>(
      this.entityApi,
      jobTemplateOrEntity instanceof JobTemplates
        ? jobTemplateOrEntity
        : { JobTemplate: jobTemplateOrEntity! }
    );
  }
}
