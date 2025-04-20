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
import { RetailInfocodeGroupMembers } from './RetailInfocodeGroupMembers';

/**
 * Request builder class for operations supported on the {@link RetailInfocodeGroupMembers} entity.
 */
export class RetailInfocodeGroupMembersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailInfocodeGroupMembers<T>, T> {
  /**
   * Returns a request builder for querying all `RetailInfocodeGroupMembers` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInfocodeGroupMembers` entities.
   */
  getAll(): GetAllRequestBuilder<RetailInfocodeGroupMembers<T>, T> {
    return new GetAllRequestBuilder<RetailInfocodeGroupMembers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailInfocodeGroupMembers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInfocodeGroupMembers`.
   */
  create(
    entity: RetailInfocodeGroupMembers<T>
  ): CreateRequestBuilder<RetailInfocodeGroupMembers<T>, T> {
    return new CreateRequestBuilder<RetailInfocodeGroupMembers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailInfocodeGroupMembers` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailInfocodeGroupMembers.dataAreaId}.
   * @param groupId Key property. See {@link RetailInfocodeGroupMembers.groupId}.
   * @param infocodeId Key property. See {@link RetailInfocodeGroupMembers.infocodeId}.
   * @returns A request builder for creating requests to retrieve one `RetailInfocodeGroupMembers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>,
    infocodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailInfocodeGroupMembers<T>, T> {
    return new GetByKeyRequestBuilder<RetailInfocodeGroupMembers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId,
        InfocodeId: infocodeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInfocodeGroupMembers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInfocodeGroupMembers`.
   */
  update(
    entity: RetailInfocodeGroupMembers<T>
  ): UpdateRequestBuilder<RetailInfocodeGroupMembers<T>, T> {
    return new UpdateRequestBuilder<RetailInfocodeGroupMembers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInfocodeGroupMembers`.
   * @param dataAreaId Key property. See {@link RetailInfocodeGroupMembers.dataAreaId}.
   * @param groupId Key property. See {@link RetailInfocodeGroupMembers.groupId}.
   * @param infocodeId Key property. See {@link RetailInfocodeGroupMembers.infocodeId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInfocodeGroupMembers`.
   */
  delete(
    dataAreaId: string,
    groupId: string,
    infocodeId: string
  ): DeleteRequestBuilder<RetailInfocodeGroupMembers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailInfocodeGroupMembers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInfocodeGroupMembers` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInfocodeGroupMembers<T>
  ): DeleteRequestBuilder<RetailInfocodeGroupMembers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string,
    infocodeId?: string
  ): DeleteRequestBuilder<RetailInfocodeGroupMembers<T>, T> {
    return new DeleteRequestBuilder<RetailInfocodeGroupMembers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailInfocodeGroupMembers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!,
            InfocodeId: infocodeId!
          }
    );
  }
}
