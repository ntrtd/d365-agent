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
import { AssetMaintenanceAssetLifecycleModels } from './AssetMaintenanceAssetLifecycleModels';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetLifecycleModels} entity.
 */
export class AssetMaintenanceAssetLifecycleModelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetLifecycleModels<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetLifecycleModels` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetLifecycleModels` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetLifecycleModels<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetLifecycleModels<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetLifecycleModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetLifecycleModels`.
   */
  create(
    entity: AssetMaintenanceAssetLifecycleModels<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetLifecycleModels<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetLifecycleModels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetLifecycleModels` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetLifecycleModels.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceAssetLifecycleModels.lifecycleModelId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetLifecycleModels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lifecycleModelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetLifecycleModels<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetLifecycleModels<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LifecycleModelId: lifecycleModelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetLifecycleModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetLifecycleModels`.
   */
  update(
    entity: AssetMaintenanceAssetLifecycleModels<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetLifecycleModels<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetLifecycleModels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetLifecycleModels`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetLifecycleModels.dataAreaId}.
   * @param lifecycleModelId Key property. See {@link AssetMaintenanceAssetLifecycleModels.lifecycleModelId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetLifecycleModels`.
   */
  delete(
    dataAreaId: string,
    lifecycleModelId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetLifecycleModels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetLifecycleModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetLifecycleModels` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetLifecycleModels<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetLifecycleModels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lifecycleModelId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetLifecycleModels<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetLifecycleModels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetLifecycleModels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LifecycleModelId: lifecycleModelId!
          }
    );
  }
}
