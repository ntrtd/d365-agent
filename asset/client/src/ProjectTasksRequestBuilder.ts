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
import { ProjectTasks } from './ProjectTasks';

/**
 * Request builder class for operations supported on the {@link ProjectTasks} entity.
 */
export class ProjectTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectTasks<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectTasks` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectTasks` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectTasks<T>, T> {
    return new GetAllRequestBuilder<ProjectTasks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectTasks`.
   */
  create(entity: ProjectTasks<T>): CreateRequestBuilder<ProjectTasks<T>, T> {
    return new CreateRequestBuilder<ProjectTasks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProjectTasks` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectTasks.dataAreaId}.
   * @param projectId Key property. See {@link ProjectTasks.projectId}.
   * @param taskId Key property. See {@link ProjectTasks.taskId}.
   * @returns A request builder for creating requests to retrieve one `ProjectTasks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    taskId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectTasks<T>, T> {
    return new GetByKeyRequestBuilder<ProjectTasks<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ProjectId: projectId,
      TaskId: taskId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectTasks`.
   */
  update(entity: ProjectTasks<T>): UpdateRequestBuilder<ProjectTasks<T>, T> {
    return new UpdateRequestBuilder<ProjectTasks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectTasks`.
   * @param dataAreaId Key property. See {@link ProjectTasks.dataAreaId}.
   * @param projectId Key property. See {@link ProjectTasks.projectId}.
   * @param taskId Key property. See {@link ProjectTasks.taskId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectTasks`.
   */
  delete(
    dataAreaId: string,
    projectId: string,
    taskId: string
  ): DeleteRequestBuilder<ProjectTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectTasks` by taking the entity as a parameter.
   */
  delete(entity: ProjectTasks<T>): DeleteRequestBuilder<ProjectTasks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectId?: string,
    taskId?: string
  ): DeleteRequestBuilder<ProjectTasks<T>, T> {
    return new DeleteRequestBuilder<ProjectTasks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectTasks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectId: projectId!,
            TaskId: taskId!
          }
    );
  }
}
