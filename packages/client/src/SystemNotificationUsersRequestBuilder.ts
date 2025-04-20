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
import { SystemNotificationUsers } from './SystemNotificationUsers';

/**
 * Request builder class for operations supported on the {@link SystemNotificationUsers} entity.
 */
export class SystemNotificationUsersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SystemNotificationUsers<T>, T> {
  /**
   * Returns a request builder for querying all `SystemNotificationUsers` entities.
   * @returns A request builder for creating requests to retrieve all `SystemNotificationUsers` entities.
   */
  getAll(): GetAllRequestBuilder<SystemNotificationUsers<T>, T> {
    return new GetAllRequestBuilder<SystemNotificationUsers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SystemNotificationUsers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SystemNotificationUsers`.
   */
  create(
    entity: SystemNotificationUsers<T>
  ): CreateRequestBuilder<SystemNotificationUsers<T>, T> {
    return new CreateRequestBuilder<SystemNotificationUsers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SystemNotificationUsers` entity based on its keys.
   * @param userId Key property. See {@link SystemNotificationUsers.userId}.
   * @returns A request builder for creating requests to retrieve one `SystemNotificationUsers` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SystemNotificationUsers<T>, T> {
    return new GetByKeyRequestBuilder<SystemNotificationUsers<T>, T>(
      this.entityApi,
      { UserId: userId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SystemNotificationUsers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SystemNotificationUsers`.
   */
  update(
    entity: SystemNotificationUsers<T>
  ): UpdateRequestBuilder<SystemNotificationUsers<T>, T> {
    return new UpdateRequestBuilder<SystemNotificationUsers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SystemNotificationUsers`.
   * @param userId Key property. See {@link SystemNotificationUsers.userId}.
   * @returns A request builder for creating requests that delete an entity of type `SystemNotificationUsers`.
   */
  delete(userId: string): DeleteRequestBuilder<SystemNotificationUsers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SystemNotificationUsers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SystemNotificationUsers` by taking the entity as a parameter.
   */
  delete(
    entity: SystemNotificationUsers<T>
  ): DeleteRequestBuilder<SystemNotificationUsers<T>, T>;
  delete(
    userIdOrEntity: any
  ): DeleteRequestBuilder<SystemNotificationUsers<T>, T> {
    return new DeleteRequestBuilder<SystemNotificationUsers<T>, T>(
      this.entityApi,
      userIdOrEntity instanceof SystemNotificationUsers
        ? userIdOrEntity
        : { UserId: userIdOrEntity! }
    );
  }
}
