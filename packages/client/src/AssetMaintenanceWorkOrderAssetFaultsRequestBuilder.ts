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
import { AssetMaintenanceWorkOrderAssetFaults } from './AssetMaintenanceWorkOrderAssetFaults';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderAssetFaults} entity.
 */
export class AssetMaintenanceWorkOrderAssetFaultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderAssetFaults<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderAssetFaults` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderAssetFaults` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkOrderAssetFaults<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWorkOrderAssetFaults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderAssetFaults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderAssetFaults`.
   */
  create(
    entity: AssetMaintenanceWorkOrderAssetFaults<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderAssetFaults<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWorkOrderAssetFaults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderAssetFaults` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderAssetFaults.dataAreaId}.
   * @param faultId Key property. See {@link AssetMaintenanceWorkOrderAssetFaults.faultId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderAssetFaults.workOrderId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderAssetFaults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    faultId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderAssetFaults<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderAssetFaults<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FaultID: faultId,
      WorkOrderId: workOrderId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderAssetFaults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderAssetFaults`.
   */
  update(
    entity: AssetMaintenanceWorkOrderAssetFaults<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderAssetFaults<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWorkOrderAssetFaults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderAssetFaults`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderAssetFaults.dataAreaId}.
   * @param faultId Key property. See {@link AssetMaintenanceWorkOrderAssetFaults.faultId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderAssetFaults.workOrderId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderAssetFaults`.
   */
  delete(
    dataAreaId: string,
    faultId: string,
    workOrderId: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderAssetFaults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderAssetFaults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderAssetFaults` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderAssetFaults<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderAssetFaults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    faultId?: string,
    workOrderId?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderAssetFaults<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWorkOrderAssetFaults<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderAssetFaults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FaultID: faultId!,
            WorkOrderId: workOrderId!
          }
    );
  }
}
