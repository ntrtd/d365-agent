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
import { OnboardProcessTasksDualWrite } from './OnboardProcessTasksDualWrite';

/**
 * Request builder class for operations supported on the {@link OnboardProcessTasksDualWrite} entity.
 */
export class OnboardProcessTasksDualWriteRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OnboardProcessTasksDualWrite<T>, T> {
  /**
   * Returns a request builder for querying all `OnboardProcessTasksDualWrite` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardProcessTasksDualWrite` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardProcessTasksDualWrite<T>, T> {
    return new GetAllRequestBuilder<OnboardProcessTasksDualWrite<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OnboardProcessTasksDualWrite` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardProcessTasksDualWrite`.
   */
  create(
    entity: OnboardProcessTasksDualWrite<T>
  ): CreateRequestBuilder<OnboardProcessTasksDualWrite<T>, T> {
    return new CreateRequestBuilder<OnboardProcessTasksDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OnboardProcessTasksDualWrite` entity based on its keys.
   * @param taskId Key property. See {@link OnboardProcessTasksDualWrite.taskId}.
   * @returns A request builder for creating requests to retrieve one `OnboardProcessTasksDualWrite` entity based on its keys.
   */
  getByKey(
    taskId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<OnboardProcessTasksDualWrite<T>, T> {
    return new GetByKeyRequestBuilder<OnboardProcessTasksDualWrite<T>, T>(
      this.entityApi,
      { TaskId: taskId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardProcessTasksDualWrite`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardProcessTasksDualWrite`.
   */
  update(
    entity: OnboardProcessTasksDualWrite<T>
  ): UpdateRequestBuilder<OnboardProcessTasksDualWrite<T>, T> {
    return new UpdateRequestBuilder<OnboardProcessTasksDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardProcessTasksDualWrite`.
   * @param taskId Key property. See {@link OnboardProcessTasksDualWrite.taskId}.
   * @returns A request builder for creating requests that delete an entity of type `OnboardProcessTasksDualWrite`.
   */
  delete(
    taskId: string
  ): DeleteRequestBuilder<OnboardProcessTasksDualWrite<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardProcessTasksDualWrite`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardProcessTasksDualWrite` by taking the entity as a parameter.
   */
  delete(
    entity: OnboardProcessTasksDualWrite<T>
  ): DeleteRequestBuilder<OnboardProcessTasksDualWrite<T>, T>;
  delete(
    taskIdOrEntity: any
  ): DeleteRequestBuilder<OnboardProcessTasksDualWrite<T>, T> {
    return new DeleteRequestBuilder<OnboardProcessTasksDualWrite<T>, T>(
      this.entityApi,
      taskIdOrEntity instanceof OnboardProcessTasksDualWrite
        ? taskIdOrEntity
        : { TaskId: taskIdOrEntity! }
    );
  }
}
