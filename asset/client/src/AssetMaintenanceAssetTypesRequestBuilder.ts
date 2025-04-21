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
import { AssetMaintenanceAssetTypes } from './AssetMaintenanceAssetTypes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetTypes} entity.
 */
export class AssetMaintenanceAssetTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetTypes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetTypes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetTypes<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetTypes`.
   */
  create(
    entity: AssetMaintenanceAssetTypes<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetTypes<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypes.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypes.maintenanceAssetTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetTypes<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceAssetTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MaintenanceAssetTypeId: maintenanceAssetTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetTypes`.
   */
  update(
    entity: AssetMaintenanceAssetTypes<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetTypes<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypes.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypes.maintenanceAssetTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypes`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetTypes<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypes<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!
          }
    );
  }
}
