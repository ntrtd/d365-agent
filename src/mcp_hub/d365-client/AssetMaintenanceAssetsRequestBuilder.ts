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
import { AssetMaintenanceAssets } from './AssetMaintenanceAssets';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssets} entity.
 */
export class AssetMaintenanceAssetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssets<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssets` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssets` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssets<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssets<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssets`.
   */
  create(
    entity: AssetMaintenanceAssets<T>
  ): CreateRequestBuilder<AssetMaintenanceAssets<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssets` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssets.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssets.maintenanceAssetId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssets` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssets<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceAssets<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MaintenanceAssetId: maintenanceAssetId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssets`.
   */
  update(
    entity: AssetMaintenanceAssets<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssets<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssets`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssets.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssets.maintenanceAssetId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssets`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssets` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssets<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssets<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssets<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssets<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssets
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetId: maintenanceAssetId!
          }
    );
  }
}
