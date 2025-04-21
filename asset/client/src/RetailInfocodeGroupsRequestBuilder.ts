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
import { RetailInfocodeGroups } from './RetailInfocodeGroups';

/**
 * Request builder class for operations supported on the {@link RetailInfocodeGroups} entity.
 */
export class RetailInfocodeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailInfocodeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailInfocodeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInfocodeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailInfocodeGroups<T>, T> {
    return new GetAllRequestBuilder<RetailInfocodeGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailInfocodeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInfocodeGroups`.
   */
  create(
    entity: RetailInfocodeGroups<T>
  ): CreateRequestBuilder<RetailInfocodeGroups<T>, T> {
    return new CreateRequestBuilder<RetailInfocodeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailInfocodeGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailInfocodeGroups.dataAreaId}.
   * @param groupId Key property. See {@link RetailInfocodeGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `RetailInfocodeGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailInfocodeGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailInfocodeGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInfocodeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInfocodeGroups`.
   */
  update(
    entity: RetailInfocodeGroups<T>
  ): UpdateRequestBuilder<RetailInfocodeGroups<T>, T> {
    return new UpdateRequestBuilder<RetailInfocodeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInfocodeGroups`.
   * @param dataAreaId Key property. See {@link RetailInfocodeGroups.dataAreaId}.
   * @param groupId Key property. See {@link RetailInfocodeGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInfocodeGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<RetailInfocodeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailInfocodeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInfocodeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInfocodeGroups<T>
  ): DeleteRequestBuilder<RetailInfocodeGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<RetailInfocodeGroups<T>, T> {
    return new DeleteRequestBuilder<RetailInfocodeGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailInfocodeGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
