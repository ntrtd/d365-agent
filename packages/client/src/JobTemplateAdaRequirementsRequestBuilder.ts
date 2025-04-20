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
import { JobTemplateAdaRequirements } from './JobTemplateAdaRequirements';

/**
 * Request builder class for operations supported on the {@link JobTemplateAdaRequirements} entity.
 */
export class JobTemplateAdaRequirementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobTemplateAdaRequirements<T>, T> {
  /**
   * Returns a request builder for querying all `JobTemplateAdaRequirements` entities.
   * @returns A request builder for creating requests to retrieve all `JobTemplateAdaRequirements` entities.
   */
  getAll(): GetAllRequestBuilder<JobTemplateAdaRequirements<T>, T> {
    return new GetAllRequestBuilder<JobTemplateAdaRequirements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `JobTemplateAdaRequirements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobTemplateAdaRequirements`.
   */
  create(
    entity: JobTemplateAdaRequirements<T>
  ): CreateRequestBuilder<JobTemplateAdaRequirements<T>, T> {
    return new CreateRequestBuilder<JobTemplateAdaRequirements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobTemplateAdaRequirements` entity based on its keys.
   * @param jobTemplateId Key property. See {@link JobTemplateAdaRequirements.jobTemplateId}.
   * @returns A request builder for creating requests to retrieve one `JobTemplateAdaRequirements` entity based on its keys.
   */
  getByKey(
    jobTemplateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobTemplateAdaRequirements<T>, T> {
    return new GetByKeyRequestBuilder<JobTemplateAdaRequirements<T>, T>(
      this.entityApi,
      { JobTemplateId: jobTemplateId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JobTemplateAdaRequirements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobTemplateAdaRequirements`.
   */
  update(
    entity: JobTemplateAdaRequirements<T>
  ): UpdateRequestBuilder<JobTemplateAdaRequirements<T>, T> {
    return new UpdateRequestBuilder<JobTemplateAdaRequirements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobTemplateAdaRequirements`.
   * @param jobTemplateId Key property. See {@link JobTemplateAdaRequirements.jobTemplateId}.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateAdaRequirements`.
   */
  delete(
    jobTemplateId: string
  ): DeleteRequestBuilder<JobTemplateAdaRequirements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobTemplateAdaRequirements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobTemplateAdaRequirements` by taking the entity as a parameter.
   */
  delete(
    entity: JobTemplateAdaRequirements<T>
  ): DeleteRequestBuilder<JobTemplateAdaRequirements<T>, T>;
  delete(
    jobTemplateIdOrEntity: any
  ): DeleteRequestBuilder<JobTemplateAdaRequirements<T>, T> {
    return new DeleteRequestBuilder<JobTemplateAdaRequirements<T>, T>(
      this.entityApi,
      jobTemplateIdOrEntity instanceof JobTemplateAdaRequirements
        ? jobTemplateIdOrEntity
        : { JobTemplateId: jobTemplateIdOrEntity! }
    );
  }
}
