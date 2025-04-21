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
import { PayIntV1JobsBase } from './PayIntV1JobsBase';

/**
 * Request builder class for operations supported on the {@link PayIntV1JobsBase} entity.
 */
export class PayIntV1JobsBaseRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1JobsBase<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1JobsBase` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1JobsBase` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1JobsBase<T>, T> {
    return new GetAllRequestBuilder<PayIntV1JobsBase<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1JobsBase` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1JobsBase`.
   */
  create(
    entity: PayIntV1JobsBase<T>
  ): CreateRequestBuilder<PayIntV1JobsBase<T>, T> {
    return new CreateRequestBuilder<PayIntV1JobsBase<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1JobsBase` entity based on its keys.
   * @param jobId Key property. See {@link PayIntV1JobsBase.jobId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1JobsBase` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1JobsBase<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1JobsBase<T>, T>(this.entityApi, {
      JobId: jobId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1JobsBase`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1JobsBase`.
   */
  update(
    entity: PayIntV1JobsBase<T>
  ): UpdateRequestBuilder<PayIntV1JobsBase<T>, T> {
    return new UpdateRequestBuilder<PayIntV1JobsBase<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1JobsBase`.
   * @param jobId Key property. See {@link PayIntV1JobsBase.jobId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1JobsBase`.
   */
  delete(jobId: string): DeleteRequestBuilder<PayIntV1JobsBase<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1JobsBase`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1JobsBase` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1JobsBase<T>
  ): DeleteRequestBuilder<PayIntV1JobsBase<T>, T>;
  delete(jobIdOrEntity: any): DeleteRequestBuilder<PayIntV1JobsBase<T>, T> {
    return new DeleteRequestBuilder<PayIntV1JobsBase<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof PayIntV1JobsBase
        ? jobIdOrEntity
        : { JobId: jobIdOrEntity! }
    );
  }
}
