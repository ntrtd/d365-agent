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
import { RetailTaskManagementReports } from './RetailTaskManagementReports';

/**
 * Request builder class for operations supported on the {@link RetailTaskManagementReports} entity.
 */
export class RetailTaskManagementReportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTaskManagementReports<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTaskManagementReports` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTaskManagementReports` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTaskManagementReports<T>, T> {
    return new GetAllRequestBuilder<RetailTaskManagementReports<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTaskManagementReports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTaskManagementReports`.
   */
  create(
    entity: RetailTaskManagementReports<T>
  ): CreateRequestBuilder<RetailTaskManagementReports<T>, T> {
    return new CreateRequestBuilder<RetailTaskManagementReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTaskManagementReports` entity based on its keys.
   * @param processProcessId Key property. See {@link RetailTaskManagementReports.processProcessId}.
   * @param taskId Key property. See {@link RetailTaskManagementReports.taskId}.
   * @returns A request builder for creating requests to retrieve one `RetailTaskManagementReports` entity based on its keys.
   */
  getByKey(
    processProcessId: DeserializedType<T, 'Edm.Guid'>,
    taskId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<RetailTaskManagementReports<T>, T> {
    return new GetByKeyRequestBuilder<RetailTaskManagementReports<T>, T>(
      this.entityApi,
      {
        Process_ProcessId: processProcessId,
        TaskId: taskId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTaskManagementReports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTaskManagementReports`.
   */
  update(
    entity: RetailTaskManagementReports<T>
  ): UpdateRequestBuilder<RetailTaskManagementReports<T>, T> {
    return new UpdateRequestBuilder<RetailTaskManagementReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTaskManagementReports`.
   * @param processProcessId Key property. See {@link RetailTaskManagementReports.processProcessId}.
   * @param taskId Key property. See {@link RetailTaskManagementReports.taskId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTaskManagementReports`.
   */
  delete(
    processProcessId: string,
    taskId: string
  ): DeleteRequestBuilder<RetailTaskManagementReports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTaskManagementReports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTaskManagementReports` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTaskManagementReports<T>
  ): DeleteRequestBuilder<RetailTaskManagementReports<T>, T>;
  delete(
    processProcessIdOrEntity: any,
    taskId?: string
  ): DeleteRequestBuilder<RetailTaskManagementReports<T>, T> {
    return new DeleteRequestBuilder<RetailTaskManagementReports<T>, T>(
      this.entityApi,
      processProcessIdOrEntity instanceof RetailTaskManagementReports
        ? processProcessIdOrEntity
        : {
            Process_ProcessId: processProcessIdOrEntity!,
            TaskId: taskId!
          }
    );
  }
}
