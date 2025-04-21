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
import { AssetMaintenanceWorkOrderTablesV2 } from './AssetMaintenanceWorkOrderTablesV2';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderTablesV2} entity.
 */
export class AssetMaintenanceWorkOrderTablesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderTablesV2<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderTablesV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderTablesV2` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkOrderTablesV2<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWorkOrderTablesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderTablesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderTablesV2`.
   */
  create(
    entity: AssetMaintenanceWorkOrderTablesV2<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderTablesV2<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWorkOrderTablesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderTablesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderTablesV2.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderTablesV2.workOrderId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderTablesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderTablesV2<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceWorkOrderTablesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkOrderId: workOrderId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderTablesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderTablesV2`.
   */
  update(
    entity: AssetMaintenanceWorkOrderTablesV2<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderTablesV2<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWorkOrderTablesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderTablesV2`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderTablesV2.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderTablesV2.workOrderId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderTablesV2`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderTablesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderTablesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderTablesV2` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderTablesV2<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderTablesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderTablesV2<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWorkOrderTablesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderTablesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!
          }
    );
  }
}
