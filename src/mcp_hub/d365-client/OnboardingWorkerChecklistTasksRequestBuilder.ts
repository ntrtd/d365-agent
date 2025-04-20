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
import { OnboardingWorkerChecklistTasks } from './OnboardingWorkerChecklistTasks';

/**
 * Request builder class for operations supported on the {@link OnboardingWorkerChecklistTasks} entity.
 */
export class OnboardingWorkerChecklistTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OnboardingWorkerChecklistTasks<T>, T> {
  /**
   * Returns a request builder for querying all `OnboardingWorkerChecklistTasks` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingWorkerChecklistTasks` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingWorkerChecklistTasks<T>, T> {
    return new GetAllRequestBuilder<OnboardingWorkerChecklistTasks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OnboardingWorkerChecklistTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardingWorkerChecklistTasks`.
   */
  create(
    entity: OnboardingWorkerChecklistTasks<T>
  ): CreateRequestBuilder<OnboardingWorkerChecklistTasks<T>, T> {
    return new CreateRequestBuilder<OnboardingWorkerChecklistTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OnboardingWorkerChecklistTasks` entity based on its keys.
   * @param checklistHeaderId Key property. See {@link OnboardingWorkerChecklistTasks.checklistHeaderId}.
   * @param taskId Key property. See {@link OnboardingWorkerChecklistTasks.taskId}.
   * @returns A request builder for creating requests to retrieve one `OnboardingWorkerChecklistTasks` entity based on its keys.
   */
  getByKey(
    checklistHeaderId: DeserializedType<T, 'Edm.Guid'>,
    taskId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<OnboardingWorkerChecklistTasks<T>, T> {
    return new GetByKeyRequestBuilder<OnboardingWorkerChecklistTasks<T>, T>(
      this.entityApi,
      {
        ChecklistHeaderId: checklistHeaderId,
        TaskId: taskId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardingWorkerChecklistTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardingWorkerChecklistTasks`.
   */
  update(
    entity: OnboardingWorkerChecklistTasks<T>
  ): UpdateRequestBuilder<OnboardingWorkerChecklistTasks<T>, T> {
    return new UpdateRequestBuilder<OnboardingWorkerChecklistTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardingWorkerChecklistTasks`.
   * @param checklistHeaderId Key property. See {@link OnboardingWorkerChecklistTasks.checklistHeaderId}.
   * @param taskId Key property. See {@link OnboardingWorkerChecklistTasks.taskId}.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingWorkerChecklistTasks`.
   */
  delete(
    checklistHeaderId: string,
    taskId: string
  ): DeleteRequestBuilder<OnboardingWorkerChecklistTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardingWorkerChecklistTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingWorkerChecklistTasks` by taking the entity as a parameter.
   */
  delete(
    entity: OnboardingWorkerChecklistTasks<T>
  ): DeleteRequestBuilder<OnboardingWorkerChecklistTasks<T>, T>;
  delete(
    checklistHeaderIdOrEntity: any,
    taskId?: string
  ): DeleteRequestBuilder<OnboardingWorkerChecklistTasks<T>, T> {
    return new DeleteRequestBuilder<OnboardingWorkerChecklistTasks<T>, T>(
      this.entityApi,
      checklistHeaderIdOrEntity instanceof OnboardingWorkerChecklistTasks
        ? checklistHeaderIdOrEntity
        : {
            ChecklistHeaderId: checklistHeaderIdOrEntity!,
            TaskId: taskId!
          }
    );
  }
}
