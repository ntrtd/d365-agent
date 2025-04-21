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
import { WorkerTasks } from './WorkerTasks';

/**
 * Request builder class for operations supported on the {@link WorkerTasks} entity.
 */
export class WorkerTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerTasks<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerTasks` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerTasks` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerTasks<T>, T> {
    return new GetAllRequestBuilder<WorkerTasks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerTasks`.
   */
  create(entity: WorkerTasks<T>): CreateRequestBuilder<WorkerTasks<T>, T> {
    return new CreateRequestBuilder<WorkerTasks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WorkerTasks` entity based on its keys.
   * @param workerTaskId Key property. See {@link WorkerTasks.workerTaskId}.
   * @returns A request builder for creating requests to retrieve one `WorkerTasks` entity based on its keys.
   */
  getByKey(
    workerTaskId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerTasks<T>, T> {
    return new GetByKeyRequestBuilder<WorkerTasks<T>, T>(this.entityApi, {
      WorkerTaskId: workerTaskId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerTasks`.
   */
  update(entity: WorkerTasks<T>): UpdateRequestBuilder<WorkerTasks<T>, T> {
    return new UpdateRequestBuilder<WorkerTasks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerTasks`.
   * @param workerTaskId Key property. See {@link WorkerTasks.workerTaskId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTasks`.
   */
  delete(workerTaskId: string): DeleteRequestBuilder<WorkerTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTasks` by taking the entity as a parameter.
   */
  delete(entity: WorkerTasks<T>): DeleteRequestBuilder<WorkerTasks<T>, T>;
  delete(workerTaskIdOrEntity: any): DeleteRequestBuilder<WorkerTasks<T>, T> {
    return new DeleteRequestBuilder<WorkerTasks<T>, T>(
      this.entityApi,
      workerTaskIdOrEntity instanceof WorkerTasks
        ? workerTaskIdOrEntity
        : { WorkerTaskId: workerTaskIdOrEntity! }
    );
  }
}
