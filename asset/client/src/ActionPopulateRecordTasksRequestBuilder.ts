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
import { ActionPopulateRecordTasks } from './ActionPopulateRecordTasks';

/**
 * Request builder class for operations supported on the {@link ActionPopulateRecordTasks} entity.
 */
export class ActionPopulateRecordTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ActionPopulateRecordTasks<T>, T> {
  /**
   * Returns a request builder for querying all `ActionPopulateRecordTasks` entities.
   * @returns A request builder for creating requests to retrieve all `ActionPopulateRecordTasks` entities.
   */
  getAll(): GetAllRequestBuilder<ActionPopulateRecordTasks<T>, T> {
    return new GetAllRequestBuilder<ActionPopulateRecordTasks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ActionPopulateRecordTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActionPopulateRecordTasks`.
   */
  create(
    entity: ActionPopulateRecordTasks<T>
  ): CreateRequestBuilder<ActionPopulateRecordTasks<T>, T> {
    return new CreateRequestBuilder<ActionPopulateRecordTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ActionPopulateRecordTasks` entity based on its keys.
   * @param dataAreaId Key property. See {@link ActionPopulateRecordTasks.dataAreaId}.
   * @param actionName Key property. See {@link ActionPopulateRecordTasks.actionName}.
   * @param name Key property. See {@link ActionPopulateRecordTasks.name}.
   * @returns A request builder for creating requests to retrieve one `ActionPopulateRecordTasks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    actionName: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ActionPopulateRecordTasks<T>, T> {
    return new GetByKeyRequestBuilder<ActionPopulateRecordTasks<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ActionName: actionName,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ActionPopulateRecordTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActionPopulateRecordTasks`.
   */
  update(
    entity: ActionPopulateRecordTasks<T>
  ): UpdateRequestBuilder<ActionPopulateRecordTasks<T>, T> {
    return new UpdateRequestBuilder<ActionPopulateRecordTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ActionPopulateRecordTasks`.
   * @param dataAreaId Key property. See {@link ActionPopulateRecordTasks.dataAreaId}.
   * @param actionName Key property. See {@link ActionPopulateRecordTasks.actionName}.
   * @param name Key property. See {@link ActionPopulateRecordTasks.name}.
   * @returns A request builder for creating requests that delete an entity of type `ActionPopulateRecordTasks`.
   */
  delete(
    dataAreaId: string,
    actionName: string,
    name: string
  ): DeleteRequestBuilder<ActionPopulateRecordTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ActionPopulateRecordTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActionPopulateRecordTasks` by taking the entity as a parameter.
   */
  delete(
    entity: ActionPopulateRecordTasks<T>
  ): DeleteRequestBuilder<ActionPopulateRecordTasks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    actionName?: string,
    name?: string
  ): DeleteRequestBuilder<ActionPopulateRecordTasks<T>, T> {
    return new DeleteRequestBuilder<ActionPopulateRecordTasks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ActionPopulateRecordTasks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ActionName: actionName!,
            Name: name!
          }
    );
  }
}
