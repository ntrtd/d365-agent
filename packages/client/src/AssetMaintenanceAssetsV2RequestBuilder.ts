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
import { AssetMaintenanceAssetsV2 } from './AssetMaintenanceAssetsV2';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetsV2} entity.
 */
export class AssetMaintenanceAssetsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetsV2<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetsV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetsV2` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetsV2<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetsV2`.
   */
  create(
    entity: AssetMaintenanceAssetsV2<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetsV2<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetsV2.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetsV2.maintenanceAssetId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetsV2<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceAssetsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MaintenanceAssetId: maintenanceAssetId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetsV2`.
   */
  update(
    entity: AssetMaintenanceAssetsV2<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetsV2<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetsV2`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetsV2.dataAreaId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetsV2.maintenanceAssetId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetsV2`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetsV2` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetsV2<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetsV2<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetId: maintenanceAssetId!
          }
    );
  }
}
