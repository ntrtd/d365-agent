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
import { AssetMaintenanceAssetsV3 } from './AssetMaintenanceAssetsV3';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetsV3} entity.
 */
export class AssetMaintenanceAssetsV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetsV3<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetsV3` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetsV3` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetsV3<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetsV3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetsV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetsV3`.
   */
  create(
    entity: AssetMaintenanceAssetsV3<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetsV3<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetsV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetsV3.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetsV3.maintenanceAssetId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetsV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetsV3<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceAssetsV3<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MaintenanceAssetId: maintenanceAssetId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetsV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetsV3`.
   */
  update(
    entity: AssetMaintenanceAssetsV3<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetsV3<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetsV3`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetsV3.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetsV3.maintenanceAssetId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetsV3`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetsV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetsV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetsV3` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetsV3<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetsV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetsV3<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetsV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetsV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetId: maintenanceAssetId!
          }
    );
  }
}
