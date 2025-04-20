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
import { DataManagementExecutionJobs } from './DataManagementExecutionJobs';

/**
 * Request builder class for operations supported on the {@link DataManagementExecutionJobs} entity.
 */
export class DataManagementExecutionJobsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DataManagementExecutionJobs<T>, T> {
  /**
   * Returns a request builder for querying all `DataManagementExecutionJobs` entities.
   * @returns A request builder for creating requests to retrieve all `DataManagementExecutionJobs` entities.
   */
  getAll(): GetAllRequestBuilder<DataManagementExecutionJobs<T>, T> {
    return new GetAllRequestBuilder<DataManagementExecutionJobs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DataManagementExecutionJobs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DataManagementExecutionJobs`.
   */
  create(
    entity: DataManagementExecutionJobs<T>
  ): CreateRequestBuilder<DataManagementExecutionJobs<T>, T> {
    return new CreateRequestBuilder<DataManagementExecutionJobs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DataManagementExecutionJobs` entity based on its keys.
   * @param jobId Key property. See {@link DataManagementExecutionJobs.jobId}.
   * @returns A request builder for creating requests to retrieve one `DataManagementExecutionJobs` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DataManagementExecutionJobs<T>, T> {
    return new GetByKeyRequestBuilder<DataManagementExecutionJobs<T>, T>(
      this.entityApi,
      { JobId: jobId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DataManagementExecutionJobs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DataManagementExecutionJobs`.
   */
  update(
    entity: DataManagementExecutionJobs<T>
  ): UpdateRequestBuilder<DataManagementExecutionJobs<T>, T> {
    return new UpdateRequestBuilder<DataManagementExecutionJobs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DataManagementExecutionJobs`.
   * @param jobId Key property. See {@link DataManagementExecutionJobs.jobId}.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementExecutionJobs`.
   */
  delete(
    jobId: string
  ): DeleteRequestBuilder<DataManagementExecutionJobs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DataManagementExecutionJobs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementExecutionJobs` by taking the entity as a parameter.
   */
  delete(
    entity: DataManagementExecutionJobs<T>
  ): DeleteRequestBuilder<DataManagementExecutionJobs<T>, T>;
  delete(
    jobIdOrEntity: any
  ): DeleteRequestBuilder<DataManagementExecutionJobs<T>, T> {
    return new DeleteRequestBuilder<DataManagementExecutionJobs<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof DataManagementExecutionJobs
        ? jobIdOrEntity
        : { JobId: jobIdOrEntity! }
    );
  }
}
