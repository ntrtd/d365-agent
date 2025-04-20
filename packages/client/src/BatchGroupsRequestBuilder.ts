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
import { BatchGroups } from './BatchGroups';

/**
 * Request builder class for operations supported on the {@link BatchGroups} entity.
 */
export class BatchGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BatchGroups<T>, T> {
  /**
   * Returns a request builder for querying all `BatchGroups` entities.
   * @returns A request builder for creating requests to retrieve all `BatchGroups` entities.
   */
  getAll(): GetAllRequestBuilder<BatchGroups<T>, T> {
    return new GetAllRequestBuilder<BatchGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BatchGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BatchGroups`.
   */
  create(entity: BatchGroups<T>): CreateRequestBuilder<BatchGroups<T>, T> {
    return new CreateRequestBuilder<BatchGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BatchGroups` entity based on its keys.
   * @param groupId Key property. See {@link BatchGroups.groupId}.
   * @param serverId Key property. See {@link BatchGroups.serverId}.
   * @returns A request builder for creating requests to retrieve one `BatchGroups` entity based on its keys.
   */
  getByKey(
    groupId: DeserializedType<T, 'Edm.String'>,
    serverId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BatchGroups<T>, T> {
    return new GetByKeyRequestBuilder<BatchGroups<T>, T>(this.entityApi, {
      GroupId: groupId,
      ServerId: serverId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BatchGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BatchGroups`.
   */
  update(entity: BatchGroups<T>): UpdateRequestBuilder<BatchGroups<T>, T> {
    return new UpdateRequestBuilder<BatchGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BatchGroups`.
   * @param groupId Key property. See {@link BatchGroups.groupId}.
   * @param serverId Key property. See {@link BatchGroups.serverId}.
   * @returns A request builder for creating requests that delete an entity of type `BatchGroups`.
   */
  delete(
    groupId: string,
    serverId: string
  ): DeleteRequestBuilder<BatchGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BatchGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BatchGroups` by taking the entity as a parameter.
   */
  delete(entity: BatchGroups<T>): DeleteRequestBuilder<BatchGroups<T>, T>;
  delete(
    groupIdOrEntity: any,
    serverId?: string
  ): DeleteRequestBuilder<BatchGroups<T>, T> {
    return new DeleteRequestBuilder<BatchGroups<T>, T>(
      this.entityApi,
      groupIdOrEntity instanceof BatchGroups
        ? groupIdOrEntity
        : {
            GroupId: groupIdOrEntity!,
            ServerId: serverId!
          }
    );
  }
}
