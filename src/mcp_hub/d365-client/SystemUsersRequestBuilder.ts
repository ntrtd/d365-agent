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
import { SystemUsers } from './SystemUsers';

/**
 * Request builder class for operations supported on the {@link SystemUsers} entity.
 */
export class SystemUsersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SystemUsers<T>, T> {
  /**
   * Returns a request builder for querying all `SystemUsers` entities.
   * @returns A request builder for creating requests to retrieve all `SystemUsers` entities.
   */
  getAll(): GetAllRequestBuilder<SystemUsers<T>, T> {
    return new GetAllRequestBuilder<SystemUsers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SystemUsers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SystemUsers`.
   */
  create(entity: SystemUsers<T>): CreateRequestBuilder<SystemUsers<T>, T> {
    return new CreateRequestBuilder<SystemUsers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SystemUsers` entity based on its keys.
   * @param userId Key property. See {@link SystemUsers.userId}.
   * @returns A request builder for creating requests to retrieve one `SystemUsers` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SystemUsers<T>, T> {
    return new GetByKeyRequestBuilder<SystemUsers<T>, T>(this.entityApi, {
      UserID: userId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SystemUsers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SystemUsers`.
   */
  update(entity: SystemUsers<T>): UpdateRequestBuilder<SystemUsers<T>, T> {
    return new UpdateRequestBuilder<SystemUsers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SystemUsers`.
   * @param userId Key property. See {@link SystemUsers.userId}.
   * @returns A request builder for creating requests that delete an entity of type `SystemUsers`.
   */
  delete(userId: string): DeleteRequestBuilder<SystemUsers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SystemUsers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SystemUsers` by taking the entity as a parameter.
   */
  delete(entity: SystemUsers<T>): DeleteRequestBuilder<SystemUsers<T>, T>;
  delete(userIdOrEntity: any): DeleteRequestBuilder<SystemUsers<T>, T> {
    return new DeleteRequestBuilder<SystemUsers<T>, T>(
      this.entityApi,
      userIdOrEntity instanceof SystemUsers
        ? userIdOrEntity
        : { UserID: userIdOrEntity! }
    );
  }
}
