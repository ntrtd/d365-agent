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
import { ProcessTasks } from './ProcessTasks';

/**
 * Request builder class for operations supported on the {@link ProcessTasks} entity.
 */
export class ProcessTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessTasks<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessTasks` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessTasks` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessTasks<T>, T> {
    return new GetAllRequestBuilder<ProcessTasks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProcessTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessTasks`.
   */
  create(entity: ProcessTasks<T>): CreateRequestBuilder<ProcessTasks<T>, T> {
    return new CreateRequestBuilder<ProcessTasks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProcessTasks` entity based on its keys.
   * @param taskId Key property. See {@link ProcessTasks.taskId}.
   * @returns A request builder for creating requests to retrieve one `ProcessTasks` entity based on its keys.
   */
  getByKey(
    taskId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<ProcessTasks<T>, T> {
    return new GetByKeyRequestBuilder<ProcessTasks<T>, T>(this.entityApi, {
      TaskId: taskId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessTasks`.
   */
  update(entity: ProcessTasks<T>): UpdateRequestBuilder<ProcessTasks<T>, T> {
    return new UpdateRequestBuilder<ProcessTasks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessTasks`.
   * @param taskId Key property. See {@link ProcessTasks.taskId}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessTasks`.
   */
  delete(taskId: string): DeleteRequestBuilder<ProcessTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessTasks` by taking the entity as a parameter.
   */
  delete(entity: ProcessTasks<T>): DeleteRequestBuilder<ProcessTasks<T>, T>;
  delete(taskIdOrEntity: any): DeleteRequestBuilder<ProcessTasks<T>, T> {
    return new DeleteRequestBuilder<ProcessTasks<T>, T>(
      this.entityApi,
      taskIdOrEntity instanceof ProcessTasks
        ? taskIdOrEntity
        : { TaskId: taskIdOrEntity! }
    );
  }
}
