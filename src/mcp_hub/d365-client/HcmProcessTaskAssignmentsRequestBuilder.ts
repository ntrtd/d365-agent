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
import { HcmProcessTaskAssignments } from './HcmProcessTaskAssignments';

/**
 * Request builder class for operations supported on the {@link HcmProcessTaskAssignments} entity.
 */
export class HcmProcessTaskAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HcmProcessTaskAssignments<T>, T> {
  /**
   * Returns a request builder for querying all `HcmProcessTaskAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `HcmProcessTaskAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<HcmProcessTaskAssignments<T>, T> {
    return new GetAllRequestBuilder<HcmProcessTaskAssignments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HcmProcessTaskAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HcmProcessTaskAssignments`.
   */
  create(
    entity: HcmProcessTaskAssignments<T>
  ): CreateRequestBuilder<HcmProcessTaskAssignments<T>, T> {
    return new CreateRequestBuilder<HcmProcessTaskAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HcmProcessTaskAssignments` entity based on its keys.
   * @param assignedWorkerPersonnelNumber Key property. See {@link HcmProcessTaskAssignments.assignedWorkerPersonnelNumber}.
   * @param taskId Key property. See {@link HcmProcessTaskAssignments.taskId}.
   * @returns A request builder for creating requests to retrieve one `HcmProcessTaskAssignments` entity based on its keys.
   */
  getByKey(
    assignedWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    taskId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<HcmProcessTaskAssignments<T>, T> {
    return new GetByKeyRequestBuilder<HcmProcessTaskAssignments<T>, T>(
      this.entityApi,
      {
        AssignedWorkerPersonnelNumber: assignedWorkerPersonnelNumber,
        TaskId: taskId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HcmProcessTaskAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HcmProcessTaskAssignments`.
   */
  update(
    entity: HcmProcessTaskAssignments<T>
  ): UpdateRequestBuilder<HcmProcessTaskAssignments<T>, T> {
    return new UpdateRequestBuilder<HcmProcessTaskAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HcmProcessTaskAssignments`.
   * @param assignedWorkerPersonnelNumber Key property. See {@link HcmProcessTaskAssignments.assignedWorkerPersonnelNumber}.
   * @param taskId Key property. See {@link HcmProcessTaskAssignments.taskId}.
   * @returns A request builder for creating requests that delete an entity of type `HcmProcessTaskAssignments`.
   */
  delete(
    assignedWorkerPersonnelNumber: string,
    taskId: string
  ): DeleteRequestBuilder<HcmProcessTaskAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HcmProcessTaskAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HcmProcessTaskAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: HcmProcessTaskAssignments<T>
  ): DeleteRequestBuilder<HcmProcessTaskAssignments<T>, T>;
  delete(
    assignedWorkerPersonnelNumberOrEntity: any,
    taskId?: string
  ): DeleteRequestBuilder<HcmProcessTaskAssignments<T>, T> {
    return new DeleteRequestBuilder<HcmProcessTaskAssignments<T>, T>(
      this.entityApi,
      assignedWorkerPersonnelNumberOrEntity instanceof HcmProcessTaskAssignments
        ? assignedWorkerPersonnelNumberOrEntity
        : {
            AssignedWorkerPersonnelNumber:
              assignedWorkerPersonnelNumberOrEntity!,
            TaskId: taskId!
          }
    );
  }
}
