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
import { AssetMaintenanceWorkOrderTables } from './AssetMaintenanceWorkOrderTables';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderTables} entity.
 */
export class AssetMaintenanceWorkOrderTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderTables<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderTables` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderTables` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkOrderTables<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWorkOrderTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderTables`.
   */
  create(
    entity: AssetMaintenanceWorkOrderTables<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderTables<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWorkOrderTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderTables.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderTables.workOrderId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderTables<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceWorkOrderTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkOrderId: workOrderId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderTables`.
   */
  update(
    entity: AssetMaintenanceWorkOrderTables<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderTables<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWorkOrderTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderTables`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderTables.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderTables.workOrderId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderTables`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderTables` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderTables<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderTables<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWorkOrderTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!
          }
    );
  }
}
