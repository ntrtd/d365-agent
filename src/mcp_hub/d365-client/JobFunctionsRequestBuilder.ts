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
import { JobFunctions } from './JobFunctions';

/**
 * Request builder class for operations supported on the {@link JobFunctions} entity.
 */
export class JobFunctionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobFunctions<T>, T> {
  /**
   * Returns a request builder for querying all `JobFunctions` entities.
   * @returns A request builder for creating requests to retrieve all `JobFunctions` entities.
   */
  getAll(): GetAllRequestBuilder<JobFunctions<T>, T> {
    return new GetAllRequestBuilder<JobFunctions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobFunctions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobFunctions`.
   */
  create(entity: JobFunctions<T>): CreateRequestBuilder<JobFunctions<T>, T> {
    return new CreateRequestBuilder<JobFunctions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `JobFunctions` entity based on its keys.
   * @param jobFunctionId Key property. See {@link JobFunctions.jobFunctionId}.
   * @returns A request builder for creating requests to retrieve one `JobFunctions` entity based on its keys.
   */
  getByKey(
    jobFunctionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobFunctions<T>, T> {
    return new GetByKeyRequestBuilder<JobFunctions<T>, T>(this.entityApi, {
      JobFunctionId: jobFunctionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JobFunctions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobFunctions`.
   */
  update(entity: JobFunctions<T>): UpdateRequestBuilder<JobFunctions<T>, T> {
    return new UpdateRequestBuilder<JobFunctions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobFunctions`.
   * @param jobFunctionId Key property. See {@link JobFunctions.jobFunctionId}.
   * @returns A request builder for creating requests that delete an entity of type `JobFunctions`.
   */
  delete(jobFunctionId: string): DeleteRequestBuilder<JobFunctions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobFunctions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobFunctions` by taking the entity as a parameter.
   */
  delete(entity: JobFunctions<T>): DeleteRequestBuilder<JobFunctions<T>, T>;
  delete(jobFunctionIdOrEntity: any): DeleteRequestBuilder<JobFunctions<T>, T> {
    return new DeleteRequestBuilder<JobFunctions<T>, T>(
      this.entityApi,
      jobFunctionIdOrEntity instanceof JobFunctions
        ? jobFunctionIdOrEntity
        : { JobFunctionId: jobFunctionIdOrEntity! }
    );
  }
}
