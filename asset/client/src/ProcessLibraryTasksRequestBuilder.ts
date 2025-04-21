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
import { ProcessLibraryTasks } from './ProcessLibraryTasks';
import { BusinessProcessType } from './BusinessProcessType';

/**
 * Request builder class for operations supported on the {@link ProcessLibraryTasks} entity.
 */
export class ProcessLibraryTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessLibraryTasks<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessLibraryTasks` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessLibraryTasks` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessLibraryTasks<T>, T> {
    return new GetAllRequestBuilder<ProcessLibraryTasks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProcessLibraryTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessLibraryTasks`.
   */
  create(
    entity: ProcessLibraryTasks<T>
  ): CreateRequestBuilder<ProcessLibraryTasks<T>, T> {
    return new CreateRequestBuilder<ProcessLibraryTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessLibraryTasks` entity based on its keys.
   * @param task Key property. See {@link ProcessLibraryTasks.task}.
   * @param processType Key property. See {@link ProcessLibraryTasks.processType}.
   * @returns A request builder for creating requests to retrieve one `ProcessLibraryTasks` entity based on its keys.
   */
  getByKey(
    task: DeserializedType<T, 'Edm.String'>,
    processType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BusinessProcessType'
    >
  ): GetByKeyRequestBuilder<ProcessLibraryTasks<T>, T> {
    return new GetByKeyRequestBuilder<ProcessLibraryTasks<T>, T>(
      this.entityApi,
      {
        Task: task,
        ProcessType: processType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessLibraryTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessLibraryTasks`.
   */
  update(
    entity: ProcessLibraryTasks<T>
  ): UpdateRequestBuilder<ProcessLibraryTasks<T>, T> {
    return new UpdateRequestBuilder<ProcessLibraryTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessLibraryTasks`.
   * @param task Key property. See {@link ProcessLibraryTasks.task}.
   * @param processType Key property. See {@link ProcessLibraryTasks.processType}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessLibraryTasks`.
   */
  delete(
    task: string,
    processType: BusinessProcessType
  ): DeleteRequestBuilder<ProcessLibraryTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessLibraryTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessLibraryTasks` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessLibraryTasks<T>
  ): DeleteRequestBuilder<ProcessLibraryTasks<T>, T>;
  delete(
    taskOrEntity: any,
    processType?: BusinessProcessType
  ): DeleteRequestBuilder<ProcessLibraryTasks<T>, T> {
    return new DeleteRequestBuilder<ProcessLibraryTasks<T>, T>(
      this.entityApi,
      taskOrEntity instanceof ProcessLibraryTasks
        ? taskOrEntity
        : {
            Task: taskOrEntity!,
            ProcessType: processType!
          }
    );
  }
}
