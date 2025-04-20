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
import { JobsDualWrite } from './JobsDualWrite';

/**
 * Request builder class for operations supported on the {@link JobsDualWrite} entity.
 */
export class JobsDualWriteRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobsDualWrite<T>, T> {
  /**
   * Returns a request builder for querying all `JobsDualWrite` entities.
   * @returns A request builder for creating requests to retrieve all `JobsDualWrite` entities.
   */
  getAll(): GetAllRequestBuilder<JobsDualWrite<T>, T> {
    return new GetAllRequestBuilder<JobsDualWrite<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobsDualWrite` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobsDualWrite`.
   */
  create(entity: JobsDualWrite<T>): CreateRequestBuilder<JobsDualWrite<T>, T> {
    return new CreateRequestBuilder<JobsDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobsDualWrite` entity based on its keys.
   * @param jobId Key property. See {@link JobsDualWrite.jobId}.
   * @returns A request builder for creating requests to retrieve one `JobsDualWrite` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobsDualWrite<T>, T> {
    return new GetByKeyRequestBuilder<JobsDualWrite<T>, T>(this.entityApi, {
      JobId: jobId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JobsDualWrite`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobsDualWrite`.
   */
  update(entity: JobsDualWrite<T>): UpdateRequestBuilder<JobsDualWrite<T>, T> {
    return new UpdateRequestBuilder<JobsDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobsDualWrite`.
   * @param jobId Key property. See {@link JobsDualWrite.jobId}.
   * @returns A request builder for creating requests that delete an entity of type `JobsDualWrite`.
   */
  delete(jobId: string): DeleteRequestBuilder<JobsDualWrite<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobsDualWrite`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobsDualWrite` by taking the entity as a parameter.
   */
  delete(entity: JobsDualWrite<T>): DeleteRequestBuilder<JobsDualWrite<T>, T>;
  delete(jobIdOrEntity: any): DeleteRequestBuilder<JobsDualWrite<T>, T> {
    return new DeleteRequestBuilder<JobsDualWrite<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof JobsDualWrite
        ? jobIdOrEntity
        : { JobId: jobIdOrEntity! }
    );
  }
}
