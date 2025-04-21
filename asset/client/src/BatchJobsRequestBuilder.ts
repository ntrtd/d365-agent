/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { BatchJobs } from './BatchJobs';

/**
 * Request builder class for operations supported on the {@link BatchJobs} entity.
 */
export class BatchJobsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BatchJobs<T>, T> {
  /**
   * Returns a request builder for querying all `BatchJobs` entities.
   * @returns A request builder for creating requests to retrieve all `BatchJobs` entities.
   */
  getAll(): GetAllRequestBuilder<BatchJobs<T>, T> {
    return new GetAllRequestBuilder<BatchJobs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BatchJobs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BatchJobs`.
   */
  create(entity: BatchJobs<T>): CreateRequestBuilder<BatchJobs<T>, T> {
    return new CreateRequestBuilder<BatchJobs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BatchJobs` entity based on its keys.
   * @param batchJobRecId Key property. See {@link BatchJobs.batchJobRecId}.
   * @returns A request builder for creating requests to retrieve one `BatchJobs` entity based on its keys.
   */
  getByKey(
    batchJobRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<BatchJobs<T>, T> {
    return new GetByKeyRequestBuilder<BatchJobs<T>, T>(this.entityApi, {
      BatchJobRecId: batchJobRecId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BatchJobs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BatchJobs`.
   */
  update(entity: BatchJobs<T>): UpdateRequestBuilder<BatchJobs<T>, T> {
    return new UpdateRequestBuilder<BatchJobs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BatchJobs`.
   * @param batchJobRecId Key property. See {@link BatchJobs.batchJobRecId}.
   * @returns A request builder for creating requests that delete an entity of type `BatchJobs`.
   */
  delete(batchJobRecId: BigNumber): DeleteRequestBuilder<BatchJobs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BatchJobs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BatchJobs` by taking the entity as a parameter.
   */
  delete(entity: BatchJobs<T>): DeleteRequestBuilder<BatchJobs<T>, T>;
  delete(batchJobRecIdOrEntity: any): DeleteRequestBuilder<BatchJobs<T>, T> {
    return new DeleteRequestBuilder<BatchJobs<T>, T>(
      this.entityApi,
      batchJobRecIdOrEntity instanceof BatchJobs
        ? batchJobRecIdOrEntity
        : { BatchJobRecId: batchJobRecIdOrEntity! }
    );
  }
}
