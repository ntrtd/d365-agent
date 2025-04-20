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
import { AssetMaintenanceWorkOrderStandardProjectGroups } from './AssetMaintenanceWorkOrderStandardProjectGroups';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderStandardProjectGroups} entity.
 */
export class AssetMaintenanceWorkOrderStandardProjectGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderStandardProjectGroups<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderStandardProjectGroups` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderStandardProjectGroups` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderStandardProjectGroups<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderStandardProjectGroups<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderStandardProjectGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderStandardProjectGroups`.
   */
  create(
    entity: AssetMaintenanceWorkOrderStandardProjectGroups<T>
  ): CreateRequestBuilder<
    AssetMaintenanceWorkOrderStandardProjectGroups<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderStandardProjectGroups<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderStandardProjectGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderStandardProjectGroups.dataAreaId}.
   * @param workOrderTypeId Key property. See {@link AssetMaintenanceWorkOrderStandardProjectGroups.workOrderTypeId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceWorkOrderStandardProjectGroups.maintenanceAssetTypeId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceWorkOrderStandardProjectGroups.maintenanceAssetId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderStandardProjectGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderTypeId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceWorkOrderStandardProjectGroups<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderStandardProjectGroups<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkOrderTypeId: workOrderTypeId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      MaintenanceAssetId: maintenanceAssetId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderStandardProjectGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderStandardProjectGroups`.
   */
  update(
    entity: AssetMaintenanceWorkOrderStandardProjectGroups<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceWorkOrderStandardProjectGroups<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderStandardProjectGroups<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderStandardProjectGroups`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderStandardProjectGroups.dataAreaId}.
   * @param workOrderTypeId Key property. See {@link AssetMaintenanceWorkOrderStandardProjectGroups.workOrderTypeId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceWorkOrderStandardProjectGroups.maintenanceAssetTypeId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceWorkOrderStandardProjectGroups.maintenanceAssetId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderStandardProjectGroups`.
   */
  delete(
    dataAreaId: string,
    workOrderTypeId: string,
    maintenanceAssetTypeId: string,
    maintenanceAssetId: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderStandardProjectGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderStandardProjectGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderStandardProjectGroups` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderStandardProjectGroups<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderStandardProjectGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderTypeId?: string,
    maintenanceAssetTypeId?: string,
    maintenanceAssetId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceWorkOrderStandardProjectGroups<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderStandardProjectGroups<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceWorkOrderStandardProjectGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderTypeId: workOrderTypeId!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            MaintenanceAssetId: maintenanceAssetId!
          }
    );
  }
}
