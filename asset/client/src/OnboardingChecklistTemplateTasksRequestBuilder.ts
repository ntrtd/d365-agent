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
import { OnboardingChecklistTemplateTasks } from './OnboardingChecklistTemplateTasks';

/**
 * Request builder class for operations supported on the {@link OnboardingChecklistTemplateTasks} entity.
 */
export class OnboardingChecklistTemplateTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OnboardingChecklistTemplateTasks<T>, T> {
  /**
   * Returns a request builder for querying all `OnboardingChecklistTemplateTasks` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingChecklistTemplateTasks` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingChecklistTemplateTasks<T>, T> {
    return new GetAllRequestBuilder<OnboardingChecklistTemplateTasks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OnboardingChecklistTemplateTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardingChecklistTemplateTasks`.
   */
  create(
    entity: OnboardingChecklistTemplateTasks<T>
  ): CreateRequestBuilder<OnboardingChecklistTemplateTasks<T>, T> {
    return new CreateRequestBuilder<OnboardingChecklistTemplateTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OnboardingChecklistTemplateTasks` entity based on its keys.
   * @param taskId Key property. See {@link OnboardingChecklistTemplateTasks.taskId}.
   * @returns A request builder for creating requests to retrieve one `OnboardingChecklistTemplateTasks` entity based on its keys.
   */
  getByKey(
    taskId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<OnboardingChecklistTemplateTasks<T>, T> {
    return new GetByKeyRequestBuilder<OnboardingChecklistTemplateTasks<T>, T>(
      this.entityApi,
      { TaskId: taskId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardingChecklistTemplateTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardingChecklistTemplateTasks`.
   */
  update(
    entity: OnboardingChecklistTemplateTasks<T>
  ): UpdateRequestBuilder<OnboardingChecklistTemplateTasks<T>, T> {
    return new UpdateRequestBuilder<OnboardingChecklistTemplateTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardingChecklistTemplateTasks`.
   * @param taskId Key property. See {@link OnboardingChecklistTemplateTasks.taskId}.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingChecklistTemplateTasks`.
   */
  delete(
    taskId: string
  ): DeleteRequestBuilder<OnboardingChecklistTemplateTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardingChecklistTemplateTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingChecklistTemplateTasks` by taking the entity as a parameter.
   */
  delete(
    entity: OnboardingChecklistTemplateTasks<T>
  ): DeleteRequestBuilder<OnboardingChecklistTemplateTasks<T>, T>;
  delete(
    taskIdOrEntity: any
  ): DeleteRequestBuilder<OnboardingChecklistTemplateTasks<T>, T> {
    return new DeleteRequestBuilder<OnboardingChecklistTemplateTasks<T>, T>(
      this.entityApi,
      taskIdOrEntity instanceof OnboardingChecklistTemplateTasks
        ? taskIdOrEntity
        : { TaskId: taskIdOrEntity! }
    );
  }
}
