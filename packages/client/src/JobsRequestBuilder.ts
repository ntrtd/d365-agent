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
import { Jobs } from './Jobs';

/**
 * Request builder class for operations supported on the {@link Jobs} entity.
 */
export class JobsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Jobs<T>, T> {
  /**
   * Returns a request builder for querying all `Jobs` entities.
   * @returns A request builder for creating requests to retrieve all `Jobs` entities.
   */
  getAll(): GetAllRequestBuilder<Jobs<T>, T> {
    return new GetAllRequestBuilder<Jobs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Jobs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Jobs`.
   */
  create(entity: Jobs<T>): CreateRequestBuilder<Jobs<T>, T> {
    return new CreateRequestBuilder<Jobs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Jobs` entity based on its keys.
   * @param jobId Key property. See {@link Jobs.jobId}.
   * @returns A request builder for creating requests to retrieve one `Jobs` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Jobs<T>, T> {
    return new GetByKeyRequestBuilder<Jobs<T>, T>(this.entityApi, {
      JobId: jobId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Jobs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Jobs`.
   */
  update(entity: Jobs<T>): UpdateRequestBuilder<Jobs<T>, T> {
    return new UpdateRequestBuilder<Jobs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Jobs`.
   * @param jobId Key property. See {@link Jobs.jobId}.
   * @returns A request builder for creating requests that delete an entity of type `Jobs`.
   */
  delete(jobId: string): DeleteRequestBuilder<Jobs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Jobs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Jobs` by taking the entity as a parameter.
   */
  delete(entity: Jobs<T>): DeleteRequestBuilder<Jobs<T>, T>;
  delete(jobIdOrEntity: any): DeleteRequestBuilder<Jobs<T>, T> {
    return new DeleteRequestBuilder<Jobs<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof Jobs ? jobIdOrEntity : { JobId: jobIdOrEntity! }
    );
  }
}
