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
import { AssetMaintenanceWorkOrderLines } from './AssetMaintenanceWorkOrderLines';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderLines} entity.
 */
export class AssetMaintenanceWorkOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkOrderLines<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWorkOrderLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderLines`.
   */
  create(
    entity: AssetMaintenanceWorkOrderLines<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderLines<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWorkOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLines.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLines.workOrderId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceWorkOrderLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceWorkOrderLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkOrderId: workOrderId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderLines`.
   */
  update(
    entity: AssetMaintenanceWorkOrderLines<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderLines<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWorkOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLines`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLines.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLines.workOrderId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceWorkOrderLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLines`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderLines<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLines<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWorkOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!,
            LineNumber: lineNumber!
          }
    );
  }
}
