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
import { AssetMaintenanceAssetLifecycleModelStates } from './AssetMaintenanceAssetLifecycleModelStates';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetLifecycleModelStates} entity.
 */
export class AssetMaintenanceAssetLifecycleModelStatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetLifecycleModelStates<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetLifecycleModelStates` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetLifecycleModelStates` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceAssetLifecycleModelStates<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceAssetLifecycleModelStates<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetLifecycleModelStates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetLifecycleModelStates`.
   */
  create(
    entity: AssetMaintenanceAssetLifecycleModelStates<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetLifecycleModelStates<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceAssetLifecycleModelStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetLifecycleModelStates` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetLifecycleModelStates.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceAssetLifecycleModelStates.lifecycleModelId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceAssetLifecycleModelStates.lifecycleStateId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetLifecycleModelStates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lifecycleModelId: DeserializedType<T, 'Edm.String'>,
    lifecycleStateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetLifecycleModelStates<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetLifecycleModelStates<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LifecycleModelId: lifecycleModelId,
      LifecycleStateId: lifecycleStateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetLifecycleModelStates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetLifecycleModelStates`.
   */
  update(
    entity: AssetMaintenanceAssetLifecycleModelStates<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetLifecycleModelStates<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceAssetLifecycleModelStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetLifecycleModelStates`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetLifecycleModelStates.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceAssetLifecycleModelStates.lifecycleModelId}.
   * @param lifecycleStateId Key property. See {@link AssetMaintenanceAssetLifecycleModelStates.lifecycleStateId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetLifecycleModelStates`.
   */
  delete(
    dataAreaId: string,
    lifecycleModelId: string,
    lifecycleStateId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetLifecycleModelStates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetLifecycleModelStates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetLifecycleModelStates` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetLifecycleModelStates<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetLifecycleModelStates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lifecycleModelId?: string,
    lifecycleStateId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetLifecycleModelStates<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceAssetLifecycleModelStates<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetLifecycleModelStates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LifecycleModelId: lifecycleModelId!,
            LifecycleStateId: lifecycleStateId!
          }
    );
  }
}
