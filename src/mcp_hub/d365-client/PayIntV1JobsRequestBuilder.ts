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
import { PayIntV1Jobs } from './PayIntV1Jobs';

/**
 * Request builder class for operations supported on the {@link PayIntV1Jobs} entity.
 */
export class PayIntV1JobsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1Jobs<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1Jobs` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1Jobs` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1Jobs<T>, T> {
    return new GetAllRequestBuilder<PayIntV1Jobs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1Jobs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1Jobs`.
   */
  create(entity: PayIntV1Jobs<T>): CreateRequestBuilder<PayIntV1Jobs<T>, T> {
    return new CreateRequestBuilder<PayIntV1Jobs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1Jobs` entity based on its keys.
   * @param jobId Key property. See {@link PayIntV1Jobs.jobId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1Jobs` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1Jobs<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1Jobs<T>, T>(this.entityApi, {
      JobId: jobId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1Jobs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1Jobs`.
   */
  update(entity: PayIntV1Jobs<T>): UpdateRequestBuilder<PayIntV1Jobs<T>, T> {
    return new UpdateRequestBuilder<PayIntV1Jobs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1Jobs`.
   * @param jobId Key property. See {@link PayIntV1Jobs.jobId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1Jobs`.
   */
  delete(jobId: string): DeleteRequestBuilder<PayIntV1Jobs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1Jobs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1Jobs` by taking the entity as a parameter.
   */
  delete(entity: PayIntV1Jobs<T>): DeleteRequestBuilder<PayIntV1Jobs<T>, T>;
  delete(jobIdOrEntity: any): DeleteRequestBuilder<PayIntV1Jobs<T>, T> {
    return new DeleteRequestBuilder<PayIntV1Jobs<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof PayIntV1Jobs
        ? jobIdOrEntity
        : { JobId: jobIdOrEntity! }
    );
  }
}
