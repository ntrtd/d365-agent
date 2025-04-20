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
import { OnboardingLibraryTasks } from './OnboardingLibraryTasks';

/**
 * Request builder class for operations supported on the {@link OnboardingLibraryTasks} entity.
 */
export class OnboardingLibraryTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OnboardingLibraryTasks<T>, T> {
  /**
   * Returns a request builder for querying all `OnboardingLibraryTasks` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingLibraryTasks` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingLibraryTasks<T>, T> {
    return new GetAllRequestBuilder<OnboardingLibraryTasks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OnboardingLibraryTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardingLibraryTasks`.
   */
  create(
    entity: OnboardingLibraryTasks<T>
  ): CreateRequestBuilder<OnboardingLibraryTasks<T>, T> {
    return new CreateRequestBuilder<OnboardingLibraryTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OnboardingLibraryTasks` entity based on its keys.
   * @param task Key property. See {@link OnboardingLibraryTasks.task}.
   * @returns A request builder for creating requests to retrieve one `OnboardingLibraryTasks` entity based on its keys.
   */
  getByKey(
    task: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OnboardingLibraryTasks<T>, T> {
    return new GetByKeyRequestBuilder<OnboardingLibraryTasks<T>, T>(
      this.entityApi,
      { Task: task }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardingLibraryTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardingLibraryTasks`.
   */
  update(
    entity: OnboardingLibraryTasks<T>
  ): UpdateRequestBuilder<OnboardingLibraryTasks<T>, T> {
    return new UpdateRequestBuilder<OnboardingLibraryTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardingLibraryTasks`.
   * @param task Key property. See {@link OnboardingLibraryTasks.task}.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingLibraryTasks`.
   */
  delete(task: string): DeleteRequestBuilder<OnboardingLibraryTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardingLibraryTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingLibraryTasks` by taking the entity as a parameter.
   */
  delete(
    entity: OnboardingLibraryTasks<T>
  ): DeleteRequestBuilder<OnboardingLibraryTasks<T>, T>;
  delete(
    taskOrEntity: any
  ): DeleteRequestBuilder<OnboardingLibraryTasks<T>, T> {
    return new DeleteRequestBuilder<OnboardingLibraryTasks<T>, T>(
      this.entityApi,
      taskOrEntity instanceof OnboardingLibraryTasks
        ? taskOrEntity
        : { Task: taskOrEntity! }
    );
  }
}
