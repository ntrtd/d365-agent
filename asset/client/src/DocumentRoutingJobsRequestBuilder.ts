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
import { DocumentRoutingJobs } from './DocumentRoutingJobs';

/**
 * Request builder class for operations supported on the {@link DocumentRoutingJobs} entity.
 */
export class DocumentRoutingJobsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentRoutingJobs<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentRoutingJobs` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentRoutingJobs` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentRoutingJobs<T>, T> {
    return new GetAllRequestBuilder<DocumentRoutingJobs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DocumentRoutingJobs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentRoutingJobs`.
   */
  create(
    entity: DocumentRoutingJobs<T>
  ): CreateRequestBuilder<DocumentRoutingJobs<T>, T> {
    return new CreateRequestBuilder<DocumentRoutingJobs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentRoutingJobs` entity based on its keys.
   * @param jobId Key property. See {@link DocumentRoutingJobs.jobId}.
   * @returns A request builder for creating requests to retrieve one `DocumentRoutingJobs` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentRoutingJobs<T>, T> {
    return new GetByKeyRequestBuilder<DocumentRoutingJobs<T>, T>(
      this.entityApi,
      { JobId: jobId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentRoutingJobs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentRoutingJobs`.
   */
  update(
    entity: DocumentRoutingJobs<T>
  ): UpdateRequestBuilder<DocumentRoutingJobs<T>, T> {
    return new UpdateRequestBuilder<DocumentRoutingJobs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentRoutingJobs`.
   * @param jobId Key property. See {@link DocumentRoutingJobs.jobId}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentRoutingJobs`.
   */
  delete(jobId: string): DeleteRequestBuilder<DocumentRoutingJobs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentRoutingJobs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentRoutingJobs` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentRoutingJobs<T>
  ): DeleteRequestBuilder<DocumentRoutingJobs<T>, T>;
  delete(jobIdOrEntity: any): DeleteRequestBuilder<DocumentRoutingJobs<T>, T> {
    return new DeleteRequestBuilder<DocumentRoutingJobs<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof DocumentRoutingJobs
        ? jobIdOrEntity
        : { JobId: jobIdOrEntity! }
    );
  }
}
