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
import { GroupHeaders } from './GroupHeaders';

/**
 * Request builder class for operations supported on the {@link GroupHeaders} entity.
 */
export class GroupHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GroupHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `GroupHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `GroupHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<GroupHeaders<T>, T> {
    return new GetAllRequestBuilder<GroupHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GroupHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GroupHeaders`.
   */
  create(entity: GroupHeaders<T>): CreateRequestBuilder<GroupHeaders<T>, T> {
    return new CreateRequestBuilder<GroupHeaders<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `GroupHeaders` entity based on its keys.
   * @param groupName Key property. See {@link GroupHeaders.groupName}.
   * @returns A request builder for creating requests to retrieve one `GroupHeaders` entity based on its keys.
   */
  getByKey(
    groupName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GroupHeaders<T>, T> {
    return new GetByKeyRequestBuilder<GroupHeaders<T>, T>(this.entityApi, {
      GroupName: groupName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GroupHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GroupHeaders`.
   */
  update(entity: GroupHeaders<T>): UpdateRequestBuilder<GroupHeaders<T>, T> {
    return new UpdateRequestBuilder<GroupHeaders<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GroupHeaders`.
   * @param groupName Key property. See {@link GroupHeaders.groupName}.
   * @returns A request builder for creating requests that delete an entity of type `GroupHeaders`.
   */
  delete(groupName: string): DeleteRequestBuilder<GroupHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GroupHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GroupHeaders` by taking the entity as a parameter.
   */
  delete(entity: GroupHeaders<T>): DeleteRequestBuilder<GroupHeaders<T>, T>;
  delete(groupNameOrEntity: any): DeleteRequestBuilder<GroupHeaders<T>, T> {
    return new DeleteRequestBuilder<GroupHeaders<T>, T>(
      this.entityApi,
      groupNameOrEntity instanceof GroupHeaders
        ? groupNameOrEntity
        : { GroupName: groupNameOrEntity! }
    );
  }
}
