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
import { StaffPermissionGroups } from './StaffPermissionGroups';

/**
 * Request builder class for operations supported on the {@link StaffPermissionGroups} entity.
 */
export class StaffPermissionGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StaffPermissionGroups<T>, T> {
  /**
   * Returns a request builder for querying all `StaffPermissionGroups` entities.
   * @returns A request builder for creating requests to retrieve all `StaffPermissionGroups` entities.
   */
  getAll(): GetAllRequestBuilder<StaffPermissionGroups<T>, T> {
    return new GetAllRequestBuilder<StaffPermissionGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `StaffPermissionGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StaffPermissionGroups`.
   */
  create(
    entity: StaffPermissionGroups<T>
  ): CreateRequestBuilder<StaffPermissionGroups<T>, T> {
    return new CreateRequestBuilder<StaffPermissionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `StaffPermissionGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link StaffPermissionGroups.dataAreaId}.
   * @param permissionGroupId Key property. See {@link StaffPermissionGroups.permissionGroupId}.
   * @returns A request builder for creating requests to retrieve one `StaffPermissionGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    permissionGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<StaffPermissionGroups<T>, T> {
    return new GetByKeyRequestBuilder<StaffPermissionGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PermissionGroupId: permissionGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `StaffPermissionGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StaffPermissionGroups`.
   */
  update(
    entity: StaffPermissionGroups<T>
  ): UpdateRequestBuilder<StaffPermissionGroups<T>, T> {
    return new UpdateRequestBuilder<StaffPermissionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `StaffPermissionGroups`.
   * @param dataAreaId Key property. See {@link StaffPermissionGroups.dataAreaId}.
   * @param permissionGroupId Key property. See {@link StaffPermissionGroups.permissionGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `StaffPermissionGroups`.
   */
  delete(
    dataAreaId: string,
    permissionGroupId: string
  ): DeleteRequestBuilder<StaffPermissionGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StaffPermissionGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StaffPermissionGroups` by taking the entity as a parameter.
   */
  delete(
    entity: StaffPermissionGroups<T>
  ): DeleteRequestBuilder<StaffPermissionGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    permissionGroupId?: string
  ): DeleteRequestBuilder<StaffPermissionGroups<T>, T> {
    return new DeleteRequestBuilder<StaffPermissionGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof StaffPermissionGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PermissionGroupId: permissionGroupId!
          }
    );
  }
}
