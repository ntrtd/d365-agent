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
import { AssetMaintenanceJobGroups } from './AssetMaintenanceJobGroups';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceJobGroups} entity.
 */
export class AssetMaintenanceJobGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceJobGroups<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceJobGroups` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceJobGroups` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceJobGroups<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceJobGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceJobGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceJobGroups`.
   */
  create(
    entity: AssetMaintenanceJobGroups<T>
  ): CreateRequestBuilder<AssetMaintenanceJobGroups<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceJobGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceJobGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobGroups.dataAreaId}.
   * @param jobGroupId Key property. See {@link AssetMaintenanceJobGroups.jobGroupId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceJobGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    jobGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceJobGroups<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceJobGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JobGroupId: jobGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceJobGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceJobGroups`.
   */
  update(
    entity: AssetMaintenanceJobGroups<T>
  ): UpdateRequestBuilder<AssetMaintenanceJobGroups<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceJobGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobGroups`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobGroups.dataAreaId}.
   * @param jobGroupId Key property. See {@link AssetMaintenanceJobGroups.jobGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobGroups`.
   */
  delete(
    dataAreaId: string,
    jobGroupId: string
  ): DeleteRequestBuilder<AssetMaintenanceJobGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobGroups` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceJobGroups<T>
  ): DeleteRequestBuilder<AssetMaintenanceJobGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    jobGroupId?: string
  ): DeleteRequestBuilder<AssetMaintenanceJobGroups<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceJobGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceJobGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JobGroupId: jobGroupId!
          }
    );
  }
}
