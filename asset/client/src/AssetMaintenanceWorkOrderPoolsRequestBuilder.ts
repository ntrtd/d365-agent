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
import { AssetMaintenanceWorkOrderPools } from './AssetMaintenanceWorkOrderPools';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderPools} entity.
 */
export class AssetMaintenanceWorkOrderPoolsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderPools<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderPools` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderPools` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkOrderPools<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWorkOrderPools<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderPools` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderPools`.
   */
  create(
    entity: AssetMaintenanceWorkOrderPools<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderPools<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWorkOrderPools<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderPools` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderPools.dataAreaId}.
   * @param poolId Key property. See {@link AssetMaintenanceWorkOrderPools.poolId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderPools` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    poolId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderPools<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceWorkOrderPools<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PoolId: poolId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderPools`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderPools`.
   */
  update(
    entity: AssetMaintenanceWorkOrderPools<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderPools<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWorkOrderPools<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderPools`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderPools.dataAreaId}.
   * @param poolId Key property. See {@link AssetMaintenanceWorkOrderPools.poolId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderPools`.
   */
  delete(
    dataAreaId: string,
    poolId: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderPools<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderPools`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderPools` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderPools<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderPools<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    poolId?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderPools<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWorkOrderPools<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderPools
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PoolId: poolId!
          }
    );
  }
}
