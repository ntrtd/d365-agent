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
import { AssetMaintenanceWorkOrderTypes } from './AssetMaintenanceWorkOrderTypes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderTypes} entity.
 */
export class AssetMaintenanceWorkOrderTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderTypes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderTypes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkOrderTypes<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWorkOrderTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderTypes`.
   */
  create(
    entity: AssetMaintenanceWorkOrderTypes<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderTypes<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWorkOrderTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderTypes.dataAreaId}.
   * @param workOrderTypeId Key property. See {@link AssetMaintenanceWorkOrderTypes.workOrderTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderTypes<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceWorkOrderTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkOrderTypeId: workOrderTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderTypes`.
   */
  update(
    entity: AssetMaintenanceWorkOrderTypes<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderTypes<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWorkOrderTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderTypes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderTypes.dataAreaId}.
   * @param workOrderTypeId Key property. See {@link AssetMaintenanceWorkOrderTypes.workOrderTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderTypes`.
   */
  delete(
    dataAreaId: string,
    workOrderTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderTypes<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderTypes<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWorkOrderTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderTypeId: workOrderTypeId!
          }
    );
  }
}
