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
import { ActionStatusFroms } from './ActionStatusFroms';

/**
 * Request builder class for operations supported on the {@link ActionStatusFroms} entity.
 */
export class ActionStatusFromsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ActionStatusFroms<T>, T> {
  /**
   * Returns a request builder for querying all `ActionStatusFroms` entities.
   * @returns A request builder for creating requests to retrieve all `ActionStatusFroms` entities.
   */
  getAll(): GetAllRequestBuilder<ActionStatusFroms<T>, T> {
    return new GetAllRequestBuilder<ActionStatusFroms<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ActionStatusFroms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActionStatusFroms`.
   */
  create(
    entity: ActionStatusFroms<T>
  ): CreateRequestBuilder<ActionStatusFroms<T>, T> {
    return new CreateRequestBuilder<ActionStatusFroms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ActionStatusFroms` entity based on its keys.
   * @param dataAreaId Key property. See {@link ActionStatusFroms.dataAreaId}.
   * @param action Key property. See {@link ActionStatusFroms.action}.
   * @param messageStatus Key property. See {@link ActionStatusFroms.messageStatus}.
   * @param itemStatus Key property. See {@link ActionStatusFroms.itemStatus}.
   * @returns A request builder for creating requests to retrieve one `ActionStatusFroms` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    action: DeserializedType<T, 'Edm.String'>,
    messageStatus: DeserializedType<T, 'Edm.String'>,
    itemStatus: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ActionStatusFroms<T>, T> {
    return new GetByKeyRequestBuilder<ActionStatusFroms<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Action: action,
      MessageStatus: messageStatus,
      ItemStatus: itemStatus
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ActionStatusFroms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActionStatusFroms`.
   */
  update(
    entity: ActionStatusFroms<T>
  ): UpdateRequestBuilder<ActionStatusFroms<T>, T> {
    return new UpdateRequestBuilder<ActionStatusFroms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ActionStatusFroms`.
   * @param dataAreaId Key property. See {@link ActionStatusFroms.dataAreaId}.
   * @param action Key property. See {@link ActionStatusFroms.action}.
   * @param messageStatus Key property. See {@link ActionStatusFroms.messageStatus}.
   * @param itemStatus Key property. See {@link ActionStatusFroms.itemStatus}.
   * @returns A request builder for creating requests that delete an entity of type `ActionStatusFroms`.
   */
  delete(
    dataAreaId: string,
    action: string,
    messageStatus: string,
    itemStatus: string
  ): DeleteRequestBuilder<ActionStatusFroms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ActionStatusFroms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActionStatusFroms` by taking the entity as a parameter.
   */
  delete(
    entity: ActionStatusFroms<T>
  ): DeleteRequestBuilder<ActionStatusFroms<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    action?: string,
    messageStatus?: string,
    itemStatus?: string
  ): DeleteRequestBuilder<ActionStatusFroms<T>, T> {
    return new DeleteRequestBuilder<ActionStatusFroms<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ActionStatusFroms
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Action: action!,
            MessageStatus: messageStatus!,
            ItemStatus: itemStatus!
          }
    );
  }
}
