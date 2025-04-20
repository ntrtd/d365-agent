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
import { JobAdaRequirements } from './JobAdaRequirements';

/**
 * Request builder class for operations supported on the {@link JobAdaRequirements} entity.
 */
export class JobAdaRequirementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobAdaRequirements<T>, T> {
  /**
   * Returns a request builder for querying all `JobAdaRequirements` entities.
   * @returns A request builder for creating requests to retrieve all `JobAdaRequirements` entities.
   */
  getAll(): GetAllRequestBuilder<JobAdaRequirements<T>, T> {
    return new GetAllRequestBuilder<JobAdaRequirements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobAdaRequirements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobAdaRequirements`.
   */
  create(
    entity: JobAdaRequirements<T>
  ): CreateRequestBuilder<JobAdaRequirements<T>, T> {
    return new CreateRequestBuilder<JobAdaRequirements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobAdaRequirements` entity based on its keys.
   * @param jobId Key property. See {@link JobAdaRequirements.jobId}.
   * @returns A request builder for creating requests to retrieve one `JobAdaRequirements` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobAdaRequirements<T>, T> {
    return new GetByKeyRequestBuilder<JobAdaRequirements<T>, T>(
      this.entityApi,
      { JobId: jobId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JobAdaRequirements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobAdaRequirements`.
   */
  update(
    entity: JobAdaRequirements<T>
  ): UpdateRequestBuilder<JobAdaRequirements<T>, T> {
    return new UpdateRequestBuilder<JobAdaRequirements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobAdaRequirements`.
   * @param jobId Key property. See {@link JobAdaRequirements.jobId}.
   * @returns A request builder for creating requests that delete an entity of type `JobAdaRequirements`.
   */
  delete(jobId: string): DeleteRequestBuilder<JobAdaRequirements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobAdaRequirements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobAdaRequirements` by taking the entity as a parameter.
   */
  delete(
    entity: JobAdaRequirements<T>
  ): DeleteRequestBuilder<JobAdaRequirements<T>, T>;
  delete(jobIdOrEntity: any): DeleteRequestBuilder<JobAdaRequirements<T>, T> {
    return new DeleteRequestBuilder<JobAdaRequirements<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof JobAdaRequirements
        ? jobIdOrEntity
        : { JobId: jobIdOrEntity! }
    );
  }
}
