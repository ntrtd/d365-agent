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
import { JobResponsibilities } from './JobResponsibilities';

/**
 * Request builder class for operations supported on the {@link JobResponsibilities} entity.
 */
export class JobResponsibilitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobResponsibilities<T>, T> {
  /**
   * Returns a request builder for querying all `JobResponsibilities` entities.
   * @returns A request builder for creating requests to retrieve all `JobResponsibilities` entities.
   */
  getAll(): GetAllRequestBuilder<JobResponsibilities<T>, T> {
    return new GetAllRequestBuilder<JobResponsibilities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobResponsibilities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobResponsibilities`.
   */
  create(
    entity: JobResponsibilities<T>
  ): CreateRequestBuilder<JobResponsibilities<T>, T> {
    return new CreateRequestBuilder<JobResponsibilities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobResponsibilities` entity based on its keys.
   * @param jobId Key property. See {@link JobResponsibilities.jobId}.
   * @param areaOfResponsibilityId Key property. See {@link JobResponsibilities.areaOfResponsibilityId}.
   * @returns A request builder for creating requests to retrieve one `JobResponsibilities` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>,
    areaOfResponsibilityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobResponsibilities<T>, T> {
    return new GetByKeyRequestBuilder<JobResponsibilities<T>, T>(
      this.entityApi,
      {
        JobId: jobId,
        AreaOfResponsibilityId: areaOfResponsibilityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JobResponsibilities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobResponsibilities`.
   */
  update(
    entity: JobResponsibilities<T>
  ): UpdateRequestBuilder<JobResponsibilities<T>, T> {
    return new UpdateRequestBuilder<JobResponsibilities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobResponsibilities`.
   * @param jobId Key property. See {@link JobResponsibilities.jobId}.
   * @param areaOfResponsibilityId Key property. See {@link JobResponsibilities.areaOfResponsibilityId}.
   * @returns A request builder for creating requests that delete an entity of type `JobResponsibilities`.
   */
  delete(
    jobId: string,
    areaOfResponsibilityId: string
  ): DeleteRequestBuilder<JobResponsibilities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobResponsibilities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobResponsibilities` by taking the entity as a parameter.
   */
  delete(
    entity: JobResponsibilities<T>
  ): DeleteRequestBuilder<JobResponsibilities<T>, T>;
  delete(
    jobIdOrEntity: any,
    areaOfResponsibilityId?: string
  ): DeleteRequestBuilder<JobResponsibilities<T>, T> {
    return new DeleteRequestBuilder<JobResponsibilities<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof JobResponsibilities
        ? jobIdOrEntity
        : {
            JobId: jobIdOrEntity!,
            AreaOfResponsibilityId: areaOfResponsibilityId!
          }
    );
  }
}
