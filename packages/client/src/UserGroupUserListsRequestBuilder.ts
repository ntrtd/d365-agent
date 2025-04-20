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
import { UserGroupUserLists } from './UserGroupUserLists';

/**
 * Request builder class for operations supported on the {@link UserGroupUserLists} entity.
 */
export class UserGroupUserListsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserGroupUserLists<T>, T> {
  /**
   * Returns a request builder for querying all `UserGroupUserLists` entities.
   * @returns A request builder for creating requests to retrieve all `UserGroupUserLists` entities.
   */
  getAll(): GetAllRequestBuilder<UserGroupUserLists<T>, T> {
    return new GetAllRequestBuilder<UserGroupUserLists<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UserGroupUserLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserGroupUserLists`.
   */
  create(
    entity: UserGroupUserLists<T>
  ): CreateRequestBuilder<UserGroupUserLists<T>, T> {
    return new CreateRequestBuilder<UserGroupUserLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UserGroupUserLists` entity based on its keys.
   * @param userId Key property. See {@link UserGroupUserLists.userId}.
   * @param groupId Key property. See {@link UserGroupUserLists.groupId}.
   * @returns A request builder for creating requests to retrieve one `UserGroupUserLists` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UserGroupUserLists<T>, T> {
    return new GetByKeyRequestBuilder<UserGroupUserLists<T>, T>(
      this.entityApi,
      {
        userId: userId,
        groupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UserGroupUserLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserGroupUserLists`.
   */
  update(
    entity: UserGroupUserLists<T>
  ): UpdateRequestBuilder<UserGroupUserLists<T>, T> {
    return new UpdateRequestBuilder<UserGroupUserLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UserGroupUserLists`.
   * @param userId Key property. See {@link UserGroupUserLists.userId}.
   * @param groupId Key property. See {@link UserGroupUserLists.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `UserGroupUserLists`.
   */
  delete(
    userId: string,
    groupId: string
  ): DeleteRequestBuilder<UserGroupUserLists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserGroupUserLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserGroupUserLists` by taking the entity as a parameter.
   */
  delete(
    entity: UserGroupUserLists<T>
  ): DeleteRequestBuilder<UserGroupUserLists<T>, T>;
  delete(
    userIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<UserGroupUserLists<T>, T> {
    return new DeleteRequestBuilder<UserGroupUserLists<T>, T>(
      this.entityApi,
      userIdOrEntity instanceof UserGroupUserLists
        ? userIdOrEntity
        : {
            userId: userIdOrEntity!,
            groupId: groupId!
          }
    );
  }
}
