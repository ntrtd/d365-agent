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
import { OnboardingLibraryTaskGroupings } from './OnboardingLibraryTaskGroupings';

/**
 * Request builder class for operations supported on the {@link OnboardingLibraryTaskGroupings} entity.
 */
export class OnboardingLibraryTaskGroupingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OnboardingLibraryTaskGroupings<T>, T> {
  /**
   * Returns a request builder for querying all `OnboardingLibraryTaskGroupings` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingLibraryTaskGroupings` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingLibraryTaskGroupings<T>, T> {
    return new GetAllRequestBuilder<OnboardingLibraryTaskGroupings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OnboardingLibraryTaskGroupings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardingLibraryTaskGroupings`.
   */
  create(
    entity: OnboardingLibraryTaskGroupings<T>
  ): CreateRequestBuilder<OnboardingLibraryTaskGroupings<T>, T> {
    return new CreateRequestBuilder<OnboardingLibraryTaskGroupings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OnboardingLibraryTaskGroupings` entity based on its keys.
   * @param taskName Key property. See {@link OnboardingLibraryTaskGroupings.taskName}.
   * @param taskGroupName Key property. See {@link OnboardingLibraryTaskGroupings.taskGroupName}.
   * @returns A request builder for creating requests to retrieve one `OnboardingLibraryTaskGroupings` entity based on its keys.
   */
  getByKey(
    taskName: DeserializedType<T, 'Edm.String'>,
    taskGroupName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OnboardingLibraryTaskGroupings<T>, T> {
    return new GetByKeyRequestBuilder<OnboardingLibraryTaskGroupings<T>, T>(
      this.entityApi,
      {
        TaskName: taskName,
        TaskGroupName: taskGroupName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardingLibraryTaskGroupings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardingLibraryTaskGroupings`.
   */
  update(
    entity: OnboardingLibraryTaskGroupings<T>
  ): UpdateRequestBuilder<OnboardingLibraryTaskGroupings<T>, T> {
    return new UpdateRequestBuilder<OnboardingLibraryTaskGroupings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardingLibraryTaskGroupings`.
   * @param taskName Key property. See {@link OnboardingLibraryTaskGroupings.taskName}.
   * @param taskGroupName Key property. See {@link OnboardingLibraryTaskGroupings.taskGroupName}.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingLibraryTaskGroupings`.
   */
  delete(
    taskName: string,
    taskGroupName: string
  ): DeleteRequestBuilder<OnboardingLibraryTaskGroupings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardingLibraryTaskGroupings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingLibraryTaskGroupings` by taking the entity as a parameter.
   */
  delete(
    entity: OnboardingLibraryTaskGroupings<T>
  ): DeleteRequestBuilder<OnboardingLibraryTaskGroupings<T>, T>;
  delete(
    taskNameOrEntity: any,
    taskGroupName?: string
  ): DeleteRequestBuilder<OnboardingLibraryTaskGroupings<T>, T> {
    return new DeleteRequestBuilder<OnboardingLibraryTaskGroupings<T>, T>(
      this.entityApi,
      taskNameOrEntity instanceof OnboardingLibraryTaskGroupings
        ? taskNameOrEntity
        : {
            TaskName: taskNameOrEntity!,
            TaskGroupName: taskGroupName!
          }
    );
  }
}
