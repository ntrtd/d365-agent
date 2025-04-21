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
import { JobFamilies } from './JobFamilies';

/**
 * Request builder class for operations supported on the {@link JobFamilies} entity.
 */
export class JobFamiliesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobFamilies<T>, T> {
  /**
   * Returns a request builder for querying all `JobFamilies` entities.
   * @returns A request builder for creating requests to retrieve all `JobFamilies` entities.
   */
  getAll(): GetAllRequestBuilder<JobFamilies<T>, T> {
    return new GetAllRequestBuilder<JobFamilies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JobFamilies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobFamilies`.
   */
  create(entity: JobFamilies<T>): CreateRequestBuilder<JobFamilies<T>, T> {
    return new CreateRequestBuilder<JobFamilies<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `JobFamilies` entity based on its keys.
   * @param jobFamilyId Key property. See {@link JobFamilies.jobFamilyId}.
   * @returns A request builder for creating requests to retrieve one `JobFamilies` entity based on its keys.
   */
  getByKey(
    jobFamilyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JobFamilies<T>, T> {
    return new GetByKeyRequestBuilder<JobFamilies<T>, T>(this.entityApi, {
      JobFamilyId: jobFamilyId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JobFamilies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobFamilies`.
   */
  update(entity: JobFamilies<T>): UpdateRequestBuilder<JobFamilies<T>, T> {
    return new UpdateRequestBuilder<JobFamilies<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobFamilies`.
   * @param jobFamilyId Key property. See {@link JobFamilies.jobFamilyId}.
   * @returns A request builder for creating requests that delete an entity of type `JobFamilies`.
   */
  delete(jobFamilyId: string): DeleteRequestBuilder<JobFamilies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobFamilies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobFamilies` by taking the entity as a parameter.
   */
  delete(entity: JobFamilies<T>): DeleteRequestBuilder<JobFamilies<T>, T>;
  delete(jobFamilyIdOrEntity: any): DeleteRequestBuilder<JobFamilies<T>, T> {
    return new DeleteRequestBuilder<JobFamilies<T>, T>(
      this.entityApi,
      jobFamilyIdOrEntity instanceof JobFamilies
        ? jobFamilyIdOrEntity
        : { JobFamilyId: jobFamilyIdOrEntity! }
    );
  }
}
