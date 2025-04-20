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
import { WorkerTaskAssignments } from './WorkerTaskAssignments';

/**
 * Request builder class for operations supported on the {@link WorkerTaskAssignments} entity.
 */
export class WorkerTaskAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerTaskAssignments<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerTaskAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerTaskAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerTaskAssignments<T>, T> {
    return new GetAllRequestBuilder<WorkerTaskAssignments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerTaskAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerTaskAssignments`.
   */
  create(
    entity: WorkerTaskAssignments<T>
  ): CreateRequestBuilder<WorkerTaskAssignments<T>, T> {
    return new CreateRequestBuilder<WorkerTaskAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerTaskAssignments` entity based on its keys.
   * @param workerPersonnelNumber Key property. See {@link WorkerTaskAssignments.workerPersonnelNumber}.
   * @param workerTaskId Key property. See {@link WorkerTaskAssignments.workerTaskId}.
   * @returns A request builder for creating requests to retrieve one `WorkerTaskAssignments` entity based on its keys.
   */
  getByKey(
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    workerTaskId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerTaskAssignments<T>, T> {
    return new GetByKeyRequestBuilder<WorkerTaskAssignments<T>, T>(
      this.entityApi,
      {
        WorkerPersonnelNumber: workerPersonnelNumber,
        WorkerTaskId: workerTaskId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerTaskAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerTaskAssignments`.
   */
  update(
    entity: WorkerTaskAssignments<T>
  ): UpdateRequestBuilder<WorkerTaskAssignments<T>, T> {
    return new UpdateRequestBuilder<WorkerTaskAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerTaskAssignments`.
   * @param workerPersonnelNumber Key property. See {@link WorkerTaskAssignments.workerPersonnelNumber}.
   * @param workerTaskId Key property. See {@link WorkerTaskAssignments.workerTaskId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTaskAssignments`.
   */
  delete(
    workerPersonnelNumber: string,
    workerTaskId: string
  ): DeleteRequestBuilder<WorkerTaskAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerTaskAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTaskAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerTaskAssignments<T>
  ): DeleteRequestBuilder<WorkerTaskAssignments<T>, T>;
  delete(
    workerPersonnelNumberOrEntity: any,
    workerTaskId?: string
  ): DeleteRequestBuilder<WorkerTaskAssignments<T>, T> {
    return new DeleteRequestBuilder<WorkerTaskAssignments<T>, T>(
      this.entityApi,
      workerPersonnelNumberOrEntity instanceof WorkerTaskAssignments
        ? workerPersonnelNumberOrEntity
        : {
            WorkerPersonnelNumber: workerPersonnelNumberOrEntity!,
            WorkerTaskId: workerTaskId!
          }
    );
  }
}
