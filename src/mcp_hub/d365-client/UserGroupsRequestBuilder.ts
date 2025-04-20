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
import { UserGroups } from './UserGroups';

/**
 * Request builder class for operations supported on the {@link UserGroups} entity.
 */
export class UserGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserGroups<T>, T> {
  /**
   * Returns a request builder for querying all `UserGroups` entities.
   * @returns A request builder for creating requests to retrieve all `UserGroups` entities.
   */
  getAll(): GetAllRequestBuilder<UserGroups<T>, T> {
    return new GetAllRequestBuilder<UserGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UserGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserGroups`.
   */
  create(entity: UserGroups<T>): CreateRequestBuilder<UserGroups<T>, T> {
    return new CreateRequestBuilder<UserGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `UserGroups` entity based on its keys.
   * @param groupId Key property. See {@link UserGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `UserGroups` entity based on its keys.
   */
  getByKey(
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UserGroups<T>, T> {
    return new GetByKeyRequestBuilder<UserGroups<T>, T>(this.entityApi, {
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `UserGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserGroups`.
   */
  update(entity: UserGroups<T>): UpdateRequestBuilder<UserGroups<T>, T> {
    return new UpdateRequestBuilder<UserGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserGroups`.
   * @param groupId Key property. See {@link UserGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `UserGroups`.
   */
  delete(groupId: string): DeleteRequestBuilder<UserGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserGroups` by taking the entity as a parameter.
   */
  delete(entity: UserGroups<T>): DeleteRequestBuilder<UserGroups<T>, T>;
  delete(groupIdOrEntity: any): DeleteRequestBuilder<UserGroups<T>, T> {
    return new DeleteRequestBuilder<UserGroups<T>, T>(
      this.entityApi,
      groupIdOrEntity instanceof UserGroups
        ? groupIdOrEntity
        : { GroupId: groupIdOrEntity! }
    );
  }
}
