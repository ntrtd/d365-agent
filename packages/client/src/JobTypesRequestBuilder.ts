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
import { JobTypes } from './JobTypes';

/**
 * Request builder class for operations supported on the {@link JobTypes} entity.
 */
export class JobTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobTypes<T>, T> {
  /**
   * Returns a request builder for querying all `JobTypes` entities.
   * @returns A request builder for creating requests to retrieve all `JobTypes` entities.
   */
  getAll(): GetAllRequestBuilder<JobTypes<T>, T> {
    return new GetAllRequestBuilder<JobTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobTypes`.
   */
  create(entity: JobTypes<T>): CreateRequestBuilder<JobTypes<T>, T> {
    return new CreateRequestBuilder<JobTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `JobTypes` entity based on its keys.
   * @param jobTypeId Key property. See {@link JobTypes.jobTypeId}.
   * @returns A request builder for creating requests to retrieve one `JobTypes` entity based on its keys.
   */
  getByKey(
    jobTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobTypes<T>, T> {
    return new GetByKeyRequestBuilder<JobTypes<T>, T>(this.entityApi, {
      JobTypeId: jobTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JobTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobTypes`.
   */
  update(entity: JobTypes<T>): UpdateRequestBuilder<JobTypes<T>, T> {
    return new UpdateRequestBuilder<JobTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobTypes`.
   * @param jobTypeId Key property. See {@link JobTypes.jobTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `JobTypes`.
   */
  delete(jobTypeId: string): DeleteRequestBuilder<JobTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobTypes` by taking the entity as a parameter.
   */
  delete(entity: JobTypes<T>): DeleteRequestBuilder<JobTypes<T>, T>;
  delete(jobTypeIdOrEntity: any): DeleteRequestBuilder<JobTypes<T>, T> {
    return new DeleteRequestBuilder<JobTypes<T>, T>(
      this.entityApi,
      jobTypeIdOrEntity instanceof JobTypes
        ? jobTypeIdOrEntity
        : { JobTypeId: jobTypeIdOrEntity! }
    );
  }
}
