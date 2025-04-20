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
import { NotificationSubscriptions } from './NotificationSubscriptions';

/**
 * Request builder class for operations supported on the {@link NotificationSubscriptions} entity.
 */
export class NotificationSubscriptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NotificationSubscriptions<T>, T> {
  /**
   * Returns a request builder for querying all `NotificationSubscriptions` entities.
   * @returns A request builder for creating requests to retrieve all `NotificationSubscriptions` entities.
   */
  getAll(): GetAllRequestBuilder<NotificationSubscriptions<T>, T> {
    return new GetAllRequestBuilder<NotificationSubscriptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `NotificationSubscriptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NotificationSubscriptions`.
   */
  create(
    entity: NotificationSubscriptions<T>
  ): CreateRequestBuilder<NotificationSubscriptions<T>, T> {
    return new CreateRequestBuilder<NotificationSubscriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `NotificationSubscriptions` entity based on its keys.
   * @param retailOperationOperationId Key property. See {@link NotificationSubscriptions.retailOperationOperationId}.
   * @param retailPosPermissionGroupPosPermissionGroupId Key property. See {@link NotificationSubscriptions.retailPosPermissionGroupPosPermissionGroupId}.
   * @returns A request builder for creating requests to retrieve one `NotificationSubscriptions` entity based on its keys.
   */
  getByKey(
    retailOperationOperationId: DeserializedType<T, 'Edm.Int32'>,
    retailPosPermissionGroupPosPermissionGroupId: DeserializedType<
      T,
      'Edm.String'
    >
  ): GetByKeyRequestBuilder<NotificationSubscriptions<T>, T> {
    return new GetByKeyRequestBuilder<NotificationSubscriptions<T>, T>(
      this.entityApi,
      {
        RetailOperation_OperationId: retailOperationOperationId,
        RetailPosPermissionGroup_PosPermissionGroupId:
          retailPosPermissionGroupPosPermissionGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `NotificationSubscriptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NotificationSubscriptions`.
   */
  update(
    entity: NotificationSubscriptions<T>
  ): UpdateRequestBuilder<NotificationSubscriptions<T>, T> {
    return new UpdateRequestBuilder<NotificationSubscriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `NotificationSubscriptions`.
   * @param retailOperationOperationId Key property. See {@link NotificationSubscriptions.retailOperationOperationId}.
   * @param retailPosPermissionGroupPosPermissionGroupId Key property. See {@link NotificationSubscriptions.retailPosPermissionGroupPosPermissionGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `NotificationSubscriptions`.
   */
  delete(
    retailOperationOperationId: number,
    retailPosPermissionGroupPosPermissionGroupId: string
  ): DeleteRequestBuilder<NotificationSubscriptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NotificationSubscriptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NotificationSubscriptions` by taking the entity as a parameter.
   */
  delete(
    entity: NotificationSubscriptions<T>
  ): DeleteRequestBuilder<NotificationSubscriptions<T>, T>;
  delete(
    retailOperationOperationIdOrEntity: any,
    retailPosPermissionGroupPosPermissionGroupId?: string
  ): DeleteRequestBuilder<NotificationSubscriptions<T>, T> {
    return new DeleteRequestBuilder<NotificationSubscriptions<T>, T>(
      this.entityApi,
      retailOperationOperationIdOrEntity instanceof NotificationSubscriptions
        ? retailOperationOperationIdOrEntity
        : {
            RetailOperation_OperationId: retailOperationOperationIdOrEntity!,
            RetailPosPermissionGroup_PosPermissionGroupId:
              retailPosPermissionGroupPosPermissionGroupId!
          }
    );
  }
}
