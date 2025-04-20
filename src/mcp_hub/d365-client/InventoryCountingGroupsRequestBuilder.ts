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
import { InventoryCountingGroups } from './InventoryCountingGroups';

/**
 * Request builder class for operations supported on the {@link InventoryCountingGroups} entity.
 */
export class InventoryCountingGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryCountingGroups<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryCountingGroups` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryCountingGroups` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryCountingGroups<T>, T> {
    return new GetAllRequestBuilder<InventoryCountingGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryCountingGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryCountingGroups`.
   */
  create(
    entity: InventoryCountingGroups<T>
  ): CreateRequestBuilder<InventoryCountingGroups<T>, T> {
    return new CreateRequestBuilder<InventoryCountingGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryCountingGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryCountingGroups.dataAreaId}.
   * @param groupId Key property. See {@link InventoryCountingGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `InventoryCountingGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryCountingGroups<T>, T> {
    return new GetByKeyRequestBuilder<InventoryCountingGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryCountingGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryCountingGroups`.
   */
  update(
    entity: InventoryCountingGroups<T>
  ): UpdateRequestBuilder<InventoryCountingGroups<T>, T> {
    return new UpdateRequestBuilder<InventoryCountingGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryCountingGroups`.
   * @param dataAreaId Key property. See {@link InventoryCountingGroups.dataAreaId}.
   * @param groupId Key property. See {@link InventoryCountingGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountingGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<InventoryCountingGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryCountingGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountingGroups` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryCountingGroups<T>
  ): DeleteRequestBuilder<InventoryCountingGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<InventoryCountingGroups<T>, T> {
    return new DeleteRequestBuilder<InventoryCountingGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryCountingGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
