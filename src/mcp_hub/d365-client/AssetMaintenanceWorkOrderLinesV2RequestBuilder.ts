/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { AssetMaintenanceWorkOrderLinesV2 } from './AssetMaintenanceWorkOrderLinesV2';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderLinesV2} entity.
 */
export class AssetMaintenanceWorkOrderLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkOrderLinesV2<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWorkOrderLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderLinesV2`.
   */
  create(
    entity: AssetMaintenanceWorkOrderLinesV2<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderLinesV2<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWorkOrderLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLinesV2.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLinesV2.workOrderId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceWorkOrderLinesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceWorkOrderLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkOrderId: workOrderId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderLinesV2`.
   */
  update(
    entity: AssetMaintenanceWorkOrderLinesV2<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderLinesV2<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWorkOrderLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLinesV2`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLinesV2.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLinesV2.workOrderId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceWorkOrderLinesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLinesV2`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderLinesV2<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLinesV2<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWorkOrderLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!,
            LineNumber: lineNumber!
          }
    );
  }
}
