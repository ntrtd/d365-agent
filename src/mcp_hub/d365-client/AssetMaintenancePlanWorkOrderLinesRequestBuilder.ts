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
import { AssetMaintenancePlanWorkOrderLines } from './AssetMaintenancePlanWorkOrderLines';

/**
 * Request builder class for operations supported on the {@link AssetMaintenancePlanWorkOrderLines} entity.
 */
export class AssetMaintenancePlanWorkOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenancePlanWorkOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenancePlanWorkOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenancePlanWorkOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenancePlanWorkOrderLines<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenancePlanWorkOrderLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenancePlanWorkOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenancePlanWorkOrderLines`.
   */
  create(
    entity: AssetMaintenancePlanWorkOrderLines<T>
  ): CreateRequestBuilder<AssetMaintenancePlanWorkOrderLines<T>, T> {
    return new CreateRequestBuilder<AssetMaintenancePlanWorkOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenancePlanWorkOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenancePlanWorkOrderLines.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenancePlanWorkOrderLines.workOrderId}.
   * @param lineNumber Key property. See {@link AssetMaintenancePlanWorkOrderLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenancePlanWorkOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetMaintenancePlanWorkOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenancePlanWorkOrderLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkOrderId: workOrderId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenancePlanWorkOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenancePlanWorkOrderLines`.
   */
  update(
    entity: AssetMaintenancePlanWorkOrderLines<T>
  ): UpdateRequestBuilder<AssetMaintenancePlanWorkOrderLines<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenancePlanWorkOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenancePlanWorkOrderLines`.
   * @param dataAreaId Key property. See {@link AssetMaintenancePlanWorkOrderLines.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenancePlanWorkOrderLines.workOrderId}.
   * @param lineNumber Key property. See {@link AssetMaintenancePlanWorkOrderLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenancePlanWorkOrderLines`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenancePlanWorkOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenancePlanWorkOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenancePlanWorkOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenancePlanWorkOrderLines<T>
  ): DeleteRequestBuilder<AssetMaintenancePlanWorkOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenancePlanWorkOrderLines<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenancePlanWorkOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenancePlanWorkOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!,
            LineNumber: lineNumber!
          }
    );
  }
}
