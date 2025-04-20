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
import { AssetMaintenanceAssetTypeCounterAssociations } from './AssetMaintenanceAssetTypeCounterAssociations';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetTypeCounterAssociations} entity.
 */
export class AssetMaintenanceAssetTypeCounterAssociationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetTypeCounterAssociations<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetTypeCounterAssociations` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetTypeCounterAssociations` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceAssetTypeCounterAssociations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceAssetTypeCounterAssociations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetTypeCounterAssociations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetTypeCounterAssociations`.
   */
  create(
    entity: AssetMaintenanceAssetTypeCounterAssociations<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetTypeCounterAssociations<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceAssetTypeCounterAssociations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetTypeCounterAssociations` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeCounterAssociations.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeCounterAssociations.maintenanceAssetTypeId}.
   * @param maintenanceAssetCounterId Key property. See {@link AssetMaintenanceAssetTypeCounterAssociations.maintenanceAssetCounterId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetTypeCounterAssociations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetCounterId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceAssetTypeCounterAssociations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetTypeCounterAssociations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      MaintenanceAssetCounterId: maintenanceAssetCounterId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetTypeCounterAssociations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetTypeCounterAssociations`.
   */
  update(
    entity: AssetMaintenanceAssetTypeCounterAssociations<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetTypeCounterAssociations<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceAssetTypeCounterAssociations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeCounterAssociations`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeCounterAssociations.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeCounterAssociations.maintenanceAssetTypeId}.
   * @param maintenanceAssetCounterId Key property. See {@link AssetMaintenanceAssetTypeCounterAssociations.maintenanceAssetCounterId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeCounterAssociations`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetTypeId: string,
    maintenanceAssetCounterId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeCounterAssociations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeCounterAssociations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeCounterAssociations` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetTypeCounterAssociations<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeCounterAssociations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetTypeId?: string,
    maintenanceAssetCounterId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeCounterAssociations<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceAssetTypeCounterAssociations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetTypeCounterAssociations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            MaintenanceAssetCounterId: maintenanceAssetCounterId!
          }
    );
  }
}
