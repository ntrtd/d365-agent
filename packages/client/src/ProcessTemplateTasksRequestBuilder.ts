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
import { ProcessTemplateTasks } from './ProcessTemplateTasks';

/**
 * Request builder class for operations supported on the {@link ProcessTemplateTasks} entity.
 */
export class ProcessTemplateTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessTemplateTasks<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessTemplateTasks` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessTemplateTasks` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessTemplateTasks<T>, T> {
    return new GetAllRequestBuilder<ProcessTemplateTasks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProcessTemplateTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessTemplateTasks`.
   */
  create(
    entity: ProcessTemplateTasks<T>
  ): CreateRequestBuilder<ProcessTemplateTasks<T>, T> {
    return new CreateRequestBuilder<ProcessTemplateTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessTemplateTasks` entity based on its keys.
   * @param taskId Key property. See {@link ProcessTemplateTasks.taskId}.
   * @returns A request builder for creating requests to retrieve one `ProcessTemplateTasks` entity based on its keys.
   */
  getByKey(
    taskId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<ProcessTemplateTasks<T>, T> {
    return new GetByKeyRequestBuilder<ProcessTemplateTasks<T>, T>(
      this.entityApi,
      { TaskId: taskId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessTemplateTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessTemplateTasks`.
   */
  update(
    entity: ProcessTemplateTasks<T>
  ): UpdateRequestBuilder<ProcessTemplateTasks<T>, T> {
    return new UpdateRequestBuilder<ProcessTemplateTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessTemplateTasks`.
   * @param taskId Key property. See {@link ProcessTemplateTasks.taskId}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessTemplateTasks`.
   */
  delete(taskId: string): DeleteRequestBuilder<ProcessTemplateTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessTemplateTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessTemplateTasks` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessTemplateTasks<T>
  ): DeleteRequestBuilder<ProcessTemplateTasks<T>, T>;
  delete(
    taskIdOrEntity: any
  ): DeleteRequestBuilder<ProcessTemplateTasks<T>, T> {
    return new DeleteRequestBuilder<ProcessTemplateTasks<T>, T>(
      this.entityApi,
      taskIdOrEntity instanceof ProcessTemplateTasks
        ? taskIdOrEntity
        : { TaskId: taskIdOrEntity! }
    );
  }
}
