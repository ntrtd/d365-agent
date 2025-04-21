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
import { ActionStatusToes } from './ActionStatusToes';

/**
 * Request builder class for operations supported on the {@link ActionStatusToes} entity.
 */
export class ActionStatusToesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ActionStatusToes<T>, T> {
  /**
   * Returns a request builder for querying all `ActionStatusToes` entities.
   * @returns A request builder for creating requests to retrieve all `ActionStatusToes` entities.
   */
  getAll(): GetAllRequestBuilder<ActionStatusToes<T>, T> {
    return new GetAllRequestBuilder<ActionStatusToes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ActionStatusToes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActionStatusToes`.
   */
  create(
    entity: ActionStatusToes<T>
  ): CreateRequestBuilder<ActionStatusToes<T>, T> {
    return new CreateRequestBuilder<ActionStatusToes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ActionStatusToes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ActionStatusToes.dataAreaId}.
   * @param action Key property. See {@link ActionStatusToes.action}.
   * @param messageStatus Key property. See {@link ActionStatusToes.messageStatus}.
   * @param itemStatus Key property. See {@link ActionStatusToes.itemStatus}.
   * @returns A request builder for creating requests to retrieve one `ActionStatusToes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    action: DeserializedType<T, 'Edm.String'>,
    messageStatus: DeserializedType<T, 'Edm.String'>,
    itemStatus: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ActionStatusToes<T>, T> {
    return new GetByKeyRequestBuilder<ActionStatusToes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Action: action,
      MessageStatus: messageStatus,
      ItemStatus: itemStatus
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ActionStatusToes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActionStatusToes`.
   */
  update(
    entity: ActionStatusToes<T>
  ): UpdateRequestBuilder<ActionStatusToes<T>, T> {
    return new UpdateRequestBuilder<ActionStatusToes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ActionStatusToes`.
   * @param dataAreaId Key property. See {@link ActionStatusToes.dataAreaId}.
   * @param action Key property. See {@link ActionStatusToes.action}.
   * @param messageStatus Key property. See {@link ActionStatusToes.messageStatus}.
   * @param itemStatus Key property. See {@link ActionStatusToes.itemStatus}.
   * @returns A request builder for creating requests that delete an entity of type `ActionStatusToes`.
   */
  delete(
    dataAreaId: string,
    action: string,
    messageStatus: string,
    itemStatus: string
  ): DeleteRequestBuilder<ActionStatusToes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ActionStatusToes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActionStatusToes` by taking the entity as a parameter.
   */
  delete(
    entity: ActionStatusToes<T>
  ): DeleteRequestBuilder<ActionStatusToes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    action?: string,
    messageStatus?: string,
    itemStatus?: string
  ): DeleteRequestBuilder<ActionStatusToes<T>, T> {
    return new DeleteRequestBuilder<ActionStatusToes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ActionStatusToes
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
