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
import { WarehouseZoneGroups } from './WarehouseZoneGroups';

/**
 * Request builder class for operations supported on the {@link WarehouseZoneGroups} entity.
 */
export class WarehouseZoneGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseZoneGroups<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseZoneGroups` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseZoneGroups` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseZoneGroups<T>, T> {
    return new GetAllRequestBuilder<WarehouseZoneGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehouseZoneGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseZoneGroups`.
   */
  create(
    entity: WarehouseZoneGroups<T>
  ): CreateRequestBuilder<WarehouseZoneGroups<T>, T> {
    return new CreateRequestBuilder<WarehouseZoneGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseZoneGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseZoneGroups.dataAreaId}.
   * @param groupId Key property. See {@link WarehouseZoneGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseZoneGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseZoneGroups<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseZoneGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseZoneGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseZoneGroups`.
   */
  update(
    entity: WarehouseZoneGroups<T>
  ): UpdateRequestBuilder<WarehouseZoneGroups<T>, T> {
    return new UpdateRequestBuilder<WarehouseZoneGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseZoneGroups`.
   * @param dataAreaId Key property. See {@link WarehouseZoneGroups.dataAreaId}.
   * @param groupId Key property. See {@link WarehouseZoneGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseZoneGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<WarehouseZoneGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseZoneGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseZoneGroups` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseZoneGroups<T>
  ): DeleteRequestBuilder<WarehouseZoneGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<WarehouseZoneGroups<T>, T> {
    return new DeleteRequestBuilder<WarehouseZoneGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseZoneGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
