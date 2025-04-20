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
import { PayIntV1JobTasks } from './PayIntV1JobTasks';

/**
 * Request builder class for operations supported on the {@link PayIntV1JobTasks} entity.
 */
export class PayIntV1JobTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1JobTasks<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1JobTasks` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1JobTasks` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1JobTasks<T>, T> {
    return new GetAllRequestBuilder<PayIntV1JobTasks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1JobTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1JobTasks`.
   */
  create(
    entity: PayIntV1JobTasks<T>
  ): CreateRequestBuilder<PayIntV1JobTasks<T>, T> {
    return new CreateRequestBuilder<PayIntV1JobTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1JobTasks` entity based on its keys.
   * @param jobTaskId Key property. See {@link PayIntV1JobTasks.jobTaskId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1JobTasks` entity based on its keys.
   */
  getByKey(
    jobTaskId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1JobTasks<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1JobTasks<T>, T>(this.entityApi, {
      JobTaskId: jobTaskId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1JobTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1JobTasks`.
   */
  update(
    entity: PayIntV1JobTasks<T>
  ): UpdateRequestBuilder<PayIntV1JobTasks<T>, T> {
    return new UpdateRequestBuilder<PayIntV1JobTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1JobTasks`.
   * @param jobTaskId Key property. See {@link PayIntV1JobTasks.jobTaskId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1JobTasks`.
   */
  delete(jobTaskId: string): DeleteRequestBuilder<PayIntV1JobTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1JobTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1JobTasks` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1JobTasks<T>
  ): DeleteRequestBuilder<PayIntV1JobTasks<T>, T>;
  delete(jobTaskIdOrEntity: any): DeleteRequestBuilder<PayIntV1JobTasks<T>, T> {
    return new DeleteRequestBuilder<PayIntV1JobTasks<T>, T>(
      this.entityApi,
      jobTaskIdOrEntity instanceof PayIntV1JobTasks
        ? jobTaskIdOrEntity
        : { JobTaskId: jobTaskIdOrEntity! }
    );
  }
}
