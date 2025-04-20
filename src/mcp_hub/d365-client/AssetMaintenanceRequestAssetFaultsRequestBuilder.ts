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
import { AssetMaintenanceRequestAssetFaults } from './AssetMaintenanceRequestAssetFaults';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceRequestAssetFaults} entity.
 */
export class AssetMaintenanceRequestAssetFaultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceRequestAssetFaults<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceRequestAssetFaults` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceRequestAssetFaults` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceRequestAssetFaults<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceRequestAssetFaults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceRequestAssetFaults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceRequestAssetFaults`.
   */
  create(
    entity: AssetMaintenanceRequestAssetFaults<T>
  ): CreateRequestBuilder<AssetMaintenanceRequestAssetFaults<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceRequestAssetFaults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceRequestAssetFaults` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestAssetFaults.dataAreaId}.
   * @param faultId Key property. See {@link AssetMaintenanceRequestAssetFaults.faultId}.
   * @param requestId Key property. See {@link AssetMaintenanceRequestAssetFaults.requestId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceRequestAssetFaults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    faultId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceRequestAssetFaults<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceRequestAssetFaults<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FaultID: faultId,
        RequestId: requestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceRequestAssetFaults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceRequestAssetFaults`.
   */
  update(
    entity: AssetMaintenanceRequestAssetFaults<T>
  ): UpdateRequestBuilder<AssetMaintenanceRequestAssetFaults<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceRequestAssetFaults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestAssetFaults`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestAssetFaults.dataAreaId}.
   * @param faultId Key property. See {@link AssetMaintenanceRequestAssetFaults.faultId}.
   * @param requestId Key property. See {@link AssetMaintenanceRequestAssetFaults.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestAssetFaults`.
   */
  delete(
    dataAreaId: string,
    faultId: string,
    requestId: string
  ): DeleteRequestBuilder<AssetMaintenanceRequestAssetFaults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestAssetFaults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestAssetFaults` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceRequestAssetFaults<T>
  ): DeleteRequestBuilder<AssetMaintenanceRequestAssetFaults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    faultId?: string,
    requestId?: string
  ): DeleteRequestBuilder<AssetMaintenanceRequestAssetFaults<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceRequestAssetFaults<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceRequestAssetFaults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FaultID: faultId!,
            RequestId: requestId!
          }
    );
  }
}
