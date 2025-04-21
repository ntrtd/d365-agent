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
import { AssetMaintenanceRoundWorkOrderLines } from './AssetMaintenanceRoundWorkOrderLines';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceRoundWorkOrderLines} entity.
 */
export class AssetMaintenanceRoundWorkOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceRoundWorkOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceRoundWorkOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceRoundWorkOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceRoundWorkOrderLines<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceRoundWorkOrderLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceRoundWorkOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceRoundWorkOrderLines`.
   */
  create(
    entity: AssetMaintenanceRoundWorkOrderLines<T>
  ): CreateRequestBuilder<AssetMaintenanceRoundWorkOrderLines<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceRoundWorkOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceRoundWorkOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRoundWorkOrderLines.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceRoundWorkOrderLines.workOrderId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceRoundWorkOrderLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceRoundWorkOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetMaintenanceRoundWorkOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceRoundWorkOrderLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkOrderId: workOrderId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceRoundWorkOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceRoundWorkOrderLines`.
   */
  update(
    entity: AssetMaintenanceRoundWorkOrderLines<T>
  ): UpdateRequestBuilder<AssetMaintenanceRoundWorkOrderLines<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceRoundWorkOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRoundWorkOrderLines`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRoundWorkOrderLines.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceRoundWorkOrderLines.workOrderId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceRoundWorkOrderLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRoundWorkOrderLines`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceRoundWorkOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRoundWorkOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRoundWorkOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceRoundWorkOrderLines<T>
  ): DeleteRequestBuilder<AssetMaintenanceRoundWorkOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceRoundWorkOrderLines<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceRoundWorkOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceRoundWorkOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!,
            LineNumber: lineNumber!
          }
    );
  }
}
