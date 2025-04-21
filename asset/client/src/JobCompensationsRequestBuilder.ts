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
import { JobCompensations } from './JobCompensations';

/**
 * Request builder class for operations supported on the {@link JobCompensations} entity.
 */
export class JobCompensationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobCompensations<T>, T> {
  /**
   * Returns a request builder for querying all `JobCompensations` entities.
   * @returns A request builder for creating requests to retrieve all `JobCompensations` entities.
   */
  getAll(): GetAllRequestBuilder<JobCompensations<T>, T> {
    return new GetAllRequestBuilder<JobCompensations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobCompensations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobCompensations`.
   */
  create(
    entity: JobCompensations<T>
  ): CreateRequestBuilder<JobCompensations<T>, T> {
    return new CreateRequestBuilder<JobCompensations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobCompensations` entity based on its keys.
   * @param jobId Key property. See {@link JobCompensations.jobId}.
   * @param compensationLevelId Key property. See {@link JobCompensations.compensationLevelId}.
   * @returns A request builder for creating requests to retrieve one `JobCompensations` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>,
    compensationLevelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobCompensations<T>, T> {
    return new GetByKeyRequestBuilder<JobCompensations<T>, T>(this.entityApi, {
      JobId: jobId,
      CompensationLevelId: compensationLevelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JobCompensations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobCompensations`.
   */
  update(
    entity: JobCompensations<T>
  ): UpdateRequestBuilder<JobCompensations<T>, T> {
    return new UpdateRequestBuilder<JobCompensations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobCompensations`.
   * @param jobId Key property. See {@link JobCompensations.jobId}.
   * @param compensationLevelId Key property. See {@link JobCompensations.compensationLevelId}.
   * @returns A request builder for creating requests that delete an entity of type `JobCompensations`.
   */
  delete(
    jobId: string,
    compensationLevelId: string
  ): DeleteRequestBuilder<JobCompensations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobCompensations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobCompensations` by taking the entity as a parameter.
   */
  delete(
    entity: JobCompensations<T>
  ): DeleteRequestBuilder<JobCompensations<T>, T>;
  delete(
    jobIdOrEntity: any,
    compensationLevelId?: string
  ): DeleteRequestBuilder<JobCompensations<T>, T> {
    return new DeleteRequestBuilder<JobCompensations<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof JobCompensations
        ? jobIdOrEntity
        : {
            JobId: jobIdOrEntity!,
            CompensationLevelId: compensationLevelId!
          }
    );
  }
}
