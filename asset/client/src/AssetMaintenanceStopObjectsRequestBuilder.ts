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
import { AssetMaintenanceStopObjects } from './AssetMaintenanceStopObjects';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceStopObjects} entity.
 */
export class AssetMaintenanceStopObjectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceStopObjects<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceStopObjects` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceStopObjects` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceStopObjects<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceStopObjects<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceStopObjects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceStopObjects`.
   */
  create(
    entity: AssetMaintenanceStopObjects<T>
  ): CreateRequestBuilder<AssetMaintenanceStopObjects<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceStopObjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceStopObjects` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceStopObjects.dataAreaId}.
   * @param maintenanceStopId Key property. See {@link AssetMaintenanceStopObjects.maintenanceStopId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceStopObjects.maintenanceAssetId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceStopObjects` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceStopId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceStopObjects<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceStopObjects<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MaintenanceStopId: maintenanceStopId,
        MaintenanceAssetId: maintenanceAssetId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceStopObjects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceStopObjects`.
   */
  update(
    entity: AssetMaintenanceStopObjects<T>
  ): UpdateRequestBuilder<AssetMaintenanceStopObjects<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceStopObjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceStopObjects`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceStopObjects.dataAreaId}.
   * @param maintenanceStopId Key property. See {@link AssetMaintenanceStopObjects.maintenanceStopId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceStopObjects.maintenanceAssetId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceStopObjects`.
   */
  delete(
    dataAreaId: string,
    maintenanceStopId: string,
    maintenanceAssetId: string
  ): DeleteRequestBuilder<AssetMaintenanceStopObjects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceStopObjects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceStopObjects` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceStopObjects<T>
  ): DeleteRequestBuilder<AssetMaintenanceStopObjects<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceStopId?: string,
    maintenanceAssetId?: string
  ): DeleteRequestBuilder<AssetMaintenanceStopObjects<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceStopObjects<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceStopObjects
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceStopId: maintenanceStopId!,
            MaintenanceAssetId: maintenanceAssetId!
          }
    );
  }
}
