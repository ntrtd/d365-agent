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
import { AssetMaintenanceWorkerGroups } from './AssetMaintenanceWorkerGroups';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkerGroups} entity.
 */
export class AssetMaintenanceWorkerGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkerGroups<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkerGroups` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkerGroups` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkerGroups<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWorkerGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkerGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkerGroups`.
   */
  create(
    entity: AssetMaintenanceWorkerGroups<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkerGroups<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWorkerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkerGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkerGroups.dataAreaId}.
   * @param workerGroupId Key property. See {@link AssetMaintenanceWorkerGroups.workerGroupId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkerGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workerGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkerGroups<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceWorkerGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkerGroupID: workerGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkerGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkerGroups`.
   */
  update(
    entity: AssetMaintenanceWorkerGroups<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkerGroups<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWorkerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkerGroups`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkerGroups.dataAreaId}.
   * @param workerGroupId Key property. See {@link AssetMaintenanceWorkerGroups.workerGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkerGroups`.
   */
  delete(
    dataAreaId: string,
    workerGroupId: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkerGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkerGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkerGroups` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkerGroups<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkerGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workerGroupId?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkerGroups<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWorkerGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkerGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkerGroupID: workerGroupId!
          }
    );
  }
}
