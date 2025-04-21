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
import { AssetMaintenanceAssetLifecycleStates } from './AssetMaintenanceAssetLifecycleStates';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetLifecycleStates} entity.
 */
export class AssetMaintenanceAssetLifecycleStatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetLifecycleStates<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetLifecycleStates` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetLifecycleStates` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetLifecycleStates<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetLifecycleStates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetLifecycleStates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetLifecycleStates`.
   */
  create(
    entity: AssetMaintenanceAssetLifecycleStates<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetLifecycleStates<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetLifecycleStates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetLifecycleStates` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetLifecycleStates.dataAreaId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceAssetLifecycleStates.lifecycleStateId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetLifecycleStates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lifecycleStateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetLifecycleStates<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetLifecycleStates<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LifecycleStateId: lifecycleStateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetLifecycleStates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetLifecycleStates`.
   */
  update(
    entity: AssetMaintenanceAssetLifecycleStates<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetLifecycleStates<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetLifecycleStates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetLifecycleStates`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetLifecycleStates.dataAreaId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceAssetLifecycleStates.lifecycleStateId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetLifecycleStates`.
   */
  delete(
    dataAreaId: string,
    lifecycleStateId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetLifecycleStates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetLifecycleStates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetLifecycleStates` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetLifecycleStates<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetLifecycleStates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lifecycleStateId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetLifecycleStates<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetLifecycleStates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetLifecycleStates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LifecycleStateId: lifecycleStateId!
          }
    );
  }
}
